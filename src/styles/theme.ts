export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    primary: '2px solid #EAEAEA',
    radius: {
      xsmall: '0.5rem',
      small: '0.625rem',
      smallHalf: '1rem',
      medium: '1.5rem',
      large: '2.5rem',
      full: '100%'
    }
  },

  sizes: {
    smallest: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xlarge: '2.6rem',
    xxlarge: '3.2rem'
  },
  font: {
    family: "'Nunito Sans', sans-serif",
    semiRegular: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    sizes: {
      xsmall: '0.875rem',
      small: '1rem',
      medium: '1.5rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      sTitle: '3.8rem',
      Title: '5.0rem'
    }
  },
  colors: {
    primary: '#E4672E',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#585858',
    darkGray: '#2E2E2E',
    neutral: '#EBEBEB',
    background: '#EEEEEE',
  },
  spacings: {
    xxxsmall: '0.6rem',
    xxsmall: '0.8rem',
    xsmallbtn: '0.9rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  screen: {
    giant: '1536px',
    huge: '1170px',
    large: '1024px',
    medium: '768px',
    small: '375px'
  }
} as const
