import './StudEditModal.css';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function StudEditModal({ onClose }) {
    const [subject, setSubject] = useState("Select");
    const [lessonType, setLessonType] = useState("Select");
    const [teacher, setTeacher] = useState("Select");
    const [lessonTime, setLessonTime] = useState("Select");
    const [addedDate, setAddedDate] = useState("Select");
    const [changedDate, setChangedDate] = useState("Select");
    const [studyDates, setStudyDates] = useState("Select");
    const [advertisingSource, setAdvertisingSource] = useState("Select");

    // State to control the modal step
    const [step, setStep] = useState(1);

    // State to control dropdown visibility
    const [openDropdown, setOpenDropdown] = useState(null);

    // Helper function to render dropdown options
    const renderDropdown = (value, options, setValue, dropdownKey) => (
        <div className="RenderDrop">
            <button
                onClick={() => setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey)}
            >
                <p>{value}</p>
                <span>{openDropdown === dropdownKey ? <FaAngleUp /> : <FaChevronDown />}</span>
            </button>
            {openDropdown === dropdownKey && (
                <div className="RenderDropContent">
                    {options.map(option => (
                        <div
                            key={option}
                            onClick={() => {
                                setValue(option);
                                setOpenDropdown(null); // Close dropdown after selection
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="StudEditModal">
            {step === 1 && (
                <div className="StudEditModalContantOne">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="StudEditModalContantOneTitle">
                        <h2>Edit lead informations</h2>
                        <p>Change the initial data of the student during the lead time</p>
                    </div>
                    <div className="StudEditModalContantOneContant">
                        <label>
                            <p>Select subject</p>
                            {renderDropdown(subject, ["English", "Russian"], setSubject, 'subject')}
                        </label>
                        <label>
                            <p>Select level</p>
                            {renderDropdown(lessonType, ["Beginner", "Intermediate"], setLessonType, 'lessonType')}
                        </label>
                        <label>
                            <p>Select lesson type</p>
                            {renderDropdown(teacher, ["Group lesson", "Individual lesson"], setTeacher, 'teacher')}
                        </label>
                        <label>
                            <p>Select teacher</p>
                            {renderDropdown(lessonTime, ["Mr.Alibek", "Mr.Aleksey"], setLessonTime, 'lessonTime')}
                        </label>
                        <label>
                            <p>Select lesson time</p>
                            {renderDropdown(addedDate, ["09:00 - 10:00", "10:00 - 11:00"], setAddedDate, 'addedDate')}
                        </label>
                        <label>
                            <p>Select  lead source</p>
                            <div className="Change">
                                <button
                                    className="ChangeDropBut"
                                    onClick={() => setOpenDropdown(openDropdown === 'changedDate' ? null : 'changedDate')}
                                >
                                    <p>{changedDate}</p>
                                    <span>{openDropdown === 'changedDate' ? <FaAngleUp /> : <FaChevronDown />}</span>
                                </button>
                                {openDropdown === 'changedDate' && (
                                    <div className="ChangeDropButContent">
                                        {["Web site", "Outdoor advertising", "Social network", "Recommendation", "Other", "Finished"].map(option => (
                                            <div
                                                key={option}
                                                onClick={() => {
                                                    setChangedDate(option);
                                                    setOpenDropdown(null); // Close dropdown after selection
                                                }}
                                                className={`dropdown-item ${option.replace(/\s+/g, '-').toLowerCase()}`}
                                            >
                                                <span>{option}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="StudEditModalContantOneButton">
                        <button>Cancel</button>
                        <button onClick={() => setStep(2)}>Save</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="StudEditModalContantOneConfim">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="StudEditModalContantOneConfimTitle">
                        <h2>Confirm to save the changed <br /> information</h2>
                        <p>Do you confirm saving the changed data?</p>
                    </div>
                    <div className="StudEditModalContantOneConfimButton">
                        <button onClick={() => setStep(1)}>Go back</button>
                        <button onClick={() => {
                            setStep(3);
                            setTimeout(() => {
                                onClose();
                            }, 2000);
                        }}> Yes</button>
                    </div>
                </div>
            )
            }
            {step === 3 && (
                <div className="StudEditModalContantOneConfimSec">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="StudEditModalContantOneConfimSecTitle">
                        <h2>Saved</h2>
                        <p>All changed contacts saved!</p>
                    </div>
                </div>
            )
            }
        </div >
    );
}
