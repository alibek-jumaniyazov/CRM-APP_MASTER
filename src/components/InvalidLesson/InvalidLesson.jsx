import { useState } from 'react';
import './InvalidLesson.css';
import { FaAngleUp } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import InputIcon from './../../Assets/Input_Icon.svg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import Alert from './../../Assets/alert.png'

export default function InvalidLesson({ onClose }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [error, setError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)
    const [isOpenFour, setIsOpenFour] = useState(false)
    const [isOpenFive, setIsOpenFive] = useState(false)
    const [isOpenSix, setIsOpenSix] = useState(false)
    const [isOpenSeven, setIsOpenSeven] = useState(false)
    const [isOpenSecondObe, setisOpenSecondObe] = useState(false)
    const [isOpenSecondTwo, setisOpenSecondTwo] = useState(false)
    const [isOpenSecondThree, setisOpenSecondThree] = useState(false)
    const [isOpenSecondFour, setisOpenSecondFour] = useState(false)
    const [isOpenSecondSix, setisOpenSecondSix] = useState(false)
    const [isOpenSecondSeven, setisOpenSecondSeven] = useState(false)
    const [isCustomPrice, setIsCustomPrice] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedValues, setSelectedValues] = useState([]);

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);

    const isDateInTwoWeeksRange = (date) => {
        return date >= sevenDaysAgo && date <= sevenDaysLater;
    };

    const handleCheckboxChange = (event) => {
        setIsCustomPrice(event.target.checked);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const togleDropdownOne = () => {
        setIsOpenOne(!isOpenOne);
    }

    const togleDropdownTwo = () => {
        setIsOpenTwo(!isOpenTwo);
    }

    const togleDropdownThree = () => {
        setIsOpenThree(!isOpenThree);
    }

    const togleDropdownFour = () => {
        setIsOpenFour(!isOpenFour);
    }

    const togleDropdownFive = () => {
        setIsOpenFive(!isOpenFive);
    }

    const togleDropdownSix = () => {
        setIsOpenSix(!isOpenSix);
    }

    const togleDropdownSeven = () => {
        setIsOpenSeven(!isOpenSeven);
    }

    const togleDropdownSecondOne = () => {
        setisOpenSecondObe(!isOpenSecondObe);
    }

    const togleDropdownSecondTwo = () => {
        setisOpenSecondTwo(!isOpenSecondTwo);
    }

    const togleDropdownSecondThree = () => {
        setisOpenSecondThree(!isOpenSecondThree);
    }

    const togleDropdownSecondFour = () => {
        setisOpenSecondFour(!isOpenSecondFour);
    }


    const togleDropdownSecondSix = () => {
        setisOpenSecondSix(!isOpenSecondSix);
    }

    const togleDropdownSecondSeven = () => {
        setisOpenSecondSeven(!isOpenSecondSeven);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };


    const handleToggle = (id) => {
        setSelectedValues(prevSelectedValues =>
            prevSelectedValues.includes(id)
                ? prevSelectedValues.filter(value => value !== id)
                : [...prevSelectedValues, id]
        );
    };
    const handleNext = () => {
        if (!selectedValue) {
            setError(true);
        } else {
            setError(false);
            if (selectedValue === 'Individual lessons') {
                setStep(2); // Переход к модальному окну для индивидуальных уроков
            } else if (selectedValue === 'Group lessons') {
                setStep(6); // Переход к модальному окну для групповых уроков
            }
        }
    };

    const items = [
        { id: 1, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 2, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 3, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 4, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 5, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 6, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 7, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 8, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 9, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
        { id: 10, teacher: 'Mr.Johnson', time: 'TTS - 14:00' },
    ];




    const [step, setStep] = useState(1);

    return (
        <div className="InvalidLesson">
            {step === 1 && (
                <div className="MakeNewStudentContainer">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="MakeNewStudentContainerBox">
                        <div className="MakeNewStudentTitle">
                            <h2>Add a new student</h2>
                            <p>Fill in the requested information below</p>
                        </div>
                        <div className="MakeNewStudentSecondTitle">
                            <p>Create individual lesson for <span>Alisher Atajanov</span></p>
                        </div>
                        <div className="MakeNewStudentButtonsBox">
                            <label>
                                <p>Select subject*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownOne} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenOne ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenOne && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>Select level*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownTwo} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenTwo ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenTwo && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>Select teacher*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownThree} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenThree ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenThree && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>Select days*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownFour} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenFour ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenFour && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>General English: Beginner </button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button onClick={() => setStep(2)}>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>Select start time*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownFive} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenFive ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenFive && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>Select room*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownSix} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenSix ? <FaChevronDown /> : <FaAngleUp />}</span>
                                </button>
                                {isOpenSix && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <p>{isCustomPrice ? "New monthly price*" : "Discount Amount"}</p>
                                <div className="DropDuwnMakeModalAddStudInputBox">
                                    <span className="icon"><img src={InputIcon} alt="" /></span>
                                    <input
                                        type="text"
                                        placeholder={isCustomPrice ? "Add new price" : "Amount"}
                                        disabled={!isCustomPrice}
                                    />
                                </div>
                            </label>
                            <label>
                                <p>Select start day*</p>
                                <button className='ModalAddStudSelectButton' onClick={togleDropdownSeven} type="button">
                                    <p>Select</p>
                                    <span>{!isOpenSeven ? <FaAngleUp /> : <FaChevronDown />}</span>
                                </button>
                                {isOpenSeven && (
                                    <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                        <div className="DropDuwnMakeModalAddStudSelect">
                                            <button>3 odd days a week</button>
                                            <button>3 even days a week</button>
                                            <button>Every other day</button>
                                            <button>Every day</button>
                                            <button>Optional designation</button>
                                        </div>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="MakeNewStudentCheckBox">
                            <FormGroup> <FormControlLabel control={<Checkbox checked={isCustomPrice} onChange={handleCheckboxChange} />} label="Create a new individual price" className='MakeNewStudentCheckBoxCheck' /> </FormGroup>
                        </div>
                        <div className="MakeNewStudentInformation">
                            <div className="MakeNewStudentInformationUp">
                                <div className="MakeNewStudentInformationUpOne">
                                    <span>Total number of lessons: <p> 165</p></span>
                                    <span>Total study duration: <p> 6 months</p></span>
                                </div>
                                <div className="MakeNewStudentInformationUpTwo">
                                    <span>Start time: <p> 17:00</p></span>
                                    <span>End time: <p> 19:00</p></span>
                                </div>
                                <div className="MakeNewStudentInformationUpThree">
                                    <span>Start day: <p> May 15</p></span>
                                    <span>End day: <p> December  15</p></span>
                                </div>
                            </div>
                            <div className="MakeNewStudentInformationDown">
                                <div className="MakeNewStudentInformationDownOne">
                                    <span>Start day: <p> May 15</p></span>
                                    <span>Monthly discount:<p> 28 000 so’m</p></span>
                                </div>
                                <div className="MakeNewStudentInformationDownTwo">
                                    <span>Total payment:<p> 1 200 000 so’m</p></span>
                                    <span>Total discount:<p>  168 000 so’m</p></span>
                                </div>
                            </div>
                        </div>
                        <div className="ModaAddStudButtons">
                            <button className='ModaAddStudButtonsCancel' onClick={onClose}>Close</button>
                            <button className='ModaAddStudButtonsNext' onClick={() => setStep(3)}>Confrim</button>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="MakeNewStudentContainer">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="MakeNewStudentContainerBox">
                        <div className="MakeNewStudentTitle">
                            <h2>Add a new student</h2>
                            <p>Fill in the requested information below</p>
                        </div>
                        <div className="MakeNewStudentSecondTitle">
                            <p>Create individual lesson for <span>Alisher Atajanov</span></p>
                        </div>
                        <div className="MakeNewStudentButtonsBox" id='SrtepThreeMakeNewStudButBox'>
                            <div className="MakeNewStudentButtonsBoxUp">
                                <label>
                                    <p>Select start day*</p>
                                    <button className='ModalAddStudSelectButton' onClick={togleDropdownSecondOne} type="button">
                                        <p>Select</p>
                                        <span>{!isOpenSecondObe ? <FaAngleUp /> : <FaChevronDown />}</span>
                                    </button>
                                    {isOpenSecondObe && (
                                        <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                            <div className="DropDuwnMakeModalAddStudSelect">
                                                <button>3 odd days a week</button>
                                                <button>3 even days a week</button>
                                                <button>Every other day</button>
                                                <button>Every day</button>
                                                <button>Optional designation</button>
                                            </div>
                                        </div>
                                    )}
                                </label>
                                <label>
                                    <p>Select start day*</p>
                                    <button className='ModalAddStudSelectButton' onClick={togleDropdownSecondTwo} type="button">
                                        <p>Select</p>
                                        <span>{!isOpenSecondTwo ? <FaAngleUp /> : <FaChevronDown />}</span>
                                    </button>
                                    {isOpenSecondTwo && (
                                        <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                            <div className="DropDuwnMakeModalAddStudSelect">
                                                <button>3 odd days a week</button>
                                                <button>3 even days a week</button>
                                                <button>Every other day</button>
                                                <button>Every day</button>
                                                <button>Optional designation</button>
                                            </div>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <div className="MakeNewStudentButtonsBoxDown">
                                <div className="MakeNewStudentButtonsBoxDownLeft">
                                    <label className='NujenMarginDown'>
                                        <p>Select start day*</p>
                                        <button className='ModalAddStudSelectButton' onClick={togleDropdownSecondThree} type="button">
                                            <p>Select</p>
                                            <span>{!isOpenSecondThree ? <FaAngleUp /> : <FaChevronDown />}</span>
                                        </button>
                                        {isOpenSecondThree && (
                                            <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                                <div className="DropDuwnMakeModalAddStudSelect">
                                                    <button>3 odd days a week</button>
                                                    <button>3 even days a week</button>
                                                    <button>Every other day</button>
                                                    <button>Every day</button>
                                                    <button>Optional designation</button>
                                                </div>
                                            </div>
                                        )}
                                    </label>
                                    <label className='NujenMargin'>
                                        <p>Select start day*</p>
                                        <button className='ModalAddStudSelectButton' onClick={togleDropdownSecondFour} type="button">
                                            <p>Select</p>
                                            <span>{!isOpenSecondFour ? <FaAngleUp /> : <FaChevronDown />}</span>
                                        </button>
                                        {isOpenSecondFour && (
                                            <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                                <div className="DropDuwnMakeModalAddStudSelect">
                                                    <button>3 odd days a week</button>
                                                    <button>3 even days a week</button>
                                                    <button>Every other day</button>
                                                    <button>Every day</button>
                                                    <button>Optional designation</button>
                                                </div>
                                            </div>
                                        )}
                                    </label>
                                    <label className='NujenMargin'>
                                        <p>Select start day*</p>
                                        <button className='ModalAddStudSelectButton ' onClick={togleDropdownSecondSix} type="button">
                                            <p>Select</p>
                                            <span>{!isOpenSecondSix ? <FaAngleUp /> : <FaChevronDown />}</span>
                                        </button>
                                        {isOpenSecondSix && (
                                            <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                                <div className="DropDuwnMakeModalAddStudSelect">
                                                    <button>3 odd days a week</button>
                                                    <button>3 even days a week</button>
                                                    <button>Every other day</button>
                                                    <button>Every day</button>
                                                    <button>Optional designation</button>
                                                </div>
                                            </div>
                                        )}
                                    </label>
                                </div>
                                <div className="MakeNewStudentButtonsBoxDownRight">
                                    <label>
                                        <p>Select start day*</p>
                                        <button onClick={() => setStep(1)} className='ModalAddStudSelectButton' type="button">
                                            <p>Optional designation</p>
                                            <span className='SuChAK'><IoIosCloseCircleOutline /></span>
                                        </button>
                                    </label>
                                    <div className="MakeNewStudentButtonsBoxDownRightDateBox">
                                        <div className="custom-datepicker MakeNewStudentButtonsBoxDownRightDate">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                inline
                                                dayClassName={(date) =>
                                                    isDateInTwoWeeksRange(date) ? "" : "hidden-date"
                                                }
                                            />
                                        </div>
                                        <div className="SelectDaysRightDate">
                                            <p>Selected date: {startDate.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MakeNewStudentButtonsBoxDownSecond">
                                <label>
                                    <p>{isCustomPrice ? "New monthly price*" : "Discount Amount"}</p>
                                    <div className="DropDuwnMakeModalAddStudInputBox">
                                        <span className="icon"><img src={InputIcon} alt="" /></span>
                                        <input
                                            type="text"
                                            placeholder={isCustomPrice ? "Add new price" : "Amount"}
                                            disabled={!isCustomPrice}
                                        />
                                    </div>
                                    <div className="MakeNewStudentCheckBox axaxaxaxax">
                                        <FormGroup> <FormControlLabel control={<Checkbox checked={isCustomPrice} onChange={handleCheckboxChange} />} label="Create a new individual price" className='MakeNewStudentCheckBoxCheck' /> </FormGroup>
                                    </div>
                                </label>
                                <label>
                                    <p>Select start day*</p>
                                    <button className='ModalAddStudSelectButton' onClick={togleDropdownSecondSeven} type="button">
                                        <p>Select</p>
                                        <span>{!isOpenSecondSeven ? <FaAngleUp /> : <FaChevronDown />}</span>
                                    </button>
                                    {isOpenSecondSeven && (
                                        <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                                            <div className="DropDuwnMakeModalAddStudSelect">
                                                <button>3 odd days a week</button>
                                                <button>3 even days a week</button>
                                                <button>Every other day</button>
                                                <button>Every day</button>
                                                <button>Optional designation</button>
                                            </div>
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="SpecifiedBox">
                                    <span><img src={Alert} alt="" /></span>
                                    <p>The specified teacher has lessons on x days at x hours</p>
                        </div>
                        <div className="ModaAddStudButtons MarginModaAddStudButtons Xuaaaaaa">
                            <button className='ModaAddStudButtonsCancel' onClick={() => setStep(1)}>Go back</button>
                            <button className='ModaAddStudButtonsNext' onClick={() => setStep(3)}>Confrim</button>
                        </div>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="ConFimModalAddStud">
                    <div className="ConFimModalAddStudClose" onClick={onClose}><IoClose /></div>
                    <div className="ConFimModalAddStudTitle">
                        <h2>Confirm adding new <br />
                            individual lesson for student</h2>
                        <p>Do you want to confirm adding <br />
                            new individual lesson for student?</p>
                    </div>
                    <div className="ConFimModalAddStudButtons">
                        <button onClick={() => setStep(3)}>Go back</button>
                        <button id='YesConFimModalAddStudButtons' onClick={() => {
                            setStep(4);
                            setTimeout(() => {
                                onClose();
                            }, 1000);
                        }}>Yes</button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>Done successfully</h2>
                        <p>Added new individual lesson</p>
                    </div>
                </div>
            )}
        </div>
    )
}