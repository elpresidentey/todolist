# ✅ Testing Checklist

Complete testing checklist before submission. Test each feature thoroughly.

---

## 🚀 Pre-Test Setup

- [ ] All dependencies installed (`npm install`)
- [ ] Convex backend running (`npx convex dev`)
- [ ] App starts without errors (`npm start`)
- [ ] No console warnings or errors
- [ ] Fonts loaded (or using system fonts)

---

## 🎨 Theme System Tests

### Basic Theme Switching
- [ ] App opens in correct theme (check last saved preference)
- [ ] Theme toggle button visible in header
- [ ] Clicking toggle switches theme
- [ ] Smooth animation during transition (350ms)
- [ ] All UI elements update (background, cards, text)

### Theme Persistence
- [ ] Switch to dark mode
- [ ] Close app completely
- [ ] Reopen app
- [ ] App opens in dark mode
- [ ] Switch to light mode
- [ ] Close and reopen
- [ ] App opens in light mode

### Visual Verification
**Light Mode:**
- [ ] Background: Light gray/white
- [ ] Cards: White with shadows
- [ ] Text: Dark, readable
- [ ] Primary color: Purple/blue
- [ ] Header: Gradient background

**Dark Mode:**
- [ ] Background: Very dark blue/black
- [ ] Cards: Dark with subtle glow
- [ ] Text: Light, readable
- [ ] Primary color: Lighter purple/blue
- [ ] Header: Dark gradient

---

## 📝 CRUD Operations Tests

### Create Todo - Quick Add
- [ ] Type in header input field
- [ ] Text appears in input
- [ ] Preview card appears below header
- [ ] Click preview card
- [ ] Todo added to list
- [ ] Input clears
- [ ] Preview disappears
- [ ] Todo appears at top of list

### Create Todo - Full Form
- [ ] Click floating action button (+)
- [ ] Modal slides up
- [ ] Can enter title
- [ ] Can enter description (optional)
- [ ] Can set due date
- [ ] Quick date buttons work (Today, Tomorrow, Next Week)
- [ ] Can clear due date
- [ ] Cancel button closes modal without saving
- [ ] Save button creates todo
- [ ] New todo appears in list immediately
- [ ] Modal closes after save

### Read Todos
- [ ] All todos display correctly
- [ ] Title shows for each todo
- [ ] Description shows (if present)
- [ ] Due date shows (if present)
- [ ] Checkbox shows completion status
- [ ] Completed todos have strikethrough
- [ ] List updates in real-time
- [ ] Scrolling works smoothly

### Update Todo - Edit
- [ ] Click on any todo
- [ ] Edit modal opens with existing data
- [ ] Can modify title
- [ ] Can modify description
- [ ] Can change due date
- [ ] Save button updates todo
- [ ] Changes appear immediately
- [ ] Modal closes after save

### Update Todo - Toggle Completion
- [ ] Click checkbox on incomplete todo
- [ ] Todo marked as complete immediately
- [ ] Strikethrough applied
- [ ] Color changes to muted
- [ ] Click checkbox on complete todo
- [ ] Todo marked as incomplete
- [ ] Strikethrough removed
- [ ] Color returns to normal

### Delete Todo - Individual
- [ ] Click X button on any todo
- [ ] Todo removed immediately
- [ ] No confirmation dialog (by design)
- [ ] List updates smoothly
- [ ] Other todos remain

### Delete Todo - Bulk
- [ ] Complete several todos
- [ ] "Clear Completed" button appears
- [ ] Click "Clear Completed"
- [ ] Confirmation dialog appears
- [ ] Shows count of todos to delete
- [ ] Click Cancel - nothing deleted
- [ ] Click Delete - all completed removed
- [ ] Only active todos remain

---

## 🔍 Search & Filter Tests

### Search Functionality
- [ ] Click search icon in header
- [ ] Search bar appears
- [ ] Input field has focus
- [ ] Type search term
- [ ] Results update as you type
- [ ] Search finds matches in titles
- [ ] Search finds matches in descriptions
- [ ] Search is case-insensitive
- [ ] Clear button appears when typing
- [ ] Clear button empties search
- [ ] Close search icon visible
- [ ] Closing search returns to normal view

### Search Edge Cases
- [ ] Search with no matches shows empty state
- [ ] Search with special characters works
- [ ] Search with numbers works
- [ ] Search with spaces works
- [ ] Very long search terms handled

### Filter Functionality
- [ ] "All" filter shows all todos (default)
- [ ] "All" filter highlighted by default
- [ ] Click "Active" filter
- [ ] Only incomplete todos shown
- [ ] "Active" filter highlighted
- [ ] Click "Completed" filter
- [ ] Only completed todos shown
- [ ] "Completed" filter highlighted
- [ ] Click "All" to return
- [ ] All todos visible again

### Search + Filter Combination
- [ ] Apply "Active" filter
- [ ] Enter search term
- [ ] Results filtered AND searched
- [ ] Switch to "Completed" filter
- [ ] Search still applied
- [ ] Results update correctly
- [ ] Clear search
- [ ] Filter still active

---

## 🎯 Drag & Drop Tests

### Basic Reordering
- [ ] Long press on any todo
- [ ] Todo scales/lifts slightly
- [ ] Drag todo up or down
- [ ] Other todos shift smoothly
- [ ] Release todo in new position
- [ ] Todo stays in new position
- [ ] Scroll during drag if needed
- [ ] Order persists after release

### Reorder Verification
- [ ] Reorder several todos
- [ ] Note new order
- [ ] Close app
- [ ] Reopen app
- [ ] Order preserved

### Edge Cases
- [ ] Can drag first item
- [ ] Can drag last item
- [ ] Can drag completed items
- [ ] Drag works with filters active
- [ ] Drag works with search active

---

## 🔄 Real-time Sync Tests

### Single Device
- [ ] Create todo
- [ ] Appears immediately
- [ ] Edit todo
- [ ] Updates immediately
- [ ] Complete todo
- [ ] Status updates immediately
- [ ] Delete todo
- [ ] Removed immediately

### Multiple Devices (if possible)
- [ ] Open app on two devices
- [ ] Create todo on device 1
- [ ] Todo appears on device 2
- [ ] Edit on device 2
- [ ] Edit appears on device 1
- [ ] Delete on device 1
- [ ] Removed on device 2

### Offline/Online
- [ ] Turn off internet
- [ ] Try to create todo
- [ ] Error message appears
- [ ] Turn on internet
- [ ] Try again
- [ ] Todo created successfully

---

## 💾 Data Persistence Tests

### App Restart
- [ ] Create several todos
- [ ] Edit some todos
- [ ] Complete some todos
- [ ] Note the current state
- [ ] Force close app
- [ ] Reopen app
- [ ] All todos present
- [ ] All states preserved (completion, order)
- [ ] Theme preserved

### Theme Persistence
- [ ] Set to dark mode
- [ ] Close app
- [ ] Reopen - still dark
- [ ] Set to light mode
- [ ] Close app
- [ ] Reopen - still light

---

## 🎭 UX & UI Tests

### Loading States
- [ ] Fresh install shows loading spinner
- [ ] Todos load within reasonable time
- [ ] Empty state shows when no todos
- [ ] Empty state message appropriate for filter
- [ ] Loading doesn't block entire UI

### Empty States
**No Todos (All filter):**
- [ ] Shows "No todos yet. Create one!"
- [ ] Icon displayed
- [ ] Message centered

**No Active Todos:**
- [ ] Shows "No active todos"
- [ ] Icon displayed

**No Completed Todos:**
- [ ] Shows "No completed todos"
- [ ] Icon displayed

### Animations
- [ ] Theme switch animates smoothly
- [ ] Modal slides up/down
- [ ] Drag and drop smooth (60 FPS)
- [ ] Completion toggle instant
- [ ] No janky animations
- [ ] No layout shifts

### Visual Polish
- [ ] Shadows render correctly
- [ ] Borders crisp
- [ ] Colors consistent
- [ ] Spacing uniform
- [ ] Icons aligned
- [ ] Text readable
- [ ] No visual glitches

---

## ♿ Accessibility Tests

### Screen Reader (VoiceOver/TalkBack)
- [ ] Enable screen reader
- [ ] All buttons announced
- [ ] Todo items announced
- [ ] Status changes announced
- [ ] Hints provided for actions
- [ ] Navigation logical

### Visual Accessibility
- [ ] Text contrast sufficient
- [ ] Colors distinguishable
- [ ] Focus indicators visible
- [ ] Touch targets adequate size (44x44 minimum)
- [ ] No color-only indicators

### Keyboard Navigation (Web)
- [ ] Tab through elements
- [ ] Order logical
- [ ] Enter activates buttons
- [ ] Escape closes modals
- [ ] Focus visible

---

## 📱 Device & Platform Tests

### Screen Sizes
- [ ] Small phone (5 inch)
- [ ] Regular phone (6 inch)
- [ ] Large phone (7 inch)
- [ ] Tablet (10 inch)
- [ ] Content scales appropriately
- [ ] No horizontal scrolling
- [ ] Touch targets remain adequate

### Orientations
- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] Rotation handled smoothly
- [ ] Layout adapts

### Platforms
- [ ] iOS (if available)
- [ ] Android
- [ ] Web browser (for testing)

---

## 🔐 Security & Privacy Tests

### Data Privacy
- [ ] No personal data collected
- [ ] Todos stored securely
- [ ] Theme preference local only
- [ ] No tracking visible

### Network Security
- [ ] Convex uses HTTPS
- [ ] No insecure requests
- [ ] API keys not exposed

---

## 🚀 Performance Tests

### Speed
- [ ] App launches in < 3 seconds
- [ ] Theme switch in < 500ms
- [ ] CRUD operations in < 1 second
- [ ] Search real-time (< 100ms delay)
- [ ] Drag smooth at 60 FPS
- [ ] No lag scrolling long lists

### Memory
- [ ] App doesn't crash with many todos
- [ ] Memory usage stable
- [ ] No memory leaks visible

### Battery
- [ ] App doesn't drain battery excessively
- [ ] Background usage minimal

---

## 🏗️ Build Tests

### Development Build
- [ ] `npm start` works
- [ ] Expo Go loads app
- [ ] Hot reload works
- [ ] No build errors

### Production Build
- [ ] `npm run build:android` succeeds
- [ ] APK file generated
- [ ] APK size reasonable (< 50MB)
- [ ] APK installs on device
- [ ] App opens from APK
- [ ] All features work in release build
- [ ] No debug indicators visible
- [ ] Performance good

---

## 🐛 Error Handling Tests

### Network Errors
- [ ] Turn off internet
- [ ] Try CRUD operation
- [ ] Error message shows
- [ ] User informed clearly
- [ ] App doesn't crash

### Validation Errors
- [ ] Try to save empty title
- [ ] Error message shows
- [ ] Form doesn't submit
- [ ] Validation clear

### Edge Cases
- [ ] Very long todo titles (> 200 chars)
- [ ] Very long descriptions (> 1000 chars)
- [ ] Special characters in titles
- [ ] Emoji in todos
- [ ] Multiple rapid operations
- [ ] All handled gracefully

---

## 📋 Code Quality Tests

### Console
- [ ] No errors in console
- [ ] No warnings in console
- [ ] No deprecation warnings
- [ ] Clean output

### Code
- [ ] ESLint passes (if configured)
- [ ] Prettier formatted (if configured)
- [ ] No TODO comments left
- [ ] No debug code left
- [ ] No commented-out code blocks

---

## 📦 Submission Readiness

### Documentation
- [ ] README.md complete
- [ ] SETUP_GUIDE.md clear
- [ ] SUBMISSION.md ready
- [ ] All instructions tested
- [ ] Links working

### Files
- [ ] APK built
- [ ] APK tested on device
- [ ] Demo video recorded
- [ ] Video has voice-over
- [ ] All features shown in video
- [ ] Google Drive link prepared
- [ ] Drive folder public
- [ ] GitHub repo public (if required)

### Final Checks
- [ ] All features working
- [ ] No known bugs
- [ ] Performance acceptable
- [ ] Design polished
- [ ] Code clean
- [ ] Documentation complete
- [ ] Ready to submit!

---

## 📝 Test Results Template

```
Testing Date: [Date]
Tester: [Name]
Device: [Model]
OS Version: [Version]

✅ PASSED: [Feature/Test]
❌ FAILED: [Feature/Test] - [Issue Description]
⚠️  WARNING: [Feature/Test] - [Minor Issue]

Overall Status: PASS / FAIL
Notes: [Any additional observations]
```

---

## 🎯 Priority Tests

If time is limited, focus on these critical tests:

### P0 - Must Test
1. App launches
2. Create todo
3. Complete todo
4. Delete todo
5. Theme switch
6. APK installs and runs

### P1 - Should Test
7. Edit todo
8. Search todos
9. Filter todos
10. Drag and drop
11. Real-time sync
12. Theme persistence

### P2 - Nice to Test
13. All edge cases
14. Accessibility
15. Performance
16. Multiple devices
17. Error scenarios

---

**Complete this checklist before submitting your project!**

Good luck! 🚀
