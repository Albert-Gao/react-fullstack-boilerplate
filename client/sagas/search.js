import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions';

function getData(results) {
    return new Promise((resolve, reject) => {
        try {
            const searches = [];
            results.items.forEach((item) => {
                if (item.id &&
                    item.name &&
                    item.description &&
                    item.url &&
                    item.stargazers_count &&
                    item.language) {
                    searches.push({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        url: item.html_url,
                        stars: item.stargazers_count,
                        language: item.language
                    });
                }
            });
            resolve(searches);
        } catch (error) {
            reject(error);
        }
    });
}

function* worker(action) {
    yield put({ type: actionTypes.SEARCH_STARTED });

    const keyword = action.payload.keyword;
    const url = `https://api.github.com/search/repositories?q=${keyword}`;

    try {
        const results = yield call(axios.get, url);
        const afterCompute = yield call(getData, results.data);
        yield put({ type: actionTypes.SEARCH_SUCCEEDED, result: afterCompute });
    } catch (error) {
        yield put({ type: actionTypes.SEARCH_FAILED, error });
    }
}

function* watchRequest() {
    yield takeLatest(
        actionTypes.SEARCH_REQUESTED,
        worker
    );
}

export default watchRequest;
