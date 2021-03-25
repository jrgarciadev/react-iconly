import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Activity = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M5.4,20a5.469,5.469,0,0,1-3.976-1.428A5.474,5.474,0,0,1,0,14.6V7.2A5.5,5.5,0,0,1,1.425,3.215,5.455,5.455,0,0,1,5.4,1.78H13.45a4.858,4.858,0,0,0-.059.75A4.069,4.069,0,0,0,17.45,6.6a4.668,4.668,0,0,0,.74-.068V14.6a5.47,5.47,0,0,1-1.425,3.973A5.466,5.466,0,0,1,12.79,20ZM7.19,8.96a.781.781,0,0,0-.5.3L3.731,13.11l-.061.09a.747.747,0,0,0,.21.95.832.832,0,0,0,.46.15h.026A.715.715,0,0,0,4.93,14l2.51-3.231,2.849,2.141.09.058a.749.749,0,0,0,.95-.21l2.89-3.729-.04.02A.75.75,0,0,0,14.26,8.3a.736.736,0,0,0-.608-.439c-.028,0-.056,0-.084,0a.768.768,0,0,0-.617.314L10.531,11.3,7.76,9.121a.783.783,0,0,0-.481-.165C7.25,8.956,7.22,8.958,7.19,8.96Zm7.99-6.55a2.41,2.41,0,1,1,2.41,2.41A2.411,2.411,0,0,1,15.18,2.41Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M12.662,18H5.346A5.415,5.415,0,0,1,1.41,16.588,5.4,5.4,0,0,1,0,12.661V5.356A5.428,5.428,0,0,1,1.41,1.42,5.4,5.4,0,0,1,5.346,0h7.967a3.909,3.909,0,0,0-.07.738A4.029,4.029,0,0,0,17.27,4.759a4.142,4.142,0,0,0,.73-.07v7.972a5.405,5.405,0,0,1-1.409,3.927A5.4,5.4,0,0,1,12.662,18ZM7.222,7.079a.752.752,0,0,0-.1.006.741.741,0,0,0-.493.29L3.676,11.186a.728.728,0,0,0-.158.457.739.739,0,0,0,1.363.43l2.47-3.2,2.743,2.152a.747.747,0,0,0,.464.163.741.741,0,0,0,.592-.3l2.858-3.687V7.191a.75.75,0,0,0-.14-1.045.73.73,0,0,0-1.038.149L10.42,9.4,7.677,7.235A.742.742,0,0,0,7.222,7.079Z'
        transform='translate(0 2)'
        fill={color}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        transform='translate(15)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 1.5)'>
      <path
        d='M0,4.989,2.993,1.1,6.407,3.78,9.336,0'
        transform='translate(5.245 8.293)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='1.922'
        cy='1.922'
        r='1.922'
        transform='translate(16.073 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.146,0H4.879C1.867,0,0,2.133,0,5.144v8.082c0,3.011,1.831,5.135,4.879,5.135h8.6c3.011,0,4.879-2.124,4.879-5.135V6.188'
        transform='translate(0.778 1.62)'
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
        d='M10.305,20a.741.741,0,0,1-.743-.732.751.751,0,0,1,.743-.741h2.952c2.925,0,4.542-1.6,4.568-4.532V7.522a.729.729,0,1,1,1.459,0v6.473c0,3.7-2.316,6-6.027,6ZM0,13.995v-7.2C0,3.078,2.307.776,6.018.776h6.505a.743.743,0,0,1,.733.741.734.734,0,0,1-.742.733h-6.5c-2.925,0-4.542,1.614-4.542,4.541v7.2c0,2.928,1.617,4.532,4.542,4.532a.75.75,0,0,1,.743.741A.741.741,0,0,1,6.018,20C2.307,20,0,17.7,0,13.995Zm4.648-.608a.741.741,0,0,1-.132-1.032L7.406,8.6a.745.745,0,0,1,1.043-.132l2.713,2.126,2.387-3.043A.733.733,0,0,1,14.7,8.43l-2.828,3.642a.789.789,0,0,1-.5.282.742.742,0,0,1-.539-.158L8.122,10.071,5.683,13.236a.737.737,0,0,1-.592.3A.737.737,0,0,1,4.648,13.387ZM14.8,2.6a2.6,2.6,0,1,1,2.6,2.583A2.585,2.585,0,0,1,14.8,2.6Zm1.476,0A1.122,1.122,0,1,0,17.4,1.481,1.122,1.122,0,0,0,16.279,2.6Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 1.5)'>
      <path
        d='M0,4.989,2.993,1.1,6.407,3.78,9.336,0'
        transform='translate(5.245 8.293)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <circle
        cx='1.922'
        cy='1.922'
        r='1.922'
        transform='translate(16.073 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.146,0H4.879C1.867,0,0,2.133,0,5.144v8.082c0,3.011,1.831,5.135,4.879,5.135h8.6c3.011,0,4.879-2.124,4.879-5.135V6.188'
        transform='translate(0.778 1.62)'
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
    <g transform='translate(2.45 2.35)'>
      <path
        d='M0,4.989,2.993,1.1,6.407,3.78,9.336,0'
        transform='translate(4.468 7.515)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1.922,0A1.922,1.922,0,1,1,0,1.922,1.921,1.921,0,0,1,1.922,0Z'
        transform='translate(15.296 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.306,6.216A20.809,20.809,0,0,1,18.5,9.25c0,6.938-2.312,9.25-9.25,9.25S0,16.188,0,9.25,2.313,0,9.25,0a20.931,20.931,0,0,1,2.983.187'
        transform='translate(0 0.703)'
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
Activity.displayName = 'IconlyActivity'
Activity.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Activity)
