import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Folder = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(2 2)'>
      <path
        d='M13.75,20H6.24C2.391,20,0,17.606,0,13.75V6.241C0,2.1,1.84,0,5.47,0H7.081A2.956,2.956,0,0,1,9.42,1.15L10.3,2.32a1.472,1.472,0,0,0,1.15.56h3.07a5.446,5.446,0,0,1,4,1.361A6.36,6.36,0,0,1,20,8.89v4.87a6.278,6.278,0,0,1-1.674,4.568A6.3,6.3,0,0,1,13.75,20ZM5.37,11.79a.743.743,0,0,0-.751.751.751.751,0,0,0,.751.75h9.26a.746.746,0,0,0,.74-.75.737.737,0,0,0-.74-.751Z'
        transform='translate(0 0)'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 2)'>
      <path
        d='M14.884,3.115H11.941a2.429,2.429,0,0,1-1.894-.887L9.078.888A2.367,2.367,0,0,0,7.193,0H5.113C1.378,0,0,2.192,0,5.919V9.947c0,.443,20,.442,20,0V8.776C20.015,5.049,18.672,3.115,14.884,3.115Z'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M14.367,16.9h0c-.1,0-.207,0-.309-.008H5.931c-.1.005-.2.008-.307.008a6.017,6.017,0,0,1-4.068-1.578,4.487,4.487,0,0,1-.667-.887,5.8,5.8,0,0,1-.782-2.183A8.148,8.148,0,0,1,0,10.93V5.677A12.144,12.144,0,0,1,.071,4.363c.01-.076.025-.151.04-.224a1.894,1.894,0,0,0,.049-.37A5.619,5.619,0,0,1,.649,2.252C1.353.747,2.808.015,5.095.015h9.78c.133-.01.269-.016.4-.016A5.241,5.241,0,0,1,18.5,1.116a2.78,2.78,0,0,1,.329.329,3.935,3.935,0,0,1,.729,1.269A8.51,8.51,0,0,1,20,5.677V10.93a9.441,9.441,0,0,1-.1,1.322,5.961,5.961,0,0,1-.8,2.183,4.445,4.445,0,0,1-.676.887A5.983,5.983,0,0,1,14.367,16.9Zm-9.4-8.11a.825.825,0,1,0,0,1.651H15.09a.826.826,0,0,0,.825-.8.742.742,0,0,0-.177-.533.788.788,0,0,0-.623-.319Z'
        transform='translate(0 3.099)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(1.5 1.5)'>
      <path
        d='M19.169,13.482c0,3.578-2.109,5.687-5.687,5.687H5.7c-3.587,0-5.7-2.109-5.7-5.687v-7.8C0,2.109,1.314,0,4.893,0h2A2.282,2.282,0,0,1,8.717.913L9.63,2.127a2.291,2.291,0,0,0,1.826.913h2.83c3.587,0,4.911,1.826,4.911,5.477Z'
        transform='translate(0.776 0.776)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.456H9.593'
        transform='translate(5.559 12.533)'
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
        d='M19.235,10.677A.765.765,0,0,0,20,9.912V8.892c0-4.046-1.8-6.016-5.495-6.016H11.78a1.424,1.424,0,0,1-1.134-.554l-.879-1.17A2.989,2.989,0,0,0,7.4,0H5.486C1.846,0,0,2.1,0,6.253v7.5C0,17.608,2.391,20,6.251,20h7.49c3.851,0,6.251-2.392,6.251-6.245a.774.774,0,0,0-1.538,0c0,3.034-1.67,4.714-4.712,4.714h-7.5C3.2,18.47,1.53,16.8,1.53,13.755v-.73H13.837a.765.765,0,0,0,0-1.53H1.53V6.218C1.53,2.911,2.708,1.5,5.477,1.5H7.411a1.468,1.468,0,0,1,1.134.563l.879,1.161A2.962,2.962,0,0,0,11.78,4.4H14.5c2.857,0,3.965,1.275,3.965,4.494v1.02a.765.765,0,0,0,.774.765Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 1.5)'>
      <path
        d='M19.169,13.482c0,3.578-2.109,5.687-5.687,5.687H5.7c-3.587,0-5.7-2.109-5.7-5.687v-7.8C0,2.109,1.314,0,4.893,0h2A2.282,2.282,0,0,1,8.717.913L9.63,2.127a2.291,2.291,0,0,0,1.826.913h2.83c3.587,0,4.911,1.826,4.911,5.477Z'
        transform='translate(0.776 0.776)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,.456H9.593'
        transform='translate(5.559 12.533)'
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
        d='M0,.476H9.593'
        transform='translate(4.806 11.598)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,5.3C0,2.856,1.25.759,3.622.273a8.088,8.088,0,0,1,5.67.489c1.5.808,1.069,2,2.608,2.875s4.017-.44,5.635,1.306c1.694,1.828,1.685,4.633,1.685,6.422,0,6.8-3.807,7.335-9.61,7.335S0,18.229,0,11.364Z'
        transform='translate(0 0)'
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
Folder.displayName = 'IconlyFolder'
Folder.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Folder)
