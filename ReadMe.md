# Installation
``` 
npm install
```
# Run on Android Emulator

```
npx react-native run-android
```

# Build apk file for Android
```
keytool -genkey -v -keystore demo.keystore -alias demo -keyalg RSA -keysize 2048 -validity 10000

```
Now Place this demo.keystore file inside android/app folder

```
cd android
./gradlew assembleRelease
```