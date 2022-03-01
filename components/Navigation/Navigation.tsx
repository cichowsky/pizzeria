import { useState } from 'react';
import Link from 'next/link';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { SNavLinks } from './Navigation.styles';

const navLinks = [
  { path: '/', label: 'Home', id: 1 },
  { path: '/order', label: 'Order', id: 2 },
  { path: '/contact', label: 'Contact', id: 3 },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav role="navigation" aria-label="Main menu">
      <HamburgerButton isOpen={isMenuOpen} onClick={handleClick} ariaControls="main-menu" />

      <SNavLinks isOpen={isMenuOpen} id="main-menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </SNavLinks>
    </nav>
  );
};

export default Navigation;
