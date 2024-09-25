import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

const Todo = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'space-between',border:'1px solid lightgray',padding:'10px',marginTop:'10px'}}>
      <div>Ben ilk todoyum.</div>
      <div>
        <IoIosRemoveCircle className="todo-icons"/>
        <FaEdit className="todo-icons"/>
      </div>
    </div>
  );
};

export default Todo;
