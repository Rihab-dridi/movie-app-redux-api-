import React, { useState } from "react";
import '../App.css'
import Modal from "react-modal";

export default function EditTodo({ task }) {
   
  Modal.setAppElement("#root");
 
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };


  

  return (
    <div className='Add'>
      <button onClick={toggle} className="add-btn">
      <i className="far fa-plus-square"></i>
      </button>
      <Modal isOpen={show} className="Modal">
        <h1 className="title"> Edit your Movie </h1>
        <input type="text"
                       placeholder="Add a movie "
                      
                       >
                </input><br/>
                <input type="text" 
                       placeholder="add Rate"
             
                       />
               <br/>
                <input type="text"
                       placeholder="add Poster Link "
               
                      />
                <br/>
                <input type="text"
                       placeholder="add description"
             
                 /><br/>
          <div className="btns-edit">
            <button >Submit</button>
            <button onClick={toggle}>Cancil</button>
          </div>
     
      </Modal>
    </div>
  );
}