import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Paper = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M4.674,20A4.7,4.7,0,0,1,0,15.29V4.51A4.493,4.493,0,0,1,4.465,0H9.752a.458.458,0,0,1,.455.46V3.68a3.341,3.341,0,0,0,3.308,3.34c.423,0,.794,0,1.122.006.257,0,.481,0,.68,0,.141,0,.323,0,.521,0,.229,0,.486-.005.716-.005A.448.448,0,0,1,17,7.47v8.04A4.473,4.473,0,0,1,12.554,20Zm.01-6.359a.756.756,0,0,0,.743.75h5.386a.756.756,0,0,0,.743-.75.742.742,0,0,0-.743-.741H5.426A.742.742,0,0,0,4.684,13.64Zm0-4.99a.742.742,0,0,0,.743.74H8.772a.742.742,0,0,0,.743-.74.756.756,0,0,0-.743-.75H5.426A.756.756,0,0,0,4.684,8.65Zm8.964-3.091a2.018,2.018,0,0,1-2-2.017V.906a.473.473,0,0,1,.814-.334l3.986,4.187a.477.477,0,0,1-.34.806h-.691C14.793,5.567,14.149,5.564,13.648,5.559Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M15.309,7.021c-.452,0-1.05-.01-1.794-.01a3.336,3.336,0,0,1-3.309-3.336V.459A.456.456,0,0,0,9.753,0H4.464A4.489,4.489,0,0,0,0,4.509V15.284A4.692,4.692,0,0,0,4.67,20h7.877A4.476,4.476,0,0,0,17,15.5V7.471a.453.453,0,0,0-.453-.458c-.423,0-.93.008-1.239.008'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.821.147A.477.477,0,0,0,0,.481V3.118A2.026,2.026,0,0,0,2.017,5.134c.7.008,1.665.01,2.487.008a.477.477,0,0,0,.343-.808C3.792,3.237,1.9,1.271.821.147'
        transform='translate(11.763 0.42)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.744,6.484a.745.745,0,0,1,0-1.49H6.188a.745.745,0,0,1,0,1.49Zm0-5A.744.744,0,1,1,.744,0H4.129a.744.744,0,1,1,0,1.489Z'
        transform='translate(4.73 7.899)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.487,0H3.834A3.82,3.82,0,0,0,0,3.729V14.442a3.827,3.827,0,0,0,3.834,3.911h7.989a3.887,3.887,0,0,0,3.729-3.911V5.276Z'
        transform='translate(0.75 0.762)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V2.909A2.574,2.574,0,0,0,2.568,5.484c1.317,0,2.664,0,2.755,0'
        transform='translate(10.974 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.4.5H0'
        transform='translate(5.387 13.058)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.356.5H0'
        transform='translate(5.386 8.106)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M4.57,20A4.583,4.583,0,0,1,0,15.308V12.785a.752.752,0,0,1,.748-.755.752.752,0,0,1,.748.755v2.523A3.1,3.1,0,0,0,4.57,18.49h7.964a3.162,3.162,0,0,0,2.97-3.182V6.383L11.688,2.369V3.685A1.831,1.831,0,0,0,13.5,5.522a.755.755,0,0,1,0,1.51h0a3.337,3.337,0,0,1-3.307-3.348V1.522H4.57a3.078,3.078,0,0,0-3.074,3V8.681a.752.752,0,0,1-.748.755A.752.752,0,0,1,0,8.681V4.522A4.6,4.6,0,0,1,4.57.012h6.313C10.9.01,10.92,0,10.94,0s.037.01.057.012H11.2a.745.745,0,0,1,.54.233l5.049,5.312A.76.76,0,0,1,17,6.08v9.228A4.644,4.644,0,0,1,12.534,20Zm.8-5.594a.755.755,0,0,1,0-1.51h5.381a.755.755,0,0,1,0,1.51Zm0-4.986a.755.755,0,0,1,0-1.51H8.716a.755.755,0,0,1,0,1.51Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.487,0H3.834A3.82,3.82,0,0,0,0,3.729V14.442a3.827,3.827,0,0,0,3.834,3.911h7.989a3.887,3.887,0,0,0,3.729-3.911V5.276Z'
        transform='translate(0.75 0.762)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V2.909A2.574,2.574,0,0,0,2.568,5.484c1.317,0,2.664,0,2.755,0'
        transform='translate(10.974 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.4.5H0'
        transform='translate(5.387 13.058)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.356.5H0'
        transform='translate(5.386 8.106)'
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
    <g transform='translate(3.65 2.75)'>
      <path
        d='M5.4.5H0'
        transform='translate(5.255 12.2)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.356.5H0'
        transform='translate(5.255 8.189)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.51,5.55,10.84.15A18.2,18.2,0,0,0,8.39,0C2.1,0,0,2.32,0,9.25S2.1,18.5,8.39,18.5s8.4-2.31,8.4-9.25A21.045,21.045,0,0,0,16.51,5.55Z'
        transform='translate(0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V2.661A3.363,3.363,0,0,0,3.364,6.024H6.315'
        transform='translate(10.284 0.083)'
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
Paper.displayName = 'IconlyPaper'
Paper.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Paper)
