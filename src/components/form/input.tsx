import { FC } from 'react';

import { FormikValues } from 'formik';
import { InputText as PrimeReactInputText } from 'primereact/inputtext';

import { FormErrors } from '@components/form-errors/form-errors';

interface InputTextProps extends FormikValues {
  id: string;
  label?: string;
  col?: string;
}

export const InputText: FC<InputTextProps> = ({
  label,
  type,
  col = 'col-12',
  mt = 'mt-2',
  id,
  errors,
  touched,
  values,
  onChange,
  onBlur,
  accept,
}) => {
  return (
    <div className={`field ${col} ${mt}`}>
      <label htmlFor="name1">{label}</label>
      <PrimeReactInputText
        type={type}
        id={id}
        name={id}
        value={values}
        onChange={onChange}
        onBlur={onBlur}
        className={touched && errors ? 'p-invalid mr-2' : undefined}
        accept={accept}
      />
      {touched && errors && <FormErrors messages={[errors]} />}
    </div>
  );
};
