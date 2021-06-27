import s from './utilityClasses'

describe('Styles: s', () => {
  it('Should aggregate valid util classes into a style object', () => {
    const expected = {
      fontFamily: 'Nunito-Light',
      textAlign: 'center',
    }

    expect(s('fnt-text-light text-center')).toStrictEqual(expected)
  })

  it('Should throw when a util class is invalid', () => {
    expect(() => s('bad-value')).toThrow()
  })
})
