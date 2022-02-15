import styled from 'styled-components';
import SButtonIcon from 'components/UI/ButtonIcon/ButtonIcon';

export const SCartButton = styled(SButtonIcon)`
  flex-shrink: 0;
  position: relative;

  & > svg {
    max-width: 1.75rem;
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
