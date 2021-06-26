import React from 'react'
import 'react-native-gesture-handler'
import AppNavigationContainer from './navigation/AppNavigationContainer'

import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { name as appName } from '../app.json'

const App = () => {
  return <AppNavigationContainer />
}

AppRegistry.registerComponent(appName, () => App)
export default App
