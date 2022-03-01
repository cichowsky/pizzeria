import styled from 'styled-components';
import { header } from 'styles/constants';

export const SNavLinks = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: ${header.height};
  bottom: 0;
  left: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-101%')});
  width: 50%;

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.layout.padding};
  gap: ${({ theme }) => theme.layout.padding};
  font-size: 1.125rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  transition: transform 0.2s, visibility 0.2s;
  visibility: ${({ isOpen }) => !isOpen && 'hidden'};
`;
