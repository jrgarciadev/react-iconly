import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const EditSquare = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M15,20c-.11,0-.222,0-.332-.01H5.335C5.225,20,5.112,20,5,20a5.321,5.321,0,0,1-3.6-1.4A5.371,5.371,0,0,1,.01,14.665V5.335A5.372,5.372,0,0,1,1.4,1.4,5.328,5.328,0,0,1,5,0c.11,0,.221,0,.331.01h9.33c.109-.007.219-.01.328-.01a5.317,5.317,0,0,1,3.6,1.4,5.416,5.416,0,0,1,1.4,3.937v9.33A5.4,5.4,0,0,1,18.6,18.6,5.323,5.323,0,0,1,15,20ZM10.38,6.464a.214.214,0,0,0-.15.059L5.465,11.289a1.8,1.8,0,0,0-.529,1.238L4.875,14.9a.467.467,0,0,0,.13.339.478.478,0,0,0,.34.14H7.692a1.84,1.84,0,0,0,1.289-.53L15.7,8.1a1.586,1.586,0,0,0,0-2.227l-1.3-1.3a1.58,1.58,0,0,0-2.237,0l-.67.68a.265.265,0,0,0,0,.369c.016.016,1.589,1.579,1.618,1.619a.678.678,0,0,1,.18.459.66.66,0,0,1-.659.66.626.626,0,0,1-.44-.18L10.529,6.523A.212.212,0,0,0,10.38,6.464Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.664,19.99H5.335A5.343,5.343,0,0,1,1.4,18.6,5.346,5.346,0,0,1,.01,14.665V5.335A5.345,5.345,0,0,1,1.4,1.4,5.347,5.347,0,0,1,5.335.01h9.329A5.338,5.338,0,0,1,18.6,1.4,5.372,5.372,0,0,1,19.99,5.335v9.33A5.35,5.35,0,0,1,18.6,18.6a5.347,5.347,0,0,1-3.937,1.389'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M10.555,3.9,4,10.483A1.8,1.8,0,0,1,2.746,11H.458a.463.463,0,0,1-.331-.137A.457.457,0,0,1,0,10.532L.058,8.22A1.759,1.759,0,0,1,.574,7.01L5.219,2.356a.211.211,0,0,1,.292,0L7.14,3.979a.615.615,0,0,0,.428.176.643.643,0,0,0,.643-.644.661.661,0,0,0-.175-.449c-.029-.039-1.58-1.583-1.58-1.583a.26.26,0,0,1,0-.361L7.108.454a1.538,1.538,0,0,1,2.181,0l1.266,1.268a1.551,1.551,0,0,1,0,2.176'
        transform='translate(4.5 4.5)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M8.742,0H5C1.928,0,0,2.177,0,5.259v8.314c0,3.082,1.919,5.259,5,5.259h8.824c3.085,0,5-2.177,5-5.259V9.545'
        transform='translate(0.75 0.789)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.729,8.17,8.2.7a2.385,2.385,0,0,1,3.371,0L12.79,1.914a2.383,2.383,0,0,1,0,3.371L5.281,12.795a2.171,2.171,0,0,1-1.535.636H0l.094-3.78A2.17,2.17,0,0,1,.729,8.17Z'
        transform='translate(6.099 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,4.566,4.566'
        transform='translate(13.165 2.602)'
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
        d='M5.658,20C2.273,20,0,17.629,0,14.1a.738.738,0,0,1,1.476,0c0,2.69,1.641,4.427,4.182,4.427h8.678c2.543,0,4.185-1.737,4.185-4.427V10.146a.737.737,0,0,1,1.474,0V14.1c0,3.529-2.273,5.9-5.659,5.9ZM6,14.658A.739.739,0,0,1,5.26,13.9l.094-3.71a2.859,2.859,0,0,1,.84-1.957L13.543.9A3.086,3.086,0,0,1,17.9.9l1.2,1.2a3.072,3.072,0,0,1,0,4.351l-7.384,7.373a2.853,2.853,0,0,1-2.03.84Zm1.24-5.379a1.389,1.389,0,0,0-.41.952l-.073,2.954H9.683a1.39,1.39,0,0,0,.987-.408l7.385-7.372a1.606,1.606,0,0,0,0-2.268l-1.2-1.2a1.61,1.61,0,0,0-2.272,0l-.606.6,1.875,1.871a.738.738,0,0,1-1.044,1.042L12.938,3.587ZM0,9.707V5.938C0,2.409,2.274.038,5.658.038H9.336a.736.736,0,1,1,0,1.472H5.658c-2.541,0-4.182,1.738-4.182,4.428V9.707A.738.738,0,0,1,0,9.707Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M8.742,0H5C1.928,0,0,2.177,0,5.259v8.314c0,3.082,1.919,5.259,5,5.259h8.824c3.085,0,5-2.177,5-5.259V9.545'
        transform='translate(0.75 0.789)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.729,8.17,8.2.7a2.385,2.385,0,0,1,3.371,0L12.79,1.914a2.383,2.383,0,0,1,0,3.371L5.281,12.795a2.171,2.171,0,0,1-1.535.636H0l.094-3.78A2.17,2.17,0,0,1,.729,8.17Z'
        transform='translate(6.099 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,4.566,4.566'
        transform='translate(13.165 2.602)'
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
    <g transform='translate(2 2)'>
      <path
        d='M9.25,0C2.313,0,0,2.313,0,9.25S2.313,18.5,9.25,18.5s9.25-2.313,9.25-9.25'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.071.6h0A2.4,2.4,0,0,0,6.682.809S2.313,5.744.8,7.457s-.4,4.077-.4,4.077,2.5.793,4-.9l5.886-6.647A2.4,2.4,0,0,0,10.071.6Z'
        transform='translate(7.457 1.7)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,3.6,3.183'
        transform='translate(13.009 3.801)'
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
EditSquare.displayName = 'IconlyEditSquare'
EditSquare.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(EditSquare)
