import React from 'react'
import { s, styled } from 'styles'

const ButtonContainer = styled.TouchableOpacity(
  s('bg-secondary-500'),
  {
    padding: 20,
    borderRadius: 8,
    width: 120,
  },
  ({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    },
)

const ButtonText = styled.Text(s('text-center fnt-text-bold'), {
  fontSize: 16,
})

export default ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
)
