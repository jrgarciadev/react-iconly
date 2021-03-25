import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Graph = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M1.088,15.514A8.2,8.2,0,0,1,.065,12.378,5.93,5.93,0,0,1,0,11.391,8.694,8.694,0,0,1,6.956,2.959a1.1,1.1,0,0,1,1.2.6,1.1,1.1,0,0,1,.127.257c.136,2.1.281,4.158.417,6.22a1.851,1.851,0,0,0,.1.63,1.023,1.023,0,0,0,1.005.631l6.656-.426.046.017a1.085,1.085,0,0,1,.756.322,1.048,1.048,0,0,1,.3.753A8.671,8.671,0,0,1,10.683,19.8a8.948,8.948,0,0,1-1.889.2A8.813,8.813,0,0,1,1.088,15.514Zm9.784-6.423a.88.88,0,0,1-.293-.658L10.062.889V.765A.793.793,0,0,1,10.327.21.823.823,0,0,1,10.913,0,9.422,9.422,0,0,1,20,7.89a.3.3,0,0,1,0,.08.786.786,0,0,1-.2.575.813.813,0,0,1-.555.269l-7.679.507q-.041,0-.082,0A.915.915,0,0,1,10.872,9.091Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M8.153.644a1.06,1.06,0,0,1,.1.329l.278,4.14h0l.138,2.081a2.14,2.14,0,0,0,.1.631,1.043,1.043,0,0,0,1.005.631l6.657-.435a1.1,1.1,0,0,1,.774.3,1.06,1.06,0,0,1,.319.609l.012.14a8.682,8.682,0,0,1-6.884,7.818,8.856,8.856,0,0,1-9.592-4.263,8.214,8.214,0,0,1-1-3.146A6.018,6.018,0,0,1,0,8.491,8.7,8.7,0,0,1,6.984.013,1.091,1.091,0,0,1,8.153.644Z'
        transform='translate(0 2.911)'
        fill={color}
      />
      <path
        d='M.849,0a9.444,9.444,0,0,1,9.13,7.811l-.007.033h0l-.02.047,0,.13a.8.8,0,0,1-.192.472.827.827,0,0,1-.462.271l-.11.015-7.681.5a.917.917,0,0,1-.7-.227.884.884,0,0,1-.288-.537L.007.845a.122.122,0,0,1,0-.08A.785.785,0,0,1,.265.21.815.815,0,0,1,.849,0Z'
        transform='translate(10.021 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M8.7,6.975A8.311,8.311,0,0,0,.741,0,.714.714,0,0,0,0,.687H0V.751L.449,7.461a.824.824,0,0,0,.87.769l6.728-.449A.714.714,0,0,0,8.7,7.012Z'
        transform='translate(10.819 0.777)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.145.024A.915.915,0,0,1,7.189.545a.824.824,0,0,1,.082.3c.092,1.3.284,4.146.394,5.684a1.043,1.043,0,0,0,1.117.97h0l5.648-.348a.915.915,0,0,1,.97.915h0A7.7,7.7,0,0,1,.974,11.264a7.323,7.323,0,0,1-.915-2.8A4.723,4.723,0,0,1,0,7.548,7.707,7.707,0,0,1,6.136.024'
        transform='translate(0.756 4.745)'
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
    <g transform='translate(2 2.5)'>
      <path
        d='M4.511,18.085a8.249,8.249,0,0,1-4.447-6.4A5.112,5.112,0,0,1,0,10.721,8.287,8.287,0,0,1,6.629,2.613a.8.8,0,1,1,.316,1.568,6.708,6.708,0,0,0-5.339,6.566,4.152,4.152,0,0,0,.044.74,6.732,6.732,0,0,0,13.149,1,.808.808,0,0,1,.982-.549.794.794,0,0,1,.495.362.779.779,0,0,1,.083.6A8.367,8.367,0,0,1,8.312,19,8.345,8.345,0,0,1,4.511,18.085ZM11.924,9.58a1.61,1.61,0,0,1-1.6-1.463L9.89,1.577A1.472,1.472,0,0,1,10.3.462,1.561,1.561,0,0,1,11.408,0h.033a8.92,8.92,0,0,1,8.547,7.438H20v.14a1.47,1.47,0,0,1-.367,1.072,1.488,1.488,0,0,1-1.026.495l-6.575.436Zm0-1.568,6.486-.427a7.3,7.3,0,0,0-2.4-4.21,7.391,7.391,0,0,0-4.525-1.789Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M8.7,6.975A8.311,8.311,0,0,0,.741,0,.714.714,0,0,0,0,.687H0V.751L.449,7.461a.824.824,0,0,0,.87.769l6.728-.449A.714.714,0,0,0,8.7,7.012Z'
        transform='translate(10.819 0.777)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M6.145.024A.915.915,0,0,1,7.189.545a.824.824,0,0,1,.082.3c.092,1.3.284,4.146.394,5.684a1.043,1.043,0,0,0,1.117.97h0l5.648-.348a.915.915,0,0,1,.97.915h0A7.7,7.7,0,0,1,.974,11.264a7.323,7.323,0,0,1-.915-2.8A4.723,4.723,0,0,1,0,7.548,7.707,7.707,0,0,1,6.136.024'
        transform='translate(0.756 4.745)'
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
    <g transform='translate(2.2 2)'>
      <path
        d='M.67.6C-.038,1.414-.32,6.539.5,7.363s5.768.406,6.956-.529C10.317,4.583,2.93-2,.67.6Z'
        transform='translate(10.809 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.188,7.984c1.084,1.084-1.79,7.264-7.486,7.264A7.7,7.7,0,0,1,0,7.547c0-5.3,5.229-8.69,6.728-7.191.863.863-.109,4.924,1.439,6.473S14.1,6.9,15.188,7.984Z'
        transform='translate(0.75 3.806)'
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
Graph.displayName = 'IconlyGraph'
Graph.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Graph)
