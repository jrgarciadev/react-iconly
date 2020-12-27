import { sizes, strokes } from './constants'

export const isBrowser = typeof window !== `undefined`

export const getSize = (size) => {
  if (Number.isInteger(size)) {
    return `${size}px`
  }
  return size && sizes[size] ? sizes[size] : null
}

export const getStroke = (stroke) => {
  return stroke && strokes[stroke] ? strokes[stroke] : null
}

export const getOpacity = (primaryColor, secondaryColor) => {
  if (!secondaryColor) {
    return '0.4'
  }
  return primaryColor === secondaryColor ? '0.4' : '1'
}

export const getThemeProp = (prop, theme) => {
  return theme && theme[prop] ? theme[prop] : null
}
