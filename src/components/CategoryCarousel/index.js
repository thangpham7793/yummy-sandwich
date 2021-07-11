import PrimaryCategoryCard from 'components/PrimaryCategoryCard'
import React from 'react'
import { s, styled } from 'styles'

const Container = styled.View(s('flex'))

const TextContainer = styled.View(s('mb-3'))
const Text = styled.Text(s('text-white fnt-title-semibold fs-13 pl-6'))

const Carousel = styled.ScrollView(s('flex row h-40'))

export default () => {
  return (
    <Container>
      <TextContainer>
        <Text>Categories</Text>
      </TextContainer>
      <Carousel horizontal showsHorizontalScrollIndicator={false}>
        <PrimaryCategoryCard category="wraps" style={s('ml-6')} />
        <PrimaryCategoryCard category="sandwiches" style={s('ml-8')} />
        <PrimaryCategoryCard category="paninis" style={s('ml-8')} />
        <PrimaryCategoryCard category="salads" style={s('ml-8')} />
        <PrimaryCategoryCard category="drinks" style={s('ml-8')} />
        <PrimaryCategoryCard category="snacks" style={s('ml-8 mr-6')} />
      </Carousel>
    </Container>
  )
}
