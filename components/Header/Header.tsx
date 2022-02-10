import { SWrapper, SInner } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        <div>logo</div>
        <div>navigation</div> {/* mobile - hamburger, desktop links */}
        <div>order</div> {/* button cart icon */}
      </SInner>
    </SWrapper>
  );
};

export default Header;
