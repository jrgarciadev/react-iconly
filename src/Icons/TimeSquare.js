import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const TimeSquare = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.34,20H5.67C2.279,20,0,17.624,0,14.089V5.919C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.919v8.169C20,17.624,17.725,20,14.34,20ZM9.65,4.919a.76.76,0,0,0-.75.75V10.72a.733.733,0,0,0,.37.64l3.92,2.34a.7.7,0,0,0,.39.11.745.745,0,0,0,.64-.37.72.72,0,0,0,.09-.552.762.762,0,0,0-.35-.477L10.4,10.29V5.669A.751.751,0,0,0,9.65,4.919Z'
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
        d='M4.675,8.889a.756.756,0,0,1-.384-.1L.365,6.442A.754.754,0,0,1,0,5.8V.75a.75.75,0,0,1,1.5,0V5.371L5.06,7.494a.75.75,0,0,1-.385,1.395'
        transform='translate(8.898 4.925)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.884,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.751 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.391,6.384,0,4.361V0'
        transform='translate(10 5.634)'
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
        d='M6.244,20C2.392,20,0,17.608,0,13.753a.765.765,0,0,1,1.53,0c0,3.034,1.671,4.714,4.723,4.714h7.492c3.044,0,4.723-1.671,4.723-4.714v-7.5c0-3.043-1.67-4.723-4.723-4.723H6.253C3.21,1.53,1.53,3.21,1.53,6.253V8.584a.756.756,0,0,1-.756.756H.763A.763.763,0,0,1,0,8.575V6.253C0,2.393,2.41,0,6.254,0h7.492C17.608,0,20,2.393,20,6.256v7.5C20,17.608,17.608,20,13.747,20Zm6.763-7.338-3.39-2.023a.751.751,0,0,1-.366-.645V5.634a.75.75,0,1,1,1.5,0V9.569l3.026,1.8a.751.751,0,0,1-.769,1.29Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.884,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.751 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.391,6.384,0,4.361V0'
        transform='translate(10 5.634)'
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
        d='M3.391,6.384,0,4.361V0'
        transform='translate(9.999 5.634)'
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
TimeSquare.displayName = 'IconlyTimeSquare'
TimeSquare.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(TimeSquare)
