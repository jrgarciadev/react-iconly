import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Danger = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M17.316,18H2.679a3.129,3.129,0,0,1-.91-.2A2.809,2.809,0,0,1,.218,16.275,2.747,2.747,0,0,1,.21,14.146L7.529,1.433a2.746,2.746,0,0,1,1.1-1.08A2.819,2.819,0,0,1,9.993,0a2.853,2.853,0,0,1,2.484,1.442l7.268,12.615a2.936,2.936,0,0,1,.25,1,2.753,2.753,0,0,1-.73,2.021A2.841,2.841,0,0,1,17.316,18ZM10,12.272a.873.873,0,1,0,0,1.745.877.877,0,0,0,.869-.883A.867.867,0,0,0,10,12.272ZM10,6.09a.872.872,0,0,0-.88.862v2.8a.888.888,0,0,0,.88.873.872.872,0,0,0,.869-.873v-2.8A.867.867,0,0,0,10,6.09Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M2.723,18.167H2.684a2.828,2.828,0,0,1-2.476-3.89L7.529,1.45a2.83,2.83,0,0,1,4.946.009l7.273,12.728A2.872,2.872,0,0,1,20,15.194a2.829,2.829,0,0,1-2.681,2.972H2.723Z'
        transform='translate(2 3.001)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M0,7.124A.875.875,0,1,1,.875,8,.879.879,0,0,1,0,7.124ZM0,3.7V.875a.875.875,0,0,1,1.75,0V3.7A.875.875,0,1,1,0,3.7Z'
        transform='translate(11.125 9.146)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 3)'>
      <path
        d='M0,.756A.755.755,0,0,1,.75,0,.746.746,0,0,1,1.5.745V.756a.75.75,0,1,1-1.5,0Z'
        transform='translate(9.25 12.514)'
        fill={color}
      />
      <path
        d='M2.045,16.668H16.527a2.077,2.077,0,0,0,1.819-2.859L11.069,1.073a2.08,2.08,0,0,0-3.639,0L.153,13.809A2.08,2.08,0,0,0,1.3,16.518a2.125,2.125,0,0,0,.676.15'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,3.1V0'
        transform='translate(9.49 7.296)'
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
    <g transform='translate(2 3)'>
      <path
        d='M5.81,17.418a.75.75,0,0,1,.75-.75H17.278a1.334,1.334,0,0,0,1.221-1.4,1.332,1.332,0,0,0-.081-.392L11.169,2.2a1.333,1.333,0,0,0-1.812-.528,1.316,1.316,0,0,0-.519.519l-7.255,12.7a1.332,1.332,0,0,0,1.179,1.787.75.75,0,0,1-.038,1.5H2.687A2.83,2.83,0,0,1,.21,14.276a.637.637,0,0,1,.043-.09L7.53,1.451a2.829,2.829,0,0,1,4.946.009l7.272,12.726a.7.7,0,0,1,.044.091,2.83,2.83,0,0,1-2.477,3.89H6.559A.75.75,0,0,1,5.81,17.418Zm3.442-4.149a.754.754,0,0,1,.75-.755.747.747,0,0,1,.751.745v.01a.75.75,0,1,1-1.5,0Zm0-3.421V7.021a.75.75,0,0,1,1.5,0V9.848a.75.75,0,1,1-1.5,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M0,7a.755.755,0,0,1,.75-.756.746.746,0,0,1,.75.745V7A.75.75,0,0,1,0,7Z'
        transform='translate(9.25 6.272)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M2.045,16.668H16.527a2.077,2.077,0,0,0,1.819-2.859L11.069,1.073a2.08,2.08,0,0,0-3.639,0L.153,13.809A2.08,2.08,0,0,0,1.3,16.518a2.125,2.125,0,0,0,.676.15'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,3.1V0'
        transform='translate(9.49 7.296)'
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
    <g transform='translate(2 2)'>
      <path
        d='M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V3.895'
        transform='translate(9.5 6.105)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.5 13)'
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
Danger.displayName = 'IconlyDanger'
Danger.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Danger)
