import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ChevronDown = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(6 7)'>
      <path
        d='M4.869,9.631c-.058-.057-.306-.27-.51-.469a21.69,21.69,0,0,1-4.024-5.8A4.617,4.617,0,0,1,0,2.188a1.933,1.933,0,0,1,.218-.9A1.874,1.874,0,0,1,1.122.5,9.84,9.84,0,0,1,2.186.242,23.979,23.979,0,0,1,5.992,0,27.724,27.724,0,0,1,9.681.213a8.495,8.495,0,0,1,1.327.341A1.785,1.785,0,0,1,12,2.132v.057a4.879,4.879,0,0,1-.409,1.321A21.69,21.69,0,0,1,7.625,9.177a5.66,5.66,0,0,1-.554.482A1.783,1.783,0,0,1,6.007,10a1.875,1.875,0,0,1-1.138-.369'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(6 7)'>
      <path
        d='M4.867.214,9.086,7.062a.435.435,0,0,1-.026.493,13.057,13.057,0,0,1-1.436,1.62,5.369,5.369,0,0,1-.559.479A1.723,1.723,0,0,1,6.006,10a1.855,1.855,0,0,1-1.14-.368c-.057-.056-.308-.268-.513-.468A21.777,21.777,0,0,1,.33,3.341,4.49,4.49,0,0,1,0,2.161a1.938,1.938,0,0,1,.217-.9,1.866,1.866,0,0,1,.9-.79A9.271,9.271,0,0,1,2.188.213,17.671,17.671,0,0,1,4.457,0a.463.463,0,0,1,.41.214'
        transform='translate(0 0)'
        fill={color}
      />
      <path
        d='M.065.668A.443.443,0,0,1,.476,0C1.318.037,2.06.1,2.612.175A7.427,7.427,0,0,1,3.934.521,1.778,1.778,0,0,1,4.926,2.1v.055a4.5,4.5,0,0,1-.41,1.326,13.808,13.808,0,0,1-.894,1.685.459.459,0,0,1-.778.007Z'
        transform='translate(7.074 0.005)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(5 8.5)'>
      <path
        d='M14,0,7,7,0,0'
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
    <path
      d='M7.417,8.753.24,1.427a.846.846,0,0,1,0-1.183.813.813,0,0,1,1.164,0L8.582,7.573a.846.846,0,0,1,0,1.184.813.813,0,0,1-1.164,0ZM9.832,6.3a.847.847,0,0,1,0-1.184L14.593.247a.814.814,0,0,1,1.165,0,.847.847,0,0,1,0,1.183L10.994,6.293a.812.812,0,0,1-1.163,0Z'
      transform='translate(4 7.5)'
      fill={color}
    />
  )

  const Curved = () => (
    <g transform='translate(5 8.5)'>
      <path
        d='M14,0S9.856,7,7,7,0,0,0,0'
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
    case 'curved':
      return <Curved />
    default:
      return <Light />
  }
}
ChevronDown.displayName = 'IconlyChevronDown'
ChevronDown.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ChevronDown)
