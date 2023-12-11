import { forwardRef } from 'react';

import styles from './index.module.scss';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  element?: 'input' | 'textarea';
}
const TextInput = forwardRef(
  (
    { label, type, errorMessage, id, ...restProps }: TextInputProps,
    ref: any,
  ) => {
    return (
      <div className={styles['container']}>
        <label className={styles['label']} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          type={type}
          {...restProps}
          className={styles['input']}
        />

        {errorMessage && (
          <span className={styles['error']}>{errorMessage}</span>
        )}
      </div>
    );
  },
);

export default TextInput;
