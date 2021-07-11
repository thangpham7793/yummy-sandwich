import { NavigationContainer } from '@react-navigation/native'

import React from 'react'
import AppStackNavigator from './navigators/AppStackNavigator'

export default () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  )
}
