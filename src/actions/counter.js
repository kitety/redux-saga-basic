import { INCREMENT, INCREMENT_ASYNC } from '../constants'
export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC
  }
}
