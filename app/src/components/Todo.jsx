import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

const Todo = ({todo,onRemoveTodo}) => {

  const removeTodo = ()=>{
    onRemoveTodo(todo.id)
  }
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'space-between',border:'1px solid lightgray',padding:'10px',marginTop:'10px'}}>
      <div>{todo.content}</div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo}/>
        <FaEdit className="todo-icons"/>
      </div>
    </div>
  );
};

export default Todo;
