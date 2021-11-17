import React from "react";
import codePush from "react-native-code-push";
import Router from "./Utilities/Routers/BottomNav";

function App() {
  return <Router />;
}

MyApp = codePush({
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
})(App);

export default MyApp;
