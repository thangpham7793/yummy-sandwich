import React from 'react'
import { storiesOf } from '@storybook/react-native'

import PrimaryCategoryCard from 'components/PrimaryCategoryCard'
import CentricView from '../CentricView'

storiesOf('PrimaryCategoryCard', module)
  .addDecorator(story => <CentricView>{story()}</CentricView>)
  .add('Wraps', () => <PrimaryCategoryCard category="wraps" />)
  .add('Sandwiches', () => <PrimaryCategoryCard category="sandwiches" />)
  .add('Paninis', () => <PrimaryCategoryCard category="paninis" />)
  .add('Salads', () => <PrimaryCategoryCard category="salads" />)
  .add('Drinks', () => <PrimaryCategoryCard category="drinks" />)
  .add('Snacks', () => <PrimaryCategoryCard category="snacks" />)
