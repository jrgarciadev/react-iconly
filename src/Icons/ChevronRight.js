import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const ChevronRight = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(7 6)'>
      <path
        d='M9.631,7.131c-.057.058-.27.306-.469.51a21.69,21.69,0,0,1-5.8,4.024A4.617,4.617,0,0,1,2.188,12a1.933,1.933,0,0,1-.9-.218,1.874,1.874,0,0,1-.795-.9A9.84,9.84,0,0,1,.242,9.814,23.979,23.979,0,0,1,0,6.008,27.724,27.724,0,0,1,.213,2.319,8.495,8.495,0,0,1,.554.992,1.785,1.785,0,0,1,2.132,0h.057A4.879,4.879,0,0,1,3.509.409,21.69,21.69,0,0,1,9.177,4.375a5.66,5.66,0,0,1,.482.554A1.783,1.783,0,0,1,10,5.993a1.875,1.875,0,0,1-.369,1.138'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(7 18) rotate(-90)'>
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
    <g transform='translate(8.5 19) rotate(-90)'>
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
        d='M.244,15.758a.815.815,0,0,1-.073-1.08l.076-.084L7.573,7.418a.845.845,0,0,1,1.184,0A.813.813,0,0,1,8.829,8.5l-.076.084L1.427,15.759a.846.846,0,0,1-1.183,0ZM5.2,6.245l-.086-.074L.247,1.407a.813.813,0,0,1,0-1.164.847.847,0,0,1,1.1-.076l.086.073L6.293,5a.813.813,0,0,1,0,1.164.848.848,0,0,1-1.1.076Z'
        fill={color}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(8.5 19) rotate(-90)'>
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
ChevronRight.displayName = 'IconlyChevronRight'
ChevronRight.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(ChevronRight)
