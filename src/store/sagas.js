import {takeEvery} from 'redux-saga/effects'
import {TEST_SAGA} from './actionTypes'

function* sagas() {
  yield takeEvery(TEST_SAGA, test)
}

function* test() {
  console.log('test saga')
}

export default sagas