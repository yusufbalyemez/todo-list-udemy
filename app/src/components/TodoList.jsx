import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div style={{width:'100%'}}>
      {
        todos && todos.map((todo)=>(
          <Todo key={todo.id} todo = {todo}/>
        ))
      }
       
    </div>
  )
}

export default TodoList