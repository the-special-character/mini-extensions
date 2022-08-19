import React, { memo } from "react";
import { FastField, Form, Formik } from "formik";
import formikInput from "../../components/formikInput";
import { AppProps } from "../../App";

export type StudentFormType = {
  studentName: string;
};

const StudentForm = ({ onSearch }: Pick<AppProps, 'onSearch'>) => {
  return (
    <Formik
      initialValues={{
        studentName: "",
      }}
      onSubmit={onSearch}
    >
      {({ isValid, isSubmitting, dirty }) => {
        return (
          <Form style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <FastField
              name="studentName"
              component={formikInput}
              label="Student Name"
              validate={(value: string) => !value && "Required..."}
            />
            <button
              type="submit"
              style={{ margin: '1rem'}}
              disabled={isSubmitting || !(isValid && dirty)}
            >
              {isSubmitting ? "Please wait..." : "Login"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(StudentForm);
