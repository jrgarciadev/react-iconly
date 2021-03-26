import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const VolumeUp = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(1 3)'>
      <path
        d='M9.677,18a2.693,2.693,0,0,1-1.588-.676l-3.526-2.94H2.752A2.645,2.645,0,0,1,.145,11.8a27.953,27.953,0,0,1,0-5.677,2.7,2.7,0,0,1,2.607-2.51H4.563l3.46-2.9A3.014,3.014,0,0,1,9.758,0a2.548,2.548,0,0,1,2.368,1.956,10.232,10.232,0,0,1,.231,1.495l.048.442a96.7,96.7,0,0,1,0,10.216l-.048.458a9.034,9.034,0,0,1-.224,1.453A2.54,2.54,0,0,1,9.782,18Zm8.614-.22a.957.957,0,0,1-.23-1.308A13.405,13.405,0,0,0,20.165,9,13.4,13.4,0,0,0,18.06,1.529.958.958,0,0,1,18.29.221a.9.9,0,0,1,1.277.236A15.319,15.319,0,0,1,22,9a15.318,15.318,0,0,1-2.433,8.544.912.912,0,0,1-.753.4A.9.9,0,0,1,18.291,17.78Zm-3.162-3.038a.957.957,0,0,1-.23-1.308A7.957,7.957,0,0,0,16.143,9,7.955,7.955,0,0,0,14.9,4.566a.957.957,0,0,1,.229-1.308.907.907,0,0,1,1.279.237A9.878,9.878,0,0,1,17.978,9a9.878,9.878,0,0,1-1.571,5.505.9.9,0,0,1-1.278.237Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(1 3)'>
      <path
        d='M12.357,3.451a10.165,10.165,0,0,0-.232-1.494A2.547,2.547,0,0,0,9.758,0,3.014,3.014,0,0,0,8.022.719l-3.459,2.9H2.752A2.7,2.7,0,0,0,.145,6.127a27.9,27.9,0,0,0,0,5.677,2.644,2.644,0,0,0,2.607,2.579H4.563l3.526,2.941A2.694,2.694,0,0,0,9.677,18h.1a2.539,2.539,0,0,0,2.351-1.981,9.044,9.044,0,0,0,.224-1.453l.047-.458a96.5,96.5,0,0,0,0-10.215Z'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M1.671.4A.907.907,0,0,0,.392.167.957.957,0,0,0,.164,1.475,7.956,7.956,0,0,1,1.407,5.909,7.959,7.959,0,0,1,.164,10.343a.956.956,0,0,0,.23,1.308.9.9,0,0,0,1.277-.236A9.876,9.876,0,0,0,3.242,5.909,9.876,9.876,0,0,0,1.671.4'
        transform='translate(14.736 3.091)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M1.67.4A.905.905,0,0,0,.393.167a.958.958,0,0,0-.23,1.308,13.407,13.407,0,0,1,2.1,7.471,13.408,13.408,0,0,1-2.1,7.472.957.957,0,0,0,.231,1.308.9.9,0,0,0,.522.167.912.912,0,0,0,.754-.4A15.317,15.317,0,0,0,4.1,8.946,15.319,15.319,0,0,0,1.67.4'
        transform='translate(17.898 0.054)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(1.6 4)'>
      <path
        d='M10.871,12.892a12.254,12.254,0,0,1-.252,1.759A1.728,1.728,0,0,1,8.98,16a1.963,1.963,0,0,1-1.143-.471L4.07,12.469h-2.1A1.831,1.831,0,0,1,.141,10.644a25.553,25.553,0,0,1,0-5.35A1.882,1.882,0,0,1,1.972,3.532h2.1L7.759.525A2.264,2.264,0,0,1,8.98,0a1.729,1.729,0,0,1,1.639,1.349,13.9,13.9,0,0,1,.252,1.76A93.1,93.1,0,0,1,10.871,12.892Z'
        transform='translate(0 0.25)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A8.794,8.794,0,0,1,1.453,5.008,8.791,8.791,0,0,1,0,10.015'
        transform='translate(14.843 3.06)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A14.165,14.165,0,0,1,2.341,8.068,14.169,14.169,0,0,1,0,16.137'
        transform='translate(18.274 0)'
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
    <g transform='translate(1 2.5)'>
      <path
        d='M18.376,18.855a.831.831,0,0,1-.193-1.124,13.664,13.664,0,0,0,1.923-4.763.782.782,0,0,1,.919-.618.807.807,0,0,1,.59.961,15.348,15.348,0,0,1-2.165,5.343.765.765,0,0,1-.635.346A.743.743,0,0,1,18.376,18.855Zm-8.869-.323a2.626,2.626,0,0,1-1.562-.677L4.269,14.72a.832.832,0,0,1-.112-1.136.749.749,0,0,1,1.086-.116l3.688,3.145a1.086,1.086,0,0,0,.615.3c.381.027.739-.314.881-.812a7.923,7.923,0,0,0,.17-1.178c.015-.166.032-.329.05-.495.161-1.338.161-8.522,0-9.859L10.6,4.1a9.245,9.245,0,0,0-.18-1.234c-.134-.47-.5-.825-.833-.783a1.542,1.542,0,0,0-.719.346l-3.622,3.1a.75.75,0,0,1-.49.184H2.7c-.648,0-.955.575-1.027,1.114a26.916,26.916,0,0,0,0,5.278.8.8,0,0,1-.657.912.786.786,0,0,1-.872-.689,28.568,28.568,0,0,1,0-5.712A2.677,2.677,0,0,1,2.7,4.1h1.78l3.4-2.909A3.024,3.024,0,0,1,9.58.468a2.531,2.531,0,0,1,2.327,1.963,10.383,10.383,0,0,1,.228,1.5l.046.442a98.418,98.418,0,0,1,0,10.255l-.046.456a9.177,9.177,0,0,1-.222,1.46,2.505,2.505,0,0,1-2.307,1.989C9.571,18.532,9.54,18.531,9.507,18.532Zm5.336-2.975a.832.832,0,0,1-.193-1.125A8.982,8.982,0,0,0,16.008,9.5a8.984,8.984,0,0,0-1.359-4.933.831.831,0,0,1,.193-1.124.752.752,0,0,1,1.075.2A10.67,10.67,0,0,1,17.553,9.5a10.666,10.666,0,0,1-1.635,5.855.761.761,0,0,1-.634.346A.749.749,0,0,1,14.843,15.557ZM20.455,9.5a15,15,0,0,0-2.272-8.231A.835.835,0,0,1,18.375.143a.755.755,0,0,1,1.076.2A16.673,16.673,0,0,1,22,9.5a.773.773,0,1,1-1.544,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(1.6 4)'>
      <path
        d='M10.871,12.892a12.254,12.254,0,0,1-.252,1.759A1.728,1.728,0,0,1,8.98,16a1.963,1.963,0,0,1-1.143-.471L4.07,12.469h-2.1A1.831,1.831,0,0,1,.141,10.644a25.553,25.553,0,0,1,0-5.35A1.882,1.882,0,0,1,1.972,3.532h2.1L7.759.525A2.264,2.264,0,0,1,8.98,0a1.729,1.729,0,0,1,1.639,1.349,13.9,13.9,0,0,1,.252,1.76A93.1,93.1,0,0,1,10.871,12.892Z'
        transform='translate(0 0.25)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A8.794,8.794,0,0,1,1.453,5.008,8.791,8.791,0,0,1,0,10.015'
        transform='translate(14.843 3.06)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0A14.165,14.165,0,0,1,2.341,8.068,14.169,14.169,0,0,1,0,16.137'
        transform='translate(18.274 0)'
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
    <g transform='translate(2 4.5)'>
      <path
        d='M0,0A11.128,11.128,0,0,1,0,12.357'
        transform='translate(17.436 1.274)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A7.74,7.74,0,0,1,0,7.472'
        transform='translate(14.989 3.717)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,6.771c0,1.246,0,2.708,1.029,3.582s1.846.514,3.178.952,3.2,3.146,5.261,1.924c1.115-.792,1.64-2.286,1.64-6.457s-.5-5.649-1.64-6.457C7.407-.908,5.54,1.8,4.208,2.238s-2.148.078-3.178.952S0,5.525,0,6.771Z'
        transform='translate(0.682 0.682)'
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
VolumeUp.displayName = 'IconlyVolumeUp'
VolumeUp.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(VolumeUp)
