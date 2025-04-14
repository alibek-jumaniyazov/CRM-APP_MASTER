import { useState, useEffect } from 'react';
import './PhoneCopied.css';
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function PhoneCopied({ onClose }) {
    const [step, setStep] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="PhoneCopied">
            {step === 1 && (
                <div className="PhoneCopiedOne">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="PhoneCopiedOneTitle">
                        <h2>Phone number copied</h2>
                    </div>
                </div>
            )}
        </div>
    );
}
