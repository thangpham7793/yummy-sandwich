import { s, makeColorUtilities } from './utilityClasses'

describe('Styles', () => {
  describe('s', () => {
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

  describe('makeColorUtilities', () => {
    it('Should create a color object for all native props', () => {
      const colors = {
        'green-500': '#45ff7b',
      }

      const expected = {
        'text-green-500': {
          color: colors['green-500'],
        },
        'bg-green-500': {
          backgroundColor: colors['green-500'],
        },
        'border-green-500': {
          borderColor: colors['green-500'],
        },
      }

      expect(makeColorUtilities(colors)).toStrictEqual(expected)
    })
  })
})
