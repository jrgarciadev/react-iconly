import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Image2 = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(1.999 2)'>
      <path
        d='M5.638,20a6.641,6.641,0,0,1-1.082-.094L4.524,19.9a5.232,5.232,0,0,1-3.268-1.872c-.005,0-.007,0-.011-.009a.053.053,0,0,0-.007-.01A6.2,6.2,0,0,1,0,14.1V5.888C0,2.366,2.265,0,5.638,0h8.717C17.731,0,20,2.366,20,5.888V14.1a2.3,2.3,0,0,1-.019.256c-.006.058-.013.116-.016.176,0,.034,0,.068,0,.1,0,.05,0,.1-.007.153a.537.537,0,0,1-.009.055.393.393,0,0,0-.01.057,6.709,6.709,0,0,1-.155.9c-.014.059-.03.119-.045.175l-.015.054a6.059,6.059,0,0,1-.287.807c-.021.047-.043.092-.066.138-.014.026-.025.05-.037.075a5.376,5.376,0,0,1-.407.7c-.031.043-.062.084-.094.122l-.055.07a4.914,4.914,0,0,1-.513.581c-.037.035-.076.067-.115.1s-.053.042-.078.065a5.246,5.246,0,0,1-.608.461c-.047.029-.1.054-.146.078-.033.016-.066.032-.1.05a5.223,5.223,0,0,1-.687.333,1.848,1.848,0,0,1-.186.055c-.042.012-.086.023-.129.036l-.076.023a5.194,5.194,0,0,1-.657.172,3.755,3.755,0,0,1-.42.041l-.188.014c-.068,0-.135.014-.2.021a2.608,2.608,0,0,1-.32.026ZM1.4,5.888V14.1a5.328,5.328,0,0,0,.385,2.038l.358-.436c.563-.687,1.611-1.963,1.619-1.971A3.616,3.616,0,0,1,6.4,12.259a2.71,2.71,0,0,1,1.05.22,6.455,6.455,0,0,1,1.01.561l.09.058a2.329,2.329,0,0,0,1.186.537c.024,0,.049,0,.074,0a1.04,1.04,0,0,0,.41-.143,13.5,13.5,0,0,0,2.123-2.619c.057-.081.094-.134.107-.15a3.345,3.345,0,0,1,2.619-1.4,2.983,2.983,0,0,1,1.551.441c.194.116,1.535,1.052,1.981,1.431v-5.3c0-2.73-1.669-4.493-4.251-4.493H5.638C3.061,1.395,1.4,3.158,1.4,5.888ZM4.06,6.993A2.4,2.4,0,0,1,4,6.468a2.5,2.5,0,0,1,5,.046,2.495,2.495,0,0,1-4.941.479Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M19.208,3.41V4.794c0,.23-.01.461-.03.691a5.407,5.407,0,0,1-5.641,5.223H4.88A5.5,5.5,0,0,1,.952,9.244,4.592,4.592,0,0,1,0,8.012c.331-.4.7-.842,1.062-1.283C1.673,6,2.265,5.274,2.635,4.8c.551-.682,2-2.476,4.018-1.634a7.191,7.191,0,0,1,1.1.622c.812.541,1.152.7,1.723.391a4.461,4.461,0,0,0,1.473-1.714c.23-.372.461-.732.711-1.063A3.115,3.115,0,0,1,15.842.443a10.544,10.544,0,0,1,1.864,1.493c.12.12.24.232.351.342.15.15.651.652,1.152,1.133'
        transform='translate(0.791 9.292)'
        fill={color}
      />
      <path
        d='M14.339,0H5.671C2.275,0,0,2.376,0,5.914v8.172A6.435,6.435,0,0,0,.792,17.3c.331-.4.7-.842,1.062-1.284.611-.731,1.2-1.454,1.573-1.924.551-.682,2-2.476,4.018-1.634a7.191,7.191,0,0,1,1.1.622c.812.541,1.152.7,1.723.39a4.446,4.446,0,0,0,1.473-1.714c.23-.371.461-.731.711-1.062a3.115,3.115,0,0,1,4.178-.962A10.544,10.544,0,0,1,18.5,11.228c.12.12.24.232.351.342.15.149.651.651,1.152,1.133V5.914C20,2.376,17.725,0,14.339,0'
        transform='translate(0 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M5.161,2.582A2.6,2.6,0,0,1,2.58,5.163,2.6,2.6,0,0,1,0,2.582,2.6,2.6,0,0,1,2.58,0,2.6,2.6,0,0,1,5.161,2.582'
        transform='translate(4.293 4.215)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.553,0H4.9C1.889,0,0,2.134,0,5.154V13.3c0,3.02,1.881,5.154,4.9,5.154h8.648c3.024,0,4.905-2.134,4.905-5.154V5.154C18.457,2.134,16.576,0,13.553,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.691,1.846A1.846,1.846,0,1,1,1.845,0,1.847,1.847,0,0,1,3.691,1.846Z'
        transform='translate(5.012 4.939)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.457,2.929a22.809,22.809,0,0,0-3-2.593A2.345,2.345,0,0,0,11.3,1.1c-.765.991-1.243,2.324-2.4,2.949-1.423.771-2.259-.472-3.446-.97-1.325-.555-2.331.443-3.105,1.4S.788,6.389,0,7.339'
        transform='translate(1.75 10.022)'
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
        d='M5.641,20C2.267,20,0,17.632,0,14.107V5.893C0,2.368,2.267,0,5.641,0h8.717C17.733,0,20,2.368,20,5.893v2.37a.7.7,0,1,1-1.4,0V5.893c0-2.733-1.666-4.5-4.245-4.5H5.641c-2.579,0-4.246,1.764-4.246,4.5v8.213c0,2.733,1.667,4.5,4.246,4.5h8.717c2.579,0,4.246-1.764,4.246-4.5V13.022c-.152-.126-.307-.261-.464-.4-1.1-.951-2.236-1.933-3.477-1.646-.867.2-1.351.916-1.911,1.743a6.164,6.164,0,0,1-1.79,1.951c-1.205.746-2.477.191-3.406-.216L7.4,14.391a2.112,2.112,0,0,0-2.683.349.7.7,0,0,1-.99-.983,3.475,3.475,0,0,1,4.23-.647l.158.069c.923.4,1.57.645,2.113.308A5.046,5.046,0,0,0,11.6,11.939a4.667,4.667,0,0,1,2.75-2.32c1.932-.45,3.47.882,4.705,1.949.234.2.462.4.684.579a.7.7,0,0,1,.262.544v1.415C20,17.632,17.732,20,14.358,20ZM4.3,6.78a2.558,2.558,0,1,1,2.558,2.56A2.561,2.561,0,0,1,4.3,6.78Zm1.395,0A1.163,1.163,0,1,0,6.854,5.618,1.163,1.163,0,0,0,5.691,6.78Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.553,0H4.9C1.889,0,0,2.134,0,5.154V13.3c0,3.02,1.881,5.154,4.9,5.154h8.648c3.024,0,4.905-2.134,4.905-5.154V5.154C18.457,2.134,16.576,0,13.553,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.691,1.846A1.846,1.846,0,1,1,1.845,0,1.847,1.847,0,0,1,3.691,1.846Z'
        transform='translate(5.012 4.939)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M17.457,2.929a22.809,22.809,0,0,0-3-2.593A2.345,2.345,0,0,0,11.3,1.1c-.765.991-1.243,2.324-2.4,2.949-1.423.771-2.259-.472-3.446-.97-1.325-.555-2.331.443-3.105,1.4S.788,6.389,0,7.339'
        transform='translate(1.75 10.022)'
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
        d='M3.522,1.761A1.761,1.761,0,1,1,1.761,0,1.76,1.76,0,0,1,3.522,1.761Z'
        transform='translate(5.077 5.023)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.654,2.737C15.773,1.831,14.527,0,12.238,0S9.9,4.038,7.563,4.038s-3.278-1.371-4.8-.655S0,6.944,0,6.944'
        transform='translate(2.466 9.93)'
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
Image2.displayName = 'IconlyImage2'
Image2.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Image2)
