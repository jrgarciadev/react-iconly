import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Scan = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(1 3)'>
      <path
        d='M14.6,18a.747.747,0,1,1,0-1.493h1.593a2.44,2.44,0,0,0,2.462-2.414v-3.56H16.032v.992a2.269,2.269,0,0,1-2.27,2.266H8.238a2.269,2.269,0,0,1-2.269-2.266v-.992H3.346V14.1A2.437,2.437,0,0,0,5.8,16.506H7.428a.747.747,0,1,1,0,1.493H5.8a3.946,3.946,0,0,1-3.974-3.9V10.534H.762a.746.746,0,1,1,0-1.492H21.239a.746.746,0,1,1,0,1.492H20.177v3.56A3.95,3.95,0,0,1,16.194,18ZM6.24,7.523a.278.278,0,0,1-.27-.269V6.008A2.268,2.268,0,0,1,8.239,3.743h5.524a2.26,2.26,0,0,1,2.27,2.265V7.254a.28.28,0,0,1-.273.269Zm12.415-1.76V3.906a2.44,2.44,0,0,0-2.461-2.413H14.6a.754.754,0,0,1-.761-.745A.755.755,0,0,1,14.6,0h1.593a3.948,3.948,0,0,1,3.983,3.906V5.763a.761.761,0,0,1-1.522,0Zm-16.831,0V3.9A3.945,3.945,0,0,1,5.8,0h1.63a.755.755,0,0,1,.761.747.753.753,0,0,1-.761.746H5.8A2.436,2.436,0,0,0,3.347,3.9V5.762a.762.762,0,0,1-1.524,0Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(1 3)'>
      <path
        d='M4.415,7.523a.279.279,0,0,1-.27-.269V6.008a2.269,2.269,0,0,1,2.27-2.265h5.523a2.26,2.26,0,0,1,2.271,2.265V7.254a.281.281,0,0,1-.274.269Zm12.416-1.76V3.906A2.44,2.44,0,0,0,14.37,1.493H12.777a.754.754,0,0,1-.761-.745A.755.755,0,0,1,12.777,0H14.37a3.948,3.948,0,0,1,3.983,3.906V5.763a.761.761,0,0,1-1.522,0ZM0,5.762V3.9A3.945,3.945,0,0,1,3.974,0H5.6a.754.754,0,0,1,.76.747.753.753,0,0,1-.76.746H3.975A2.436,2.436,0,0,0,1.523,3.9V5.762a.755.755,0,0,1-.761.747A.755.755,0,0,1,0,5.762Z'
        transform='translate(1.824 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M21.239,0H.762A.755.755,0,0,0,0,.747a.754.754,0,0,0,.762.745H1.823V5.056A3.946,3.946,0,0,0,5.8,8.958H7.427a.747.747,0,1,0,0-1.493H5.8A2.436,2.436,0,0,1,3.346,5.056V1.492H5.969v.991A2.269,2.269,0,0,0,8.238,4.75h5.524a2.269,2.269,0,0,0,2.27-2.266V1.492h2.623v3.56a2.44,2.44,0,0,1-2.461,2.413H14.6a.747.747,0,1,0,0,1.493h1.593a3.949,3.949,0,0,0,3.983-3.907V1.492h1.062A.753.753,0,0,0,22,.747.754.754,0,0,0,21.239,0'
        transform='translate(0 9.041)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(1.5 3.5)'>
      <path
        d='M21.132.524H0'
        transform='translate(0 8.991)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.969,5.278V3.325A3.335,3.335,0,0,0,1.644,0H0'
        transform='translate(14.281 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,5.278V3.321A3.32,3.32,0,0,1,3.317,0H5'
        transform='translate(1.882 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.969,0V4.531A3.335,3.335,0,0,1,1.644,7.856H0'
        transform='translate(14.281 9.514)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V4.535a3.32,3.32,0,0,0,3.317,3.32H5'
        transform='translate(1.882 9.514)'
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
    <g transform='translate(1 3)'>
      <path
        d='M14.6,18a.747.747,0,1,1,0-1.493h1.593a2.44,2.44,0,0,0,2.462-2.414V10.535H3.346V14.1A2.437,2.437,0,0,0,5.8,16.506H7.428a.747.747,0,1,1,0,1.493H5.8a3.947,3.947,0,0,1-3.975-3.9V10.535H.761a.747.747,0,1,1,0-1.493H21.239a.747.747,0,1,1,0,1.493H20.177v3.559A3.95,3.95,0,0,1,16.194,18ZM9.142,14.267a.747.747,0,1,1,0-1.493h3.717a.747.747,0,1,1,0,1.493Zm0-7.757a.747.747,0,1,1,0-1.494h3.717a.747.747,0,1,1,0,1.494ZM1.823,5.762V3.9A3.945,3.945,0,0,1,5.8,0h1.63a.755.755,0,0,1,.761.747.753.753,0,0,1-.761.746H5.8A2.436,2.436,0,0,0,3.347,3.9V5.762a.762.762,0,0,1-1.524,0Zm16.832,0V3.906a2.441,2.441,0,0,0-2.462-2.413H14.6a.753.753,0,0,1-.76-.746A.753.753,0,0,1,14.6,0h1.593a3.949,3.949,0,0,1,3.983,3.905V5.763a.761.761,0,0,1-1.522,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(1.5 3.5)'>
      <path
        d='M21.132.524H0'
        transform='translate(0 8.991)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.969,5.278V3.325A3.335,3.335,0,0,0,1.644,0H0'
        transform='translate(14.281 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,5.278V3.321A3.32,3.32,0,0,1,3.317,0H5'
        transform='translate(1.882 0)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M4.969,0V4.531A3.335,3.335,0,0,1,1.644,7.856H0'
        transform='translate(14.281 9.514)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0V4.535a3.32,3.32,0,0,0,3.317,3.32H5'
        transform='translate(1.882 9.514)'
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
    <g transform='translate(1.45 2.95)'>
      <path
        d='M21.132.5H0'
        transform='translate(0 9.35)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,5.77C.57,2.29,2.29.57,5.77,0'
        transform='translate(1.546 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.981,8.186C2.5,7.606.781,5.9.211,2.416v0A17.035,17.035,0,0,1,0,0'
        transform='translate(1.335 9.854)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.979,0a17.183,17.183,0,0,1-.21,2.42l0,0C5.2,5.9,3.48,7.606,0,8.186'
        transform='translate(13.816 9.854)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0C3.48.57,5.2,2.29,5.77,5.77'
        transform='translate(13.816 0)'
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
Scan.displayName = 'IconlyScan'
Scan.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Scan)
