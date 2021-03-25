import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Upload = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M4.45,20.78A4.489,4.489,0,0,1,0,16.465l0-.213V11.288a4.485,4.485,0,0,1,4.231-4.5l.209,0H9.23v6.1a.769.769,0,0,0,1.533.107l.007-.107v-6.1h4.78A4.489,4.489,0,0,1,20,11.094l0,.213v4.955a4.487,4.487,0,0,1-4.231,4.513l-.209,0Zm4.781-14V2.64L7.64,4.24a.773.773,0,0,1-1.09,0,.763.763,0,0,1-.085-1L6.54,3.15,9.45.23A.764.764,0,0,1,10,0a.754.754,0,0,1,.45.149l.09.082,2.911,2.92a.771.771,0,0,1-1,1.165l-.085-.075-1.59-1.6V6.78Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M0,4.447A4.492,4.492,0,0,1,4.525,0H9.486A4.481,4.481,0,0,1,14,4.437V15.553A4.492,4.492,0,0,1,9.474,20H4.515A4.481,4.481,0,0,1,0,15.563V4.447Z'
        transform='translate(0 20) rotate(-90)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M12.98,3.134,10.135.225a.736.736,0,0,0-1.061,0,.785.785,0,0,0,0,1.089l1.559,1.593H.75a.77.77,0,0,0,0,1.54h9.885L9.076,6.042a.785.785,0,0,0,0,1.089.735.735,0,0,0,1.061,0L12.98,4.225a.784.784,0,0,0,0-1.091'
        transform='translate(6.321 13.201) rotate(-90)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 22) rotate(-90)'>
      <path
        d='M12.244,4.618V3.685A3.685,3.685,0,0,0,8.559,0H3.684A3.685,3.685,0,0,0,0,3.685v11.13A3.685,3.685,0,0,0,3.684,18.5H8.569a3.675,3.675,0,0,0,3.675-3.674v-.943'
        transform='translate(0.772 0.771)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.041.5H0'
        transform='translate(7.768 9.521)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.915,0,5.831'
        transform='translate(16.881 7.106)'
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
        d='M14.045,19.25a.74.74,0,0,1,.731-.75,2.8,2.8,0,0,0,2.761-2.831V10.923A2.789,2.789,0,0,0,14.785,8.1h-.894a.75.75,0,0,1,0-1.5h.894A4.274,4.274,0,0,1,19,10.923V15.67A4.284,4.284,0,0,1,14.775,20,.74.74,0,0,1,14.045,19.25ZM4.215,20A4.273,4.273,0,0,1,0,15.679V10.932A4.284,4.284,0,0,1,4.225,6.6h.885a.75.75,0,0,1,0,1.5H4.225a2.8,2.8,0,0,0-2.761,2.831v4.747A2.79,2.79,0,0,0,4.215,18.5h7.234a.75.75,0,0,1,0,1.5Zm4.553-7.549V.75A.75.75,0,0,1,9.22.057a.721.721,0,0,1,.8.164l2.764,2.846a.763.763,0,0,1,0,1.06.719.719,0,0,1-1.035,0L10.232,2.566v9.885a.732.732,0,1,1-1.464,0ZM6.223,4.128a.76.76,0,0,1-.005-1.06l.691-.716a.719.719,0,0,1,1.035-.006.763.763,0,0,1,.005,1.06l-.692.718a.718.718,0,0,1-1.034,0Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 22) rotate(-90)'>
      <path
        d='M12.244,4.618V3.685A3.685,3.685,0,0,0,8.559,0H3.684A3.685,3.685,0,0,0,0,3.685v11.13A3.685,3.685,0,0,0,3.684,18.5H8.569a3.675,3.675,0,0,0,3.675-3.674v-.943'
        transform='translate(0.772 0.771)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M12.041.5H0'
        transform='translate(7.768 9.521)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.915,0,5.831'
        transform='translate(16.881 7.106)'
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
    <g transform='translate(2 22) rotate(-90)'>
      <path
        d='M12.041.5H0'
        transform='translate(7.75 9.621)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,2.928,2.916,0,5.832'
        transform='translate(16.864 7.205)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.88C-.33,1.3-1.67,0-7,0c-7.1,0-7.1,2.31-7.1,9.25s0,9.25,7.1,9.25c5.33,0,6.67-1.3,7-4.88'
        transform='translate(14.36 0.75)'
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
Upload.displayName = 'IconlyUpload'
Upload.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Upload)
