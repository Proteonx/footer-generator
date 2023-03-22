import { FC } from 'react';

import { FormikValues } from 'formik';
import { InputText as PrimeReactInputText } from 'primereact/inputtext';

import { FormErrors } from '@components/form-errors/form-errors';

interface InputTextProps extends FormikValues {
  id: string;
  label?: string;
  col?: string;
  required?: boolean;
}

export const InputText: FC<InputTextProps> = ({
  label,
  type,
  col = 'col-12',
  mt = 'mt-2',
  id,
  required = false,
  errors,
  touched,
  values,
  onChange,
  onBlur,
  keyfilter,
  accept,
}) => {
  return (
    <div className={`field ${col} ${mt}`}>
      <span className="p-float-label">
        <PrimeReactInputText
          type={type}
          id={id}
          name={id}
          value={values}
          onChange={onChange}
          onBlur={onBlur}
          className={touched && errors ? 'p-invalid mr-2' : undefined}
          keyfilter={keyfilter}
          accept={accept}
        />
        {label && (
          <label htmlFor={id}>
            {label}
            {required && '*'}
          </label>
        )}
      </span>
      {touched && errors && <FormErrors messages={[errors]} />}
    </div>
  );
};
