import styled from 'styled-components';
import SButtonIcon from 'components/UI/ButtonIcon/ButtonIcon';

export const SCartButton = styled(SButtonIcon)`
  flex-shrink: 0;
  position: relative;

  & > svg {
    max-width: 2.8rem;
  }
`;

export const SAmount = styled.span`
  position: absolute;
  top: 0.4rem;
  left: 2.6rem;

  min-width: 1.6rem;
  min-height: 1.6rem;
  padding: 0.1rem 0.4rem;

  line-height: 1;
  font-weight: 700;

  color: ${({ theme }) => theme.font.color.text};
  background-color: ${({ theme }) => theme.font.color.header};
  box-shadow: 0 0 0.2rem 0.2rem ${({ theme }) => theme.background.header};
  border-radius: 9999px;

  ${SCartButton}:hover & {
    background-color: ${({ theme }) => theme.font.color.headerHover};
  }
`;
