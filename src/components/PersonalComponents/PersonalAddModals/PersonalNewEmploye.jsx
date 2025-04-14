import React, { useState } from 'react';
import { Icons } from '../../../Assets/icons/icons';
import { DatePicker, message, Select, Upload } from 'antd';
import { FaRegCircleCheck } from 'react-icons/fa6';
import axios from 'axios';


export default function PersonalNewEmploye({ newEploye, setNewEploye, setPersonalCardInfo }) {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [newEployeModalSecond, setNewEployeModalSecond] = useState(false);
    const [newEployeModalQuest, setNewEployeModalQuest] = useState(false);

    const [formData, setFormData] = useState({
        image: null,
        first_name: "",
        last_name: "",
        ota_name: "",
        phone_number: "+998 ",
        role: "",
        salary_type: "",
        monthly_salary: "",
        phone_number2: "+998 ",
        tg_username: "",
        insta_username: "",
        email: "",
        card_number: "",
        birthday: "",
        address: "",
        gender: "",
    });

    const [fileList, setFileList] = useState([]);

    const toggleDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
    };

    const toggleDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
    };

    const handleChange = (value) => {
        setFormData((prevData) => ({ ...prevData, gender: value }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleDateChange = (date, dateString) => {
        setFormData((prevData) => ({ ...prevData, birthday: dateString }));
    };

    const handleCloseMainModal = () => {
        setNewEploye(false);
        setNewEployeModalQuest(true);
    };

    const handleGoBackModal = () => {
        setNewEploye(true);
        setNewEployeModalQuest(false);
    };

    const handleOpenSecondModal = () => {
        setNewEploye(false);
        postPersonal();
        setNewEployeModalQuest(false);
        setNewEployeModalSecond(true);
        setTimeout(() => {
            setNewEployeModalSecond(false);
        }, 1000);
    };

    const handleChangeImg = (info) => {
        let fileList = [...info.fileList];
        if (info.file.status === 'done') {
            setFormData((prevData) => ({
                ...prevData,
                image: fileList[0].originFileObj
            }));
        }
        setFileList(fileList);
    };

    const storedToken = localStorage.getItem('token');
    const postPersonal = async () => {
        const payload = new FormData();
        payload.append('image', formData.image);
        payload.append('first_name', formData.first_name);
        payload.append('last_name', formData.last_name);
        payload.append('ota_name', formData.ota_name);
        payload.append('phone_number', formData.phone_number);
        payload.append('role', formData.role);
        payload.append('salary_type', formData.salary_type);
        payload.append('monthly_salary', formData.monthly_salary);
        payload.append('phone_number2', formData.phone_number2);
        payload.append('tg_username', formData.tg_username);
        payload.append('insta_username', formData.insta_username);
        payload.append('email', formData.email);
        payload.append('card_number', formData.card_number);
        payload.append('birthday', formData.birthday);
        payload.append('address', formData.address);
        payload.append('gender', formData.gender);

        try {
            const response = await axios.post(
                'https://api.quickhub.uz/api/personal/all/',
                payload,
                {
                    headers: {
                        'Authorization': `Token ${storedToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            setFormData({
                image: null,
                first_name: "",
                last_name: "",
                ota_name: "",
                phone_number: "+998 ",
                role: "",
                salary_type: "",
                monthly_salary: "",
                phone_number2: "+998 ",
                tg_username: "",
                insta_username: "",
                email: "",
                card_number: "",
                birthday: "",
                address: "",
                gender: "",
            })
            setFileList([])
            setPersonalCardInfo((prev) => [...prev, response.data]);
        } catch (err) {
            console.error('Error response:', err.response?.data);
            message.error('Failed to add new employee');
        }
    };

    return (
        <div className="">
            <div className={newEploye ? 'PersonalNewEmploye NewCustomerModal' : 'none'}>
                <div className="NewCustomerModalHeader">
                    <div className="" onClick={() => setNewEploye(false)}>
                        <Icons.close />
                    </div>
                </div>
                <div className="NewCustomerModalTitles">
                    <p>Add a new customer</p>
                    <span>Add new customer information</span>
                </div>
                <div className="CourseLevelHeaderToggles">
                    <p id="ActiveP" onClick={toggleDiv1} className={showDiv1 ? 'active' : ''}>
                        Main
                    </p>
                    <p id="ActiveP" onClick={toggleDiv2} className={showDiv2 ? 'active' : ''}>
                        Additional
                    </p>
                </div>
                {showDiv1 && (
                    <div className="PersonalNewEmployeModalInfo">

                        <div className="SettingFormInfo">
                            <p className="SettingFormInfoTitle">File Upload Label Link</p>
                            <div className="SettingForm">
                                <Upload
                                    listType="picture-circle"
                                    fileList={fileList}
                                    onChange={handleChangeImg}
                                    customRequest={({ file, onSuccess }) => {
                                        onSuccess(null, file);
                                    }}
                                >
                                    <div className="SettingFormUpload">
                                        <span>Drag and drop here or</span>
                                        <p>Browse Files</p>
                                    </div>
                                </Upload>
                            </div>
                        </div>
                        <div className="PersonalNewEmployeModalInputs">
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">First name*</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Last name*</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Patronymic</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="ota_name"
                                        placeholder="Patronymic"
                                        value={formData.ota_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Main phone number (for sending sms)*</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        placeholder="+998"
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Role</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Role in business"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Branches for access*</p>
                                <div className="SettingForm">
                                    <Select
                                        disabled
                                        defaultValue="Select branches"
                                        style={{
                                            width: '100%',
                                            height: '45px',
                                            borderRadius: '10px',
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'Select branches',
                                                label: 'Select branches',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Salary type*</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="salary_type"
                                        placeholder="Salary type"
                                        value={formData.salary_type}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Monthly salary*</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="monthly_salary"
                                        placeholder="Monthly salary"
                                        value={formData.monthly_salary}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showDiv2 && (
                    <div className="PersonalNewEmployeModalInfo">
                        <div className="PersonalNewEmployeModaleText">
                            <div className="">
                                <p>Contacts</p>
                            </div>
                        </div>
                        <div className="PersonalNewEmployeModalInputs">
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Phone number (secondary)</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="tel"
                                        name="phone_number2"
                                        placeholder="+998"
                                        value={formData.phone_number2}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Telegram profile (example: username)</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="tg_username"
                                        placeholder="@telegram"
                                        value={formData.tg_username}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Instagram profile (example: username)</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="insta_username"
                                        placeholder="@instagram"
                                        value={formData.insta_username}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">E-mail (example: email@example.com)</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="PersonalNewEmployeModaleText">
                            <p>Informations</p>
                        </div>
                        <div className="PersonalNewEmployeModalInputs">
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Card number</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="card_number"
                                        placeholder="Enter card number"
                                        value={formData.card_number}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Birthday</p>
                                <div className="SettingForm">
                                    <DatePicker
                                        style={{
                                            width: '100%',
                                            height: '45px',
                                            borderRadius: '10px',
                                        }}
                                        onChange={handleDateChange}
                                    />
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Gender</p>
                                <div className="SettingForm">
                                    <Select
                                        defaultValue="Select"
                                        style={{
                                            width: '100%',
                                            height: '45px',
                                            borderRadius: '10px',
                                        }}
                                        onChange={handleChange}
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
                                </div>
                            </div>
                            <div className="PersonalNewEmployeSelects">
                                <p className="SettingFormInfoTitle">Address</p>
                                <div className="PersonalNewEmployeModalInput">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="AddSalaryModalButtons">
                    <div className="ConFimModalAddStudButtons">
                        <button onClick={() => setNewEploye(false)}>Cancel</button>
                        <button
                            style={{ border: 'none' }}
                            id="YesConFimModalAddStudButtons"
                            onClick={handleCloseMainModal}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
            <div className={newEployeModalQuest ? 'ConFimModalAddStud addSalaryQuestModalCheck QuestSecondPosation' : 'none'}>
                <div className="ConFimModalAddStudClose" onClick={() => setNewEployeModalQuest(false)}>
                    <Icons.close />
                </div>
                <div className="ConFimModalAddStudTitle ">
                    <h2>Confirm add new employee</h2>
                    <p>
                        Do you want to confirm the addition of a new
                        <br /> employee?
                    </p>
                </div>
                <div className="ConFimModalAddStudButtons addSalaryQuestModalButton">
                    <button onClick={handleGoBackModal} style={{ width: '100%' }}>
                        Go back
                    </button>
                    <button
                        style={{ border: 'none', width: '100%' }}
                        id="YesConFimModalAddStudButtons"
                        onClick={handleOpenSecondModal}
                    >
                        Yes
                    </button>
                </div>
            </div>

            <div className={newEployeModalSecond ? 'LastConFimModalAddStud QuestSecondPosation' : 'none'}>
                <div className="ConFimModalAddStudLogo">
                    <span>
                        <FaRegCircleCheck />
                    </span>
                </div>
                <div className="LastConFimModalAddStudTitle">
                    <h2>New employee added</h2>
                    <p>All informations added to system!</p>
                </div>
            </div>
        </div>
    );
}
