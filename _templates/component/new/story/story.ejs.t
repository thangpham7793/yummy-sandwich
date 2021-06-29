---
to: storybook/stories/<%= Name %>.stories.js
---

import React from 'react'
import { storiesOf } from '@storybook/react-native'

import <%= Name %> from 'components/<%= Name %>'
import CentricView from '../CentricView'

storiesOf('Button', module)
  .addDecorator(story => <CentricView>{story()}</CentricView>)
  .add('Default', () => <<%= Name %> />)
 