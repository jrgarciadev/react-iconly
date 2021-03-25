import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const TickSquare = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.34,20H5.67C2.279,20,0,17.625,0,14.091V5.92C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.92v8.171C20,17.625,17.725,20,14.34,20ZM6.44,9.125a.875.875,0,0,0-.62,1.5L8.2,12.99a.881.881,0,0,0,1.23,0L14.18,8.24A.877.877,0,0,0,12.94,7L8.81,11.13,7.06,9.38A.868.868,0,0,0,6.44,9.125Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.34,0H5.67C2.28,0,0,2.38,0,5.92v8.17C0,17.62,2.28,20,5.67,20h8.67C17.73,20,20,17.62,20,14.09V5.92C20,2.38,17.73,0,14.34,0'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M3.249,6.5a.872.872,0,0,1-.619-.256L.257,3.868A.875.875,0,0,1,1.493,2.629L3.249,4.385,7.377.257A.875.875,0,0,1,8.613,1.495L3.868,6.24a.872.872,0,0,1-.619.256'
        transform='translate(5.565 6.752)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.373,2.374,4.746,7.12,0'
        transform='translate(6.44 7.627)'
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
        d='M6.253,20C2.392,20,0,17.608,0,13.756v-7.5C0,2.392,2.392,0,6.253,0h7.5C17.59,0,20,2.392,20,6.253V8.822a.756.756,0,0,1-.756.756h-.009V9.56A.765.765,0,0,1,18.47,8.8V6.253c0-3.053-1.67-4.723-4.714-4.723h-7.5C3.21,1.53,1.53,3.21,1.53,6.253v7.5c0,3.034,1.68,4.714,4.723,4.714h7.5c3.043,0,4.714-1.68,4.714-4.714a.765.765,0,0,1,1.53,0C20,17.608,17.608,20,13.756,20Zm2.03-7.1L5.909,10.531A.75.75,0,1,1,6.97,9.47l1.843,1.844L13.029,7.1A.75.75,0,0,1,14.09,8.158L9.344,12.9a.751.751,0,0,1-1.061,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.373,2.374,4.746,7.12,0'
        transform='translate(6.44 7.627)'
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
        d='M0,2.373,2.374,4.746,7.12,0'
        transform='translate(6.44 7.627)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
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
TickSquare.displayName = 'IconlyTickSquare'
TickSquare.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(TickSquare)
