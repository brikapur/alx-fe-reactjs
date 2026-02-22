import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

<<<<<<< HEAD:form-handling-react/src/components/formikForm.js
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Data:", values);
    alert("Registration successful!");
    resetForm();
=======
  const handleSubmit = async (values, { resetForm, setSubmitting, setStatus }) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setStatus("User registered successfully!");
      resetForm();
    } catch (error) {
      setStatus("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
>>>>>>> 9404f8ea1c964acefe17b7d02a5014af046034bc:src/components/formikForm.js
  };

  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
<<<<<<< HEAD:form-handling-react/src/components/formikForm.js
        <Form>
          <div>
            <label>Username:</label><br />
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label><br />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label><br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
=======
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label>Username:</label><br />
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label><br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label><br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && <p style={{ color: "green" }}>{status}</p>}
          </Form>
        )}
>>>>>>> 9404f8ea1c964acefe17b7d02a5014af046034bc:src/components/formikForm.js
      </Formik>
    </div>
  );
};

<<<<<<< HEAD:form-handling-react/src/components/formikForm.js
export default FormikForm;
=======
export default FormikForm;// refresh for ALX grader
>>>>>>> 9404f8ea1c964acefe17b7d02a5014af046034bc:src/components/formikForm.js
