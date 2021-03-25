import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Filter2 = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M7.085,19.874a.8.8,0,0,1-.356-.67V14.389a.558.558,0,0,1,.551-.565l4.855.015a.558.558,0,0,1,.548.565v2.731a.8.8,0,0,1-.454.724L7.823,19.929A.765.765,0,0,1,7.5,20,.754.754,0,0,1,7.085,19.874Zm5.35-7.83-5.447-.016a.591.591,0,0,1-.437-.2L.574,5.258A2.234,2.234,0,0,1,0,3.758V2.193A2.161,2.161,0,0,1,2.128,0H17.872A2.16,2.16,0,0,1,20,2.192V3.724a2.225,2.225,0,0,1-.637,1.563l-6.505,6.58a.582.582,0,0,1-.416.176Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 3)'>
      <path
        d='M11.571,10.594,17.427,4.72A1.981,1.981,0,0,0,18,3.324V1.6C18,.52,17.142,0,16.084,0H1.916C.858,0,0,.52,0,1.6V3.355A1.983,1.983,0,0,0,.518,4.694L5.9,10.563a.537.537,0,0,0,.393.175l4.9.014a.528.528,0,0,0,.38-.158'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M0,0V6.6a.715.715,0,0,0,.319.6.681.681,0,0,0,.375.113.7.7,0,0,0,.289-.063L4.95,5.4a.71.71,0,0,0,.407-.646V0Z'
        transform='translate(6.056 10.686)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 3)'>
      <path
        d='M6.564,18l4.3-2.023v-5.3L17.6,3.838a1.385,1.385,0,0,0,.4-.976v-1.5A1.345,1.345,0,0,0,16.677,0H1.323A1.345,1.345,0,0,0,0,1.366V2.9a1.389,1.389,0,0,0,.357.934l6.207,6.843Z'
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
    <g transform='translate(3 3)'>
      <path
        d='M6.2,17.587a.727.727,0,0,1,.338-.952l3.486-1.67V10.542a.726.726,0,0,1,.209-.51l6.22-6.294a.547.547,0,0,0,.158-.385V1.974a.535.535,0,0,0-.527-.541H8.074A.707.707,0,0,1,7.379.715.707.707,0,0,1,8.074,0h8.009A1.949,1.949,0,0,1,18,1.974V3.353a2.012,2.012,0,0,1-.575,1.408l-6.011,6.08v4.58a.716.716,0,0,1-.4.648L7.124,17.933A.68.68,0,0,1,6.831,18,.7.7,0,0,1,6.2,17.587Zm-.143-3.346v-3.3L.517,4.784A2.034,2.034,0,0,1,0,3.419V2A1.959,1.959,0,0,1,1.916,0H4.7a.711.711,0,0,1,.695.725.71.71,0,0,1-.695.724H1.916A.538.538,0,0,0,1.39,2V3.419a.564.564,0,0,0,.142.374l5.727,6.368a.737.737,0,0,1,.188.494v3.586a.7.7,0,1,1-1.39,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(3 3)'>
      <path
        d='M9,18c-2.011,0-2.02-2.006-2.02-5.4S0,6.827,0,3.1C0-.047,2.79,0,9,0s9-.047,9,3.1c0,3.726-6.983,6.1-6.983,9.5S11.014,18,9,18Z'
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
    case 'curved':
      return <Curved />
    default:
      return <Light />
  }
}
Filter2.displayName = 'IconlyFilter2'
Filter2.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Filter2)
