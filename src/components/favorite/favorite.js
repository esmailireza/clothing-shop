import { useCart, useCartActions } from "../../providers/cartProvider";
import "../../components/favorite/favorite.module.css";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "@mui/material/Button";

const Favorite = () => {
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
    <main className="container flex-wrap d-flex justify-content-between marginMainCart mb-5">
      {cartState.cart.length ? (
        cartState.cart.map((item) => {
          return (
            <section className="col-sm-6 mb-2 ">
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
            </section>
          );
        })
      ) : (
        <div className="m-auto">
          <MdOutlineFavoriteBorder className="cartEmptyIcon mt-4" />
          <h4 className="mt-4">Favorites is empty</h4>
          <Link to="/shop" className="text-decoration-none">
            <Button variant="outlined" className="my-5">
              Go to products
            </Button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Favorite;
