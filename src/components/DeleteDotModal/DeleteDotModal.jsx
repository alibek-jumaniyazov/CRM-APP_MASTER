import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import './DeleteDotModal.css'

export default function DeleteDotModal({ onClose }) {
    const [step, setStep] = useState(1);

    const handleRemove = () => {
        setStep(2);
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    return (
        <div className="RemuveCard">
            {step === 1 && (
                <div className="RemuveCardModal">
                    <div className="RemuveCardModalCloseButton" onClick={onClose}>
                        <IoIosClose />
                    </div>
                    <div className="RemuveCardModalTitle XUiaaaaa">
                        <h2>Delete the student</h2>
                        <p>Do you want to confirm the complete deletion <br /> of the student page from the system?</p>
                    </div>
                    <div className="RemuveCardModalButtons">
                        <button onClick={onClose}>Close</button>
                        <button id="Remuve" className="ArchiveRed" onClick={handleRemove} style={{ border: "none" , cursor:"pointer"}}>Delete</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Student successfully deleted</h2>
                        <p>This student's page has been completely <br />
                            deleted from the system</p>
                    </div>
                </div>
            )}
        </div>
    );
}
