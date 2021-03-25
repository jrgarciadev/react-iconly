import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Ticket = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 4)'>
      <path
        d='M16.219,16H13.066a.583.583,0,0,1-.59-.573V13.4a.708.708,0,0,0-.725-.7.716.716,0,0,0-.725.7v2.03a.582.582,0,0,1-.589.573H3.782A3.733,3.733,0,0,1,0,12.326V9.916a.693.693,0,0,1,.739-.661A1.283,1.283,0,0,0,2.021,8a1.212,1.212,0,0,0-1.3-1.174.734.734,0,0,1-.513-.207A.69.69,0,0,1,0,6.116V3.683A3.742,3.742,0,0,1,3.791,0h6.646a.582.582,0,0,1,.589.573v2.4a.725.725,0,0,0,.725.7.716.716,0,0,0,.725-.7V.573A.583.583,0,0,1,13.066,0h3.153A3.733,3.733,0,0,1,20,3.674V6.041a.694.694,0,0,1-.212.5.734.734,0,0,1-.513.206,1.255,1.255,0,1,0-.014,2.509A.693.693,0,0,1,20,9.916v2.41A3.733,3.733,0,0,1,16.219,16ZM11.75,5.7a.724.724,0,0,0-.725.7v3.758a.725.725,0,0,0,.725.7.716.716,0,0,0,.725-.7V6.407A.716.716,0,0,0,11.75,5.7Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 4)'>
      <path
        d='M11.75,5.7V3.683a.72.72,0,0,1-.725-.7V.573A.577.577,0,0,0,10.435,0H3.791A3.744,3.744,0,0,0,0,3.683V6.115a.694.694,0,0,0,.213.5.739.739,0,0,0,.513.206,1.216,1.216,0,0,1,1.3,1.174A1.274,1.274,0,0,1,.735,9.253.692.692,0,0,0,0,9.92v2.406A3.734,3.734,0,0,0,3.781,16h6.654a.579.579,0,0,0,.59-.573V13.4a.715.715,0,0,1,.725-.7V10.87a.721.721,0,0,1-.725-.7V6.407a.72.72,0,0,1,.725-.7'
        transform='translate(0 0)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M6.228,7.995A1.282,1.282,0,0,0,7.515,9.254a.691.691,0,0,1,.735.658v2.414A3.728,3.728,0,0,1,4.468,16H1.315a.585.585,0,0,1-.59-.574V13.4a.708.708,0,0,0-.725-.7V10.871a.715.715,0,0,0,.725-.7V6.408A.714.714,0,0,0,0,5.7V3.683a.714.714,0,0,0,.725-.7V.574A.584.584,0,0,1,1.315,0H4.468A3.728,3.728,0,0,1,8.25,3.673V6.041a.692.692,0,0,1-.213.5.736.736,0,0,1-.513.207,1.277,1.277,0,0,0-1.3,1.249'
        transform='translate(11.75)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 4)'>
      <g transform='translate(11.35 0.25)'>
        <path
          d='M.5,0V2.42'
          transform='translate(0 0)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
        />
        <path
          d='M.5,0V2.024'
          transform='translate(0 13.51)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
        />
        <path
          d='M.5,4.821V0'
          transform='translate(0 5.253)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
        />
      </g>
      <path
        d='M16.7,16A3.277,3.277,0,0,0,20,12.743V10.151a2.15,2.15,0,1,1,0-4.3V3.257A3.277,3.277,0,0,0,16.7,0H3.3A3.277,3.277,0,0,0,0,3.257V5.935A2.09,2.09,0,0,1,2.177,8,2.159,2.159,0,0,1,0,10.151v2.593A3.277,3.277,0,0,0,3.3,16Z'
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
    <g transform='translate(2 4)'>
      <path
        d='M3.786,16A3.734,3.734,0,0,1,0,12.326L0,9.884a.7.7,0,0,1,.212-.5.741.741,0,0,1,.513-.206A1.213,1.213,0,0,0,2.019,8,1.277,1.277,0,0,0,.725,6.743.716.716,0,0,1,0,6.038V3.675A3.735,3.735,0,0,1,3.785,0H5.009a.716.716,0,0,1,.725.7.715.715,0,0,1-.725.7H3.785A2.3,2.3,0,0,0,1.451,3.675V5.429A2.682,2.682,0,0,1,3.47,8a2.584,2.584,0,0,1-2.018,2.5v1.826a2.3,2.3,0,0,0,2.334,2.265h7.241v-1.2a.726.726,0,0,1,1.451,0v1.2h3.736a2.3,2.3,0,0,0,2.334-2.265V10.57a2.646,2.646,0,0,1,0-5.141V3.675a2.3,2.3,0,0,0-2.333-2.266H12.479v1.57a.726.726,0,0,1-1.451,0V1.409H9.064A.715.715,0,0,1,8.339.7.716.716,0,0,1,9.064,0h7.152A3.735,3.735,0,0,1,20,3.675V6.038a.716.716,0,0,1-.725.7,1.257,1.257,0,1,0,0,2.513.735.735,0,0,1,.513.206.7.7,0,0,1,.212.5v2.366A3.734,3.734,0,0,1,16.214,16Zm7.241-5.832V6.411a.726.726,0,0,1,1.451,0v3.758a.726.726,0,0,1-1.451,0Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 4)'>
      <g transform='translate(11.35 0.25)'>
        <path
          d='M.5,0V2.42'
          transform='translate(0 0)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <path
          d='M.5,0V2.024'
          transform='translate(0 13.51)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <path
          d='M.5,4.821V0'
          transform='translate(0 5.253)'
          fill='none'
          stroke={secondaryColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
      </g>
      <path
        d='M16.7,16A3.277,3.277,0,0,0,20,12.743V10.151a2.15,2.15,0,1,1,0-4.3V3.257A3.277,3.277,0,0,0,16.7,0H3.3A3.277,3.277,0,0,0,0,3.257V5.935A2.09,2.09,0,0,1,2.177,8,2.159,2.159,0,0,1,0,10.151v2.593A3.277,3.277,0,0,0,3.3,16Z'
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
    <g transform='translate(2.5 3)'>
      <path
        d='M.475,0V2.655'
        transform='translate(10.384 0.6)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.475,0V2.22'
        transform='translate(10.384 14.544)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.475,5.289V0'
        transform='translate(10.384 6.255)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19,10.55a2.051,2.051,0,0,1,0-4.1C19,1.7,19,0,9.5,0S0,1.7,0,6.449a2.051,2.051,0,0,1,0,4.1C0,15.3,0,17,9.5,17S19,15.3,19,10.55Z'
        transform='translate(0 0.5)'
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
Ticket.displayName = 'IconlyTicket'
Ticket.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Ticket)
