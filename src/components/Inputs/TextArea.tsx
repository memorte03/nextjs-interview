import { forwardRef } from 'react';

import styles from './index.module.scss';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  id?: string;
}

const TextArea = forwardRef(
  ({ label, errorMessage, id, ...restProps }: TextAreaProps, ref: any) => {
    return (
      <div className={styles['container']}>
        <label className={styles['label']} htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          {...restProps}
          className={[styles['text-area'], styles['input']].join(' ')}
        />

        {errorMessage && (
          <span className={styles['error']}>{errorMessage}</span>
        )}
      </div>
    );
  },
);

export default TextArea;
