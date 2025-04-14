import { useState } from 'react';
import './PersonalInformationEdit.css';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';

export default function PersonalInformationEdit({ onClose, useId, getPersonal, personalUser }) {
    const [step, setStep] = useState(1);
    const [cardNumber, setCardNumber] = useState(personalUser.card_umber);
    const [birthday, setBirthday] = useState(personalUser.birthday || "");
    const [personalInfoEdit, setPersonalInfoEdit] = useState({
        card_umber: personalUser.card_umber,
        birthday: personalUser.birthday,
        gender: personalUser.gender,
        address: personalUser.address,
    });
    const storedToken = localStorage.getItem('token');

    async function patchPersnoalInfo() {
        try {
            const response = await axios.patch(`https://api.quickhub.uz/api/personal/all/${useId}/change-inf/`, personalInfoEdit, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.status);
            getPersonal();
        } catch (err) {
            console.log(err);
        }
    }

    const formatCardNumber = (value) => {
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatCardNumber(inputValue);
        setCardNumber(formattedValue);
        setPersonalInfoEdit(prev => ({
            ...prev,
            card_umber: formattedValue,
        }));
    };

    const handleDateChange = (date, dateString) => {
        setBirthday(dateString);
        setPersonalInfoEdit(prev => ({
            ...prev,
            birthday: dateString,
        }));
    };

    const handleGenderChange = (value) => {
        setPersonalInfoEdit((prevData) => ({ ...prevData, gender: value }));
    };

    const handleAddressChange = (e) => {
        const addressValue = e.target.value;
        setPersonalInfoEdit(prev => ({
            ...prev,
            address: addressValue,
        }));
    };

    const handleSave = () => {
        setStep(2);
    };

    return (
        <div className="PersonalInformationEdit">
            {step === 1 && (
                <div className="PersonalInformationEditStepOne">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="PersonalInformationEditStepOneTitle">
                        <h2>Edit employee information</h2>
                        <p>Change all employee information</p>
                    </div>
                    <div className="PersonalInformationEditStepOneButtons">
                        <label htmlFor="card-number">
                            <p>Card number</p>
                            <input
                                className='CardNumInp'
                                type="text"
                                placeholder="Enter card number"
                                value={cardNumber}
                                onChange={handleInputChange}
                                maxLength="19"
                            />
                        </label>
                        <label htmlFor="birthday">
                            <p>Birthday</p>
                            <DatePicker
                                style={{
                                    width: '100%',
                                    height: '45px',
                                    borderRadius: '10px',
                                }}
                                onChange={handleDateChange}
                                value={birthday ? dayjs(birthday) : null} />
                        </label>

                        <label htmlFor="gender">
                            <p>Gender</p>
                            <Select
                                defaultValue={personalInfoEdit.gender}
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                }}
                                onChange={handleGenderChange}
                                options={[
                                    {
                                        value: 'Erkak',
                                        label: 'Erkak',
                                    },
                                    {
                                        value: 'Ayol',
                                        label: 'Ayol',
                                    },
                                    {
                                        value: 'Other',
                                        label: 'Other',
                                    },
                                ]}
                            />
                        </label>

                        <label htmlFor="address">
                            <p>Address</p>
                            <input
                                className='EnterAdressInp'
                                type="text"
                                placeholder="Enter address"
                                value={personalInfoEdit.address}
                                onChange={handleAddressChange}
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
                    <div className="PersonalInformationEditStepTwoTitle">
                        <h2>Change information</h2>
                        <p>Do you confirm saving<br />
                            the changed information?</p>
                    </div>
                    <div className="PersonalInformationEditStepOneButtonsSaveTwo">
                        <button onClick={() => setStep(1)}>Go back</button>
                        <button onClick={() => {
                            setStep(3);
                            patchPersnoalInfo();
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
