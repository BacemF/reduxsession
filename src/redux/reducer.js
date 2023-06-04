import {EDIT_TASK, ADD_NEW_TASK, DELETE_TASK, COMPLETE_TASK } from "./actionType";

const init = {
  todos:[],
};

export const taskReducer = (state=init, {type,payload})=>{
  switch (type) {
    case ADD_NEW_TASK:
      return{
        ...state, 
      todos: [...state.todos, payload],
      };
      case DELETE_TASK:
        return{
...state, todos:state.todos.filter(el=>el.id!==payload)
        };
  case COMPLETE_TASK:
    return{
      ...state, 
      todos:state.todos.map(el=>el.id===payload? {...el,isDone:!el.isDone}:el)
    };
    case EDIT_TASK:
      return{
        ...state,
        todos: state.todos.map(el=>el.id===payload? payload:el)
      };

    default:
      return state
  }
}; 