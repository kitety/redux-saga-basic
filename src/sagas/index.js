import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC } from '../constants/'
import { increment } from '../actions/counter'
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync () {
  // 要加yield语句才可以
  yield delay(2800)
  console.log('Async');
  yield put({ type: INCREMENT })
  // 这个要执行才能返回对象
  // yield put(increment())
}
export function* watchIncrementAsync () {
  // 监听action,触发函数
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
