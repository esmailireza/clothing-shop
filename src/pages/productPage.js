import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import * as data from "../data";
import styles from "../pages/productPage.module.css";
import SelectComponent from "../common/Select/Select";
const ProductPage = () => {
  const { name } = useParams();
  const profile = data.products.filter((profile) => profile.name === name);
  return (
    <Layout>
      {profile.map((pr) => {
        return (
          <main>
            <div
              key={pr.id}
              className={`d-flex justify-content-center ${styles.customContainer}`}
            >
              <img src={pr.image} style={{ width: "400px" }} />
              <div className={styles.textLeft}>
                <h2>{pr.name}</h2>
                <p>{pr.description}</p>
                <p className={styles.productPrice}>${pr.price}</p>
                <SelectComponent />
              </div>
            </div>
          </main>
        );
      })}
    </Layout>
  );
};

export default ProductPage;
