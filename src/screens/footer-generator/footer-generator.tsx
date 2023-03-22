import { Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from '@components/form/input';
import { useNavigate } from 'react-router';

export interface Props {
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
}

export const FooterGenerator = () => {
  const navigate = useNavigate();
  const initialValue: Props = {
    name: '',
    position: '',
    phoneNumber: '',
    email: '',
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        localStorage.setItem('customValue', JSON.stringify(values));
        navigate('/footer');
      }}
    >
      {({ values, handleChange }) => (
        <div className="flex justify-content-center min-h-screen align-items-center">
          <div className="card w-full sm:max-w-25rem" style={{ minHeight: '300px' }}>
            <h5 className="text-center">Footer Generator</h5>
            <Form className="p-fluid grid formgrid">
              <InputText
                id="name"
                name="name"
                label="Full name"
                value={values.name}
                onChange={handleChange}
              />
              <InputText
                id="position"
                name="position"
                label="Position"
                value={values.position}
                onChange={handleChange}
              />
              <InputText
                id="phoneNumber"
                name="phoneNumber"
                label="Phone number"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <InputText
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
              />
              <Button type="submit" label="Generate footer" className="mt-2 ml-2 mr-2" />
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
