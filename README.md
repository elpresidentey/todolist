# TODO App (Expo + Convex)

## Setup

1. Install dependencies
```bash
npm i
```

2. Run the app
```bash
npm start
```

3. Android build (APK)
```bash
npx expo run:android --variant release
```

## Environment
Create a `.env` file or set `EXPO_PUBLIC_CONVEX_URL` in your profile.
```
EXPO_PUBLIC_CONVEX_URL=https://<your-convex>.convex.cloud
```

## Convex Setup
1. Install Convex CLI
```bash
npm i -g convex
```
2. Initialize in project root
```bash
npx convex init
```
3. Create functions in `convex/` (queries & mutations for todos):
- `createTodo` (title, description?, dueDate?)
- `listTodos` (ordered, real-time)
- `updateTodo` (toggle completed, edit fields)
- `deleteTodo`

4. Deploy
```bash
npx convex deploy
```
Copy the generated URL into `EXPO_PUBLIC_CONVEX_URL`.

## Features
- Light/Dark theme with smooth transition and persistence
- Pixel-perfect UI based on the provided Figma
- CRUD (local fallback when Convex URL is missing)
- Drag-and-drop reordering
- Search & filter
- Accessibility labels and color contrast

## Structure
```
src/
  App.js
  screens/HomeScreen.js
  theme/
    ThemeProvider.js
    ThemeToggle.js
  todos/
    TodoList.js
  convex/
    client.js
```

## Notes
- When `EXPO_PUBLIC_CONVEX_URL` is set, replace local state in `TodoList.js` with Convex hooks (`useQuery`, `useMutation`) for real-time updates.
- Reanimated requires the babel plugin (already configured).
