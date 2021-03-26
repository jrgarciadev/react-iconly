import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ArrowRight = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 6)'>
      <path
        d='M9.149,11.781a1.889,1.889,0,0,1-.808-.9,9.727,9.727,0,0,1-.261-1.064A22.373,22.373,0,0,1,7.836,6.36V6.007a27.187,27.187,0,0,1,.216-3.688l.113-.544A3.886,3.886,0,0,1,8.4.992,1.814,1.814,0,0,1,10,0h.058A5.023,5.023,0,0,1,11.4.408,22.606,22.606,0,0,1,16.994,4.2l.379.4a3.481,3.481,0,0,1,.281.334A1.766,1.766,0,0,1,18,5.992a1.853,1.853,0,0,1-.375,1.138l-.39.42-.087.09a22.081,22.081,0,0,1-5.891,4.024l-.244.094a4.065,4.065,0,0,1-.955.242A2.005,2.005,0,0,1,9.149,11.781ZM0,6A1.511,1.511,0,0,1,1.5,4.482l3.7.327a1.191,1.191,0,0,1,0,2.381l-3.7.328A1.511,1.511,0,0,1,0,6Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 18) rotate(-90)'>
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
    <g transform='translate(4 18.5) rotate(-90)'>
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
    <g transform='translate(3 4.5)'>
      <path
        d='M10,14.756a.839.839,0,0,1-.071-1.09L10,13.581,15.2,8.33H.818a.831.831,0,0,1-.1-1.654l.1-.006H17.182a.818.818,0,0,1,.756.513A.841.841,0,0,1,17.832,8l-.073.083-6.6,6.671a.81.81,0,0,1-1.156,0Zm3.726-9.584L13.645,5.1,10,1.418A.839.839,0,0,1,10,.244.81.81,0,0,1,11.075.167l.085.075L14.8,3.92a.841.841,0,0,1,0,1.175.808.808,0,0,1-1.073.077Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(4 18.5) rotate(-90)'>
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
    <g transform='translate(4 18.5) rotate(-90)'>
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
ArrowRight.displayName = 'IconlyArrowRight'
ArrowRight.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ArrowRight)
