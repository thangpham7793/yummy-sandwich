import { AppRegistry } from 'react-native'

import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import { name as appName } from '../app.json'
import './rn-addons'
import loadStories from './loadStories'

addDecorator(withKnobs)

configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  theme: {
    backgroundColor: '#ddd',
  },
})

AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
