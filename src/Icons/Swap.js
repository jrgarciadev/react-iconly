import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Swap = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M14.454,17.721a4.445,4.445,0,0,1-.434-.394A17.665,17.665,0,0,1,10.909,12.7a4.061,4.061,0,0,1-.32-1.078V11.57a1.461,1.461,0,0,1,.779-1.288,6.515,6.515,0,0,1,1.04-.28A20.9,20.9,0,0,1,15.3,9.83a17.926,17.926,0,0,1,2.985.2,7.45,7.45,0,0,1,.835.209,1.5,1.5,0,0,1,.709.65,1.633,1.633,0,0,1,.171.732,3.875,3.875,0,0,1-.264.963,17.773,17.773,0,0,1-3.155,4.736c-.16.162-.355.337-.4.382a1.43,1.43,0,0,1-.891.3A1.363,1.363,0,0,1,14.454,17.721Zm-10.94-2.3.257-4.578a.934.934,0,1,1,1.867,0L5.9,15.417a1.191,1.191,0,1,1-2.381,0Zm-1.8-7.444A7.4,7.4,0,0,1,.88,7.764a1.491,1.491,0,0,1-.709-.65A1.62,1.62,0,0,1,0,6.384a3.943,3.943,0,0,1,.262-.963A17.762,17.762,0,0,1,3.418.685c.161-.162.355-.337.4-.383A1.433,1.433,0,0,1,4.712,0a1.368,1.368,0,0,1,.834.278,4.586,4.586,0,0,1,.435.4A17.751,17.751,0,0,1,9.091,5.3a4.108,4.108,0,0,1,.321,1.079v.047a1.464,1.464,0,0,1-.778,1.287A6.442,6.442,0,0,1,7.593,8,20.9,20.9,0,0,1,4.7,8.17,17.926,17.926,0,0,1,1.715,7.973Zm12.647-.811L14.1,2.583a1.191,1.191,0,1,1,2.381,0l-.257,4.579a.934.934,0,1,1-1.867,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M1.191,0A.941.941,0,0,0,.257.948L0,5.527A1.2,1.2,0,0,0,1.191,6.734a1.2,1.2,0,0,0,1.19-1.208L2.125.948A.941.941,0,0,0,1.191,0'
        transform='translate(3.514 9.891)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M5.98.673a4.62,4.62,0,0,0-.434-.4A1.371,1.371,0,0,0,4.712,0a1.432,1.432,0,0,0-.893.3c-.046.046-.24.221-.4.384A17.743,17.743,0,0,0,.262,5.421,3.917,3.917,0,0,0,0,6.384a1.628,1.628,0,0,0,.171.73,1.491,1.491,0,0,0,.709.65,7.394,7.394,0,0,0,.834.209,17.975,17.975,0,0,0,2.986.2A20.868,20.868,0,0,0,7.593,8a6.358,6.358,0,0,0,1.04-.279A1.465,1.465,0,0,0,9.412,6.43V6.384A4.123,4.123,0,0,0,9.091,5.3,17.742,17.742,0,0,0,5.98.673'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M1.191,6.735a.941.941,0,0,0,.934-.948l.256-4.579A1.2,1.2,0,0,0,1.191,0,1.2,1.2,0,0,0,0,1.208L.257,5.787a.941.941,0,0,0,.934.948'
        transform='translate(14.103 1.375)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M9.241,1.056a1.5,1.5,0,0,0-.709-.65A7.457,7.457,0,0,0,7.7.2,17.975,17.975,0,0,0,4.712,0,20.868,20.868,0,0,0,1.819.173,6.484,6.484,0,0,0,.778.453,1.463,1.463,0,0,0,0,1.741v.046A4.065,4.065,0,0,0,.321,2.866,17.694,17.694,0,0,0,3.431,7.5a4.5,4.5,0,0,0,.434.394,1.361,1.361,0,0,0,.836.279,1.434,1.434,0,0,0,.892-.3c.046-.046.24-.221.4-.382A17.777,17.777,0,0,0,9.148,2.751a3.881,3.881,0,0,0,.263-.963,1.629,1.629,0,0,0-.171-.732'
        transform='translate(10.588 9.829)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 3)'>
      <path
        d='M.556,13.618V0'
        transform='translate(14.284 3.546)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.156,0,4.078,4.1,0,0'
        transform='translate(10.762 13.068)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.556,0V13.618'
        transform='translate(4.356 0.833)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.1,4.078,0,8.156,4.1'
        transform='translate(0.833 0.832)'
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
    <g transform='translate(2.5 3)'>
      <path
        d='M14.359,17.937a.834.834,0,0,1-.509-.77V3.546a.824.824,0,1,1,1.648,0v11.6l2.042-2.077a.82.82,0,0,1,1.166,0,.842.842,0,0,1,0,1.179l-3.451,3.506a.816.816,0,0,1-.9.183Zm-2.7-2.65-1.6-1.629a.841.841,0,0,1,0-1.179.817.817,0,0,1,1.165,0l1.6,1.631a.84.84,0,0,1,0,1.178.818.818,0,0,1-1.166,0Zm-7.628-.835V.833a.832.832,0,0,1,.509-.77.817.817,0,0,1,.9.182l4.033,4.1a.84.84,0,0,1,0,1.179.817.817,0,0,1-1.165,0L5.681,2.852v11.6a.824.824,0,1,1-1.648,0ZM.243,5.519a.839.839,0,0,1,0-1.178l1.6-1.63a.818.818,0,0,1,1.166,0,.842.842,0,0,1,0,1.18l-1.6,1.629a.815.815,0,0,1-1.165,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M.556,13.618V0'
        transform='translate(14.284 3.546)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M8.156,0,4.078,4.1,0,0'
        transform='translate(10.762 13.068)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.556,0V13.618'
        transform='translate(4.356 0.833)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,4.1,4.078,0,8.156,4.1'
        transform='translate(0.833 0.832)'
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
    <g transform='translate(2.9 4.6)'>
      <path
        d='M.5,0V12.618'
        transform='translate(3.579 0.001)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.1S2.169,0,4.078,0,8.156,4.1,8.156,4.1'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,12.618V0'
        transform='translate(13.506 2.21)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.156,0S5.986,4.1,4.078,4.1,0,0,0,0'
        transform='translate(9.929 10.728)'
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
Swap.displayName = 'IconlySwap'
Swap.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Swap)
