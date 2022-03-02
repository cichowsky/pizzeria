import styled from 'styled-components';
import { header } from 'styles/constants';
import { SHamburgerButton } from 'components/HamburgerButton/HamburgerButton.styles';

export const SNavLinks = styled.ul<{ isOpen: boolean }>`
  @media (max-width: 640px) {
    position: fixed;
    top: ${header.height};
    bottom: 0;
    left: 0;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-101%')});

    flex-direction: column;
    padding: ${({ theme }) => theme.layout.padding} calc(2 * ${({ theme }) => theme.layout.padding});
    font-size: 1.125rem;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    transition: transform 0.2s, visibility 0.2s;
    visibility: ${({ isOpen }) => !isOpen && 'hidden'};
  }

  display: flex;
  gap: ${({ theme }) => theme.layout.padding};
`;

export const SNav = styled.nav`
  @media (min-width: 641px) {
    ${SHamburgerButton} {
      display: none;
    }
  }
`;
