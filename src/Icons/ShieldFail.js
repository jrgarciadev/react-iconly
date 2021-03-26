import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ShieldFail = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M8.586,20a.78.78,0,0,1-.363-.088l-3.6-1.863a8.4,8.4,0,0,1-2.435-1.814A8.2,8.2,0,0,1,.04,10.763L0,4.123A1.8,1.8,0,0,1,1.228,2.416L7.841.1a1.838,1.838,0,0,1,.61-.1,1.9,1.9,0,0,1,.618.1L15.7,2.328a1.8,1.8,0,0,1,1.248,1.7L17,10.664a8.248,8.248,0,0,1-2.074,5.492A8.366,8.366,0,0,1,12.511,18L8.938,19.912A.747.747,0,0,1,8.586,20ZM8.5,10.763h0l1.358,1.323a.757.757,0,0,0,.533.214.74.74,0,0,0,.534-.214.727.727,0,0,0,0-1.04L9.562,9.723,10.921,8.4a.717.717,0,0,0,.219-.509.742.742,0,0,0-.219-.531.773.773,0,0,0-1.067,0L8.5,8.684,7.136,7.359a.753.753,0,0,0-.53-.213.78.78,0,0,0-.537.213.741.741,0,0,0-.219.531A.715.715,0,0,0,6.07,8.4L7.428,9.723,6.07,11.047a.725.725,0,0,0,0,1.04A.76.76,0,0,0,6.6,12.3a.718.718,0,0,0,.534-.214l1.358-1.323Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M8.586,20a.778.778,0,0,1-.358-.086l-3.6-1.864a8.426,8.426,0,0,1-2.446-1.816A8.243,8.243,0,0,1,.041,10.76L0,4.124A1.812,1.812,0,0,1,1.227,2.412L7.84.107A1.883,1.883,0,0,1,9.07.1l6.638,2.227a1.809,1.809,0,0,1,1.249,1.7L17,10.663a8.241,8.241,0,0,1-2.065,5.5A8.437,8.437,0,0,1,12.514,18L8.944,19.909A.768.768,0,0,1,8.586,20'
        transform='translate(0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M3.715,2.578,5.073,1.255a.721.721,0,0,0,0-1.039A.77.77,0,0,0,4,.215L2.647,1.537,1.289.215a.77.77,0,0,0-1.068,0,.721.721,0,0,0,0,1.039L1.579,2.578.221,3.9a.721.721,0,0,0,0,1.039.769.769,0,0,0,1.068,0L2.647,3.618,4,4.94a.769.769,0,0,0,1.068,0,.721.721,0,0,0,0-1.039Z'
        transform='translate(5.853 7.147)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M14.615,2.375A1.089,1.089,0,0,1,15.344,3.4v6.773a7.787,7.787,0,0,1-1.9,5.1,7.785,7.785,0,0,1-2.2,1.7L7.678,18.9,4.114,16.972a7.753,7.753,0,0,1-2.208-1.7A7.783,7.783,0,0,1,0,10.172V3.4A1.089,1.089,0,0,1,.729,2.375L7.311.062a1.09,1.09,0,0,1,.722,0Z'
        transform='translate(0.75 0.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.758,3.758,0,0'
        transform='translate(6.543 8.088)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.758,3.758,0'
        transform='translate(6.543 8.088)'
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
        d='M8.147,19.912l-3.6-1.885A8.523,8.523,0,0,1,2.11,16.2,8.247,8.247,0,0,1,0,10.708a.748.748,0,0,1,.758-.736.747.747,0,0,1,.757.736,6.8,6.8,0,0,0,1.738,4.524,7.024,7.024,0,0,0,2.016,1.5l3.237,1.7,3.23-1.7a7.009,7.009,0,0,0,2.015-1.5,6.792,6.792,0,0,0,1.735-4.521V4.072a.335.335,0,0,0-.229-.315L8.614,1.49a.352.352,0,0,0-.228,0L1.744,3.757a.334.334,0,0,0-.229.315v1.9a.748.748,0,0,1-.757.737A.748.748,0,0,1,0,5.971v-1.9a1.815,1.815,0,0,1,1.243-1.7L7.885.1A1.929,1.929,0,0,1,9.114.1l6.644,2.266A1.814,1.814,0,0,1,17,4.072v6.64A8.238,8.238,0,0,1,14.9,16.2a8.5,8.5,0,0,1-2.438,1.831L8.866,19.912a.777.777,0,0,1-.719,0Zm1.7-7.748L8.486,10.841,7.125,12.163a.771.771,0,0,1-1.07,0,.72.72,0,0,1,0-1.04L7.416,9.8,6.055,8.477a.719.719,0,0,1,0-1.04.772.772,0,0,1,1.07,0L8.486,8.762,9.848,7.438a.772.772,0,0,1,1.07,0,.721.721,0,0,1,0,1.04L9.556,9.8l1.362,1.322a.722.722,0,0,1,0,1.04.771.771,0,0,1-1.07,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M14.615,2.375A1.089,1.089,0,0,1,15.344,3.4v6.773a7.787,7.787,0,0,1-1.9,5.1,7.785,7.785,0,0,1-2.2,1.7L7.678,18.9,4.114,16.972a7.753,7.753,0,0,1-2.208-1.7A7.783,7.783,0,0,1,0,10.172V3.4A1.089,1.089,0,0,1,.729,2.375L7.311.062a1.09,1.09,0,0,1,.722,0Z'
        transform='translate(0.75 0.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1.879,1.879,0,3.758,1.879,1.879,0,0,1.879,1.879,3.758,0,1.879,1.879,3.758,3.758Z'
        transform='translate(6.543 8.088)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M7.736,18.855a8.4,8.4,0,0,0,7.672-8.727c0-6.4.278-6.905-.338-7.521A12.592,12.592,0,0,0,7.736,0,12.6,12.6,0,0,0,.4,2.607c-.616.616-.338,1.117-.338,7.521A8.4,8.4,0,0,0,7.736,18.855Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.759,3.758,0,0'
        transform='translate(6.605 8.066)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.758,3.759,0'
        transform='translate(6.605 8.066)'
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
ShieldFail.displayName = 'IconlyShieldFail'
ShieldFail.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ShieldFail)
