import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css';
import { useState } from "react";

const Todo = ({ todo, onRemoveTodo,onUpdateTodo }) => {

  const [editable, setEditable] = useState(false);
  const [newTodo,setNewTodo] = useState(todo.content); 

  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content:newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgray', padding: '10px', marginTop: '10px' }}>
      <div>
        {
          editable ? <input value={newTodo} className="todo-input" type="text" onChange={(e)=> setNewTodo(e.target.value)}/> : todo.content
        }
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {
          editable ? <FaCheck className="todo-icons" onClick={updateTodo}/> : <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        }
      </div>
    </div>
  );
};

export default Todo;
