# ⚡ Quick Start Guide

Get up and running with the Todo app in 5 minutes!

## 🚀 Fast Setup

```bash
# 1. Install dependencies
npm install

# 2. Start Convex backend
npx convex dev

# 3. Start the app
npm start
```

That's it! The app will open in Expo Go.

---

## 📱 First Run

### On Physical Device
1. Install **Expo Go** from App Store or Play Store
2. Scan the QR code shown in terminal
3. App loads automatically

### On Emulator
```bash
# Android
npm run android

# iOS (Mac only)
npm run ios
```

---

## 🎨 Optional: Add Custom Fonts

Download **Inter** fonts from [Google Fonts](https://fonts.google.com/specimen/Inter) and place in `assets/fonts/`:
- `Inter-Regular.ttf`
- `Inter-Bold.ttf`

The app works with system fonts if these are missing.

---

## 🔧 Configuration

The app uses the Convex backend URL from `.env`:

```env
EXPO_PUBLIC_CONVEX_URL=https://striking-herring-317.convex.cloud
```

This is already configured. If you want to use your own Convex project:

1. Visit [convex.dev](https://dashboard.convex.dev)
2. Create a new project
3. Run `npx convex dev` in the project folder
4. Update `.env` with your deployment URL

---

## ✨ Try These Features

1. **Theme Toggle** - Tap moon/sun icon in header
2. **Create Todo** - Tap the + button or type in top input
3. **Edit Todo** - Tap any todo to edit
4. **Complete Todo** - Tap checkbox icon
5. **Search** - Tap search icon in header
6. **Reorder** - Long press and drag todos
7. **Delete** - Tap X on any todo

---

## 🏗️ Build APK

```bash
npm run build:android
```

APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

---

## 📚 Full Documentation

- **SETUP_GUIDE.md** - Detailed setup instructions
- **SUBMISSION.md** - Submission guidelines and checklist
- **README.md** - Complete project documentation

---

## 🆘 Quick Troubleshooting

### Convex not connecting?
```bash
npx convex dev
```

### Metro bundler issues?
```bash
npm start -- --clear
```

### Fonts not loading?
The app will use system fonts - this is fine!

---

## ✅ Verification

App is working correctly if you can:
- Toggle between light and dark theme
- Create a new todo
- See it appear in the list immediately
- Edit and delete todos
- Search and filter todos

---

**Need more help?** Check SETUP_GUIDE.md for detailed instructions.
