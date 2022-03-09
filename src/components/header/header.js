import logo from "../../assets/images/amazon-logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div class="container" className={styles.customeContainer}>
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <NavLink to="/" class="navbar-brand">
              <img src={logo} width={150} />
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
              <ul class="navbar-nav mr-auto">
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

              <div class="col-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      id="basic-addon1"
                      className={styles.spanSearchCustome}
                    >
                      <MdOutlineSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    className={styles.inputSearchCustome}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <MdFavoriteBorder className={styles.iconFavorite} />

              <MdShoppingCart className={styles.iconFavorite} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
