import styled from 'styled-components';

export const SWrapper = styled.div`
  padding-top: var(--headerHeight);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 640px) {
    --headerHeight: ${({ theme }) => theme.header.heightBig};
  }
`;

export const SContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding: ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
`;
