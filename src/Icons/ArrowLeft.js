import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ArrowLeft = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 6)'>
      <path
        d='M7.942,12A5.023,5.023,0,0,1,6.6,11.592,22.626,22.626,0,0,1,1.006,7.8l-.379-.4a3.6,3.6,0,0,1-.281-.334A1.771,1.771,0,0,1,0,6.008,1.853,1.853,0,0,1,.375,4.87l.39-.42.087-.09A22.081,22.081,0,0,1,6.743.336L6.987.242A4.065,4.065,0,0,1,7.942,0a2,2,0,0,1,.91.22,1.883,1.883,0,0,1,.808.9,9.781,9.781,0,0,1,.261,1.065,22.351,22.351,0,0,1,.243,3.451v.354a27.187,27.187,0,0,1-.216,3.688l-.113.544a3.9,3.9,0,0,1-.233.784A1.815,1.815,0,0,1,8,12ZM12.8,7.191a1.191,1.191,0,0,1,0-2.381l3.7-.327a1.518,1.518,0,0,1,0,3.036Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(21 6) rotate(90)'>
      <path
        d='M.327,5.2,0,1.5a1.518,1.518,0,0,1,3.036,0L2.709,5.2a1.191,1.191,0,0,1-2.381,0'
        transform='translate(4.483 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M4.87,9.79c-.058-.058-.305-.274-.51-.477A22.073,22.073,0,0,1,.336,3.422,4.828,4.828,0,0,1,0,2.223a2,2,0,0,1,.219-.91,1.886,1.886,0,0,1,.9-.808A9.79,9.79,0,0,1,2.188.244,23.636,23.636,0,0,1,5.993,0,27.291,27.291,0,0,1,9.681.216a8.26,8.26,0,0,1,1.327.347A1.815,1.815,0,0,1,12,2.165v.058a5.031,5.031,0,0,1-.408,1.343A22.044,22.044,0,0,1,7.626,9.327a5.693,5.693,0,0,1-.554.491,1.768,1.768,0,0,1-1.064.347A1.856,1.856,0,0,1,4.87,9.79'
        transform='translate(0 7.835)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(20 5.5) rotate(90)'>
      <path
        d='M.5,15V0'
        transform='translate(6.274 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.049,0,6.025,6.05,0,0'
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
    <g transform='translate(2.5 4)'>
      <path
        d='M6.676,17.285l-.006-.1V.818A.818.818,0,0,1,7.183.062.841.841,0,0,1,8,.168l.083.073,6.671,6.6a.81.81,0,0,1,0,1.157.839.839,0,0,1-1.09.071L13.581,8,8.33,2.8V17.182a.831.831,0,0,1-1.654.1ZM.244,8A.81.81,0,0,1,.167,6.925L.242,6.84,3.92,3.2A.841.841,0,0,1,5.1,3.2a.808.808,0,0,1,.077,1.073L5.1,4.355,1.418,8A.839.839,0,0,1,.244,8Z'
        transform='translate(0.5 15.5) rotate(-90)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(20 5.5) rotate(90)'>
      <path
        d='M.5,15V0'
        transform='translate(6.274 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M12.049,0,6.025,6.05,0,0'
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
    <g transform='translate(20 5.5) rotate(90)'>
      <path
        d='M.5,15V0'
        transform='translate(6.274 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.049,0S8.788,6.05,6.026,6.05,0,0,0,0'
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
ArrowLeft.displayName = 'IconlyArrowLeft'
ArrowLeft.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ArrowLeft)
