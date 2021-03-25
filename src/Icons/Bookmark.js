import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Bookmark = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(4 2)'>
      <path
        d='M14.986,20a1.026,1.026,0,0,1-.515-.141L7.99,16.62,1.5,19.86a1.069,1.069,0,0,1-.491.13A1.016,1.016,0,0,1,0,18.97V3.79A3.316,3.316,0,0,1,1.437.875,6.154,6.154,0,0,1,4.9,0h6.17a6.181,6.181,0,0,1,3.47.875A3.362,3.362,0,0,1,16,3.79V18.97a1.022,1.022,0,0,1-.74.99A.933.933,0,0,1,14.986,20ZM4.22,6.04a.79.79,0,0,0,0,1.58h7.53a.79.79,0,0,0,0-1.58Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const Bulk = () => (
    <g transform='translate(4 2)'>
      <path
        d='M7.991,4.913,1.5,8.155a1.019,1.019,0,0,1-1.376-.4A1.09,1.09,0,0,1,0,7.258V0C0,.72.406,1.164,1.473,1.661Z'
        transform='translate(0 11.709)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M14.98,20a1.012,1.012,0,0,1-.506-.136L7.991,16.621,1.473,13.37C.4,12.87,0,12.419,0,11.709V3.793A3.322,3.322,0,0,1,1.435.874,6.145,6.145,0,0,1,4.9,0h6.174A6.188,6.188,0,0,1,14.54.874,3.36,3.36,0,0,1,16,3.793V18.967a1.065,1.065,0,0,1-.123.489,1.023,1.023,0,0,1-.616.5A1.012,1.012,0,0,1,14.98,20ZM4.225,6.041a.791.791,0,0,0,0,1.581h7.524a.791.791,0,0,0,0-1.581Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M7.368,15.854,1.437,19.1a.989.989,0,0,1-1.318-.394h0A1.043,1.043,0,0,1,0,18.243V3.844C0,1.1,1.876,0,4.577,0H10.92C13.538,0,15.5,1.025,15.5,3.661V18.243a.979.979,0,0,1-.979.979,1.08,1.08,0,0,1-.476-.119L8.073,15.854A.741.741,0,0,0,7.368,15.854Z'
        transform='translate(0.796 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.458H7.3'
        transform='translate(4.87 6.865)'
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
    <g transform='translate(4 2)'>
      <path
        d='M11.526,0h-6.9C1.784,0,0,1.986,0,5.172V18.323A1.658,1.658,0,0,0,1.638,20a1.625,1.625,0,0,0,.784-.2l5.612-3.116,6.534,3.133a.709.709,0,0,0,.555,0,.733.733,0,0,0,.394-.4.759.759,0,0,0-.319-.883L8.707,15.428a1.385,1.385,0,0,0-1.362,0L1.724,18.535a.211.211,0,0,1-.207,0,.213.213,0,0,1-.095-.185V5.172c.009-2.357,1.164-3.7,3.233-3.7h6.9c2.655,0,3.043,2.207,3.043,3.53v.6H7.129a.708.708,0,0,0-.5.233.743.743,0,0,0-.191.526.715.715,0,0,0,.69.706h7.44v7.723A.716.716,0,1,0,16,14.8h0V5C16,1.915,14.293,0,11.526,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M7.368,15.854,1.437,19.1a.989.989,0,0,1-1.318-.394h0A1.043,1.043,0,0,1,0,18.243V3.844C0,1.1,1.876,0,4.577,0H10.92C13.538,0,15.5,1.025,15.5,3.661V18.243a.979.979,0,0,1-.979.979,1.08,1.08,0,0,1-.476-.119L8.073,15.854A.741.741,0,0,0,7.368,15.854Z'
        transform='translate(0.796 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.458H7.3'
        transform='translate(4.87 6.865)'
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
    <g transform='translate(4.5 2.5)'>
      <path
        d='M0,.5H6.855'
        transform='translate(4.042 6.218)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.47,0C1.083,0,0,.932,0,8.429,0,16.822-.153,19,1.443,19s4.2-3.684,6.027-3.684S11.9,19,13.5,19s1.439-2.178,1.439-10.571C14.936.932,13.857,0,7.47,0Z'
        transform='translate(0)'
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
Bookmark.displayName = 'IconlyBookmark'
Bookmark.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Bookmark)
