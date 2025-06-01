import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load cart items from Supabase when user logs in
  useEffect(() => {
    if (user) {
      loadCartItems();
    } else {
      // Load from localStorage for guest users
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [user]);

  // Save to localStorage for guest users
  useEffect(() => {
    if (!user) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const loadCartItems = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          *,
          products (
            id,
            name,
            price,
            condition,
            images
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;

      // Transform data to match expected format
      const transformedItems = data.map(item => ({
        id: item.product_id,
        name: item.products.name,
        price: item.products.price,
        quantity: item.quantity,
        condition: item.products.condition,
        image: item.products.images?.[0] || '/image/placeholder-product.svg'
      }));

      setCartItems(transformedItems);
    } catch (error) {
      console.error('Error loading cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    try {
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (user) {
        // Add to Supabase for authenticated users
        if (existingItem) {
          // Update quantity
          const { error } = await supabase
            .from('cart_items')
            .update({ quantity: existingItem.quantity + 1 })
            .eq('user_id', user.id)
            .eq('product_id', product.id);

          if (error) throw error;
        } else {
          // Add new item
          const { error } = await supabase
            .from('cart_items')
            .insert([
              {
                user_id: user.id,
                product_id: product.id,
                quantity: 1
              }
            ]);

          if (error) throw error;
        }
        
        // Reload cart items
        await loadCartItems();
      } else {
        // Update local state for guest users
        if (existingItem) {
          setCartItems(cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (user) {
        // Remove from Supabase
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId);

        if (error) throw error;
        
        // Reload cart items
        await loadCartItems();
      } else {
        // Update local state for guest users
        setCartItems(cartItems.filter(item => item.id !== productId));
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity === 0) {
      await removeFromCart(productId);
      return;
    }

    try {
      if (user) {
        // Update in Supabase
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: newQuantity })
          .eq('user_id', user.id)
          .eq('product_id', productId);

        if (error) throw error;
        
        // Reload cart items
        await loadCartItems();
      } else {
        // Update local state for guest users
        setCartItems(cartItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        ));
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const clearCart = async () => {
    try {
      if (user) {
        // Clear from Supabase
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id);

        if (error) throw error;
      }
      
      // Clear local state
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
