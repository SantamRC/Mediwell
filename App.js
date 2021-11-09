import React, { useEffect } from "react";
import codePush from "react-native-code-push";
import Router from './Utilities/Router'

// let codePushOptions = { 
  
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.IMMEDIATE 
// };

function App() {
  // useEffect(() => {
  //   codePush.sync(
  //     { installMode: codePush.InstallMode.IMMEDIATE },
  //     syncWithCodePush,
  //     null
  //   );
  // });

  // const syncWithCodePush = (status) => {
  //   console.log(status);
  // };

  return (
    <Router />
  );
}


//export default codePush(codePushOptions)(App);
MyApp = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);
export default MyApp;