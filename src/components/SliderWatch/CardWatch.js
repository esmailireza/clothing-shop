import { Link } from "react-router-dom";
import styles from "./SliderWatch.module.css";

const CardWatch = ({ product }) => {
  return (
    <div className="col-xs-12">
      <Link
        to={`/products/${product.name}`}
        product={product}
        className={`card text-decoration-none text-reset ${styles.cardLayout}`}
        key={product.id}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`card-img-top ${styles.cardImage}`}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="font-weight-bold">$ {product.price}</span>
            {/*  <button
                     onClick={() => addProductHandler(product)} 
                    href="#"
                    className="btn btn-primary"
                  >
                     {CheckInCart(cartCheck.cart, product)
                      ? "In cart"
                      : "Add To Cart"}
                  </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardWatch;
