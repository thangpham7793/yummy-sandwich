import Page from 'components/Page'
import React from 'react'
import { styled } from 'styles'

const Text = styled.Text({})

export default ({ route }) => {
  const { category } = route.params
  return (
    <Page title="Menu">
      <Text>{category}</Text>
    </Page>
  )
}
