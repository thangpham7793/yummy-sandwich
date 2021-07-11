import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

export default ({ width = 60, height = 60, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="-1 0 51 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h50.357v73.987H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00777 0 0 .005 -.298 0)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={200}
          height={200}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}
