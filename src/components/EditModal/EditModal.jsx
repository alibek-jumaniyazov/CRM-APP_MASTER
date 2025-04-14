import './EditModal.css'
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function EditModal({ onClose }) {

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenGen, setIsOpenGen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownGender = () => {
        setIsOpenGen(!isOpenGen);
    };

    return (
        <div className="EditModal">
            {step === 1 && (
                <div className="EditModalContant">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="EditModalContantTitle">
                        <h2>Edit contacts</h2>
                        <p>Change the student's contacts</p>
                    </div>
                    <div className="EditModalContantButtons">
                        <label>
                            <p>Phone number (sms sending)*</p>
                            <input type="text" placeholder='+998' />
                        </label>
                        <label>
                            <p>Phone number (additional)</p>
                            <input type="text" placeholder='+998' />
                        </label>
                        <label>
                            <p>Birthday</p>
                            <button className='GenButton' onClick={toggleDropdown} type="button">
                                <p>Birthday</p>
                            </button>
                            {isOpen && (
                                <div className="dropdown ModalAddStudSelectDropDown">
                                    <div className="custom-datepicker ModalAddStudSelectButtonDatapicker">
                                        <DatePicker inline />
                                    </div>
                                </div>
                            )}
                        </label>
                        <label>
                            <p>Gender</p>
                            <button className='GenButton' onClick={toggleDropdownGender}><p>Select</p> <span>{isOpen ? <FaAngleUp /> : <FaChevronDown />}</span></button>
                            {isOpenGen && (
                                <div className="dropdown ModalAddStudSelectDropDown GenderButton">
                                        <button>Male</button>
                                        <button>Famale</button>
                                </div>
                            )}
                        </label>
                        <label>
                            <p>Adress</p>
                            <input type="text" placeholder='Adress' />
                        </label>
                        <label>
                            <p>Telegram profile (example: username)</p>
                            <input type="text" placeholder='@telegram' />
                        </label>
                        <label>
                            <p>Instagram profile (example: username)</p>
                            <input type="text" placeholder='@instagram' />
                        </label>
                        <label>
                            <p>E-mail (example: email@example.com)</p>
                            <input type="text" placeholder='E-mail adress' />
                        </label>
                    </div>
                    <div className="ModaAddStudButtons">
                        <button className='ModaAddStudButtonsCancel' onClick={onClose}>Cancel</button>
                        <button className='ModaAddStudButtonsNext' onClick={() => setStep(2)}>Next</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="ConFimModalAddStud">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="ConFimModalAddStudTitle">
                        <h2>Confirm to save the changed information</h2>
                        <p>Do you confirm saving the changed data?</p>
                    </div>
                    <div className="ConFimModalAddStudButtons">
                        <button onClick={() => setStep(1)}>Go back</button>
                        <button id='YesConFimModalAddStudButtons' onClick={() => {
                            setStep(3);
                            setTimeout(() => {
                                onClose();
                            }, 1000);
                        }}>Yes</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Saved</h2>
                        <p>All changed contacts saved!</p>
                    </div>
                </div>
            )}
        </div>
    )
}