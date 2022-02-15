import styled from 'styled-components';

const SButtonIcon = styled.button`
  width: 3rem;
  height: 3rem;

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
