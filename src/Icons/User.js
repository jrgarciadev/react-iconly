import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const User = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(4 2)'>
      <path
        d='M0,16.575c0-2.722,3.686-3.4,8-3.4,4.339,0,8,.7,8,3.424S12.315,20,8,20C3.662,20,0,19.3,0,16.575ZM2.706,5.291A5.294,5.294,0,1,1,8,10.583,5.274,5.274,0,0,1,2.706,5.291Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(4 2)'>
      <path
        d='M8,0C3.684,0,0,.68,0,3.4S3.661,6.825,8,6.825c4.313,0,8-.679,8-3.4S12.334,0,8,0'
        transform='translate(0 13.175)'
        fill={color}
      />
      <path
        d='M5.292,10.584A5.292,5.292,0,1,0,0,5.292a5.273,5.273,0,0,0,5.292,5.292'
        transform='translate(2.705 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(4 2.5)'>
      <circle
        cx='4.778'
        cy='4.778'
        r='4.778'
        transform='translate(2.801 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.016a2.215,2.215,0,0,1,.22-.97A4.042,4.042,0,0,1,3.039.426,16.787,16.787,0,0,1,5.382.1,25.053,25.053,0,0,1,9.767.1a16.979,16.979,0,0,1,2.343.33c1.071.22,2.362.659,2.819,1.62a2.27,2.27,0,0,1,0,1.95c-.458.961-1.748,1.4-2.819,1.611a15.716,15.716,0,0,1-2.343.339A25.822,25.822,0,0,1,6.2,6a4.066,4.066,0,0,1-.815-.055,15.423,15.423,0,0,1-2.334-.339C1.968,5.4.687,4.957.22,4A2.279,2.279,0,0,1,0,3.016Z'
        transform='translate(0 13.185)'
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
        d='M6.978,19.985a.717.717,0,0,1-.7-.738.737.737,0,0,1,.742-.7q.483.014.981.014c4.349,0,6.555-.751,6.555-2.233,0-1.5-2.206-2.255-6.555-2.255s-6.555.752-6.555,2.235c0,.485.173,1.188,1.675,1.694a.718.718,0,1,1-.464,1.359C.461,18.624,0,17.3,0,16.31c0-3.29,4.566-3.67,8-3.67,1.978,0,8,0,8,3.691C16,19.619,11.435,20,8,20Q7.48,20,6.978,19.985ZM2.613,5.354A5.387,5.387,0,1,1,8,10.706,5.377,5.377,0,0,1,2.613,5.354Zm1.446,0A3.942,3.942,0,1,0,8,1.437,3.933,3.933,0,0,0,4.059,5.354Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(4 2)'>
      <circle
        cx='4.778'
        cy='4.778'
        r='4.778'
        transform='translate(2.801 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,3.016a2.215,2.215,0,0,1,.22-.97A4.042,4.042,0,0,1,3.039.426,16.787,16.787,0,0,1,5.382.1,25.053,25.053,0,0,1,9.767.1a16.979,16.979,0,0,1,2.343.33c1.071.22,2.362.659,2.819,1.62a2.27,2.27,0,0,1,0,1.95c-.458.961-1.748,1.4-2.819,1.611a15.716,15.716,0,0,1-2.343.339A25.822,25.822,0,0,1,6.2,6a4.066,4.066,0,0,1-.815-.055,15.423,15.423,0,0,1-2.334-.339C1.968,5.4.687,4.957.22,4A2.279,2.279,0,0,1,0,3.016Z'
        transform='translate(0 13.185)'
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
    <g transform='translate(5 2.4)'>
      <path
        d='M6.845,7.3C3.153,7.3,0,6.726,0,4.425S3.133,0,6.845,0c3.692,0,6.845,2.1,6.845,4.4S10.556,7.3,6.845,7.3Z'
        transform='translate(0 11.962)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.387,8.774a4.372,4.372,0,1,0-.031,0Z'
        transform='translate(2.45 0)'
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
User.displayName = 'IconlyUser'
User.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(User)
