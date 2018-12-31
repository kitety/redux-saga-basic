import { takeEvery, put, takeLatest, call, all } from 'redux-saga/effects'
import { GET_USER_REQUEST, GET_TODOS_REQUEST } from '../constants/'
import axios from 'axios'

// 延时函数
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* fetchUser () {
  const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")
  console.log(user);
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

