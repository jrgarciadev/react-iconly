import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const InfoCircle = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 1.999)'>
      <path
        d='M10,20a10,10,0,1,1,7.074-2.929A10.011,10.011,0,0,1,10,20Zm0-7.069a.871.871,0,0,0-.87.869.875.875,0,1,0,.87-.869Zm0-7.6a.892.892,0,0,0-.88.88v4.42a.875.875,0,0,0,1.751,0V6.21A.876.876,0,0,0,10,5.33Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g>
      <path
        d='M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10'
        transform='translate(2 2)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.005,8.468a.878.878,0,1,1,.879.875A.874.874,0,0,1,.005,8.468ZM0,5.295V.875a.875.875,0,0,1,1.75,0v4.42a.875.875,0,1,1-1.75,0Z'
        transform='translate(11.12 7.336)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M9.25,0A9.25,9.25,0,1,1,0,9.25,9.25,9.25,0,0,1,9.25,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V4.419'
        transform='translate(9.495 6.204)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.5 13.296)'
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
        d='M2.073,16.1a.727.727,0,0,1,1.152-.888A8.547,8.547,0,1,0,1.454,10a8.636,8.636,0,0,0,.1,1.3.727.727,0,0,1-.608.828.719.719,0,0,1-.828-.608A10,10,0,1,1,2.073,16.1Zm7.183-2.3A.746.746,0,0,1,10,13.046h.01a.75.75,0,1,1-.754.751ZM9.25,10.625V6.2a.75.75,0,1,1,1.5,0v4.421a.75.75,0,0,1-1.5,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M9.25,0A9.25,9.25,0,1,1,0,9.25,9.25,9.25,0,0,1,9.25,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V4.419'
        transform='translate(9.495 6.204)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.5 13.296)'
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
    <g transform='translate(2 2)'>
      <path
        d='M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V3.895'
        transform='translate(9.5 6.105)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.5 13)'
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
InfoCircle.displayName = 'IconlyInfoCircle'
InfoCircle.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(InfoCircle)
