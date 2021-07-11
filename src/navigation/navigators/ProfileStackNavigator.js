import { createStackNavigator } from '@react-navigation/stack'
import Profile from 'features/profile'
import React from 'react'
import AppRoute from '../routes'
import { registerScreens } from './utils'

const ProfileStackScreens = {
  [AppRoute.Profile]: {
    component: Profile,
  },
}

const ProfileStack = createStackNavigator()
export default () => {
  return (
    <ProfileStack.Navigator
      headerMode="screen"
      initialRouteName={AppRoute.Profile}>
      {registerScreens(ProfileStackScreens, ProfileStack)}
    </ProfileStack.Navigator>
  )
}
