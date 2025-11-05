# 🚀 Next Steps - Getting Your App Running

## Current Status: App Code Complete ✅

All features are implemented. Now let's get it running!

---

## Option 1: Quick Test (Recommended for Beginners)

### Step 1: Start Convex Backend

Open a **new terminal** and run:
```bash
cd "c:\Users\hp\HNG Todo list\todo-app"
npx convex dev
```

Keep this terminal open. You should see:
- ✅ "Convex functions deployed"
- ✅ A URL like `https://...convex.cloud`

### Step 2: Start Expo App

Open **another new terminal** and run:
```bash
cd "c:\Users\hp\HNG Todo list\todo-app"
npm start
```

Wait for:
- ✅ Metro bundler to start
- ✅ QR code to appear

### Step 3: Run on Your Phone

**Download Expo Go:**
- **Android:** [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS:** [App Store](https://apps.apple.com/app/expo-go/id982107779)

**IMPORTANT:** You need Expo Go for SDK 51, not the latest version.

If you have SDK 54 Expo Go:
- Uninstall it
- Download Expo Go for SDK 51: https://expo.dev/go?sdkVersion=51

**Scan the QR code** from your terminal

---

## Option 2: Run on Android Emulator

### Prerequisites
- Android Studio installed
- Android emulator running

### Steps
```bash
# Start Convex (if not already)
npx convex dev

# In another terminal
npm run android
```

---

## Option 3: Build APK for Testing

```bash
# Make sure Android SDK is configured
npm run build:android
```

APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## ⚠️ Troubleshooting

### Issue: "Expo Go SDK mismatch"

**Solution 1:** Install correct Expo Go version
```
Visit: https://expo.dev/go?sdkVersion=51&platform=android
```

**Solution 2:** Upgrade project to SDK 54
```bash
npx expo install expo@latest
npx expo install --fix
```

### Issue: "Unable to resolve fonts"

**Solution:** This is now fixed! Fonts are optional.

If you want custom fonts:
1. Download [Inter fonts](https://fonts.google.com/specimen/Inter)
2. Place in `assets/fonts/`
3. Uncomment font lines in `src/App.js` (lines 21-24)

### Issue: "Convex not connecting"

**Solution:**
```bash
# Stop all processes (Ctrl+C)
# Start Convex first
npx convex dev

# Wait for it to deploy
# Then start expo
npm start
```

### Issue: "Metro bundler stuck"

**Solution:**
```bash
# Stop all processes (Ctrl+C)
# Clear cache
npm start -- --clear
```

---

## 🎯 Recommended Testing Flow

### 1. First Run (10 minutes)
- [ ] Start Convex backend
- [ ] Start Expo dev server
- [ ] Open on Expo Go (or emulator)
- [ ] See the app load
- [ ] Try creating a todo

### 2. Feature Testing (20 minutes)
Follow [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md):
- [ ] Toggle theme (light/dark)
- [ ] Create todos
- [ ] Edit todos
- [ ] Complete todos
- [ ] Delete todos
- [ ] Search functionality
- [ ] Filter (All/Active/Completed)
- [ ] Drag and drop

### 3. Build APK (30 minutes)
- [ ] Run `npm run build:android`
- [ ] Install APK on device
- [ ] Test all features in APK
- [ ] Verify performance

### 4. Record Demo (30 minutes)
- [ ] Plan what to show
- [ ] Practice voice-over
- [ ] Record 3-5 minute demo
- [ ] Edit if needed
- [ ] Export as MP4

### 5. Submit (15 minutes)
- [ ] Upload APK to Google Drive
- [ ] Upload video to Google Drive
- [ ] Make folder public
- [ ] Copy link
- [ ] Submit to HNG

---

## 📋 Quick Commands Reference

```bash
# Development
npm install              # Install dependencies
npx convex dev          # Start Convex backend
npm start               # Start Expo dev server
npm start -- --clear    # Start with cache cleared

# Testing
npm run android         # Run on Android emulator
npm run ios             # Run on iOS simulator (Mac)

# Building
npm run build:android   # Build Android APK

# Troubleshooting
rm -rf node_modules     # Remove dependencies
npm install             # Reinstall
npx expo doctor         # Check for issues
```

---

## 🆘 Still Having Issues?

### Check These:

1. **Node.js version**
   ```bash
   node --version
   # Should be v16 or higher
   ```

2. **Dependencies installed**
   ```bash
   npm install
   ```

3. **Convex running**
   - Should see green checkmarks in Convex terminal
   - URL should be in .env file

4. **Port conflicts**
   - Close other Metro bundlers
   - Restart terminals

5. **Permissions**
   - Run as administrator if needed (Windows)

---

## ✅ Success Indicators

You'll know it's working when:

1. **Convex Terminal Shows:**
   ```
   ✓ Convex functions deployed
   ✓ Dashboard: https://dashboard.convex.dev/...
   ```

2. **Expo Terminal Shows:**
   ```
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   › Metro waiting on exp://...
   › Scan the QR code above with Expo Go
   ```

3. **Phone/Emulator Shows:**
   - App loads
   - White/dark header with "T O D O"
   - Input field visible
   - No error messages

---

## 🎉 Once It's Running

Play with these features:
1. ☀️ Toggle theme (top-right corner)
2. ✍️ Create a todo (type in header)
3. 🔍 Search todos (search icon)
4. ✅ Complete a todo (tap checkbox)
5. 🔄 Reorder todos (long press & drag)
6. 🗑️ Delete a todo (tap X)
7. 📊 Filter todos (All/Active/Completed)

---

## 📱 After Testing

1. **If it works:** Proceed to build APK
2. **If issues:** Check troubleshooting above
3. **Ready to submit:** Follow [SUBMISSION.md](SUBMISSION.md)

---

**Remember:** You have comprehensive documentation for every step. Don't hesitate to check:
- QUICKSTART.md - Fast setup
- SETUP_GUIDE.md - Detailed guide
- TESTING_CHECKLIST.md - Testing guide
- SUBMISSION.md - Submission guide

---

**You're almost there! The hard part (coding) is done. Now just test and submit!** 🚀
