import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Button from 'components/Button'
import CentricView from '../CentricView'

storiesOf('Button', module)
  .addDecorator(story => <CentricView>{story()}</CentricView>)
  .add('Hello World', () => (
    <Button onPress={action('clicked-text')} title="Confirm" />
  ))
