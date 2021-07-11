import React from 'react'
import { s, styled } from 'styles'

const Container = styled.View(s('h-80'))
const Text = styled.Text(s('text-white fnt-title-semibold fs-13 pl-6'))

export default () => (
  <Container>
    <Text>Hot Deals</Text>
  </Container>
)
