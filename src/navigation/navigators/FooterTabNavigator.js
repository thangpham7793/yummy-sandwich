import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Catering from 'features/catering'
import Home from 'features/home'
import SchoolLunch from 'features/schoolLunch'
import React from 'react'
import AppRoute from '../routes'
import MenuStackNavigator from './MenuStackNavigator'
import { registerScreens } from './utils'

const TabRoutes = {
  [AppRoute.Home]: {
    component: Home,
  },
  [AppRoute.Catering]: {
    component: Catering,
  },
  [AppRoute.SchoolLunch]: {
    component: SchoolLunch,
  },
  [AppRoute.Menu]: {
    component: MenuStackNavigator,
  },
}

const Tab = createBottomTabNavigator()
export default () => {
  return (
    <Tab.Navigator initialRouteName={AppRoute.Home}>
      {registerScreens(TabRoutes, Tab)}
    </Tab.Navigator>
  )
}
