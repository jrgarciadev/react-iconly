import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Image = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2.001)'>
      <path
        d='M16.167,12.379a2.279,2.279,0,0,0-1.674.44c-.482.281-1.4,1.024-1.923.834a11.932,11.932,0,0,1-6.313-6.16c-.193-.536.547-1.458.825-1.946a2.335,2.335,0,0,0,.436-1.685A13.7,13.7,0,0,0,5.189.615,1.912,1.912,0,0,0,4.021,0C2.52-.063.844,1.94.549,2.419-.187,3.441-.183,4.8.562,6.45c1.8,4.428,8.586,11.112,13.031,12.974A5.371,5.371,0,0,0,15.837,20a2.919,2.919,0,0,0,1.751-.549c.381-.219,2.466-1.979,2.411-3.521a1.941,1.941,0,0,0-.608-1.166,13.8,13.8,0,0,0-3.224-2.385'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2.5 2.5)'>
      <path
        d='M.49,2.373C.807,1.849,2.549-.056,3.793,0a1.636,1.636,0,0,1,.967.517,16.863,16.863,0,0,1,2.468,3.34C7.471,5.026,6.078,5.7,6.5,6.878a9.873,9.873,0,0,0,5.619,5.616c1.177.426,1.851-.966,3.019-.723a16.894,16.894,0,0,1,3.34,2.468,1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.665-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.145,4.525-.192,3.3.49,2.373Z'
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
        d='M13.1,19.41c-3.265-1.355-8.2-5.75-10.982-9.783a.749.749,0,1,1,1.235-.85c2.6,3.767,7.336,8.008,10.352,9.261,1.219.567,2.128.6,2.8.117.527-.319,2.024-1.805,2-2.579a.982.982,0,0,0-.29-.443,18.073,18.073,0,0,0-2.913-2.2c-.319-.068-.651.126-1.156.445l-.257.159a.75.75,0,1,1-.774-1.284l.231-.143a3.062,3.062,0,0,1,2.3-.633,15.579,15.579,0,0,1,3.636,2.611,2.3,2.3,0,0,1,.716,1.4c.065,1.842-2.4,3.767-2.686,3.929A3.138,3.138,0,0,1,15.435,20,5.59,5.59,0,0,1,13.1,19.41ZM9.982,12.353A10.4,10.4,0,0,1,6.391,7.727a2.428,2.428,0,0,1,.365-2.192c.226-.392.351-.625.3-.876A18.964,18.964,0,0,0,4.863,1.793.909.909,0,0,0,4.382,1.5C3.667,1.482,2.2,2.9,1.87,3.448c-.515.707-.479,1.615.074,2.829A.75.75,0,0,1,.58,6.9C-.208,5.171-.193,3.73.624,2.617.927,2.109,2.839-.1,4.479,0A2.305,2.305,0,0,1,5.91.718,15.6,15.6,0,0,1,8.524,4.352a2.645,2.645,0,0,1-.467,1.929c-.265.461-.357.658-.266.907a8.884,8.884,0,0,0,3.065,3.945.75.75,0,0,1-.873,1.22Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 2.5)'>
      <path
        d='M.49,2.373C.807,1.849,2.549-.056,3.793,0a1.636,1.636,0,0,1,.967.517,16.863,16.863,0,0,1,2.468,3.34C7.471,5.026,6.078,5.7,6.5,6.878a9.873,9.873,0,0,0,5.619,5.616c1.177.426,1.851-.966,3.019-.723a16.894,16.894,0,0,1,3.34,2.468,1.639,1.639,0,0,1,.517.967c.046,1.309-1.977,3.077-2.371,3.3-.93.665-2.144.654-3.624-.034C8.874,16.757,2.274,10.282.524,6-.145,4.525-.192,3.3.49,2.373Z'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0,1.469,2.179'
        transform='translate(1.883 1.294)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0,2.188,1.71'
        transform='translate(15.364 15.567)'
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
    <g transform='translate(2.5 2.5)'>
      <path
        d='M5.7,13.3C-1.2,6.4-.217,3.241.511,2.223.6,2.059,2.906-1.388,5.375.634,11.5,5.679,3.745,4.966,8.889,10.111s4.432-2.611,9.476,3.514c2.022,2.469-1.425,4.772-1.588,4.864C15.76,19.217,12.6,20.2,5.7,13.3Z'
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
      return <Bold />
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
Image.displayName = 'IconlyImage'
Image.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Image)
