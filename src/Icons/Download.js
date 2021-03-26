import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Download = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M9.23,4.791V.782a.769.769,0,0,1,1.533-.1l.007.1V4.791h4.78A4.527,4.527,0,0,1,20,9.17l0,.216v5.039A4.53,4.53,0,0,1,15.768,19l-.208,0H4.44A4.511,4.511,0,0,1,0,14.621L0,14.4V9.376A4.532,4.532,0,0,1,4.222,4.8l.208-.005h4.8v6.4L7.63,9.541a.755.755,0,0,0-1.09,0,.835.835,0,0,0-.08,1.027l.08.1,2.91,3.015a.746.746,0,0,0,1.015.071l.075-.071,2.91-3.015a.816.816,0,0,0,0-1.126.755.755,0,0,0-1-.077l-.086.077-1.59,1.652v-6.4Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2.5)'>
      <path
        d='M0,4.446A4.526,4.526,0,0,1,4.591,0H9.624A4.515,4.515,0,0,1,14.2,4.436V15.552A4.526,4.526,0,0,1,9.613,20H4.581A4.517,4.517,0,0,1,0,15.562V4.446Z'
        transform='translate(20 4.796) rotate(90)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M13.537,3.134,10.569.225a.79.79,0,0,0-1.106,0,.762.762,0,0,0,0,1.089l1.625,1.593H.782a.77.77,0,1,0,0,1.54H11.091L9.465,6.043a.762.762,0,0,0,0,1.089.79.79,0,0,0,1.106,0l2.968-2.909a.761.761,0,0,0,0-1.091'
        transform='translate(13.68 0) rotate(90)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 3)'>
      <path
        d='M12.041.5H0'
        transform='translate(10.622 0.395) rotate(90)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(13.038 9.508) rotate(90)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.617V3.684A3.684,3.684,0,0,1,3.685,0H8.569a3.675,3.675,0,0,1,3.675,3.675v11.14A3.685,3.685,0,0,1,8.559,18.5H3.674A3.675,3.675,0,0,1,0,14.825v-.942'
        transform='translate(19.372 5.128) rotate(90)'
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
        d='M7.949,19a.8.8,0,0,1,0-1.6h7.614a2.958,2.958,0,0,0,2.9-3.01V9.32A2.969,2.969,0,0,0,15.553,6.3h-.931a.8.8,0,0,1,0-1.6h.931A4.542,4.542,0,0,1,20,9.32v5.067A4.533,4.533,0,0,1,15.563,19ZM0,14.377V9.31A4.532,4.532,0,0,1,4.437,4.7h.94a.8.8,0,0,1,0,1.6h-.94a2.96,2.96,0,0,0-2.9,3.01v5.067A2.969,2.969,0,0,0,4.447,17.4a.8.8,0,0,1,0,1.6A4.543,4.543,0,0,1,0,14.377Zm9.454-1.114L6.546,10.354a.765.765,0,0,1,0-1.084.774.774,0,0,1,1.089,0l1.593,1.592V.766a.771.771,0,0,1,1.542,0V12.722a.77.77,0,0,1-.77.766A.778.778,0,0,1,9.454,13.262Zm2.187-2.172a.754.754,0,0,1-.229-.544.763.763,0,0,1,.223-.54l.727-.732a.773.773,0,0,1,1.089-.006.763.763,0,0,1,.005,1.084l-.728.734a.77.77,0,0,1-1.087,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M12.041.5H0'
        transform='translate(10.622 0.395) rotate(90)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(13.038 9.508) rotate(90)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.617V3.684A3.684,3.684,0,0,1,3.685,0H8.569a3.675,3.675,0,0,1,3.675,3.675v11.14A3.685,3.685,0,0,1,8.559,18.5H3.674A3.675,3.675,0,0,1,0,14.825v-.942'
        transform='translate(19.372 5.128) rotate(90)'
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
        d='M.5,12.041V0'
        transform='translate(9.379 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.832,0,2.916,2.928,0,0'
        transform='translate(6.963 9.864)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.62,0C17.2.33,18.5,1.67,18.5,7c0,7.1-2.311,7.1-9.25,7.1S0,14.1,0,7C0,1.67,1.3.33,4.88,0'
        transform='translate(0.75 5.259)'
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
Download.displayName = 'IconlyDownload'
Download.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Download)
