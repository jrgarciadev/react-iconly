import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const VolumeOff = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 3)'>
      <path
        d='M.274,18.733a.929.929,0,0,1,0-1.314L3.1,14.593H3.068A2.637,2.637,0,0,1,.443,12.052a27.39,27.39,0,0,1,0-5.6A2.683,2.683,0,0,1,3.068,3.987H4.9L8.392,1.13A3.184,3.184,0,0,1,10.149.42a2.539,2.539,0,0,1,2.382,1.925,8.172,8.172,0,0,1,.234,1.472l.084.677c.014.1.026.2.037.309L17.42.271a.926.926,0,0,1,1.309,1.31L1.58,18.729A.947.947,0,0,1,.924,19,.964.964,0,0,1,.274,18.733Zm9.79-.572a2.746,2.746,0,0,1-1.6-.666l-1.3-1.006a.872.872,0,0,1-.071-1.294c.277-.338,4.648-4.322,4.792-4.463a.843.843,0,0,1,.607-.2c.389.1.464.656.458,1.094-.018,1.273-.06,2.157-.128,2.7l-.048.451a8.6,8.6,0,0,1-.228,1.432,2.546,2.546,0,0,1-2.372,1.952Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 3)'>
      <path
        d='M9.765,17.743a2.756,2.756,0,0,1-1.6-.665l-1.3-1.007a.873.873,0,0,1-.071-1.294c.277-.339,4.648-4.321,4.792-4.463a.845.845,0,0,1,.607-.2c.389.1.464.658.459,1.1-.018,1.272-.061,2.156-.129,2.7l-.048.452a8.817,8.817,0,0,1-.227,1.432,2.547,2.547,0,0,1-2.372,1.952C9.836,17.744,9.8,17.744,9.765,17.743Zm-7-3.568a2.637,2.637,0,0,1-2.625-2.54,27.518,27.518,0,0,1,0-5.6A2.686,2.686,0,0,1,2.768,3.569H4.6L8.094.709A3.208,3.208,0,0,1,9.851,0a2.539,2.539,0,0,1,2.381,1.928,8.127,8.127,0,0,1,.233,1.47l.085.679c.022.158.042.3.053.487L2.991,14.174Z'
        transform='translate(0.299 0.418)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M18.728.27a.926.926,0,0,0-1.307,0L.27,17.419a.929.929,0,0,0,0,1.314A.963.963,0,0,0,.925,19a.946.946,0,0,0,.655-.271L18.729,1.581a.927.927,0,0,0,0-1.311'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(3 2.5)'>
      <path
        d='M4.1,12.6H1.984A1.845,1.845,0,0,1,.141,10.753a25.917,25.917,0,0,1,0-5.406A1.9,1.9,0,0,1,1.984,3.568H4.1L7.809.53A2.278,2.278,0,0,1,9.039,0a1.742,1.742,0,0,1,1.651,1.363,14.268,14.268,0,0,1,.253,1.777A11.67,11.67,0,0,1,11.069,5.4'
        transform='translate(0.795 1.286)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.574,0c-.019,1.336-.065,2.149-.123,2.618A12.555,12.555,0,0,1,4.2,4.394,1.741,1.741,0,0,1,2.548,5.757,1.968,1.968,0,0,1,1.4,5.281L0,4.142'
        transform='translate(7.286 11.691)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.148,0,0,17.148'
        transform='translate(0.848 0.794)'
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
        d='M.288,18.764a.809.809,0,0,1,0-1.139l10.9-10.934a11.738,11.738,0,0,0-.085-1.831L11.02,4.12a8.971,8.971,0,0,0-.184-1.231.985.985,0,0,0-.848-.779H9.967a1.654,1.654,0,0,0-.748.344L5.453,5.545a.8.8,0,0,1-.508.182H2.808A1.136,1.136,0,0,0,1.74,6.838a25.724,25.724,0,0,0,0,5.259.8.8,0,0,1-.683.909.683.683,0,0,1-.112.008A.8.8,0,0,1,.15,12.32a27.344,27.344,0,0,1,0-5.692,2.732,2.732,0,0,1,2.66-2.512h1.85l3.533-2.9A3.309,3.309,0,0,1,9.963.5,2.607,2.607,0,0,1,12.38,2.455a9.965,9.965,0,0,1,.237,1.495l.082.683c.023.162.041.3.056.491L17.629.235a.8.8,0,1,1,1.136,1.139L1.424,18.764a.8.8,0,0,1-1.136,0ZM9.881,18.5a2.794,2.794,0,0,1-1.621-.674l-1.4-1.147a.8.8,0,0,1,1.015-1.247l1.411,1.155a1.324,1.324,0,0,0,.635.3c.007,0,.015,0,.024,0a1,1,0,0,0,.9-.808,7.672,7.672,0,0,0,.176-1.175q.023-.246.052-.493c.06-.492.1-1.355.119-2.57A.79.79,0,0,1,12,11.051a.8.8,0,0,1,.791.817c-.018,1.292-.06,2.188-.129,2.741l-.049.457a8.787,8.787,0,0,1-.229,1.454,2.579,2.579,0,0,1-2.4,1.982Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 3)'>
      <path
        d='M1.084,12.373a1.7,1.7,0,0,1-.631-.635,2.556,2.556,0,0,1-.311-.984,25.917,25.917,0,0,1,0-5.406A1.9,1.9,0,0,1,1.985,3.569H4.1L7.811.53A2.29,2.29,0,0,1,9.04,0a1.742,1.742,0,0,1,1.65,1.364,9.605,9.605,0,0,1,.256,1.481'
        transform='translate(0 0.491)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.574,0c-.019,1.335-.065,2.148-.123,2.617A12.534,12.534,0,0,1,4.2,4.393,1.743,1.743,0,0,1,2.548,5.757,1.977,1.977,0,0,1,1.4,5.28L0,4.141'
        transform='translate(6.492 10.898)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.148,0,0,17.148'
        transform='translate(0.054 0)'
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
    <g transform='translate(4 4)'>
      <path
        d='M3.732,11.008c-1.083-.251-1.816-.054-2.72-.814C0,9.335-.008,7.895,0,6.669-.008,5.443,0,4,1.012,3.144s1.816-.51,3.132-.939,3.141-3.1,5.172-1.9c.823.582,1.306,1.53,1.5,3.615'
        transform='translate(0.671 1.545)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.509,0c-.116,3.006-.635,4.214-1.593,4.894A2.583,2.583,0,0,1,0,4.509'
        transform='translate(7.07 9.672)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.345,0,0,15.345'
        transform='translate(0.941 0.671)'
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
VolumeOff.displayName = 'IconlyVolumeOff'
VolumeOff.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(VolumeOff)
