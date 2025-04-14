
import './EditModal.css';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function EditModal({ onClose, setCourseNameInfo }) {
    const navigate = useNavigate();
    const { id } = useParams(); // getting course id from URL params

    const handleRemove = () => {
        setStep(4);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    const handleRemoveSec = () => {
        setStep(6);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 10);
        return () => {
            clearTimeout(timeout);
            setIsVisible(false);
        };
    }, []);
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            setStep(2);
        } else {
            setStep(1);
        }
    };
    const [step, setStep] = useState(1);
    const [courseCardInfo, setCourseCardInfo] = useState({});
    const [selectedBar, setSelectedBar] = useState('Main');
    const [selectedBarSec, setSelectedBarSec] = useState('MainTwo');
    const [levels, setLevels] = useState([
        { id: 1, name: '' },
        { id: 2, name: '' }
    ]);

    const [showGroupType, setShowGroupType] = useState(true);
    const [showIndividualType, setShowIndividualType] = useState(true);

    const handleGroupTypeChange = (e) => {
        setShowGroupType(e.target.checked);
    };

    const handleIndividualTypeChange = (e) => {
        setShowIndividualType(e.target.checked);
    };

    const [showRedBox, setShowRedBox] = useState(false);

    const handleCancelClick = () => {
        setShowRedBox(true);
    };

    const handleSaveClick = () => {
        setShowRedBox(true);
    };

    const handleCancelCloseClick = () => {
        setShowRedBox(false);
    };

    const handleSaveCloseClick = () => {
        setShowRedBox(false);
    };

    const [levelAdded, setLevelAdded] = useState(false);

    const handleAddLevel = () => {
        if (!levelAdded) {
            setLevels([...levels, { id: levels.length + 1, name: '' }]);
            setLevelAdded(true);
        }
    };

    const handleInputChange = (id, value) => {
        const updatedLevels = levels.map(level =>
            level.id === id ? { ...level, name: value } : level
        );
        setLevels(updatedLevels);
    };

    const storedToken = localStorage.getItem('token');

    const getCourse = async () => {
        try {
            const { data } = await axios.get(`https://api.quickhub.uz/api/course/all/${id}`, {
                headers: {
                  'Authorization': `Token ${storedToken}`,
                  'Content-Type': 'application/json',
                },
              });
            setCourseCardInfo(data);
            console.log(data); // Log data to see what is fetched
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]); // Add id as a dependency

    async function deleteCourse() {
        try {
            await axios.delete(`https://api.quickhub.uz/api/course/all/${id}/`, {
                headers: {
                    Authorization: `Token ${storedToken}`
                }
            });
            navigate('/course');
        } catch (err) {
            console.error(err);
        }
    }

    async function putCourse() {
        try {
            const response = await axios.put(`https://api.quickhub.uz/api/course/all/${id}/`, {
                name: courseCardInfo.name
            }, {
                headers: {
                    Authorization: `Token ${storedToken}`
                }
            });
            setCourseCardInfo(response.data);
            setCourseNameInfo(response.data)
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const deleteCourseFun = () => {
        deleteCourse();
    };

    const renderContent = () => {
        switch (selectedBar) {
            case 'Main':
                return (
                    <div className={`EditCursMain ${selectedBar === 'Main' ? 'show' : ''}`}>
                        <div className="EditCursMainTop">
                            <div className="EditCursMainTopTitle">
                                <h2>Edit course</h2>
                            </div>
                            <div className="EditCursMainTopcontant">
                                <label className='EditCursMainTopcontantLabel'>
                                    <p>Course name</p>
                                    <input
                                        type="text"
                                        placeholder='Enter the course name'
                                        value={courseCardInfo.name || ''}
                                        onChange={e => setCourseCardInfo(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                </label>
                                <div className='EditCursMainTopcontantCheck'>
                                    <p>Course levels</p>
                                    <label className='EditCursMainTopcontantLabelTwo'>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <p>Course levels are available</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="EditCursMainDown">
                            <div className="EditCursMainDownTable">
                                <div className="EditCursMainDownTableTitle">
                                    <div><p>Levels</p></div>
                                    <div><p>Level names</p></div>
                                </div>
                                {levels.map((level, index) => (
                                    <div key={index} className="EditCursMainDownTableCont">
                                        <div><p>Level {level.id}</p></div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter level name"
                                                value={level.name}
                                                onChange={(e) => handleInputChange(level.id, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className="EditCursMainDownTableContButton">
                                    <button onClick={handleAddLevel}>Add new level</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Beginner':
                return <div className={`EditCursBegginer ${selectedBar === 'Beginner' ? 'show' : ''}`}>
                    <div className="EditCursMainTop">
                        <div className="EditCursMainTopTitle">
                            <h2>Edit course level</h2>
                        </div>
                        <div className="EditCursMainTopcontant">
                            <label className='EditCursMainTopcontantLabel' htmlFor="">
                                <p>Level name</p>
                                <input type="text" placeholder='Course level name' />
                            </label>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Group type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showGroupType}
                                        onChange={handleGroupTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Individual type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showIndividualType}
                                        onChange={handleIndividualTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                        </div>
                        <div className="EditCourseRating">
                            <div className="EditCourseRatingTitle">
                                <p>Rating system in 4 directions</p>
                            </div>
                            <div className="EditCourseRatingCheck">
                                <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                    <input type="checkbox" />
                                    <p>4 directions of rating (reading, listeting, writing, speaking)</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    {showGroupType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Group type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                    {showIndividualType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Individual type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                </div>;
            case 'Elementary':
                return <div className={`EditCursElementary ${selectedBar === 'Elementary' ? 'show' : ''}`}>
                    <div className="EditCursMainTop">
                        <div className="EditCursMainTopTitle">
                            <h2>Edit course level</h2>
                        </div>
                        <div className="EditCursMainTopcontant">
                            <label className='EditCursMainTopcontantLabel' htmlFor="">
                                <p>Level name</p>
                                <input type="text" placeholder='Course level name' />
                            </label>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Group type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showGroupType}
                                        onChange={handleGroupTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Individual type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showIndividualType}
                                        onChange={handleIndividualTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                        </div>
                        <div className="EditCourseRating">
                            <div className="EditCourseRatingTitle">
                                <p>Rating system in 4 directions</p>
                            </div>
                            <div className="EditCourseRatingCheck">
                                <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                    <input type="checkbox" />
                                    <p>4 directions of rating (reading, listeting, writing, speaking)</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    {showGroupType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Group type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                    {showIndividualType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Individual type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                </div>;
            case 'Intermediate':
                return <div className={`EditCursIntermediate ${selectedBar === 'Intermediate' ? 'show' : ''}`}>
                    <div className="EditCursMainTop">
                        <div className="EditCursMainTopTitle">
                            <h2>Edit course level</h2>
                        </div>
                        <div className="EditCursMainTopcontant">
                            <label className='EditCursMainTopcontantLabel' htmlFor="">
                                <p>Level name</p>
                                <input type="text" placeholder='Course level name' />
                            </label>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Group type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showGroupType}
                                        onChange={handleGroupTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>

                            </div>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Individual type</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={showIndividualType}
                                        onChange={handleIndividualTypeChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                        </div>
                        <div className="EditCourseRating">
                            <div className="EditCourseRatingTitle">
                                <p>Rating system in 4 directions</p>
                            </div>
                            <div className="EditCourseRatingCheck">
                                <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                    <input type="checkbox" />
                                    <p>4 directions of rating (reading, listeting, writing, speaking)</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    {showGroupType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Group type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                    {showIndividualType && (
                        <div className="EditCursMainDown EditCursMainDownTwo">
                            <div className="EditCursMainDownTitle">
                                <h2>Individual type</h2>
                            </div>
                            <div className="EditCursMainDownButtonDown">
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>Price</p>
                                    <input type="text" placeholder='Enter price for group type' />
                                </label>
                                <label htmlFor="">
                                    <p>Branch</p>
                                    <select name="" id="">
                                        <option value="Select branches">Select branches</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                        <option value="option">option 1</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    )}
                </div>;
            default:
                return null;
        }
    };

    const renderContentSec = () => {
        switch (selectedBarSec) {
            case 'MainTwo':
                return <div className="EditCursBegginerSec" >
                    <div className="EditCursMainTop EditCursMainTopTwo">
                        <div className="EditCursMainTopTitle">
                            <h2>Edit course level</h2>
                        </div>
                        <div className="EditCursMainTopcontant">
                            <label className='EditCursMainTopcontantLabel' htmlFor="">
                                <p>Level name</p>
                                <input type="text" placeholder='Course level name' />
                            </label>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Course levels</p>
                                <label className='EditCursMainTopcontantLabelTwo'>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                            <div className="EditCourseRating">
                                <div className="EditCourseRatingTitle">
                                    <p>Rating system in 4 directions</p>
                                </div>
                                <div className="EditCourseRatingCheck">
                                    <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                        <input type="checkbox" />
                                        <p>4 directions of rating (reading, listeting, writing, speaking)</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="GroupIndCheckButton">
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Group type</p>
                                <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                    <input type="checkbox" />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                            <div className='EditCursMainTopcontantCheck'>
                                <p>Individual type</p>
                                <label className='EditCursMainTopcontantLabelTwo' htmlFor="">
                                    <input type="checkbox" />
                                    <p>Course levels are available</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="EditCursMainDown EditCursMainDownTwo EditCursMainDownThree">
                        <div className="EditCursMainDownTitle">
                            <h2>Group type</h2>
                        </div>
                        <div className="EditCursMainDownButtonDown">
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" placeholder='Enter price for group type' />
                            </label>
                            <label htmlFor="">
                                <p>Branch</p>
                                <select name="" id="">
                                    <option value="Select branches">Select branches</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" placeholder='Enter price for group type' />
                            </label>
                            <label htmlFor="">
                                <p>Branch</p>
                                <select name="" id="">
                                    <option value="Select branches">Select branches</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="EditCursMainDown EditCursMainDownTwo EditCursMainDownThree">
                        <div className="EditCursMainDownTitle">
                            <h2>Individual type</h2>
                        </div>
                        <div className="EditCursMainDownButtonDown">
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" placeholder='Enter price for group type' />
                            </label>
                            <label htmlFor="">
                                <p>Branch</p>
                                <select name="" id="">
                                    <option value="Select branches">Select branches</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" placeholder='Enter price for group type' />
                            </label>
                            <label htmlFor="">
                                <p>Branch</p>
                                <select name="" id="">
                                    <option value="Select branches">Select branches</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                    <option value="option">option 1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>;
            default:
                return null;
        }
    }

    return (
        <div className="EditModal">
            {step === 1 && (
                <div className={`EditModalOne ${isVisible ? "show" : ""}`}>
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="EditModalOneTitle">
                        <h2>Edit course</h2>
                        <p>Edit course parameters</p>
                    </div>
                    <div className="EditModalOneContainer">
                        <div className="EditModalOneBar">
                            <button
                                className={selectedBar === 'Main' ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBar('Main');
                                    handleCancelCloseClick();
                                }}
                            >
                                <p>Main</p>
                            </button>
                            <button
                                className={selectedBar === 'Beginner' ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBar('Beginner');
                                    handleSaveCloseClick();
                                }}
                            >
                                <p>Beginner</p>
                            </button>
                            <button
                                className={selectedBar === 'Elementary' ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBar('Elementary');
                                    handleCancelClick();
                                }}
                            >
                                <p>Elementary</p><span><AiOutlineInfoCircle /></span>
                            </button>
                            <button
                                className={selectedBar === 'Intermediate' ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBar('Intermediate');
                                    handleCancelClick();
                                }}
                            >
                                <p>Intermediate</p><span><AiOutlineInfoCircle /></span>
                            </button>

                        </div>
                    </div>

                    <div className="EditModalBarContant">
                        {renderContent()}
                    </div>
                    <div className="EditModalOneDownButton">
                        <div className="EditModalOneDownButtonLeft">
                            <button onClick={() => setStep(3)}><span><RiDeleteBin5Line /></span><p>Delete level</p></button>
                        </div>
                        {showRedBox && (
                            <div className="redBoxEditModal">
                                <p>Please fill in all required fields</p>
                            </div>
                        )}
                        <div className="EditModalOneDownButtonRight">
                            <button onClick={() => { handleCancelClick(); onClose() }} >
                                <span></span><p>Cancel</p>
                            </button>
                            <button onClick={() => { putCourse(); setStep(5) }}>
                                <span><FaRegCircleCheck /></span><p>Save</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="EditModalTwo">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="EditModalOneTitle">
                        <h2>Edit course</h2>
                        <p>Edit course parameters</p>
                    </div>
                    <div className="EditModalOneContainer">
                        <div className="EditModalOneBar">
                            <button
                                className={selectedBar === 'Main' ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBarSec('MainTwo');
                                    handleCancelCloseClick();
                                }}
                            >
                                <p>Main</p>
                            </button>
                        </div>
                    </div>
                    <div className="EditModalBarContant">
                        {renderContentSec()}
                    </div>
                    <div className="EditModalOneDownButton">
                        <div className="EditModalOneDownButtonLeft">
                            <button onClick={() => setStep(3)}><span><RiDeleteBin5Line /></span><p>Delete level</p></button>
                        </div>
                        {showRedBox && (
                            <div className="redBoxEditModal">
                                <p>Please fill in all required fields</p>
                            </div>
                        )}
                        <div className="EditModalOneDownButtonRight">
                            <button onClick={() => { handleCancelClick(); onClose() }} >
                                <span></span><p>Cancel</p>
                            </button>
                            <button onClick={() => { putCourse(); setStep(3) }}>
                                <span><FaRegCircleCheck /></span><p>Save</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="DeleteEditModalCurse">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="DeleteEditModalCurseTitle">
                        <h2>Delete course level</h2>
                        <p>If the course level is deleted, all groups <br />
                            will be saved, but the parameters for the<br /> courses will be deleted</p>
                    </div>
                    <div className="DeleteEditModalCurseButton">
                        <button>
                            Go back
                        </button>
                        <button onClick={handleRemove}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div className="DeleteEditModalCurseConfim">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="DeleteEditModalCurseTitleConfim">
                        <h2>Course level deleted</h2>
                        <p>Course level has been deleted from the system</p>
                    </div>
                </div>
            )}
            {step === 5 && (
                <div className="DeleteEditModalCurse SaveEditModalCurse">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="DeleteEditModalCurseTitle SaveEditModalCurseTitle">
                        <h2>Save course changes</h2>
                        <p>Are you sure you want to save<br />
                            the course changes?</p>
                    </div>
                    <div className="DeleteEditModalCurseButton SaveEditModalCurseButton">
                        <button>
                            Go back
                        </button>
                        <button onClick={handleRemoveSec}>
                            Yes
                        </button>
                    </div>
                </div>
            )}
            {step === 6 && (
                <div className="DeleteEditModalCurseConfim">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="DeleteEditModalCurseTitleConfim">
                        <h2>Changes saved</h2>
                        <p>Changes saved successfully</p>
                    </div>
                </div>
            )}
        </div>
    );
}
