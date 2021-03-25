import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Plus = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.67,20H5.33a5.349,5.349,0,0,1-3.944-1.394A5.356,5.356,0,0,1,0,14.67V5.33A5.358,5.358,0,0,1,1.386,1.386,5.358,5.358,0,0,1,5.33,0h9.33a5.372,5.372,0,0,1,3.945,1.386A5.345,5.345,0,0,1,20,5.33v9.34C20,18.057,18.057,20,14.67,20ZM6.33,9.16a.819.819,0,0,0-.83.83.839.839,0,0,0,.83.84H9.16V13.66a.83.83,0,1,0,1.66,0V10.83h2.84a.835.835,0,0,0,0-1.669H10.82V6.34a.83.83,0,1,0-1.66,0V9.16Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.667,0H5.333C1.929,0,0,1.929,0,5.333v9.333C0,18.062,1.92,20,5.333,20h9.333C18.071,20,20,18.062,20,14.667V5.333C20,1.929,18.071,0,14.667,0Z'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7.32,4.708H4.75V7.257a.75.75,0,0,1-1.5,0V4.708H.68a.75.75,0,0,1,0-1.494H3.242V.674a.758.758,0,0,1,1.507,0V3.214H7.32a.75.75,0,0,1,0,1.494Z'
        transform='translate(6 6)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.476,0V7.326'
        transform='translate(9.524 6.327)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.333.476H0'
        transform='translate(6.333 9.515)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.686,0H5.314C2.048,0,0,2.312,0,5.585v8.83C0,17.688,2.038,20,5.314,20h9.371C17.962,20,20,17.688,20,14.415V5.585C20,2.312,17.962,0,14.686,0Z'
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
        d='M6.253,20C2.392,20,0,17.608,0,13.756v-7.5C0,2.392,2.392,0,6.253,0h7.5C17.59,0,20,2.392,20,6.253V8.822a.756.756,0,0,1-.765.756V9.56a.764.764,0,0,1-.765-.765V6.253C18.47,3.2,16.8,1.53,13.756,1.53h-7.5C3.21,1.53,1.53,3.21,1.53,6.253v7.5c0,3.034,1.68,4.714,4.723,4.714h7.5c3.043,0,4.714-1.68,4.714-4.714a.765.765,0,1,1,1.53,0C20,17.608,17.608,20,13.756,20Zm3.765-5.857a.774.774,0,0,1-.739-.792v-.967a.765.765,0,1,1,1.53.053V13.4a.764.764,0,0,1-.764.739Zm3.4-3.588H6.658a.817.817,0,0,1-.792-.774.756.756,0,0,1,.757-.765H9.261v-2.4a.783.783,0,0,1,.774-.765.758.758,0,0,1,.225.034.766.766,0,0,1,.567.74V9.015h2.6a.772.772,0,0,1,.792.774.766.766,0,0,1-.748.765Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.476,0V7.326'
        transform='translate(9.524 6.327)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M7.333.476H0'
        transform='translate(6.333 9.515)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M14.686,0H5.314C2.048,0,0,2.312,0,5.585v8.83C0,17.688,2.038,20,5.314,20h9.371C17.962,20,20,17.688,20,14.415V5.585C20,2.312,17.962,0,14.686,0Z'
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
    <g transform='translate(2.3 2.3)'>
      <path
        d='M.526,0V7.148'
        transform='translate(9.211 6.163)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.156.526H0'
        transform='translate(6.159 9.211)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,9.737C0,2.435,2.435,0,9.737,0s9.737,2.435,9.737,9.737-2.435,9.737-9.737,9.737S0,17.039,0,9.737Z'
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
Plus.displayName = 'IconlyPlus'
Plus.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Plus)
