import { useState } from "react";
import './RemuveCard.css';
import { IoIosClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function RemuveCard({ onClose }) {
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
                    <div className="RemuveCardModalTitle">
                        <h2>Remove card from leadboard</h2>
                        <p>Are you sure you want to remove<br />
                            the lead card from leadboard?</p>
                    </div>
                    <div className="RemuveCardModalButtons">
                        <button onClick={onClose}><p>Cancel</p></button>
                        <button id="Remuve" onClick={handleRemove} style={{ border: "none", cursor: "pointer" }}><p>Remove</p></button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Lead card  removed from board</h2>
                        <p>Lead card has been removed successfully</p>
                    </div>
                </div>
            )}
        </div>
    );
}
