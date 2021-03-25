import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Document = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 2)'>
      <path
        d='M13.191,20H4.81C1.753,20,0,18.236,0,15.16V4.83A4.91,4.91,0,0,1,1.265,1.271,4.863,4.863,0,0,1,4.81,0h8.382C16.247,0,18,1.761,18,4.83V15.16a4.891,4.891,0,0,1-1.246,3.583A4.819,4.819,0,0,1,13.191,20ZM5,13.736a.78.78,0,0,0-.668.374.786.786,0,0,0,.653,1.206.7.7,0,0,0,.1-.006H12.92a.79.79,0,0,0,0-1.57H5.08A.8.8,0,0,0,5,13.736ZM5.08,9.179a.78.78,0,0,0,0,1.561H12.92a.78.78,0,0,0,0-1.561Zm0-4.529v.01h0a.779.779,0,0,0,0,1.559h2.99a.785.785,0,0,0,0-1.57Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 2)'>
      <path
        d='M13.191,0H4.81C1.77,0,0,1.78,0,4.83V15.16C0,18.26,1.77,20,4.81,20h8.381C16.28,20,18,18.26,18,15.16V4.83C18,1.78,16.28,0,13.191,0'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.12,10.3a.8.8,0,0,1,0-.84A.785.785,0,0,1,.87,9.09H8.71a.79.79,0,0,1,0,1.57H.87a.732.732,0,0,1-.1.007A.783.783,0,0,1,.12,10.3ZM.87,6.09a.781.781,0,0,1,0-1.562H8.71a.781.781,0,0,1,0,1.562Zm0-4.521A.78.78,0,1,1,.87.01V0H3.859a.785.785,0,0,1,0,1.57Z'
        transform='translate(4.21 4.65)'
        fill={color}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(3 2)'>
      <path
        d='M7.22.5H0'
        transform='translate(5.496 13.723)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.22.5H0'
        transform='translate(5.496 9.537)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.755.5H0'
        transform='translate(5.496 5.36)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.158,0,4.469,0A4.251,4.251,0,0,0,0,4.607v9.2A4.254,4.254,0,0,0,4.506,18.41l7.689,0a4.252,4.252,0,0,0,4.47-4.6v-9.2A4.255,4.255,0,0,0,12.158,0Z'
        transform='translate(0.751 0.75)'
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
    <g transform='translate(3 2)'>
      <path
        d='M10.006,20a.734.734,0,0,1,0-1.457h2.848c2.455,0,3.692-1.263,3.692-3.752V5.21c0-2.49-1.237-3.753-3.692-3.753H5.138c-2.456,0-3.7,1.263-3.7,3.753v9.581c0,2.489,1.245,3.752,3.7,3.752a.734.734,0,0,1,0,1.457C1.924,20,0,18.049,0,14.791V5.21C0,1.942,1.924,0,5.138,0h7.716C16.067,0,17.991,1.951,18,5.21v9.581C18,18.049,16.084,20,12.862,20ZM5.39,14.958H5.382a.724.724,0,0,1,0-1.448h7.21a.724.724,0,0,1,0,1.448Zm7.2-4.229H5.382a.734.734,0,0,1,0-1.457h7.21a.72.72,0,0,1,.692.338.745.745,0,0,1,0,.779.724.724,0,0,1-.613.344A.712.712,0,0,1,12.592,10.729ZM5.39,6.5a.734.734,0,0,1,0-1.457H8.133a.734.734,0,0,1,0,1.457Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 2)'>
      <path
        d='M7.22.5H0'
        transform='translate(5.496 13.723)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M7.22.5H0'
        transform='translate(5.496 9.537)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M2.755.5H0'
        transform='translate(5.496 5.36)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M12.158,0,4.469,0A4.251,4.251,0,0,0,0,4.607v9.2A4.254,4.254,0,0,0,4.506,18.41l7.689,0a4.252,4.252,0,0,0,4.47-4.6v-9.2A4.255,4.255,0,0,0,12.158,0Z'
        transform='translate(0.751 0.75)'
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
    <g transform='translate(3.61 2.75)'>
      <path
        d='M7.22.5H0'
        transform='translate(4.766 12.446)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.22.5H0'
        transform='translate(4.766 8.686)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.755.5H0'
        transform='translate(4.766 4.927)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,9.25c0,6.937,2.1,9.25,8.391,9.25s8.391-2.313,8.391-9.25S14.685,0,8.391,0,0,2.313,0,9.25Z'
        transform='translate(0)'
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
Document.displayName = 'IconlyDocument'
Document.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Document)
