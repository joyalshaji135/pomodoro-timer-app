# Pomodoro Timer App 🍅

A beautiful and functional Pomodoro timer application built with React Native and Expo. Stay focused, track your work sessions, and boost productivity with this elegant timer app.

![Pomodoro Timer App](https://img.shields.io/badge/React%20Native-0.74.3-blue)
![Expo](https://img.shields.io/badge/Expo-51.0.0-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)

## ✨ Features

### ⏱️ **Core Timer Features**
- **Focus Timer**: 25-minute focus sessions (customizable)
- **Short Breaks**: 5-minute breaks between sessions
- **Long Breaks**: 15-minute breaks after 4 sessions
- **Interval Tracking**: Visual progress through work sessions
- **Task Management**: Track what you're working on

### 🎨 **UI/UX Features**
- **Dark/Light Mode**: Automatic theme switching
- **Beautiful Animations**: Smooth timer transitions
- **Visual Progress**: Circular timer with visual feedback
- **Interval Indicators**: Visual session tracking

### ⚙️ **Customization**
- Adjustable timer durations
- Configurable number of intervals
- Theme preferences
- Task-specific timers

## 📱 Screenshots

<table>
  <tr>
    <th>Splash Screen</th>
    <th>Timer Screen</th>
    <th>Settings</th>
  </tr>
  <tr>
    <td>
      <img src="https://drive.google.com/uc?export=view&id=17rUuVxjfDC40Ns1btnrjh2Ao_LWCyFXI" width="200" />
    </td>
    <td>
      <img src="https://drive.google.com/uc?export=view&id=1yVHdWaHZUsR4AXhUe4Bj8vOhzbx_o0qj" width="200" /><br/>
      <img src="https://drive.google.com/uc?export=view&id=1ut0CeFFBxJSrvGhKsZMQka069kJIVab8" width="200" />
    </td>
    <td>
      <img src="https://drive.google.com/uc?export=view&id=13Ng6eoFpS7YVBlBatfqD8PiG3AbMuisA" width="200" />
    </td>
  </tr>
</table>


## 🚀 Quick Start

### Prerequisites
- Node.js (18.x or higher)
- npm or yarn
- Expo Go app on your mobile device

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/PomodoroTimerApp.git
cd PomodoroTimerApp
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npx expo start
```

4. **Run on your device**
   - Install **Expo Go** from App Store/Play Store
   - Scan the QR code with Expo Go app
   - Make sure your phone and computer are on the same network

## 📁 Project Structure

```
PomodoroTimerApp/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Home/Timer screen
│   │   └── settings.tsx   # Settings screen
│   ├── splash.tsx         # Splash/logo screen
│   └── _layout.tsx        # Root layout
├── assets/                # Images, fonts, icons
├── components/            # Reusable components
│   ├── PomodoroTimer.tsx  # Main timer component
│   ├── TimerControls.tsx  # Timer control buttons
│   ├── TaskInput.tsx      # Task input field
│   ├── IntervalCircles.tsx # Interval visualization
│   ├── themed-text.tsx    # Themed text component
│   └── themed-view.tsx    # Themed view component
├── constants/             # Constants and themes
│   ├── Colors.ts          # Color palette
│   └── Theme.ts           # Theme configuration
├── hooks/                 # Custom React hooks
│   ├── useThemeColor.ts   # Theme hook
│   └── useTimer.ts        # Timer logic hook
└── scripts/              # Build scripts
```

## 🛠️ Building for Production

### Android APK
```bash
# Build development APK
eas build --platform android --profile development

# Build production APK
eas build --platform android --profile production
```

### iOS
```bash
# Build for iOS (requires Apple Developer account)
eas build --platform ios --profile development
```

## 🎯 Usage Guide

### Starting a Pomodoro Session
1. Open the app
2. Enter your task in the input field
3. Tap the play button to start the timer
4. Focus for 25 minutes
5. Take a 5-minute break when timer ends
6. Repeat for 4 sessions, then take a 15-minute break

### Customizing Timer Settings
1. Go to Settings tab
2. Adjust:
   - Focus Time (minutes)
   - Short Break (minutes)
   - Long Break (minutes)
   - Number of intervals
   - Dark/Light mode

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

### Customizing Colors
Edit `constants/Colors.ts` to change the color scheme:
```typescript
export const Colors = {
  light: {
    primary: '#FF6B6B',    // Main accent color
    secondary: '#4ECDC4',  // Secondary color
    background: '#FFFFFF', // Background color
    // ... other colors
  },
  dark: {
    // Dark theme colors
  }
};
```

## 📦 Dependencies

### Core Dependencies
- `expo`: 51.0.0
- `react-native`: 0.74.3
- `react`: 18.2.0
- `expo-router`: File-based navigation
- `@expo/vector-icons`: Icon library

### Development Dependencies
- TypeScript for type safety
- Expo CLI for development
- EAS CLI for building

## 🧪 Testing

### Running Tests
```bash
# Run unit tests
npm test

# Run with coverage
npm test -- --coverage
```

### Testing on Different Devices
- **Android**: Use Expo Go or build APK
- **iOS**: Use Expo Go (requires macOS for simulator)
- **Web**: Run `npx expo start --web`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Add comments for complex logic

## 🐛 Troubleshooting

### Common Issues

**Issue**: App won't load on phone
**Solution**: 
- Ensure phone and computer are on same Wi-Fi
- Use `npx expo start --tunnel` for network issues
- Clear cache: `npx expo start --clear`

**Issue**: Build fails
**Solution**:
- Update dependencies: `npx expo upgrade`
- Check for missing packages: `npm install`
- Clear build cache

**Issue**: Icons not showing
**Solution**:
- Ensure `@expo/vector-icons` is installed
- Check icon names in the documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Pomodoro Technique](https://francescocirillo.com/pages/pomodoro-technique) by Francesco Cirillo
- [Expo](https://expo.dev/) for the amazing development platform
- [React Native](https://reactnative.dev/) for cross-platform development
- [@expo/vector-icons](https://icons.expo.fyi/) for beautiful icons

## 📞 Support

For support, email joyaldeveloper2001@gmail.com or create an issue in the GitHub repository.

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Basic Pomodoro timer functionality
- Dark/Light theme support
- Customizable timer settings
- Task tracking

### Version 1.1.0 (Planned)
- [ ] Statistics tracking
- [ ] Sound notifications
- [ ] Background timer support
- [ ] Task history
- [ ] Export statistics

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/PomodoroTimerApp&type=Date)](https://star-history.com/#yourusername/PomodoroTimerApp&Date)

---

Made with ❤️ by [Joyal Shaji] • [GitHub](https://github.com/joyalshaji135) • [Twitter](https://twitter.com/yourusername)

**Stay focused, stay productive!** 🍅

---

<div align="center">

### Built with

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Support

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/yourusername)

</div>

## 📱 Download

[![Download on Google Play](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://expo.dev/accounts/joyaldev2001/projects/PomodoroTimer/builds/4411c9b8-fda5-476a-ad94-9affa560f6b5)

*Links will be available after publishing to app stores*

---

**Happy Coding!** 👨‍💻👩‍💻