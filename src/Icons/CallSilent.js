import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const CallSilent = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 1.5)'>
      <path
        d='M.245,20.746a.9.9,0,0,1-.129-1.058l.03-.041a.518.518,0,0,1,.069-.091L18.176,1.13A.814.814,0,0,1,18.77.864a.853.853,0,0,1,.6.266.892.892,0,0,1,0,1.229V2.37L9.958,12.015l-.572.587.8-.82a11.186,11.186,0,0,0,2.626,1.566c.506.192,1.378-.54,1.844-.814a2.163,2.163,0,0,1,1.606-.427,13.159,13.159,0,0,1,3.1,2.327,1.978,1.978,0,0,1,.585,1.139C20,17.087,18,18.8,17.63,19.018a2.792,2.792,0,0,1-1.686.539A5.046,5.046,0,0,1,13.794,19,24.043,24.043,0,0,1,7.52,14.516l-6.075,6.23A.857.857,0,0,1,.85,21,.9.9,0,0,1,.245,20.746ZM1.275,6.3C.562,4.7.552,3.366,1.265,2.37,1.543,1.9,3.158-.059,4.6,0a1.78,1.78,0,0,1,1.12.6,13.472,13.472,0,0,1,2.24,3.171,2.315,2.315,0,0,1-.417,1.657c-.267.468-.981,1.372-.793,1.9A10.335,10.335,0,0,0,7.827,9.3L5.141,12.056A21.819,21.819,0,0,1,1.275,6.3Z'
        transform='translate(0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 1.5)'>
      <path
        d='M7.092,9.3,4.406,12.056A21.819,21.819,0,0,1,.54,6.3C-.173,4.7-.183,3.366.53,2.37.808,1.9,2.423-.06,3.861,0a1.785,1.785,0,0,1,1.12.6,13.487,13.487,0,0,1,2.24,3.171A2.318,2.318,0,0,1,6.8,5.429c-.268.468-.981,1.372-.793,1.9A10.336,10.336,0,0,0,7.092,9.3'
        transform='translate(0.735)'
        fill={color}
      />
      <path
        d='M12.429,3.79c.05,1.514-1.953,3.232-2.319,3.446a2.787,2.787,0,0,1-1.685.539,5.035,5.035,0,0,1-2.151-.559A24.046,24.046,0,0,1,0,2.733L2.666,0A11.193,11.193,0,0,0,5.293,1.565c.506.192,1.378-.54,1.844-.814A2.166,2.166,0,0,1,8.742.324a13.187,13.187,0,0,1,3.1,2.328,1.975,1.975,0,0,1,.585,1.138'
        transform='translate(7.52 11.782)'
        fill={color}
      />
      <path
        d='M19.375,1.5v.01L9.958,11.151,1.444,19.882a.856.856,0,0,1-.595.254.9.9,0,0,1-.6-.254.9.9,0,0,1-.129-1.057l.03-.041a.517.517,0,0,1,.069-.091L18.175.265A.816.816,0,0,1,18.77,0a.855.855,0,0,1,.6.265.893.893,0,0,1,0,1.23'
        transform='translate(0 0.864)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M3.532,10.475A19.223,19.223,0,0,1,.515,5.841c-.66-1.439-.7-2.63-.04-3.529C.785,1.8,2.485-.058,3.7,0a1.623,1.623,0,0,1,.94.5,17.785,17.785,0,0,1,1.389,1.67,7.222,7.222,0,0,1,1.01,1.58c.24,1.14-1.12,1.8-.7,2.941.093.227.191.448.3.662'
        transform='translate(0.754 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,18.5,18.5,0'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,2.811a24.78,24.78,0,0,0,6.98,5.18c1.44.67,2.62.679,3.52.03.39-.221,2.36-1.94,2.31-3.221a1.612,1.612,0,0,0-.5-.939,16,16,0,0,0-3.25-2.4c-1.14-.24-1.8,1.121-2.94.7A10,10,0,0,1,2.81,0'
        transform='translate(6.44 10.751)'
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
        d='M13.1,19.411a24.29,24.29,0,0,1-6.658-4.8L1.28,19.772a.75.75,0,0,1-1.06-1.06L5.91,13.025a.77.77,0,0,1,1.059,0,23.929,23.929,0,0,0,6.737,5.014c1.218.568,2.123.6,2.795.116.534-.321,2.029-1.8,2-2.581a.952.952,0,0,0-.292-.451,18.068,18.068,0,0,0-2.9-2.193c-.214-.048-.448.082-.842.309a2.417,2.417,0,0,1-2.165.372A10.814,10.814,0,0,1,8.72,11.277a.749.749,0,0,1,0-1.06l10-9.995a.75.75,0,1,1,1.06,1.06l-9.446,9.44a9.578,9.578,0,0,0,2.51,1.49c.219.079.415-.011.873-.274a2.658,2.658,0,0,1,1.938-.464c.764.148,3.174,2.136,3.633,2.609a2.319,2.319,0,0,1,.709,1.4c.075,1.858-2.406,3.773-2.69,3.931a3.1,3.1,0,0,1-1.87.586A5.586,5.586,0,0,1,13.1,19.411ZM3.711,11.7A19.838,19.838,0,0,1,.577,6.874C-.2,5.173-.191,3.73.625,2.617.8,2.326,2.685-.113,4.488,0A2.31,2.31,0,0,1,5.91.713,17.8,17.8,0,0,1,7.38,2.471c1.066,1.419,1.118,1.72,1.149,1.9a2.633,2.633,0,0,1-.47,1.908c-.265.459-.355.655-.265.9.077.19.169.393.266.592a.75.75,0,0,1-1.348.659C6.6,8.2,6.494,7.962,6.4,7.718a2.41,2.41,0,0,1,.363-2.184c.225-.392.351-.628.3-.878h0A9.494,9.494,0,0,0,6.18,3.371a17.088,17.088,0,0,0-1.311-1.58A.886.886,0,0,0,4.388,1.5c-.646-.051-2.181,1.4-2.516,1.95-.514.706-.475,1.613.081,2.827a18.356,18.356,0,0,0,2.91,4.461.75.75,0,1,1-1.151.962Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M3.629,10.757A19.74,19.74,0,0,1,.529,6C-.148,4.521-.19,3.3.488,2.375.807,1.85,2.553-.059,3.8,0a1.668,1.668,0,0,1,.966.513A18.265,18.265,0,0,1,6.189,2.23,7.416,7.416,0,0,1,7.227,3.852c.247,1.171-1.15,1.848-.719,3.02.1.233.2.46.305.68'
        transform='translate(1 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,2.887A25.454,25.454,0,0,0,7.17,8.206c1.479.688,2.691.7,3.616.031.4-.227,2.424-1.992,2.373-3.308a1.655,1.655,0,0,0-.514-.964A16.432,16.432,0,0,0,9.307,1.5c-1.171-.246-1.849,1.151-3.02.72A10.27,10.27,0,0,1,2.886,0'
        transform='translate(6.84 10.27)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,18.333,18.333,0'
        transform='translate(0.743 0.744)'
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
    <g transform='translate(2 2)'>
      <path
        d='M3.609,11.058C-.977,5.7-.129,3.127.509,2.225c.1-.17,2.4-3.61,4.861-1.592,4.851,4,1,4.385,1.742,6.922'
        transform='translate(0 1)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.185,0c4.927,4.746,4.3-2.728,9.278,3.312C14.49,5.786,11.04,8.079,10.87,8.175,9.874,8.9,6.762,9.863,0,3.185'
        transform='translate(5.901 11.314)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,18.5,18.5,0'
        transform='translate(0.75 0.75)'
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
CallSilent.displayName = 'IconlyCallSilent'
CallSilent.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(CallSilent)
