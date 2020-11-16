import React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Search = ({ color, set }) => {
  const Bold = () => (
    <path
      d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'
      fill={color}
    />
  )
  const Regular = () => (
    <g
      transform='translate(2 2)'
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    >
      <circle
        cx={8.989}
        cy={8.989}
        r={8.989}
        transform='translate(.778 .778)'
      />
      <path d='M16.018 16.485L19.542 20' />
    </g>
  )

  switch (set) {
    case 'bold':
      return <Bold />
    default:
      return <Regular />
  }
}

Search.propTypes = {
  color: PropTypes.string,
  set: PropTypes.string
}

export default withIcon(Search)
