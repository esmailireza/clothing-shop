import logo from "../../assets/images/amazon-logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../providers/cartProvider";
import SearchAutocomplete from "../searchBoxResult/SearchAutocomplete";

const Header = () => {
  const cartLength = useCart();
  return (
    <div class="container" className={styles.customeContainer}>
      <div className={`row ${styles.responsiveHeader}`}>
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <NavLink to="/" class="navbar-brand">
              <img
                src={logo}
                width={150}
                alt="logo"
                className={styles.imageLogoResponsive}
              />
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto col-sm-6">
                <li>
                  <NavLink
                    to="/"
                    className={styles.linkNav}
                    activeClassName={styles.activeLink}
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={styles.linkNav}
                    activeClassName={styles.activeLink}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={styles.linkNav}
                    activeClassName={styles.activeLink}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <div class="input-group">
                <div class="input-group-prepend d-flex justify-content-center align-items-center">
                  <span
                    class="input-group-text"
                    id="basic-addon1"
                    className={styles.spanSearchCustome}
                  >
                    <MdOutlineSearch />
                  </span>
                  <SearchAutocomplete />
                </div>
              </div>
            </div>
            <div className="col-sm-2 d-flex justify-content-center">
              <NavLink
                to="/loginPage"
                className={`text-reset ${styles.divIcon}`}
              >
                <MdLogin className={styles.iconFavorite} />
              </NavLink>
              <NavLink
                to="/favorite"
                className={`text-reset ${styles.divIcon}`}
              >
                <MdFavoriteBorder className={styles.iconFavorite} />
              </NavLink>
              <NavLink to="/cart" className={`text-reset ${styles.divIcon}`}>
                <div className={styles.iconShoppingCartSection}>
                  <MdShoppingCart className={styles.iconFavorite} />
                  <span className={styles.lengthProduct}>
                    {cartLength.cart.length}
                  </span>
                </div>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
