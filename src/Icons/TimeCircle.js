import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const TimeCircle = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20A10,10,0,1,1,10,0a10,10,0,0,1,7.074,17.074A9.936,9.936,0,0,1,10,20ZM9.65,4.93a.751.751,0,0,0-.75.75v5.05a.747.747,0,0,0,.37.64l3.92,2.34a.764.764,0,0,0,.39.111.746.746,0,0,0,.64-.371.756.756,0,0,0-.26-1.03L10.4,10.3V5.68A.751.751,0,0,0,9.65,4.93Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M4.675,8.889a.756.756,0,0,1-.384-.1L.365,6.442A.754.754,0,0,1,0,5.8V.75a.75.75,0,0,1,1.5,0V5.371L5.06,7.494a.75.75,0,0,1-.385,1.395'
        transform='translate(8.899 4.925)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M18.5,9.25A9.25,9.25,0,1,1,9.25,0,9.25,9.25,0,0,1,18.5,9.25Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.77,7.1,0,4.847V0'
        transform='translate(9.661 5.847)'
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
    <g transform='translate(2 2)'>
      <path
        d='M2.073,16.1a.727.727,0,0,1,1.152-.888A8.548,8.548,0,1,0,1.455,10a8.635,8.635,0,0,0,.1,1.3.727.727,0,0,1-.608.828.719.719,0,0,1-.828-.608A10,10,0,1,1,2.073,16.1Zm11-2.524L9.288,11.32a.73.73,0,0,1-.354-.625V5.837a.727.727,0,1,1,1.453,0v4.446l3.425,2.042a.727.727,0,0,1-.744,1.249Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M18.5,9.25A9.25,9.25,0,1,1,9.25,0,9.25,9.25,0,0,1,18.5,9.25Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.77,7.1,0,4.847V0'
        transform='translate(9.661 5.847)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(2 2)'>
      <path
        d='M18.5,9.25A9.25,9.25,0,1,1,9.25,0,9.25,9.25,0,0,1,18.5,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.53,4.921,0,4.847V0'
        transform='translate(9.661 5.846)'
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
TimeCircle.displayName = 'IconlyTimeCircle'
TimeCircle.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(TimeCircle)
