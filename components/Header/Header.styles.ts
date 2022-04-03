import styled from 'styled-components';
import { header } from 'styles/constants';

export const SWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${header.height};
  color: ${({ theme }) => theme.font.color.header};
  background: ${({ theme: { background } }) =>
    `linear-gradient(145deg, ${background.header} 0%, ${background.header2} 100%)`};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 50;

  a:hover,
  button:hover {
    color: ${({ theme }) => theme.font.color.headerHover};
  }
`;

export const SInner = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.layout.padding};
  align-items: center;
  padding: 0 ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
`;

export const SGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
