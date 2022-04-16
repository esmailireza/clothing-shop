import Layout from "../../layout/layout";
import * as data from "../../data";
import styles from "./shop.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Shop = () => {
  return (
    <Layout>
      <div className={styles.customeContainer}>
        {data.products.map((product) => {
          /* console.log(data); */
          return (
            <Link
              to={`/products/${product.name}`}
              product={product}
              className={`card text-decoration-none text-dark ${styles.cardLayout}`}
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
                  <span className="font-weight-bold">price</span>
                  <span className="font-weight-bold">$ {product.price}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Shop;
