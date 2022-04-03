import styled from 'styled-components';
import { header } from 'styles/constants';
import { SHamburgerButton } from 'components/HamburgerButton/HamburgerButton.styles';

export const SNavLinks = styled.ul<{ isOpen: boolean }>`
  ${({ theme }) => theme.mq.mobile} {
    position: fixed;
    top: ${header.height};
    bottom: 0;
    left: 0;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-101%')});

    flex-direction: column;
    padding: ${({ theme }) => theme.layout.padding} calc(2 * ${({ theme }) => theme.layout.padding});
    font-size: ${({ theme }) => theme.font.size.m};
    background: ${({ theme: { background } }) =>
      `linear-gradient(145deg, ${background.header} 0%, ${background.header2} 100%)`};
    transition: transform 0.2s, visibility 0.2s;
    visibility: ${({ isOpen }) => !isOpen && 'hidden'};
  }

  display: flex;
  gap: ${({ theme }) => theme.layout.padding};
`;

export const SNav = styled.nav`
  ${({ theme }) => theme.mq.tablet} {
    ${SHamburgerButton} {
      display: none;
    }
  }
`;
