import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const AddUser = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M0,15.746c0-2.585,3.454-3.231,7.5-3.231,4.067,0,7.5.669,7.5,3.253S11.545,19,7.5,19C3.434,19,0,18.329,0,15.746Zm16.1-5.658V8.911H14.9a.912.912,0,0,1,0-1.823h1.2V5.911a.9.9,0,1,1,1.8,0V7.088h1.2a.912.912,0,0,1,0,1.823H17.9v1.177a.9.9,0,1,1-1.8,0ZM2.537,5.027a4.963,4.963,0,1,1,9.925,0,4.963,4.963,0,1,1-9.925,0Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M5.1,2.088H3.9V.912a.9.9,0,1,0-1.8,0V2.088H.9a.912.912,0,0,0,0,1.823H2.1V5.088a.9.9,0,1,0,1.8,0V3.911H5.1a.912.912,0,0,0,0-1.823'
        transform='translate(14 5)'
        fill={color}
      />
      <path
        d='M7.5,0C3.454,0,0,.647,0,3.231S3.433,6.484,7.5,6.484c4.045,0,7.5-.647,7.5-3.231S11.567,0,7.5,0'
        transform='translate(0 12.516)'
        fill={color}
      />
      <path
        d='M4.963,10.054A4.977,4.977,0,0,0,9.925,5.028,4.963,4.963,0,1,0,0,5.028a4.977,4.977,0,0,0,4.963,5.027'
        transform='translate(2.537 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M7.127,0C3.283,0,0,.581,0,2.909s3.262,2.93,7.127,2.93c3.844,0,7.127-.582,7.127-2.909S10.992,0,7.127,0Z'
        transform='translate(0.75 13.206)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.568,9.136A4.568,4.568,0,1,0,0,4.568,4.552,4.552,0,0,0,4.568,9.136Z'
        transform='translate(3.309 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V4.01'
        transform='translate(16.704 6.669)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.09.5H0'
        transform='translate(15.16 8.174)'
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
        d='M6.909,19.987a.718.718,0,0,1-.694-.74.734.734,0,0,1,.735-.7q.477.015.971.014c4.306,0,6.49-.751,6.49-2.235s-2.183-2.254-6.49-2.254-6.491.752-6.491,2.234c0,.485.171,1.188,1.659,1.694a.718.718,0,0,1-.459,1.361C.456,18.625,0,17.3,0,16.31c0-3.29,4.521-3.67,7.922-3.67,1.958,0,7.921,0,7.921,3.69,0,3.289-4.521,3.67-7.921,3.67C7.579,20,7.24,20,6.909,19.987Zm9.557-9.193V9.538H15.178a.75.75,0,0,1,0-1.5h1.289V6.784a.747.747,0,1,1,1.495,0V8.039h1.292a.75.75,0,0,1,0,1.5H17.961v1.255a.747.747,0,1,1-1.495,0ZM2.588,5.354a5.334,5.334,0,1,1,5.333,5.354A5.35,5.35,0,0,1,2.588,5.354Zm1.431,0a3.9,3.9,0,1,0,3.9-3.917A3.914,3.914,0,0,0,4.019,5.354Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M7.127,0C3.283,0,0,.581,0,2.909s3.262,2.93,7.127,2.93c3.844,0,7.127-.582,7.127-2.909S10.992,0,7.127,0Z'
        transform='translate(0.75 13.206)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.568,9.136A4.568,4.568,0,1,0,0,4.568,4.552,4.552,0,0,0,4.568,9.136Z'
        transform='translate(3.309 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.5,0V4.01'
        transform='translate(16.704 6.669)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.09.5H0'
        transform='translate(15.16 8.174)'
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
    <g transform='translate(2.85 2.15)'>
      <path
        d='M7.072,7.3C3.258,7.3,0,6.721,0,4.411S3.237,0,7.072,0c3.814,0,7.072,2.081,7.072,4.39S10.907,7.3,7.072,7.3Z'
        transform='translate(0 12.36)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.533,9.066a4.517,4.517,0,1,0-.032,0Z'
        transform='translate(2.539 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V4.01'
        transform='translate(15.781 5.979)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.09.5H0'
        transform='translate(14.237 7.484)'
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
AddUser.displayName = 'IconlyAddUser'
AddUser.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(AddUser)
