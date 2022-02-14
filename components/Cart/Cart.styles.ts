import styled from 'styled-components';

export const SCartButton = styled.button`
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  color: inherit;
  background: none;
  border: none;

  cursor: pointer;

  & > svg {
    max-width: 1.75rem;
    fill: currentColor;
  }
`;

export const SAmount = styled.span`
  position: absolute;
  top: 0.25rem;
  left: 1.625rem;

  min-width: 1rem;
  min-height: 1rem;
  padding: 1px 4px;

  line-height: 1;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.headerText};
  box-shadow: 0 0 0.125rem 0.125rem ${({ theme }) => theme.colors.headerBackground};
  border-radius: 9999px;
`;
