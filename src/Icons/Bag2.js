import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Bag2 = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M14.123,20H4.877A4.945,4.945,0,0,1,0,15V9.48A4.95,4.95,0,0,1,4.877,4.47h.2A4.577,4.577,0,0,1,6.388,1.31,4.44,4.44,0,0,1,9.509,0a4.324,4.324,0,0,1,3.1,1.309A4.56,4.56,0,0,1,13.918,4.47h.2A4.95,4.95,0,0,1,19,9.48V15A4.945,4.945,0,0,1,14.123,20ZM13.207,5.66a.742.742,0,0,0-.732.75V7.57a.732.732,0,1,0,1.463,0V6.41A.742.742,0,0,0,13.207,5.66Zm-7.5,0a.751.751,0,0,0-.732.75V7.57a.732.732,0,1,0,1.463,0V6.41A.742.742,0,0,0,5.706,5.66Zm3.8-4.16a2.979,2.979,0,0,0-2.1.879A3.092,3.092,0,0,0,6.545,4.47h5.91A3,3,0,0,0,9.509,1.5Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M14.12,15H4.88A4.863,4.863,0,0,1,0,10.165V4.835A4.863,4.863,0,0,1,4.88,0H14.12A4.863,4.863,0,0,1,19,4.835v5.329A4.863,4.863,0,0,1,14.12,15'
        transform='translate(0 5)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M8.255,8a.734.734,0,0,1-.745-.722V4.357a2.961,2.961,0,0,0-3-2.912,3.131,3.131,0,0,0-2.13.843A2.847,2.847,0,0,0,1.49,4.343V7.278A.734.734,0,0,1,.745,8,.734.734,0,0,1,0,7.278V4.357A4.27,4.27,0,0,1,1.33,1.263,4.641,4.641,0,0,1,4.512,0,4.43,4.43,0,0,1,9,4.357V7.278A.734.734,0,0,1,8.255,8'
        transform='translate(5)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 2.5)'>
      <path
        d='M7.562,6.805V3.773A3.781,3.781,0,0,0,0,3.756V6.805'
        transform='translate(5.211 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.742,14.026H4.258A4.256,4.256,0,0,1,0,9.771V4.255A4.256,4.256,0,0,1,4.258,0h9.484A4.256,4.256,0,0,1,18,4.255V9.771A4.256,4.256,0,0,1,13.742,14.026Z'
        transform='translate(0 4.474)'
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
    <g transform='translate(2.5 2)'>
      <path
        d='M14.12,4.474h-.207A4.467,4.467,0,0,0,9.512,0,4.35,4.35,0,0,0,6.387,1.311a4.558,4.558,0,0,0-1.3,3.163H4.88A4.949,4.949,0,0,0,0,9.479v5.516A4.949,4.949,0,0,0,4.88,20a.75.75,0,0,0,0-1.5,3.466,3.466,0,0,1-3.417-3.505V9.479A3.466,3.466,0,0,1,4.88,5.974h.2V7.555a.732.732,0,1,0,1.463,0V4.509a3.043,3.043,0,0,1,.872-2.134A3.127,3.127,0,0,1,9.509,1.5a2.985,2.985,0,0,1,2.942,2.974h-3.2a.75.75,0,0,0,0,1.5h3.2V7.555a.732.732,0,1,0,1.463,0V5.974h.2a3.466,3.466,0,0,1,3.417,3.505v5.516A3.466,3.466,0,0,1,14.12,18.5H8.863a.75.75,0,0,0,0,1.5H14.12A4.949,4.949,0,0,0,19,14.995V9.479a4.949,4.949,0,0,0-4.88-5.005'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 2.5)'>
      <path
        d='M7.562,6.805V3.773A3.781,3.781,0,0,0,0,3.756V6.805'
        transform='translate(5.211 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M13.742,14.026H4.258A4.256,4.256,0,0,1,0,9.771V4.255A4.256,4.256,0,0,1,4.258,0h9.484A4.256,4.256,0,0,1,18,4.255V9.771A4.256,4.256,0,0,1,13.742,14.026Z'
        transform='translate(0 4.474)'
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
    <g transform='translate(2.95 2.65)'>
      <path
        d='M7.562,6.822V3.79A3.781,3.781,0,1,0,0,3.773V6.822'
        transform='translate(5.238 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,7.059C0,1.765,2.255,0,9.019,0s9.019,1.765,9.019,7.059-2.255,7.058-9.019,7.058S0,12.352,0,7.059Z'
        transform='translate(0 4.499)'
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
Bag2.displayName = 'IconlyBag2'
Bag2.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Bag2)
