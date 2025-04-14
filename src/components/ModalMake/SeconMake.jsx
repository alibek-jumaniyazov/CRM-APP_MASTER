import React from 'react'; 
import { FaRegCircleCheck } from "react-icons/fa6";
import './ModalMake.css'

const SecMake = ({ onClose }) => {
    return (
        <div className="modal" id='secMakeModal'> 
            <div className="modal-content" id='secMakeContent'> 
                <div className="JalapskoeLogo">
                    <span><FaRegCircleCheck /></span>
                </div>
                <div className="SecMakeTextBox">
                    <h2>Leads successfully created</h2>
                    <p>All lead cards has been successfully created !</p>
                </div>
            </div>
        </div>
    );
};

export default SecMake;