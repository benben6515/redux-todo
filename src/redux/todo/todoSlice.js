import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todos: [
    { id: uuidv4(), content: "飄浮... 你也會飄浮嗎？", isDone: false },
    { id: uuidv4(), content: "跳舞小丑潘尼懷斯！", isDone: true}
  ]
}

export const todoSlice = createSlice({
  name: 'totos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        content: action.payload.value,
        isDone: false
      })
    },
    deleteTodo: (state, action) => {
      const { todos } = state
      const index = todos.findIndex((todo) => todo.id === action.payload.id)
      todos.splice(index, 1)
    },
    editTodo: (state, action) => {
      state.todos.map( todo => {
        if (todo.id === action.payload.editId) {
          return todo.content = action.payload.value
        }
        return todo
      })
    },
    isDoneToggle: (state, action) => {
      state.todos.map( todo => {
        if (todo.id === action.payload.id) {
          return todo.isDone = !todo.isDone
        }
        return todo
      })
    }
  }
})

export const { addTodo, deleteTodo, editTodo, isDoneToggle } = todoSlice.actions
export const selectorTodo = state => state.todos.todos
export default todoSlice.reducer
