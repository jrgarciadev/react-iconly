import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Password = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 1.999)'>
      <path
        d='M5.666,20C2.277,20,0,17.623,0,14.084V5.917C0,2.378,2.277,0,5.666,0h8.669C17.724,0,20,2.378,20,5.917v8.168C20,17.623,17.723,20,14.334,20Zm7.266-9.25h1.329v1.1a.75.75,0,0,0,1.5,0V10a.751.751,0,0,0-.75-.75H9.319a2.6,2.6,0,1,0,0,1.5h2.112v1.1a.75.75,0,0,0,1.5,0v-1.1h0ZM5.739,10a1.1,1.1,0,1,1,1.1,1.1A1.1,1.1,0,0,1,5.739,10Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.334,0H5.665C2.276,0,0,2.378,0,5.917v8.167C0,17.622,2.276,20,5.665,20h8.668C17.722,20,20,17.622,20,14.084V5.917C20,2.378,17.723,0,14.334,0'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M10.78,5.2a.743.743,0,0,1-.751-.751V3.35H8.7v1.1A.751.751,0,0,1,7.95,5.2.742.742,0,0,1,7.2,4.45V3.35H5.08A2.567,2.567,0,0,1,2.61,5.2a2.6,2.6,0,1,1,0-5.2A2.566,2.566,0,0,1,5.08,1.85h5.7a.751.751,0,0,1,.75.75V4.45A.751.751,0,0,1,10.78,5.2ZM2.61,1.5a1.1,1.1,0,1,0,1.1,1.1A1.106,1.106,0,0,0,2.61,1.5Z'
        transform='translate(4.234 7.399)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.7,1.852A1.852,1.852,0,1,1,1.851,0,1.852,1.852,0,0,1,3.7,1.852Z'
        transform='translate(4.989 8.148)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H6.318V1.852'
        transform='translate(8.692 10)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,1.852V0'
        transform='translate(11.682 10)'
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
        d='M8.953,20a.75.75,0,1,1,0-1.5h5.38c2.531,0,4.167-1.733,4.167-4.416V5.916c0-2.683-1.636-4.415-4.166-4.415H5.665C3.135,1.5,1.5,3.233,1.5,5.916v8.168c0,2.683,1.634,4.416,4.164,4.416a.75.75,0,1,1,0,1.5C2.276,20,0,17.622,0,14.084V5.916C0,2.378,2.276,0,5.665,0h8.67C17.723,0,20,2.378,20,5.916v8.168C20,17.622,17.722,20,14.333,20Zm5.306-8.149v-1.1H12.931v1.1a.75.75,0,1,1-1.5,0v-1.1H9.318A2.6,2.6,0,1,1,4.467,8.932a.75.75,0,1,1,1.368.615A1.1,1.1,0,1,0,6.84,8.9a.75.75,0,1,1,0-1.5,2.6,2.6,0,0,1,2.478,1.85H15.01a.751.751,0,0,1,.75.751v1.851a.75.75,0,1,1-1.5,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.7,1.852A1.852,1.852,0,1,1,1.851,0,1.852,1.852,0,0,1,3.7,1.852Z'
        transform='translate(4.989 8.148)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H6.318V1.852'
        transform='translate(8.692 10)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,1.852V0'
        transform='translate(11.682 10)'
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
    <g transform='translate(2.75 2.75)'>
      <path
        d='M3.7,1.852A1.852,1.852,0,1,1,1.852,0h0A1.851,1.851,0,0,1,3.7,1.852Z'
        transform='translate(4.235 7.398)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0H6.318V1.852'
        transform='translate(7.942 9.25)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,1.852V0'
        transform='translate(10.932 9.25)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z'
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
Password.displayName = 'IconlyPassword'
Password.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Password)
