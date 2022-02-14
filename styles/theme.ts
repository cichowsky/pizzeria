import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    text: '#111111',
    primary: '#d3401f',
    background: '#efefef',
    headerText: '#f1f1f1',
    headerBackground: '#d3401f',
  },
  layout: {
    maxWidth: '1280px',
    padding: '1rem',
  },
  header: {
    heightSmall: '50px',
    heightBig: '100px',
  },
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
};

export default theme;
