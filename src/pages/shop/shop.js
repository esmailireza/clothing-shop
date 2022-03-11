import Layout from "../../layout/layout";
import * as data from "../../data";
import styles from "./shop.module.css";
const Shop = () => {
  return (
    <Layout>
      <main class="container" className={styles.customeContainer}>
        <div className="row">
          <div className="d-flex flex-wrap col-sm-12">
            {data.products.map((product) => {
              return (
                <div className={`card ${styles.cardLayout}`}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.name}
                    className={styles.cardImage}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="font-weight-bold">
                        $ {product.price}
                      </span>
                      <a href="#" class="btn btn-primary">
                        Add To Cart
                      </a>
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
