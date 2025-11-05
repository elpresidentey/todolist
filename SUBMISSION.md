# 📤 HNG Todo App - Submission Package

## 📝 Project Overview

**Project Name:** Advanced Todo List with Theme Switcher  
**Framework:** React Native (Expo)  
**Backend:** Convex (Real-time)  
**Features:** Full CRUD, Theme Switching, Search, Filter, Drag & Drop

---

## ✅ Requirements Checklist

### Core Features ✓

- [x] **React Native (Expo)** implementation
- [x] **Theme Switcher**
  - Light and dark themes
  - Smooth transitions with animations
  - Persistent theme preference (AsyncStorage)
  - All UI elements adapt to theme

- [x] **Todo CRUD Operations (Convex)**
  - Create: Add todos with title, description, due date
  - Read: Fetch and display todos in real-time
  - Update: Edit todos and toggle complete/incomplete
  - Delete: Remove todos with confirmation

- [x] **UI/UX Features**
  - Search functionality (title and description)
  - Filter todos (All, Active, Completed)
  - Empty states with helpful messages
  - Loading indicators for async operations
  - Drag and drop to reorder todos

### Technical Requirements ✓

- [x] Pixel-perfect design implementation
- [x] Smooth theme switching
- [x] Real-time updates via Convex
- [x] Error handling for network and validation
- [x] Responsive on all screen sizes
- [x] Clean, modular code structure
- [x] Accessibility compliance

---

## 📦 Submission Contents

### Required Files

1. **APK File**
   - Location: `android/app/build/outputs/apk/release/app-release.apk`
   - Build command: `npm run build:android`

2. **Demo Video**
   - Duration: 3-5 minutes
   - Voice-over explanation required
   - Must demonstrate:
     - Theme switching
     - Creating todos
     - Editing todos
     - Completing/uncompleting todos
     - Deleting todos
     - Search functionality
     - Filter functionality
     - Drag and drop reordering
     - Real-time updates (if possible)

3. **GitHub Repository**
   - Complete source code
   - All configuration files
   - Comprehensive README
   - Setup instructions

4. **Google Drive Link**
   - Contains: APK + Demo Video
   - Public access enabled
   - Organized folder structure

---

## 🎥 Demo Video Script

### Introduction (30 seconds)
```
"Hello! This is my submission for the HNG Advanced Todo List challenge.
I've built a fully functional React Native app with Expo, featuring
real-time backend integration using Convex, theme switching, and 
advanced todo management capabilities."
```

### Feature Demonstration (3-4 minutes)

**1. Theme Switching (30 seconds)**
```
"First, let me show you the theme switcher. Notice how smoothly 
the app transitions between light and dark modes. The theme 
preference is saved using AsyncStorage, so it persists across 
app restarts."
[Demo: Toggle theme multiple times, restart app]
```

**2. Creating Todos (45 seconds)**
```
"Let me create a new todo. I can tap the floating action button
to open the add todo modal. I can enter a title, add an optional
description, and set a due date using the quick date picker.
[Demo: Create 2-3 todos with different properties]
```

**3. Editing Todos (30 seconds)**
```
"To edit a todo, I simply tap on it. This opens the edit modal
where I can modify any field. Changes are saved in real-time 
to the Convex backend."
[Demo: Edit a todo, change title and due date]
```

**4. Completing Todos (30 seconds)**
```
"I can mark todos as complete by tapping the checkbox icon.
Notice how completed todos are visually distinguished with
a strikethrough effect and muted color."
[Demo: Complete and uncomplete several todos]
```

**5. Search & Filter (45 seconds)**
```
"The app includes powerful search functionality. I can tap the
search icon to search through both titles and descriptions.
I can also filter todos by All, Active, or Completed status.
The filters work seamlessly with the search feature."
[Demo: Search for specific terms, apply different filters]
```

**6. Drag & Drop Reordering (30 seconds)**
```
"To reorder todos, I can long-press on any item and drag it
to the desired position. The new order is automatically
saved to the backend."
[Demo: Reorder several todos]
```

**7. Delete & Clear (30 seconds)**
```
"I can delete individual todos by tapping the X button,
or clear all completed todos at once using the Clear 
Completed button at the bottom."
[Demo: Delete one todo, then clear completed todos]
```

### Conclusion (30 seconds)
```
"This app demonstrates all the required features: full CRUD
operations with Convex, smooth theme switching with persistence,
search and filter capabilities, and drag-and-drop functionality.
The code is clean, modular, and follows React Native best practices.
Thank you for reviewing my submission!"
```

---

## 🏗️ Build Instructions

### Prerequisites
```bash
# Ensure all dependencies are installed
npm install

# Verify Convex is configured
npx convex dev
```

### Build APK

**Option 1: Local Build**
```bash
# Navigate to project directory
cd todo-app

# Build release APK
npm run build:android

# APK location
# android/app/build/outputs/apk/release/app-release.apk
```

**Option 2: EAS Build**
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build
eas build --platform android
```

### Testing Before Submission
```bash
# Install APK on device
adb install android/app/build/outputs/apk/release/app-release.apk

# Or drag and drop to emulator
```

---

## 📹 Recording Demo Video

### Tools Recommended
- **Screen Recording:** OBS Studio, QuickTime (Mac), Xbox Game Bar (Windows)
- **Mic Recording:** Built-in microphone or external mic
- **Video Editing:** DaVinci Resolve, iMovie, or Adobe Premiere

### Recording Checklist
- [ ] Good lighting for device screen
- [ ] Clear audio without background noise
- [ ] Smooth demonstration without rushing
- [ ] Show all features as per script
- [ ] Device in portrait mode
- [ ] No personal information visible
- [ ] Video length: 3-5 minutes
- [ ] Format: MP4 (H.264)
- [ ] Resolution: 1080p minimum

---

## 📁 Google Drive Organization

### Folder Structure
```
HNG-Todo-App-Submission/
├── app-release.apk
├── demo-video.mp4
├── README.txt
└── screenshots/ (optional)
    ├── light-mode.png
    └── dark-mode.png
```

### README.txt Content
```
HNG Todo App Submission
=======================

Developer: [Your Name]
Date: [Submission Date]
Repository: [GitHub URL]

Contents:
- app-release.apk: Production build of the app
- demo-video.mp4: Full feature demonstration with voice-over

Instructions:
1. Install app-release.apk on Android device
2. Watch demo-video.mp4 for feature walkthrough
3. Visit GitHub repository for source code

Features Implemented:
✓ Full CRUD operations with Convex
✓ Theme switching (Light/Dark) with persistence
✓ Search and filter functionality
✓ Drag and drop reordering
✓ Real-time updates
✓ Accessibility compliance
✓ Error handling
✓ Loading states and empty states

Tech Stack:
- React Native (Expo)
- Convex (Backend)
- AsyncStorage (Local persistence)
- React Native Reanimated (Animations)
- React Native Gesture Handler (Drag & Drop)
```

---

## 🔗 Submission Template

### GitHub Repository Description
```
Advanced Todo List with Theme Switcher - HNG Project

A feature-rich React Native (Expo) todo application with real-time 
backend integration using Convex. Includes theme switching, full CRUD 
operations, search, filter, and drag-and-drop functionality.

Features:
• Light & Dark theme with smooth transitions
• Real-time sync with Convex backend
• Create, read, update, delete todos
• Search by title and description
• Filter by status (All, Active, Completed)
• Drag and drop to reorder
• Due date management
• Persistent theme preference
• Accessibility support

Tech Stack: React Native, Expo, Convex, AsyncStorage, 
React Native Reanimated, React Native Gesture Handler
```

### Submission Message Template
```
Hello HNG Team,

I'm submitting my Advanced Todo List application for review.

📱 APK & Demo Video: [Google Drive Link]
💻 GitHub Repository: [Repository URL]

The app includes all required features:
✓ React Native (Expo) implementation
✓ Convex backend integration
✓ Theme switching with persistence
✓ Full CRUD operations
✓ Search and filter
✓ Drag and drop reordering
✓ Real-time updates
✓ Accessibility compliance

The demo video demonstrates all features with voice-over explanation.
Setup instructions and documentation are included in the README.

Thank you for your consideration!

Best regards,
[Your Name]
```

---

## 🧪 Final Testing Checklist

### Before Building APK
- [ ] All features working in development
- [ ] No console errors or warnings
- [ ] Convex backend deployed (not just dev mode)
- [ ] Environment variables configured
- [ ] Fonts loading properly
- [ ] Theme switching smooth
- [ ] All CRUD operations functional
- [ ] Search and filter working
- [ ] Drag and drop working
- [ ] Loading states visible
- [ ] Error handling working

### After Building APK
- [ ] APK installs successfully
- [ ] App opens without crashes
- [ ] All features work in release build
- [ ] Theme persists after restart
- [ ] Real-time updates working
- [ ] Network errors handled gracefully
- [ ] App works offline (with limitations)
- [ ] Performance is smooth
- [ ] No debug indicators visible

### Demo Video
- [ ] All features demonstrated
- [ ] Voice-over clear and professional
- [ ] Video length appropriate (3-5 min)
- [ ] Good video and audio quality
- [ ] No sensitive information visible
- [ ] Follows script/structure
- [ ] Conclusion included

### Submission Package
- [ ] APK file present and working
- [ ] Demo video present and viewable
- [ ] Google Drive link accessible (public)
- [ ] GitHub repository public
- [ ] README comprehensive
- [ ] All code committed and pushed
- [ ] No sensitive data in repository
- [ ] License included (if required)

---

## 🎯 Evaluation Criteria

Your submission will likely be evaluated on:

1. **Functionality (40%)**
   - All features working
   - CRUD operations complete
   - Real-time updates functional
   - No critical bugs

2. **Design & UX (25%)**
   - Clean, modern interface
   - Smooth animations
   - Theme implementation
   - Responsive layout

3. **Code Quality (20%)**
   - Clean, readable code
   - Modular structure
   - Proper error handling
   - Best practices followed

4. **Documentation (10%)**
   - Clear README
   - Setup instructions
   - Code comments
   - API documentation

5. **Demo Video (5%)**
   - Clear demonstration
   - Professional presentation
   - All features shown

---

## 📧 Contact & Support

If you encounter issues during submission:

1. Check SETUP_GUIDE.md for troubleshooting
2. Review README.md for detailed documentation
3. Check GitHub Issues for known problems
4. Contact HNG support team

---

**Good luck with your submission! 🚀**

Remember to test everything thoroughly before submitting!
