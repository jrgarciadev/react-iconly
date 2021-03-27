import mixins from '@styles/mixins'

export default {
  borderRadius: '1.375rem',
  borderRadiusButton: '1.375rem',
  background: 'var(--colors-background)',
  foreground: 'var(--colors-foreground)',
  radius: {
    sm: '0.375rem',
    md: '1.375rem',
    lg: '3rem'
  },
  fontFamily: {
    fontSans:
      'Open Sans, -apple-system, BlinkMacSystemFont,Segoe UI, Helvetica, Arial',
    fontMono:
      'Roboto Mono, SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
  },
  colors: {
    white: '#FFFFFF',
    primary: '#5840BB',
    accent1: '#200E32',
    accent2: '#2E353F',
    accent3: '#A3A3A3',
    accent4: '#7B8599',
    accent5: '#222222',
    codeComponent: '#FFC064',
    codeAttr: '#E18030',
    codeAttrValue: '#9AD85A'
  },
  accents: {
    a1: 'var(--colors-accents-a1)',
    a2: 'var(--colors-accents-a2)',
    a3: 'var(--colors-accents-a3)',
    a4: 'var(--colors-accents-a4)',
    a5: 'var(--colors-accents-a5)',
    a6: 'var(--colors-accents-a6)',
    a7: 'var(--colors-accents-a7)',
    a8: 'var(--colors-accents-a8)'
  },
  layout: {
    gap: '4rem',
    gapHalf: '2rem',
    gapQuarter: '1rem'
  },
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem',
    title: '5.6rem'
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
    bold: 700,
    extrabold: 800
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    short: 'all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)'
  },
  bg: {
    default: 'var(--colors-background)',
    defaultLight: '#112536',
    reverse: 'var(--colors-reverse)'
  },
  text: {
    default: 'var(--colors-text-default)',
    reverse: 'var(--colors-text-reverse)',
    accent: 'var(--colors-text-accent)'
  },
  shadows: {
    default: 'var(--shadows-default)',
    small: 'var(--shadows-small)',
    medium: 'var(--shadows-medium)',
    large: 'var(--shadows-large)'
  },
  mixins
}
