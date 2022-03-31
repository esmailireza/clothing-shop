import styles from "./contact.module.css";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
const Contact = () => {
  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.wrapperSection}`}
    >
      <div className="col-sm-6">
        <form className={styles.formBorder} onClick={(e) => e.preventDefault()}>
          <div class="form-group">
            <h4 className="text-left pb-3 font-weight-bold">
              Stay in touch with us
            </h4>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Comment</label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              style={{ resize: "none", height: "7rem" }}
            />
          </div>
          <button type="submit" class="btn btn-primary d-block w-100">
            Submit
          </button>
        </form>
      </div>
      <div className="col-sm-6">
        <div className={styles.rightSection}>
          <div className="d-flex align-items-center">
            <MdLocationOn
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.4rem",
                color: "#ed9720",
              }}
            />
            <h5 className={styles.titleSubSection}>Address</h5>
          </div>
          <p className={styles.textSubSection}>
            The Amazon Corporate Headquarters address is 410 Terry Ave N,
            Seattle 98109, WA.
          </p>
          <div className="d-flex align-items-center mt-4">
            <MdPhone
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.4rem",
                color: "#ed9720",
              }}
            />
            <h5 className={styles.titleSubSection}>Lets Talk</h5>
          </div>
          <p className={styles.textSubSection}>+1 888-280-4331</p>
          <div className="d-flex align-items-center mt-4">
            <MdEmail
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.4rem",
                color: "#ed9720",
              }}
            />
            <h5 className={styles.titleSubSection}>Sale Support</h5>
          </div>
          <p className={styles.textSubSection}>cis@amazon.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
