import Layout from "../../layout/layout";
import * as data from "../../data";
import styles from "./shop.module.css";
import { useCart, useCartActions } from "../../providers/cartProvider";
import { CheckInCart } from "../../utils/checkInCart";
const Shop = () => {
  const cartCheck = useCart();
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    /* console.log(product); */
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout>
      <main class="container" className={styles.customeContainer}>
        <div className="row">
          <div className="d-flex flex-wrap col-sm-12">
            {data.products.map((product) => {
              return (
                <div className={`card ${styles.cardLayout}`} key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`card-img-top ${styles.cardImage}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="font-weight-bold">
                        $ {product.price}
                      </span>
                      <button
                        onClick={() => addProductHandler(product)}
                        href="#"
                        className="btn btn-primary"
                      >
                        {CheckInCart(cartCheck.cart, product)
                          ? "In cart"
                          : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Shop;
