import {combineReducers} from 'redux'
import authorReducer from './authorReducer'
import authReducer from './authReducer'
import postReducer from './postReducer'
import singlePostReducers from './singlePostReducers'
import taskReducer from './taskReducer'

export default combineReducers({
    auth : authReducer,
    task : taskReducer,
    post : postReducer,
    author : authorReducer,
    singlePost : singlePostReducers
})