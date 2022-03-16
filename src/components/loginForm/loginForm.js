import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/input";
import styles from "./login.module.css";
const LoginForm = () => {
  const onSubmit = (values) => {
    console.log(values);
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
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <Input label="email" name="email" formik={formik} type="email" />
      <Input label="password" name="password" formik={formik} type="password" />
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
        <p className="text-decoration-none">Do not have an account? Sign Up</p>
      </Link>
    </form>
  );
};

export default LoginForm;
