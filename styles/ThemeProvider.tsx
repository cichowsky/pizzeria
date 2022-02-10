import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
