import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Logout = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M4.517,20A4.482,4.482,0,0,1,0,15.56V4.45A4.493,4.493,0,0,1,4.528,0H9.492A4.48,4.48,0,0,1,14,4.44V9.23H7.9a.77.77,0,1,0,0,1.54H14v4.78A4.493,4.493,0,0,1,9.472,20ZM16.54,13.451a.773.773,0,0,1,0-1.09l1.6-1.59H14V9.23h4.14l-1.6-1.59a.773.773,0,0,1,0-1.09.764.764,0,0,1,1.09-.01l2.92,2.91a.766.766,0,0,1,.229.55.741.741,0,0,1-.229.54l-2.92,2.911a.762.762,0,0,1-1.09,0Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,4.447A4.492,4.492,0,0,1,4.525,0H9.486A4.481,4.481,0,0,1,14,4.437V15.553A4.492,4.492,0,0,1,9.474,20H4.515A4.481,4.481,0,0,1,0,15.563V4.447Z'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M12.98,3.134,10.135.225a.736.736,0,0,0-1.061,0,.785.785,0,0,0,0,1.089l1.559,1.593H.75a.77.77,0,0,0,0,1.54h9.885L9.076,6.042a.785.785,0,0,0,0,1.089.735.735,0,0,0,1.061,0L12.98,4.225a.784.784,0,0,0,0-1.091'
        transform='translate(6.799 6.321)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M12.244,4.618V3.685A3.685,3.685,0,0,0,8.559,0H3.684A3.685,3.685,0,0,0,0,3.685v11.13A3.685,3.685,0,0,0,3.684,18.5H8.569a3.675,3.675,0,0,0,3.675-3.674v-.943'
        transform='translate(0.772 0.771)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.041.5H0'
        transform='translate(7.768 9.521)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.915,0,5.831'
        transform='translate(16.881 7.106)'
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
    <g transform='translate(2 2.5)'>
      <path
        d='M4.33,19A4.284,4.284,0,0,1,0,14.775a.74.74,0,0,1,.75-.731.74.74,0,0,1,.75.731A2.8,2.8,0,0,0,4.33,17.537H9.077A2.79,2.79,0,0,0,11.9,14.785v-.894a.75.75,0,0,1,1.5,0v.894A4.273,4.273,0,0,1,9.077,19Zm11.543-6.219a.719.719,0,0,1,0-1.035l1.56-1.514H7.549a.732.732,0,1,1,0-1.464h11.7a.75.75,0,0,1,.693.453.721.721,0,0,1-.164.8l-2.846,2.764a.763.763,0,0,1-1.06,0ZM0,11.449V4.215A4.274,4.274,0,0,1,4.322,0H9.068A4.284,4.284,0,0,1,13.4,4.225v.885a.75.75,0,0,1-1.5,0V4.225A2.8,2.8,0,0,0,9.068,1.463H4.322A2.79,2.79,0,0,0,1.5,4.215v7.234a.742.742,0,0,1-.751.732A.741.741,0,0,1,0,11.449Zm16.594-3.5-.718-.692a.718.718,0,0,1,0-1.034.76.76,0,0,1,1.06-.005l.717.691a.719.719,0,0,1,.005,1.035.763.763,0,0,1-1.06.005Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M12.244,4.618V3.685A3.685,3.685,0,0,0,8.559,0H3.684A3.685,3.685,0,0,0,0,3.685v11.13A3.685,3.685,0,0,0,3.684,18.5H8.569a3.675,3.675,0,0,0,3.675-3.674v-.943'
        transform='translate(0.772 0.771)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M12.041.5H0'
        transform='translate(7.768 9.521)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.915,0,5.831'
        transform='translate(16.881 7.106)'
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
        d='M12.041.5H0'
        transform='translate(7.75 9.621)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(16.864 7.205)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.88C-.33,1.3-1.67,0-7,0c-7.1,0-7.1,2.31-7.1,9.25s0,9.25,7.1,9.25c5.33,0,6.67-1.3,7-4.88'
        transform='translate(14.36 0.75)'
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
Logout.displayName = 'IconlyLogout'
Logout.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Logout)
