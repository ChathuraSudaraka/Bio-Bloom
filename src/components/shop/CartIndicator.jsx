import React from 'react';

const CartIndicator = ({ cart }) => {
  if (cart.length === 0) {
    return null;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
      <span className="font-semibold">
        Cart: {totalItems} items
      </span>
    </div>
  );
};

export default CartIndicator;
