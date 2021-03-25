import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Search = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M17.741,19.608l-2.12-2.43a1.083,1.083,0,0,1,0-1.524.986.986,0,0,1,1.393,0l2.554,2.062h.045a1.348,1.348,0,0,1,0,1.892,1.315,1.315,0,0,1-1.872,0ZM0,8.67A8.624,8.624,0,0,1,8.578,0a8.531,8.531,0,0,1,6.065,2.54,8.716,8.716,0,0,1,2.512,6.13A8.624,8.624,0,0,1,8.578,17.34,8.624,8.624,0,0,1,0,8.67Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <ellipse
        cx='8.599'
        cy='8.653'
        rx='8.599'
        ry='8.653'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M3.278,4.577a1.321,1.321,0,0,1-.889-.385L.352,1.812A1.088,1.088,0,0,1,.272.29h0A.974.974,0,0,1,1.66.29L4.221,2.339a1.348,1.348,0,0,1,.291,1.431,1.335,1.335,0,0,1-1.18.851Z'
        transform='translate(15.397 15.379)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g
      transform='translate(2 2)'
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
    >
      <circle
        cx={8.989}
        cy={8.989}
        r={8.989}
        transform='translate(.778 .778)'
      />
      <path d='M16.018 16.485L19.542 20' />
    </g>
  )

  const Broken = () => (
    <g transform='translate(2 2)'>
      <path
        d='M19.756,18.607l-3.437-3.361h0l-.081-.123a.809.809,0,0,0-1.137,0h0a8.113,8.113,0,0,1-10.519.34A7.679,7.679,0,0,1,2.876,5.31,8.075,8.075,0,0,1,12.953,2.342a7.741,7.741,0,0,1,4.314,9.385.779.779,0,0,0,.182.772.822.822,0,0,0,.774.232.8.8,0,0,0,.593-.54h0a9.334,9.334,0,0,0-5-11.25A9.754,9.754,0,0,0,1.689,4.085,9.256,9.256,0,0,0,3.049,16.28a9.789,9.789,0,0,0,12.535.515l3.044,2.976a.819.819,0,0,0,1.137,0,.784.784,0,0,0,0-1.12h0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <circle
        cx='8.989'
        cy='8.989'
        r='8.989'
        transform='translate(0.778 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,3.524,3.515'
        transform='translate(16.018 16.485)'
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
    <g transform='translate(2 2)'>
      <path
        d='M8.561,0A8.561,8.561,0,1,1,0,8.561,8.561,8.561,0,0,1,8.561,0Z'
        transform='translate(0.714 0.714)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M1.411,0A1.411,1.411,0,1,1,0,1.41,1.411,1.411,0,0,1,1.411,0Z'
        transform='translate(16.488 16.488)'
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
Search.displayName = 'IconlySearch'
Search.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Search)
