import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ChevronLeft = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(7 6)'>
      <path
        d='M.369,4.869c.057-.058.27-.306.469-.51A21.69,21.69,0,0,1,6.633.335,4.617,4.617,0,0,1,7.812,0a1.933,1.933,0,0,1,.9.218,1.874,1.874,0,0,1,.795.9,9.84,9.84,0,0,1,.256,1.064A23.979,23.979,0,0,1,10,5.992a27.724,27.724,0,0,1-.213,3.689,8.495,8.495,0,0,1-.341,1.327A1.785,1.785,0,0,1,7.868,12H7.812a4.879,4.879,0,0,1-1.321-.409A21.69,21.69,0,0,1,.823,7.625a5.66,5.66,0,0,1-.482-.554A1.783,1.783,0,0,1,0,6.007,1.875,1.875,0,0,1,.369,4.869'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(17 6) rotate(90)'>
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
    <g transform='translate(15.5 5) rotate(90)'>
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
    <g transform='translate(7.5 4)'>
      <path
        d='M7.573,15.759.247,8.582.171,8.5A.813.813,0,0,1,.244,7.42a.845.845,0,0,1,1.183,0l7.326,7.177.076.084a.815.815,0,0,1-.073,1.08.846.846,0,0,1-1.184,0ZM2.7,6.169A.813.813,0,0,1,2.707,5L7.573.239,7.658.167a.847.847,0,0,1,1.1.076.813.813,0,0,1,0,1.164L3.888,6.171,3.8,6.245a.848.848,0,0,1-1.1-.076Z'
        fill={color}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(15.5 5) rotate(90)'>
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
ChevronLeft.displayName = 'IconlyChevronLeft'
ChevronLeft.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ChevronLeft)
