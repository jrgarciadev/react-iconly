import { sizes, strokes } from './constants'

export const getSize = (size) => {
  if (Number.isInteger(size)) {
    return `${size}px`
  }
  return size && sizes[size] ? sizes[size] : '24px'
}

export const getStroke = (stroke) => {
  return stroke && strokes[stroke] ? strokes[stroke] : '1.5px'
}

export const getOpacity = (primaryColor, secondaryColor) => {
  if (!secondaryColor) {
    return '0.4'
  }
  return primaryColor === secondaryColor ? '0.4' : '1'
}
