import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Voice2 = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M7.532,19.043V17.118A8.443,8.443,0,0,1,0,8.783a.962.962,0,0,1,.968-.957.963.963,0,0,1,.969.957,6.563,6.563,0,0,0,13.125,0,.969.969,0,0,1,1.938,0,8.443,8.443,0,0,1-7.531,8.335v1.925a.968.968,0,0,1-1.937,0Zm.793-5.827a4.324,4.324,0,0,1-4.351-4.3V4.3A4.324,4.324,0,0,1,8.325,0h.35a4.345,4.345,0,0,1,4.189,3.131.388.388,0,0,1-.376.493H11.356a.616.616,0,0,0-.62.612h0a.616.616,0,0,0,.62.612H12.4a.618.618,0,1,1,0,1.236H11.356a.613.613,0,1,0,0,1.226H12.4a.618.618,0,1,1,0,1.236H11.356a.612.612,0,1,0,0,1.224h1.077a.387.387,0,0,1,.372.506,4.347,4.347,0,0,1-4.13,2.94Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M4.351,13.217H4.7a4.348,4.348,0,0,0,4.131-2.941.387.387,0,0,0-.372-.505H7.383a.612.612,0,1,1,0-1.225H8.427a.618.618,0,1,0,0-1.236H7.383a.613.613,0,1,1,0-1.225H8.427a.618.618,0,1,0,0-1.236H7.383a.613.613,0,1,1,0-1.225H8.515a.388.388,0,0,0,.376-.493A4.345,4.345,0,0,0,4.7,0h-.35A4.324,4.324,0,0,0,0,4.3V8.92a4.324,4.324,0,0,0,4.351,4.3'
        transform='translate(3.974 0)'
        fill={color}
      />
      <path
        d='M16.031,0a.962.962,0,0,0-.969.957,6.563,6.563,0,0,1-13.125,0A.962.962,0,0,0,.969,0,.962.962,0,0,0,0,.957,8.443,8.443,0,0,0,7.532,9.293v1.925a.969.969,0,0,0,1.937,0V9.293A8.443,8.443,0,0,0,17,.957.962.962,0,0,0,16.031,0'
        transform='translate(0 7.826)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(4 2)'>
      <path
        d='M0,0A7.4,7.4,0,0,0,7.4,7.4a7.4,7.4,0,0,0,7.4-7.4'
        transform='translate(0.714 8.932)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.476,2.81V0'
        transform='translate(7.642 16.336)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.912,11.87H3.66A3.66,3.66,0,0,1,0,8.21V3.66A3.661,3.661,0,0,1,3.66,0h.252a3.66,3.66,0,0,1,3.66,3.66V8.21A3.659,3.659,0,0,1,3.912,11.87Z'
        transform='translate(4.332 0.714)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.476H1.9'
        transform='translate(10.002 4.401)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.476H2.855'
        transform='translate(9.049 7.572)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
    </g>
  )

  const Broken = () => (
    <g transform='translate(4 2)'>
      <path
        d='M7.3,19.28V16.45a.711.711,0,0,1,.7-.72,6.674,6.674,0,0,0,6.593-6.736.7.7,0,1,1,1.408,0,8.116,8.116,0,0,1-7.3,8.138V19.28a.7.7,0,1,1-1.408,0ZM4.455,16.324A8.15,8.15,0,0,1,0,8.994a.712.712,0,0,1,.7-.719.713.713,0,0,1,.7.719A6.718,6.718,0,0,0,5.08,15.036.728.728,0,0,1,5.4,16a.7.7,0,0,1-.633.4A.68.68,0,0,1,4.455,16.324Zm3.42-2.933a4.362,4.362,0,0,1-4.31-4.4V4.4A4.362,4.362,0,0,1,7.875,0h.249a4.362,4.362,0,0,1,4.31,4.4v.509a.711.711,0,0,1-.7.718H9.855a.719.719,0,0,1,0-1.437H11.02a2.933,2.933,0,0,0-2.9-2.754H7.875A2.937,2.937,0,0,0,4.973,4.4V8.987a2.937,2.937,0,0,0,2.9,2.965h.249a2.938,2.938,0,0,0,2.9-2.965V8.824H8.916a.72.72,0,0,1,0-1.439h2.814a.712.712,0,0,1,.7.72v.883a4.362,4.362,0,0,1-4.31,4.4Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(0.75 0.75)'>
      <g transform='translate(-0.714 -0.714)'>
        <path
          d='M0,0A7.4,7.4,0,0,0,7.4,7.4a7.4,7.4,0,0,0,7.4-7.4'
          transform='translate(0.714 8.932)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <path
          d='M.476,2.81V0'
          transform='translate(7.642 16.336)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <path
          d='M3.66,11.87A3.66,3.66,0,0,1,0,8.211V3.66A3.66,3.66,0,0,1,3.66,0h.252a3.66,3.66,0,0,1,3.66,3.66v4.55a3.659,3.659,0,0,1-3.66,3.659Z'
          transform='translate(4.332 0.714)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
        />
        <path
          d='M0,.476H1.9'
          transform='translate(10.001 4.401)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <path
          d='M0,.476H2.855'
          transform='translate(9.049 7.572)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
      </g>
    </g>
  )
  const Curved = () => (
    <g transform='translate(4.5 2.5)'>
      <path
        d='M0,0A5.386,5.386,0,0,0,5.386,5.386,5.385,5.385,0,0,0,10.772,0'
        transform='translate(2.104 11.332)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.772,7.527V5.386A5.386,5.386,0,0,0,0,5.386V7.527'
        transform='translate(2.104 0.713)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.475,2.044V0'
        transform='translate(7.015 16.718)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.475H13.556'
        transform='translate(0.712 10.857)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.475H2.985'
        transform='translate(5.997 7.477)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1,.475H0'
        transform='translate(6.988 4.707)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
    </g>
  )

  switch (set) {
    case 'bold':
      return <Bold />
    case 'bulk':
      return <Bulk />
    case 'broken':
      return <Broken />
    case 'two-tone':
      return <TwoTone />
    case 'curved':
      return <Curved />
    default:
      return <Light />
  }
}
Voice2.displayName = 'IconlyVoice2'
Voice2.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Voice2)
