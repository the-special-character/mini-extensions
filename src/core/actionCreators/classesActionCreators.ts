import { FormikHelpers } from "formik";
import { StudentFormType } from "../../container/classes/studentForm";
import * as actions from "../actionTypes/classesActionTypes";

export function setClasses(classes: AirTableResponseObj<ClassInfo>[]): actions.SetClassesAction {
  return {
    type: actions.SET_CLASSES,
    classes
  };
}

export function resetClasses(): actions.ResetClassesAction {
  return {
    type: actions.RESET_CLASSES,
  };
}

export function getClasses(
  values: StudentFormType,
  formikHelpers: FormikHelpers<StudentFormType>
): actions.GetClassesAction {
  formikHelpers.setSubmitting(true);
  return {
    type: actions.GET_CLASSES,
    values,
    formikHelpers
  };
}

export function getClassesRequest(): actions.GetClassesRequestAction {
  return {
    type: actions.GET_CLASSES_REQUEST
  };
}

export function getClassesSuccess(
  classes: AirTableResponseObj<ClassInfo>[]
): actions.GetClassesSuccessAction {
  return {
    type: actions.GET_CLASSES_SUCCESS,
    classes
  };
}

export function getClassesFailure(
  error: Error | string
): actions.GetClassesFailureAction {
  return {
    type: actions.GET_CLASSES_FAILURE,
    error
  };
}
