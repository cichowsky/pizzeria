import SButtonIcon from 'components/UI/ButtonIcon/ButtonIcon';
import { SHamburger } from './HamburgerButton.styles';

interface IHamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  ariaControls: string;
}

const HamburgerButton = ({ isOpen, onClick, ariaControls }: IHamburgerButtonProps) => {
  return (
    <SButtonIcon
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
    </SButtonIcon>
  );
};

export default HamburgerButton;
