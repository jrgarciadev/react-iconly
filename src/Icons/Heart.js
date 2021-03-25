import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Heart = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2.501)'>
      <path
        d='M10.236,19.838a38.535,38.535,0,0,1-6.656-5.21A13.333,13.333,0,0,1,.412,9.55C-.777,5.834.612,1.579,4.5.319a6.579,6.579,0,0,1,6,1.016h0a6.589,6.589,0,0,1,6-1.016c3.887,1.259,5.286,5.514,4.1,9.231a13.333,13.333,0,0,1-3.168,5.078,38.535,38.535,0,0,1-6.656,5.21l-.26.162Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M9.754,18.837A36.258,36.258,0,0,1,3.426,13.88,12.668,12.668,0,0,1,.4,9.075C-.742,5.535.582,1.489,4.279.288A6.282,6.282,0,0,1,9.985,1.3h0A6.291,6.291,0,0,1,15.691.288c3.7,1.2,5.03,5.247,3.893,8.787a12.67,12.67,0,0,1-3.013,4.8,36.587,36.587,0,0,1-6.328,4.958L9.994,19Z'
        transform='translate(0.022)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M10.011,19l-.235-.163a36.319,36.319,0,0,1-6.337-4.958,12.667,12.667,0,0,1-3.048-4.8C-.738,5.535.586,1.489,4.283.288A6.3,6.3,0,0,1,10.011,1.31Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2.5 3)'>
      <path
        d='M9.261,17.854a34.84,34.84,0,0,1-6.022-4.689A11.99,11.99,0,0,1,.373,8.6C-.7,5.25.554,1.421,4.071.288A5.978,5.978,0,0,1,9.5,1.2h0A5.987,5.987,0,0,1,14.921.288C18.438,1.421,19.7,5.25,18.628,8.6a11.99,11.99,0,0,1-2.866,4.57A34.84,34.84,0,0,1,9.74,17.854L9.505,18Z'
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

  const Broken = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M19.235,3.494A6.208,6.208,0,0,0,15.521.3a6.565,6.565,0,0,0-5.515.737A6.565,6.565,0,0,0,4.491.3,6.208,6.208,0,0,0,.776,3.494,7.945,7.945,0,0,0,.406,9.427a12.364,12.364,0,0,0,2.974,4.764,34.307,34.307,0,0,0,5.991,4.683A.705.705,0,0,0,9.776,19a.743.743,0,0,0,.693-.537.763.763,0,0,0-.287-.838A33.042,33.042,0,0,1,4.429,13.13,10.981,10.981,0,0,1,1.782,8.959a6.4,6.4,0,0,1,.282-4.782A4.778,4.778,0,0,1,4.941,1.741a5.033,5.033,0,0,1,4.615.818.73.73,0,0,0,.882,0,5.042,5.042,0,0,1,4.615-.818A4.78,4.78,0,0,1,17.9,4.186a6.345,6.345,0,0,1,.3,4.8,10.946,10.946,0,0,1-2.647,4.18,23.352,23.352,0,0,1-2.647,2.328.738.738,0,0,0-.3.483.748.748,0,0,0,.128.559.724.724,0,0,0,1.006.2l.053-.045a23.865,23.865,0,0,0,2.815-2.472,12.518,12.518,0,0,0,2.965-4.764A7.9,7.9,0,0,0,19.235,3.494Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M9.748,17.854A36.489,36.489,0,0,1,3.41,13.165,11.922,11.922,0,0,1,.393,8.6C-.74,5.25.583,1.421,4.285.288A6.563,6.563,0,0,1,10,1.2h0a6.573,6.573,0,0,1,5.71-.914c3.7,1.133,5.035,4.963,3.9,8.308a11.922,11.922,0,0,1-3.017,4.57,36.489,36.489,0,0,1-6.339,4.689L10.005,18Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A2.814,2.814,0,0,1,2.018,2.422'
        transform='translate(13.936 4.053)'
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
    <g transform='translate(2.55 3.55)'>
      <path
        d='M.372,8.9C-.7,5.546.554,1.381,4.071.249A4.869,4.869,0,0,1,9.5,1.939a4.73,4.73,0,0,1,5.42-1.69c3.516,1.132,4.778,5.3,3.706,8.647-1.67,5.31-7.5,8.076-9.126,8.076S2.1,14.268.372,8.9Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A2.154,2.154,0,0,1,1.917,2.422'
        transform='translate(13.238 4.014)'
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
Heart.displayName = 'IconlyHeart'
Heart.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Heart)
