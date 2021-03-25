import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const People = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(1 4)'>
      <path
        d='M4.588,13.28c0-2.177,2.911-2.741,6.361-2.741,3.431,0,6.36.544,6.36,2.721S14.4,16,10.949,16C7.518,16,4.588,15.456,4.588,13.28Zm14.5.4A4.453,4.453,0,0,0,16.431,9.3a.045.045,0,0,1-.029-.047.038.038,0,0,1,.032-.026,15.49,15.49,0,0,1,3.244.284,2.76,2.76,0,0,1,2.131,1.3,1.927,1.927,0,0,1,0,1.67c-.461,1-1.944,1.319-2.521,1.4l-.027,0A.183.183,0,0,1,19.086,13.684Zm-16.375.205c-.576-.083-2.06-.4-2.52-1.4a1.913,1.913,0,0,1,0-1.669,2.756,2.756,0,0,1,2.13-1.305,15.644,15.644,0,0,1,3.244-.283.037.037,0,0,1,.032.025.046.046,0,0,1-.028.048,4.449,4.449,0,0,0-2.656,4.38.182.182,0,0,1-.176.208ZM6.74,4.233a4.209,4.209,0,1,1,8.419,0,4.209,4.209,0,1,1-8.419,0Zm9.823,3.609a3.4,3.4,0,0,1-.483-.047.159.159,0,0,1-.106-.245A5.841,5.841,0,0,0,15.889.939a.106.106,0,0,1-.016-.111.13.13,0,0,1,.083-.049,3.507,3.507,0,0,1,.708-.073A3.576,3.576,0,0,1,20.088,5.22a3.51,3.51,0,0,1-3.429,2.623ZM1.912,5.22A3.576,3.576,0,0,1,5.336.706a3.53,3.53,0,0,1,.709.073.135.135,0,0,1,.082.049.1.1,0,0,1-.016.11A5.84,5.84,0,0,0,6.027,7.55a.159.159,0,0,1-.107.245,3.281,3.281,0,0,1-.483.047h-.1A3.512,3.512,0,0,1,1.912,5.22Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(1 4)'>
      <path
        d='M6.361,0C2.911,0,0,.564,0,2.739S2.93,5.46,6.361,5.46c3.45,0,6.361-.564,6.361-2.739S9.792,0,6.361,0'
        transform='translate(4.588 10.54)'
        fill={color}
      />
      <path
        d='M4.209,8.467A4.207,4.207,0,0,0,8.419,4.234,4.209,4.209,0,1,0,0,4.234,4.207,4.207,0,0,0,4.209,8.467'
        transform='translate(6.74 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M4.225,4.513A3.574,3.574,0,0,0,.8,0,3.587,3.587,0,0,0,.092.073.136.136,0,0,0,.01.122a.1.1,0,0,0,.017.11A5.807,5.807,0,0,1,1.094,3.6,5.762,5.762,0,0,1,.11,6.844a.158.158,0,0,0,.107.244A3.282,3.282,0,0,0,.7,7.135,3.513,3.513,0,0,0,4.225,4.513'
        transform='translate(15.863 0.707)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M5.407,1.59A2.755,2.755,0,0,0,3.276.286,15.555,15.555,0,0,0,.033,0,.037.037,0,0,0,0,.027.046.046,0,0,0,.029.075,4.451,4.451,0,0,1,2.684,4.456a.181.181,0,0,0,.2.205c.577-.083,2.06-.4,2.521-1.4a1.922,1.922,0,0,0,0-1.67'
        transform='translate(16.402 9.227)'
        fill={color}
      />
      <path
        d='M4.252.073A3.514,3.514,0,0,0,3.543,0,3.573,3.573,0,0,0,.12,4.513,3.511,3.511,0,0,0,3.644,7.135a3.4,3.4,0,0,0,.484-.047.158.158,0,0,0,.107-.244A5.841,5.841,0,0,1,4.318.232a.1.1,0,0,0,.016-.11.129.129,0,0,0-.082-.05'
        transform='translate(1.793 0.707)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M2.322.285a2.753,2.753,0,0,0-2.13,1.3,1.918,1.918,0,0,0,0,1.671c.46,1,1.944,1.319,2.521,1.4a.18.18,0,0,0,.2-.205A4.45,4.45,0,0,1,5.569.075.047.047,0,0,0,5.6.027.034.034,0,0,0,5.566,0,15.517,15.517,0,0,0,2.322.285'
        transform='translate(0 9.228)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(1 3.5)'>
      <path
        d='M0,5.8A2.9,2.9,0,1,0,0,0'
        transform='translate(16.595 1.629)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A9.435,9.435,0,0,1,1.423.206a2.337,2.337,0,0,1,1.712.978,1.381,1.381,0,0,1,0,1.184,2.361,2.361,0,0,1-1.712.984'
        transform='translate(17.929 10.585)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.9,5.8A2.9,2.9,0,1,1,2.9,0'
        transform='translate(2.388 1.629)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.268,0A9.435,9.435,0,0,0,1.845.206a2.334,2.334,0,0,0-1.711.978,1.375,1.375,0,0,0,0,1.184,2.358,2.358,0,0,0,1.711.984'
        transform='translate(0.688 10.585)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.021,0c3.247,0,6.021.491,6.021,2.458S9.286,4.933,6.021,4.933C2.773,4.933,0,4.441,0,2.475S2.756,0,6.021,0Z'
        transform='translate(4.917 11.21)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.858,7.717A3.859,3.859,0,1,1,7.716,3.858,3.845,3.845,0,0,1,3.858,7.717Z'
        transform='translate(7.08 0.688)'
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
    <g transform='translate(1 3.5)'>
      <path
        d='M10.308,16.3a.694.694,0,0,1,.692-.7c2.443,0,5.356-.313,5.356-1.8,0-1.186-1.8-1.786-5.356-1.786-2.443,0-5.355.312-5.355,1.8,0,.332.1.76.853,1.132a5.118,5.118,0,0,0,1.167.381A.7.7,0,0,1,7.377,16.7a6.575,6.575,0,0,1-1.489-.491,2.574,2.574,0,0,1-1.628-2.383c0-3.2,5.072-3.2,6.739-3.2,1.844,0,6.74,0,6.74,3.179C17.74,17,12.668,17,11,17A.7.7,0,0,1,10.308,16.3Zm8.467-2.085a.7.7,0,0,1,.539-.823c.944-.2,1.177-.492,1.233-.611a.693.693,0,0,0,0-.6c-.118-.25-.577-.476-1.229-.606a9.063,9.063,0,0,0-1.341-.2A.7.7,0,0,1,18.069,10a10.223,10.223,0,0,1,1.534.221A2.855,2.855,0,0,1,21.8,11.588a2.085,2.085,0,0,1,0,1.8,2.891,2.891,0,0,1-2.2,1.376.621.621,0,0,1-.14.015A.694.694,0,0,1,18.775,14.218Zm-16.362.535A2.892,2.892,0,0,1,.2,13.374a2.091,2.091,0,0,1,0-1.8A2.865,2.865,0,0,1,2.417,10.2a10.04,10.04,0,0,1,1.52-.219.7.7,0,0,1,.094,1.389,8.737,8.737,0,0,0-1.328.193c-.671.133-1.13.359-1.25.61a.707.707,0,0,0,0,.6c.058.12.29.418,1.238.614a.7.7,0,0,1-.139,1.377A.74.74,0,0,1,2.413,14.754ZM8.191,8.222a.7.7,0,0,1-.122-.977.688.688,0,0,1,.972-.122A3.156,3.156,0,0,0,11,7.793a3.2,3.2,0,1,0-3.184-3.2.692.692,0,1,1-1.384,0A4.568,4.568,0,1,1,11,9.185,4.517,4.517,0,0,1,8.191,8.222Zm7.8-.714a.694.694,0,0,1,.692-.7,2.234,2.234,0,0,0,0-4.468.7.7,0,0,1,0-1.392,3.627,3.627,0,0,1,0,7.253A.694.694,0,0,1,15.991,7.508ZM1.714,4.548A3.629,3.629,0,0,1,5.328.913a.7.7,0,0,1,0,1.392,2.242,2.242,0,0,0,0,4.484.7.7,0,0,1,0,1.392A3.628,3.628,0,0,1,1.714,4.548Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(1 3.5)'>
      <path
        d='M0,5.8A2.9,2.9,0,1,0,0,0'
        transform='translate(16.595 1.629)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M0,0A9.435,9.435,0,0,1,1.423.206a2.337,2.337,0,0,1,1.712.978,1.381,1.381,0,0,1,0,1.184,2.361,2.361,0,0,1-1.712.984'
        transform='translate(17.929 10.585)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.9,5.8A2.9,2.9,0,1,1,2.9,0'
        transform='translate(2.388 1.629)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.268,0A9.435,9.435,0,0,0,1.845.206a2.334,2.334,0,0,0-1.711.978,1.375,1.375,0,0,0,0,1.184,2.358,2.358,0,0,0,1.711.984'
        transform='translate(0.688 10.585)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.021,0c3.247,0,6.021.491,6.021,2.458S9.286,4.933,6.021,4.933C2.773,4.933,0,4.441,0,2.475S2.756,0,6.021,0Z'
        transform='translate(4.917 11.21)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.858,7.717A3.859,3.859,0,1,1,7.716,3.858,3.845,3.845,0,0,1,3.858,7.717Z'
        transform='translate(7.08 0.688)'
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
    <g transform='translate(1 3)'>
      <path
        d='M6.006,6.122C2.767,6.122,0,5.632,0,3.67S2.749,0,6.006,0c3.239,0,6.006,1.692,6.006,3.653S9.263,6.122,6.006,6.122Z'
        transform='translate(4.966 11.246)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.85,7.7a3.837,3.837,0,1,0-.027,0Z'
        transform='translate(7.122 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.166,5.643a2.9,2.9,0,0,0,2.149-2.8A2.9,2.9,0,0,0,0,0'
        transform='translate(17.196 1.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0C1.754,0,3.252,1.189,3.252,2.251a1.64,1.64,0,0,1-1.3,1.49'
        transform='translate(17.943 10.544)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.15,5.643A2.9,2.9,0,0,1,2.315,0'
        transform='translate(2.434 1.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.252,0C1.5,0,0,1.189,0,2.251a1.64,1.64,0,0,0,1.3,1.49'
        transform='translate(0.75 10.544)'
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
People.displayName = 'IconlyPeople'
People.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(People)
