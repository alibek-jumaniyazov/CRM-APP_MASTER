import './GroupShedul.css'
import { LuCheckSquare } from "react-icons/lu";
import { BsExclamationCircle } from "react-icons/bs";
import { useState, useRef } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';
import { FiEdit } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { SlStar } from "react-icons/sl";
import { FiInfo } from "react-icons/fi";

const Dropdown = ({ content }) => (
    <div className="dropdown-contentainer">
        <div className="dropdown-content">
            <h2>Lesson topic:</h2>
            <p>{content}</p>
        </div>
        <div className="dropdown-arrow"></div>
    </div>
);

const ToggleButton = ({ onToggle }) => {
    const [activeButton, setActiveButton] = useState(''); // Управляет состоянием активной кнопки (left/right)
    const [activeButtonTwo, setActiveButtonTwo] = useState('');
    const [activeButtonFour, setActiveButtonFour] = useState(''); // Управляет состоянием второго уровня (left/right)
    const [activeButtonThree, setActiveButtonThree] = useState(''); // Управляет состоянием второго уровня (left/right)
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);

    const handleLeftClick = () => {
        setActiveButton('left');
    };

    const handleRightClick = () => {
        setActiveButton('right');
    };

    const handleLeftClickTwo = (e) => {
        e.stopPropagation();
        setActiveButton('');
        setActiveButtonTwo('');
        setActiveButtonThree('');
        setActiveButtonFour('')
    };

    const handleRightClickTwo = () => {
        setActiveButton('right');
        setActiveButtonTwo('right');
        setActiveButtonFour('right');
    };

    const handleRightClickThree = () => {
        setActiveButton('right');
        setActiveButtonTwo('right');
        setActiveButtonThree('right');
    };

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <button>
            {activeButton !== 'right' && (
                <div
                    className={`ButtonLeft ${activeButton === 'left' ? 'active' : ''}`}
                    onClick={handleLeftClick}
                    style={{
                        minWidth: isHoveredRight ? '30px' : '40px',
                        maxWidth: isHoveredRight ? '30px' : '40px',
                    }}
                    onMouseEnter={() => setIsHoveredLeft(true)}
                    onMouseLeave={() => setIsHoveredLeft(false)}
                >
                    <FaRegCircleCheck />
                    <p className='ButtonLeftP'>Was</p>
                    <div
                        className={`VualeyTwoButtonSecBox ${activeButtonTwo === 'left' || activeButtonTwo === 'right' ? 'flex' : ''}`}
                    >
                        {activeButtonTwo !== 'right' && (
                            <div
                                className={`VualeyTwoButtonSecBoxLeft ${activeButtonTwo === 'left' ? 'activete' : ''}`}
                                onClick={handleLeftClickTwo}
                                style={{
                                    minWidth: isHoveredRight ? '30px' : '40px',
                                    maxWidth: isHoveredRight ? '30px' : '40px',
                                }}
                                onMouseEnter={() => setIsHoveredLeft(true)}
                                onMouseLeave={() => setIsHoveredLeft(false)}
                            >
                                <FiEdit />
                            </div>
                        )}
                        {activeButtonTwo !== 'left' && (
                            <div
                                className={`VualeyTwoButtonSecBoxRight ${activeButtonTwo === 'right' ? 'activete' : ''}`}
                                onClick={handleRightClickTwo}
                                style={{
                                    minWidth: isHoveredLeft ? '30px' : '40px',
                                    maxWidth: isHoveredLeft ? '30px' : '40px',
                                }}
                                onMouseEnter={() => setIsHoveredRight(true)}
                                onMouseLeave={() => setIsHoveredRight(false)}
                            >
                                <SlStar />
                                <p className='VualeyTwoButtonSecBoxRightp'>Points</p>
                                <div
                                    className={`VualeyTwoButtonSecBoxVnut ${activeButtonThree === 'left' || activeButtonThree === 'right' ? 'flex' : ''}`}
                                >
                                    {activeButtonThree !== 'right' && (
                                        <div
                                            className={`VualeyTwoButtonSecBoxLeftSec ${activeButtonThree === 'left' ? 'ACtSH' : ''}`}
                                            onClick={handleLeftClickTwo}
                                            style={{
                                                minWidth: isHoveredRight ? '30px' : '40px',
                                                maxWidth: isHoveredRight ? '30px' : '40px',
                                            }}
                                            onMouseEnter={() => setIsHoveredLeft(true)}
                                            onMouseLeave={() => setIsHoveredLeft(false)}
                                        >
                                            <FiEdit />
                                        </div>
                                    )}
                                    {activeButtonThree !== 'left' && (
                                        <div
                                            className="VualeyTwoButtonSecBoxRightSec"
                                            style={{
                                                minWidth: isHoveredRight ? '30px' : '40px',
                                                maxWidth: isHoveredRight ? '30px' : '40px',
                                            }}
                                            onMouseEnter={() => setIsHoveredRight(true)}
                                            onMouseLeave={() => setIsHoveredRight(false)}
                                            onClick={onToggle}
                                        >
                                            <SlStar />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {activeButton !== 'left' && (
                <div
                    className={`ButtonRight ${activeButton === 'right' ? 'active' : ''}`}
                    onClick={handleRightClick}
                    style={{
                        minWidth: isHoveredLeft ? '30px' : '40px',
                        maxWidth: isHoveredLeft ? '30px' : '40px',
                    }}
                    onMouseEnter={() => setIsHoveredRight(true)}
                    onMouseLeave={() => setIsHoveredRight(false)}
                >
                    <CgCloseO />
                    <p className='ButtonLeftP'>Not</p>
                    <div className={`VualeyTwoButtonSecBox ${activeButtonTwo === 'left' || activeButtonTwo === 'right' ? 'flex' : ''}`}>
                        {activeButtonTwo !== 'right' && (
                            <div
                                className={`VualeyTwoButtonSecBoxLeft ${activeButtonTwo === 'left' ? 'active' : ''}`}
                                onClick={handleLeftClickTwo}
                                style={{
                                    minWidth: isHoveredRight ? '30px' : '40px',
                                    maxWidth: isHoveredRight ? '30px' : '40px',
                                }}
                                onMouseEnter={() => setIsHoveredLeft(true)}
                                onMouseLeave={() => setIsHoveredLeft(false)}
                            >
                                <FiEdit />
                            </div>
                        )}
                        {activeButtonTwo !== 'left' && (
                            <div
                                className={`VualeyTwoButtonSecBoxRightTwo ${activeButtonTwo === 'right' ? 'active' : ''}`}
                                onClick={handleRightClickTwo}
                                style={{
                                    minWidth: isHoveredLeft ? '30px' : '40px',
                                    maxWidth: isHoveredLeft ? '30px' : '40px',
                                }}
                                onMouseEnter={() => setIsHoveredRight(true)}
                                onMouseLeave={() => setIsHoveredRight(false)}
                            >
                                <FiInfo />
                                <div className={`VualeyTwoButtonSecBoxTT ${activeButtonFour === 'left' || activeButtonFour === 'right' ? 'flex' : ''}`}>
                                    {activeButtonFour !== 'right' && (
                                        <div
                                            className={`VualeyTwoButtonSecBoxLeftSec ${activeButtonFour === 'left' ? 'Hus' : ''}`}
                                            onClick={handleLeftClickTwo}
                                            style={{
                                                minWidth: isHoveredRight ? '30px' : '40px',
                                                maxWidth: isHoveredRight ? '30px' : '40px',
                                            }}
                                            onMouseEnter={() => setIsHoveredLeft(true)}
                                            onMouseLeave={() => setIsHoveredLeft(false)}
                                        >
                                            <FiEdit />
                                        </div>
                                    )}
                                    {activeButtonFour !== 'left' && (
                                        <div
                                            className={`VualeyTwoButtonSecBoxRightSec ${activeButtonFour === 'right' ? 'Hus' : ''}`}
                                            onClick={handleRightClickTwo}
                                            style={{
                                                minWidth: isHoveredLeft ? '30px' : '40px',
                                                maxWidth: isHoveredLeft ? '30px' : '40px',
                                            }}
                                            onMouseEnter={() => setIsHoveredRight(true)}
                                            onMouseLeave={() => setIsHoveredRight(false)}
                                        >
                                            <FiInfo />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </button>
    );
};

export { ToggleButton };


const DropdownButton = ({ isVisible, onToggle }) => {
    if (!isVisible) return null;

    return (
        <div className="dropdownRightSecMod">
            <div className="dropdownRightSecModTitle">
                <h2>Add point</h2>
            </div>
            <div className="dropdownRightSecModContant">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
            </div>
            <div className="dropdownRightSecModButton">
                <button onClick={onToggle}>Cancel</button>
                <button>Apply</button>
            </div>
        </div>
    );
};


const generateDates = (numberOfDays) => {

    const dates = [];
    const today = new Date();

    for (let i = 0; i < numberOfDays; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        dates.push(`${day}.${month}.${year}`);
    }

    return dates;
}

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default function GroupShedul() {

    const [dropdownStates, setDropdownStates] = useState(Array(10).fill(false))

    const toggleDropdownWer = (id) => {
        setDropdownStates(prevStates => ({
            ...prevStates,
            [id]: !prevStates[id]
        }));
    };

    const [activeButton, setActiveButton] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleLeftClick = () => {
        setActiveButton(activeButton === 'left' ? null : 'left');
    };

    const handleRightClick = () => {
        setActiveButton(activeButton === 'right' ? null : 'right');
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'Alisher Atajanov', status: 'Active' },
        { id: 2, name: 'John Doe', status: 'Inactive' },
        { id: 3, name: 'Jane Smith', status: 'Active' },
    ]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const dates = generateDates(10);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("April");
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
        setDropdownStates(prevStates =>
            prevStates.map((state, i) => i === index ? !state : false)
        );
    };

    const buttons = [
        "Lesson 1: English Alphabet for beginner students",
        "Lesson 2: Topic B",
        "Lesson 3: Topic C",
        "Lesson 4: Topic D",
        "Lesson 5: Topic E",
        "Lesson 6: Topic F",
        "Lesson 7: Topic G",
        "Lesson 8: Topic H",
        "Lesson 9: Topic I",
        "Lesson 10: Topic O"
    ];

    const options = ["April", "May", "June", "Jule"];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <div className="GroupShedulComtainer">
            <div className="GroupShedulComtainerTitle">
                <div className="GroupShedulComtainerTitleLeft">
                    <span><LuCheckSquare /></span><p>Schedule</p>
                </div>
                <div className="GroupShedulComtainerTitleRight">
                    <div className="Bonus">
                        <span><BsExclamationCircle /></span>
                        <p>Bonus lessons should be added for this group. Edit schedule now</p>
                    </div>
                    <div className="buttonContainer">
                        <div className="buttonContainerdropdown-container">
                            <div className="buttonContainerdropdown-header" onClick={toggleDropdown}>
                                <p>{selectedValue}</p>
                                <span className="buttonContainerdropdown-icon">
                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            {isOpen && (
                                <ul className="buttonContainerdropdown-list">
                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            className="buttonContainerdropdown-item"
                                            onClick={() => handleOptionClick(option)} // обработка клика по варианту
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className='EditButton'><span><FiEdit /></span><p>Edit schedule</p></button>
                    </div>
                </div>
            </div>
            <div className="GroupShedulTable">
                <div className="GroupShedulTableUp">
                    <div className="GroupShedulTableUpLeft">
                        <p>
                            You can change lessons <br />
                            or add new lessons at any time
                        </p>
                    </div>
                    <div className="GroupShedulTableUpRight">
                        {buttons.map((buttonText, index) => {
                            const truncatedText = buttonText.length > 10 ? `${buttonText.slice(0, 10)}...` : buttonText;

                            return (
                                <div key={index} className="dropdown-container">
                                    <button onClick={() => handleButtonClick(index)}>
                                        {truncatedText}
                                    </button>
                                    {activeIndex === index && (
                                        <Dropdown content={buttonText} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="GroupShedulTableMidlle">
                    <div className="GroupShedulTableMidlleLeft">
                        <label>
                            <span><MdOutlineSearch /></span>
                            <input
                                type="text"
                                placeholder="Search students"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </label>
                    </div>
                    <div className="GroupShedulTableMidlleRight">
                        <div className="GroupShedulTableMidlleRight_LeftButton">
                            <span><HiOutlineChevronLeft /></span>
                        </div>
                        <div className="GroupShedulTableMidlleRight_MidleButton">
                            {dates.map((date, index) => (
                                <button key={index}>{date}</button>
                            ))}
                        </div>
                        <div className="GroupShedulTableMidlleRight_LeftButton">
                            <span><HiOutlineChevronRight /></span>
                        </div>
                    </div>
                </div>
                <div className="GroupShedulUserTable">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className="GroupShedulUserTableBox">
                                <div className="GroupShedulUserTableBoxLeft">
                                    <div className="NachaLoGroupShedulUserTableBoxLeft">
                                        <div className="GroupShedulUserTableBoxLeft_id">
                                            <p>{user.id}</p>
                                        </div>
                                        <div className="GroupShedulUserTableBoxLeft_Name">
                                            <p>{user.name}</p>
                                        </div>
                                    </div>
                                    <div className="GroupShedulUserTableBoxLeft_Status">
                                        <p>{user.status}</p>
                                    </div>
                                </div>
                                <div className="GroupShedulUserTableBoxRight">
                                    <div className="GroupShedulUserTableBoxRight_ButtonBox">
                                        {[...Array(10)].map((_, index) => (
                                            <div key={index} className="GroupShedulUserTableBoxRight_ButtonBoxContainer">
                                                <ToggleButton onToggle={() => toggleDropdownWer(`${user.id}-${index}`)} />
                                                <DropdownButton isVisible={dropdownStates[`${user.id}-${index}`]} onToggle={toggleDropdownWer} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No users found</p>
                    )}
                </div>
            </div>
        </div>
    )
}