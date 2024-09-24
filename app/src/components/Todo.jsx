import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
      <div>Ben ilk todoyum.</div>
      <div>
        <IoIosRemoveCircle />
        <FaEdit />
      </div>
    </div>
  );
};

export default Todo;
