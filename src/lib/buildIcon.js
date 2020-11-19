import React from 'react'

// export const buildIcons = (icons) => {
//     const
//     return (
//         {icons.map((icon, i) => {
//             {}
//         })}
//     )
// }

const buildIcon = (groupTransform = '', paths = []) => {
  return (
    <g transform={groupTransform}>
      {paths.map((path, i) => (
        <path
          key={i}
          d={path.d}
          transform={path.transform || ''}
          fill={path.fill}
        />
      ))}
    </g>
  )
}

export default buildIcon
