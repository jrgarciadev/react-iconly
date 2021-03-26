import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Show = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 4)'>
      <path
        d='M9.99,16C5.861,16,2.148,13.115.059,8.281a.724.724,0,0,1,0-.571C2.146,2.882,5.858,0,9.99,0H10a9.306,9.306,0,0,1,5.737,2.046,14.235,14.235,0,0,1,4.2,5.664.725.725,0,0,1,0,.571C17.851,13.115,14.135,16,10,16ZM6.1,8A3.9,3.9,0,1,0,10,4.121,3.89,3.89,0,0,0,6.1,8ZM7.562,8a2.487,2.487,0,0,1,.049-.475H7.66a2,2,0,0,0,2-1.921A1.989,1.989,0,0,1,10,5.574,2.419,2.419,0,1,1,7.562,8Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 4)'>
      <path
        d='M10,16H9.99C5.861,16,2.148,13.114.058,8.281a.723.723,0,0,1,0-.571C2.145,2.882,5.858,0,9.99,0H10a9.307,9.307,0,0,1,5.737,2.046,14.231,14.231,0,0,1,4.2,5.664.723.723,0,0,1,0,.571C17.851,13.114,14.135,16,10,16ZM10,4.121A3.874,3.874,0,1,0,13.892,8,3.9,3.9,0,0,0,10,4.121Z'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M4.868,2.424A2.434,2.434,0,0,1,0,2.424,2.521,2.521,0,0,1,.049,1.95H.1A2,2,0,0,0,2.1.029,2.043,2.043,0,0,1,2.439,0,2.43,2.43,0,0,1,4.868,2.424'
        transform='translate(7.563 5.573)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 4)'>
      <path
        d='M6.323,3.162A3.162,3.162,0,1,1,3.161,0,3.162,3.162,0,0,1,6.323,3.162Z'
        transform='translate(6.839 4.891)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.248,14.6c3.808,0,7.291-2.738,9.252-7.3C16.539,2.738,13.056,0,9.248,0h0C5.444,0,1.961,2.738,0,7.3c1.961,4.564,5.444,7.3,9.252,7.3Z'
        transform='translate(0.75 0.751)'
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
    <g transform='translate(2 4)'>
      <path
        d='M10,16h0C5.863,16,2.147,13.115.059,8.287a.721.721,0,0,1,0-.573C2.147,2.886,5.863,0,10,0h0c4.136,0,7.852,2.886,9.939,7.714a.721.721,0,0,1,0,.573,17.051,17.051,0,0,1-.823,1.654.734.734,0,0,1-1,.277.726.726,0,0,1-.277-.991c.221-.391.432-.8.625-1.228C16.6,3.9,13.453,1.456,10,1.455S3.4,3.9,1.531,8C3.4,12.1,6.547,14.545,10,14.545a8.108,8.108,0,0,0,5.6-2.4.736.736,0,0,1,1.033.024.722.722,0,0,1-.023,1.027A9.545,9.545,0,0,1,10,16ZM8,11.324a.723.723,0,0,1-.25-1,.732.732,0,0,1,1-.247A2.419,2.419,0,1,0,7.564,8,.731.731,0,0,1,6.1,8,3.892,3.892,0,1,1,8,11.324Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 4)'>
      <path
        d='M6.323,3.162A3.162,3.162,0,1,1,3.161,0,3.162,3.162,0,0,1,6.323,3.162Z'
        transform='translate(6.839 4.891)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M9.248,14.6c3.808,0,7.291-2.738,9.252-7.3C16.539,2.738,13.056,0,9.248,0h0C5.444,0,1.961,2.738,0,7.3c1.961,4.564,5.444,7.3,9.252,7.3Z'
        transform='translate(0.75 0.751)'
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
    <g transform='translate(2 4)'>
      <path
        id='Stroke_1'
        data-name='Stroke 1'
        d='M6.324,3.162A3.162,3.162,0,1,1,3.162,0,3.162,3.162,0,0,1,6.324,3.162Z'
        transform='translate(6.84 4.89)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        id='Stroke_3'
        data-name='Stroke 3'
        d='M0,7.3c0,3.28,4.142,7.3,9.252,7.3S18.5,10.585,18.5,7.3,14.361,0,9.252,0,0,4.022,0,7.3Z'
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
Show.displayName = 'IconlyShow'
Show.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Show)
