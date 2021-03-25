import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Location = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M8.5,20a1.358,1.358,0,0,1-.734-.247,21.513,21.513,0,0,1-5.54-5.141A10.384,10.384,0,0,1,0,8.318,8.168,8.168,0,0,1,2.5,2.434,8.53,8.53,0,0,1,8.493,0,8.423,8.423,0,0,1,17,8.318a10.39,10.39,0,0,1-2.23,6.294,21.92,21.92,0,0,1-5.541,5.141A1.319,1.319,0,0,1,8.5,20ZM8.493,5.777a2.8,2.8,0,0,0-2.8,2.8,2.712,2.712,0,0,0,.821,1.954,2.823,2.823,0,0,0,4.79-1.954,2.824,2.824,0,0,0-2.813-2.8Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(5 2)'>
      <path
        d='M7.042,17h0a.823.823,0,0,1-.39-.119,18.454,18.454,0,0,1-4.838-4.548A9.227,9.227,0,0,1,0,7.134,7.166,7.166,0,0,1,3.532.937a6.889,6.889,0,0,1,7.034.058,7.254,7.254,0,0,1,2.525,2.674A7.419,7.419,0,0,1,14,7.261a10.515,10.515,0,0,1-3.192,6.775,18.751,18.751,0,0,1-3.359,2.82A1.173,1.173,0,0,1,7.042,17ZM6.993,4.848a2.342,2.342,0,0,0-1.679.706,2.445,2.445,0,0,0-.519,2.641,2.369,2.369,0,0,0,2.2,1.5h.017a2.327,2.327,0,0,0,1.667-.7,2.455,2.455,0,0,0-.768-3.956A2.328,2.328,0,0,0,6.993,4.848Z'
        transform='translate(0)'
        fill={color}
      />
      <ellipse
        cx='5'
        cy='1'
        rx='5'
        ry='1'
        transform='translate(2 18)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M0,7.652A7.678,7.678,0,1,1,15.357,7.7v.087a11.338,11.338,0,0,1-3.478,7.3,20.183,20.183,0,0,1-3.591,2.957.93.93,0,0,1-1.217,0,19.817,19.817,0,0,1-5.052-4.73A9.826,9.826,0,0,1,0,7.678Z'
        transform='translate(0.739 0.739)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='2.461'
        cy='2.461'
        r='2.461'
        transform='translate(5.957 6.078)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M7.856,19.879a23.973,23.973,0,0,1-5.7-5.3A10.6,10.6,0,0,1,0,8.513,8.516,8.516,0,0,1,8.5,0h.033A8.5,8.5,0,0,1,17,8.522v.094c-.064,3.344-2.075,6.12-3.749,7.859a20.427,20.427,0,0,1-1.508,1.42.746.746,0,0,1-.968-1.134,19.168,19.168,0,0,0,1.4-1.319c1.49-1.547,3.279-3.992,3.333-6.854a7.027,7.027,0,0,0-6.979-7.1H8.5A7.01,7.01,0,0,0,1.493,8.461a9.119,9.119,0,0,0,1.859,5.225A22.377,22.377,0,0,0,8.672,18.63a.746.746,0,0,1-.815,1.249ZM5.262,8.614a.747.747,0,0,1,1.493,0A1.742,1.742,0,1,0,8.5,6.873a.745.745,0,1,1,0-1.49,3.23,3.23,0,1,1-3.235,3.23Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M0,7.652A7.678,7.678,0,1,1,15.357,7.7v.087a11.338,11.338,0,0,1-3.478,7.3,20.183,20.183,0,0,1-3.591,2.957.93.93,0,0,1-1.217,0,19.817,19.817,0,0,1-5.052-4.73A9.826,9.826,0,0,1,0,7.678Z'
        transform='translate(0.739 0.739)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='2.461'
        cy='2.461'
        r='2.461'
        transform='translate(5.957 6.078)'
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
    <g transform='translate(4.5 3)'>
      <path
        d='M5,2.5A2.5,2.5,0,1,0,2.5,5,2.5,2.5,0,0,0,5,2.5Z'
        transform='translate(5.01 5.21)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.5,18C4.6,18,0,12.959,0,7.6A7.549,7.549,0,0,1,7.5,0,7.55,7.55,0,0,1,15,7.6C15,12.959,10.4,18,7.5,18Z'
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
Location.displayName = 'IconlyLocation'
Location.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Location)
