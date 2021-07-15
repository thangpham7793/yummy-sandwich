import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CateringIcon from 'components/CateringIcon'
import HomeIcon from 'components/HomeIcon'
import MenuIcon from 'components/MenuIcon'
import SchoolLunchIcon from 'components/SchoolLunchIcon'
import Catering from 'features/catering'
import Home from 'features/home'
import SchoolLunch from 'features/schoolLunch'
import React from 'react'
import { s, styled } from 'styles'
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

const lookUpIcons = (route, props) =>
  ({
    [AppRoute.Home]: <HomeIcon {...props} />,
    [AppRoute.Catering]: <CateringIcon {...props} />,
    [AppRoute.SchoolLunch]: <SchoolLunchIcon {...props} />,
    [AppRoute.Menu]: <MenuIcon {...props} />,
  }[route])

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator
      initialRouteName={AppRoute.Home}
      tabBarAccessibilityLabel="Footer Tab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const stroke = focused ? s('text-primary-500').color : '#fff'

          return lookUpIcons(route.name, { stroke })
        },
      })}
      tabBarOptions={{
        activeTintColor: s('text-primary-500').color,
        inactiveTintColor: s('text-white').color,
        activeBackgroundColor: s('bg-base-500'),
        tabStyle: s('bg-base-500 pt-1 pb-1'),
        style: s('h-16'),
      }}>
      {registerScreens(TabRoutes, Tab)}
    </Tab.Navigator>
  )
}
