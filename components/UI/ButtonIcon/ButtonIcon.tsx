import styled from 'styled-components';

const SButtonIcon = styled.button`
  width: 4.8rem;
  height: 4.8rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  color: inherit;
  background: none;
  border: none;

  & > svg {
    fill: currentColor;
  }
`;

export default SButtonIcon;
