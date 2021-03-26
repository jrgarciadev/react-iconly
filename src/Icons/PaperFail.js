import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const PaperFail = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M4.674,20A4.7,4.7,0,0,1,0,15.29V4.51A4.493,4.493,0,0,1,4.465,0H9.752a.464.464,0,0,1,.455.46V3.68a3.341,3.341,0,0,0,3.308,3.34c.418,0,.79,0,1.119.006.256,0,.48,0,.673,0,.142,0,.328,0,.528,0,.239,0,.485-.005.709-.005A.448.448,0,0,1,17,7.47v8.04A4.478,4.478,0,0,1,12.544,20ZM8.3,12.041,9.5,13.26a.735.735,0,0,0,1.049,0,.749.749,0,0,0,0-1.049L9.347,10.99l1.208-1.22a.75.75,0,0,0,0-1.05.724.724,0,0,0-1.049,0L8.3,9.94,7.089,8.72a.713.713,0,0,0-1.04,0,.75.75,0,0,0,0,1.05l1.208,1.22L6.05,12.21a.749.749,0,0,0,0,1.049.691.691,0,0,0,.515.22.711.711,0,0,0,.525-.22L8.3,12.041h0Zm5.345-6.482a2.017,2.017,0,0,1-2-2.017V.906a.472.472,0,0,1,.813-.334C13.531,1.7,15.4,3.661,16.447,4.759a.477.477,0,0,1-.341.807h-.645C14.82,5.568,14.157,5.565,13.643,5.559Z'
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
        d='M.821.147A.477.477,0,0,0,0,.481V3.118A2.026,2.026,0,0,0,2.017,5.134c.7.008,1.665.01,2.487.008a.477.477,0,0,0,.343-.808C3.792,3.237,1.9,1.271.821.147'
        transform='translate(11.763 0.42)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M3.546,2.492,4.767,1.27A.744.744,0,0,0,3.714.218L2.493,1.438,1.272.218A.745.745,0,0,0,.218,1.27L1.44,2.492.218,3.713A.745.745,0,1,0,1.272,4.765l1.221-1.22,1.221,1.22A.744.744,0,0,0,4.767,3.713Z'
        transform='translate(5.889 8.493)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.487,0H3.729A3.729,3.729,0,0,0,0,3.729V14.578a3.8,3.8,0,0,0,3.94,3.775h7.883a3.768,3.768,0,0,0,3.729-3.775v-9.3Z'
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
        d='M3.466,3.466,0,0'
        transform='translate(6.61 9.182)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.466,3.466,0'
        transform='translate(6.611 9.182)'
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
        d='M4.675,20A4.568,4.568,0,0,1,0,15.443V12.92a.752.752,0,0,1,.748-.755.752.752,0,0,1,.748.755v2.523A3.046,3.046,0,0,0,4.675,18.49h7.859A3.013,3.013,0,0,0,15.5,15.443V6.383L11.687,2.369V3.686A1.831,1.831,0,0,0,13.5,5.522a.755.755,0,0,1,0,1.509h0a3.336,3.336,0,0,1-3.308-3.346V1.522H4.464a2.988,2.988,0,0,0-2.968,3V8.816a.752.752,0,0,1-.748.755A.752.752,0,0,1,0,8.816V4.522A4.492,4.492,0,0,1,4.464.012h6.419C10.9.01,10.92,0,10.939,0s.038.01.058.012h.2a.745.745,0,0,1,.54.233l5.05,5.312A.756.756,0,0,1,17,6.08v9.364A4.518,4.518,0,0,1,12.533,20Zm4.843-6.733-1.2-1.21-1.2,1.21a.743.743,0,0,1-1.058,0,.762.762,0,0,1,0-1.068l1.2-1.21-1.2-1.211a.761.761,0,0,1,0-1.067.745.745,0,0,1,1.058,0l1.2,1.211,1.2-1.211a.743.743,0,0,1,1.057,0,.759.759,0,0,1,0,1.067l-1.2,1.211,1.2,1.21a.76.76,0,0,1,0,1.068.741.741,0,0,1-1.057,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M10.487,0H3.729A3.729,3.729,0,0,0,0,3.729V14.578a3.8,3.8,0,0,0,3.94,3.775h7.883a3.768,3.768,0,0,0,3.729-3.775v-9.3Z'
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
        d='M1.733,1.733,0,3.466,1.733,1.733,0,0,1.733,1.733,3.466,0,1.733,1.733,3.466,3.466Z'
        transform='translate(6.61 9.182)'
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
        d='M3.466,3.466,0,0'
        transform='translate(6.479 8.498)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,3.466,3.466,0'
        transform='translate(6.48 8.498)'
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
PaperFail.displayName = 'IconlyPaperFail'
PaperFail.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(PaperFail)
