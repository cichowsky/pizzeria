import { useState } from 'react';
import SButtonIcon from 'components/UI/ButtonIcon/ButtonIcon';
import { SHamburger } from './HamburgerButton.styles';

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <SButtonIcon type="button" onClick={handleClick}>
      <SHamburger isActive={isOpen}>
        <span />
        <span />
        <span />
      </SHamburger>
    </SButtonIcon>
  );
};

export default HamburgerButton;
