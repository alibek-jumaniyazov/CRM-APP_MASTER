import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import './ArchiveModal.css'

export default function ArchiveModal({ onClose }) {
    const [step, setStep] = useState(1);

    const handleRemove = () => {
        setStep(2);
        setTimeout(() => {
            onClose();
        }, 1000); // Adjust this delay if needed
    };

    return (
        <div className="RemuveCard">
            {step === 1 && (
                <div className="RemuveCardModal">
                    <div className="RemuveCardModalCloseButton" onClick={onClose}>
                        <IoIosClose />
                    </div>
                    <div className="RemuveCardModalTitle XUiaaaaa">
                        <h2>Archiving the student</h2>
                        <p>Are you sure you want to archive this student?</p>
                    </div>
                    <div className="RemuveCardModalButtons">
                        <button onClick={onClose}>Close</button>
                        <button id="Remuve" className="ArchiveRed" onClick={handleRemove} style={{ border: "none" , cursor:"pointer" }}>Archive</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Student successfully archived</h2>
                        <p>This student's page has been <br />
                            successfully archived</p>
                    </div>
                </div>
            )}
        </div>
    );
}
