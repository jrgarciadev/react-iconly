import mixins from '@styles/mixins'

export default {
  borderRadius: '1.375rem',
  borderRadiusButton: '1.375rem',
  fontFamily: {
    fontSans:
      'Open Sans, -apple-system, BlinkMacSystemFont,Segoe UI, Helvetica, Arial',
    fontMono:
      'Space Mono, SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
  },
  colors: {
    white: '#FFFFFF',
    primary: '#5840BB',
    accent1: '#200E32',
    accent2: '#2E353F',
    accent3: '#A3A3A3',
    accent4: '#7B8599',
    codeComponent: '#FFC064',
    codeAttr: '#E18030',
    codeAttrValue: '#9AD85A'
  },
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem',
    title: '3.6rem'
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '1080px',
    xl: '1200px'
  },
  fontw: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    short: 'all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)'
  },
  mixins
}
