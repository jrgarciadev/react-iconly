import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Login = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M9.376,20a4.522,4.522,0,0,1-4.586-4.43v-4.8H.781a.77.77,0,1,1,0-1.541H4.791V4.45A4.534,4.534,0,0,1,9.386,0h5.039A4.521,4.521,0,0,1,19,4.44V15.56A4.519,4.519,0,0,1,14.4,20Zm1.817-9.229-1.652,1.6a.757.757,0,0,0,0,1.091.831.831,0,0,0,1.126,0l3.015-2.911a.744.744,0,0,0,0-1.09L10.667,6.55a.816.816,0,0,0-1.126,0,.756.756,0,0,0,0,1.09l1.652,1.59h-6.4v1.54Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M0,4.446A4.526,4.526,0,0,1,4.591,0H9.624A4.515,4.515,0,0,1,14.2,4.436V15.552A4.526,4.526,0,0,1,9.613,20H4.581A4.517,4.517,0,0,1,0,15.562V4.446Z'
        transform='translate(4.796)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M13.537,3.134,10.569.225a.79.79,0,0,0-1.106,0,.762.762,0,0,0,0,1.089l1.625,1.593H.782a.77.77,0,1,0,0,1.54H11.091L9.465,6.043a.762.762,0,0,0,0,1.089.79.79,0,0,0,1.106,0l2.968-2.909a.761.761,0,0,0,0-1.091'
        transform='translate(0 6.32)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 2)'>
      <path
        d='M12.041.5H0'
        transform='translate(0.771 9.522)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(9.885 7.106)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.617V3.684A3.684,3.684,0,0,1,3.685,0H8.569a3.675,3.675,0,0,1,3.675,3.675v11.14A3.685,3.685,0,0,1,8.559,18.5H3.674A3.675,3.675,0,0,1,0,14.825v-.942'
        transform='translate(5.504 0.772)'
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
    <g transform='translate(2.5 2)'>
      <path
        d='M9.31,20A4.532,4.532,0,0,1,4.7,15.563v-.941a.8.8,0,0,1,1.6,0v.941a2.96,2.96,0,0,0,3.01,2.9h5.067A2.969,2.969,0,0,0,17.4,15.553a.8.8,0,0,1,1.6,0A4.543,4.543,0,0,1,14.377,20Zm-.039-6.547a.774.774,0,0,1,0-1.089l1.592-1.593H.766a.77.77,0,0,1,0-1.541H12.722a.766.766,0,0,1,.708.477.774.774,0,0,1-.167.84l-2.908,2.908a.765.765,0,0,1-1.084,0Zm8.127-1.4V4.437a2.959,2.959,0,0,0-3.01-2.9H9.32A2.969,2.969,0,0,0,6.3,4.447v.931a.8.8,0,0,1-1.6,0V4.447A4.543,4.543,0,0,1,9.32,0h5.067A4.533,4.533,0,0,1,19,4.437v7.614a.8.8,0,0,1-1.6,0ZM10.007,8.366l-.732-.726A.773.773,0,0,1,9.269,6.55a.763.763,0,0,1,1.084-.006l.734.728a.771.771,0,0,1,0,1.088.753.753,0,0,1-.544.229A.763.763,0,0,1,10.007,8.366Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 2)'>
      <path
        d='M12.041.5H0'
        transform='translate(0.771 9.522)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(9.885 7.106)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.617V3.684A3.684,3.684,0,0,1,3.685,0H8.569a3.675,3.675,0,0,1,3.675,3.675v11.14A3.685,3.685,0,0,1,8.559,18.5H3.674A3.675,3.675,0,0,1,0,14.825v-.942'
        transform='translate(5.504 0.772)'
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
        d='M12.041.5H0'
        transform='translate(0.75 9.621)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(9.864 7.205)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.88C.33,1.3,1.67,0,7,0c7.1,0,7.1,2.31,7.1,9.25s0,9.25-7.1,9.25c-5.33,0-6.67-1.3-7-4.88'
        transform='translate(5.259 0.75)'
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
Login.displayName = 'IconlyLogin'
Login.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Login)
