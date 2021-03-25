import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Category = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.081,20a2.549,2.549,0,0,1-2.541-2.56V14.031a2.543,2.543,0,0,1,2.541-2.561h3.38A2.549,2.549,0,0,1,20,14.031v3.408A2.554,2.554,0,0,1,17.46,20ZM2.54,20A2.555,2.555,0,0,1,0,17.439V14.031A2.549,2.549,0,0,1,2.54,11.47H5.92a2.543,2.543,0,0,1,2.54,2.561v3.408A2.548,2.548,0,0,1,5.92,20ZM14.081,8.53A2.542,2.542,0,0,1,11.54,5.97V2.561A2.549,2.549,0,0,1,14.081,0h3.38A2.554,2.554,0,0,1,20,2.561V5.97a2.548,2.548,0,0,1-2.54,2.56ZM2.54,8.53A2.548,2.548,0,0,1,0,5.97V2.561A2.555,2.555,0,0,1,2.54,0H5.92A2.549,2.549,0,0,1,8.46,2.561V5.97A2.542,2.542,0,0,1,5.92,8.53Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M2.539,0H5.924A2.549,2.549,0,0,1,8.463,2.56V5.975a2.549,2.549,0,0,1-2.539,2.56H2.539A2.549,2.549,0,0,1,0,5.975V2.56A2.549,2.549,0,0,1,2.539,0'
        transform='translate(11.537 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M14.075,20a2.549,2.549,0,0,1-2.538-2.56V14.026a2.549,2.549,0,0,1,2.538-2.561h3.387A2.549,2.549,0,0,1,20,14.026V17.44A2.549,2.549,0,0,1,17.462,20ZM2.539,20A2.55,2.55,0,0,1,0,17.44V14.026a2.55,2.55,0,0,1,2.539-2.561H5.925a2.549,2.549,0,0,1,2.538,2.561V17.44A2.549,2.549,0,0,1,5.925,20Zm0-11.465A2.549,2.549,0,0,1,0,5.974V2.56A2.549,2.549,0,0,1,2.539,0H5.925A2.548,2.548,0,0,1,8.463,2.56V5.974A2.549,2.549,0,0,1,5.925,8.535Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M2.449,0H5.716A2.459,2.459,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(11.837 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.471V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(0 11.766)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.449,0H5.716A2.46,2.46,0,0,1,8.163,2.471V5.764a2.459,2.459,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(11.837 11.766)'
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
    <g transform='translate(2.5 2.5)'>
      <path
        d='M13.3,19a2.932,2.932,0,0,1-2.875-2.944V13.186A2.908,2.908,0,0,1,13.3,10.252h2.813A2.931,2.931,0,0,1,19,13.186v2.871A2.943,2.943,0,0,1,16.117,19Zm-1.332-5.815v2.871a1.36,1.36,0,0,0,.388.964,1.3,1.3,0,0,0,.934.4h2.832a1.3,1.3,0,0,0,.934-.4,1.357,1.357,0,0,0,.387-.964V13.186a1.368,1.368,0,0,0-.39-.961,1.311,1.311,0,0,0-.941-.4H13.3A1.347,1.347,0,0,0,11.973,13.186Zm-9.09,5.8A2.976,2.976,0,0,1,0,16.048V13.186a2.966,2.966,0,0,1,.845-2.078,2.842,2.842,0,0,1,2.038-.856H4.038a.769.769,0,0,1,.74.367.805.805,0,0,1,0,.84.77.77,0,0,1-.74.368H2.883a1.354,1.354,0,0,0-1.34,1.359v2.835a1.381,1.381,0,0,0,1.34,1.359H5.713a1.313,1.313,0,0,0,.947-.4,1.371,1.371,0,0,0,.393-.964V11.764a.8.8,0,0,1,.347-.813.763.763,0,0,1,.869.025.8.8,0,0,1,.3.832v4.239a2.913,2.913,0,0,1-2.883,2.943ZM14.989,8.776a.794.794,0,0,1,0-1.576h1.129a1.323,1.323,0,0,0,.948-.41,1.386,1.386,0,0,0,.383-.977V2.943a1.364,1.364,0,0,0-1.331-1.359H13.3a1.346,1.346,0,0,0-1.332,1.359V7.236a.791.791,0,0,1-.793.774.761.761,0,0,1-.541-.245A.794.794,0,0,1,10.43,7.2V2.943A2.967,2.967,0,0,1,11.269.862,2.846,2.846,0,0,1,13.3,0h2.813a2.976,2.976,0,0,1,2.874,2.943V5.805a2.966,2.966,0,0,1-.816,2.085,2.85,2.85,0,0,1-2.022.886ZM5.7,8.749H2.883A2.933,2.933,0,0,1,0,5.814V2.943A2.943,2.943,0,0,1,2.883,0H5.7A2.93,2.93,0,0,1,8.579,2.943V5.814a2.946,2.946,0,0,1-.845,2.078A2.829,2.829,0,0,1,5.7,8.749ZM1.924,1.973a1.381,1.381,0,0,0-.4.97V5.814a1.378,1.378,0,0,0,.39.988,1.319,1.319,0,0,0,.939.4H5.7a1.318,1.318,0,0,0,.949-.41,1.377,1.377,0,0,0,.383-.977V2.943A1.361,1.361,0,0,0,5.7,1.584H2.857A1.311,1.311,0,0,0,1.924,1.973Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M2.449,0H5.716A2.459,2.459,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(11.837 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.471V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(0 11.766)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.449,0H5.716A2.46,2.46,0,0,1,8.163,2.471V5.764a2.459,2.459,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z'
        transform='translate(11.837 11.766)'
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
    <g transform='translate(3 3)'>
      <path
        d='M7.347,3.674A3.673,3.673,0,1,1,3.673,0,3.674,3.674,0,0,1,7.347,3.674Z'
        transform='translate(10.654 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.347,3.674A3.673,3.673,0,1,1,3.673,0,3.674,3.674,0,0,1,7.347,3.674Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.347,3.674A3.673,3.673,0,1,1,3.673,0,3.674,3.674,0,0,1,7.347,3.674Z'
        transform='translate(10.654 10.588)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.347,3.674A3.673,3.673,0,1,1,3.673,0,3.673,3.673,0,0,1,7.347,3.674Z'
        transform='translate(0 10.588)'
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
Category.displayName = 'IconlyCategory'
Category.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Category)
