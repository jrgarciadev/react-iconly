import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Lock = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M12.732,20H4.269A4.227,4.227,0,0,1,0,15.826V10.888A4.165,4.165,0,0,1,2.977,6.929V5.4A5.472,5.472,0,0,1,8.485,0,5.576,5.576,0,0,1,12.4,1.58,5.3,5.3,0,0,1,14.023,5.4V6.929A4.165,4.165,0,0,1,17,10.888v4.937A4.227,4.227,0,0,1,12.732,20ZM8.5,11.384a.875.875,0,0,0-.884.865v2.206a.889.889,0,0,0,1.778,0V12.249A.881.881,0,0,0,8.5,11.384Zm.01-9.645A3.711,3.711,0,0,0,4.756,5.376V6.714h7.489V5.4A3.7,3.7,0,0,0,8.505,1.739Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M12.731,13.286H4.269A4.227,4.227,0,0,1,0,9.112V4.175A4.227,4.227,0,0,1,4.269,0h8.463A4.227,4.227,0,0,1,17,4.175V9.112A4.227,4.227,0,0,1,12.731,13.286ZM8.5,4.67a.875.875,0,0,0-.884.865V7.741a.889.889,0,0,0,1.778,0V5.535A.881.881,0,0,0,8.5,4.67Z'
        transform='translate(0 6.714)'
        fill={color}
      />
      <path
        d='M11.045,5.4V6.867a4.153,4.153,0,0,0-1.118-.149h-.66V5.4A3.7,3.7,0,0,0,5.528,1.739a3.707,3.707,0,0,0-3.75,3.637V6.718h-.65A3.817,3.817,0,0,0,0,6.877V5.4A5.467,5.467,0,0,1,5.507,0a5.461,5.461,0,0,1,5.538,5.4'
        transform='translate(2.977 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M9.121,6.7V4.551A4.561,4.561,0,0,0,0,4.531V6.7'
        transform='translate(3.802 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.433,11.873H3.792A3.792,3.792,0,0,1,0,8.081V3.792A3.792,3.792,0,0,1,3.792,0h7.641a3.792,3.792,0,0,1,3.792,3.792V8.081A3.792,3.792,0,0,1,11.433,11.873Z'
        transform='translate(0.75 7.377)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V2.221'
        transform='translate(7.863 12.203)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M12.353,20H8.942a.75.75,0,1,1,0-1.5h3.411a3.07,3.07,0,0,0,3.092-3.042.364.364,0,0,1,.02-.105l.011-.041V11.169a3.071,3.071,0,0,0-3.093-3.042H4.617a3.071,3.071,0,0,0-3.092,3.042v4.144c0,.016.008.032.012.048a.351.351,0,0,1,.018.1A3.071,3.071,0,0,0,4.647,18.5a.75.75,0,1,1,0,1.5H4.622a4.632,4.632,0,0,1-3.269-1.331A4.472,4.472,0,0,1,0,15.458V11.169A4.55,4.55,0,0,1,3.1,6.9V5.3A5.367,5.367,0,0,1,8.49,0h.023A5.349,5.349,0,0,1,13.9,5.3V6.9A4.55,4.55,0,0,1,17,11.169v4.289A4.586,4.586,0,0,1,12.382,20ZM4.627,5.284V6.627h7.745V5.3A3.836,3.836,0,0,0,8.51,1.5H8.493A3.843,3.843,0,0,0,4.627,5.284Zm3.11,9.139V12.2a.762.762,0,0,1,1.525,0v2.22a.762.762,0,0,1-1.525,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M9.121,6.7V4.551A4.561,4.561,0,0,0,0,4.531V6.7'
        transform='translate(3.802 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M11.433,11.873H3.792A3.792,3.792,0,0,1,0,8.081V3.792A3.792,3.792,0,0,1,3.792,0h7.641a3.792,3.792,0,0,1,3.792,3.792V8.081A3.792,3.792,0,0,1,11.433,11.873Z'
        transform='translate(0.75 7.377)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V2.221'
        transform='translate(7.863 12.203)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653'
        transform='translate(3.85 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V2.221'
        transform='translate(7.91 12.156)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z'
        transform='translate(0.75 6.824)'
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
Lock.displayName = 'IconlyLock'
Lock.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Lock)
