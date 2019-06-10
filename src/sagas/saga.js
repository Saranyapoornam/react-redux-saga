
import {takeEvery,put} from 'redux-saga/effects'
export function* ageUpAsync(){
    console.log('async')
    yield put({type:"AGE_UP_ASYNC",val:1})
}

export function* watchAgeUp(){
    yield takeEvery('AGE_UP',ageUpAsync)
}

