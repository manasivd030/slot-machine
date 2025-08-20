# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

# 🎰 Slot Machine Game (React Native + Expo)

This is a simple slot machine game built using React Native, Expo, and Tailwind styling (twrnc).
The project was first created on Snack (https://snack.expo.dev) and later migrated to a local Expo CLI project.

## ✨ Features
- 🎰 Slot machine grid (3x3) with animated spins
- 🪙 Balance and betting system (increase/decrease bet, track winnings)
- 🖼️ Custom image assets (a1.png to a5.png) used as slot symbols
- 📱 Works on Web, Android, and iOS using Expo
- ⚡ Quick prototyping on Snack and local development with Expo CLI

## 🚀 Getting Started

### ▶️ Run in Snack
You can open this project in Snack to test it online:  
(Add your Snack link here)

### 💻 Run Locally
1. Clone or download this repository  

2. Install dependencies  

3. Start the Expo development server  

4. Press `w` to run in the browser, `a` for Android emulator, or `i` for iOS simulator  

### 📱 Run on Device
1. Install the Expo Go app from Play Store or App Store  
2. Run `npx expo start` and scan the QR code with Expo Go  
3. The app will run instantly on your device  

## 📂 Project Structure
/assets  
a1.png  
a2.png  
a3.png  
a4.png  
a5.png  
App.js  
package.json  
README.md  

- `App.js` contains the main game logic  
- `assets/` contains images used for slot symbols  

## 🖼️ Slot Icons
![a1](./assets/a1.png)  
![a2](./assets/a2.png)  
![a3](./assets/a3.png)  
![a4](./assets/a4.png)  
![a5](./assets/a5.png)  

## 🛠️ Built With
- ⚛️ [React Native](https://reactnative.dev/)  
- 📦 [Expo](https://expo.dev/)  
- 🎨 [twrnc (Tailwind for React Native)](https://github.com/jaredh159/tailwind-react-native-classnames)  

## 📝 Notes
- On Web, `expo-sharing` is not supported, so sharing PDF will only show the file URI  
- On Android, make sure asset file names are lowercase and images have explicit width and height set  
