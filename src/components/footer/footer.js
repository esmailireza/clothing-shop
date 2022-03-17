import styles from "./footer.module.css";
import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles({
  /*  buttonStyle: {
    backgroundColor: "#717fe0",
    borderRadius: "25px",
    marginTop: "35px",
    marginBottom: "1px",
  }, */
});
const Footer = () => {
  /*  const classes = useStyles(); */
  return (
    <footer className={`container-fluid py-4 ${styles.bgFooter} }`}>
      <div className="row">
        <div
          className={`container ${styles.customeContainer} d-flex justify-content-between`}
        >
          <section className="col-sm-3">
            <h4 className={`text-white ${styles.titleList}`}>CATEGORIES</h4>
            <ul className={styles.colorList}>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Shoes</a>
              </li>
              <li>
                <a>Watches</a>
              </li>
            </ul>
          </section>
          <section className="col-sm-3">
            <h4 className={`text-white ${styles.titleList}`}>HELP</h4>
            <ul className={styles.colorList}>
              <li>
                <a>Track Order</a>
              </li>
              <li>
                <a>Returns</a>
              </li>
              <li>
                <a>Shipping</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
          </section>
          <section className="col-sm-3">
            <h4 className={`text-white ${styles.titleList}`}>GET IN TOUCH</h4>
            <p className={styles.thirdSectionParagraph}>
              Any questions? Let us know in store at
              <br /> 8th floor, 379 Hudson St, New York, NY <br />
              10018 or call us on (+1) 96 716 6879
            </p>
            <ul className={`d-flex ${styles.colorList}`}>
              <li>
                <FaFacebookSquare
                  style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                />
              </li>
              <li>
                <FaInstagram style={{ fontSize: "1.4rem", margin: "0.6rem" }} />
              </li>
              <li>
                <FaLinkedin style={{ fontSize: "1.4rem", margin: "0.6rem" }} />
              </li>
              <li>
                <FaTwitter style={{ fontSize: "1.4rem", margin: "0.6rem" }} />
              </li>
            </ul>
          </section>
          <section className="col-sm-3">
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
        <img src={iconPayOne} />
        <img src={iconPayTwo} />
        <img src={iconPayThree} />
        <img src={iconPayFour} />
        <img src={iconPayFive} />
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
