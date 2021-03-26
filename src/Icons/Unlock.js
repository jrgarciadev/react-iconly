import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Unlock = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M12.731,20H4.268A4.227,4.227,0,0,1,0,15.825V10.886A4.038,4.038,0,0,1,.872,8.372,4.337,4.337,0,0,1,3.071,6.9l-.111.014V5.387A5.548,5.548,0,0,1,13.711,3.628a.838.838,0,0,1-.041.666.85.85,0,0,1-.509.438.887.887,0,0,1-.291.049.91.91,0,0,1-.847-.585A3.761,3.761,0,0,0,4.739,5.368V6.709l-.013,0h8.006A4.227,4.227,0,0,1,17,10.886v4.938A4.227,4.227,0,0,1,12.731,20ZM8.5,11.382a.875.875,0,0,0-.884.865v2.207a.889.889,0,0,0,1.778,0V12.247A.881.881,0,0,0,8.5,11.382Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M1.778,6.709V5.367a3.709,3.709,0,0,1,3.76-3.628A3.727,3.727,0,0,1,9.064,4.2a.906.906,0,0,0,1.138.537.861.861,0,0,0,.549-1.1A5.53,5.53,0,0,0,5.518,0,5.482,5.482,0,0,0,0,5.387V6.911Z'
        transform='translate(2.961 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M12.731,13.289H4.269A4.227,4.227,0,0,1,0,9.113V4.175A4.227,4.227,0,0,1,4.269,0h8.463A4.227,4.227,0,0,1,17,4.175V9.113A4.227,4.227,0,0,1,12.731,13.289ZM8.5,4.672a.875.875,0,0,0-.884.864V7.743a.889.889,0,0,0,1.778,0V5.536A.88.88,0,0,0,8.5,4.672Z'
        transform='translate(0 6.711)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(4.5 2.5)'>
      <path
        d='M8.872,3.062A4.563,4.563,0,0,0,0,4.531V6.7'
        transform='translate(3.052)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.433,11.874H3.792A3.793,3.793,0,0,1,0,8.081V3.793A3.793,3.793,0,0,1,3.792,0h7.641a3.793,3.793,0,0,1,3.792,3.793V8.081A3.793,3.793,0,0,1,11.433,11.874Z'
        transform='translate(0 6.626)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V2.222'
        transform='translate(7.113 11.453)'
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
        d='M12.353,20H8.942a.75.75,0,1,1,0-1.5h3.411a3.071,3.071,0,0,0,3.092-3.042.67.67,0,0,1,.03-.144V11.169a3.071,3.071,0,0,0-3.092-3.042H4.617a3.071,3.071,0,0,0-3.092,3.042v4.145a.67.67,0,0,1,.03.144A3.071,3.071,0,0,0,4.648,18.5a.75.75,0,1,1,0,1.5l-.021,0-.01,0A4.584,4.584,0,0,1,0,15.458V11.169A4.542,4.542,0,0,1,3.1,6.9V5.3A5.357,5.357,0,0,1,8.49,0h.024A5.386,5.386,0,0,1,13.6,3.567a.747.747,0,0,1-.472.955.765.765,0,0,1-.969-.464A3.861,3.861,0,0,0,8.51,1.5H8.493A3.838,3.838,0,0,0,4.627,5.284V6.627h7.756A4.585,4.585,0,0,1,17,11.169v4.289A4.584,4.584,0,0,1,12.383,20ZM7.738,14.424V12.2a.762.762,0,0,1,1.525,0v2.221a.762.762,0,0,1-1.525,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(4.5 2.5)'>
      <path
        d='M8.872,3.062A4.563,4.563,0,0,0,0,4.531V6.7'
        transform='translate(3.052)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M11.433,11.874H3.792A3.793,3.793,0,0,1,0,8.081V3.793A3.793,3.793,0,0,1,3.792,0h7.641a3.793,3.793,0,0,1,3.792,3.793V8.081A3.793,3.793,0,0,1,11.433,11.874Z'
        transform='translate(0 6.626)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V2.222'
        transform='translate(7.113 11.453)'
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
        d='M8.927,3.237A4.562,4.562,0,0,0,0,4.484V6.653'
        transform='translate(3.849 0.75)'
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
        d='M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.406,0,7.66,0Z'
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
Unlock.displayName = 'IconlyUnlock'
Unlock.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Unlock)
