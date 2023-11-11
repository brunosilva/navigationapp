# React Native

Project to Navigation app
Exemplo to use TabNavigation, DrawerNavigation and StackNavigation at same project


## Create a new project

```js
  npx create-expo-app navigationapp --template
```
and you have be choose `blank (Typescript)`


## Start the project

* lib - core
```js
  npm install @react-navigation/native
  npx expo install react-native-screens react-native-safe-area-context

```


* lib - tab navigarion
```js
  npm install @react-navigation/bottom-tabs
```


* lib - drawer navigation
```js
  npm install @react-navigation/drawer
  npx expo install react-native-gesture-handler react-native-reanimated
```


Add plugin dependencies on babel.config.js after `presets`.
```js
  plugins: ['react-native-reanimated/plugin'],
```


Import on App.tsx
```js
  import 'react-native-gesture-handler';
```


* lib - stack navigation
```js
  npm install @react-navigation/native-stack
```