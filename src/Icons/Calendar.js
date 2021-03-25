import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Calendar = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 2)'>
      <path
        d='M5.152,20H5.141A5.152,5.152,0,0,1,1.4,18.619,5.139,5.139,0,0,1,.011,14.88L0,6.553a5.089,5.089,0,0,1,1.219-3.5A4.939,4.939,0,0,1,4.506,1.53V.78a.773.773,0,0,1,.22-.553.766.766,0,0,1,1.3.552v.7l5.865-.008V.77a.77.77,0,0,1,.218-.552.766.766,0,0,1,1.3.55v.75a4.966,4.966,0,0,1,3.321,1.487A4.993,4.993,0,0,1,17.989,6.49L18,14.916c0,3.125-1.961,5.07-5.128,5.074Zm7.891-5.808a.833.833,0,0,0-.809.851.83.83,0,1,0,.819-.851Zm-8.126,0h0a.851.851,0,0,0-.808.86.823.823,0,0,0,.811.8h.039a.809.809,0,0,0,.565-.265.821.821,0,0,0,.215-.6.813.813,0,0,0-.819-.8Zm4.068-.005h0a.855.855,0,0,0-.808.861.823.823,0,0,0,.814.8h.036a.823.823,0,0,0,.779-.861.813.813,0,0,0-.819-.8ZM4.912,10.594h0a.851.851,0,0,0-.808.86.821.821,0,0,0,.812.8h.039a.806.806,0,0,0,.563-.265.823.823,0,0,0,.214-.6.812.812,0,0,0-.818-.8Zm4.069-.035h0a.851.851,0,0,0-.809.86.823.823,0,0,0,.815.8h.036a.825.825,0,0,0,.778-.861.813.813,0,0,0-.818-.8Zm4.07.006h0a.826.826,0,0,0-.808.839v.012a.813.813,0,0,0,.821.8h.019a.825.825,0,0,0-.028-1.649ZM4.508,3.058c-1.985.2-2.991,1.375-2.988,3.493l0,.311,14.948-.02v-.35C16.428,4.379,15.4,3.22,13.414,3.047v.77a.764.764,0,0,1-1.3.547.773.773,0,0,1-.217-.545V3.01l-5.865.008,0,.808a.765.765,0,0,1-1.3.547.773.773,0,0,1-.217-.546v-.77Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 2)'>
      <path
        d='M5.127,12.743A4.776,4.776,0,0,1,0,7.613V0H18V7.674c0,3.138-1.976,5.069-5.137,5.069Z'
        transform='translate(0 7.257)'
        fill={color}
      />
      <path
        d='M0,5.767A15.855,15.855,0,0,1,.155,3.64,4.591,4.591,0,0,1,4.541,0h8.911a4.639,4.639,0,0,1,4.386,3.64,15.892,15.892,0,0,1,.154,2.127Z'
        transform='translate(0.003 1.49)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M.761,4.59a.747.747,0,0,0,.761-.77V.771A.748.748,0,0,0,.761,0,.748.748,0,0,0,0,.771V3.82a.747.747,0,0,0,.761.77'
        transform='translate(4.544 0)'
        fill={color}
      />
      <path
        d='M.761,4.59a.753.753,0,0,0,.761-.77V.771A.754.754,0,0,0,.761,0,.748.748,0,0,0,0,.771V3.82a.747.747,0,0,0,.761.77'
        transform='translate(11.934 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 2)'>
      <path
        d='M0,.473H17.824'
        transform='translate(0.093 6.931)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(12.984 10.837)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(8.546 10.837)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(4.099 10.837)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(12.984 14.723)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(8.546 14.723)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.459.473H.468'
        transform='translate(4.099 14.723)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.463,0V3.291'
        transform='translate(12.581 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.463,0V3.291'
        transform='translate(4.502 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.238,0H4.771C1.834,0,0,1.636,0,4.643v9.05c0,3.054,1.834,4.728,4.771,4.728h8.458c2.946,0,4.771-1.645,4.771-4.652V4.643C18.009,1.636,16.184,0,13.238,0Z'
        transform='translate(0 1.579)'
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
        d='M5.626,20C1.9,20,0,18.311,0,14.985V6.715A4.542,4.542,0,0,1,2.07,2.469.685.685,0,0,1,2.8,2.442a.713.713,0,0,1-.071,1.265A3.143,3.143,0,0,0,1.374,6.715V6.98H14.061a.7.7,0,0,1,0,1.4H1.374v6.608c0,2.538,1.235,3.591,4.252,3.609h6.748c2.974,0,4.243-1.079,4.243-3.618V6.706c0-2.211-.966-3.282-3.165-3.539v.672a.694.694,0,0,1-1.382-.053V.673a.7.7,0,0,1,.222-.49.677.677,0,0,1,.5-.183.712.712,0,0,1,.661.734V1.77C16.461,2.062,18,3.725,18,6.715v8.27C18,18.311,16.1,20,12.374,20Zm6.7-4.918a.877.877,0,0,1,.869-.885h-.009a.863.863,0,0,1,.621.256.894.894,0,0,1,.257.629.87.87,0,1,1-1.739,0Zm-4.174,0a.87.87,0,1,1,.869.885A.877.877,0,0,1,8.148,15.082Zm-4.165,0a.877.877,0,0,1,.869-.885H4.844a.861.861,0,0,1,.62.256.89.89,0,0,1,.257.629.87.87,0,1,1-1.739,0ZM12.322,11.5a.877.877,0,0,1,.869-.884h-.009a.859.859,0,0,1,.621.256.893.893,0,0,1,.257.628.87.87,0,1,1-1.739,0Zm-4.174,0a.87.87,0,1,1,.869.885A.877.877,0,0,1,8.148,11.5Zm-4.165,0a.877.877,0,0,1,.869-.884H4.844a.857.857,0,0,1,.62.256.889.889,0,0,1,.257.628.87.87,0,1,1-1.739,0Zm1.235-7a.694.694,0,0,1-.67-.708V.735a.694.694,0,0,1,1.382,0V1.7H9.861a.7.7,0,0,1,0,1.4H5.913v.7a.706.706,0,0,1-.2.5.683.683,0,0,1-.485.2Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 2)'>
      <path
        d='M0,.473H17.824'
        transform='translate(0.093 6.931)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M9.343,4.36h.009Zm-4.438,0h.01Zm-4.446,0H.468ZM9.343.473h.009Zm-4.438,0h.01ZM.459.473H.468Z'
        transform='translate(4.099 10.837)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M.463,0V3.291'
        transform='translate(12.581 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.463,0V3.291'
        transform='translate(4.502 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.238,0H4.771C1.834,0,0,1.636,0,4.643v9.05c0,3.054,1.834,4.728,4.771,4.728h8.458c2.946,0,4.771-1.645,4.771-4.652V4.643C18.009,1.636,16.184,0,13.238,0Z'
        transform='translate(0 1.579)'
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
    <g transform='translate(2.75 2.05)'>
      <path
        d='M0,9.274C0,2.318,2.319,0,9.274,0s9.275,2.318,9.275,9.274-2.319,9.274-9.275,9.274S0,16.23,0,9.274Z'
        transform='translate(0 1.452)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.5H18.008'
        transform='translate(0.275 6.774)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(13.183 10.711)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(8.784 10.711)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(4.376 10.711)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(13.183 14.563)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(8.784 14.563)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5.5H.5'
        transform='translate(4.376 14.563)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V3.262'
        transform='translate(12.783 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M.5,0V3.262'
        transform='translate(4.775 0)'
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
Calendar.displayName = 'IconlyCalendar'
Calendar.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Calendar)
