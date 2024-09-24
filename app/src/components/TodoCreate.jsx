import React from "react";

const TodoCreate = () => {
  return (
    <div className="todo-create">
      <input className="todo-input" type="text" placeholder="Todo giriniz..." />
      <div className="btn-container">
        <button className="todo-create-button">Todo Oluştur</button>
      </div>
    </div>
  );
};

export default TodoCreate;
