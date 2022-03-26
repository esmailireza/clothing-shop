import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import * as data from "../data";
import styles from "../pages/productPage.module.css";
import SelectComponent from "../common/Select/Select";
import { useCart, useCartActions } from "../providers/cartProvider";
import { toast } from "react-toastify";
import { CheckInCart } from "../utils/checkInCart";
import { BiTrash } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { useState } from "react";

const ProductPage = () => {
  const { name } = useParams();
  const profile = data.products.filter((profile) => profile.name === name);
  const cartCheck = useCart();
  const dispatch = useCartActions();
  const cartDispatch = useCartActions();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const addProductHandler = (product) => {
    /* console.log(product); */
    toast.success(`${product.name} Added to cart`, {
      position: "top-center",
      autoClose: 3000,
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const onDecrement = (item) => {
    cartDispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  const onIncrement = (item) => {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
  };
  return (
    <Layout>
      {profile.map((pr) => {
        return (
          <main>
            <div
              key={pr.id}
              className={`d-flex justify-content-center ${styles.customContainer}`}
            >
              <img src={pr.image} style={{ width: "400px" }} alt={pr.name} />
              <div className={styles.textLeft}>
                <h2>{pr.name}</h2>
                <p>{pr.description}</p>
                <p className={styles.productPrice}>${pr.price}</p>
                <SelectComponent />

                {CheckInCart(cartCheck.cart, pr) ? (
                  <InCart
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    pr={pr}
                  />
                ) : (
                  <button
                    onClick={() => addProductHandler(pr)}
                    href="#"
                    className="btn btn-primary mt-4"
                  >
                    Add To Cart
                  </button>
                )}
                <div className="mt-3 d-flex justify-content-center w-100">
                  <div className={styles.divIcon} onClick={handleClick}>
                    <i
                      class="far fa-heart"
                      className={click ? "far fa-heart" : "fa-solid fa-heart"}
                      style={{
                        fontSize: "1.5rem",
                        color: "rgb(139 139 139)",
                      }}
                    ></i>
                  </div>
                  <div className={styles.divIcon}>
                    <BiShareAlt
                      style={{
                        fontSize: "1.5rem",
                        color: "rgb(139 139 139)",
                      }}
                      className={styles.iconFavorite}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      })}
    </Layout>
  );
};

export default ProductPage;

export const InCart = ({ onDecrement, onIncrement, pr }) => {
  const cartCheck = useCart();
  const { name } = useParams();
  let filterPro = cartCheck.cart.filter((pro) => pro.name === name);
  /* console.log(filterPro);
  console.log(filterPro.map((p) => p.quantity)); 
  console.log(pr); */
  return (
    <div className="mt-4">
      <button
        onClick={() => onDecrement(pr)}
        className={`button ${
          cartCheck.cart.map((p) => p.quantity) === 1 && "trashBtn"
        }`}
      >
        {cartCheck.cart.map((p) => p.quantity) > 1 ? "-" : <BiTrash />}
      </button>
      <span className={styles.value}>{filterPro.map((p) => p.quantity)}</span>

      <button onClick={() => onIncrement(pr)} className="button increment">
        +
      </button>
    </div>
  );
};
