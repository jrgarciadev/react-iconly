import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ChevronUp = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(6 7)'>
      <path
        d='M7.131.369c.058.057.306.27.51.469a21.69,21.69,0,0,1,4.024,5.8A4.617,4.617,0,0,1,12,7.812a1.933,1.933,0,0,1-.218.9,1.874,1.874,0,0,1-.9.795,9.84,9.84,0,0,1-1.064.256A23.979,23.979,0,0,1,6.008,10a27.724,27.724,0,0,1-3.689-.213A8.495,8.495,0,0,1,.992,9.446,1.785,1.785,0,0,1,0,7.868V7.812A4.879,4.879,0,0,1,.409,6.491,21.69,21.69,0,0,1,4.375.823,5.66,5.66,0,0,1,4.929.341,1.783,1.783,0,0,1,5.993,0,1.875,1.875,0,0,1,7.131.369'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(18 17) rotate(180)'>
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
    <g transform='translate(19 15.5) rotate(180)'>
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
    <g transform='translate(4 7.5)'>
      <path
        d='M.242,8.756a.846.846,0,0,1,0-1.184L7.417.247,7.5.171A.813.813,0,0,1,8.581.244a.846.846,0,0,1,0,1.183L1.406,8.753l-.084.076a.814.814,0,0,1-1.08-.073Zm14.351,0L9.828,3.888,9.755,3.8a.847.847,0,0,1,.076-1.1.812.812,0,0,1,1.163,0l4.766,4.865.073.085a.847.847,0,0,1-.076,1.1.814.814,0,0,1-1.165,0Z'
        fill={color}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(19 15.5) rotate(180)'>
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
ChevronUp.displayName = 'IconlyChevronUp'
ChevronUp.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ChevronUp)
