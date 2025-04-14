import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Coin from './../../Assets/icons/coins.png';
import Calendsr from './../../Assets/icons/calendar.png';
import Acedem from './../../Assets/icons/Academ.png';
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ModalExpence({ onClose }) {
    const [currentDate, setCurrentDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('Select');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const courses = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        title: `General English: Beginner level ${index + 1}`,
        time: `TTS - 14:00 Mr.Aleksey ${index + 1}`,
    }));

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCourseSelect = (courseTitle) => {
        setSelectedCourse(courseTitle);
        setIsOpen(false);
    };


    useEffect(() => {
        const today = new Date();

        const formattedDate = today.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    const [step, setStep] = useState(1);

    return (
        <div className="ModalMakeContainer">
            {step === 1 && (
                <div className="AddRefund AddExpence">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="AddRefundTitle">
                        <h2>Add expense</h2>
                        <p>If you add an expense, it will be deducted from the student's balance,<br />
                            the fee will be added to the system as a benefit, and</p>
                    </div>
                    <div className="AddRefundContant">
                        <div className="AddRefundSelect">
                            <p>Select course*</p>
                            <button onClick={toggleDropdown}>
                                <p>{selectedCourse}</p>
                                <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </button>
                            {isOpen && (
                                <ul className="dropdown">
                                    {courses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="DropDiv"
                                            onClick={() => handleCourseSelect(course.title)}
                                        >
                                            <div className="dropdownLeft">
                                                <span><img src={Acedem} alt="Acedem" /></span>
                                                <p>{course.title}</p>
                                            </div>
                                            <div className="dropdownRight">
                                                <p>{course.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="dubleAddRefundSelect">
                            <label>
                                <p>Select date</p>
                                <button className="SegDate">
                                    <span><img src={Calendsr} alt="" /></span>
                                    <p>{currentDate}</p>
                                </button>
                            </label>
                            <label>
                                <p>Payment amount*</p>
                                <button>
                                    <span>
                                        <img src={Coin} alt="Coin" />
                                    </span>
                                    <input type="text" placeholder="Amount" />
                                </button>
                            </label>
                        </div>
                        <div className="CommentAddRefundSelect">
                            <p>Comment (optional)</p>
                            <textarea name="text" id="CommentAddRefundSelectText" placeholder="Note for payment"></textarea>
                        </div>
                        <div className="balanceAddRefundSelect">
                            <p>Current balance:<span>557 000 so’m</span></p>
                            <label>
                                <input type="checkbox" />
                                <p>Print a check</p>
                            </label>
                        </div>
                        <div className="ButtonAddRefundSelect">
                            <button className="Cancel" onClick={onClose}>Cancel</button>
                            <button className="Confim" onClick={() => setStep(2)}>Confim</button>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="SecondTwar">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="SecondTwarTitle">
                        <h2>Add expense without a check ?</h2>
                        <p>Continue adding expense to the system <br /> without printing a check ?</p>
                    </div>
                    <div className="SecondTwarCheck">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <p>Print payment check</p>
                    </div>
                    <div className="SecondTwarButtons">
                        <button className="GoBack">Go back</button>
                        <button className="Yas" onClick={() => {
                            setStep(3);
                            setTimeout(() => {
                                onClose();
                            }, 1000);
                        }}>
                            {isChecked ? "With check" : "Yes"}
                        </button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="TherdTwar">
                    <div className="TherdTwarIcon">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="TherdTwarTitle">
                        <h2>Expense added</h2>
                        <p>Student’s expense have been added to the <br /> system</p>
                    </div>
                </div>
            )}
        </div>
    );
}
