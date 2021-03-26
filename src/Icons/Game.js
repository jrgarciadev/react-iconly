import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Game = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10.01,20c-1.6,0-2.909-.012-4.122-.039A5.643,5.643,0,0,1,0,14.181V9.875A5.648,5.648,0,0,1,5.9,4.094C7.1,4.076,8.47,4.056,9.833,4.056V3.892a1.217,1.217,0,0,0-1.227-1.2H7.635A1.991,1.991,0,0,1,5.623.723.739.739,0,0,1,6.359,0,.73.73,0,0,1,7.1.723a.531.531,0,0,0,.539.52h.972a2.7,2.7,0,0,1,2.7,2.64v.183c.6,0,1.213.008,1.8.016l1,.012A5.644,5.644,0,0,1,20,9.875v4.307a5.643,5.643,0,0,1-5.888,5.78C12.9,19.987,11.6,20,10.01,20Zm-4.7-8.7a.739.739,0,0,0-.736.723.73.73,0,0,0,.736.723h1.04v1.021a.73.73,0,0,0,.736.722.738.738,0,0,0,.735-.722V12.746h1.03a.73.73,0,0,0,.736-.723.739.739,0,0,0-.736-.723H7.821V10.289a.736.736,0,0,0-1.472,0V11.3ZM14.7,12.986a.73.73,0,0,0-.736.723.722.722,0,0,0,.736.723h.1a.73.73,0,0,0,.736-.723.739.739,0,0,0-.736-.723ZM13.023,9.672a.73.73,0,0,0-.736.723.722.722,0,0,0,.736.723h.1a.723.723,0,1,0,0-1.445Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M5.682,3.882v.183c-.491-.01-.981-.01-1.472-.01V3.892a1.222,1.222,0,0,0-1.227-1.2H2.012A1.994,1.994,0,0,1,0,.723.735.735,0,0,1,.736,0a.728.728,0,0,1,.736.723.532.532,0,0,0,.54.52h.972a2.7,2.7,0,0,1,2.7,2.64'
        transform='translate(5.623 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M10.01,15.944c-1.54,0-2.888-.013-4.122-.039A5.644,5.644,0,0,1,0,10.125V5.819A5.648,5.648,0,0,1,5.9.039C7.223.018,8.521,0,9.833,0c.482,0,.981,0,1.472.01.629,0,1.27.009,1.889.017l.918.012A5.643,5.643,0,0,1,20,5.819v4.306a5.644,5.644,0,0,1-5.888,5.781C12.878,15.932,11.536,15.944,10.01,15.944Zm-4.7-8.7a.739.739,0,0,0-.736.722.73.73,0,0,0,.736.723h1.04V9.711a.736.736,0,0,0,1.472,0V8.69h1.03a.73.73,0,0,0,.736-.723.739.739,0,0,0-.736-.722H7.821V6.233a.736.736,0,0,0-1.472,0V7.245ZM14.7,8.931a.73.73,0,0,0-.736.723.721.721,0,0,0,.736.722h.1a.73.73,0,0,0,.736-.722.739.739,0,0,0-.736-.723ZM13.023,5.617a.73.73,0,0,0-.736.722.722.722,0,0,0,.736.723h.1a.73.73,0,0,0,.735-.723.738.738,0,0,0-.735-.722Z'
        transform='translate(0 4.056)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.53,0V3.745'
        transform='translate(6.318 10.314)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.821.519H0'
        transform='translate(4.938 11.667)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.583.519H.476'
        transform='translate(12.783 9.909)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.583.519H.476'
        transform='translate(14.596 13.483)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H0A1.355,1.355,0,0,0,1.368,1.341H2.424A2.1,2.1,0,0,1,4.54,3.413v.675'
        transform='translate(6.072 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.428,15.589q-4.508.076-8.856,0A5.34,5.34,0,0,1,0,10.138V5.488A5.34,5.34,0,0,1,5.573.037q4.374-.075,8.856,0A5.34,5.34,0,0,1,20,5.488v4.65A5.339,5.339,0,0,1,14.428,15.589Z'
        transform='translate(0 4.373)'
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
        d='M5.871,19.962A5.646,5.646,0,0,1,.005,14.55C0,14.426,0,14.3,0,14.18V9.87A5.668,5.668,0,0,1,5.541,4.1c.122,0,.246,0,.371.005H9.871v-.23A1.255,1.255,0,0,0,8.617,2.643h-1a2.058,2.058,0,0,1-1.383-.562A1.948,1.948,0,0,1,5.649.7.7.7,0,0,1,6.34,0h.008a.7.7,0,0,1,.7.691.552.552,0,0,0,.169.4.558.558,0,0,0,.391.161H8.621a2.656,2.656,0,0,1,2.646,2.616V4.8a.7.7,0,0,1-.7.7H5.882c-.122,0-.216-.006-.308,0A4.273,4.273,0,0,0,1.4,9.854v4.34c0,.109,0,.2,0,.3a4.262,4.262,0,0,0,4.452,4.077c2.718.046,5.481.046,8.256,0,.134,0,.228.006.321,0A4.268,4.268,0,0,0,18.6,14.209V9.87c0-.111,0-.2,0-.3A4.265,4.265,0,0,0,14.128,5.5.7.7,0,0,1,14.11,4.1,5.744,5.744,0,0,1,20,9.516c.005.124.006.248,0,.372v4.306a5.661,5.661,0,0,1-5.537,5.771c-.122,0-.247,0-.372,0-1.378.025-2.763.036-4.142.036S7.212,19.986,5.871,19.962Zm1.205-5.474a.759.759,0,0,1-.753-.756v-1H5.314a.763.763,0,0,1-.728-.35.752.752,0,0,1,0-.8.763.763,0,0,1,.728-.35H6.323v-.994a.762.762,0,0,1,1.524,0v.994H8.855a.763.763,0,0,1,.728.35.752.752,0,0,1,0,.8.763.763,0,0,1-.728.35H7.846v1a.769.769,0,0,1-.762.756Zm7.1-.247a.744.744,0,0,1,0-1.055.766.766,0,0,1,.823-.167.964.964,0,0,1,.248.167.744.744,0,0,1-.005,1.055.758.758,0,0,1-1.062,0Zm-1.7-3.341a.725.725,0,0,1,0-1.064.68.68,0,0,1,.239-.167.745.745,0,0,1,.567,0,.9.9,0,0,1,.257.167.764.764,0,0,1,.168.818.61.61,0,0,1-.168.246.772.772,0,0,1-1.062,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.53,0V3.745'
        transform='translate(6.318 10.314)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.821.519H0'
        transform='translate(4.938 11.667)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.583.519H.476'
        transform='translate(12.783 9.909)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.583.519H.476'
        transform='translate(14.596 13.483)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H0A1.355,1.355,0,0,0,1.368,1.341H2.424A2.1,2.1,0,0,1,4.54,3.413v.675'
        transform='translate(6.072 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M14.428,15.589q-4.508.076-8.856,0A5.34,5.34,0,0,1,0,10.138V5.488A5.34,5.34,0,0,1,5.573.037q4.374-.075,8.856,0A5.34,5.34,0,0,1,20,5.488v4.65A5.339,5.339,0,0,1,14.428,15.589Z'
        transform='translate(0 4.373)'
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
    <g transform='translate(2 1.977)'>
      <path
        d='M.477,0V3.575'
        transform='translate(6.777 10.085)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.648.477H0'
        transform='translate(5.432 11.395)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.528.477h-.1'
        transform='translate(12.949 9.716)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.528.477h-.1'
        transform='translate(14.68 13.128)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H0A1.293,1.293,0,0,0,1.306,1.28H2.314a2.005,2.005,0,0,1,2.02,1.978V4.265'
        transform='translate(6.514 0.239)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.1,7.414C19.1,1.854,16.709,0,9.549,0S0,1.854,0,7.414s2.387,7.414,9.549,7.414S19.1,12.975,19.1,7.414Z'
        transform='translate(0.716 4.504)'
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
Game.displayName = 'IconlyGame'
Game.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Game)
