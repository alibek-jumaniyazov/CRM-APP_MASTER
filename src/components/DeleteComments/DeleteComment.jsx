import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './DeleteComment.css';
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function DeleteComment({ isOpen, onClose, onConfirm }) {


    const handleConfirm = () => {
        setStep(2); //  
        setTimeout(() => {
            onConfirm();  
        }, 2000);
    };

    const [step, setStep] = useState(1);

    return (
        <div className="ModalOverlayDeleteComment">
            {step === 1 && (
                <div className="ModalContentDeleteComment">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="ModalContentDeleteCommentTitle">
                        <h2>Delete comment</h2>
                        <p>Are you sure you want to student note <br />
                            from the system?</p>
                    </div>
                    <div className="ModalContentDeletebuttonCont">
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleConfirm}>Delete</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="ModalOverlayDeleteCommentConfim">
                    <div className="TherdTwarIcon">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="ModalOverlayDeleteCommentConfimTitle">
                        <h2>Student comment deleted</h2>
                        <p>Student’s note has been deleted from the system</p>
                    </div>
                </div>
            )}
        </div>
    );
};

