import { takeEvery, put, takeLatest, call, all } from 'redux-saga/effects'
import { GET_USER_REQUEST, GET_TODOS_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../constants/'
import axios from 'axios'

// 延时函数
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* fetchUser () {
  try {
    const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")
    yield put({ type: FETCH_USER_SUCCESS, user: user })
    console.log(user);
  } catch (err) {
    // 出错
    yield put({ type: FETCH_USER_FAILED, err: err.message })
  }
}
function* fetchTodos () {
  const todos = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos")
  console.log(todos);
}

export function* watchFetchUser () {
  // 监听action,触发函数
  yield takeEvery(GET_USER_REQUEST, fetchUser);
}
export function* watchFetchTodos () {
  // 监听action,触发函数
  yield takeEvery(GET_TODOS_REQUEST, fetchTodos);
}

// 方法2
// export const counterSaga=[
//   watchFetchUser(), watchFetchTodos()
// ]

// index.js
/**
 * yield all([...counterSaga])
 * 这种方式
 */

