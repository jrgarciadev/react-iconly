import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Chat = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10,20a9.955,9.955,0,0,1-4.92-1.3,2.2,2.2,0,0,0-1.107-.424,1.213,1.213,0,0,0-.383.063l-2.02.6a.754.754,0,0,1-.226.036.62.62,0,0,1-.5-.239.647.647,0,0,1-.094-.578l.67-2.244a1.046,1.046,0,0,0-.07-.9,10.566,10.566,0,0,1-1.35-5A10.158,10.158,0,0,1,2.831,3.032,9.89,9.89,0,0,1,10.02,0a9.865,9.865,0,0,1,7.12,2.994,10.058,10.058,0,0,1,2.1,3.182A9.89,9.89,0,0,1,20,9.985a10.138,10.138,0,0,1-.865,4.172,9.6,9.6,0,0,1-2.275,3.153A10.245,10.245,0,0,1,10,20ZM14.59,8.743a1.282,1.282,0,1,0,1.28,1.282A1.282,1.282,0,0,0,14.59,8.743Zm-4.629,0A1.268,1.268,0,0,0,8.7,10.015,1.28,1.28,0,1,0,9.98,8.743H9.961Zm-4.591,0a1.282,1.282,0,1,0,1.28,1.282A1.283,1.283,0,0,0,5.37,8.743Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10.02,0A10,10,0,0,0,0,10a10.56,10.56,0,0,0,1.35,4.99,1.045,1.045,0,0,1,.07.9L.75,18.13a.624.624,0,0,0,.82.78l2.02-.6a1.7,1.7,0,0,1,1.491.36A9.987,9.987,0,1,0,10.02,0'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M9.22,1.28A1.28,1.28,0,1,1,10.5,2.561,1.276,1.276,0,0,1,9.22,1.28Zm-4.61-.01a1.28,1.28,0,1,1,1.28,1.291A1.292,1.292,0,0,1,4.611,1.27ZM0,1.28a1.28,1.28,0,0,1,2.56,0A1.29,1.29,0,0,1,1.28,2.561,1.289,1.289,0,0,1,0,1.28Z'
        transform='translate(4.09 8.73)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M9.085,1.166a1.169,1.169,0,1,1,1.169,1.169A1.169,1.169,0,0,1,9.085,1.166Zm-4.542,0A1.168,1.168,0,1,1,5.711,2.336,1.169,1.169,0,0,1,4.543,1.166ZM0,1.166A1.169,1.169,0,1,1,1.168,2.336,1.169,1.169,0,0,1,0,1.166Z'
        transform='translate(4.527 9.056)'
        fill={color}
      />
      <path
        d='M10.02,0A10.006,10.006,0,0,0,0,10.015a10.584,10.584,0,0,0,1.35,5,1.051,1.051,0,0,1,.07.9L.75,18.157a.624.624,0,0,0,.82.78l2.02-.6a1.7,1.7,0,0,1,1.49.361A10,10,0,1,0,10.02,0Z'
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
        d='M7.847,19.765A.749.749,0,0,1,8.172,18.3,8.5,8.5,0,1,0,10.006,1.5H10A8.5,8.5,0,0,0,2.46,13.931l.192.375a1.961,1.961,0,0,1,.135,1.482,17,17,0,0,0-.53,1.633C2.818,17.252,3.5,17,4,16.823l.2-.074a.749.749,0,0,1,.509,1.409l-.2.073a23.99,23.99,0,0,1-2.442.791.8.8,0,0,1-.177.018A1.206,1.206,0,0,1,1,18.7a1.309,1.309,0,0,1-.337-1,.828.828,0,0,1,.019-.148,17.461,17.461,0,0,1,.69-2.245.475.475,0,0,0-.049-.309l-.194-.374A10,10,0,0,1,10,0h.012a10,10,0,1,1-2.16,19.765ZM13.21,10A1.189,1.189,0,1,1,14.4,11.188,1.19,1.19,0,0,1,13.21,10Zm-4.4,0A1.189,1.189,0,1,1,10,11.188,1.19,1.19,0,0,1,8.807,10ZM4.4,10a1.189,1.189,0,1,1,1.189,1.189A1.19,1.19,0,0,1,4.4,10Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M10.057,0A10,10,0,0,0,1.138,14.629l.2.39a1.3,1.3,0,0,1,.1,1,19.8,19.8,0,0,0-.715,2.324c0,.4.114.629.544.619A18.271,18.271,0,0,0,3.5,18.314a1.481,1.481,0,0,1,.954.057c.277.133.839.476.859.476A10,10,0,1,0,10.057,0Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <ellipse
        cx='0.477'
        cy='0.476'
        rx='1.477'
        ry='1.476'
        transform='translate(4.81 9.524)'
        fill={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        opacity={opacity}
      />
      <ellipse
        cx='0.477'
        cy='0.476'
        rx='1.477'
        ry='1.476'
        transform='translate(9.58 9.524)'
        fill={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        opacity={opacity}
      />
      <ellipse
        cx='0.477'
        cy='0.476'
        rx='1.477'
        ry='1.476'
        transform='translate(14.35 9.524)'
        fill={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        opacity={opacity}
      />
    </g>
  )

  const Curved = () => (
    <g transform='translate(2 2)'>
      <path
        d='M.5.5H.5'
        transform='translate(13.444 9.913)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(9.435 9.913)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(5.426 9.913)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.071,17.07a10.006,10.006,0,0,1-11.285,2c-.547-.22-4.085.76-4.853-.007s.213-4.307-.007-4.854A10,10,0,1,1,17.071,17.07Z'
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
Chat.displayName = 'IconlyChat'
Chat.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Chat)
