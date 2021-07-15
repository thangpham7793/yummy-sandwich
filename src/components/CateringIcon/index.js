import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default ({ width = 45, height = 40, stroke = '#fff', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 53 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M38.75 20.76V23h-24.5v-2.22c0-1.92 1.223-3.73 3.253-4.53h0l.007-.002c2.482-1 5.535-1.748 8.99-1.748 3.453 0 6.507.748 8.993 1.729 2.037.821 3.257 2.634 3.257 4.531zM3.059 18.091h.002A15.725 15.725 0 018.833 17c.307 0 .609.01.909.03a9.185 9.185 0 00-.805 3.75V23H1v-2.14c0-1.158.759-2.26 2.059-2.769zm46.88 0h.002c1.3.51 2.059 1.611 2.059 2.769V23h-7.938v-2.22a9.185 9.185 0 00-.804-3.75c.3-.02.602-.03.909-.03 2.057 0 4.009.395 5.772 1.09zM12.25 10c0 1.557-1.444 3-3.417 3-1.972 0-3.416-1.443-3.416-3S6.86 7 8.833 7c1.973 0 3.417 1.443 3.417 3zm35.333 0c0 1.557-1.444 3-3.416 3-1.973 0-3.417-1.443-3.417-3s1.444-3 3.417-3c1.972 0 3.416 1.443 3.416 3zM26.5 1c3.21 0 5.625 2.323 5.625 5s-2.416 5-5.625 5c-3.21 0-5.625-2.323-5.625-5s2.416-5 5.625-5z"
        fill="currentColor"
        stroke={stroke}
        strokeWidth={2}
      />
    </Svg>
  )
}