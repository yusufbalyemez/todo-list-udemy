import React, { useState } from "react";

const TodoCreate = ({onCreateTodo}) => {

  const [newTodo, setNewTodo] = useState('');

  function clearInput(){
    setNewTodo('');
  }
 
  const createTodo = () => {
    if(!newTodo) return;
    const request = {
      id: Math.floor(Math.random()*9999999999999),
      content: newTodo
    }

    onCreateTodo(request);
    clearInput();
  }
  return (
    <div className="todo-create">
      <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="todo-input" type="text" placeholder="Todo giriniz..." />
      <div className="btn-container">
        <button onClick={createTodo} className="todo-create-button">Todo Oluştur</button>
      </div>
    </div>
  );
};

export default TodoCreate;
