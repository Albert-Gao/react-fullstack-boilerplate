import { all, fork } from 'redux-saga/effects';
import watchRequest from './search';

export default function* rootSaga() {
    yield all([
        fork(watchRequest)
    ]);
}
