import { FieldProps } from "formik";
import React, { memo, InputHTMLAttributes } from "react";

type Props = FieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
  };

const FormikInput = ({
  id,
  label,
  field,
  form: { touched, errors },
  ...props
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8
      }}
    >
      <label htmlFor={id}>{`${label}: `}</label>
      <div>
        <input data-testid={`txt_${field.name}`} type="text" id={id} {...field} {...props} />
        {touched[field.name] && errors[field.name] && (
          <div
            style={{
              fontSize: 12,
              margin: "4px 0",
              color: 'red'
            }}
          >
            {errors[field.name] as string}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(FormikInput);
