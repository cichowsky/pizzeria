import { useState, useRef } from 'react';
import Link from 'next/link';
import useDetectOutsideClick from 'hooks/useDetectOutsideClick';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { SNav, SNavLinks } from './Navigation.styles';

const navLinks = [
  { path: '/', label: 'Home', id: 1 },
  { path: '/about-us', label: 'About us', id: 2 },
  { path: '/contact', label: 'Contact', id: 3 },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  useDetectOutsideClick(navRef, () => setIsMenuOpen(false));

  return (
    <SNav role="navigation" aria-label="Main menu" ref={navRef}>
      <HamburgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ariaControls="main-menu"
      />

      <SNavLinks isOpen={isMenuOpen} id="main-menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </SNavLinks>
    </SNav>
  );
};

export default Navigation;
