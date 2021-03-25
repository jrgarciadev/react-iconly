import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const MoreSquare = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.34,20H5.67C2.279,20,0,17.625,0,14.09V5.92C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.92v8.17C20,17.625,17.725,20,14.34,20Zm.14-11.2A1.2,1.2,0,1,0,15.67,10,1.2,1.2,0,0,0,14.48,8.8ZM10,8.8A1.2,1.2,0,1,0,11.2,10,1.2,1.2,0,0,0,10,8.8Zm-4.48,0A1.2,1.2,0,1,0,6.72,10,1.2,1.2,0,0,0,5.52,8.8Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M14.34,0H5.67C2.28,0,0,2.38,0,5.92v8.17C0,17.62,2.28,20,5.67,20h8.67C17.73,20,20,17.62,20,14.09V5.92C20,2.38,17.73,0,14.34,0'
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
        d='M6.244,20C2.392,20,0,17.608,0,13.753a.765.765,0,0,1,1.53,0c0,3.034,1.671,4.714,4.723,4.714h7.492c3.044,0,4.723-1.671,4.723-4.714v-7.5c0-3.043-1.67-4.723-4.723-4.723H6.253C3.21,1.53,1.53,3.21,1.53,6.253V8.584a.756.756,0,0,1-.756.756H.763A.763.763,0,0,1,0,8.575V6.253C0,2.393,2.41,0,6.254,0h7.492C17.608,0,20,2.393,20,6.256v7.5C20,17.608,17.608,20,13.747,20Zm7.037-10a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,13.281,10ZM8.8,10A1.2,1.2,0,1,1,10,11.2,1.2,1.2,0,0,1,8.8,10ZM4.323,10a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,4.323,10Z'
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
        transform='translate(13.498 9.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.499 9.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(5.5 9.5)'
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
MoreSquare.displayName = 'IconlyMoreSquare'
MoreSquare.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(MoreSquare)
