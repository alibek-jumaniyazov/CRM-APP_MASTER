import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import './CusDelete.css';

export default function CusDelete({ onClose }) {
    const [step, setStep] = useState(1);

    const handleRemove = () => {
        setStep(2);
        setTimeout(() => {
            onClose(); // This will close the modal after 1 second
        }, 2000);
    };

    return (
        <div className="RemuveCard">
            {step === 1 && (
                <div className="RemuveCardModal">
                    <div className="RemuveCardModalCloseButton" onClick={onClose}>
                        <IoIosClose />
                    </div>
                    <div className="RemuveCardModalTitle XUiaaaaa">
                        <h2>Delete the customer</h2>
                        <p>Do you want to confirm the complete deletion <br /> of the customer page from the system?</p>
                    </div>
                    <div className="RemuveCardModalButtons">
                        <button onClick={onClose}>Close</button>
                        <button id="Remuve" className="ArchiveRed" onClick={handleRemove} style={{ border: "none" , cursor:"pointer" }}>Delete</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Customer successfully deleted</h2>
                        <p>This customer’s page has been completely<br />
                            deleted from the system</p>
                    </div>
                </div>
            )}
        </div>
    );
}
