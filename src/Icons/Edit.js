import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Edit = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 3)'>
      <path
        d='M11.28,18a1.023,1.023,0,0,1,0-2.047h5.71a1.023,1.023,0,0,1,0,2.047ZM.848,17.576l-.8-3.451a2.132,2.132,0,0,1,.4-1.8L6.684,4.268a.313.313,0,0,1,.424-.054L9.73,6.3a.846.846,0,0,0,.647.183.945.945,0,0,0,.817-1.043,1.053,1.053,0,0,0-.329-.635L8.319,2.763a.378.378,0,0,1-.064-.526L9.241.957A2.584,2.584,0,0,1,13.03.7l1.475,1.172a3.062,3.062,0,0,1,1.146,1.752,2.4,2.4,0,0,1-.488,2.042L6.377,17.028a2.105,2.105,0,0,1-1.634.817l-3.5.042A.4.4,0,0,1,.848,17.576Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 3)'>
      <path
        d='M6.7,0H1.007A1.017,1.017,0,0,0,0,1.023,1.016,1.016,0,0,0,1.007,2.047H6.7A1.016,1.016,0,0,0,7.709,1.023,1.017,1.017,0,0,0,6.7,0'
        transform='translate(10.291 15.953)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7.309.067l5.4,4.36a.31.31,0,0,1,.051.429l-6.4,8.335a2.1,2.1,0,0,1-1.63.817l-3.492.043a.4.4,0,0,1-.392-.312L.052,10.289a2.137,2.137,0,0,1,.4-1.8L6.883.118A.3.3,0,0,1,7.309.067'
        transform='translate(0 3.837)'
        fill={color}
      />
      <path
        d='M6.977,5.665l-1.04,1.3a.3.3,0,0,1-.423.048c-1.265-1.023-4.5-3.65-5.4-4.377A.308.308,0,0,1,.069,2.2l1-1.246A2.572,2.572,0,0,1,4.85.7L6.321,1.871A3.066,3.066,0,0,1,7.464,3.623a2.406,2.406,0,0,1-.487,2.042'
        transform='translate(8.144 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 3.5)'>
      <path
        d='M0,.5H6.377'
        transform='translate(10.2 15.898)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.6.706A1.947,1.947,0,0,1,11.473.553l1.39,1.09A1.946,1.946,0,0,1,13.4,4.464L5.11,15.039a1.481,1.481,0,0,1-1.15.568l-3.2.041L.039,12.533a1.486,1.486,0,0,1,.277-1.252Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,4.794,3.758'
        transform='translate(7.803 3.436)'
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
    <g transform='translate(3 3)'>
      <path
        d='M10.6,18a.788.788,0,0,1,0-1.575h6.624a.788.788,0,0,1,0,1.575ZM1.572,18a.782.782,0,0,1-.76-.609l-.752-3.27A2.355,2.355,0,0,1,.5,12.142l1.13-1.458a.772.772,0,0,1,1.094-.133.792.792,0,0,1,.131,1.105l-1.13,1.458a.773.773,0,0,0-.142.651l.61,2.652,2.7-.034a.755.755,0,0,0,.59-.3l8.61-11.1a1.063,1.063,0,0,0,.228-.907,1.732,1.732,0,0,0-.652-.949L12.218,1.983a1.256,1.256,0,0,0-1.886.028L9.194,3.477,11,4.94a.792.792,0,0,1,.121,1.106.771.771,0,0,1-1.1.122L8.233,4.717l-2.946,3.8a.773.773,0,0,1-1.1.133.8.8,0,0,1-.131-1.106L9.105,1.039a2.779,2.779,0,0,1,4.073-.3l1.444,1.145A3.3,3.3,0,0,1,15.835,3.74a2.65,2.65,0,0,1-.523,2.214L6.7,17.059a2.3,2.3,0,0,1-1.8.9L1.582,18Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 3.5)'>
      <path
        d='M0,.5H6.377'
        transform='translate(10.2 15.898)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M8.6.706A1.947,1.947,0,0,1,11.473.553l1.39,1.09A1.946,1.946,0,0,1,13.4,4.464L5.11,15.039a1.481,1.481,0,0,1-1.15.568l-3.2.041L.039,12.533a1.486,1.486,0,0,1,.277-1.252Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,4.794,3.758'
        transform='translate(7.803 3.436)'
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
    <g transform='translate(3.5 3.5)'>
      <path
        d='M0,.5H6.377'
        transform='translate(9.835 15.508)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.808.609h0a3.042,3.042,0,0,0-4.258.607l-6.752,9C-.941,12.529.7,15.4.7,15.4s3.244.746,4.958-1.539l6.752-8.995A3.042,3.042,0,0,0,11.808.609Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,4.864,3.651'
        transform='translate(7.004 3.711)'
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
Edit.displayName = 'IconlyEdit'
Edit.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Edit)
