import { put, call, all, fork, takeLatest } from "redux-saga/effects";
import * as actionCreators from "../actionCreators/classesActionCreators";
import * as actionTypes from "../actionTypes/classesActionTypes";
import { fetchClasses } from "../services/classServices";
import { fetchStudent, fetchStudents } from "../services/studentServices";

function* onLoadClasses({values, formikHelpers }: actionTypes.GetClassesAction) {
  try {
    yield put(actionCreators.getClassesRequest());
    const studentsResponse: AirTableResponseObj<Student>[] = yield call(
      fetchStudent,
      values.studentName
    );
    
    if (studentsResponse.length === 0) throw new Error("Record Not found");

    const classesResponse: AirTableResponseObj<ClassObj>[] = yield call(
      fetchClasses,
      studentsResponse[0].fields.Classes
    );

    const students = classesResponse.reduce<string[]>(
      (p, c) => [...p, ...c.fields.Students],
      []
    );

    const studentsData: AirTableResponseObj<Student>[] = yield call(
      fetchStudents,
      [...new Set(students)]
    );

    const finalData = classesResponse.reduce<AirTableResponseObj<ClassInfo>[]>((p,c) => [
        ...p,
        {
            ...c,
            fields: {
                ...c.fields,
                Students: studentsData.filter(x => c.fields.Students.includes(x.id))
            }
        }
    ], [])
    yield put(actionCreators.getClassesSuccess(finalData));
    formikHelpers.resetForm();
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    yield put(actionCreators.getClassesFailure(message));
    formikHelpers.setErrors({ studentName: message })
  } finally {
    formikHelpers.setSubmitting(false)
  }
}

function* watchOnLoadClasses() {
  yield takeLatest(actionTypes.GET_CLASSES, onLoadClasses);
}

export default function* classesSaga() {
  yield all([fork(watchOnLoadClasses)]);
}
