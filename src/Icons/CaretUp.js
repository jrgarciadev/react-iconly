import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const CaretUp = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(6.5 3)'>
      <path
        d='M.09,8.859a.715.715,0,0,0,.627.38H4.783v8.027a.717.717,0,1,0,1.435,0V9.238h4.065a.712.712,0,0,0,.627-.38.748.748,0,0,0-.02-.746L6.107.343a.709.709,0,0,0-1.215,0L.11,8.112a.748.748,0,0,0-.02.746'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <React.Fragment>
      <defs>
        <clipPath id='clip-path'>
          <path
            d='M0,0H10.9V8.939H0Z'
            transform='translate(0 0.534)'
            fill='none'
          />
        </clipPath>
      </defs>
      <g transform='translate(17.5 21) rotate(180)'>
        <path
          d='M1.421.711V9.189A.711.711,0,1,1,0,9.189V.711a.711.711,0,0,1,1.421,0'
          transform='translate(4.738 0)'
          fill={secondaryColor}
          opacity={opacity}
        />
        <g transform='translate(0 7.944)'>
          <path
            d='M0,0H10.9V8.939H0Z'
            transform='translate(0 0.534)'
            fill='none'
          />
          <g clipPath='url(#clip-path)'>
            <path
              d='M10.9.711a.715.715,0,0,1-.109.379L6.05,8.608a.71.71,0,0,1-1.2,0L.109,1.089A.712.712,0,0,1,.711,0h9.476A.713.713,0,0,1,10.9.711'
              transform='translate(0 0.534)'
              fill={color}
            />
          </g>
        </g>
      </g>
    </React.Fragment>
  )
  const Light = () => (
    <g transform='translate(17.5 21) rotate(180)'>
      <path
        d='M.5,8.95V0'
        transform='translate(5.251 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,5,7.937,10,0Z'
        transform='translate(0.75 9.7)'
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
    <g transform='translate(6.5 3)'>
      <path
        d='M10.283,8.762H6.217V.734a.717.717,0,1,0-1.435,0V8.762H.717a.714.714,0,0,0-.628.38.748.748,0,0,0,.021.745l4.783,7.77a.708.708,0,0,0,1.215,0l2.975-4.835a.744.744,0,0,0-.224-1.012.709.709,0,0,0-.99.231L5.5,15.887,2.016,10.23h8.267a.734.734,0,0,0,0-1.468'
        transform='translate(11 18) rotate(180)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(17.5 21) rotate(180)'>
      <path
        d='M.5,8.95V0'
        transform='translate(5.251 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0,5,7.937,10,0Z'
        transform='translate(0.75 9.7)'
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
    <g transform='translate(17.5 21) rotate(180)'>
      <path
        d='M.5,8.95V0'
        transform='translate(4.894 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.65,7.654C5.906,7.654,9.921,1.29,9.2.568S.892-.223.1.568,3.395,7.654,4.65,7.654Z'
        transform='translate(0.75 9.7)'
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
CaretUp.displayName = 'IconlyCaretUp'
CaretUp.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(CaretUp)
