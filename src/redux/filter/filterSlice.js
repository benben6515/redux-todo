import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: "all"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    allFilter: (state) => {
      state.filter = "all"
    },
    doneFilter: (state) => {
      state.filter = "done"
    },
    unDoneFilter: (state) => {
      state.filter = "unDone"
    }
  }
})

export const { allFilter, doneFilter, unDoneFilter } = filterSlice.actions
export const selectorFilter = state => state.filter.filter
export default filterSlice.reducer
