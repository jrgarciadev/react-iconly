import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const PaperNegative = ({
  color,
  secondaryColor,
  strokeWidth,
  opacity,
  set
}) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M4.674,20A4.7,4.7,0,0,1,0,15.29V4.51A4.493,4.493,0,0,1,4.465,0H9.752a.458.458,0,0,1,.455.46V3.68a3.341,3.341,0,0,0,3.308,3.34c.423,0,.794,0,1.122.006.257,0,.481,0,.68,0,.141,0,.323,0,.521,0,.229,0,.486-.005.716-.005A.448.448,0,0,1,17,7.47v8.04A4.478,4.478,0,0,1,12.544,20Zm.455-9.01a.742.742,0,0,0,.742.74h4.891a.745.745,0,0,0,0-1.49H5.872A.747.747,0,0,0,5.129,10.99Zm8.518-5.431a2.017,2.017,0,0,1-2-2.017V.906a.472.472,0,0,1,.814-.334l3.986,4.187a.477.477,0,0,1-.339.807h-.645C14.824,5.568,14.161,5.565,13.647,5.559Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M15.309,7.021c-.451,0-1.05-.01-1.794-.01a3.336,3.336,0,0,1-3.309-3.336V.459A.457.457,0,0,0,9.752,0H4.463A4.49,4.49,0,0,0,0,4.509V15.284A4.693,4.693,0,0,0,4.67,20h7.875A4.476,4.476,0,0,0,17,15.5V7.471a.454.454,0,0,0-.453-.458c-.423,0-.93.008-1.238.008'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.821.147A.477.477,0,0,0,0,.481V3.118A2.026,2.026,0,0,0,2.017,5.134c.7.008,1.665.01,2.488.008a.477.477,0,0,0,.342-.808C3.792,3.237,1.9,1.271.821.147'
        transform='translate(11.763 0.42)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M5.688,1.489H.745A.745.745,0,1,1,.745,0H5.688a.745.745,0,1,1,0,1.489'
        transform='translate(5.179 11.08)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.486,0H3.834A3.819,3.819,0,0,0,0,3.729V14.578a3.713,3.713,0,0,0,3.834,3.775h7.988a3.769,3.769,0,0,0,3.73-3.775v-9.3Z'
        transform='translate(0.751 0.762)'
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
        d='M4.9.5H0'
        transform='translate(5.893 11.247)'
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
        d='M4.57,20A4.463,4.463,0,0,1,0,15.443V12.92a.752.752,0,0,1,.748-.755.752.752,0,0,1,.748.755v2.523A2.96,2.96,0,0,0,4.57,18.49h7.963A3.013,3.013,0,0,0,15.5,15.443V6.383L11.687,2.369V3.686A1.831,1.831,0,0,0,13.5,5.522a.755.755,0,0,1,0,1.509h0a3.336,3.336,0,0,1-3.308-3.346V1.522H4.57a3.078,3.078,0,0,0-3.074,3V8.816a.752.752,0,0,1-.748.755A.752.752,0,0,1,0,8.816V4.522A4.6,4.6,0,0,1,4.57.012h6.312c.02,0,.037-.012.058-.012s.038.01.058.012h.2a.745.745,0,0,1,.54.233l5.05,5.312A.756.756,0,0,1,17,6.08v9.364A4.518,4.518,0,0,1,12.533,20Zm1.305-7.418a.755.755,0,0,1,0-1.51h4.886a.755.755,0,0,1,0,1.51Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.486,0H3.834A3.819,3.819,0,0,0,0,3.729V14.578a3.713,3.713,0,0,0,3.834,3.775h7.988a3.769,3.769,0,0,0,3.73-3.775v-9.3Z'
        transform='translate(0.751 0.762)'
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
        d='M4.9.5H0'
        transform='translate(5.893 11.247)'
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
        d='M4.9.5H0'
        transform='translate(5.762 9.731)'
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
PaperNegative.displayName = 'IconlyPaperNegative'
PaperNegative.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(PaperNegative)
