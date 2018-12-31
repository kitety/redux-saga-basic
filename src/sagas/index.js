import { all, fork } from 'redux-saga/effects'
// import { watchIncrementAsync } from './counter'
import * as counterSagas from './counter'
// import { watchFetchUser, watchFetchTodos } from './user'
import * as userSagas from './user'

// console.log(userSagas); // 键值对
// console.log(...Object.values(userSagas)); // 键值对
// all 并发执行
export default function* rootSaga () {
  // yield all([watchIncrementAsync(), watchFetchUser(), watchFetchTodos()])
  // fork 并行执行,并行
  // yield all([fork(watchIncrementAsync), fork(watchFetchUser),fork( watchFetchTodos)])
  yield all([...Object.values(counterSagas) ,...Object.values(userSagas)].map(fork))
}
/**
 * 多文件处理方法2 在各个文件先处理
 */
