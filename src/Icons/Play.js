import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Play = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20a10,10,0,1,1,10-9.994A10.008,10.008,0,0,1,10,20ZM8.861,6.03a1.338,1.338,0,0,0-.608.145,1.252,1.252,0,0,0-.541.6,6.314,6.314,0,0,0-.174.7A15.391,15.391,0,0,0,7.375,10a17.717,17.717,0,0,0,.145,2.441,1.1,1.1,0,0,1,.024.11,3.911,3.911,0,0,0,.207.768,1.21,1.21,0,0,0,1.072.656h.039a3.188,3.188,0,0,0,.9-.27,14.727,14.727,0,0,0,3.851-2.624l.058-.058a3.94,3.94,0,0,0,.27-.309,1.161,1.161,0,0,0,.231-.7,1.217,1.217,0,0,0-.251-.754l-.063-.068c-.064-.07-.162-.176-.254-.269A14.777,14.777,0,0,0,9.662,6.251,3.356,3.356,0,0,0,8.861,6.03Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M20,10A10,10,0,1,1,10,0,10.012,10.012,0,0,1,20,10'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7,4a1.153,1.153,0,0,1-.239.71,3.861,3.861,0,0,1-.278.311l-.06.058A15.152,15.152,0,0,1,2.456,7.728,3.475,3.475,0,0,1,1.531,8h-.04a1.254,1.254,0,0,1-1.1-.66,5.462,5.462,0,0,1-.239-.885A17.629,17.629,0,0,1,0,4,15.213,15.213,0,0,1,.169,1.458,6.381,6.381,0,0,1,.348.748,1.275,1.275,0,0,1,.9.146,1.422,1.422,0,0,1,1.531,0a3.443,3.443,0,0,1,.825.224A15.224,15.224,0,0,1,6.413,2.906c.139.136.288.3.328.34A1.21,1.21,0,0,1,7,4'
        transform='translate(7 6)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.16,3.969A14.915,14.915,0,0,1,1.432,6.512a3.983,3.983,0,0,1-.664.214.5.5,0,0,1-.459-.27,5.24,5.24,0,0,1-.166-.689A16.6,16.6,0,0,1,0,3.364,15.624,15.624,0,0,1,.158.879C.186.723.268.364.292.306A.5.5,0,0,1,.518.06.494.494,0,0,1,.768,0a3.49,3.49,0,0,1,.575.178A14.782,14.782,0,0,1,5.15,2.746c.068.073.255.269.286.309a.5.5,0,0,1,.011.6C5.414,3.7,5.223,3.9,5.16,3.969Z'
        transform='translate(7.89 6.498)'
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
        d='M5.987,19.162a.724.724,0,1,1,.582-1.325,8.558,8.558,0,1,0-3.447-2.753.724.724,0,0,1-1.164.861,9.982,9.982,0,1,1,4.028,3.217ZM8.82,13.969a1.213,1.213,0,0,1-1.067-.651,4.442,4.442,0,0,1-.229-.868l0-.014A16.433,16.433,0,0,1,7.375,10a15.607,15.607,0,0,1,.163-2.526,5.615,5.615,0,0,1,.176-.707,1.2,1.2,0,0,1,.536-.591,1.273,1.273,0,0,1,.6-.145h.018a3.176,3.176,0,0,1,.8.223A14.714,14.714,0,0,1,13.6,8.909l.079.085c.09.095.21.224.238.259a1.218,1.218,0,0,1,.257.747,1.2,1.2,0,0,1-.23.708c-.036.049-.191.219-.284.318l-.049.052A15.033,15.033,0,0,1,9.76,13.707a3.712,3.712,0,0,1-.9.262Zm.141-6.236A14.873,14.873,0,0,0,8.822,10a15.235,15.235,0,0,0,.129,2.2c.011.066.03.161.05.248l.117-.045.006,0,.076-.03a13.772,13.772,0,0,0,3.347-2.281.449.449,0,0,0,.058-.059l.005-.005A.226.226,0,0,1,12.635,10l-.007-.007-.007-.007L12.537,9.9A13.736,13.736,0,0,0,9.131,7.6L9,7.55C8.98,7.636,8.969,7.694,8.961,7.733Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.16,3.969A14.915,14.915,0,0,1,1.432,6.512a3.983,3.983,0,0,1-.664.214.5.5,0,0,1-.459-.27,5.24,5.24,0,0,1-.166-.689A16.6,16.6,0,0,1,0,3.364,15.624,15.624,0,0,1,.158.879C.186.723.268.364.292.306A.5.5,0,0,1,.518.06.494.494,0,0,1,.768,0a3.49,3.49,0,0,1,.575.178A14.782,14.782,0,0,1,5.15,2.746c.068.073.255.269.286.309a.5.5,0,0,1,.011.6C5.414,3.7,5.223,3.9,5.16,3.969Z'
        transform='translate(7.89 6.498)'
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
        d='M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.513,3.338c0-.9-4.584-3.8-5.1-3.276s-.57,5.983,0,6.552S5.513,4.242,5.513,3.338Z'
        transform='translate(7.903 6.517)'
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
Play.displayName = 'IconlyPlay'
Play.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Play)
