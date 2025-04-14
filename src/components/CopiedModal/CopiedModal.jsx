import './CopiedModal.css'
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState } from 'react'; 

export default function CopiedModal({ onClose }) {
    const [step, setStep] = useState(1); 

    return (
        <div className="CopiedModal">
            {step === 1 && (
                <div className="CopiedModalContant">
                    <div className="CopiedModalCloseIcon">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="CopiedModalTitle">
                        <p>Qr code copied</p>
                    </div>
                </div>
            )}
        </div>
    )
}