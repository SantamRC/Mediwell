import React from 'react';
import codePush from 'react-native-code-push';
import Router from './Utilities/Routers/BottomNav';
import {Provider} from './Utilities/Context/Provider';
import Startup from './Screens/Startup/Signin';

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

const MyApp = codePush({
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
})(App);

export default MyApp;
