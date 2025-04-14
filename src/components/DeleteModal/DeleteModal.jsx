import React, { useState } from 'react';
import './DeleteModal.css';
import { IoCloseOutline } from "react-icons/io5";

const DeleteModal = ({ onCancel, onDelete  }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [modalActive, setModalActive] = useState(true);  

    return (
        <div className='modal deletemodal'>
            <div className="closeX" onClick={onCancel}><IoCloseOutline /></div>
            <div className="modal-content">
                <h2>Delete selected applications ?</h2>
                <p>Are you sure you want to delete <br/> all selected applications ?</p>
                <div className="modal-buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button id='del' onClick={onDelete}>Delete</button>
                </div>
            </div> 
        </div>
    );
}; 

export default DeleteModal;
