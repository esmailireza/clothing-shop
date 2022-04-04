import { useFormik } from "formik";
import Input from "../../common/input";
import * as Yup from "yup";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/amazon-logo.png";

const onSubmit = (values) => {
  console.log(values);
  /* axios
      .post("http://localhost:3001/users", values)
      .then((res) => res.data)
      .catch((err) => console.log(err)); */
};
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("name is required")
        .min(3, "Name length is not valid"),
      email: Yup.string()
        .email("invalid email format")
        .required("email is required"),
      phoneNumber: Yup.string()
        .required("phone Number is required")
        .matches(/^[0-9]{11}$/, "invalid phone number")
        .nullable(),
      password: Yup.string()
        .required("password is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          `Must contains 8 Characters, one uppercase, one lowercase, one number and one special case character`
        ),
      passwordConfirm: Yup.string()
        .required("passwordConfirm is required")
        .oneOf([Yup.ref("password"), null], "passwords must match"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit,
  });
  return (
    <div className="container">
      <main
        className={`col-sm-12 d-flex justify-content-center align-items-center ${styles.mainHeight}`}
      >
        <div className="col-sm-5 col-sm-5 d-flex flex-column">
          <Link to="/">
            <img src={logo} className={styles.logoSignup} alt="amazon" />
          </Link>
          <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <div className={styles.textAlign}>
              <h3>Create account</h3>
            </div>
            <Input label="name" name="name" formik={formik} />
            <Input label="email" name="email" formik={formik} type="email" />
            {/* <Input
              label="phoneNumber"
              name="phoneNumber"
              formik={formik}
              type="tel"
            /> */}
            <Input
              label="password"
              name="password"
              formik={formik}
              type="password"
            />
            <Input
              label="passwordConfirm"
              name="passwordConfirm"
              formik={formik}
              type="password"
            />
            <button
              type="submit"
              className={styles.button}
              disabled={!formik.isValid}
            >
              Signup
            </button>
            <Link
              to="/loginPage"
              className={`text-start mt-2 text-decoration-none ${styles.headToLogin}`}
            >
              <p className="text-decoration-none">
                Already have an account? Sign in
              </p>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignupForm;
