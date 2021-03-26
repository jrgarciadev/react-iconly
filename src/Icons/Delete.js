import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Delete = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(3 2)'>
      <path
        d='M5.132,19.961A2.916,2.916,0,0,1,2.2,17.134c-.313-2.847-.836-9.577-.846-9.645a.791.791,0,0,1,.191-.558A.708.708,0,0,1,2.068,6.7H15.939a.724.724,0,0,1,.523.234.745.745,0,0,1,.181.558c0,.068-.533,6.809-.837,9.645a2.918,2.918,0,0,1-3,2.827C11.515,19.99,10.249,20,9,20,7.681,20,6.387,19.99,5.132,19.961ZM.714,5.091A.73.73,0,0,1,0,4.357v-.38a.724.724,0,0,1,.714-.734H3.63A1.282,1.282,0,0,0,4.871,2.228l.152-.682A1.989,1.989,0,0,1,6.935,0h4.129a1.987,1.987,0,0,1,1.9,1.5l.163.73a1.28,1.28,0,0,0,1.241,1.016h2.916A.723.723,0,0,1,18,3.977v.38a.73.73,0,0,1-.713.734Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3 2)'>
      <path
        d='M15.289.792c0,.068-.533,6.809-.837,9.646a2.918,2.918,0,0,1-3,2.827c-1.293.029-2.56.039-3.806.039-1.323,0-2.616-.01-3.872-.039A2.917,2.917,0,0,1,.847,10.438C.534,7.591.011.86,0,.792A.794.794,0,0,1,.192.234.71.71,0,0,1,.715,0H14.585a.73.73,0,0,1,.523.234.748.748,0,0,1,.181.558'
        transform='translate(1.354 6.696)'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M18,3.977a.722.722,0,0,0-.713-.733H14.371A1.281,1.281,0,0,1,13.13,2.227L12.967,1.5a1.985,1.985,0,0,0-1.9-1.5H6.936A1.988,1.988,0,0,0,5.023,1.546l-.153.682A1.283,1.283,0,0,1,3.63,3.244H.714A.722.722,0,0,0,0,3.977v.38a.729.729,0,0,0,.714.733H17.287A.729.729,0,0,0,18,4.357Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3 2)'>
      <path
        d='M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0'
        transform='translate(2.134 7.468)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.958.5H0'
        transform='translate(0.75 3.74)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489'
        transform='translate(4.018 0.751)'
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
        d='M9.191,20a.732.732,0,0,1,0-1.463h0c1.518,0,2.064-.008,3.583-.035a1.494,1.494,0,0,0,1.608-1.526c.3-2.8.832-9.5.836-9.571a.714.714,0,1,1,1.422.118c0,.067-.534,6.792-.84,9.613a2.917,2.917,0,0,1-3,2.828c-1.286.024-1.6.037-2.884.037Zm-4.065-.04a2.915,2.915,0,0,1-2.932-2.817C1.886,14.3,1.36,7.589,1.355,7.521a.727.727,0,0,1,.653-.788.73.73,0,0,1,.769.672c.005.067.53,6.752.836,9.574A1.475,1.475,0,0,0,5.154,18.5a.732.732,0,0,1-.014,1.462ZM.713,4.96a.732.732,0,0,1,0-1.463H3.907a.9.9,0,0,0,.878-.736l.238-1.22A1.99,1.99,0,0,1,6.932,0h4.136a1.977,1.977,0,0,1,1.9,1.494.735.735,0,0,1-.5.9.712.712,0,0,1-.874-.518.542.542,0,0,0-.52-.409H6.932a.542.542,0,0,0-.52.409L6.185,3.046a2.5,2.5,0,0,1-.139.451h11.24a.732.732,0,0,1,0,1.463Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3 2)'>
      <path
        d='M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0'
        transform='translate(2.134 7.468)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <path
        d='M16.958.5H0'
        transform='translate(0.75 3.74)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489'
        transform='translate(4.018 0.751)'
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
    <g transform='translate(3.5 2)'>
      <path
        d='M13.26,0c0,8.019,1.154,11.644-6.61,11.644S.064,8.019.064,0'
        transform='translate(2.129 7.554)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.15.476H0'
        transform='translate(0.715 4.004)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.874,3.766A3.207,3.207,0,0,0,3.448,0,3.207,3.207,0,0,0,.024,3.766'
        transform='translate(5.341 0.714)'
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
Delete.displayName = 'IconlyVoice'
Delete.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Delete)
