import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import './DeleteModal.css'

const SeconDel = ({ onDelete }) => {
    return (
        <div className="modal" id='secMakeModal'>
            <div className="modal-content" id='secMakeContent'>
                <div className="JalapskoeLogo">
                    <span><FaRegCircleCheck /></span>
                </div>
                <div className="SecMakeTextBox">
                    <h2>All selected applications deleted</h2>
                    <p>All selected applications <br/>
                        hasbeen successfully deleted !</p>
                </div>
            </div>
        </div>
    );
};

export default SeconDel;