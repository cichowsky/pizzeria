import styled from 'styled-components';

export const SWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--headerHeight);
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 50;
`;

export const SInner = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding: 0 ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
