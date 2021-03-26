import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Image = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.332,20H5.666C2.277,20,0,17.622,0,14.083V5.917C0,2.378,2.277,0,5.666,0h8.667C17.723,0,20,2.378,20,5.917v8.167C20,17.622,17.722,20,14.332,20ZM6.307,13.241c-.5,0-1.018.383-1.724,1.279l-.038.048c-.45.569-.912,1.155-1.371,1.726a.8.8,0,0,0-.162.633.716.716,0,0,0,.328.5A4.112,4.112,0,0,0,5.529,18h8.428a4.524,4.524,0,0,0,1.407-.214,3.717,3.717,0,0,0,2.261-2.111,3.756,3.756,0,0,0,.2-2.741,2.263,2.263,0,0,0-.513-.784l0,0a10.811,10.811,0,0,0-1.868-1.6,1.429,1.429,0,0,0-.76-.235,1.874,1.874,0,0,0-1.363.806c-.177.238-.33.491-.492.759l-.1.171-.007.012a5.683,5.683,0,0,1-1.96,2.218,2.487,2.487,0,0,1-1.208.335,3.516,3.516,0,0,1-1.959-.785,5.491,5.491,0,0,0-.827-.49A1.12,1.12,0,0,0,6.307,13.241ZM6.5,4A2.5,2.5,0,1,0,9,6.5,2.5,2.5,0,0,0,6.5,4Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.333,20H5.666C2.277,20,0,17.623,0,14.084V5.917C0,2.378,2.277,0,5.666,0h8.668C17.723,0,20,2.378,20,5.917v8.168C20,17.623,17.723,20,14.333,20'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M2.515,13.567a4.184,4.184,0,0,1-2.177-.558.736.736,0,0,1-.165-1.1c.47-.57.934-1.142,1.4-1.719.892-1.1,1.492-1.424,2.161-1.143a5.581,5.581,0,0,1,.823.475,2.807,2.807,0,0,0,3.149.436A5.617,5.617,0,0,0,9.664,7.8c.194-.311.378-.621.592-.9a1.585,1.585,0,0,1,2.111-.553A10.687,10.687,0,0,1,14.229,7.9a2.181,2.181,0,0,1,.509.76,3.564,3.564,0,0,1-.2,2.656,3.635,3.635,0,0,1-2.247,2.046,4.585,4.585,0,0,1-1.4.207ZM1.1,2.486A2.485,2.485,0,1,1,3.588,4.971,2.488,2.488,0,0,1,1.1,2.486Z'
        transform='translate(3.172 4.189)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 2)'>
      <path
        d='M18.46,5.149V13.3c0,3.02-1.89,5.15-4.91,5.15H4.9c-3.02,0-4.9-2.13-4.9-5.15V5.149C0,2.129,1.89,0,4.9,0h8.65C16.57,0,18.46,2.129,18.46,5.149Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.14,1.529,2.527a1.4,1.4,0,0,1,2.032-.008l.885.9a1.433,1.433,0,0,0,2.131-.094L8.806.617a1.687,1.687,0,0,1,2.515-.1L13.4,2.655'
        transform='translate(3.281 10.292)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.507,1.754A1.754,1.754,0,1,1,1.753,0,1.755,1.755,0,0,1,3.507,1.754Z'
        transform='translate(4.806 5.38)'
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
        d='M10.98,19.949a.75.75,0,0,1,0-1.5H14.3c2.527,0,4.16-1.727,4.16-4.4V5.9c0-2.673-1.633-4.4-4.16-4.4H5.65C3.129,1.5,1.5,3.226,1.5,5.9V14.05c0,2.672,1.629,4.4,4.15,4.4h.721a.75.75,0,0,1,0,1.5H5.65c-3.38,0-5.65-2.372-5.65-5.9V5.9C0,2.371,2.271,0,5.65,0H14.3c3.386,0,5.66,2.371,5.66,5.9V14.05c0,3.528-2.274,5.9-5.66,5.9ZM2.766,14.978a.751.751,0,0,1-.028-1.061L4.267,12.3a2.126,2.126,0,0,1,1.554-.672,2.345,2.345,0,0,1,1.561.661l.881.9a.65.65,0,0,0,.517.2.677.677,0,0,0,.5-.248l2.228-2.713a2.444,2.444,0,0,1,1.783-.887,2.471,2.471,0,0,1,1.849.739l2.077,2.141a.75.75,0,0,1-1.077,1.045l-2.077-2.141a.893.893,0,0,0-.711-.285.929.929,0,0,0-.685.342L10.438,14.1a2.185,2.185,0,0,1-1.59.795,2.244,2.244,0,0,1-1.655-.652l-.886-.9a.52.52,0,0,0-.479-.206.647.647,0,0,0-.472.2l-1.53,1.615a.752.752,0,0,1-1.06.03ZM4.056,7.133a2.5,2.5,0,1,1,2.5,2.5A2.507,2.507,0,0,1,4.056,7.133Zm1.5,0a1,1,0,1,0,1-1A1.005,1.005,0,0,0,5.557,7.133Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 2)'>
      <path
        d='M18.46,5.149V13.3c0,3.02-1.89,5.15-4.91,5.15H4.9c-3.02,0-4.9-2.13-4.9-5.15V5.149C0,2.129,1.89,0,4.9,0h8.65C16.57,0,18.46,2.129,18.46,5.149Z'
        transform='translate(0.75 0.751)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,4.14,1.529,2.527a1.4,1.4,0,0,1,2.032-.008l.885.9a1.433,1.433,0,0,0,2.131-.094L8.806.617a1.687,1.687,0,0,1,2.515-.1L13.4,2.655'
        transform='translate(3.281 10.292)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M3.507,1.754A1.754,1.754,0,1,1,1.753,0,1.755,1.755,0,0,1,3.507,1.754Z'
        transform='translate(4.806 5.38)'
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
        d='M0,3.71S.812,2.073,1.994,2.073,3.78,3.448,5.09,3.448,7.868,0,9.352,0,11.9,2.391,11.9,2.391'
        transform='translate(4.071 10.749)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.115,1.558A1.558,1.558,0,1,1,1.557,0,1.558,1.558,0,0,1,3.115,1.558Z'
        transform='translate(5.024 5.547)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
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
Image.displayName = 'IconlyImage'
Image.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Image)
