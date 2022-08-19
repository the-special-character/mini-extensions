import { FormikHelpers } from "formik";
import { StudentFormType } from "../../container/classes/studentForm";


export const SET_CLASSES = "classesActionTypes/SET_CLASSES";
export interface SetClassesAction {
  type: typeof SET_CLASSES;
  classes: AirTableResponseObj<ClassInfo>[];
}

export const RESET_CLASSES = "classesActionTypes/RESET_CLASSES";
export interface ResetClassesAction {
  type: typeof RESET_CLASSES;
}

export const GET_CLASSES = "classesActionTypes/GET_CLASSES";
export interface GetClassesAction {
  type: typeof GET_CLASSES;
  values: StudentFormType;
  formikHelpers: FormikHelpers<StudentFormType>;
}

export const GET_CLASSES_REQUEST = "classesActionTypes/GET_CLASSES_REQUEST";
export interface GetClassesRequestAction {
  type: typeof GET_CLASSES_REQUEST;
}

export const GET_CLASSES_SUCCESS = "classesActionTypes/GET_CLASSES_SUCCESS";
export interface GetClassesSuccessAction {
  type: typeof GET_CLASSES_SUCCESS;
  classes: AirTableResponseObj<ClassInfo>[];
}

export const GET_CLASSES_FAILURE = "classesActionTypes/GET_CLASSES_FAILURE";
export interface GetClassesFailureAction {
  type: typeof GET_CLASSES_FAILURE;
  error: Error | string;
}

export type ClassesAction =
  | SetClassesAction
  | ResetClassesAction
  | GetClassesAction
  | GetClassesRequestAction
  | GetClassesSuccessAction
  | GetClassesFailureAction;
