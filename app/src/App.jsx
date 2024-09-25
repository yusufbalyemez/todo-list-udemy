import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }

  const removeTodo = (todoId)=>{
    setTodos(todos.filter((todo)=> todo.id!==todoId));
  }

  console.log(todos);
  return (
    <div>
      <div
        className="main"
      >
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList todos={todos} onRemoveTodos={removeTodo} />
      </div>
    </div>
  );
}

export default App;
