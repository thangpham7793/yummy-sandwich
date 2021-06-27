import { s, styled } from 'styles'

import React from 'react'

const Container = styled.View(s('bg-base-500'), {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const CentricView = ({ children }) => {
  return <Container>{children}</Container>
}

export default CentricView
