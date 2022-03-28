import { Link } from "react-router-dom";
import category1 from "../../assets/images/categories/category-1.jpg";
import category2 from "../../assets/images/categories/category-2.jpg";
import category3 from "../../assets/images/categories/category-3.jpg";
import styles from "./categories.module.css";
const Categories = () => {
  return (
    <div className={`my-5 ${styles.customeContainer}`}>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <Link to="/shop" className="text-decoration-none text-reset">
            <div className={`card ${styles.categoryHover}`}>
              <img src={category1} class="card-img-top" alt="..." />
              <div className={`position-absolute ${styles.descCategory}`}>
                <h5 class="card-title font-weight-bolder text-left">Women</h5>
                <p class="card-text text-left">Spring 2022</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col mb-4">
          <Link to="/shop" className="text-decoration-none text-reset">
            <div className={`card ${styles.categoryHover}`}>
              <img src={category2} class="card-img-top" alt="..." />
              <div className={`position-absolute ${styles.descCategory}`}>
                <h5 class="card-title font-weight-bolder text-left">Man</h5>
                <p class="card-text text-left">Spring 2022</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col mb-4">
          <Link to="/shop" className="text-decoration-none text-reset">
            <div className={`card position-relative ${styles.categoryHover}`}>
              <img src={category3} class="card-img-top" alt="..." />
              <div className={`position-absolute ${styles.descCategory}`}>
                <h5 class="card-title font-weight-bolder text-left">
                  Accessories
                </h5>
                <p class="card-text text-left">New Trend</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
