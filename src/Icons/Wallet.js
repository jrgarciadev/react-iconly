import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Wallet = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M14.515,18H5.485a5.64,5.64,0,0,1-4.036-1.411A5.323,5.323,0,0,1,0,12.661V5.339A5.323,5.323,0,0,1,1.449,1.411,5.64,5.64,0,0,1,5.485,0h9.031a5.618,5.618,0,0,1,4.036,1.417A5.392,5.392,0,0,1,20,5.382H15.769v.034a3.583,3.583,0,0,0-2.513,1.017,3.4,3.4,0,0,0-1.043,2.449,3.516,3.516,0,0,0,3.556,3.467H20v.311a5.323,5.323,0,0,1-1.449,3.928A5.64,5.64,0,0,1,14.515,18ZM4.738,3.892a.757.757,0,0,0-.764.736.766.766,0,0,0,.764.754h5.645a.745.745,0,1,0,0-1.49Zm14.515,6.967H15.819A2.1,2.1,0,0,1,13.76,9.265a1.977,1.977,0,0,1,.433-1.652,2.089,2.089,0,0,1,1.576-.74h3.484A.739.739,0,0,1,20,7.6v2.531A.75.75,0,0,1,19.253,10.858ZM15.91,8.042a.757.757,0,0,0-.53.212.732.732,0,0,0-.225.524.766.766,0,0,0,.765.754h.329a.745.745,0,1,0,0-1.49H15.91Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M14.517,18H5.484a5.633,5.633,0,0,1-4.034-1.413A5.332,5.332,0,0,1,0,12.654V5.338A5.32,5.32,0,0,1,1.449,1.409,5.641,5.641,0,0,1,5.484,0h9.03a5.639,5.639,0,0,1,4.034,1.409A5.321,5.321,0,0,1,20,5.338v.037H15.762a3.54,3.54,0,0,0-3.57,3.482,3.421,3.421,0,0,0,1.044,2.467,3.6,3.6,0,0,0,2.527,1.024H20v.306a5.333,5.333,0,0,1-1.449,3.933A5.632,5.632,0,0,1,14.517,18ZM4.739,3.875a.759.759,0,0,0-.761.744.731.731,0,0,0,.222.528.769.769,0,0,0,.54.221H10.39a.769.769,0,0,0,.54-.221.733.733,0,0,0,.222-.529.759.759,0,0,0-.767-.743Z'
        fill={color}
      />
      <path
        d='M.037,2.4a2.018,2.018,0,0,0,2,1.6h3.25A.726.726,0,0,0,6,3.266V.734A.728.728,0,0,0,5.283,0H1.956A1.985,1.985,0,0,0,0,2.01,2.031,2.031,0,0,0,.037,2.4'
        transform='translate(14 6.9)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <circle
        id='Oval'
        cx='1'
        cy='1'
        r='1'
        transform='translate(15 7.9)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2.5 3)'>
      <path
        d='M6.74,5.383H2.692A2.691,2.691,0,1,1,2.692,0H6.74'
        transform='translate(12.398 6.013)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.612.456H.3'
        transform='translate(14.937 8.187)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.248,0h8.643a5.248,5.248,0,0,1,5.248,5.248v7.177a5.248,5.248,0,0,1-5.248,5.248H5.248A5.248,5.248,0,0,1,0,12.425V5.248A5.248,5.248,0,0,1,5.248,0Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.456H5.4'
        transform='translate(4.536 4.082)'
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
        d='M13.548,18.318a.675.675,0,0,1,.667-.682,4.509,4.509,0,0,0,4.452-4.554V7.365H15.383a2,2,0,0,0,0,4.008h1.364a.682.682,0,0,1,0,1.364H15.383a3.369,3.369,0,0,1,0-6.736h3.284V5.919a4.509,4.509,0,0,0-4.452-4.555H5.785A4.455,4.455,0,0,0,1.567,4.528h8.788a.682.682,0,0,1,0,1.364H1.336c0,.009,0,.017,0,.027v7.162a4.508,4.508,0,0,0,4.452,4.554h4.241a.682.682,0,0,1,0,1.364H5.785A5.859,5.859,0,0,1,0,13.082V5.919A5.859,5.859,0,0,1,5.785,0h8.429A5.86,5.86,0,0,1,20,5.919v7.162A5.86,5.86,0,0,1,14.215,19,.675.675,0,0,1,13.548,18.318Zm1.98-8.329a.682.682,0,0,1,0-1.364h.3a.682.682,0,0,1,0,1.364Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 3)'>
      <path
        d='M6.74,5.383H2.692A2.691,2.691,0,1,1,2.692,0H6.74'
        transform='translate(12.398 6.013)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.612.456H.3'
        transform='translate(14.937 8.187)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.248,0h8.643a5.248,5.248,0,0,1,5.248,5.248v7.177a5.248,5.248,0,0,1-5.248,5.248H5.248A5.248,5.248,0,0,1,0,12.425V5.248A5.248,5.248,0,0,1,5.248,0Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.456H5.4'
        transform='translate(4.536 4.082)'
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
    <g transform='translate(2 3)'>
      <path
        d='M6.45,5.127H2.563A2.563,2.563,0,0,1,2.563,0H6.419'
        transform='translate(12.722 6.549)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.625.476h-.3'
        transform='translate(15.097 8.577)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.476H4.06'
        transform='translate(5.606 4.668)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,8.539C0,2.134,2.325,0,9.3,0s9.3,2.134,9.3,8.539-2.325,8.539-9.3,8.539S0,14.943,0,8.539Z'
        transform='translate(0.714 0.714)'
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
Wallet.displayName = 'IconlyWallet'
Wallet.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Wallet)
