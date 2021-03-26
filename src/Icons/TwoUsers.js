import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const TwoUsers = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M0,14.918c0-2.447,3.386-3.06,7.349-3.06,3.985,0,7.349.634,7.349,3.083S11.313,18,7.349,18C3.364,18,0,17.366,0,14.918Zm16.633.475c.341-3.112-2.366-4.588-3.067-4.927a.053.053,0,0,1-.033-.054.041.041,0,0,1,.037-.028,18.394,18.394,0,0,1,3.748.319,3.193,3.193,0,0,1,2.462,1.468,2.106,2.106,0,0,1,0,1.877c-.532,1.123-2.246,1.485-2.912,1.578l-.03,0A.208.208,0,0,1,16.633,15.393ZM2.487,4.763A4.8,4.8,0,0,1,7.349,0a4.8,4.8,0,0,1,4.863,4.763A4.8,4.8,0,0,1,7.349,9.525,4.8,4.8,0,0,1,2.487,4.763ZM13.719,8.822a4.069,4.069,0,0,1-.56-.052.177.177,0,0,1-.122-.274,6.432,6.432,0,0,0-.1-7.439.11.11,0,0,1-.018-.123.148.148,0,0,1,.095-.056A4.2,4.2,0,0,1,13.834.8a4.045,4.045,0,0,1,3.957,5.076A4.04,4.04,0,0,1,13.83,8.823Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M7.349,0C3.386,0,0,.612,0,3.06S3.364,6.142,7.349,6.142c3.964,0,7.349-.612,7.349-3.06S11.335,0,7.349,0'
        transform='translate(0 11.858)'
        fill={color}
      />
      <path
        d='M4.863,9.525A4.8,4.8,0,0,0,9.726,4.762,4.8,4.8,0,0,0,4.863,0,4.8,4.8,0,0,0,0,4.762,4.8,4.8,0,0,0,4.863,9.525'
        transform='translate(2.486 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M1.265,4.053A6.368,6.368,0,0,1,.128,7.7a.177.177,0,0,0,.122.275,3.968,3.968,0,0,0,.56.052,4.045,4.045,0,0,0,4.072-2.95A4.045,4.045,0,0,0,.925,0,4.159,4.159,0,0,0,.107.081.148.148,0,0,0,.012.137.111.111,0,0,0,.031.261,6.414,6.414,0,0,1,1.265,4.053'
        transform='translate(12.909 0.795)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M6.247,1.789A3.19,3.19,0,0,0,3.785.322,18.354,18.354,0,0,0,.038,0,.043.043,0,0,0,0,.031.054.054,0,0,0,.034.085C.734.424,3.442,1.9,3.1,5.012a.207.207,0,0,0,.234.232C4,5.151,5.716,4.79,6.247,3.667a2.107,2.107,0,0,0,0-1.878'
        transform='translate(13.532 10.38)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M0,6.594A3.3,3.3,0,0,0,3.3,3.3,3.3,3.3,0,0,0,0,0'
        transform='translate(14.02 1.819)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A10.9,10.9,0,0,1,1.617.233,2.664,2.664,0,0,1,3.562,1.346a1.568,1.568,0,0,1,0,1.345A2.683,2.683,0,0,1,1.617,3.809'
        transform='translate(15.536 11.996)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.841,0c3.69,0,6.842.559,6.842,2.792S10.551,5.6,6.841,5.6C3.151,5.6,0,5.046,0,2.812S3.131,0,6.841,0Z'
        transform='translate(0.75 12.706)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.384,8.769A4.385,4.385,0,1,1,8.769,4.384,4.369,4.369,0,0,1,4.384,8.769Z'
        transform='translate(3.207 0.75)'
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
        d='M6.842,18.252a.749.749,0,0,1,.75-.747c2.779,0,6.09-.356,6.09-2.056,0-1.351-2.048-2.037-6.09-2.037-2.779,0-6.091.356-6.091,2.056,0,.381.112.872.984,1.3a5.764,5.764,0,0,0,1.328.43A.747.747,0,1,1,3.5,18.66a7.279,7.279,0,0,1-1.676-.548A2.855,2.855,0,0,1,0,15.469c0-3.551,5.713-3.551,7.592-3.551,3.259,0,7.591.366,7.591,3.532C15.182,19,9.468,19,7.592,19A.748.748,0,0,1,6.842,18.252Zm9.576-2.346A.746.746,0,0,1,17,15.024c.762-.156,1.28-.412,1.418-.7a.812.812,0,0,0,0-.7c-.141-.293-.656-.547-1.414-.7a10.216,10.216,0,0,0-1.523-.22.746.746,0,0,1-.7-.8.758.758,0,0,1,.8-.7,11.913,11.913,0,0,1,1.728.249,3.19,3.19,0,0,1,2.46,1.517,2.288,2.288,0,0,1,0,1.984A3.236,3.236,0,0,1,17.3,16.488a.791.791,0,0,1-.152.014A.747.747,0,0,1,16.418,15.906ZM4.432,9.161a.749.749,0,1,1,.922-1.18,3.626,3.626,0,1,0-1.4-2.863.75.75,0,0,1-1.5,0A5.112,5.112,0,1,1,4.432,9.161Zm8.837-.774a.749.749,0,0,1,.75-.747,2.539,2.539,0,1,0,0-5.078.748.748,0,1,1,0-1.5,4.034,4.034,0,1,1,0,8.069A.749.749,0,0,1,13.27,8.387Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M0,6.594A3.3,3.3,0,0,0,3.3,3.3,3.3,3.3,0,0,0,0,0'
        transform='translate(14.02 1.819)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0A10.9,10.9,0,0,1,1.617.233,2.664,2.664,0,0,1,3.562,1.346a1.568,1.568,0,0,1,0,1.345A2.683,2.683,0,0,1,1.617,3.809'
        transform='translate(15.536 11.996)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.841,0c3.69,0,6.842.559,6.842,2.792S10.551,5.6,6.841,5.6C3.151,5.6,0,5.046,0,2.812S3.131,0,6.841,0Z'
        transform='translate(0.75 12.706)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.384,8.769A4.385,4.385,0,1,1,8.769,4.384,4.369,4.369,0,0,1,4.384,8.769Z'
        transform='translate(3.207 0.75)'
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
    <g transform='translate(2.75 2.549)'>
      <path
        d='M6.809,7.007C3.137,7.007,0,6.452,0,4.228S3.117,0,6.809,0c3.672,0,6.808,1.985,6.808,4.208S10.5,7.007,6.809,7.007Z'
        transform='translate(0 11.9)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.364,8.728a4.349,4.349,0,1,0-.031,0Z'
        transform='translate(2.445 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.187,6.4A3.289,3.289,0,0,0,2.624,3.221,3.288,3.288,0,0,0,0,0'
        transform='translate(13.865 1.132)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0C1.988,0,3.686,1.348,3.686,2.551A1.814,1.814,0,0,1,2.211,4.2'
        transform='translate(14.711 11.104)'
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
TwoUsers.displayName = 'IconlyTwoUsers'
TwoUsers.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(TwoUsers)
