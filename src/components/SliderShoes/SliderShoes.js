import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./SliderShoes.module.css";
import * as data from "../../data";
import { Link } from "react-router-dom";

const SliderShoes = () => {
  const filterProducts = data.products.filter((p) => p.type === "shoes");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container-fluid bg-light pt-4 pb-4 my-5">
      <Carousel
        responsive={responsive}
        className={`${styles.customeContainer} card-deck`}
      >
        {filterProducts.map((product) => {
          console.log(product.name);
          return (
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
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderShoes;
