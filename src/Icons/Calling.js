import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Calling = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.12,19.446C8.83,17.655,2.275,11.231.543,6.974-.176,5.389-.182,4.082.531,3.1.815,2.639,2.433.713,3.882.774a1.863,1.863,0,0,1,1.128.59A13.212,13.212,0,0,1,7.258,4.486a2.233,2.233,0,0,1-.422,1.62c-.267.468-.982,1.354-.8,1.871a11.491,11.491,0,0,0,6.093,5.92c.506.184,1.391-.53,1.857-.8a2.211,2.211,0,0,1,1.616-.424,13.422,13.422,0,0,1,3.112,2.293,1.856,1.856,0,0,1,.585,1.121c.054,1.482-1.96,3.174-2.327,3.385a2.822,2.822,0,0,1-1.69.527A5.191,5.191,0,0,1,13.12,19.446ZM14.835,7.931h0a3.461,3.461,0,0,0-2.743-2.75.86.86,0,0,1,.327-1.689,5.175,5.175,0,0,1,4.1,4.11.865.865,0,0,1-.678,1.011.945.945,0,0,1-.166.015A.86.86,0,0,1,14.835,7.931Zm3.456-.075a6.912,6.912,0,0,0-6.126-6.138A.863.863,0,0,1,11.731.184a.818.818,0,0,1,.625-.176,8.617,8.617,0,0,1,7.638,7.656.857.857,0,0,1-.756.95.705.705,0,0,1-.1.006A.856.856,0,0,1,18.291,7.856Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M1.02.015A.861.861,0,0,0,.693,1.7a3.462,3.462,0,0,1,2.744,2.75h0a.859.859,0,0,0,.841.7.933.933,0,0,0,.165-.015A.865.865,0,0,0,5.12,4.125,5.174,5.174,0,0,0,1.02.015'
        transform='translate(11.398 3.475)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.954.008A.817.817,0,0,0,.328.184.863.863,0,0,0,.762,1.718,6.912,6.912,0,0,1,6.888,7.857a.857.857,0,0,0,.851.764.8.8,0,0,0,.1-.006A.847.847,0,0,0,8.411,8.3a.856.856,0,0,0,.181-.633A8.616,8.616,0,0,0,.954.008'
        transform='translate(11.402 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M15.6,11.9a2.211,2.211,0,0,0-1.615.424c-.465.27-1.35.984-1.856.8A11.493,11.493,0,0,1,6.04,7.2c-.186-.517.528-1.4.8-1.871a2.235,2.235,0,0,0,.422-1.62A13.176,13.176,0,0,0,5.009.592,1.858,1.858,0,0,0,3.882,0C2.433-.06.815,1.866.531,2.327-.181,3.309-.176,4.616.543,6.2,2.276,10.458,8.83,16.883,13.12,18.674a5.2,5.2,0,0,0,2.166.554,2.825,2.825,0,0,0,1.69-.528c.366-.211,2.38-1.9,2.326-3.385a1.856,1.856,0,0,0-.586-1.121A13.372,13.372,0,0,0,15.6,11.9'
        transform='translate(0 0.773)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.49,2.374C.806,1.849,2.55-.056,3.793,0A1.642,1.642,0,0,1,4.76.518h0a16.884,16.884,0,0,1,2.467,3.34C7.472,5.026,6.078,5.7,6.5,6.878a9.873,9.873,0,0,0,5.619,5.616c1.177.427,1.851-.965,3.019-.723a16.864,16.864,0,0,1,3.34,2.468h0a1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.666-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.146,4.525-.191,3.3.49,2.374Z'
        transform='translate(0.5 0.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A7.971,7.971,0,0,1,7.041,7.032'
        transform='translate(12.565 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A4.426,4.426,0,0,1,3.5,3.5'
        transform='translate(12.565 4.293)'
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
        d='M12.86,19.418C9.653,18.076,4.8,13.727,2.076,9.736A.745.745,0,0,1,2.264,8.7.734.734,0,0,1,3.289,8.9c2.547,3.726,7.2,7.923,10.165,9.164,1.2.56,2.092.595,2.755.116.517-.317,1.987-1.787,1.961-2.552a.988.988,0,0,0-.285-.439,17.661,17.661,0,0,0-2.859-2.18c-.317-.065-.639.123-1.135.437l-.255.16a.735.735,0,0,1-1.011-.254.745.745,0,0,1,.251-1.019l.23-.143a2.988,2.988,0,0,1,2.262-.623,15.22,15.22,0,0,1,3.569,2.584,2.277,2.277,0,0,1,.7,1.389c.064,1.821-2.36,3.725-2.637,3.885A3.067,3.067,0,0,1,15.157,20,5.486,5.486,0,0,1,12.86,19.418ZM9.8,12.434A10.29,10.29,0,0,1,6.275,7.857a2.418,2.418,0,0,1,.36-2.17c.221-.388.345-.619.293-.867A18.756,18.756,0,0,0,4.774,1.985.886.886,0,0,0,4.3,1.694c-.662-.031-2.14,1.384-2.467,1.928-.506.7-.47,1.6.073,2.8a.744.744,0,0,1-.365.983.734.734,0,0,1-.975-.368C-.2,5.328-.19,3.9.612,2.8.78,2.514,2.65.1,4.4.214A2.257,2.257,0,0,1,5.8.923a15.353,15.353,0,0,1,2.566,3.6,2.631,2.631,0,0,1-.459,1.909c-.26.455-.35.651-.261.9a8.793,8.793,0,0,0,3.008,3.9.745.745,0,0,1,.171,1.035.733.733,0,0,1-1.027.173Zm5.26-4.586a3.607,3.607,0,0,0-2.854-2.873.742.742,0,0,1,.282-1.456,5.081,5.081,0,0,1,4.019,4.046.742.742,0,0,1-.582.87.759.759,0,0,1-.142.013A.737.737,0,0,1,15.062,7.848Zm3.47-.067a7.08,7.08,0,0,0-6.264-6.3.741.741,0,0,1-.652-.819.733.733,0,0,1,.814-.654A8.545,8.545,0,0,1,20,7.614a.739.739,0,0,1-.649.82.675.675,0,0,1-.084.005A.739.739,0,0,1,18.532,7.781Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.49,2.374C.806,1.849,2.55-.056,3.793,0A1.642,1.642,0,0,1,4.76.518h0a16.884,16.884,0,0,1,2.467,3.34C7.472,5.026,6.078,5.7,6.5,6.878a9.873,9.873,0,0,0,5.619,5.616c1.177.427,1.851-.965,3.019-.723a16.864,16.864,0,0,1,3.34,2.468h0a1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.666-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.146,4.525-.191,3.3.49,2.374Z'
        transform='translate(0.5 0.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A7.971,7.971,0,0,1,7.041,7.032'
        transform='translate(12.565 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0A4.426,4.426,0,0,1,3.5,3.5'
        transform='translate(12.565 4.293)'
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
        d='M0,0A7.971,7.971,0,0,1,7.041,7.032'
        transform='translate(12.352 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A4.426,4.426,0,0,1,3.5,3.5'
        transform='translate(12.352 4.293)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.7,13.3C-1.2,6.4-.217,3.241.511,2.223.6,2.059,2.906-1.388,5.375.634,11.5,5.679,3.745,4.966,8.889,10.111S13.32,7.5,18.366,13.625c2.022,2.469-1.425,4.772-1.588,4.864C15.76,19.217,12.6,20.2,5.7,13.3Z'
        transform='translate(0 1)'
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
Calling.displayName = 'IconlyCalling'
Calling.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Calling)
