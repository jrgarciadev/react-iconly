import common from './common'

const lightTheme = {
  ...common,
  bg: {
    default: '#FFFFFF',
    defaultLight: '#F2F2F2',
    reverse: '#200E32'
  },
  text: {
    default: '#200E32',
    reverse: '#FFFFFF',
    accent: '#777777'
  },

  shadows: {
    default: '0 10px 30px -10px rgba(32, 14, 50, 0.16)',
    small: '0 10px 30px -10px rgba(32, 14, 50, 0.16)',
    medium: '4px 4px 30px -15px  rgba(32, 14, 50, 0.4)',
    large: '0 30px 60px rgba(32, 14, 50, 0.16)'
  }
}

export default lightTheme
