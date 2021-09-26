import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo, isDoneToggle, selectorTodo } from './redux/todo/todoSlice'
import { allFilter, doneFilter, unDoneFilter, selectorFilter } from './redux/filter/filterSlice'

import TodoItem from './TodoItem.js'
import { Button, Wrap } from './style/GlobalStyle'

const ButtonFilter = styled(Button)`
  width: 8rem;
  margin-top: 1rem;
`

const SessionWrapper = styled.div`
  min-height: calc(70vh - 4.5rem);
`

const WrapTodo = styled(Wrap)`
  transform: perspective(800px) translateZ(-20px) rotateX(15deg);
  height: auto;
  padding: 1rem;
  margin-bottom: 10rem;
  border-radius: .6rem;
  border: 1px solid #eee;
  box-shadow: .3rem .4rem .5rem .5rem rgba(0,0,0,0.1);
`

// main Component --------------------------
const Todo = () => {
  const todos = useSelector(selectorTodo)
  const filter = useSelector(selectorFilter)
  const dispatch = useDispatch()

  const [value, setValue] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)


  const inputChange = (e) => {
    setValue(e.target.value)
  }

  const todosHandler = () => {
    let val = value.trim()
    if (val === "" || val.length > 30) {
      alert('不得為空字串、最多只能 30 個字唷！')
      return setValue("")
    }
    if (todos.length >= 15) return alert('最多只能 15 個吐嘟唷！')
    if (editId) {
      dispatch(editTodo({ editId, value }))
      setIsEdit(false)
      setEditId(null)
    } else {
      dispatch(addTodo({ value }))
    }
    setValue("")
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') todosHandler()
  }

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo({ id }))
  }

  const isDoneToggleHandler = (id) => {
    dispatch(isDoneToggle({ id }))
  }

  const editTodoHandler = (id) => {
    let newTodo = todos.find((e) => e.id === id)
    setIsEdit(true)
    setValue(newTodo.content)
    setEditId(id)
  }

  const FILTER_MAP = {
    "all": todos => todos,
    "done": todos => todos.isDone,
    "unDone": todos => !todos.isDone,
  }

  const todoList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <TodoItem
        key={todo.id}
        content={todo.content}
        todo={todo}
        isDoneToggleHandler={isDoneToggleHandler}
        deleteTodoHandler={deleteTodoHandler}
        editTodoHandler={editTodoHandler}
      />
    ))

  return (
    <SessionWrapper>
      <WrapTodo>
        <input
          type="text"
          placeholder="輸入吐嘟... (Enter)"
          onChange={inputChange}
          onKeyDown={keyDownHandler}
          value={value}
        ></input>
        {isEdit ? (
          <Button backgroundColor="#aff" onClick={todosHandler}>
            更新
          </Button>
        ) : (
          <Button onClick={todosHandler}>提交</Button>
        )}
        <div>
          <ButtonFilter onClick={() => dispatch(allFilter({ todos }))}>全部</ButtonFilter>
          <ButtonFilter backgroundColor="#dff" onClick={() => dispatch(doneFilter({ todos }))}>已完成</ButtonFilter>
          <ButtonFilter backgroundColor="#fdd" onClick={() => dispatch(unDoneFilter({ todos }))}>未完成</ButtonFilter>
        </div>
        <hr></hr>
        {todoList}
      </WrapTodo>
    </SessionWrapper>
  )
}

export default Todo
