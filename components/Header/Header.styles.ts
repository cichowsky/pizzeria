import styled from 'styled-components';

export const SWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--headerHeight);
  color: ${({ theme }) => theme.colors.headerText};
  background-color: ${({ theme }) => theme.colors.headerBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 50;
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
