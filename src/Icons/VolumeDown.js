import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const VolumeDown = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 3)'>
      <path
        d='M9.689,18A2.694,2.694,0,0,1,8.1,17.323l-3.531-2.94H2.755A2.646,2.646,0,0,1,.145,11.8a27.888,27.888,0,0,1,0-5.677,2.7,2.7,0,0,1,2.61-2.51H4.568L8.032.719A3.022,3.022,0,0,1,9.769,0a2.548,2.548,0,0,1,2.37,1.956,10.116,10.116,0,0,1,.232,1.495l.048.442a96.7,96.7,0,0,1,0,10.216l-.048.458a9.034,9.034,0,0,1-.224,1.453A2.542,2.542,0,0,1,9.793,18Zm5.459-3.257a.955.955,0,0,1-.23-1.308A7.955,7.955,0,0,0,16.163,9a7.952,7.952,0,0,0-1.246-4.434.955.955,0,0,1,.23-1.308.91.91,0,0,1,1.278.237A9.869,9.869,0,0,1,18,9a9.869,9.869,0,0,1-1.574,5.505.914.914,0,0,1-.754.4A.9.9,0,0,1,15.148,14.742Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 3)'>
      <path
        d='M12.372,3.451a10.154,10.154,0,0,0-.232-1.494A2.549,2.549,0,0,0,9.769,0,3.02,3.02,0,0,0,8.032.719l-3.463,2.9H2.755a2.7,2.7,0,0,0-2.61,2.51,27.871,27.871,0,0,0,0,5.677,2.646,2.646,0,0,0,2.61,2.579H4.568L8.1,17.324A2.7,2.7,0,0,0,9.688,18h.1a2.542,2.542,0,0,0,2.354-1.981,9.035,9.035,0,0,0,.225-1.453l.047-.458a96.385,96.385,0,0,0,0-10.215Z'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M1.672.4A.91.91,0,0,0,.394.166a.955.955,0,0,0-.23,1.308A7.954,7.954,0,0,1,1.409,5.908,7.957,7.957,0,0,1,.164,10.342a.955.955,0,0,0,.23,1.308.9.9,0,0,0,.524.167.915.915,0,0,0,.755-.4A9.872,9.872,0,0,0,3.246,5.908,9.872,9.872,0,0,0,1.672.4'
        transform='translate(14.754 3.092)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(4 4)'>
      <path
        d='M10.871,12.892a12.254,12.254,0,0,1-.252,1.759A1.728,1.728,0,0,1,8.98,16a1.963,1.963,0,0,1-1.143-.471L4.07,12.469h-2.1A1.832,1.832,0,0,1,.14,10.644a25.623,25.623,0,0,1,0-5.35A1.883,1.883,0,0,1,1.971,3.532h2.1L7.759.525A2.264,2.264,0,0,1,8.98,0a1.729,1.729,0,0,1,1.639,1.349,13.9,13.9,0,0,1,.252,1.76A93.092,93.092,0,0,1,10.871,12.892Z'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A9.312,9.312,0,0,1,1.538,5.3,9.308,9.308,0,0,1,0,10.6'
        transform='translate(14.717 2.574)'
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
        d='M9.75,18a2.736,2.736,0,0,1-1.6-.675L4.377,14.2a.813.813,0,0,1-.113-1.132.784.784,0,0,1,1.114-.116l3.781,3.135a1.114,1.114,0,0,0,.632.3.978.978,0,0,0,.9-.807,7.4,7.4,0,0,0,.175-1.174c.015-.165.031-.328.051-.494.164-1.334.164-8.491,0-9.823l-.05-.47a9.329,9.329,0,0,0-.183-1.229c-.139-.467-.511-.822-.855-.779a1.586,1.586,0,0,0-.738.345L5.379,5.045a.785.785,0,0,1-.5.183H2.77a1.128,1.128,0,0,0-1.054,1.11,25.983,25.983,0,0,0,0,5.259.8.8,0,0,1-.674.91.8.8,0,0,1-.894-.688,27.583,27.583,0,0,1,0-5.692A2.708,2.708,0,0,1,2.77,3.619H4.595L8.079.72A3.156,3.156,0,0,1,9.824,0a2.577,2.577,0,0,1,2.388,1.957,9.961,9.961,0,0,1,.233,1.5l.048.44a95.291,95.291,0,0,1,0,10.217l-.048.455a8.866,8.866,0,0,1-.228,1.454A2.55,2.55,0,0,1,9.851,18C9.816,18,9.784,18,9.75,18Zm5.472-2.965a.813.813,0,0,1-.2-1.12A8.773,8.773,0,0,0,16.417,9a8.764,8.764,0,0,0-1.392-4.914.816.816,0,0,1,.2-1.122.786.786,0,0,1,1.1.2A10.406,10.406,0,0,1,18,9a10.405,10.405,0,0,1-1.676,5.835.785.785,0,0,1-1.1.2Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(4 4)'>
      <path
        d='M10.871,12.892a12.254,12.254,0,0,1-.252,1.759A1.728,1.728,0,0,1,8.98,16a1.963,1.963,0,0,1-1.143-.471L4.07,12.469h-2.1A1.832,1.832,0,0,1,.14,10.644a25.623,25.623,0,0,1,0-5.35A1.883,1.883,0,0,1,1.971,3.532h2.1L7.759.525A2.264,2.264,0,0,1,8.98,0a1.729,1.729,0,0,1,1.639,1.349,13.9,13.9,0,0,1,.252,1.76A93.092,93.092,0,0,1,10.871,12.892Z'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A9.312,9.312,0,0,1,1.538,5.3,9.308,9.308,0,0,1,0,10.6'
        transform='translate(14.717 2.574)'
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
    <g transform='translate(4 5)'>
      <path
        d='M0,0A7.568,7.568,0,0,1,0,7.306'
        transform='translate(14.656 3.635)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,6.621c0,1.219,0,2.648,1.006,3.5s1.805.5,3.108.931,3.128,3.076,5.144,1.881c1.09-.774,1.6-2.236,1.6-6.314S10.371,1.1,9.258.307C7.242-.888,5.417,1.76,4.114,2.188s-2.1.076-3.108.931S0,5.4,0,6.621Z'
        transform='translate(0.667 0.666)'
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
VolumeDown.displayName = 'IconlyVolumeDown'
VolumeDown.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(VolumeDown)
