# 🌱 Recycle Hub

**Recycle Hub** is an eco-friendly marketplace that connects buyers and sellers of sustainable products, recycled items, and environmentally conscious goods. Built with modern web technologies, it provides a seamless platform for promoting circular economy practices.

## 🌟 Features

### 🔐 Authentication & User Management
- **Email Registration** with email verification
- **Google OAuth** integration with profile completion
- **Secure password reset** functionality
- **Profile management** with comprehensive user data
- **Session management** with automatic redirects

### 🛒 E-commerce Functionality
- **Product browsing** with advanced filtering
- **Shopping cart** with persistent state
- **Product showcase** with detailed views
- **Add items** for selling
- **Search and categorization**

### 🎨 User Experience
- **Responsive design** for all devices
- **Modern UI** with Tailwind CSS
- **Dark/Light mode** support
- **Loading states** and error handling
- **Smooth animations** and transitions

### 🔧 Technical Features
- **Real-time updates** with Supabase
- **Client-side routing** with React Router
- **Form validation** with custom validators
- **Environment-based configuration**
- **Production-ready deployment**

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Relational database
- **Row Level Security** - Database security

### Authentication
- **Supabase Auth** - User authentication
- **Google OAuth** - Social login
- **JWT tokens** - Secure sessions

### Deployment
- **Vercel** - Production hosting
- **GitHub** - Version control
- **Environment Variables** - Secure configuration

## 📁 Project Structure

```
recycle-hub/
├── public/                 # Static assets
│   ├── image/             # Product and UI images
│   └── ...
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── navbar/       # Navigation components
│   │   ├── footer/       # Footer components
│   │   ├── home/         # Homepage sections
│   │   └── ...
│   ├── context/          # React Context providers
│   │   ├── AuthContext.jsx    # Authentication state
│   │   └── CartContext.jsx    # Shopping cart state
│   ├── pages/            # Page components
│   │   ├── home/         # Homepage
│   │   ├── auth/         # Authentication pages
│   │   ├── shop/         # Shopping functionality
│   │   ├── profile/      # User profile
│   │   └── ...
│   ├── lib/              # Utility libraries
│   └── layout/           # Layout components
├── database-schema.sql   # Database structure
├── vercel.json          # Deployment configuration
└── ...
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account**
- **Google OAuth credentials** (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/recycle-hub.git
cd recycle-hub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
1. Create a new Supabase project
2. Run the SQL commands from `database-schema.sql`
3. Enable Row Level Security
4. Configure authentication providers

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Deployment

### Deploy to Vercel

1. **Connect Repository**
   ```bash
   vercel link
   ```

2. **Add Environment Variables**
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables
Ensure these environment variables are set in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🔐 Authentication Flow

### Email Registration
1. User fills registration form
2. Email verification sent
3. User verifies email
4. Profile creation completed
5. Redirect to dashboard

### Google OAuth
1. User clicks "Sign in with Google"
2. Google OAuth flow
3. User redirected to complete profile
4. Additional information collected
5. Profile completion and dashboard access

## 🗄️ Database Schema

The application uses the following main tables:
- **profiles** - User profile information
- **products** - Product listings
- **categories** - Product categories
- **orders** - Purchase orders
- **cart_items** - Shopping cart data

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📱 Features Walkthrough

### Homepage
- Hero section with call-to-action
- Featured products showcase
- How it works section
- Environmental statistics
- Customer testimonials

### Authentication
- Secure login/registration
- Google OAuth integration
- Password reset functionality
- Profile completion for OAuth users

### Shopping
- Product catalog with filtering
- Shopping cart management
- Checkout process
- Order history

### Profile Management
- User information editing
- Order history
- Saved items
- Account settings

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/recycle-hub/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🌍 Environmental Impact

Recycle Hub is committed to promoting sustainable practices:
- Encouraging reuse and recycling
- Reducing waste through circular economy
- Supporting eco-friendly businesses
- Raising environmental awareness

## 🔄 Roadmap

- [ ] Mobile application
- [ ] Advanced search filters
- [ ] Seller dashboard
- [ ] Payment integration
- [ ] Review and rating system
- [ ] Chat functionality
- [ ] Multi-language support

---

**Made with 💚 for a sustainable future**
