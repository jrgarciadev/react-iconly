import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Video = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 4.5)'>
      <path
        d='M4.113,15A3.91,3.91,0,0,1,0,10.939V4.061A3.91,3.91,0,0,1,4.113,0H9.905a3.91,3.91,0,0,1,4.113,4.061v6.879A3.91,3.91,0,0,1,9.905,15Zm13.844-2.38-1.48-.747a1.624,1.624,0,0,1-.888-1.457V4.583a1.618,1.618,0,0,1,.888-1.455l1.481-.749a1.384,1.384,0,0,1,1.373.064A1.432,1.432,0,0,1,20,3.662v7.676a1.43,1.43,0,0,1-.669,1.219,1.4,1.4,0,0,1-.743.216A1.384,1.384,0,0,1,17.957,12.621Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 5)'>
      <path
        d='M3.743.216A1.383,1.383,0,0,0,2.37.152L.888.9A1.618,1.618,0,0,0,0,2.356V8.19A1.622,1.622,0,0,0,.888,9.647l1.481.747A1.372,1.372,0,0,0,3,10.547a1.4,1.4,0,0,0,.743-.216,1.429,1.429,0,0,0,.669-1.218V1.435A1.432,1.432,0,0,0,3.743.216'
        transform='translate(15.588 2.226)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M9.905,15H4.113A3.91,3.91,0,0,1,0,10.939V4.061A3.91,3.91,0,0,1,4.113,0H9.905a3.91,3.91,0,0,1,4.113,4.061v6.878A3.91,3.91,0,0,1,9.905,15'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(1.8 4.5)'>
      <path
        d='M13.266,10.37a3.272,3.272,0,0,1-3.53,3.4H3.519A3.265,3.265,0,0,1,0,10.37V3.41A3.275,3.275,0,0,1,3.53,0H9.736a3.28,3.28,0,0,1,3.53,3.41Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.582,4.1.228a1,1,0,0,1,1.637.777V7.877A1,1,0,0,1,4.1,8.654L0,5.3'
        transform='translate(14.016 3.194)'
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
    <g transform='translate(2 4.5)'>
      <path
        d='M19.02,2.569a1.686,1.686,0,0,0-1.813.223l-1.575,1.3a.741.741,0,0,0-.1,1.037.73.73,0,0,0,1.03.1l1.575-1.3a.234.234,0,0,1,.259-.031.241.241,0,0,1,.142.226v6.749a.241.241,0,0,1-.142.226.234.234,0,0,1-.26-.031L14.406,7.995V4.087A3.953,3.953,0,0,0,10.23,0H4.176A3.953,3.953,0,0,0,0,4.087v6.836A3.944,3.944,0,0,0,4.166,15a.737.737,0,0,0,0-1.473,2.462,2.462,0,0,1-2.7-2.6V4.087A2.471,2.471,0,0,1,4.176,1.473H10.23a2.471,2.471,0,0,1,2.712,2.614v6.836a2.467,2.467,0,0,1-2.712,2.6H8.543a.737.737,0,0,0,0,1.473H10.23a3.949,3.949,0,0,0,4.176-4.076V9.9l2.8,2.309a1.684,1.684,0,0,0,1.076.391A1.721,1.721,0,0,0,20,10.875V4.125a1.709,1.709,0,0,0-.98-1.557'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(1.8 4.5)'>
      <path
        d='M0,3.582,4.1.228a1,1,0,0,1,1.637.777V7.877A1,1,0,0,1,4.1,8.654L0,5.3'
        transform='translate(14.016 3.194)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M13.266,10.37a3.272,3.272,0,0,1-3.53,3.4H3.519A3.265,3.265,0,0,1,0,10.37V3.41A3.275,3.275,0,0,1,3.53,0H9.736a3.28,3.28,0,0,1,3.53,3.41Z'
        transform='translate(0.75 0.75)'
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
    <g transform='translate(2.514 5.114)'>
      <path
        d='M0,2.466C1.838,1.009,4.3-.4,4.771.1c.771.829.7,8.714,0,9.467-.429.467-2.914-.943-4.771-2.39'
        transform='translate(13.637 2.092)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,6.923C0,1.73,1.725,0,6.9,0s6.9,1.73,6.9,6.923-1.725,6.923-6.9,6.923S0,12.114,0,6.923Z'
        transform='translate(0 0)'
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
Video.displayName = 'IconlyVideo'
Video.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Video)
