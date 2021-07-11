import React from 'react'
import { s, styled } from 'styles'

const Container = styled.ScrollView(s('flex'))

export default ({ children, ...props }) => (
  <Container
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    {...props}>
    {children}
  </Container>
)
