import Layout from "../layout/layout";
import { useCart, useCartActions } from "../providers/cartProvider";
import "./cartPage.css";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartState = useCart();
  const cartDispatch = useCartActions();
  const originalTotalPrice = cartState.cart.length
    ? cartState.cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  const onIncrement = (item) => {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
  };
  const onDecrement = (item) => {
    cartDispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  return (
    <Layout>
      <main className="container d-flex justify-content-between mt-5">
        <section className="col-sm-8">
          {cartState.cart.length ? (
            cartState.cart.map((item) => {
              return (
                <div key={item.id} className="cartItem mt-4">
                  <div className="cartItemDesAndImg">
                    <img
                      src={item.image}
                      className="cartItemImage"
                      alt={item.name}
                    />
                    <div className="cartItemDescription">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <div>$ {item.price * item.quantity}</div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => onDecrement(item)}
                      className={`button ${item.quantity === 1 && "trashBtn"}`}
                    >
                      {item.quantity > 1 ? "-" : <BiTrash />}
                    </button>
                    <span /* className={styles.value} */>{item.quantity}</span>

                    <button
                      onClick={() => onIncrement(item)}
                      className="button increment"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>no item in cart!</p>
          )}
        </section>

        <section className="col-sm-4 py-4 h-50 bg-light">
          <h2>price total</h2>
          <p>subTotal: $ {originalTotalPrice}</p>
          <p>
            Product Discounts:
            <span className="text-danger">
              {" "}
              $ {Math.round(originalTotalPrice - cartState.total)}
            </span>{" "}
          </p>
          <h4>Total: $ {cartState.total}</h4>
          <button type="button" class="btn btn-primary w-100 mt-4">
            <Link to="/checkout" className="text-white text-decoration-none">
              Go to checkout
            </Link>
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
