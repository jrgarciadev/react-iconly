import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const MoreCircle = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20A10,10,0,0,1,2.926,2.93,10,10,0,1,1,10,20ZM14.48,8.8A1.2,1.2,0,1,0,15.67,10,1.2,1.2,0,0,0,14.48,8.8ZM10,8.8A1.2,1.2,0,1,0,11.19,10,1.2,1.2,0,0,0,10,8.8Zm-4.48,0A1.2,1.2,0,1,0,6.71,10,1.2,1.2,0,0,0,5.52,8.8Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10'
        transform='translate(2 2)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M8.959,1.2a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,8.959,1.2Zm-4.479,0a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,4.479,1.2ZM0,1.2a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,0,1.2Z'
        transform='translate(6.323 10.804)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M9.25,0A9.25,9.25,0,1,1,0,9.25,9.251,9.251,0,0,1,9.25,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(4.323 8.802)'
        fill={color}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(8.802 8.802)'
        fill={color}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(13.281 8.802)'
        fill={color}
      />
    </g>
  )

  const Broken = () => (
    <g transform='translate(2 2)'>
      <path
        d='M2.073,16.1a.727.727,0,1,1,1.152-.888A8.547,8.547,0,1,0,1.454,10a8.636,8.636,0,0,0,.1,1.3.727.727,0,0,1-1.437.22A10,10,0,1,1,2.073,16.1ZM13.28,10a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,13.28,10ZM8.8,10A1.2,1.2,0,1,1,10,11.2,1.2,1.2,0,0,1,8.8,10Zm-4.48,0a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,4.322,10Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M9.25,0A9.25,9.25,0,1,1,0,9.25,9.251,9.251,0,0,1,9.25,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(4.323 8.802)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(8.802 8.802)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M1.2,2.395A1.2,1.2,0,1,1,2.4,1.2a1.2,1.2,0,0,1-1.2,1.2'
        transform='translate(13.281 8.802)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Curved = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(12.709 11.4)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.709 7.4)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(6.7 11.4)'
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
MoreCircle.displayName = 'IconlyMoreCircle'
MoreCircle.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(MoreCircle)
