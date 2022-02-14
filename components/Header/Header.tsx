import Cart from 'components/Cart/Cart';
import { SWrapper, SInner } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        <div>logo</div>
        <div>navigation</div> {/* mobile - hamburger, desktop links */}
        <Cart />
      </SInner>
    </SWrapper>
  );
};

export default Header;
