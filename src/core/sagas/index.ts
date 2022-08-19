import { all, fork } from 'redux-saga/effects'
import classesSaga from './classesSaga'

export default function* root() {
    yield all([fork(classesSaga)])
};