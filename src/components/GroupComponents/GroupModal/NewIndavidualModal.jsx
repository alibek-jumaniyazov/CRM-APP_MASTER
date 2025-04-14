import { DatePicker, Select } from 'antd';
import React, { useState } from 'react';

export default function NewIndavidualModal({ handleCloseModal, studentMenuStatus, setStudentMenuStatus, courseSelect, coursePersnoal, roomSelect }) {
    const [tarif, setTarif] = useState('');
    const [formData, setFormData] = useState({
        course: 'select',
        monthlyDiscount: '',
        teacher: 'select',
        teacherPercentage: '',
        selectedDays: 'select',
        startTime: 'select',
        room: 'select',
        startDay: 'select',
    });

    const [formData2, setFormData2] = useState({
        course: 'select',
        monthlyDiscount: '',
        teacher: 'select',
        teacherPercentage: '',
        selectedDays: 'select',
        startTime: 'select',
        room: 'select',
        startDay: 'select',
    });


    const handleLeftTarif = () => {
        setStudentMenuStatus(1);
        setTarif("left");
    };

    const handleRightTarif = () => {
        setStudentMenuStatus(2);
        setTarif("right");
    };

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleDateChange = (date, dateString) => {
        setFormData((prevData) => ({ ...prevData, startDay: dateString }));
    };

    const handleChange2 = (key, value) => {
        setFormData2((prev) => ({ ...prev, [key]: value }));
    };

    const handleDateChange2 = (date, dateString) => {
        setFormData2((prevData) => ({ ...prevData, startDay: dateString }));
    };

    const handleNext = () => {
        setStudentMenuStatus(0);
        handleCloseModal()
    };
    const handleNext2 = () => {
        setStudentMenuStatus(0);
        handleCloseModal()
    };

    return (
        <>
            <div className="newLeaadCard_studentMenu1">
                <div className="newLeaadCard_studentMenu_title">
                    <h2>Create new individual course</h2>
                    <p>Select student or customer and select options</p>
                </div>
                <div className="newLeaadCard_studentMenu_Menu" style={{ paddingInline: "25px" }}>
                    <div onClick={handleLeftTarif} className={"newLeaadCard_studentMenu_Menu_btn1 " + (tarif === "left" && "active")} style={{ width: "50%" }}>
                        <h2>1</h2>
                        <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                            <p>1 month = 12 paid lesson</p>
                            <span>12 paid lesson and required bonus les.</span>
                        </div>
                    </div>
                    <div onClick={handleRightTarif} className={"newLeaadCard_studentMenu_Menu_btn1 " + (tarif === "right" && "active")} style={{ width: "50%" }}>
                        <h2>2</h2>
                        <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                            <p>1 month = 31 paid lesson</p>
                            <span>14 paid lesson and optional bonus les.</span>
                        </div>
                    </div>
                </div>
            </div>
            {studentMenuStatus === 1 && (
                <div className="newLeaadCard_studentMenu1_chil" style={{ width: "100%" }}>
                    <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                        <div>
                            <label>Select course*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange('course', value)}
                                options={
                                    courseSelect.map(item => ({
                                        value: item.id,
                                        label: item.name,
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Monthly discount</label>
                            <input
                                placeholder="Amount"
                                type="text"
                                value={formData.monthlyDiscount}
                                onChange={(e) => handleChange('monthlyDiscount', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Select teacher*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange('teacher', value)}
                                options={
                                    coursePersnoal.map(item => ({
                                        value: item.id,
                                        label: `${item.first_name} ${item.last_name}`
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Teacher percentage*</label>
                            <input
                                placeholder="0-100%"
                                type="text"
                                value={formData.teacherPercentage}
                                onChange={(e) => handleChange('teacherPercentage', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Select Days</label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange('selectedDays', value)}
                                options={[
                                    {
                                        value: "Juft kun",
                                        label: "Juft kun",
                                    },
                                    {
                                        value: "Toq kun",
                                        label: "Toq kun",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label>Select start time*</label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange('startTime', value)}
                                options={[
                                    {
                                        value: "0900",
                                        label: "09:00",
                                    },
                                    {
                                        value: "1400",
                                        label: "14:00",
                                    },
                                    {
                                        value: "1800",
                                        label: "18:00",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label>Select room*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange('room', value)}
                                options={
                                    roomSelect.map(item => ({
                                        value: item.name,
                                        label: item.name
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Select start day</label>
                            <DatePicker
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                    <div className="addCardInfo2">
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Total number of lesson:</label>
                                <span>165</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>Total study duration:</label>
                                <span>6 months</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Start time:</label>
                                <span>17:00</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>End time:</label>
                                <span>19:00</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Start day:</label>
                                <span>May 15</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>End day:</label>
                                <span>deckaber 15</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Monthly payment:</label>
                                <span>200 000 so'm</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>Monthly discount:</label>
                                <span>28 000 so'm</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Monthly payment:</label>
                                <span>200 000 so'm</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>Monthly discount:</label>
                                <span>28 000 so'm</span>
                            </div>
                        </div>
                    </div>
                    <div className="newLeaadCard_studentMenu_Menu_footerBtn" style={{ width: "100%" }}>
                        <button onClick={handleCloseModal}>Cancel</button>
                        <button onClick={() => setStudentMenuStatus(3)}>Next</button>
                    </div>
                </div>
            )}
            {studentMenuStatus === 2 && (
                <div className="newLeaadCard_studentMenu1_chil" style={{ width: "100%" }}>
                    <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                        <div>
                            <label>Select course*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange2('course', value)}
                                options={
                                    courseSelect.map(item => ({
                                        value: item.id,
                                        label: item.name,
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Monthly discount</label>
                            <input
                                placeholder="Amount"
                                type="text"
                                value={formData2.monthlyDiscount}
                                onChange={(e) => handleChange2('monthlyDiscount', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Select teacher*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange2('teacher', value)}
                                options={
                                    coursePersnoal.map(item => ({
                                        value: item.id,
                                        label: `${item.first_name} ${item.last_name}`
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Teacher percentage*</label>
                            <input
                                placeholder="0-100%"
                                type="text"
                                value={formData2.teacherPercentage}
                                onChange={(e) => handleChange2('teacherPercentage', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Select Days</label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange2('selectedDays', value)}
                                options={[
                                    {
                                        value: "Juft kun",
                                        label: "Juft kun",
                                    },
                                    {
                                        value: "Toq kun",
                                        label: "Toq kun",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label>Select start time*</label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange2('startTime', value)}
                                options={[
                                    {
                                        value: "0900",
                                        label: "09:00",
                                    },
                                    {
                                        value: "1400",
                                        label: "14:00",
                                    },
                                    {
                                        value: "1800",
                                        label: "18:00",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label>Select room*</label>
                            <Select
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={(value) => handleChange2('room', value)}
                                options={
                                    roomSelect.map(item => ({
                                        value: item.name,
                                        label: item.name
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>Select start day</label>
                            <DatePicker
                                className="studentMenu1_chil_form_selectt"
                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                onChange={handleDateChange2}
                            />
                        </div>
                    </div>
                    <div className="addCardInfo2">
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Total number of lesson:</label>
                                <span>165</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>Total study duration:</label>
                                <span>6 months</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Start time:</label>
                                <span>17:00</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>End time:</label>
                                <span>19:00</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Start day:</label>
                                <span>May 15</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>End day:</label>
                                <span>deckaber 15</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label>Monthly payment:</label>
                                <span>200 000 so'm</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label>Monthly discount:</label>
                                <span>28 000 so'm</span>
                            </div>
                        </div>
                    </div>
                    <div className="newLeaadCard_studentMenu_Menu_footerBtn" style={{ width: "100%" }}>
                        <button onClick={handleCloseModal}>Cancel</button>
                        <button onClick={() => {
                            console.log(formData2); // Konsolga chiqarish
                            setStudentMenuStatus(3);
                        }}>Next</button>
                    </div>
                </div>
            )}

            {studentMenuStatus === 3 && (
                <>
                    <div className="newLeaadCard_studentMenu1">
                        <div className="newLeaadCard_studentMenu_title">
                            <h2>Confirm creating new individual course</h2>
                            <p>Do you want to confirm creating new individual course?</p>
                        </div>
                        <div className="newLeaadCard_studentMenu_Menu_footerBtn btn_groups" style={{ width: "100%" }}>
                            <button onClick={() => setStudentMenuStatus(2)}>
                                Go Back
                            </button>
                            <button onClick={() => {
                                console.log(formData2);
                                handleNext();
                            }}>Next</button>
                        </div>
                    </div>
                </>
            )}

            {studentMenuStatus === 4 && (
                <>
                    <div className="newLeaadCard_studentMenu1">
                        <div className="newLeaadCard_studentMenu_title">
                            <h2>Confirm creating new individual course</h2>
                            <p>Do you want to confirm creating new individual course?</p>
                        </div>
                        <div className="newLeaadCard_studentMenu_Menu_footerBtn btn_groups" style={{ width: "100%" }}>
                            <button onClick={() => setStudentMenuStatus(3)}>
                                Go Back
                            </button>
                            <button onClick={() => {
                                console.log(formData2);
                                handleNext2();
                            }}>Next</button>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}
