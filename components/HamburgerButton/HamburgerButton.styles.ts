import styled, { css } from 'styled-components';

const burgerWidth = '2rem';
const burgerHeight = '1.25rem';
const barThickness = '3px';

interface ISHamburgerProps {
  readonly isActive: boolean;
}

export const SHamburger = styled.span<ISHamburgerProps>`
  position: relative;
  width: ${burgerWidth};
  height: ${burgerHeight};

  & > span {
    position: absolute;
    left: 0;

    width: 100%;
    height: ${barThickness};

    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.headerText};

    transition: transform 0.2s, opacity 0.2s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: calc(50% - ${barThickness} / 2);
    }

    &:nth-child(3) {
      top: calc(100% - ${barThickness});
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & > span {
        &:nth-child(1) {
          transform: translateY(calc((${burgerHeight} - ${barThickness}) / 2)) rotate(45deg);
        }

        &:nth-child(2) {
          transform: translateX(-25%);
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(calc((${burgerHeight} - ${barThickness}) / -2)) rotate(-45deg);
        }
      }
    `}
`;
