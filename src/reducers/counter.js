
import { INCREMENT } from '../constants/constants'
const counter = (state = 1, actions = {}) => {
  switch (actions.type) {
    case INCREMENT:
      return state + 1
    default:
      return state;
  }
}
export default counter;
