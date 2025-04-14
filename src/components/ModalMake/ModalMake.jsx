import React from 'react';
import './ModalMake.css';
import { IoCloseOutline } from "react-icons/io5";
import SecMake from './SeconMake.jsx';

const ModalMake = ({ onClose, onYes , postLead }) => {
    function handleYesBtn() {
        onYes()
        postLead()
    } 
    return (
        <div className="modal" id='makemodal'>
            <div className="closeX" onClick={onClose}><IoCloseOutline /></div>
            <div className="modal-content" id='makemodaltext'>
                <h2>Generate leads <br/>through all applications</h2>
                <p>Are you sure you want to generate leads through all applications ?</p>
                <div className="modal-buttons" id='makemodalbuttons'>
                    <button onClick={onClose}>Cancel</button>
                    <button id='Yes' onClick={handleYesBtn}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default ModalMake;