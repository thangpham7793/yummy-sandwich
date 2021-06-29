---
to: src/components/<%= Name %>/<%= Name %>.js
---
import React from 'react'
import { s, styled } from 'styles'

const Container = styled.View({})
const Text = styled.Text({})

const <%= Name %> = () => (
  <Container>
    <Text><%= Name %></Text>
  </Container>
)
export default <%= Name %>
