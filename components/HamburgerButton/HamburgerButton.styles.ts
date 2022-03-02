import styled, { css } from 'styled-components';
import SButtonIcon from 'components/UI/ButtonIcon/ButtonIcon';
import { hamburger } from 'styles/constants';

export const SHamburgerButton = styled(SButtonIcon)``;

interface ISHamburgerProps {
  readonly isActive: boolean;
}

export const SHamburger = styled.span<ISHamburgerProps>`
  position: relative;
  width: ${hamburger.width};
  height: ${hamburger.height};

  & > span {
    position: absolute;
    left: 0;

    width: 100%;
    height: ${hamburger.barThickness};

    border-radius: 9999px;
    background-color: currentColor;

    transition: transform 0.2s, opacity 0.2s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: calc(50% - ${hamburger.barThickness} / 2);
    }

    &:nth-child(3) {
      top: calc(100% - ${hamburger.barThickness});
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & > span {
        &:nth-child(1) {
          transform: translateY(calc((${hamburger.height} - ${hamburger.barThickness}) / 2))
            rotate(45deg);
        }

        &:nth-child(2) {
          transform: translateX(-25%);
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(calc((${hamburger.height} - ${hamburger.barThickness}) / -2))
            rotate(-45deg);
        }
      }
    `}
`;
