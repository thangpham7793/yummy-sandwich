import React from 'react'
import Page from 'components/Page'
import CategoryCarousel from 'components/CategoryCarousel'
import { s, styled } from 'styles'
import HotDeals from 'components/HotDeals'

const Divider = styled.View(s('flex-1 show-box border-secondary-100 mr-6 ml-6'))
export default () => {
  return (
    <Page isHome title="Yummy">
      <HotDeals />
      <Divider style={s('mb-6')} />
      <CategoryCarousel />
      <Divider style={s('mt-6')} />
    </Page>
  )
}
