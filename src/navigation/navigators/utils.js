import React from 'react'
import { mapObjIndexed, pipe, values } from 'ramda'

export function registerScreens(screens, Stack) {
  return pipe(
    mapObjIndexed((opts, routeName) => {
      return (
        <Stack.Screen
          key={routeName}
          name={routeName}
          component={opts.component}
        />
      )
    }),
    values,
  )(screens)
}
