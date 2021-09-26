import styled from 'styled-components'
import { Button } from './style/GlobalStyle'

const TodoItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  margin-top: 1rem;
  border-radius: .3rem;
  transition: .3s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 2px 4px 6px 2px rgba(0,0,0,0.2);
  }

  & + & {
    margin-top: 1rem;
  }

`

const ButtonGreen = styled(Button)`
  ${props => props.$isDone &&`
    background-color: #afc;
  `}
`

const TodoContent = styled.div`
  color: #222;
  ${props => props.$isDone && `
    text-decoration: line-through;
    color: #aaa;
  `}
`

const TodoButtonWrap = styled.div``

const TodoItem = ({ todo, isDoneToggleHandler, deleteTodoHandler, editTodoHandler }) => {
  const deleteClick = () => {
    deleteTodoHandler(todo.id)
  }
  const isDoneClick = () => {
    isDoneToggleHandler(todo.id)
  }
  const editClick = () => {
    editTodoHandler(todo.id)
  }
  return (
    <TodoItemWrap>
      <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrap>
        <ButtonGreen
          onClick={isDoneClick}
          $isDone={todo.isDone}
        >
          {todo.isDone ? "已完成" : "未完成"}
        </ButtonGreen>
        <Button onClick={editClick}>編輯</Button>
        <Button backgroundColor="#f88" onClick={deleteClick}>刪除</Button>
      </TodoButtonWrap>
    </TodoItemWrap>
  )
}

export default TodoItem