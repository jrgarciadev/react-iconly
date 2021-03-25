import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Voice = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M7.532,19.043V17.118A8.443,8.443,0,0,1,0,8.783a.962.962,0,0,1,.968-.957.963.963,0,0,1,.969.957,6.563,6.563,0,0,0,13.125,0,.969.969,0,0,1,1.938,0,8.443,8.443,0,0,1-7.531,8.335v1.925a.968.968,0,0,1-1.937,0Zm.793-5.826a4.326,4.326,0,0,1-4.351-4.3V4.3A4.324,4.324,0,0,1,8.325,0h.35a4.325,4.325,0,0,1,4.352,4.3V8.92a4.326,4.326,0,0,1-4.352,4.3Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M16.031,0a.962.962,0,0,0-.969.957,6.563,6.563,0,0,1-13.125,0A.962.962,0,0,0,.969,0,.962.962,0,0,0,0,.957,8.443,8.443,0,0,0,7.532,9.293v1.925a.969.969,0,0,0,1.937,0V9.293A8.443,8.443,0,0,0,17,.957.962.962,0,0,0,16.031,0'
        transform='translate(0 7.826)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M4.351,13.217H4.7a4.325,4.325,0,0,0,4.351-4.3V4.3A4.324,4.324,0,0,0,4.7,0H4.351A4.324,4.324,0,0,0,0,4.3V8.921a4.325,4.325,0,0,0,4.351,4.3'
        transform='translate(3.973 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(4 2)'>
      <path
        d='M0,0A7.4,7.4,0,1,0,14.808,0'
        transform='translate(0.714 8.932)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.476,2.81V0'
        transform='translate(7.642 16.336)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.912,11.87H3.66A3.66,3.66,0,0,1,0,8.21V3.66A3.661,3.661,0,0,1,3.66,0h.252a3.661,3.661,0,0,1,3.66,3.66V8.21A3.66,3.66,0,0,1,3.912,11.87Z'
        transform='translate(4.332 0.714)'
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
        d='M7.3,19.28V16.45a.712.712,0,0,1,.7-.72,6.673,6.673,0,0,0,6.593-6.737.7.7,0,1,1,1.408,0,8.118,8.118,0,0,1-7.3,8.14V19.28a.7.7,0,1,1-1.408,0ZM4.455,16.324A8.15,8.15,0,0,1,0,8.994a.712.712,0,0,1,.7-.72.713.713,0,0,1,.7.72A6.72,6.72,0,0,0,5.08,15.036.726.726,0,0,1,5.4,16a.7.7,0,0,1-.631.4A.675.675,0,0,1,4.455,16.324Zm3.42-2.932a4.362,4.362,0,0,1-4.309-4.4V4.4A4.362,4.362,0,0,1,7.875,0h.248a4.363,4.363,0,0,1,4.311,4.4V8.987a4.363,4.363,0,0,1-4.311,4.4ZM4.973,4.4V8.987a2.938,2.938,0,0,0,2.9,2.965h.248a2.938,2.938,0,0,0,2.9-2.965V4.4a2.938,2.938,0,0,0-2.9-2.965H7.875A2.938,2.938,0,0,0,4.973,4.4Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(4 2)'>
      <path
        d='M0,0A7.4,7.4,0,1,0,14.808,0'
        transform='translate(0.714 8.932)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.476,2.81V0'
        transform='translate(7.642 16.336)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.912,11.87H3.66A3.66,3.66,0,0,1,0,8.21V3.66A3.661,3.661,0,0,1,3.66,0h.252a3.661,3.661,0,0,1,3.66,3.66V8.21A3.66,3.66,0,0,1,3.912,11.87Z'
        transform='translate(4.332 0.714)'
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
    <g transform='translate(4.9 2.5)'>
      <path
        d='M0,0A5.669,5.669,0,0,0,5.669,5.669,5.669,5.669,0,0,0,11.339,0'
        transform='translate(1.465 11.178)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.339,7.923V5.669A5.669,5.669,0,0,0,0,5.669V7.923'
        transform='translate(1.465 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,2.152V0'
        transform='translate(6.634 16.848)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.5H14.268'
        transform='translate(0 10.678)'
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
Voice.displayName = 'IconlyVoice'
Voice.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Voice)
