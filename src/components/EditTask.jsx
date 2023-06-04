import React from 'react'
import Modal from 'react-modal';
import {useState} from "react";
import { useDispatch } from 'react-redux';
import {handleEdit} from '../redux/action';

const EditTask = ({task}) => {
  const [todoTask, setTodoTask] = useState(task.todoTask);
const dispatch=useDispatch();

const handlSubmit=(e)=>{
  e.preventDefault();
  const editedOne={
    id:task.id, todoTask,isDone:task.isDone
  }
  dispatch(handleEdit(editedOne))
  closeModal()
}
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handlSubmit} >
          <input type="text" value={todoTask} onChange={e=>setTodoTask(e.target.value)} />
          <div>
          <button type="submit">Confirme</button>
          <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask