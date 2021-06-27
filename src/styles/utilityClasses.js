import { split, map, pipe, prop, tap, mergeAll, __, includes } from 'ramda'

const fonts = {
  HalantBold: 'Halant-Bold',
  HalantSemiBold: 'Halant-SemiBold',
  HennyPennyRegular: 'Henny-Penny-Regular',
  NunitoExtraBold: 'Nunito-ExtraBold',
  NunitoBold: 'Nunito-Bold',
  NunitoSemiBold: 'Nunito-SemiBold',
  NunitoRegular: 'Nunito-Regular',
  NunitoLight: 'Nunito-Light',
}

const utilitiyClasses = {
  'fnt-title-bold': {
    fontFamily: fonts.HalantBold,
  },
  'fnt-title-semibold': {
    fontFamily: fonts.HalantSemiBold,
  },
  'fnt-screen-title': {
    fontFamily: fonts.HennyPennyRegular,
  },
  'fnt-text-light': {
    fontFamily: fonts.NunitoLight,
  },
  'fnt-text-reg': {
    fontFamily: fonts.NunitoRegular,
  },
  'fnt-text-semibold': {
    fontFamily: fonts.NunitoSemiBold,
  },
  'fnt-text-bold': {
    fontFamily: fonts.NunitoBold,
  },
  'fnt-text-extra-bold': {
    fontFamily: fonts.NunitoExtraBold,
  },
  'text-center': {
    textAlign: 'center',
  },
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
    mergeAll
  )(classes)
}

export { s }
