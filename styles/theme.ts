import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  background: {
    body: '#efefef',
    header: '#d3401f',
    header2: '#c54623',
    footer: '#111111',
    footer2: '#222222',
  },
  font: {
    color: {
      text: '#111111',
      primary: '#d3401f',
      header: '#f1f1f1',
      headerHover: '#ffffff',
      footer: '#d3d3d3',
      footerHeader: '#b7903c',
    },
    size: {
      xs: '1.4rem',
      s: '1.6rem',
      m: '1.8rem',
      l: '2.1rem',
      xl: '2.4rem',
      xxl: '3.0rem',
      xxxl: '3.6rem',
    },
  },
  mq: {
    mobile: '@media (max-width: 768px)',
    tablet: '@media (min-width: 769px)',
    desktop: '@media (min-width: 1024px)',
  },
  layout: {
    maxWidth: '1280px',
    padding: '1.6rem',
  },
};

export default theme;
