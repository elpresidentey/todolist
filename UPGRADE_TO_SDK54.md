# 🔄 Upgrading to Expo SDK 54

Follow these steps to upgrade your project from SDK 51 to SDK 54.

---

## Step 1: Stop All Running Processes

Press `Ctrl+C` in all terminals running:
- Expo dev server
- Convex dev server

---

## Step 2: Run Expo Upgrade Command

```bash
cd "c:\Users\hp\HNG Todo list\todo-app"
npx expo install expo@latest
```

This will:
- Update Expo to SDK 54
- Show you which packages need updating

---

## Step 3: Update All Dependencies

```bash
npx expo install --fix
```

This automatically updates all Expo packages to SDK 54 compatible versions.

---

## Step 4: Update React Native Version

The upgrade command should handle this, but verify in `package.json`:

```json
{
  "dependencies": {
    "expo": "~54.0.0",
    "react": "18.3.1",
    "react-native": "0.76.0"
  }
}
```

---

## Step 5: Clear Cache

```bash
# Clear npm cache
npm cache clean --force

# Clear Metro bundler cache
npx expo start --clear
```

---

## Step 6: Reinstall Node Modules (If Issues)

If you encounter problems:

```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## Step 7: Update app.json (If Needed)

Check `app.json` - SDK version should be updated automatically:

```json
{
  "expo": {
    "name": "TODO",
    "slug": "todo-app",
    "version": "1.0.0",
    "sdkVersion": "54.0.0"
  }
}
```

---

## Step 8: Test the Upgrade

```bash
# Terminal 1: Start Convex
npx convex dev

# Terminal 2: Start Expo
npm start
```

Scan QR code with your SDK 54 Expo Go app!

---

## ⚠️ Potential Issues & Solutions

### Issue: "Module not found"

**Solution:**
```bash
npm install
npx expo install --fix
```

### Issue: "react-native-reanimated incompatible"

**Solution:**
```bash
npx expo install react-native-reanimated@latest
```

### Issue: "Gesture handler error"

**Solution:**
```bash
npx expo install react-native-gesture-handler@latest
```

### Issue: "Convex compatibility"

Convex should work fine with SDK 54. If issues:
```bash
npm install convex@latest
npx convex dev
```

---

## ✅ Verification Checklist

After upgrade:

- [ ] `npm start` runs without errors
- [ ] App loads in Expo Go
- [ ] Theme switching works
- [ ] CRUD operations work
- [ ] Search works
- [ ] Drag and drop works
- [ ] No console errors

---

## 🔙 Rollback (If Needed)

If upgrade causes issues:

1. **Revert package.json:**
   ```bash
   git checkout package.json package-lock.json
   ```

2. **Reinstall:**
   ```bash
   npm install
   ```

3. **Use Expo Go SDK 51:**
   - Uninstall current Expo Go
   - Install SDK 51 version: https://expo.dev/go?sdkVersion=51

---

## 📝 Changes Expected

### package.json Changes:
- `expo`: `~51.0.0` → `~54.0.0`
- `react`: `18.2.0` → `18.3.1`
- `react-native`: `0.74.5` → `0.76.0`
- Other packages updated automatically

### Breaking Changes:
SDK 54 should be mostly compatible. Main changes:
- Updated React Native to 0.76
- Minor API updates (handled automatically)
- Improved performance

---

## 🚀 Quick Upgrade (One Command)

For experienced users:

```bash
npx expo install expo@latest && npx expo install --fix && npm start -- --clear
```

This does steps 2, 3, and 5 in one go.

---

## ⏱️ Expected Time

- **Upgrade process:** 5-10 minutes
- **Testing:** 5 minutes
- **Total:** 15 minutes

---

**After successful upgrade, your app will work with the latest Expo Go app!** 🎉
