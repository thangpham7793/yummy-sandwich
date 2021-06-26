import styled from 'styled-components/native'

import React from 'react'

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#222',
})

const CentricView = ({ children }) => {
  return <Container>{children}</Container>
}

export default CentricView
