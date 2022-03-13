import Layout from "../layout/layout";
import { useCart } from "../providers/cartProvider";

const CartPage = () => {
  const cartState = useCart();

  return (
    <Layout>
      <main>
        {cartState.cart.length ? cartState.cart.map() : <p>no item in cart!</p>}
      </main>
    </Layout>
  );
};

export default CartPage;
