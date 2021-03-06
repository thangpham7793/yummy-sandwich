import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AppRoute from '../routes'
import FooterTabsNavigator from './FooterTabNavigator'
import { registerScreens } from './utils'

const AppStackScreens = {
  [AppRoute.FooterTabs]: {
    component: FooterTabsNavigator,
  },
}

const AppStack = createStackNavigator()
export default () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={AppRoute.Home}>
      {registerScreens(AppStackScreens, AppStack)}
    </AppStack.Navigator>
  )
}
