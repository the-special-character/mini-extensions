import * as actions from "../actionTypes/classesActionTypes";

const initialState: AirTableResponseObj<ClassInfo>[] =[];

export default function classesReducer(
  state: AirTableResponseObj<ClassInfo>[] = initialState,
  action: actions.ClassesAction
): AirTableResponseObj<ClassInfo>[] {
  switch (action.type) {
    case actions.SET_CLASSES:
    case actions.GET_CLASSES_SUCCESS:
      return action.classes
    case actions.RESET_CLASSES:
      return initialState
    default:
      return state;
  }
}
