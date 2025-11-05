@echo off
echo 🚀 Building Todo App APK...
echo.

REM Check if Android Studio is installed
if not exist "%LOCALAPPDATA%\Android\Sdk" (
    echo ❌ Android SDK not found at %LOCALAPPDATA%\Android\Sdk
    echo.
    echo Please install Android Studio first:
    echo https://developer.android.com/studio
    echo.
    echo Or use EAS Build instead:
    echo npm install -g @expo/eas-cli
    echo eas login
    echo eas build --platform android --profile preview
    pause
    exit /b 1
)

REM Set Android environment variables
set ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools

echo ✅ Android SDK found
echo 🔨 Building release APK...
echo.

REM Build the APK
npx expo run:android --variant release

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ APK built successfully!
    echo 📱 Check: android\app\build\outputs\apk\release\app-release.apk
    echo.
    echo 📋 Next steps:
    echo 1. Install APK on your phone
    echo 2. Record demo video
    echo 3. Submit to Google Drive
) else (
    echo.
    echo ❌ Build failed. Try EAS Build instead:
    echo npm install -g @expo/eas-cli
    echo eas build --platform android --profile preview
)

pause