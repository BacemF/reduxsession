import {EDIT_TASK, ADD_NEW_TASK, DELETE_TASK, COMPLETE_TASK} from "./actionType";

export const handleAdd = (newTask) => {
  return{
    type: ADD_NEW_TASK,
    payload:newTask,
  };
};

export const handleDelete=(ID)=>{
  return{
    type:DELETE_TASK,
    payload:ID,
  };
};

export const handleComplete=(THEID)=>{
  return{
    type:COMPLETE_TASK ,
    payload:THEID ,
  };
};
export const handleEdit=(editedTask)=>{
  return{
    type:EDIT_TASK,
    payload :editedTask,
  }
}