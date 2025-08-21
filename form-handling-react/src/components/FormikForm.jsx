import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Formik values:', values);

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data);
        resetForm();
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <h2>Formik Registration Form</h2>

          <div>
            <label>Username:</label>
            <Field name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
