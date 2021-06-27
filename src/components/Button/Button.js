import React from 'react'
import styled from 'styled-components/native'
import { s } from 'styles'

const ButtonContainer = styled.TouchableOpacity(
  {
    padding: 20,
    borderRadius: 8,
    width: 120,
  },
  ({ bgColor }) => ({
    backgroundColor: bgColor,
  })
)

const ButtonText = styled.Text(s('text-center fnt-text-bold'), {
  fontSize: 16,
})

const PressableButton = ({ onPress, bgColor = 'orange', title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
)
export default PressableButton
