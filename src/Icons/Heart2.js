import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Heart2 = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2.501)'>
      <path
        d='M10.03,19h0l-.259-.16A38.164,38.164,0,0,1,3.4,13.879,12.993,12.993,0,0,1,.39,9.08,7.744,7.744,0,0,1,.533,3.805,6.084,6.084,0,0,1,4.321.269,4.5,4.5,0,0,1,5.21.06h.12A5.7,5.7,0,0,1,6.17,0h.11A6.266,6.266,0,0,1,8.111.33H8.17A.331.331,0,0,1,8.26.39a3.375,3.375,0,0,1,.63.261L9.27.82a2.627,2.627,0,0,1,.285.19c.057.042.106.077.145.1l.041.024A2.435,2.435,0,0,1,10,1.3,6.224,6.224,0,0,1,13.806,0h.044a5.826,5.826,0,0,1,1.86.291,6.019,6.019,0,0,1,3.755,3.517A7.915,7.915,0,0,1,19.62,9.08a12.781,12.781,0,0,1-3.009,4.81,38.6,38.6,0,0,1-6.332,4.96l-.25.15ZM14.937,3.118a.809.809,0,0,0-.757.543.82.82,0,0,0,.5,1.029,1.676,1.676,0,0,1,1.07,1.57V6.29a.86.86,0,0,0,.19.62.841.841,0,0,0,.57.29.823.823,0,0,0,.79-.76V6.321A3.3,3.3,0,0,0,15.19,3.16.78.78,0,0,0,14.937,3.118Z'
        transform='translate(0 0)'
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
      <path
        d='M2.23,4h0a.719.719,0,0,1-.517-.278.818.818,0,0,1-.167-.591h0A1.647,1.647,0,0,0,.552,1.54.787.787,0,0,1,.022.592.725.725,0,0,1,.886.019a.383.383,0,0,1,.139.052A3.2,3.2,0,0,1,3,3.226a.807.807,0,0,1-.229.56A.708.708,0,0,1,2.23,4Z'
        transform='translate(14 3)'
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
      <path
        d='M0,0A2.782,2.782,0,0,1,1.917,2.422'
        transform='translate(13.239 4.053)'
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
        d='M9.371,18.874A34.311,34.311,0,0,1,3.38,14.191,12.375,12.375,0,0,1,.406,9.427,7.944,7.944,0,0,1,.777,3.494,6.208,6.208,0,0,1,4.491.3a6.565,6.565,0,0,1,5.515.737A6.563,6.563,0,0,1,15.521.3a6.209,6.209,0,0,1,3.715,3.191,7.9,7.9,0,0,1,.335,5.96,12.524,12.524,0,0,1-2.965,4.765,23.9,23.9,0,0,1-2.814,2.471l-.053.045a.724.724,0,0,1-1.006-.2.747.747,0,0,1-.128-.559.737.737,0,0,1,.3-.483,23.377,23.377,0,0,0,2.647-2.328A10.95,10.95,0,0,0,18.2,8.986a6.345,6.345,0,0,0-.3-4.8,4.782,4.782,0,0,0-2.849-2.445,5.043,5.043,0,0,0-4.615.818.729.729,0,0,1-.882,0,5.035,5.035,0,0,0-4.615-.818A4.782,4.782,0,0,0,2.065,4.177,6.4,6.4,0,0,0,1.782,8.96,10.991,10.991,0,0,0,4.43,13.13a33.016,33.016,0,0,0,5.753,4.495.762.762,0,0,1,.287.838A.744.744,0,0,1,9.777,19h0A.705.705,0,0,1,9.371,18.874ZM14.8,7.188a1.973,1.973,0,0,0-1.359-1.8.762.762,0,0,1-.311-.876A.741.741,0,0,1,13.888,4a3.467,3.467,0,0,1,2.374,3.011.751.751,0,0,1-.148.549.721.721,0,0,1-.488.278.734.734,0,0,1-.1.006A.746.746,0,0,1,14.8,7.188Z'
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
Heart2.displayName = 'IconlyHeart2'
Heart2.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Heart2)
