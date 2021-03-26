import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Filter = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M13.122,14.4a3.439,3.439,0,1,1,3.439,3.379A3.41,3.41,0,0,1,13.122,14.4ZM1.508,15.921a1.482,1.482,0,1,1,0-2.963H8.083a1.482,1.482,0,1,1,0,2.963ZM0,3.379A3.409,3.409,0,0,1,3.439,0,3.409,3.409,0,0,1,6.878,3.379,3.409,3.409,0,0,1,3.439,6.758,3.41,3.41,0,0,1,0,3.379ZM11.918,4.86a1.481,1.481,0,1,1,0-2.962h6.575a1.481,1.481,0,1,1,0,2.962Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M8.083,0H1.508A1.5,1.5,0,0,0,0,1.481,1.5,1.5,0,0,0,1.508,2.963H8.083A1.5,1.5,0,0,0,9.591,1.481,1.5,1.5,0,0,0,8.083,0'
        transform='translate(0 12.958)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M9.59,1.48A1.5,1.5,0,0,0,8.083,0H1.508A1.5,1.5,0,0,0,0,1.48,1.5,1.5,0,0,0,1.508,2.962H8.083A1.5,1.5,0,0,0,9.59,1.48'
        transform='translate(10.41 1.898)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M6.878,3.379a3.409,3.409,0,0,1-3.439,3.38A3.41,3.41,0,0,1,0,3.379,3.41,3.41,0,0,1,3.439,0,3.409,3.409,0,0,1,6.878,3.379'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M6.878,3.38A3.409,3.409,0,0,1,3.439,6.758,3.41,3.41,0,0,1,0,3.38,3.41,3.41,0,0,1,3.439,0,3.409,3.409,0,0,1,6.878,3.38'
        transform='translate(13.122 11.02)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M7.234.588H0'
        transform='translate(0.883 14.898)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.76,2.88A2.88,2.88,0,1,1,2.88,0,2.88,2.88,0,0,1,5.76,2.88Z'
        transform='translate(13.358 12.607)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.588H7.235'
        transform='translate(11.883 3.174)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.88A2.88,2.88,0,1,0,2.88,0,2.879,2.879,0,0,0,0,2.88Z'
        transform='translate(0.883 0.882)'
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
    <g transform='translate(2 2.5)'>
      <path
        d='M12.476,15.286a3.741,3.741,0,0,1,3.762-3.713,3.817,3.817,0,0,1,.84.093.87.87,0,0,1,.666,1.041.884.884,0,0,1-1.057.656,2.025,2.025,0,0,0-2.447,1.923,2,2,0,0,0,4,0,1.955,1.955,0,0,0-.027-.328.873.873,0,0,1,.725-1,.882.882,0,0,1,1.015.716,3.648,3.648,0,0,1,.051.615,3.762,3.762,0,0,1-7.524,0Zm-11.594.87a.871.871,0,1,1,0-1.742H8.117a.871.871,0,1,1,0,1.742ZM0,3.713A3.637,3.637,0,0,1,.052,3.1a.881.881,0,0,1,1.015-.716.873.873,0,0,1,.725,1,2.063,2.063,0,0,0-.027.328A2,2,0,1,0,3.318,1.791a.88.88,0,0,1-1.06-.651A.869.869,0,0,1,2.918.1,3.765,3.765,0,0,1,7.525,3.713,3.742,3.742,0,0,1,3.763,7.428,3.743,3.743,0,0,1,0,3.713Zm11.884.871a.871.871,0,1,1,0-1.742h7.234a.871.871,0,1,1,0,1.742Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M7.234.588H0'
        transform='translate(0.883 14.898)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M5.76,2.88A2.88,2.88,0,1,1,2.88,0,2.88,2.88,0,0,1,5.76,2.88Z'
        transform='translate(13.358 12.607)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.588H7.235'
        transform='translate(11.883 3.174)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,2.88A2.88,2.88,0,1,0,2.88,0,2.879,2.879,0,0,0,0,2.88Z'
        transform='translate(0.883 0.882)'
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
    <g transform='translate(4 4)'>
      <path
        d='M6.473.447H0'
        transform='translate(0.671 13.435)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.722C0,4.764.681,5.444,2.722,5.444s2.722-.68,2.722-2.722S4.763,0,2.722,0,0,.68,0,2.722Z'
        transform='translate(11.205 11.162)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.447H6.472'
        transform='translate(10.177 2.947)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.444,2.722C5.444.681,4.764,0,2.723,0S0,.681,0,2.722.681,5.444,2.723,5.444,5.444,4.764,5.444,2.722Z'
        transform='translate(0.671 0.671)'
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
Filter.displayName = 'IconlyFilter'
Filter.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Filter)
