import React from "react";
import { connect } from "react-redux";
import { AppState } from "./core/reducers";
import { Dispatch } from "@reduxjs/toolkit";
import * as actionTypes from "./core/actionTypes/classesActionTypes";
import StudentForm, { StudentFormType } from "./container/classes/studentForm";
import ClassInfo from "./container/classes/classInfo";
import { FormikHelpers } from "formik";
import {
  getClasses,
  resetClasses,
} from "./core/actionCreators/classesActionCreators";

export interface AppProps {
  classes: AirTableResponseObj<ClassInfo>[];
  isLoading: boolean;
  error: string | Error | null;
  onSearch(
    values: StudentFormType,
    formikHelpers: FormikHelpers<StudentFormType>
  ): void;
  onReset(): void;
}

function App({ classes, onSearch, onReset }: AppProps) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {classes.length > 0 && (
        <div
          data-testid="logout"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "1rem",
          }}
        >
          <button onClick={onReset}>Logout</button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          overflow: "auto",
        }}
      >
        {classes.length > 0 ? (
          <ClassInfo data-testid="classInfo" classes={classes} />
        ) : (
          <StudentForm data-testid="studentForm" onSearch={onSearch} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  classes: state.classes,
  isLoading: state.isLoading[actionTypes.GET_CLASSES],
  error: state.error[actionTypes.GET_CLASSES],
});

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.ClassesAction>) => ({
  onSearch: (
    values: StudentFormType,
    formikHelpers: FormikHelpers<StudentFormType>
  ) => {
    formikHelpers.setSubmitting(true);
    dispatch(getClasses(values, formikHelpers));
  },
  onReset: () => dispatch(resetClasses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
