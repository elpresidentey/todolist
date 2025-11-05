#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Todo App APK...\n');

try {
  // Check if Android development environment is set up
  console.log('📋 Checking Android environment...');
  
  // Build the APK
  console.log('🔨 Building release APK...');
  execSync('npx expo run:android --variant release', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  // Find the generated APK
  const apkPath = path.join(process.cwd(), 'android', 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk');
  
  if (fs.existsSync(apkPath)) {
    console.log('\n✅ APK built successfully!');
    console.log(`📱 APK location: ${apkPath}`);
    console.log('\n📋 Next steps:');
    console.log('1. Test the APK on a physical device');
    console.log('2. Record your demo video');
    console.log('3. Upload to Google Drive');
    console.log('4. Submit your GitHub repository link');
  } else {
    console.log('\n❌ APK not found. Please check the build output above for errors.');
  }
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('1. Make sure Android Studio is installed');
  console.log('2. Set up Android SDK and environment variables');
  console.log('3. Connect an Android device or start an emulator');
  console.log('4. Run: npx expo doctor');
}