# 🎯 Advanced Todo List with Theme Switcher

> **HNG Project Submission** - A pixel-perfect Todo List application with theme switching and real-time backend integration using Convex.

Built with React Native (Expo) following modern design principles and accessibility standards.

[![React Native](https://img.shields.io/badge/React%20Native-0.74.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0.0-black.svg)](https://expo.dev/)
[![Convex](https://img.shields.io/badge/Convex-1.14.0-orange.svg)](https://convex.dev/)

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes ⚡
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions 📖
- **[FEATURES.md](FEATURES.md)** - Complete feature documentation ✨
- **[SUBMISSION.md](SUBMISSION.md)** - Submission guidelines & checklist 📤
- **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** - Comprehensive testing guide ✅
- **[PROJECT_COMPLETION_SUMMARY.md](PROJECT_COMPLETION_SUMMARY.md)** - Project overview 🎉

## ✨ Features

### 🎨 Theme Switching
- **Light and Dark Themes**: Seamless switching between light and dark modes
- **Smooth Transitions**: Animated theme transitions with persistent preferences
- **System Integration**: Respects system theme preferences
- **Complete Coverage**: All UI elements adapt to theme changes

### 📝 Advanced Todo Management
- **Full CRUD Operations**: Create, Read, Update, Delete todos with real-time sync
- **Rich Todo Data**: Title, description, and due date support
- **Smart Sorting**: Automatic sorting by completion status, due date, and priority
- **Drag & Drop**: Reorder todos with intuitive drag-and-drop functionality

### 🔍 Enhanced UX Features
- **Smart Search**: Search through titles and descriptions in real-time
- **Advanced Filtering**: Filter by All, Active, or Completed todos
- **Empty States**: Beautiful empty states for different scenarios
- **Loading Indicators**: Smooth loading states for all operations
- **Floating Action Button**: Quick access to create new todos

### 🎯 Real-time Backend (Convex)
- **Live Updates**: Real-time synchronization across devices
- **Offline Support**: Works offline with local state fallback
- **Error Handling**: Robust error handling for network issues
- **Data Persistence**: Automatic data persistence and sync

### ♿ Accessibility
- **Screen Reader Support**: Full VoiceOver/TalkBack compatibility
- **High Contrast**: WCAG compliant color contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic Labels**: Proper accessibility labels and hints

## 🚀 Quick Start

> **Need detailed instructions?** See [QUICKSTART.md](QUICKSTART.md) for a 5-minute setup guide!

### Prerequisites
- Node.js (v16 or higher) - [Download](https://nodejs.org/)
- npm or yarn
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Start Convex backend (in a new terminal)
npx convex dev

# 3. Start the app
npm start
```

**That's it!** Scan the QR code with Expo Go and start using the app.

### Optional: Add Custom Fonts

Download **Inter** fonts from [Google Fonts](https://fonts.google.com/specimen/Inter) and place in `assets/fonts/`:
- `Inter-Regular.ttf`
- `Inter-Bold.ttf`

See [assets/fonts/README.md](assets/fonts/README.md) for details. The app works fine with system fonts if you skip this step.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   └── HomeScreen.js   # Main todo screen
├── todos/              # Todo-related components
│   ├── TodoList.js     # Main todo list component
│   ├── TodoItem.js     # Individual todo item
│   ├── AddTodoModal.js # Add/edit todo modal
│   └── EmptyState.js   # Empty state component
├── theme/              # Theme management
│   ├── ThemeProvider.js # Theme context provider
│   └── ThemeToggle.js  # Theme toggle button
├── convex/             # Convex client setup
│   └── client.js       # Convex client configuration
└── App.js              # Root component

convex/                 # Convex backend functions
├── schema.ts           # Database schema
├── todos.ts            # Todo CRUD operations
└── _generated/         # Auto-generated Convex files
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Convex Configuration (Optional)
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Other configurations
EXPO_PUBLIC_APP_NAME=TODO
```

### Convex Setup

1. **Create a Convex account** at [convex.dev](https://convex.dev)

2. **Initialize your project**
   ```bash
   npx convex dev
   ```

3. **Deploy your functions**
   ```bash
   npx convex deploy
   ```

4. **Update your environment**
   ```bash
   # Add the deployment URL to .env.local
   EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
   ```

## 📱 Build Commands

### Development
```bash
# Start development server
npm start

# Start with cache cleared
npm run start

# Run linting
npm run lint
```

### Production Build
```bash
# Build for production (APK)
npx expo run:android --variant release

# Build for iOS
npx expo run:ios --configuration Release

# Or using EAS Build
eas build --platform android
eas build --platform ios
```

### Testing
```bash
# Run tests (if configured)
npm test

# Run tests in watch mode
npm run test:watch
```

## 🎨 Design System

### Colors
- **Primary**: `#6D5DF6` (Light) / `#7C87FF` (Dark)
- **Background**: `#F6F7FB` (Light) / `#0F1221` (Dark)
- **Card**: `#FFFFFF` (Light) / `#1A1E33` (Dark)
- **Text**: `#1F2340` (Light) / `#E8EAED` (Dark)
- **Muted Text**: `#8B8FA3` (Light) / `#9AA0B4` (Dark)

### Typography
- **Title**: 44px, Weight 800, Letter Spacing 10
- **Body**: 16px, Weight 500
- **Caption**: 14px, Weight 500

### Spacing
- **Base Unit**: 4px
- **Small**: 8px
- **Medium**: 16px
- **Large**: 24px
- **XLarge**: 48px

## 🔒 Security & Privacy

- **Local Storage**: Theme preferences stored locally
- **Data Encryption**: Convex handles data encryption in transit
- **No Personal Data**: App doesn't collect personal information
- **Offline First**: Works without internet connection

## 🐛 Troubleshooting

### Common Issues

1. **Convex Connection Issues**
   ```bash
   # Check your environment variables
   echo $EXPO_PUBLIC_CONVEX_URL
   
   # Restart Convex development server
   npx convex dev
   ```

2. **Metro Bundle Issues**
   ```bash
   # Clear Metro cache
   npx expo start --clear
   
   # Reset npm cache
   npm start -- --reset-cache
   ```

3. **iOS Build Issues**
   ```bash
   # Clean iOS build
   cd ios && xcodebuild clean && cd ..
   
   # Reinstall pods
   cd ios && pod install && cd ..
   ```

4. **Android Build Issues**
   ```bash
   # Clean Android build
   cd android && ./gradlew clean && cd ..
   
   # Reset Android cache
   cd android && ./gradlew cleanBuildCache && cd ..
   ```

## 📚 API Reference

### Convex Functions

#### `listTodos(search?, filter?)`
Retrieves todos with optional search and filtering.

#### `createTodo({ title, description?, dueDate? })`
Creates a new todo item.

#### `updateTodo({ id, title?, description?, dueDate?, completed? })`
Updates an existing todo item.

#### `deleteTodo({ id })`
Deletes a todo item.

#### `reorder({ orderedIds })`
Reorders todos based on provided ID array.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** for the amazing React Native framework
- **Convex Team** for the real-time backend platform
- **React Native Community** for the excellent libraries
- **Design Inspiration** from modern todo applications

## 📞 Support

For support, email support@todoapp.com or create an issue in the repository.

---

**Made with ❤️ using React Native and Convex**