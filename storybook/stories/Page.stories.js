import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import React from 'react'
import Page from 'components/Page'

storiesOf('Page', module)
  .add('Home', () => <Page title="Yummy" isHome />)
  .add('Title Only', () => <Page title="Delivery" titleOnly />)
  .add('Other Pages', () => (
    <Page
      title="Menu"
      goBack={action('go back')}
      goToAccount={action('go to account')}
    />
  ))
  .add('Back Arrow & Title', () => (
    <Page title="Yummy" goBack={action('go back')} showUserAccount={false} />
  ))
