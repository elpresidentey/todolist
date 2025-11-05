# Vercel Deployment Guide

## Prerequisites
- GitHub repository with your code
- Vercel account (free tier works)
- Convex deployment URL

## Step 1: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration from `vercel.json`

## Step 2: Configure Environment Variables

Before deploying, add these environment variables in Vercel:

1. In your Vercel project settings, go to "Environment Variables"
2. Add the following variables:

```
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
EXPO_PUBLIC_APP_NAME=TODO
```

**Important:** Replace `https://your-deployment.convex.cloud` with your actual Convex deployment URL from the [Convex Dashboard](https://dashboard.convex.dev).

## Step 3: Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be live at `https://your-project.vercel.app`

## Troubleshooting

### Build Fails with "Module not found"
- Make sure all dependencies are in `package.json`
- Try clearing the build cache in Vercel settings

### Blank Page After Deployment
- Check browser console for errors
- Verify `EXPO_PUBLIC_CONVEX_URL` is set correctly
- Ensure Convex deployment is active

### Environment Variables Not Working
- Environment variables must start with `EXPO_PUBLIC_` to be accessible in Expo
- Redeploy after adding/changing environment variables

## Local Testing

Test the web build locally before deploying:

```bash
npm run build:web
npx serve dist
```

This will serve the built files at `http://localhost:3000`

## Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you push to other branches or open PRs

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
