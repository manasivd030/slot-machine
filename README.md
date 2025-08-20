# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

🎰 Slot Machine Game (React Native + Expo)

A simple slot machine game built with React Native, Expo, and Tailwind styling (twrnc).
This project started as a prototype on Snack
 and was later migrated into a local Expo project with full GitHub support.

✨ Features

🎨 UI with Tailwind (twrnc) for quick styling

🎰 3x3 Slot Machine grid with animated spins

🪙 Balance & Betting system (increase/decrease bet, track winnings)

🖼️ Custom assets (a1.png … a5.png) for slot symbols

📱 Runs on Web, Android, and iOS with Expo

⚡ Quick prototyping on Snack, easy scaling with Expo CLI

🚀 Getting Started
1. Run in Snack

Open the project in Snack to try it instantly:
👉 Open in Snack
 (insert your Snack link here)

Write code directly in the browser.

Add dependencies in the Snack editor.

Upload assets via the Assets panel.

Preview live on Web, Android, iOS tabs.

2. Run Locally with Expo CLI

Clone or download this repo, then:

# Install dependencies
npm install

# Start Expo dev server
npx expo start


Press w to open Web in browser.

Press a to open in Android Emulator.

Press i to open in iOS Simulator (macOS only).

3. Run on a Real Device

Install Expo Go from Google Play
 or App Store
.

Run npx expo start → scan the QR code in Expo Go.

App loads instantly on your phone (with hot reload).

📂 Project Structure
/assets
  ├── a1.png
  ├── a2.png
  ├── a3.png
  ├── a4.png
  └── a5.png
App.js
package.json
README.md


App.js → main slot machine game logic.

assets/ → images for slot symbols.

📸 Screenshots

Add screenshots from Web/Android/iOS here

🛠️ Built With

React Native

Expo

twrnc (Tailwind in React Native)

📌 Notes

On Web: expo-sharing isn’t supported (PDFs/Sharing will only show file URI).

On Android: ensure image assets are lowercase and <Image> has explicit width + height.

📜 License

This project is open source under the MIT License.