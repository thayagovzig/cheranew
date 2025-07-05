# Chera Home Junction - Authentication Portal

A modern React-based authentication portal for Chera Home Junction, featuring phone OTP verification and dynamic offers display.

**🚀 LIVE IN PRODUCTION** - Currently serving customers at the production environment.

## 🏢 About

Chera Home Junction is a comprehensive home solutions provider offering furniture, electronics, appliances, and home decor. This web application serves as the customer authentication portal with exclusive offers and direct WhatsApp integration.

## ✨ Features

- **Phone OTP Authentication**: Secure login using mobile number verification
- **Auto-scrolling Offers**: Dynamic display of category-wise promotional offers
- **Responsive Design**: Optimized for both desktop and mobile devices
- **WhatsApp Integration**: Direct redirection to WhatsApp chat after successful login
- **Real-time Validation**: Input validation and error handling
- **Tamil Language Support**: Multilingual footer with Tamil text

## 🚀 Technologies Used

- **Frontend**: React 19.1.0 with Vite
- **Styling**: Pure CSS with responsive design
- **Authentication**: REST API integration with OTP verification
- **Build Tool**: Vite for fast development and building
- **Linting**: ESLint with React-specific rules

## 📱 Categories & Offers

- **Home Decor**: ₹2500+ shopping gets ₹500 OFF
- **Home Utilities**: ₹5000+ shopping gets ₹1000 OFF
- **Furnishings**: Flat 10% OFF on ₹1000 & above
- **Furniture**: 10% OFF on ₹25000+, Free Mixer Grinder on ₹50000+
- **Electronics**: Free accessories with TV, Mobile, and Laptop purchases
- **Appliances**: Kitchen appliances discount & free water heater
- **Mattresses**: Free bedsheets and pillows with mattress purchase

## 🌐 Production Environment

### Live Application
- **Production Path**: `/var/www/cheranew/`
- **Server Environment**: Production Linux Server
- **Status**: ✅ Live and Operational

### Production API
- **Authentication Endpoint**: `https://chera.futoflex.com/api/auth/`
- **Environment**: Production
- **Status**: ✅ Active

## 🛠️ Development & Deployment

### Prerequisites for Development
- Node.js (v18 or higher)
- npm or yarn package manager
- Access to production server

### Local Development Setup

1. **Clone from production**
   ```bash
   # On production server
   cd /var/www/cheranew
   git init # if not already a git repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Local preview**
   ```
   http://localhost:5173
   ```

### Production Deployment

**Current Status**: ✅ Deployed and Live

```bash
# Build for production
npm run build

# Production files location
/var/www/cheranew/dist/
```

### Production Updates

To update the live application:

1. **Make changes locally**
2. **Test thoroughly**
3. **Build production version**
   ```bash
   npm run build
   ```
4. **Deploy to production server**
5. **Verify functionality**

## 📁 Production File Structure

```
/var/www/cheranew/
├── dist/                              # Production build files (served)
├── src/
│   ├── components/
│   │   ├── AutoScrollingOffers.jsx    # Dynamic offers display
│   │   ├── AutoScrollingOffers.css    # Offers styling
│   │   ├── PhoneAuth.jsx              # Phone authentication component
│   │   └── autoscrol.jsx              # Additional scroll component
│   ├── assets/
│   │   ├── man_compressed.png         # Hero image
│   │   ├── chera_building_cropped.png # Building background
│   │   ├── chera_logo.jpg             # Company logo
│   │   └── scroll-image.png           # Login form background
│   ├── App.jsx                        # Main application component
│   ├── App.css                        # Global styles
│   ├── main.jsx                       # React entry point
│   ├── index.css                      # Base styles
│   └── firebase.js                    # Firebase configuration
├── public/
├── index.html                         # HTML template
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite configuration
├── eslint.config.js                   # ESLint configuration
├── node_modules/                      # Dependencies (production)
└── README.md                          # This documentation
```

## 🔧 Production API Configuration

### Authentication API (Production)

**Base URL**: `https://chera.futoflex.com`

**Send OTP**
```http
POST /api/auth/send-otp
Content-Type: application/json

{
  "phoneNumber": "+919999999999"
}
```

**Verify OTP**
```http
POST /api/auth/verify-otp
Content-Type: application/json

{
  "phoneNumber": "+919999999999",
  "otp": "123456"
}
```

## 📱 Responsive Design

- **Desktop**: Full layout with hero image, building background, and side offers panel
- **Mobile**: Simplified layout with centered login form and bottom offers display
- **Breakpoints**: 
  - 900px: Medium screens
  - 600px: Mobile devices

## 🎨 Design Features

- **Color Scheme**: Deep blue gradient background (#0a1a4f to #1e3c72)
- **Accent Color**: Bright yellow (#ffe04b) for CTAs and highlights
- **Typography**: Noto Sans Tamil for multilingual support
- **Animations**: Auto-scrolling offers with smooth transitions
- **Visual Elements**: Circular yellow background behind hero image

## 📞 Contact Information

- **Website**: [cherahomejunction.com](https://cherahomejunction.com)
- **Phone**: +91 999 68 999 68
- **WhatsApp**: +91 807 233 1337

## 🔒 Production Security

- ✅ Input validation for phone numbers (10 digits)
- ✅ OTP validation (6 digits)
- ✅ Rate limiting on API calls
- ✅ Secure HTTPS communication
- ✅ No sensitive data storage in localStorage
- ✅ Production API endpoint security
- ✅ CORS configuration for production domain

## 📊 Performance & Monitoring

### Production Metrics
- **Load Time**: Optimized with Vite build
- **Bundle Size**: Minimized for production
- **Mobile Performance**: Responsive design optimized
- **API Response**: Real-time OTP delivery

### Browser Support (Production Tested)
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Production Maintenance

### Monitoring Checklist
- [ ] API endpoint availability
- [ ] OTP delivery functionality
- [ ] WhatsApp redirection
- [ ] Mobile responsiveness
- [ ] Offers display accuracy

### Emergency Contacts
- **Technical Support**: Refer to Chera Home Junction IT team
- **API Issues**: Check `https://chera.futoflex.com` status

## 📄 License

This project is proprietary software owned by Chera Home Junction.

---

**🚀 PRODUCTION DEPLOYMENT** | **Developed for Chera Home Junction** | அனலைன்ஸ் | மின் சாதனங்கள் | வீட்டு உபகரணங்கள் | டைல்ஸ் மற்றும் சானிடரி வேர்

**Last Updated**: Production Environment - Live and Operational
