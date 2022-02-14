import CartIcon from 'public/icons/shopping_cart.svg';
import { SWrapper, SInner } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        <div>logo</div>
        <div>navigation</div> {/* mobile - hamburger, desktop links */}
        <CartIcon />
      </SInner>
    </SWrapper>
  );
};

export default Header;
