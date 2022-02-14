import CartIcon from 'public/icons/shopping_cart.svg';
import { SCartButton, SAmount } from './Cart.styles';

const Cart = () => {
  const amount = 0;

  return (
    <SCartButton type="button">
      <CartIcon />
      <SAmount>{amount <= 99 ? amount : '99↑'}</SAmount>
    </SCartButton>
  );
};

export default Cart;
