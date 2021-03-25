import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Message = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M14.939,18H5.06A5.061,5.061,0,0,1,0,12.95V5.05A5.061,5.061,0,0,1,5.06,0h9.879a5.091,5.091,0,0,1,3.58,1.481A5.012,5.012,0,0,1,20,5.05v7.9A5.061,5.061,0,0,1,14.939,18ZM4.034,5.246A.733.733,0,0,0,3.5,5.47a.764.764,0,0,0-.071,1l.131.13L8.11,10.15a3.129,3.129,0,0,0,1.95.68,3.18,3.18,0,0,0,1.958-.68L16.53,6.54l.08-.08a.774.774,0,0,0-.012-1,.831.831,0,0,0-.528-.26h-.042a.76.76,0,0,0-.519.2L11,9a1.565,1.565,0,0,1-1,.36A1.592,1.592,0,0,1,9,9L4.5,5.4A.778.778,0,0,0,4.034,5.246Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M20,7.143a5.047,5.047,0,0,1-5.03,5.06H5.05A5.047,5.047,0,0,1,0,7.163v-.01S.006,2.727.014.5A.5.5,0,0,1,.822.109C3.2,1.994,7.447,5.431,7.5,5.476a4.067,4.067,0,0,0,2.53.89,4.013,4.013,0,0,0,2.53-.9C12.613,5.43,16.767,2.1,19.179.18a.5.5,0,0,1,.811.39C20,2.779,20,7.143,20,7.143'
        transform='translate(2 8.797)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M18.973,2.674A5.035,5.035,0,0,0,14.527,0H4.547A5.035,5.035,0,0,0,.1,2.674.864.864,0,0,0,.322,3.752L7.747,9.691a2.826,2.826,0,0,0,1.78.629h.02a2.826,2.826,0,0,0,1.78-.629l7.425-5.939a.864.864,0,0,0,.221-1.078'
        transform='translate(2.503 3)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 3.5)'>
      <path
        d='M11.314,0,7.048,3.434a2.223,2.223,0,0,1-2.746,0L0,0'
        transform='translate(3.954 5.561)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.888,0h9.428A4.957,4.957,0,0,1,17.9,1.59a5.017,5.017,0,0,1,1.326,3.7v6.528a5.017,5.017,0,0,1-1.326,3.7,4.957,4.957,0,0,1-3.58,1.59H4.888C1.968,17.116,0,14.741,0,11.822V5.294C0,2.375,1.968,0,4.888,0Z'
        transform='translate(0 0)'
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
    <g transform='translate(2 3)'>
      <path
        d='M5.8,18A5.832,5.832,0,0,1,0,12.155V5.845A5.824,5.824,0,0,1,5.8,0h8.4A5.842,5.842,0,0,1,20,5.845V7.307a.71.71,0,0,1-.707.713L19.283,8a.705.705,0,0,1-.5-.209.716.716,0,0,1-.207-.5V5.845A4.439,4.439,0,0,0,14.2,1.435H5.8A4.44,4.44,0,0,0,1.424,5.845v6.309A4.44,4.44,0,0,0,5.8,16.565h8.4a4.439,4.439,0,0,0,4.378-4.411.716.716,0,0,1,1.424,0A5.842,5.842,0,0,1,14.2,18ZM8.05,9.98,3.928,6.656a.725.725,0,0,1-.106-1.007.7.7,0,0,1,.991-.107L8.969,8.858a1.425,1.425,0,0,0,1.769,0l4.113-3.316h.009a.711.711,0,1,1,.885,1.114L11.632,9.98a2.84,2.84,0,0,1-3.582,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M11.314,0,7.048,3.434a2.223,2.223,0,0,1-2.746,0L0,0'
        transform='translate(3.954 5.561)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M4.888,0h9.428A4.957,4.957,0,0,1,17.9,1.59a5.017,5.017,0,0,1,1.326,3.7v6.528a5.017,5.017,0,0,1-1.326,3.7,4.957,4.957,0,0,1-3.58,1.59H4.888C1.968,17.116,0,14.741,0,11.822V5.294C0,2.375,1.968,0,4.888,0Z'
        transform='translate(0 0)'
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
    <g transform='translate(2.452 2.852)'>
      <path
        d='M11.151,0S7.941,3.853,5.593,3.853,0,0,0,0'
        transform='translate(3.942 6.167)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,9.117C0,2.279,2.381,0,9.524,0s9.524,2.279,9.524,9.117-2.381,9.117-9.524,9.117S0,15.954,0,9.117Z'
        transform='translate(0 0)'
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
Message.displayName = 'IconlyMessage'
Message.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Message)
