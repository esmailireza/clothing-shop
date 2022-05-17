import styles from "./footer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import iconPayOne from "../../assets/images/icons/icon-pay-01.png";
import iconPayTwo from "../../assets/images/icons/icon-pay-02.png";
import iconPayThree from "../../assets/images/icons/icon-pay-03.png";
import iconPayFour from "../../assets/images/icons/icon-pay-04.png";
import iconPayFive from "../../assets/images/icons/icon-pay-05.png";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  /*  const classes = useStyles(); */
  return (
    <footer className={`container-fluid py-4 ${styles.bgFooter} }`}>
      <div className="row">
        <div
          className={`container ${styles.customeContainer} d-flex justify-content-between flex-wrap`}
        >
          <section className=" col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>CATEGORIES</h4>
            <ul className={styles.colorList}>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Watches
                </Link>
              </li>
            </ul>
          </section>
          <section className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>HELP</h4>
            <ul className={styles.colorList}>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-reset text-decoration-none ${styles.item}`}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </section>
          <section className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>GET IN TOUCH</h4>
            <p className={styles.thirdSectionParagraph}>
              Any questions? Let us know in store at
              <br /> 8th floor, 379 Hudson St, New York, NY <br />
              10018 or call us on (+1) 96 716 6879
            </p>
            <ul className={`d-flex ${styles.colorList}`}>
              <li>
                <FaFacebookSquare
                  className={styles.item}
                  style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                />
              </li>
              <li>
                <FaInstagram
                  className={styles.item}
                  style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                />
              </li>
              <li>
                <FaLinkedin
                  className={styles.item}
                  style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                />
              </li>
              <li>
                <FaTwitter
                  className={styles.item}
                  style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                />
              </li>
            </ul>
          </section>
          <section className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>NEWSLETTER</h4>
            <TextField
              id="standard-textarea"
              label="Email"
              InputLabelProps={{ style: { color: "#b2b2b2" } }}
              inputProps={{
                style: {
                  color: "#b2b2b2",
                },
              }}
              fullWidth
              placeholder="email@example.com"
              multiline
              variant="standard"
            />
            <Button
              style={{ marginTop: "35px", borderRadius: "25px" }}
              /* className={classes.buttonStyle} */
              fullWidth
              variant="contained"
              color="primary"
            >
              Subscribe
            </Button>
          </section>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <img src={iconPayOne} alt="PayPal" />
        <img src={iconPayTwo} alt="VISA" />
        <img src={iconPayThree} alt="pay3" />
        <img src={iconPayFour} alt="pay4" />
        <img src={iconPayFive} alt="pay5" />
      </div>
      <div
        /* className={classes.TextDifferentColor} */
        style={{ textAlign: "center", paddingTop: "20px", color: "#b2b2b2" }}
      >
        Copyright ©2022 All rights reserved | Developed By
        <span className="text-primary"> Reza Esmaili</span>
      </div>
    </footer>
  );
};

export default Footer;
