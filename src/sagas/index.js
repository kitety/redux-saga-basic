import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './counter'
import { watchFetchUser, watchFetchTodos } from './user'

// all 并发执行
export default function* rootSaga () {
  yield all([watchIncrementAsync(), watchFetchUser(), watchFetchTodos()])
}
