import { GET_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../constants'
const initialState = {
  isFetching: false,
  error: null,
  user: null
}
const user = (state = initialState, actions = {}) => {
  switch (actions.type) {
    // 只是改变状态，便在正在请求
    case GET_USER_REQUEST:
      return {
        isFetching: true,
        error: null,
        user: null
      }
    case FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        error: null,
        user: actions.user
      }
    case FETCH_USER_FAILED:
      return {
        isFetching: false,
        error: actions.err,
        user: null
      }
    default:
      return state;
  }
}
export default user;
