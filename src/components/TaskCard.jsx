import React from 'react'
import { useDispatch } from "react-redux";
import { handleComplete, handleDelete } from "../redux/action";
import EditTask from './EditTask';
const TaskCard = ({task}) => {
  console.log(task)
  const dispatch=useDispatch();
  return (
    <div>
      <h1>{task.todoTask}</h1>
      <button onClick={()=>dispatch(handleDelete(task.id))}>Delete</button>
      <button onClick={()=>dispatch(handleComplete(task.id))}>{task.isDone? "Undo": "Complete"}</button>
    <EditTask task={task}/>
    </div>
  )
}

export default TaskCard