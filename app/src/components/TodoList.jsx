import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,onRemoveTodos,onUpdateTodo}) => {
  return (
    <div style={{width:'100%'}}>
      {
        todos && todos.map((todo)=>(
          <Todo key={todo.id} todo = {todo} onRemoveTodo={onRemoveTodos} onUpdateTodo={onUpdateTodo}  />
        ))
      }
       
    </div>
  )
}

export default TodoList