# UI components
`npm install --save react-native-paper`
`npm install --save react-native-vector-icons`

# Run app on android emulator
`npm run android --active-arch-only`
**OR**
`npx react-native start` (then in another terminal) `npx react-native run-android`

# Run app on a connected android phone (with usb-debugging enabled)
`npx react-native run-android`

# Debugging
* For Build issues:
- Device not found: `adb kill-server`, Wipe data, delete emulator, or cold boot (can't find package)
- Emulator Wont boot up: `gradlew clean` (due to gradle changes)