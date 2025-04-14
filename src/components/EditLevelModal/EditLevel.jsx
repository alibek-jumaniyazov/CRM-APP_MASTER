import './EditLevel.css'
import { useState } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

export default function EditLevel({ onClose }) {

    const [showGroupType, setShowGroupType] = useState(true);
    const [showIndividualType, setShowIndividualType] = useState(true);

    const handleGroupTypeChange = (e) => {
        setShowGroupType(e.target.checked);
    };

    const handleIndividualTypeChange = (e) => {
        setShowIndividualType(e.target.checked);
    };

    const handleRemoveSec = () => {
        setStep(3);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    const [step, setStep] = useState(1)

    return (
        <div className="EditLevelContainerStep">
            {step === 1 && (
                <div className="EditLevelContainer">
                    <div className="ConFimModalAddStudClose" onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className="EditModalOneTitle EditModalOneTitleSec">
                        <h2>Edit course</h2>
                        <p>Edit course parameters</p>
                    </div>
                    <div className="EditLevelContainerOne">
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
                    </div>
                    <div className="EditLevelButtonsR">
                        <button>Cancel</button>
                        <button onClick={() => setStep(2)}><span><FaRegCircleCheck /></span><p>Save</p></button>
                    </div>
                </div >
            )}
            {step === 2 && (
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
            {step === 3 && (
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
    )
}