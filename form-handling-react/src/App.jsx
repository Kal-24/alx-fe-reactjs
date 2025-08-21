import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
import React from 'react';
import FormikForm from './components/formikForm';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <FormikForm />
    </div>
  );
}
