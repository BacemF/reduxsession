import { handleAdd } from "../redux/action";
import React , {useState} from "react";
import { useDispatch } from "react-redux";

const AddNewTask = () => {
  const [todoTask, setTodoTask] = useState("hello");
  const dispatch=useDispatch();
  const handleSubmit =(e)=>{
    e.preventDefault()
    const task={
      id:Math.random(), todoTask, isDone:false
    }
    dispatch(handleAdd(task))
    setTodoTask("")
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      
        <input type="text" value={todoTask} onChange={(e)=> setTodoTask(e.target.value)}/>
    <button type="submit">Add</button>
      </form>
    </div>
  )
}
export default AddNewTask;