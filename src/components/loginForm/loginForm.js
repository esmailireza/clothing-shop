import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/input";
import styles from "./login.module.css";
import logo from "../../assets/images/amazon-logo.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const onSubmit = (values) => {
    console.log(history);
    history.push("/");
    /* axios
            .post("http://localhost:3001/users", values)
            .then((res) => res.data)
            .catch((err) => console.log(err)); */
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email format")
        .required("email is required"),

      password: Yup.string().required("password is required"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit,
  });
  return (
    <main className="d-flex flex-column">
      <Link to="/">
        <img src={logo} className={styles.logoLogin} alt="amazon" />
      </Link>
      <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
        <div className={styles.textAlign}>
          <h3>Sign-In</h3>
        </div>
        <Input label="email" name="email" formik={formik} type="email" />
        <Input
          label="password"
          name="password"
          formik={formik}
          /* type="password" */
          style={{ position: "relative" }}
          type={showPassword ? "text" : "password"}
        />
        {/* <MdVisibilityOff
          style={{
            fontSize: "1.6rem",
            position: "absolute",
             bottom: "21rem",
            left: "60rem", 
          }}
        /> */}
        <button
          type="submit"
          className={styles.button}
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link
          to="/signupPage"
          className={`text-start mt-2 text-decoration-none ${styles.headToSignup}`}
        >
          <p className="text-decoration-none">
            Do not have an account? Sign Up
          </p>
        </Link>
      </form>
    </main>
  );
};

export default LoginForm;
