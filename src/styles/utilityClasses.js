import {
  values,
  split,
  map,
  pipe,
  prop,
  tap,
  mergeAll,
  __,
  includes,
  mapObjIndexed,
} from 'ramda'

const Fonts = {
  HalantBold: 'Halant-Bold',
  HalantSemiBold: 'Halant-SemiBold',
  HennyPennyRegular: 'Henny-Penny-Regular',
  NunitoExtraBold: 'Nunito-ExtraBold',
  NunitoBold: 'Nunito-Bold',
  NunitoSemiBold: 'Nunito-SemiBold',
  NunitoRegular: 'Nunito-Regular',
  NunitoLight: 'Nunito-Light',
}

const Colors = {
  'primary-500': '#9BBD2E',
  'primary-600': '#8DB600',
  'secondary-100': '#FBF6ED',
  'secondary-300': '#FFE4B6',
  'secondary-500': '#F9AA33',
  'secondary-700': '#FC8D00',
  'base-300': '#C4C4C4',
  'base-500': '#424242',
  white: '#FFFFFF',
  black: '#000000',
  error: '#DC574C',
  success: '#9CCC65',
}

export const makeColorUtilities = (colors = {}) => {
  const utilityToNative = {
    text: 'color',
    bg: 'backgroundColor',
    border: 'borderColor',
  }

  const takeValuesAndMergeAll = pipe(values, mergeAll)

  return pipe(
    mapObjIndexed((hexCode, color) =>
      pipe(
        mapObjIndexed((nativeKey, utility) => ({
          [`${utility}-${color}`]: { [nativeKey]: hexCode },
        })),
        takeValuesAndMergeAll,
      )(utilityToNative),
    ),
    takeValuesAndMergeAll,
  )(colors)
}

const utilitiyClasses = {
  'fnt-title-bold': {
    fontFamily: Fonts.HalantBold,
  },
  'fnt-title-semibold': {
    fontFamily: Fonts.HalantSemiBold,
  },
  'fnt-screen-title': {
    fontFamily: Fonts.HennyPennyRegular,
  },
  'fnt-text-light': {
    fontFamily: Fonts.NunitoLight,
  },
  'fnt-text-reg': {
    fontFamily: Fonts.NunitoRegular,
  },
  'fnt-text-semibold': {
    fontFamily: Fonts.NunitoSemiBold,
  },
  'fnt-text-bold': {
    fontFamily: Fonts.NunitoBold,
  },
  'fnt-text-extra-bold': {
    fontFamily: Fonts.NunitoExtraBold,
  },
  'text-center': {
    textAlign: 'center',
  },
  ...makeColorUtilities(Colors),
}

const validateClassName = classNames => name => {
  if (!includes(name, classNames)) {
    throw new Error(`"${name}" is not a valid utility class name`)
  }
}

const s = classes => {
  const classNames = Object.keys(utilitiyClasses)
  const validateEach = map(tap(validateClassName(classNames)))

  return pipe(
    split(' '),
    validateEach,
    map(prop(__, utilitiyClasses)),
    mergeAll,
  )(classes)
}

export { s }
