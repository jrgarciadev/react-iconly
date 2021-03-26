import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Work = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M3.972,20a3.829,3.829,0,0,1-3.8-3.847L.1,10.987a.211.211,0,0,1,.09-.172.128.128,0,0,1,.071-.02.207.207,0,0,1,.119.041,17.072,17.072,0,0,0,7,2.632.722.722,0,0,0,.1.006.753.753,0,0,0,.722-.554,1.824,1.824,0,0,1,1.78-1.377h.031a1.824,1.824,0,0,1,1.78,1.377.753.753,0,0,0,.723.554.718.718,0,0,0,.1-.006,17.072,17.072,0,0,0,7-2.632l.04-.021a.183.183,0,0,1,.08-.019.132.132,0,0,1,.07.019.211.211,0,0,1,.09.172l-.08,5.165A3.829,3.829,0,0,1,16.018,20Zm5.273-6.248v1.307a.755.755,0,0,0,.75.759.746.746,0,0,0,.751-.759V13.752a.756.756,0,0,0-.751-.76A.765.765,0,0,0,9.245,13.752Zm3.6-2.078A3.3,3.3,0,0,0,10,10.025a3.358,3.358,0,0,0-2.873,1.642.327.327,0,0,1-.276.166.286.286,0,0,1-.056-.005A15.524,15.524,0,0,1,1.171,9.56L.21,8.891a.289.289,0,0,1-.13-.243C.051,8.141,0,6.487,0,6.471A3.839,3.839,0,0,1,3.812,2.613H5.783A2.977,2.977,0,0,1,8.7,0h2.581a2.977,2.977,0,0,1,2.921,2.613h1.981A3.839,3.839,0,0,1,20,6.471c0,.009-.059.913-.08,2.154a.33.33,0,0,1-.129.256c-.471.347-.918.647-.961.669a15.328,15.328,0,0,1-5.647,2.288.3.3,0,0,1-.057.005A.325.325,0,0,1,12.848,11.674ZM7.3,2.613h5.383a1.447,1.447,0,0,0-1.4-1.093H8.7A1.448,1.448,0,0,0,7.3,2.613Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,0C.05,2.338.19,6.337.21,6.778A4.651,4.651,0,0,0,1.2,9.346,3.689,3.689,0,0,0,4.292,10.71c1.856.01,3.9.01,5.889.01s3.931,0,5.566-.01a3.733,3.733,0,0,0,3.089-1.364,4.514,4.514,0,0,0,.974-2.568c.02-.371.12-4.712.18-6.778Z'
        transform='translate(0 9.078)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M0,.75V2.044a.75.75,0,0,0,1.5,0V.75A.75.75,0,0,0,0,.75'
        transform='translate(9.245 12.634)'
        fill={color}
      />
      <path
        d='M12.473,13.117a.749.749,0,0,1-.727-.564A1.8,1.8,0,0,0,9.99,11.2a1.826,1.826,0,0,0-1.779,1.357.754.754,0,0,1-.726.552.783.783,0,0,1-.1-.007,17.159,17.159,0,0,1-7.047-2.62A.747.747,0,0,1,0,9.855V6.389A3.817,3.817,0,0,1,3.817,2.581H5.784A2.959,2.959,0,0,1,8.7,0h2.582a2.957,2.957,0,0,1,2.92,2.581h1.977A3.812,3.812,0,0,1,19.99,6.389V9.855a.752.752,0,0,1-.336.626,17.143,17.143,0,0,1-7.078,2.629A.8.8,0,0,1,12.473,13.117ZM8.7,1.5A1.46,1.46,0,0,0,7.3,2.581h5.387a1.46,1.46,0,0,0-1.4-1.081Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,0S.142,1.738.175,2.286a3.823,3.823,0,0,0,.8,2.126A2.968,2.968,0,0,0,3.486,5.507c1.237,0,10.232,0,11.469,0a2.968,2.968,0,0,0,2.509-1.095,3.832,3.832,0,0,0,.8-2.126C18.3,1.738,18.441,0,18.441,0'
        transform='translate(0.804 13.477)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.579V2.208A2.207,2.207,0,0,1,2.208,0H4.79A2.208,2.208,0,0,1,7,2.208v.371'
        transform='translate(6.496 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,1.294V0'
        transform='translate(9.495 13.384)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.058V6.525a16.327,16.327,0,0,0,6.738,2.5,2.58,2.58,0,0,1,4.985.01A16.326,16.326,0,0,0,18.49,6.525V3.058A3.051,3.051,0,0,0,15.433,0H3.067A3.059,3.059,0,0,0,0,3.058Z'
        transform='translate(0.75 3.331)'
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
    <g transform='translate(2 2)'>
      <path
        d='M8.78,18.985a.751.751,0,0,1,.751-.751l6.2,0a2.219,2.219,0,0,0,1.932-.823,3.11,3.11,0,0,0,.633-1.693c.031-.553.185-2.3.185-2.3a.743.743,0,0,1,1.484.058c0,.023-.141,1.789-.173,2.334a4.569,4.569,0,0,1-.974,2.561,3.733,3.733,0,0,1-3.085,1.365l-6.2,0A.75.75,0,0,1,8.78,18.985Zm-4.52.748a3.73,3.73,0,0,1-3.086-1.366A4.557,4.557,0,0,1,.2,15.806C.168,15.262.027,13.5.027,13.473a.743.743,0,0,1,1.484-.057s.154,1.749.187,2.3a3.091,3.091,0,0,0,.631,1.692,2.217,2.217,0,0,0,1.933.824H5.4a.75.75,0,1,1,0,1.5Zm4.984-5.055V13.383a.75.75,0,0,1,1.5,0v1.294a.75.75,0,1,1-1.5,0Zm2.5-2.126A1.8,1.8,0,0,0,9.99,11.2a1.828,1.828,0,0,0-1.779,1.356.748.748,0,0,1-.716.554.763.763,0,0,1-.111-.008A17.148,17.148,0,0,1,.337,10.481.75.75,0,0,1,0,9.855V6.388A3.817,3.817,0,0,1,3.817,2.581H5.77A2.964,2.964,0,0,1,8.7,0h2.582A2.964,2.964,0,0,1,14.22,2.581h1.963A3.812,3.812,0,0,1,19.99,6.388V9.855a.752.752,0,0,1-.336.626,17.158,17.158,0,0,1-7.078,2.629.761.761,0,0,1-.1.006A.749.749,0,0,1,11.746,12.551Zm1.213-1.02A15.725,15.725,0,0,0,18.49,9.445V6.388a2.31,2.31,0,0,0-2.307-2.308H10a.75.75,0,1,1,0-1.5h2.7A1.462,1.462,0,0,0,11.286,1.5H8.7A1.46,1.46,0,0,0,7.245,2.958v.37a.748.748,0,0,1-.75.751l-2.678,0A2.315,2.315,0,0,0,1.5,6.388V9.445a15.673,15.673,0,0,0,5.511,2.078A3.336,3.336,0,0,1,9.99,9.7,3.288,3.288,0,0,1,12.959,11.532Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,0S.142,1.738.175,2.286a3.823,3.823,0,0,0,.8,2.126A2.968,2.968,0,0,0,3.486,5.507c1.237,0,10.232,0,11.469,0a2.968,2.968,0,0,0,2.509-1.095,3.832,3.832,0,0,0,.8-2.126C18.3,1.738,18.441,0,18.441,0'
        transform='translate(0.804 13.477)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,2.579V2.208A2.207,2.207,0,0,1,2.208,0H4.79A2.208,2.208,0,0,1,7,2.208v.371'
        transform='translate(6.496 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,1.294V0'
        transform='translate(9.495 13.384)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.058V6.525a16.327,16.327,0,0,0,6.738,2.5,2.58,2.58,0,0,1,4.985.01A16.326,16.326,0,0,0,18.49,6.525V3.058A3.051,3.051,0,0,0,15.433,0H3.067A3.059,3.059,0,0,0,0,3.058Z'
        transform='translate(0.75 3.331)'
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
    <g transform='translate(2.75 2.45)'>
      <path
        d='M.5,2.628V0'
        transform='translate(8.711 11.439)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.257,0l-.029.021a17.52,17.52,0,0,1-9.1,2.393A17.48,17.48,0,0,1,.03.021L0,0'
        transform='translate(0.082 9.027)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,8.2C0,2.051,2.3,0,9.211,0s9.211,2.051,9.211,8.2-2.3,8.2-9.211,8.2S0,14.355,0,8.2Z'
        transform='translate(0 2.697)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.525,2.919v-.63A2.184,2.184,0,0,0,4.465,0H2.06A2.184,2.184,0,0,0,0,2.289v.63'
        transform='translate(5.949 0)'
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
Work.displayName = 'IconlyWork'
Work.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Work)
