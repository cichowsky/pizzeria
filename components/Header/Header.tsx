import Cart from 'components/Cart/Cart';
import Navigation from 'components/Navigation/Navigation';
import Link from 'next/link';
import { SWrapper, SInner, SGroup } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        <Navigation />

        <SGroup>
          <Cart />
          <Link href="/auth">
            <a>Log in / Sign up</a>
          </Link>
        </SGroup>
      </SInner>
    </SWrapper>
  );
};

export default Header;
