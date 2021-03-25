import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const PaperDownload = ({
  color,
  secondaryColor,
  strokeWidth,
  opacity,
  set
}) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M4.674,20A4.7,4.7,0,0,1,0,15.29V4.51A4.493,4.493,0,0,1,4.465,0H9.752a.464.464,0,0,1,.455.46V3.68a3.341,3.341,0,0,0,3.308,3.34c.418,0,.79,0,1.119.006.256,0,.48,0,.673,0,.141,0,.323,0,.521,0,.229,0,.486-.005.716-.005A.448.448,0,0,1,17,7.47v8.04A4.478,4.478,0,0,1,12.544,20Zm.109-9.29a.755.755,0,0,0,0,1.06l2.831,2.87a.78.78,0,0,0,.238.159.7.7,0,0,0,.287.06.644.644,0,0,0,.277-.06.78.78,0,0,0,.238-.159l2.841-2.87a.747.747,0,0,0-.01-1.06.729.729,0,0,0-1.04,0l-1.574,1.6V7.49a.734.734,0,0,0-.733-.75.747.747,0,0,0-.743.75v4.82l-1.574-1.6a.729.729,0,0,0-1.04,0Zm8.86-5.151a2.017,2.017,0,0,1-2-2.017V.906a.472.472,0,0,1,.813-.334l3.987,4.187a.477.477,0,0,1-.34.807H15.46C14.819,5.568,14.156,5.565,13.642,5.559Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M15.309,7.021c-.451,0-1.05-.01-1.794-.01a3.336,3.336,0,0,1-3.309-3.336V.459A.457.457,0,0,0,9.752,0H4.464A4.49,4.49,0,0,0,0,4.509V15.284A4.693,4.693,0,0,0,4.67,20h7.875A4.476,4.476,0,0,0,17,15.5V7.471a.454.454,0,0,0-.453-.458c-.423,0-.93.008-1.238.008'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.821.147A.477.477,0,0,0,0,.481V3.118A2.026,2.026,0,0,0,2.016,5.134c.7.008,1.666.01,2.488.008a.477.477,0,0,0,.343-.808C3.792,3.237,1.9,1.271.821.147'
        transform='translate(11.763 0.42)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7,3.973a.745.745,0,0,0-1.054,0l-1.589,1.6V.745a.745.745,0,1,0-1.49,0V5.572l-1.59-1.6A.745.745,0,0,0,.216,5.026L3.079,7.9h0a.745.745,0,0,0,.24.161.757.757,0,0,0,.287.057A.741.741,0,0,0,3.9,8.062.753.753,0,0,0,4.133,7.9h0L7,5.026A.744.744,0,0,0,7,3.973'
        transform='translate(4.61 6.736)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.486,0H3.834A3.82,3.82,0,0,0,0,3.729V14.466a3.806,3.806,0,0,0,3.834,3.887h7.988a3.867,3.867,0,0,0,3.73-3.887V5.276Z'
        transform='translate(0.75 0.762)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V2.909A2.575,2.575,0,0,0,2.569,5.484c1.316,0,2.663,0,2.754,0'
        transform='translate(10.974 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,6.573V0'
        transform='translate(7.641 7.441)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.838,2.851,5.677,0'
        transform='translate(5.302 11.163)'
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
        d='M4.57,20A4.57,4.57,0,0,1,0,15.332V12.809a.748.748,0,1,1,1.5,0v2.523A3.048,3.048,0,0,0,4.57,18.49h7.963A3.11,3.11,0,0,0,15.5,15.332V6.383L11.687,2.368V3.685A1.832,1.832,0,0,0,13.5,5.522a.755.755,0,0,1,0,1.51h0a3.338,3.338,0,0,1-3.308-3.348V1.522H4.57a3.078,3.078,0,0,0-3.074,3V8.7a.752.752,0,0,1-.748.755A.752.752,0,0,1,0,8.7V4.522A4.6,4.6,0,0,1,4.57.012h6.312C10.9.01,10.92,0,10.939,0s.038.01.058.012h.2a.745.745,0,0,1,.54.233l5.05,5.312A.76.76,0,0,1,17,6.08v9.251A4.631,4.631,0,0,1,12.533,20Zm3.256-5.194a.772.772,0,0,1-.24-.163L4.756,11.772a.761.761,0,0,1,0-1.067.743.743,0,0,1,1.058,0l1.552,1.574V7.492a.748.748,0,1,1,1.5,0V12.28l1.552-1.573a.742.742,0,0,1,1.057,0,.759.759,0,0,1,0,1.067L8.646,14.643h0a.742.742,0,0,1-.816.162Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.486,0H3.834A3.82,3.82,0,0,0,0,3.729V14.466a3.806,3.806,0,0,0,3.834,3.887h7.988a3.867,3.867,0,0,0,3.73-3.887V5.276Z'
        transform='translate(0.75 0.762)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V2.909A2.575,2.575,0,0,0,2.569,5.484c1.316,0,2.663,0,2.754,0'
        transform='translate(10.974 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,6.573V0'
        transform='translate(7.641 7.441)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        opacity={opacity}
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.838,2.851,5.677,0'
        transform='translate(5.302 11.163)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        opacity={opacity}
        strokeWidth={strokeWidth}
      />
    </g>
  )
  const Curved = () => (
    <g transform='translate(3.65 2.75)'>
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
      <path
        d='M.5,6.041V0'
        transform='translate(7.51 7.226)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.345,2.355,4.69,0'
        transform='translate(5.665 10.912)'
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
PaperDownload.displayName = 'IconlyPaperDownload'
PaperDownload.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(PaperDownload)
