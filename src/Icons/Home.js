import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Home = ({ color, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M6.635,18.773V15.716A1.419,1.419,0,0,1,8.058,14.3h2.874a1.429,1.429,0,0,1,1.007.414,1.408,1.408,0,0,1,.417,1v3.058a1.213,1.213,0,0,0,.356.867,1.231,1.231,0,0,0,.871.36h1.961a3.46,3.46,0,0,0,2.443-1A3.41,3.41,0,0,0,19,16.578V7.867a2.473,2.473,0,0,0-.9-1.9L11.434.676A3.1,3.1,0,0,0,7.485.747L.967,5.965A2.474,2.474,0,0,0,0,7.867v8.7A3.444,3.444,0,0,0,3.456,20H5.372a1.231,1.231,0,0,0,1.236-1.218Z'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M6.657,18.771V15.7a1.426,1.426,0,0,1,1.424-1.419h2.886A1.426,1.426,0,0,1,12.4,15.7h0v3.076A1.225,1.225,0,0,0,13.6,20h1.924A3.456,3.456,0,0,0,19,16.562h0V7.838a2.439,2.439,0,0,0-.962-1.9L11.458.685a3.18,3.18,0,0,0-3.944,0L.962,5.943A2.42,2.42,0,0,0,0,7.847v8.714A3.456,3.456,0,0,0,3.473,20H5.4a1.235,1.235,0,0,0,1.241-1.229h0'
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
    <g transform='translate(2.5 2.004)'>
      <path
        d='M3.921,19.84A3.93,3.93,0,0,1,0,15.917V7.952A3.025,3.025,0,0,1,1.174,5.6L1.9,5.065a.783.783,0,0,1,.9,1.244l-.7.522a1.469,1.469,0,0,0-.531,1.121v7.957a2.365,2.365,0,0,0,2.356,2.347h4v.018a.783.783,0,0,1,0,1.565Zm9.2-.009a1.9,1.9,0,0,1-1.9-1.9v-3.6a.5.5,0,0,0-.5-.5H8.1a.5.5,0,0,0-.5.513v1.373a.783.783,0,1,1-1.565,0V14.344a2.08,2.08,0,0,1,2.078-2.079h2.609a2.079,2.079,0,0,1,2.07,2.079v3.591a.33.33,0,0,0,.33.33H14.9a2.348,2.348,0,0,0,2.348-2.348V7.952a1.471,1.471,0,0,0-.556-1.13L10.687,2.03a2.052,2.052,0,0,0-2.608,0L6.148,3.474a.8.8,0,1,1-.931-1.3L7.122.8a3.609,3.609,0,0,1,4.522,0l6.009,4.792a3.052,3.052,0,0,1,1.138,2.348l-.008,7.974a3.922,3.922,0,0,1-3.922,3.921Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M6.657,18.771V15.7a1.426,1.426,0,0,1,1.424-1.419h2.886A1.426,1.426,0,0,1,12.4,15.7h0v3.076A1.225,1.225,0,0,0,13.6,20h1.924A3.456,3.456,0,0,0,19,16.562h0V7.838a2.439,2.439,0,0,0-.962-1.9L11.458.685a3.18,3.18,0,0,0-3.944,0L.962,5.943A2.42,2.42,0,0,0,0,7.847v8.714A3.456,3.456,0,0,0,3.473,20H5.4a1.235,1.235,0,0,0,1.241-1.229h0'
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
    <g transform='translate(2.4 2)'>
      <path
        d='M0,.5H5.815'
        transform='translate(6.679 13.635)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,11.713c0-5.631.614-5.238,3.919-8.3C5.365,2.246,7.615,0,9.558,0s4.237,2.235,5.7,3.41c3.305,3.065,3.918,2.672,3.918,8.3C19.172,20,17.213,20,9.586,20S0,20,0,11.713Z'
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
      return <Bold />
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
Home.displayName = 'IconlyHome'
Home.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Home)
