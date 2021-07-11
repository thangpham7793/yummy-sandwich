import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CategoryCarousel from 'components/CategoryCarousel'
import CentricView from '../CentricView'

storiesOf('CategoryCarousel', module)
  .addDecorator(story => <CentricView>{story()}</CentricView>)
  .add('Default', () => <CategoryCarousel />)
