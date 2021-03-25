import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ChevronLeftCircle = ({
  color,
  secondaryColor,
  strokeWidth,
  opacity,
  set
}) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20A10,10,0,1,1,10,0l.28,0A10,10,0,0,1,10,20ZM11.446,5.775A.728.728,0,0,0,10.92,6L7.43,9.47a.747.747,0,0,0,0,1.06L10.92,14a.7.7,0,0,0,.52.22.745.745,0,0,0,.53-1.28L9.02,10l2.95-2.94A.745.745,0,0,0,11.98,6,.75.75,0,0,0,11.446,5.775Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(22 2) rotate(90)'>
      <path
        d='M20,10A10,10,0,1,1,10,0,10.011,10.011,0,0,1,20,10'
        transform='translate(0 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M8.443.749a.747.747,0,0,1-.219.529L4.754,4.765a.752.752,0,0,1-1.063,0L.219,1.278A.75.75,0,0,1,1.282.22l2.94,2.953L7.162.22A.75.75,0,0,1,8.443.749'
        transform='translate(5.778 7.808)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(22 2) rotate(90)'>
      <path
        d='M0,9.25A9.25,9.25,0,1,0,9.25,0,9.25,9.25,0,0,0,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,3.471,3.486,6.942,0'
        transform='translate(6.529 8.558)'
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
    <g transform='translate(22 22) rotate(180)'>
      <path
        d='M0,10A9.94,9.94,0,0,1,3.9,2.073.727.727,0,0,1,4.79,3.226,8.546,8.546,0,1,0,10,1.454a8.645,8.645,0,0,0-1.3.1A.727.727,0,0,1,8.481.114,10,10,0,1,1,0,10Zm9.468,2.573L6,9.087A.75.75,0,1,1,7.06,8.028L10,10.981l2.94-2.953A.75.75,0,0,1,14,9.087L10.53,12.573a.747.747,0,0,1-1.062,0Z'
        transform='translate(0 20) rotate(-90)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(22 2) rotate(90)'>
      <path
        d='M0,9.25A9.25,9.25,0,1,0,9.25,0,9.25,9.25,0,0,0,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0,3.471,3.486,6.942,0'
        transform='translate(6.529 8.558)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(22 2) rotate(90)'>
      <path
        d='M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0S2.392,3.486,3.472,3.486,6.942,0,6.942,0'
        transform='translate(6.529 8.558)'
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
ChevronLeftCircle.displayName = 'IconlyChevronLeftCircle'
ChevronLeftCircle.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ChevronLeftCircle)
