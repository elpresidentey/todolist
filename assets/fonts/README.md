# Fonts Directory

This directory contains the custom fonts used in the Todo app.

## Required Fonts

The app uses the **Inter** font family. You need to download and place the following font files in this directory:

- `Inter-Regular.ttf`
- `Inter-Bold.ttf`

## Where to Get the Fonts

### Option 1: Google Fonts
1. Visit [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
2. Click "Download family"
3. Extract the zip file
4. Copy `Inter-Regular.ttf` and `Inter-Bold.ttf` from the `static` folder to this directory

### Option 2: Direct Download
You can also download Inter fonts from:
- [Inter Font Official Website](https://rsms.me/inter/)
- [GitHub Repository](https://github.com/rsms/inter)

## Installation Steps

1. Download the Inter font family
2. Locate the `.ttf` files for Regular and Bold weights
3. Copy them to this `assets/fonts` directory
4. Restart your Expo development server

## Alternative: Use System Fonts

If you prefer not to download custom fonts, you can modify `src/App.js` to remove the font loading logic and the app will use system default fonts.

## Current Status

⚠️ **Fonts are not included in this repository due to licensing.**  
Please download them from the official sources above.
