import {combineReducers} from 'redux'
import {UserReducers} from '../Users/Reducers'

const rootReducer = combineReducers({
  user: UserReducers.setUsers,
})
export default rootReducer