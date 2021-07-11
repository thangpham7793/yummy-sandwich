import React from 'react'
import { storiesOf } from '@storybook/react-native'

import HotDeals from 'components/HotDeals'
import CentricView from '../CentricView'

storiesOf('Button', module)
  .addDecorator(story => <CentricView>{story()}</CentricView>)
  .add('Default', () => <HotDeals />)
