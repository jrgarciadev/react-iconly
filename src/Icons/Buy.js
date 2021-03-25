import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Buy = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M15.149,18.459A1.514,1.514,0,1,1,16.668,20,1.535,1.535,0,0,1,15.149,18.459Zm-11.241,0A1.514,1.514,0,1,1,5.426,20,1.534,1.534,0,0,1,3.908,18.459Zm1.679-3.164a2.509,2.509,0,0,1-1.726-.689,2.616,2.616,0,0,1-.812-1.7L2.129,1.784.62,1.518A.766.766,0,0,1,.765,0,.817.817,0,0,1,.88.009L3.263.375a.768.768,0,0,1,.619.694l.19,2.286a.617.617,0,0,0,.609.572H18.176a1.689,1.689,0,0,1,1.409.684,2.251,2.251,0,0,1,.38,1.754l-.95,6.694a2.582,2.582,0,0,1-2.528,2.235Zm5.785-6.826a.758.758,0,0,0,.75.765h2.767a.758.758,0,0,0,.75-.765.75.75,0,0,0-.75-.766H12.121A.75.75,0,0,0,11.372,8.468Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M11.25,1.52a1.515,1.515,0,1,1,1.52,1.51A1.52,1.52,0,0,1,11.25,1.52ZM0,1.52A1.515,1.515,0,1,1,1.52,3.03,1.52,1.52,0,0,1,0,1.52Z'
        transform='translate(3.911 16.569)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M16.5,14.989H5.591a2.549,2.549,0,0,1-2.54-2.339L2.13,1.749.621,1.489A.747.747,0,0,1,.14,1.181.732.732,0,0,1,.011.628.761.761,0,0,1,.768,0,.793.793,0,0,1,.881.008l2.385.36a.759.759,0,0,1,.619.68l.191,2.24a.612.612,0,0,0,.609.561H18.191a1.706,1.706,0,0,1,1.41.67,2.169,2.169,0,0,1,.38,1.719l-.95,6.56A2.566,2.566,0,0,1,16.5,14.989Zm-4.37-7.44a.742.742,0,0,0-.751.75.751.751,0,0,0,.751.751H14.9a.751.751,0,0,0,.751-.751.742.742,0,0,0-.751-.75Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M.764,0A.765.765,0,1,1,0,.765.766.766,0,0,1,.764,0Z'
        transform='translate(4.658 17.32)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.765,0A.765.765,0,1,1,0,.765.766.766,0,0,1,.765,0Z'
        transform='translate(15.91 17.32)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.08.36l.963,11.473a1.8,1.8,0,0,0,1.8,1.653H15.752a1.8,1.8,0,0,0,1.785-1.546l.949-6.558a1.341,1.341,0,0,0-1.327-1.533H2.414'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.5H2.773'
        transform='translate(12.125 7.795)'
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
        d='M15.161,18.455A1.515,1.515,0,1,1,16.674,20,1.532,1.532,0,0,1,15.161,18.455Zm-11.253,0A1.515,1.515,0,1,1,5.423,20,1.533,1.533,0,0,1,3.908,18.455Zm1.683-3.163A2.56,2.56,0,0,1,3.046,12.9L2.132,1.786.622,1.519A.765.765,0,0,1,.011.635.752.752,0,0,1,.877.01L2.959.379a.758.758,0,0,1,.618.69l.963,11.707a1.056,1.056,0,0,0,1.05.985H16.5a1.067,1.067,0,0,0,1.043-.921l.949-6.693a.606.606,0,0,0-.138-.482.582.582,0,0,0-.447-.208H7.164a.766.766,0,0,1,0-1.531H17.908a2.071,2.071,0,0,1,1.581.738,2.161,2.161,0,0,1,.489,1.7l-.95,6.693A2.583,2.583,0,0,1,16.5,15.292Zm6.535-6.062a.766.766,0,0,1,0-1.531H14.9a.766.766,0,0,1,0,1.531Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M.764,0A.765.765,0,1,1,0,.765.766.766,0,0,1,.764,0Z'
        transform='translate(4.658 17.32)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.765,0A.765.765,0,1,1,0,.765.766.766,0,0,1,.765,0Z'
        transform='translate(15.91 17.32)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0,2.08.36l.963,11.473a1.8,1.8,0,0,0,1.8,1.653H15.752a1.8,1.8,0,0,0,1.785-1.546l.949-6.558a1.341,1.341,0,0,0-1.327-1.533H2.414'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.5H2.773'
        transform='translate(12.125 7.795)'
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
    <g transform='translate(3.65 2.85)'>
      <path
        d='M2.044,3.58c9.848-1.337,12.187-.6,13.717,1.14s1.261,6.917-.528,8.516-9.553,1.751-12.013,0C.621,11.386,2.129,5.692,2.044,2.243,2.1.313,0,0,0,0'
        transform='translate(0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.5H2.773'
        transform='translate(10.506 7.37)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.545,0A.545.545,0,1,1,0,.544.545.545,0,0,1,.545,0Z'
        transform='translate(3.069 17.277)'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.544,0A.545.545,0,1,1,0,.544.545.545,0,0,1,.544,0Z'
        transform='translate(13.401 17.277)'
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
Buy.displayName = 'IconlyBuy'
Buy.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Buy)
