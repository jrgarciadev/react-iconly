import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const CloseSquare = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 1.999)'>
      <path
        d='M14.34,20H5.67C2.279,20,0,17.625,0,14.091V5.92C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.92v8.171C20,17.625,17.725,20,14.34,20ZM10,11.231h0L11.78,13a.815.815,0,0,0,.61.261A.873.873,0,0,0,13.01,13a.869.869,0,0,0,0-1.228l-1.78-1.78L13.01,8.21a.875.875,0,0,0-.616-1.494.89.89,0,0,0-.624.256L10,8.75,8.22,6.971A.89.89,0,0,0,7.6,6.716.876.876,0,0,0,6.98,8.21L8.76,9.991,6.98,11.761a.88.88,0,0,0,.619,1.5A.873.873,0,0,0,8.22,13L10,11.232Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M14.34,0H5.67C2.28,0,0,2.38,0,5.92v8.17C0,17.62,2.28,20,5.67,20h8.67C17.73,20,20,17.62,20,14.09V5.92C20,2.38,17.73,0,14.34,0'
        transform='translate(2 2)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M6.29,5.052,4.511,3.274,6.289,1.5A.875.875,0,0,0,5.052.258L3.273,2.036,1.494.256A.875.875,0,1,0,.256,1.494l1.78,1.78L.26,5.049A.875.875,0,0,0,1.5,6.287L3.273,4.511,5.053,6.29A.875.875,0,0,0,6.29,5.052'
        transform='translate(8.726 8.719)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M4.792,0,0,4.792'
        transform='translate(7.603 7.595)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.8,4.8,0,0'
        transform='translate(7.601 7.593)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.751 0.75)'
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
        d='M6.253,20C2.392,20,0,17.608,0,13.756v-7.5C0,2.392,2.392,0,6.253,0h7.5C17.59,0,20,2.392,20,6.253V8.822a.756.756,0,0,1-.756.756h-.009V9.56A.765.765,0,0,1,18.47,8.8V6.253c0-3.053-1.67-4.723-4.714-4.723h-7.5C3.21,1.53,1.53,3.21,1.53,6.253v7.5c0,3.034,1.68,4.714,4.723,4.714h7.5c3.043,0,4.714-1.68,4.714-4.714a.765.765,0,0,1,1.53,0C20,17.608,17.608,20,13.756,20Zm.861-7.072-.022-.016a.773.773,0,0,1,.038-1.082l.684-.684a.765.765,0,1,1,1.044,1.119l-.681.681a.764.764,0,0,1-1.063-.018Zm4.958-.112-.038-.037L7.255,8a.817.817,0,0,1-.013-1.108.755.755,0,0,1,1.069-.013l.008.006,1.865,1.867,1.7-1.7a.783.783,0,0,1,1.088.007.745.745,0,0,1,.135.183.768.768,0,0,1-.122.925l-1.69,1.689L13.129,11.7a.77.77,0,0,1,.029,1.091c0,.006-.011.01-.015.016a.767.767,0,0,1-1.07.012Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M2.4,2.4,0,4.794,2.4,2.4,0,0,2.4,2.4,4.794,0,2.4,2.4,4.8,4.8Z'
        transform='translate(7.601 7.593)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.751 0.75)'
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
        d='M4.792,0,0,4.792'
        transform='translate(7.602 7.595)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.8,4.8,0,0'
        transform='translate(7.6 7.593)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
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
CloseSquare.displayName = 'IconlyCloseSquare'
CloseSquare.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(CloseSquare)
