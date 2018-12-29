import { delay } from 'redux-saga'
import { takeEvery, put, takeLatest, call } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC, GET_USER_REQUEST } from '../constants/'
import { increment } from '../actions/counter'
import axios from 'axios'

// 延时函数
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync () {
  // 要加yield语句才可以
  // yield delay(2800)
  yield call(delay, 2000)
  console.log('Async');
  yield put({ type: INCREMENT })
  // 这个要执行才能返回对象
  // yield put(increment())
}
function* fetchUser () {
  const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")
  console.log(user);
}

export function* watchIncrementAsync () {
  // 监听action,触发函数
  // yield takeEvery(INCREMENT_ASYNC, incrementAsync);
  yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}
export function* watchFetchUser () {
  // 监听action,触发函数
  yield takeEvery(GET_USER_REQUEST, fetchUser);
}
