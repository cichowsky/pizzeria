import styled from 'styled-components';
import { header } from 'styles/constants';

export const SWrapper = styled.div`
  padding-top: ${header.height};
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding: ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
`;
