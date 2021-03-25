import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ArrowDown = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(6 3)'>
      <path
        d='M4.87,17.625c-.059-.058-.305-.274-.51-.477A22.081,22.081,0,0,1,.336,11.257,4.815,4.815,0,0,1,0,10.058a2,2,0,0,1,.22-.91,1.883,1.883,0,0,1,.9-.808,9.781,9.781,0,0,1,1.065-.261,23.616,23.616,0,0,1,3.805-.244,27.187,27.187,0,0,1,3.688.216,8.15,8.15,0,0,1,1.328.347A1.815,1.815,0,0,1,12,10v.058a5.023,5.023,0,0,1-.408,1.343,22.023,22.023,0,0,1-3.966,5.761,5.686,5.686,0,0,1-.553.491A1.771,1.771,0,0,1,6.008,18,1.853,1.853,0,0,1,4.87,17.625ZM4.81,5.2,4.483,1.5a1.518,1.518,0,0,1,3.036,0L7.191,5.2a1.191,1.191,0,0,1-2.381,0Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(6 3)'>
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
    <g transform='translate(5.5 4)'>
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
    <g transform='translate(4 3)'>
      <path
        d='M6.912,17.759l-6.67-6.6A.81.81,0,0,1,.244,10a.839.839,0,0,1,1.175,0L6.67,15.2V.818a.83.83,0,0,1,1.661,0V17.182a.818.818,0,0,1-.514.756.837.837,0,0,1-.9-.179ZM9.9,14.8a.807.807,0,0,1,0-1.156L13.581,10a.841.841,0,0,1,1.175,0,.811.811,0,0,1,0,1.157L11.079,14.8a.84.84,0,0,1-1.175,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(5.5 4)'>
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
    <g transform='translate(5.5 4)'>
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
ArrowDown.displayName = 'IconlyArrowDown'
ArrowDown.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ArrowDown)
