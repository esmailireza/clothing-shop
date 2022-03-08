import logo from "../../assets/images/amazon-logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div class="container" className={styles.customeContainer}>
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand">
              <img src={logo} width={150} />
            </a>
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
                <li class="nav-item active">
                  <a class="nav-link text-dark">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark">Shop</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item">Action</a>
                    <a class="dropdown-item">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark">Contact</a>
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
