import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Discovery = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20A10,10,0,0,1,2.926,2.93,10,10,0,1,1,17.07,17.074,9.936,9.936,0,0,1,10,20ZM13.428,6.118a.459.459,0,0,0-.137.021L8.17,7.74a.669.669,0,0,0-.44.44l-1.6,5.13a.435.435,0,0,0,.064.393.45.45,0,0,0,.361.188.437.437,0,0,0,.135-.022l5.1-1.6a.644.644,0,0,0,.44-.44L13.85,6.71a.454.454,0,0,0-.066-.409A.445.445,0,0,0,13.428,6.118Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7.742.592l-1.62,5.12a.651.651,0,0,1-.44.441l-5.1,1.6a.448.448,0,0,1-.56-.56l1.6-5.13a.668.668,0,0,1,.44-.44l5.12-1.6a.449.449,0,0,1,.56.57'
        transform='translate(6.118 6.113)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,6.682,1.593,1.593,6.682,0,5.089,5.089Z'
        transform='translate(6.27 6.27)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='9.611'
        cy='9.611'
        r='9.611'
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

  const Broken = () => (
    <g transform='translate(2 2)'>
      <path
        d='M5.741,19.05A10,10,0,0,1,10,0a9.659,9.659,0,0,1,2.174.246,9.982,9.982,0,0,1,7.576,11.984.781.781,0,1,1-1.508-.386,8.4,8.4,0,1,0-1.561,3.319.781.781,0,0,1,1.211.957A9.978,9.978,0,0,1,5.741,19.05Zm.826-5.108a.775.775,0,0,1-.509-.975L7.584,8.086a.781.781,0,0,1,.509-.5l4.876-1.527a.671.671,0,0,1,.455,0,.763.763,0,0,1,.509.966l-1.561,4.89a.773.773,0,0,1-.394.465l-.877.439a.781.781,0,0,1-.666-1.4l.588-.29L12,7.98l-3.069.966-1.4,4.486a.772.772,0,0,1-.965.509Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,6.682,1.593,1.593,6.682,0,5.089,5.089Z'
        transform='translate(6.27 6.27)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <circle
        cx='9.611'
        cy='9.611'
        r='9.611'
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
        d='M0,6.6l1.574-5.03L6.6,0,5.03,5.029Z'
        transform='translate(6.698 6.698)'
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
Discovery.displayName = 'IconlyDiscovery'
Discovery.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Discovery)
