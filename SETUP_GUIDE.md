# 📦 Todo App - Complete Setup Guide

This guide will walk you through setting up the Advanced Todo List application from scratch.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Expo CLI** - Will be installed automatically
- **Git** - [Download here](https://git-scm.com/)

### For Testing
- **Android Studio** (for Android emulator) or **Xcode** (for iOS simulator on Mac)
- **Physical device** with Expo Go app installed ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

---

## 🚀 Step 1: Clone and Install

```bash
# Clone the repository
git clone <your-repository-url>
cd todo-app

# Install dependencies
npm install
```

---

## 🎨 Step 2: Set Up Fonts

The app uses the **Inter** font family for a modern, clean look.

### Download Fonts
1. Visit [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
2. Click **"Download family"**
3. Extract the downloaded ZIP file
4. Copy these files from the `static` folder to `assets/fonts/`:
   - `Inter-Regular.ttf`
   - `Inter-Bold.ttf`

### File Structure
```
assets/
└── fonts/
    ├── Inter-Regular.ttf
    ├── Inter-Bold.ttf
    └── README.md
```

> **Note:** The app will work with system fonts if custom fonts are not available, but for the best experience, please install the Inter fonts.

---

## 🔧 Step 3: Set Up Convex Backend

Convex provides real-time backend functionality for the app.

### Create Convex Account
1. Visit [Convex Dashboard](https://dashboard.convex.dev)
2. Sign up or log in
3. Create a new project

### Initialize Convex

```bash
# Install Convex CLI globally (optional)
npm install -g convex

# Login to Convex
npx convex login

# Initialize Convex in development mode
npx convex dev
```

This will:
- Create a Convex project
- Deploy your backend functions
- Generate a deployment URL
- Create a `.env.local` file with your deployment URL

### Manual Configuration (if needed)

If `.env.local` wasn't created automatically:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Convex deployment URL:
   ```env
   EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
   ```

---

## 📱 Step 4: Run the App

### Start Development Server

```bash
npm start
```

This will:
- Start the Expo development server
- Display a QR code
- Show options to run on different platforms

### Run on Physical Device

1. Install **Expo Go** on your device ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))
2. Scan the QR code with your camera (iOS) or Expo Go app (Android)
3. The app will load on your device

### Run on Emulator/Simulator

**Android:**
```bash
npm run android
```

**iOS (Mac only):**
```bash
npm run ios
```

**Web (for testing):**
```bash
npm run web
```

---

## 🏗️ Step 5: Build for Production

### Android APK

#### Option 1: Local Build
```bash
# Build release APK
npm run build:android
```

The APK will be located at: `android/app/build/outputs/apk/release/app-release.apk`

#### Option 2: EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for Android
eas build --platform android
```

### iOS (Mac only)
```bash
# Build for iOS
eas build --platform ios
```

---

## 🧪 Step 6: Testing

### Manual Testing Checklist

- [ ] **Theme Switching**
  - Toggle between light and dark modes
  - Verify theme persists after app restart
  - Check all UI elements adapt to theme

- [ ] **CRUD Operations**
  - Create new todos with title, description, and due date
  - Edit existing todos
  - Mark todos as complete/incomplete
  - Delete individual todos
  - Clear all completed todos

- [ ] **Search & Filter**
  - Search by title and description
  - Filter by All, Active, Completed
  - Verify search works with filters

- [ ] **Drag & Drop**
  - Long press on todo item
  - Drag to reorder
  - Verify order persists after app restart

- [ ] **Real-time Sync**
  - Make changes on one device
  - Verify updates appear on other devices
  - Test offline functionality

- [ ] **Accessibility**
  - Test with screen reader (TalkBack/VoiceOver)
  - Verify proper contrast ratios
  - Check touch targets are adequately sized

---

## 🔍 Troubleshooting

### Convex Connection Issues

**Problem:** App shows "undefined" for todos or loading forever

**Solution:**
```bash
# Check environment variables
echo $EXPO_PUBLIC_CONVEX_URL

# Restart Convex dev server
npx convex dev

# Clear Metro cache
npm start -- --clear
```

### Font Loading Issues

**Problem:** Fonts not loading or app crashes on startup

**Solution:**
1. Verify font files exist in `assets/fonts/`
2. Check font file names match exactly: `Inter-Regular.ttf` and `Inter-Bold.ttf`
3. Clear cache: `npm start -- --clear`

### Metro Bundle Issues

**Problem:** Build fails or JavaScript bundle errors

**Solution:**
```bash
# Clear Metro bundler cache
npx expo start --clear

# Reset npm cache
npm start -- --reset-cache

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Android Build Issues

**Problem:** Build fails or APK doesn't install

**Solution:**
```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Rebuild
npm run build:android
```

### iOS Build Issues (Mac only)

**Problem:** Build fails on iOS

**Solution:**
```bash
# Clean iOS build
cd ios
xcodebuild clean
cd ..

# Reinstall pods
cd ios
pod install
cd ..
```

---

## 📚 Additional Resources

### Documentation
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Convex Documentation](https://docs.convex.dev/)

### Support
- Check existing issues in the repository
- Create a new issue for bugs or feature requests
- Join the community discussions

---

## 🎯 Next Steps

1. **Customize the app:**
   - Modify colors in `src/theme/ThemeProvider.js`
   - Update app name in `app.json`
   - Add your own branding

2. **Deploy backend:**
   ```bash
   npx convex deploy
   ```

3. **Create demo video:**
   - Record app demonstration
   - Include voice-over explanation
   - Show all features working

4. **Prepare submission:**
   - Build APK
   - Upload to Google Drive
   - Share link with README

---

## ✅ Verification Checklist

Before submission, ensure:

- [ ] All dependencies installed successfully
- [ ] Convex backend connected and working
- [ ] Fonts loaded properly
- [ ] App runs on physical device
- [ ] All CRUD operations working
- [ ] Theme switching functional
- [ ] Search and filter working
- [ ] Drag-and-drop functional
- [ ] APK builds successfully
- [ ] Demo video recorded
- [ ] README updated with setup instructions

---

**Good luck with your submission! 🚀**
