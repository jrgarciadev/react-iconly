import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Chart = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.669,20H5.33a5.352,5.352,0,0,1-3.94-1.39A5.353,5.353,0,0,1,0,14.67V5.33a5.353,5.353,0,0,1,1.389-3.94A5.353,5.353,0,0,1,5.33,0h9.339a5.345,5.345,0,0,1,3.937,1.389A5.38,5.38,0,0,1,20,5.33v9.34a5.352,5.352,0,0,1-1.39,3.94A5.354,5.354,0,0,1,14.669,20Zm-.02-9.087a.865.865,0,0,0-.449.128.807.807,0,0,0-.38.789v3.28a.826.826,0,0,0,.83.75.843.843,0,0,0,.83-.75V11.83a.839.839,0,0,0-.391-.789A.823.823,0,0,0,14.649,10.913ZM10.051,4a.823.823,0,0,0-.44.128.847.847,0,0,0-.392.79V15.11a.843.843,0,0,0,.831.75.827.827,0,0,0,.83-.75V4.92a.816.816,0,0,0-.379-.79A.872.872,0,0,0,10.051,4ZM5.39,7.282a.822.822,0,0,0-.44.128.843.843,0,0,0-.39.79v6.91a.834.834,0,0,0,1.659,0V8.2a.845.845,0,0,0-.389-.79A.825.825,0,0,0,5.39,7.282Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.676,0H5.333C1.929,0,0,1.929,0,5.333v9.333C0,18.071,1.929,20,5.333,20h9.342C18.08,20,20,18.071,20,14.667V5.333C20,1.929,18.08,0,14.676,0'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.827,0A.833.833,0,0,0,0,.836V7.707a.831.831,0,0,0,1.662,0V.836A.835.835,0,0,0,.827,0'
        transform='translate(4.542 7.369)'
        fill={color}
      />
      <path
        d='M.827,0A.833.833,0,0,0,0,.836V10.987a.831.831,0,0,0,1.662,0V.836A.835.835,0,0,0,.827,0'
        transform='translate(9.209 4.089)'
        fill={color}
      />
      <path
        d='M.836,0A.835.835,0,0,0,0,.836V4.08a.831.831,0,0,0,1.662,0V.836A.833.833,0,0,0,.836,0'
        transform='translate(13.804 10.996)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.476,0V6.86'
        transform='translate(4.895 8.202)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.476,0V10.143'
        transform='translate(9.562 4.919)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.476,0V3.235'
        transform='translate(14.152 11.827)'
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
        d='M6.253,20C2.392,20,0,17.608,0,13.756v-7.5C0,2.392,2.392,0,6.253,0h7.493C17.59,0,20,2.392,20,6.253V8.575a.764.764,0,0,1-.765.765h-.009a.756.756,0,0,1-.756-.774V6.253c0-3.043-1.68-4.723-4.723-4.723H6.253C3.2,1.53,1.53,3.21,1.53,6.253v7.5c0,3.043,1.68,4.714,4.723,4.714h7.493c3.052,0,4.723-1.68,4.723-4.714a.765.765,0,1,1,1.53,0C20,17.608,17.608,20,13.756,20ZM5.7,15.479a.765.765,0,0,1-.738-.791v-6.4a.757.757,0,0,1,.791-.731.766.766,0,0,1,.739.792V14.74a.765.765,0,0,1-.765.739ZM9.27,14.7V5.321a.765.765,0,1,1,1.53,0V14.7a.765.765,0,1,1-1.53,0Zm4.239-.009V11.7a.765.765,0,0,1,1.531,0v2.991a.765.765,0,0,1-1.531,0ZM9.27,5.277v.044Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.476,0V6.86'
        transform='translate(4.895 8.202)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.476,0V10.143'
        transform='translate(9.562 4.919)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.476,0V3.235'
        transform='translate(14.152 11.827)'
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
        d='M.526,0V6.694'
        transform='translate(4.657 7.961)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.526,0V9.9'
        transform='translate(9.211 4.757)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.526,0V3.157'
        transform='translate(13.689 11.498)'
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
Chart.displayName = 'IconlyChart'
Chart.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Chart)
