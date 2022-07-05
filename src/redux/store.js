import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import usernameReducer from './username'

export default configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
  },
})
