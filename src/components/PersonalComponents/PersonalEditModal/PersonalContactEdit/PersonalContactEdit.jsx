import { useState, useRef } from 'react';
import './PersonalContactEdit.css';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';

export default function PersonalContactEdit({ onClose, useId, getPersonal, personalUser }) {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState(personalUser.phone_number2);
    const [personalContactEdit, setPersonalContactEdit] = useState({
        phone_number2: personalUser.phone_number2,
        tg_username: personalUser.tg_username,
        insta_username: personalUser.insta_username,
        email: personalUser.email,
    });
    const storedToken = localStorage.getItem('token');

    async function patchPersnoalInfo() {

        try {
            const response = await axios.patch(`https://api.quickhub.uz/api/personal/all/${useId}/change-contact/`, personalContactEdit, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log(response.status);
            getPersonal()
        } catch (err) {
            console.log(err);
        }
    }

    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = inputValue.replace(/[^+\d]/g, '');
        setPhoneNumber(formattedValue);
        setPersonalContactEdit(prev => ({
            ...prev,
            phone_number2: formattedValue,
        }));
    };

    const handleTelegramChange = (e) => {
        setPersonalContactEdit(prev => ({
            ...prev,
            tg_username: e.target.value,
        }));
    };

    const handleInstagramChange = (e) => {
        setPersonalContactEdit(prev => ({
            ...prev,
            insta_username: e.target.value,
        }));
    };

    const handleEmailChange = (e) => {
        setPersonalContactEdit(prev => ({
            ...prev,
            email: e.target.value,
        }));
    };

    const handleSave = () => {
        console.log(personalContactEdit);
        setStep(2);
    };

    return (
        <div className="PersonalInformationEdit">
            {step === 1 && (
                <div className="PersonalInformationEditStepOne">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="PersonalInformationEditStepOneTitle">
                        <h2>Edit contacts</h2>
                        <p>Change employee contacts</p>
                    </div>
                    <div className="PersonalInformationEditStepOneButtons">
                        <label htmlFor="tel-number">
                            <p>Phone number (secondary)</p>
                            <input
                                className="CardNumInp"
                                type="tel"
                                
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                maxLength="13"
                            />
                        </label>

                        <label htmlFor="tg-username">
                            <p>Telegram profile (example: username)</p>
                            <input
                                type="text"
                                className='CardNumInp'
                                placeholder='@telegram'
                                value={personalContactEdit.tg_username}
                                onChange={handleTelegramChange}
                            />
                        </label>

                        <label htmlFor="insta-username">
                            <p>Instagram profile (example: username)</p>
                            <input
                                type="text"
                                className='CardNumInp'
                                placeholder='@instagram'
                                value={personalContactEdit.insta_username}
                                onChange={handleInstagramChange}
                            />
                        </label>

                        <label htmlFor="email">
                            <p>E-mail (example: email@example.com)</p>
                            <input
                                type="text"
                                className='CardNumInp'
                                placeholder='E-mail address'
                                value={personalContactEdit.email}
                                onChange={handleEmailChange}
                            />
                        </label>
                    </div>

                    <div className="PersonalInformationEditStepOneButtonsSave">
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="PersonalInformationEditStepTwo">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="PersonalInformationEditStepTwoTitle PersonalInformationEditStepTwoTitleSec">
                        <h2>Change contacts</h2>
                        <p>Do you confirm saving the changed contacts?</p>
                    </div>
                    <div className="PersonalInformationEditStepOneButtonsSaveTwo">
                        <button onClick={() => setStep(1)}>Go back</button>
                        <button onClick={() => {
                            setStep(3);
                            patchPersnoalInfo()
                            setTimeout(() => {
                                onClose();
                            }, 2000);
                        }}>Yes</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="PersonalInformationEditStepThree">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="PersonalInformationEditStepThreeButton">
                        <h2>Saved</h2>
                        <p>All changes saved!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
