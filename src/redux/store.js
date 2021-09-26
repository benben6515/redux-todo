import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice'
import filterReducer from './filter/filterSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  }
})