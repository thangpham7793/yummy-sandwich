import DrinkIcon from 'components/DrinkIcon'
import PaniniIcon from 'components/PaniniIcon'
import SaladIcon from 'components/SaladIcon'
import SandwichIcon from 'components/SandwichIcon'
import SnacksIcon from 'components/SnacksIcon'
import WrapsIcon from 'components/WrapsIcon'
import React from 'react'
import { s, styled } from 'styles'

const Container = styled.View(
  s('flex w-24 h-35 bg-white rounded-m box-shadow-l'),
  {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
)

const Text = styled.Text(s('fnt-text-bold fs-7 text-center'))
const props = {
  wraps: { Icon: () => <WrapsIcon {...s('w-20 h-20')} />, name: 'Wraps' },
  sandwiches: {
    Icon: () => <SandwichIcon {...s('w-20 h-20')} />,
    name: 'Sandwiches',
  },
  paninis: {
    Icon: () => <PaniniIcon {...s('w-20 h-20')} />,
    name: 'Paninis',
  },
  salads: { Icon: () => <SaladIcon {...s('w-20 h-20')} />, name: 'Salads' },
  drinks: { Icon: () => <DrinkIcon {...s('w-20 h-20')} />, name: 'Drinks' },
  snacks: { Icon: () => <SnacksIcon {...s('w-20 h-20')} />, name: 'Snacks' },
}

const PrimaryCategoryCard = ({ category }) => {
  const { Icon, name } = props[category]

  return (
    <Container>
      <Icon />
      <Text>{name}</Text>
    </Container>
  )
}
export default PrimaryCategoryCard
