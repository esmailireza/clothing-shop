import { useFormik } from "formik";
import Input from "../../common/input";
import * as Yup from "yup";
import styles from "./signup.module.css";
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
      password: Yup.string().required("password is required"),
      passwordConfirm: Yup.string()
        .required("passwordConfirm is required")
        .oneOf([Yup.ref("password"), null], "passwords must match"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit,
  });
  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <Input label="name" name="name" formik={formik} />
      <Input label="email" name="email" formik={formik} type="email" />
      <Input
        label="phoneNumber"
        name="phoneNumber"
        formik={formik}
        type="tel"
      />
      <Input label="password" name="password" formik={formik} type="password" />
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
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
