import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Hide = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3.5)'>
      <path
        d='M1.784,16.783a.738.738,0,0,1-.088-.925l.029-.04L16.156,1.257A.247.247,0,0,0,16.2,1.2a.327.327,0,0,0,.049-.059l.917-.925A.743.743,0,0,1,17.691,0a.723.723,0,0,1,.514.214.722.722,0,0,1,.219.522.722.722,0,0,1-.219.521L16.43,3.049a14.776,14.776,0,0,1,3.513,5.159.765.765,0,0,1,0,.581C17.851,13.7,14.135,16.626,10,16.626h-.01a9.091,9.091,0,0,1-5.279-1.752l-1.893,1.91A.728.728,0,0,1,2.3,17,.7.7,0,0,1,1.784,16.783ZM7.8,11.752A3.892,3.892,0,0,0,13.892,8.5a3.989,3.989,0,0,0-.673-2.216L12.155,7.362A2.481,2.481,0,0,1,12.429,8.5,2.444,2.444,0,0,1,10,10.955a2.409,2.409,0,0,1-1.132-.275ZM.059,8.793a.747.747,0,0,1,0-.58C2.147,3.309,5.864.385,9.992.385H10a8.851,8.851,0,0,1,4,.965L10.743,4.639A4.506,4.506,0,0,0,10,4.569,3.92,3.92,0,0,0,6.1,8.508a4.566,4.566,0,0,0,.068.748L2.556,12.9A15.833,15.833,0,0,1,.059,8.793Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3.5)'>
      <path
        d='M9.99,16.244a9.053,9.053,0,0,1-5.278-1.752L7.8,11.372a3.892,3.892,0,0,0,6.088-3.249,4.007,4.007,0,0,0-.673-2.216l3.21-3.239a14.862,14.862,0,0,1,3.512,5.159.749.749,0,0,1,0,.581c-2.088,4.9-5.805,7.836-9.941,7.836ZM.059,8.408a.749.749,0,0,1,0-.581C2.147,2.924,5.864,0,9.99,0H10a8.862,8.862,0,0,1,4,.964l-3.259,3.29A4.487,4.487,0,0,0,10,4.184,3.919,3.919,0,0,0,6.1,8.123a4.676,4.676,0,0,0,.068.748l-3.61,3.642A15.827,15.827,0,0,1,.059,8.408Z'
        transform='translate(0 0.382)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.212,16.784a.737.737,0,0,1-.088-.926l.029-.04L10.622,5.256l3.092-3.121.869-.877a.236.236,0,0,0,.049-.058.235.235,0,0,0,.049-.059L15.6.214a.734.734,0,0,1,1.034,1.043L14.856,3.049l-3.21,3.239-10.4,10.5A.725.725,0,0,1,.729,17,.706.706,0,0,1,.212,16.784Zm7.083-6.1,3.288-3.317a2.467,2.467,0,0,1-2.156,3.594A2.4,2.4,0,0,1,7.3,10.679Z'
        transform='translate(1.574)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 3.5)'>
      <path
        d='M.925,5.395A3.123,3.123,0,0,1,0,3.166,3.16,3.16,0,0,1,5.394.925'
        transform='translate(6.836 5.472)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.537,0A3.158,3.158,0,0,1,0,2.542'
        transform='translate(10.568 9.199)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.9,12.638A13.43,13.43,0,0,1,0,7.3,13.592,13.592,0,0,1,3.934,1.938,8.534,8.534,0,0,1,9.25,0a8.554,8.554,0,0,1,5.336,1.957'
        transform='translate(0.75 1.334)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.98,0a15.359,15.359,0,0,1,1.8,3.146c-1.967,4.557-5.443,7.3-9.25,7.3A7.981,7.981,0,0,1,0,10.035'
        transform='translate(7.468 5.491)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.774,0,0,15.774'
        transform='translate(2.113 0.75)'
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
    <g transform='translate(2 3.5)'>
      <path
        d='M1.58,16.789a.712.712,0,0,1,0-1.018l5.2-5.116A3.749,3.749,0,0,1,6.1,8.5,3.876,3.876,0,0,1,10,4.659a3.919,3.919,0,0,1,2.191.666l2.034-2a7.712,7.712,0,0,0-9.1.45A12.62,12.62,0,0,0,1.532,8.5a14.426,14.426,0,0,0,1.4,2.43.711.711,0,0,1-.172,1,.738.738,0,0,1-1.021-.169A15.956,15.956,0,0,1,.059,8.784a.707.707,0,0,1,0-.569A14.218,14.218,0,0,1,4.221,2.642a9.23,9.23,0,0,1,11.056-.355L17.385.212a.739.739,0,0,1,1.035,0,.711.711,0,0,1,0,1.019L2.615,16.789a.739.739,0,0,1-1.035,0ZM7.561,8.5a2.324,2.324,0,0,0,.286,1.1L11.12,6.38A2.458,2.458,0,0,0,10,6.1,2.423,2.423,0,0,0,7.561,8.5Zm-.33,7.479a.719.719,0,0,1-.462-.912.736.736,0,0,1,.925-.456A7.369,7.369,0,0,0,10,14.983c3.445,0,6.592-2.417,8.468-6.483a14.169,14.169,0,0,0-1.59-2.67.712.712,0,0,1,.145-1.009.739.739,0,0,1,1.024.142A15.9,15.9,0,0,1,19.94,8.214a.715.715,0,0,1,0,.571c-2.1,4.783-5.813,7.639-9.941,7.639A8.867,8.867,0,0,1,7.231,15.98Zm2.618-4.289a.723.723,0,0,1,.59-.839A2.412,2.412,0,0,0,12.39,8.928a.733.733,0,0,1,.85-.582.72.72,0,0,1,.59.837,3.871,3.871,0,0,1-3.13,3.088.82.82,0,0,1-.132.011A.728.728,0,0,1,9.849,11.691Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3.5)'>
      <path
        d='M.925,5.395A3.123,3.123,0,0,1,0,3.166,3.16,3.16,0,0,1,5.394.925'
        transform='translate(6.836 5.472)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M2.537,0A3.158,3.158,0,0,1,0,2.542'
        transform='translate(10.568 9.199)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.9,12.638A13.43,13.43,0,0,1,0,7.3,13.592,13.592,0,0,1,3.934,1.938,8.534,8.534,0,0,1,9.25,0a8.554,8.554,0,0,1,5.336,1.957'
        transform='translate(0.75 1.334)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.98,0a15.359,15.359,0,0,1,1.8,3.146c-1.967,4.557-5.443,7.3-9.25,7.3A7.981,7.981,0,0,1,0,10.035'
        transform='translate(7.468 5.491)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.774,0,0,15.774'
        transform='translate(2.113 0.75)'
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
    <g transform='translate(2 3.5)'>
      <path
        d='M3.67,12.89C1.44,11.43,0,9.23,0,7.3,0,4.02,4.14,0,9.25,0a10.118,10.118,0,0,1,5.59,1.71'
        transform='translate(0.75 1.34)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.48,0a5.9,5.9,0,0,1,1.41,3.53c0,3.28-4.15,7.3-9.26,7.3A9.888,9.888,0,0,1,0,10.47'
        transform='translate(7.37 5.11)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.925,5.4A3.12,3.12,0,0,1,0,3.166,3.16,3.16,0,0,1,5.394.925'
        transform='translate(6.841 5.472)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.537,0A3.158,3.158,0,0,1,0,2.542'
        transform='translate(10.573 9.199)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.774,0,0,15.774'
        transform='translate(2.118 0.75)'
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
Hide.displayName = 'IconlyHide'
Hide.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Hide)
