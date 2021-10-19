import React from 'react'
import Navigator from './Utilities/Navigator'
import {Provider} from 'react-redux'
import store from './Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App
