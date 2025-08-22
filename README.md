# Teacher Replacement Manager 📚

A comprehensive React Native app built with Expo for managing teacher replacement requests in educational institutions.

## Features

### 🏠 **Requests Tab**
- View all replacement requests with status tracking
- Real-time statistics (Pending, Approved, Rejected)
- Quick overview of recent requests
- Easy access to create new requests

### 👥 **Teachers Tab**
- Browse available replacement teachers
- Filter teachers by subject area
- View teacher ratings and experience
- Check availability status
- Assign teachers to replacement requests

### ➕ **Create Tab**
- Submit new replacement requests
- Form validation and error handling
- Clean and intuitive interface
- Automatic form reset after submission

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab-based navigation
- **UI Components**: Custom themed components with dark/light mode support
- **Styling**: React Native StyleSheet with modern design
- **Icons**: SF Symbols integration
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

3. **Run on your preferred platform**
   - Press `w` for web
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## App Structure

```
app/
├── (tabs)/
│   ├── index.tsx          # Requests overview
│   ├── explore.tsx        # Teacher management
│   ├── create-request.tsx # Create new requests
│   └── _layout.tsx        # Tab navigation
├── components/            # Reusable UI components
├── constants/            # App constants and colors
└── hooks/               # Custom React hooks
```

## Usage

1. **View Requests**: Check the Requests tab to see all replacement requests and their current status
2. **Find Teachers**: Use the Teachers tab to browse available replacement teachers by subject
3. **Create Requests**: Navigate to the Create tab to submit new replacement requests
4. **Assign Teachers**: Tap the "Assign" button on available teachers to assign them to requests

## Development

This app uses Expo's file-based routing system. To add new features:

- Create new screens in the `app/(tabs)/` directory
- Update the tab layout in `_layout.tsx`
- Add new components in the `components/` directory
- Maintain consistent theming using the provided component system

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is part of the TeacherReplacementApp initiative.
#
