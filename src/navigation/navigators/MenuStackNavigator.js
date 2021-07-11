import { createStackNavigator } from '@react-navigation/stack'
import Menu from 'features/menu'
import React from 'react'
import AppRoute from '../routes'
import { registerScreens } from './utils'

const MenuStackScreens = {
  [AppRoute.Menu]: {
    component: Menu,
  },
}

const MenuStack = createStackNavigator()
export default () => {
  return (
    <MenuStack.Navigator headerMode="none" initialRouteName={AppRoute.Menu}>
      {registerScreens(MenuStackScreens, MenuStack)}
    </MenuStack.Navigator>
  )
}
