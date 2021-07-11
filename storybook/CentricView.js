import { s, styled } from 'styles'

import React from 'react'

const Container = styled.View(s('bg-base-500'), {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

export default ({ children }) => {
  return <Container>{children}</Container>
}
