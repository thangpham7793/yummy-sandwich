/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import { s, styled } from 'styles'
import UserCircle from 'components/UserCircle'
import PhoneIconBase from 'components/PhoneIcon'
import TranslationIconBase from 'components/TranslationIcon'
import BackArrowIconBase from 'components/BackArrowIcon'
import HorizontalScrollView from 'components/HorizontalScrollView'

const Container = styled.View(
  s('flex flex-1 bg-base-500'),
  ({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    },
)
const PaddingContainer = styled.View(s('mt-28'))

const { width } = Dimensions.get('window')

const HeaderContainer = styled.View(s('bg-primary-500 flex row'), {
  width: '100%',
  bottom: '88%',
  position: 'absolute',
  justifyContent: 'space-around',
  borderRadius: 1000,
  zIndex: 3,
})

const HeaderText = styled.Text(s('fnt-screen-title text-center'), {
  fontSize: 40,
})

const TextContainer = styled.View({})

const IconButton = styled.TouchableOpacity(s('flex row'), {
  justifyContent: 'center',
})

const PhoneIcon = styled(PhoneIconBase)({ marginTop: 10, marginLeft: 20 })
const TranslationIcon = styled(TranslationIconBase)({
  marginTop: 10,
})
const BackArrowIcon = styled(BackArrowIconBase)({ marginTop: 16 })

const Curve = styled.View(s('bg-primary-500'), {
  width: '400%',
  height: width * 4,
  position: 'absolute',
  bottom: '85%',
  right: '-150%',
  borderRadius: 1000,
})

const Page = ({
  bgColor,
  title,
  children,
  isHome = false,
  showUserAccount = true,
  showBackArrow = true,
  goBack = () => {},
  goToAccount = () => {},
  titleOnly = false,
}) => {
  if (titleOnly) {
    return (
      <Container bgColor={bgColor}>
        <PaddingContainer />
        <HeaderContainer>
          <TextContainer>
            <HeaderText style={s('text-center')}>{title}</HeaderText>
          </TextContainer>
        </HeaderContainer>
        <Curve />
        <SafeAreaView>
          <HorizontalScrollView>{children}</HorizontalScrollView>
        </SafeAreaView>
      </Container>
    )
  }

  if (isHome) {
    return (
      <Container bgColor={bgColor}>
        <PaddingContainer />
        <HeaderContainer>
          <IconButton style={{ flex: 0.8 }}>
            <PhoneIcon />
          </IconButton>
          <TextContainer style={{ flex: 2.5, marginRight: 10 }}>
            <HeaderText style={{ textAlign: 'right', paddingRight: 16 }}>
              {title}
            </HeaderText>
          </TextContainer>
          <IconButton>
            <TranslationIcon />
          </IconButton>
          <IconButton onPress={goToAccount} style={{ flex: 0.8 }}>
            <UserCircle />
          </IconButton>
        </HeaderContainer>
        <Curve />
        <SafeAreaView>
          <HorizontalScrollView>{children}</HorizontalScrollView>
        </SafeAreaView>
      </Container>
    )
  }

  if (!showUserAccount) {
    return (
      <Container bgColor={bgColor}>
        <PaddingContainer />
        <HeaderContainer>
          <IconButton onPress={goBack} style={{ flex: 0.5, marginLeft: 24 }}>
            {showBackArrow && <BackArrowIcon />}
          </IconButton>
          <TextContainer style={{ flex: 2, marginLeft: 16 }}>
            <HeaderText>{title}</HeaderText>
          </TextContainer>
          <IconButton onPress={goToAccount} style={{ flex: 0.8 }}>
            {showUserAccount && <UserCircle />}
          </IconButton>
        </HeaderContainer>
        <Curve />
        <SafeAreaView>
          <HorizontalScrollView>{children}</HorizontalScrollView>
        </SafeAreaView>
      </Container>
    )
  }

  return (
    <Container bgColor={bgColor}>
      <PaddingContainer />
      <HeaderContainer>
        <IconButton onPress={goBack}>
          {showBackArrow && <BackArrowIcon />}
        </IconButton>
        <TextContainer>
          <HeaderText>{title}</HeaderText>
        </TextContainer>
        <IconButton onPress={goToAccount}>
          {showUserAccount && <UserCircle />}
        </IconButton>
      </HeaderContainer>
      <Curve />
      <SafeAreaView>
        <HorizontalScrollView>{children}</HorizontalScrollView>
      </SafeAreaView>
    </Container>
  )
}
export default Page
