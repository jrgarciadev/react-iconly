import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Send = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M19.435.582A1.933,1.933,0,0,0,17.5.079L1.408,4.76A1.919,1.919,0,0,0,.024,6.281a2.253,2.253,0,0,0,1,2.1L6.06,11.477a1.3,1.3,0,0,0,1.61-.193l5.763-5.8a.734.734,0,0,1,1.06,0,.763.763,0,0,1,0,1.067l-5.773,5.8a1.324,1.324,0,0,0-.193,1.619L11.6,19.054A1.91,1.91,0,0,0,13.263,20a2.078,2.078,0,0,0,.25-.01A1.95,1.95,0,0,0,15.144,18.6L19.916,2.525a1.964,1.964,0,0,0-.48-1.943'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M19.427.578a1.938,1.938,0,0,0-1.93-.5L1.407,4.727A1.914,1.914,0,0,0,.024,6.238a2.235,2.235,0,0,0,1,2.09L6.057,11.4a1.308,1.308,0,0,0,1.609-.191l5.761-5.761a.735.735,0,0,1,1.06,0,.754.754,0,0,1,0,1.06L8.716,12.269a1.31,1.31,0,0,0-.193,1.609l3.074,5.05a2,2,0,0,0,1.91.929,1.944,1.944,0,0,0,1.63-1.38l4.77-15.969a1.943,1.943,0,0,0-.48-1.93'
        transform='translate(0)'
        fill={color}
      />
      <path
        d='M4.765,7.626a.75.75,0,0,1,0-1.06L6.13,5.2A.75.75,0,0,1,7.191,6.26L5.825,7.626a.75.75,0,0,1-1.06,0ZM3.981,3.838a.75.75,0,0,1,0-1.06L5.346,1.411A.75.75,0,0,1,6.407,2.472L5.041,3.838a.75.75,0,0,1-1.06,0ZM.22,2.645a.75.75,0,0,1,0-1.06L1.585.219A.75.75,0,0,1,2.646,1.28L1.28,2.645a.75.75,0,0,1-1.06,0Z'
        transform='translate(0.261 11.943)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 3)'>
      <path
        d='M12.855,5.121l-5.664,5.7L.561,6.741A1.182,1.182,0,0,1,.847,4.6L16.5.047a1.176,1.176,0,0,1,1.447,1.471L13.3,17.158a1.168,1.168,0,0,1-2.123.274l-3.989-6.61'
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
        d='M11.6,19.054l-4.1-6.79a.76.76,0,0,1,.112-.926L13.434,5.48a.745.745,0,0,1,1.06,0,.759.759,0,0,1,0,1.067l-5.4,5.44,3.794,6.282a.452.452,0,0,0,.822-.105l2.322-7.816a.748.748,0,0,1,.934-.507.756.756,0,0,1,.5.94L15.144,18.6a1.933,1.933,0,0,1-1.625,1.387,1.787,1.787,0,0,1-.258.017A1.925,1.925,0,0,1,11.6,19.054ZM4.323,10.407.936,8.322a1.97,1.97,0,0,1,.477-3.567L17.5.077a1.943,1.943,0,0,1,1.93.5,1.975,1.975,0,0,1,.484,1.948l-1.249,4.2A.75.75,0,1,1,17.232,6.3l1.248-4.2a.455.455,0,0,0-.56-.57L1.83,6.206a.458.458,0,0,0-.112.828L5.1,9.118a.758.758,0,0,1,.247,1.039.747.747,0,0,1-.64.361A.735.735,0,0,1,4.323,10.407Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 2.5)'>
      <path
        d='M5.821,0,0,5.821'
        transform='translate(7.391 5.227)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M7.391,11.048.576,6.881A1.2,1.2,0,0,1,.87,4.7L16.96.049a1.2,1.2,0,0,1,1.487,1.5L13.673,17.514a1.2,1.2,0,0,1-2.182.28l-4.1-6.746'
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
    <g transform='translate(2.8 2.8)'>
      <path
        d='M8.693,9.638S-3.283,7.161.879,4.758C4.391,2.731,16.495-.755,18.186.146c.9,1.691-2.585,13.795-4.612,17.307C11.171,21.615,8.693,9.638,8.693,9.638Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,9.492,9.492,0'
        transform='translate(8.693 0.146)'
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
Send.displayName = 'IconlySend'
Send.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Send)
