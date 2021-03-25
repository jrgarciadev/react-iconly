import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const CallMissed = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.3,19.439C8.949,17.623,2.306,11.109.549,6.791-.178,5.185-.184,3.86.537,2.864.825,2.4,2.466.445,3.934.506a1.884,1.884,0,0,1,1.143.6A13.314,13.314,0,0,1,7.356,4.27a2.269,2.269,0,0,1-.427,1.643c-.273.474-1,1.372-.807,1.9a11.651,11.651,0,0,0,6.176,6c.514.186,1.41-.538,1.881-.812a2.241,2.241,0,0,1,1.638-.429A13.523,13.523,0,0,1,18.971,14.9a1.878,1.878,0,0,1,.594,1.138c.054,1.5-1.986,3.218-2.359,3.432A2.861,2.861,0,0,1,15.494,20,5.276,5.276,0,0,1,13.3,19.439ZM18.492,7.584l-2.4-2.413-2.4,2.413a.9.9,0,0,1-1.248,0,.89.89,0,0,1,0-1.254l2.4-2.413L12.435,1.5a.89.89,0,0,1,0-1.254.9.9,0,0,1,1.248,0l2.4,2.413,2.4-2.413a.9.9,0,0,1,1.248,0,.888.888,0,0,1,0,1.254l-2.4,2.413,2.4,2.413a.888.888,0,0,1,0,1.254.879.879,0,0,1-1.248,0Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M15.816,12.066a2.241,2.241,0,0,0-1.637.43c-.471.274-1.368,1-1.882.812a11.652,11.652,0,0,1-6.176-6c-.189-.524.535-1.423.808-1.9a2.271,2.271,0,0,0,.427-1.642A13.359,13.359,0,0,0,5.077.6,1.881,1.881,0,0,0,3.934,0C2.466-.06.825,1.892.537,2.359c-.721,1-.716,2.321.012,3.927C2.306,10.6,8.949,17.118,13.3,18.934a5.271,5.271,0,0,0,2.2.561,2.863,2.863,0,0,0,1.713-.535c.372-.214,2.413-1.929,2.359-3.432a1.884,1.884,0,0,0-.595-1.137,13.534,13.534,0,0,0-3.155-2.325'
        transform='translate(0 0.505)'
        fill={color}
      />
      <path
        d='M5.16,3.918l2.4-2.413a.888.888,0,0,0,0-1.254.9.9,0,0,0-1.249,0l-2.4,2.414L1.507.251a.9.9,0,0,0-1.249,0,.89.89,0,0,0,0,1.254l2.4,2.413L.258,6.33a.89.89,0,0,0,0,1.254.9.9,0,0,0,1.249,0l2.4-2.414,2.4,2.414A.885.885,0,0,0,7.564,6.33Z'
        transform='translate(12.177 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.49,2.374C.807,1.849,2.549-.056,3.793,0a1.642,1.642,0,0,1,.967.517,16.893,16.893,0,0,1,2.468,3.34C7.471,5.026,6.078,5.7,6.5,6.878a9.872,9.872,0,0,0,5.619,5.616c1.177.427,1.851-.965,3.019-.723a16.894,16.894,0,0,1,3.34,2.468,1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.666-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.145,4.525-.192,3.3.49,2.374Z'
        transform='translate(0.5 0.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6,0,0,6'
        transform='translate(13.25 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,6,6'
        transform='translate(13.25 0.75)'
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
        d='M13.1,19.412c-3.266-1.357-8.2-5.751-10.981-9.785A.749.749,0,1,1,3.349,8.78c2.594,3.765,7.334,8.006,10.35,9.26,1.22.566,2.128.6,2.8.117.526-.319,2.024-1.806,2-2.579a.992.992,0,0,0-.291-.444,18.045,18.045,0,0,0-2.912-2.2c-.316-.066-.65.126-1.156.443l-.258.161a.75.75,0,0,1-.773-1.286l.233-.143a3.066,3.066,0,0,1,2.3-.631,15.6,15.6,0,0,1,3.636,2.611,2.291,2.291,0,0,1,.715,1.4c.065,1.84-2.4,3.766-2.685,3.927A3.139,3.139,0,0,1,15.433,20,5.613,5.613,0,0,1,13.1,19.412ZM9.981,12.353A10.4,10.4,0,0,1,6.39,7.727a2.427,2.427,0,0,1,.366-2.193c.226-.391.351-.625.3-.876A19.039,19.039,0,0,0,4.862,1.792a.914.914,0,0,0-.48-.293C3.666,1.453,2.2,2.9,1.87,3.449c-.515.707-.479,1.614.074,2.829A.749.749,0,0,1,.58,6.9C-.208,5.171-.193,3.73.624,2.618.927,2.109,2.838-.106,4.479,0A2.315,2.315,0,0,1,5.91.718,15.543,15.543,0,0,1,8.523,4.353a2.647,2.647,0,0,1-.467,1.929c-.266.461-.357.658-.266.906a8.889,8.889,0,0,0,3.063,3.945.75.75,0,0,1-.871,1.22Zm8.738-5.076L16.25,4.81,13.781,7.277A.75.75,0,0,1,12.72,6.218l2.47-2.47L12.72,1.28A.75.75,0,0,1,13.781.221L16.25,2.688,18.2.736h0l.515-.515A.75.75,0,0,1,19.78,1.28L18.747,2.313h0L17.311,3.749l2.47,2.47a.75.75,0,0,1-1.061,1.059Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.49,2.374C.807,1.849,2.549-.056,3.793,0a1.642,1.642,0,0,1,.967.517,16.893,16.893,0,0,1,2.468,3.34C7.471,5.026,6.078,5.7,6.5,6.878a9.872,9.872,0,0,0,5.619,5.616c1.177.427,1.851-.965,3.019-.723a16.894,16.894,0,0,1,3.34,2.468,1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.666-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.145,4.525-.192,3.3.49,2.374Z'
        transform='translate(0.5 0.5)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3,3,0,6,3,3,0,0,3,3,6,0,3,3,6,6Z'
        transform='translate(13.25 0.75)'
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
        d='M6,0,0,6'
        transform='translate(13.328 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,6,6'
        transform='translate(13.328 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.7,13.3C-1.2,6.4-.217,3.241.511,2.222.6,2.059,2.906-1.388,5.375.634,11.5,5.679,3.745,4.966,8.89,10.111s4.431-2.611,9.476,3.514c2.022,2.469-1.425,4.77-1.588,4.864C15.759,19.217,12.6,20.2,5.7,13.3Z'
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
CallMissed.displayName = 'IconlyCallMissed'
CallMissed.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(CallMissed)
