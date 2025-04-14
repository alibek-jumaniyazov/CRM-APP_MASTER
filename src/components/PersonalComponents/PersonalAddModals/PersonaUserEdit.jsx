import React, { useEffect, useState } from 'react';
import { Icons } from '../../../Assets/icons/icons';
import { Image, Select, Upload } from 'antd';
import { FaRegCircleCheck } from 'react-icons/fa6';
import axios from 'axios';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default function PersonaUserEdit({ newEploye, setNewEploye, userId, getPersonal, personalUser }) {
    const [newEployeModalSecond, setNewEployeModalSecond] = useState(false);
    const [newEployeModalQuest, setNewEployeModalQuest] = useState(false);
    const [formData, setFormData] = useState({
        image: personalUser.image || null,
        first_name: personalUser.first_name || '',
        last_name: personalUser.last_name || '',
        ota_name: personalUser.ota_name || '',
        phone_number: personalUser.phone_number || '',
        role: personalUser.role || '',
        salary_type: personalUser.salary_type || '',
        monthly_salary: personalUser.monthly_salary || '',
    });

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        if (personalUser) {
            setFormData({
                image: personalUser.image || null,
                first_name: personalUser.first_name || '',
                last_name: personalUser.last_name || '',
                ota_name: personalUser.ota_name || '',
                phone_number: personalUser.phone_number || '',
                role: personalUser.role || '',
                salary_type: personalUser.salary_type || '',
                monthly_salary: personalUser.monthly_salary || '',
            });

            setFileList([
                {
                    uid: '1',
                    name: 'image.png',
                    status: 'done',
                    url: personalUser.image,
                },
            ]);
        }
    }, [personalUser]);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = (value) => {
        setFormData((prevData) => ({ ...prevData, gender: value }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
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
        if (formData.image === personalUser.image) {
            console.log("NICE");
            
        } else {
            payload.append('image', formData.image);
        }
        payload.append('first_name', formData.first_name);
        payload.append('last_name', formData.last_name);
        payload.append('ota_name', formData.ota_name);
        payload.append('phone_number', formData.phone_number);
        payload.append('role', formData.role);
        payload.append('salary_type', formData.salary_type);
        payload.append('monthly_salary', formData.monthly_salary);

        try {
            const response = await axios.patch(
                `https://api.quickhub.uz/api/personal/all/${userId}/change-edit/`,
                payload,
                {
                    headers: {
                        'Authorization': `Token ${storedToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            setFileList([])
            getPersonal()
            console.log(response.status);
        } catch (err) {
            console.error('Error response:', err.response?.data);
        }
    };
    return (
        <>
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

                <div className="PersonalNewEmployeModalInfo">

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">File Upload Label Link</p>
                        <div className="SettingForm">
                            <Upload
                                listType="picture-circle"
                                onPreview={handlePreview}
                                fileList={fileList}
                                onChange={handleChangeImg}
                                maxCount={1}
                                customRequest={({ file, onSuccess }) => {
                                    setTimeout(() => {
                                        onSuccess(file);
                                    }, 0);
                                }}
                            >
                                <div className="SettingFormUpload">
                                    <span>Drag and drop here or</span>
                                    <p>Browse Files</p>
                                </div>
                            </Upload>
                            {previewImage && (
                                <Image
                                    wrapperStyle={{
                                        display: 'none',
                                    }}
                                    preview={{
                                        visible: previewOpen,
                                        onVisibleChange: (visible) => setPreviewOpen(visible),
                                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                    }}
                                    src={previewImage}
                                />
                            )}
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
                <div className="AddSalaryModalButtons">
                    <div className="ConFimModalAddStudButtons">
                        <button onClick={() => setNewEploye(false)}>Cancel</button>
                        <button
                            style={{   border: 'none' }}
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
                        style={{   border: 'none', width: '100%' }}
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
        </>
    );
}
