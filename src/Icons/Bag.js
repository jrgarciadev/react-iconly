import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Bag = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 2)'>
      <path
        d='M13.159,20H4.868c-1.88,0-3.175-.438-3.958-1.338C.091,17.72-.172,16.3.105,14.314L.883,8.12A4.081,4.081,0,0,1,2.076,5.708,2.736,2.736,0,0,1,3.932,5H4.01a.679.679,0,0,1,0-.226,5,5,0,0,1,9.991,0h-.026A.517.517,0,0,1,13.93,5h.157a2.668,2.668,0,0,1,1.827.731,4.388,4.388,0,0,1,1.23,2.389l.769,6.195a5.133,5.133,0,0,1-.906,4.23A4.914,4.914,0,0,1,13.159,20ZM11.885,8.33a.91.91,0,1,0,.884.909A.9.9,0,0,0,11.885,8.33ZM6.1,8.33a.91.91,0,1,0,.884.909A.9.9,0,0,0,6.1,8.33ZM8.966,1.3A3.482,3.482,0,0,0,5.482,4.774a.633.633,0,0,1,0,.226h7.011a.653.653,0,0,1-.043-.226A3.482,3.482,0,0,0,8.966,1.3Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 2)'>
      <path
        d='M13.159,15H4.868c-1.88,0-3.175-.438-3.958-1.339C.091,12.72-.172,11.3.105,9.315L.883,3.12A4.083,4.083,0,0,1,2.076.707,2.736,2.736,0,0,1,3.932,0H14.087a2.667,2.667,0,0,1,1.827.731,4.391,4.391,0,0,1,1.23,2.389l.769,6.195a5.132,5.132,0,0,1-.906,4.23A4.914,4.914,0,0,1,13.159,15ZM11.885,3.329a.91.91,0,1,0,.884.91A.9.9,0,0,0,11.885,3.329Zm-5.789,0a.91.91,0,1,0,.884.91A.9.9,0,0,0,6.1,3.329Z'
        transform='translate(0 5)'
        fill={color}
      />
      <path
        d='M9.974,4.774A.5.5,0,0,1,9.93,5H8.493a.649.649,0,0,1-.044-.226,3.484,3.484,0,0,0-6.968,0,.649.649,0,0,1,0,.226H.01a.649.649,0,0,1,0-.226,5,5,0,0,1,9.99,0Z'
        transform='translate(4)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2.5 1.5)'>
      <path
        d='M13.213,14.682H4.865C1.8,14.682-.554,13.574.114,9.117L.892,3.076C1.3.851,2.723,0,3.968,0H14.146c1.263,0,2.6.915,3.076,3.076L18,9.117C18.567,13.071,16.279,14.682,13.213,14.682Z'
        transform='translate(0.801 5.318)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.659,4.32A4.32,4.32,0,0,0,4.339,0h0A4.32,4.32,0,0,0,0,4.32H0'
        transform='translate(5.492 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.481.458H.435'
        transform='translate(12.316 9.144)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.481.458H.435'
        transform='translate(6.485 9.144)'
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
    <g transform='translate(2.5 2)'>
      <path
        d='M1.2,18.287A4.93,4.93,0,0,1,.183,13.739a.768.768,0,1,1,1.52.22,4.064,4.064,0,0,0,.659,3.323,4.2,4.2,0,0,0,3.172,1.142h8.012c1.59,0,2.688-.334,3.259-1.028a4.4,4.4,0,0,0,.572-3.437l-.747-5.81c-.264-1.407-1.081-2.286-2.187-2.286h-9.8c-1.054,0-1.871.879-2.2,2.347L2.23,9.5A.773.773,0,0,1,.71,9.238L.93,7.919c.58-2.681,2.293-3.56,3.707-3.56h8.24a3.438,3.438,0,0,0-1.089-2.021A3.372,3.372,0,0,0,7.026,2.6v.088A.774.774,0,0,1,5.893,1.634a4.919,4.919,0,0,1,8.548,2.724c1.475,0,3.224.879,3.707,3.516l.755,5.872a5.789,5.789,0,0,1-.967,4.659c-.878,1.046-2.318,1.556-4.392,1.556h-8A4.924,4.924,0,0,1,1.2,18.287Zm10.813-8.258a.881.881,0,0,1-.387-.483.735.735,0,0,1-.061-.334.58.58,0,0,1,0-.176V8.869l.087-.149a.388.388,0,0,1,.106-.132l.131-.114a.686.686,0,0,1,.158-.079.6.6,0,0,1,.167-.052.761.761,0,0,1,.343,0,1.12,1.12,0,0,1,.325.131,1.259,1.259,0,0,1,.238.247.346.346,0,0,1,.078.149.522.522,0,0,1,.053.167.58.58,0,0,1,0,.176.738.738,0,0,1-.07.334.7.7,0,0,1-.211.29.882.882,0,0,1-.616.264A1.063,1.063,0,0,1,12.008,10.029ZM6.166,9.835a.871.871,0,0,1-.194-.29.883.883,0,0,1-.062-.334.58.58,0,0,1,0-.176.522.522,0,0,1,.053-.167.5.5,0,0,1,.079-.149.4.4,0,0,1,.105-.132.593.593,0,0,1,.131-.105A.5.5,0,0,1,6.429,8.4.543.543,0,0,1,6.6,8.349a.761.761,0,0,1,.343,0,.545.545,0,0,1,.167.053.5.5,0,0,1,.149.079A.592.592,0,0,1,7.4,8.6a.4.4,0,0,1,.105.131.865.865,0,0,1,.088.15l.052.166a.953.953,0,0,1,0,.176.857.857,0,0,1-1.475.616Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 1.5)'>
      <path
        d='M13.213,14.682H4.865C1.8,14.682-.554,13.574.114,9.117L.892,3.076C1.3.851,2.723,0,3.968,0H14.146c1.263,0,2.6.915,3.076,3.076L18,9.117C18.567,13.071,16.279,14.682,13.213,14.682Z'
        transform='translate(0.801 5.318)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.659,4.32A4.32,4.32,0,0,0,4.339,0h0A4.32,4.32,0,0,0,0,4.32H0'
        transform='translate(5.492 0.778)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.481.458H.435'
        transform='translate(12.316 9.144)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.481.458H.435'
        transform='translate(6.485 9.144)'
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
    <g transform='translate(2.95 2.55)'>
      <path
        d='M8.659,4.32A4.33,4.33,0,0,0,0,4.3V4.32'
        transform='translate(4.755 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.523.5H.477'
        transform='translate(11.5 8.324)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.523.5H.477'
        transform='translate(5.669 8.324)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.084,14.934c-6.508,0-7.257-2.05-8.718-7.467C-1.1,2.033,1.841,0,9.084,0S19.268,2.033,17.8,7.467C16.341,12.884,15.592,14.934,9.084,14.934Z'
        transform='translate(0 4.006)'
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
Bag.displayName = 'IconlyBag'
Bag.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Bag)
