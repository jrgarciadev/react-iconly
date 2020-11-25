import common from './common'

const darkTheme = {
  ...common,
  bg: {
    default: '#0A1A2F',
    defaultLight: '#112536',
    reverse: '#F4F4F4'
  },
  text: {
    default: '#F4F4F4',
    reverse: '#0A1A2F',
    accent: '#a3a8c3'
  },
  shadows: {
    default: '0 10px 30px -10px rgba(32, 14, 50, 0.16)',
    small: '0 10px 30px -10px rgba(32, 14, 50, 0.16)',
    medium: '0 20px 30px -15px  rgba(32, 14, 50, 0.16)',
    large: '0 30px 60px rgba(32, 14, 50, 0.16)'
  }
}

export default darkTheme
