import { combineReducers } from 'redux'
import articals from './articals'
import server from './serverState'


export default combineReducers({
  articals,
  server
})
