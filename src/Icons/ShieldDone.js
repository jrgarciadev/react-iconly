import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ShieldDone = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M8.581,20a.759.759,0,0,1-.353-.086l-3.6-1.863a8.458,8.458,0,0,1-2.446-1.817A8.25,8.25,0,0,1,.042,10.759L0,4.124A1.813,1.813,0,0,1,1.229,2.413L7.841.106A1.889,1.889,0,0,1,9.071.1l6.637,2.227a1.81,1.81,0,0,1,1.249,1.7L17,10.662a8.241,8.241,0,0,1-2.065,5.5A8.448,8.448,0,0,1,12.513,18L8.945,19.91a.787.787,0,0,1-.358.09ZM5.9,9.007a.764.764,0,0,0-.539.219.722.722,0,0,0,.007,1.039l1.916,1.843a.758.758,0,0,0,.528.212h.007a.761.761,0,0,0,.533-.219l3.9-3.844a.722.722,0,0,0-.006-1.039.769.769,0,0,0-1.067.005L7.808,10.545,6.429,9.219A.76.76,0,0,0,5.9,9.007Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M8.586,20a.782.782,0,0,1-.359-.086l-3.6-1.864a8.453,8.453,0,0,1-2.445-1.816A8.243,8.243,0,0,1,.042,10.76L0,4.124A1.813,1.813,0,0,1,1.228,2.412L7.841.107A1.882,1.882,0,0,1,9.071.1l6.637,2.227a1.809,1.809,0,0,1,1.249,1.7L17,10.663a8.243,8.243,0,0,1-2.066,5.5A8.423,8.423,0,0,1,12.513,18L8.944,19.909A.764.764,0,0,1,8.586,20'
        transform='translate(0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M2.676,5.315A.764.764,0,0,1,2.141,5.1L.224,3.26A.722.722,0,0,1,.218,2.22a.77.77,0,0,1,1.068-.007L2.665,3.539,6.033.219A.77.77,0,0,1,7.1.212a.721.721,0,0,1,.007,1.039L3.209,5.1a.76.76,0,0,1-.533.219'
        transform='translate(5.143 7.006)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M14.615,2.375A1.089,1.089,0,0,1,15.344,3.4v6.773a7.781,7.781,0,0,1-1.9,5.1,7.771,7.771,0,0,1-2.2,1.7L7.678,18.9,4.114,16.972a7.767,7.767,0,0,1-2.208-1.7A7.783,7.783,0,0,1,0,10.172V3.4A1.089,1.089,0,0,1,.729,2.375L7.311.062a1.09,1.09,0,0,1,.722,0Z'
        transform='translate(0.75 0.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.005,1.892,3.9,5.79,0'
        transform='translate(5.823 7.913)'
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
        d='M8.147,19.912l-3.6-1.885A8.523,8.523,0,0,1,2.11,16.2,8.247,8.247,0,0,1,0,10.708a.748.748,0,0,1,.758-.736.747.747,0,0,1,.757.736,6.8,6.8,0,0,0,1.738,4.524,7.024,7.024,0,0,0,2.016,1.5l3.237,1.7,3.23-1.7a7,7,0,0,0,2.015-1.5,6.792,6.792,0,0,0,1.735-4.521V4.072a.335.335,0,0,0-.229-.315L8.614,1.49a.352.352,0,0,0-.228,0L1.744,3.757a.335.335,0,0,0-.229.315v1.9a.748.748,0,0,1-.757.737A.748.748,0,0,1,0,5.971v-1.9a1.815,1.815,0,0,1,1.243-1.7L7.885.1a1.932,1.932,0,0,1,1.23,0l6.643,2.266A1.814,1.814,0,0,1,17,4.072v6.64A8.238,8.238,0,0,1,14.9,16.2a8.486,8.486,0,0,1-2.438,1.831L8.866,19.912a.777.777,0,0,1-.719,0Zm-.9-7.81-1.91-1.856a.722.722,0,0,1,0-1.04.771.771,0,0,1,1.07,0l1.374,1.336,3.4-3.3a.772.772,0,0,1,1.07,0,.722.722,0,0,1,0,1.04L8.321,12.1a.771.771,0,0,1-1.07,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M14.615,2.375A1.089,1.089,0,0,1,15.344,3.4v6.773a7.781,7.781,0,0,1-1.9,5.1,7.771,7.771,0,0,1-2.2,1.7L7.678,18.9,4.114,16.972a7.767,7.767,0,0,1-2.208-1.7A7.783,7.783,0,0,1,0,10.172V3.4A1.089,1.089,0,0,1,.729,2.375L7.311.062a1.09,1.09,0,0,1,.722,0Z'
        transform='translate(0.75 0.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.005,1.892,3.9,5.79,0'
        transform='translate(5.823 7.913)'
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
        d='M7.735,18.855a8.4,8.4,0,0,0,7.672-8.727c0-6.4.278-6.905-.337-7.521A12.6,12.6,0,0,0,7.735,0,12.589,12.589,0,0,0,.4,2.607c-.616.616-.338,1.117-.338,7.521A8.4,8.4,0,0,0,7.735,18.855Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.005,1.892,3.9,5.79,0'
        transform='translate(5.886 7.87)'
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
ShieldDone.displayName = 'IconlyShieldDone'
ShieldDone.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ShieldDone)
