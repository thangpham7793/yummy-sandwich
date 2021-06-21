import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Catering from 'features/catering'
import Home from 'features/home'
import React from 'react'
import AppRoute from '../routes'
import MenuStackNavigator from './MenuStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import { registerScreens } from './utils'

const TabRoutes = {
  [AppRoute.Home]: {
    component: Home,
  },
  [AppRoute.Catering]: {
    component: Catering,
  },
  [AppRoute.Profile]: {
    component: ProfileStackNavigator,
  },
  [AppRoute.Menu]: {
    component: MenuStackNavigator,
  },
}

const Tab = createBottomTabNavigator()
export default function FooterTabNavigator() {
  return (
    <Tab.Navigator initialRouteName={AppRoute.Home}>
      {registerScreens(TabRoutes, Tab)}
    </Tab.Navigator>
  )
}
