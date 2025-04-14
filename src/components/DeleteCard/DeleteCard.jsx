import { useState } from "react";
import './DeleteCard.css';
import { IoIosClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";

export default function DeleteCard({ onClose, itemId, getLead }) {
    const [step, setStep] = useState(1);
    const handleRemove = () => {
        setStep(2);
        deleteLead()
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    const storedToken = localStorage.getItem('token');
    const deleteLead = async () => {
        try {
            const { data } = await axios.delete(`https://api.quickhub.uz/api/lead/leads/${itemId}`, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            getLead()
            console.log(data, "Lead delete");
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="RemuveCard">
            {step === 1 && (
                <div className="RemuveCardModal">
                    <div className="RemuveCardModalCloseButton" onClick={onClose}>
                        <IoIosClose />
                    </div>
                    <div className="RemuveCardModalTitle">
                        <h2>Delete customer from system</h2>
                        <p>Are you sure you want to delete <br />
                            customer from system ?</p>
                    </div>
                    <div className="RemuveCardModalButtons">
                        <button onClick={onClose}><p>Cancel</p></button>
                        <button id="Remuve" onClick={handleRemove} style={{ border: "none", cursor: "pointer" }}><p>Delete</p></button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Customer deleted</h2>
                        <p>Customer has been deleted successfully</p>
                    </div>
                </div>
            )}
        </div>
    );
}
