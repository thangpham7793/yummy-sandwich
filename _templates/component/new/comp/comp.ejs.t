---
to: src/components/<%= Name %>/index.js
---
import React from 'react'
import { s, styled } from 'styles'

const Container = styled.View({})
const Text = styled.Text({})

export default () => (
  <Container>
    <Text><%= Name %></Text>
  </Container>
)
