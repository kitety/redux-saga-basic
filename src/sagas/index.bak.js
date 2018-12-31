import { delay } from 'redux-saga'
import { takeEvery, put, takeLatest, call,all } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC, GET_USER_REQUEST } from '../constants'
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
  // const [todos,user]=yield all([
  //   call(axios.get, "https://jsonplaceholder.typicode.com/todos"),
  //   call(axios.get, "https://jsonplaceholder.typicode.com/users")
  // ])
  // console.log(todos,user);
}

function* watchIncrementAsync () {
  // 监听action,触发函数
  // yield takeEvery(INCREMENT_ASYNC, incrementAsync);
  yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}
function* watchFetchUser () {
  // 监听action,触发函数
  yield takeEvery(GET_USER_REQUEST, fetchUser);
}
// 可以直接将yield takeEvery语句放进来
// 可以进行yield 数组 (过时)
// 可以进行yield all(数组)

// export default function* rootSaga () {
//    yield takeLatest(INCREMENT_ASYNC, incrementAsync);
//    yield takeEvery(GET_USER_REQUEST, fetchUser);
// }
// export default function* rootSaga () {
//   yield [watchIncrementAsync(), watchFetchUser()]
// }
// all 并发执行
export default function* rootSaga () {
  yield all([watchIncrementAsync(), watchFetchUser()])
}
