import { SHamburgerButton, SHamburger } from './HamburgerButton.styles';

interface IHamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  ariaControls: string;
}

const HamburgerButton = ({ isOpen, onClick, ariaControls }: IHamburgerButtonProps) => {
  return (
    <SHamburgerButton
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close the menu' : 'Open the menu'}
      aria-expanded={!!isOpen}
      aria-controls={ariaControls}
    >
      <SHamburger isActive={isOpen} aria-hidden>
        <span />
        <span />
        <span />
      </SHamburger>
    </SHamburgerButton>
  );
};

export default HamburgerButton;
