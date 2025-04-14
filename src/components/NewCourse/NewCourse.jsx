import './NewCourse.css'
import { useEffect, useState } from 'react';
import x from './../../Assets/icons/x.png';
import layer_1 from './../../Assets/Layer_1.png'
import layer_2 from './../../Assets/Group 339.png'
import { FaArrowRight } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import layer_3 from './../../Assets/Layer_3.png';
import layer_4 from './../../Assets/Layer_4.png';
import layer_5 from './../../Assets/Layer_5.png';
import absElementOne from './../../Assets/elements_1.png';
import absElementTwo from './../../Assets/elements_2.png';
import CheckGreen from './../../Assets/GreenCheck.png';
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from 'axios';

export default function NewCourse({ onClose, name, setName, setCourseCardInfo }) {

    const [step, setStep] = useState(1);
    const [isLevelsAvailable, setIsLevelsAvailable] = useState(false);
    const [levels, setLevels] = useState([{ id: 1, name: '', groupType: false, individualType: false }]);
    const [isGroupChecked, setIsGroupChecked] = useState(true);
    const [isIndividualChecked, setIsIndividualChecked] = useState(false);
    const [getStep2, setGetStep2] = useState([])

    const data = [
        {
            language: 'English',
            branches: ['Branch 1', 'Branch 2', 'Branch 3'],
            groupPrices: ['100', '200', '300'],
            individualPrices: ['150', '250', '350']
        },
        {
            language: 'Spanish',
            branches: ['Branch 4', 'Branch 5', 'Branch 6'],
            groupPrices: ['110', '210', '310'],
            individualPrices: ['160', '260', '360']
        },
        {
            language: 'French',
            branches: ['Branch 7', 'Branch 8', 'Branch 9'],
            groupPrices: ['120', '220', '320'],
            individualPrices: ['170', '270', '370']
        },
        {
            language: 'German',
            branches: ['Branch 10', 'Branch 11', 'Branch 12'],
            groupPrices: ['130', '230', '330'],
            individualPrices: ['180', '280', '380']
        },
        {
            language: 'Russian',
            branches: ['Branch 13', 'Branch 14', 'Branch 15'],
            groupPrices: ['140', '240', '340'],
            individualPrices: ['190', '290', '390']
        },
        {
            language: 'Chinese',
            branches: ['Branch 16', 'Branch 17', 'Branch 18'],
            groupPrices: ['150', '250', '350'],
            individualPrices: ['200', '300', '400']
        }
    ];
    console.log(levels);

    const handleCheckboxChange = (type) => {
        setIsLevelsAvailable(!isLevelsAvailable);
        if (type === "group") {
            setIsGroupChecked(!isGroupChecked);
        } else if (type === "individual") {
            setIsIndividualChecked(!isIndividualChecked);
        }
    };

    const handleLevelChange = (index, field, value) => {
        const newLevels = [...levels];
        newLevels[index][field] = value;
        setLevels(newLevels);
    };

    const addNewLevel = () => {
        if (levels.length < 3) {
            setLevels([...levels, { id: levels.length + 1, name: '', groupType: false, individualType: false }]);
        }
    };

    const storedToken = localStorage.getItem('token');

    console.log(storedToken);

    const body = {
        name: name
    }

    async function getCourse() {
        try {
            const response = await axios.post("https://api.quickhub.uz/api/course/all/", body, {
                headers: {
                    Authorization: `Token ${storedToken}`
                }
            })
            console.log(response.data)
            setCourseCardInfo(prev => [response.data, ...prev]);
        }
        catch (err) {
            console.log(err);
        }
    }
    const body1 = {
        name: name,
        daraja: levels.map((item) => ({
            name: item.name,
            group_type: item.groupType,
            induvidal_type: item.individualType
        }))
    }

    console.log(body1);

    async function postCreate1() {
        // try {
        //     const response = await axios.post("https://api.quickhub.uz/api/course/create/", body1, {
        //         headers: {
        //             Authorization: `Token ${storedToken}`
        //         }
        //     })
        //     console.log(response.data, "Create")
        setGetStep2(body1)
        // }
        // catch (err) {
        //     console.log(err);
        // }
    }


    function createCourse() {
        getCourse()
        console.log("post");
        setStep(11);
        setTimeout(() => {
            onClose();
        }, 1000);
    }

    // const [daraja1, setDaraja1] = useState('')
    // const [daraja2, setDaraja2] = useState('')
    // const [daraja3, setDaraja3] = useState('')

    // const handleInputChange1 = (e) => {
    //     setDaraja1(e);
    // };
    // const handleInputChange2 = (e) => {
    //     setDaraja2(e);
    // };
    // const handleInputChange3 = (e) => {
    //     setDaraja3(e);
    // };


    return (
        <div className='NewCourse'>
            {step === 1 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 1</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Course Name and Levels</h2>
                                <p>Enter the name of the course and give a name for the levels as well.</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-label">
                                <p>Course name</p>
                                <input type="text" placeholder='Enter course name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input">
                                <input
                                    type="checkbox"
                                    checked={isLevelsAvailable}
                                    onChange={handleCheckboxChange}
                                />
                                <p>Lesson levels are available</p>
                            </div>
                            {isLevelsAvailable && (
                                <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className='LVLS'>Levels</th>
                                                <th className='LVLN'>Level names</th>
                                                <th className='GRPT'>Group type</th>
                                                <th className='INDT'>Individual type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {levels.map((level, index) => (
                                                <tr key={level.id}>
                                                    <td className='LVLS LVLSC'>Level {level.id}</td>
                                                    <td className='LVLN LVLNC'>
                                                        <input
                                                            type="text"
                                                            placeholder='Enter level name1'
                                                            value={level.name}
                                                            onChange={(e) => handleLevelChange(index, 'name', e.target.value)}
                                                        />
                                                    </td>
                                                    <td className='GRPT GRPTC'>
                                                        <input
                                                            type="checkbox"
                                                            checked={level.groupType}
                                                            onChange={(e) => handleLevelChange(index, 'groupType', e.target.checked)}
                                                        />
                                                    </td>
                                                    <td className='INDT INDTC'>
                                                        <input
                                                            type="checkbox"
                                                            checked={level.individualType}
                                                            onChange={(e) => handleLevelChange(index, 'individualType', e.target.checked)}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox-Down-Add">
                                                <button onClick={addNewLevel} disabled={levels.length >= 3}>
                                                    <span><FiPlusSquare /></span><p>Add new level</p>
                                                </button>
                                                {levels.length >= 3}
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <div className="FooterPag"><span className='sp'><span></span></span></div>
                        <button className='NeKKi'
                            onClick={() => { setStep(isLevelsAvailable ? 7 : 2); postCreate1() }} >
                            <p>Next</p>
                            <span><FaArrowRight /></span>
                        </button>
                    </div>
                </div>
            )
            }
            {
                step === 2 && (
                    <div className="NewCourseStepOne">
                        <div className="NewCourseStepOneClose" onClick={onClose}>
                            <img src={x} alt="" />
                        </div>
                        <div className="NewCourseStepOne-Title">
                            <h2>Let's add a new course to the system</h2>
                            <p>The process of adding a new course to the system consists of a few steps</p>
                        </div>
                        <div className="NewCourseStepOne-Contant">
                            <div className="NewCourseStepOne-Contant-Left">
                                <div className="Strepindi">
                                    <p>Step 2</p>
                                </div>
                                <div className="NewCourseStepOne-Contant-Left-Title">
                                    <h2>Let's adjust the lessons times</h2>
                                    <p>Enter the number and duration of lessons in the course</p>
                                </div>
                                <div className="NewCourseStepOne-Contant-Left-input NewCourseStepOne-Contant-Left-input-second">
                                    <div className="NewCourseStepOne-Contant-Left-input-duble">
                                        <input
                                            type="checkbox"
                                            checked={isGroupChecked}
                                            onChange={() => handleCheckboxChange("group")}
                                        />
                                        <p>Group type</p>
                                    </div>
                                    <div className="NewCourseStepOne-Contant-Left-input-duble">
                                        <input
                                            type="checkbox"
                                            checked={isIndividualChecked}
                                            onChange={() => handleCheckboxChange("individual")}
                                        />
                                        <p>Individual type</p>
                                    </div>
                                </div>
                                {(isGroupChecked || isIndividualChecked) && (
                                    <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                        <div className="NewCourseStepTwo-Table">
                                            <div className="NewCourseStepTwo-Table-One">
                                                <div className="NewCourseStepTwo-Table-One-Up">
                                                    <p>Course name</p>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-One-Down">
                                                    <p>English</p>
                                                </div>
                                            </div>
                                            <div className="NewCourseStepTwo-Table-Two">
                                                <div className="NewCourseStepTwo-Table-Two-Up">
                                                    <p>Group type</p>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-Two-Midle">
                                                    <div className="NewCourseStepTwo-Table-Two-Midle-Left">
                                                        <p>Number of lessons</p>
                                                    </div>
                                                    <div className="NewCourseStepTwo-Table-Two-Midle-Right">
                                                        <p>Duration</p>
                                                    </div>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-Two-Down">
                                                    <div className="NewCourseStepTwo-Table-Two-Down-Left">
                                                        <input type="text" placeholder='Number of lessons' />
                                                    </div>
                                                    <div className="NewCourseStepTwo-Table-Two-Down-Right">
                                                        <button><p>select</p><span></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="NewCourseStepTwo-Table-Three">
                                                <div className="NewCourseStepTwo-Table-Three-Up">
                                                    <p>Individual type</p>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-Three-Midle">
                                                    <div className="NewCourseStepTwo-Table-Three-Midle-Left">
                                                        <p>Number of lessons</p>
                                                    </div>
                                                    <div className="NewCourseStepTwo-Table-Three-Midle-Right">
                                                        <p>Duration</p>
                                                    </div>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-Three-Down">
                                                    <div className="NewCourseStepTwo-Table-Three-Down-Left">
                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                    </div>
                                                    <div className="NewCourseStepTwo-Table-Three-Down-Right">
                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="NewCourseStepOne-Contant-Right">
                                <div className="NewCourseStepOne-Contant-Right-Cont">
                                    <img src={layer_2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Footer">
                            <button className='PreVVi' onClick={() => setStep(1)}><span><FaArrowLeft /></span><p>Previus</p></button>
                            <div className="FooterPag"><span className='sp spTwo'><span></span></span></div>
                            <button className='NeKKi' onClick={() => setStep(3)}><p>Next</p><span><FaArrowRight /></span></button>
                        </div>
                    </div>
                )
            }
            {step === 3 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 3</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Let's configure it by branches</h2>
                                <p>Which courses are available or not available in which branch?</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="NewCourseStepTwo-Table-Sec">
                                    <div className="NewCourseStepTwo-Table-One-Sec">
                                        <div className="NewCourseStepTwo-Table-One-Top-Sec">
                                            <p>Course name</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec">
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Two-Sec">
                                        <div className="NewCourseStepTwo-Table-Two-Up-Sec">
                                            <p>Group type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec">
                                            <button><p>Select branch</p></button>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Three-Sec">
                                        <div className="NewCourseStepTwo-Table-Three-Top-Sec">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Three-Down-Sec">
                                            <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(isLevelsAvailable ? 7 : 2)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spThree'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(4)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )
            }
            {step === 4 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 4</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Of course, the prices should not be ignored</h2>
                                <p>If the prices in all branches are the same, just write, or if they are different, just check it.</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="NewCourseStepTwo-Table-Sec LOLOLO">
                                    <div className="NewCourseStepTwo-Table-One ">
                                        <div className="NewCourseStepTwo-Table-One-Top-Sec">
                                            <p>Course name</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec">
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Two-Sec">
                                        <div className="NewCourseStepTwo-Table-Two-Up-Sec">
                                            <p>Group type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Three-Sec Table-Three-Sec LOLOT">
                                        <div className="NewCourseStepTwo-Table-Three-Top-Sec">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Three-Down-Sec">
                                            <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Four-Sec">
                                        <div className="NewCourseStepTwo-Table-Four-Top-Sec">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Four-Down-Sec">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(3)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spFour'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(5)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )
            }
            {step === 5 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 6</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>We care about every branch</h2>
                                <p>Change the prices for each branch</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="StepSix-TableBox">
                                    <div className="StepSix-TableBox-One">
                                        <div className="StepSix-TableBox-One-Up">
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Two">
                                        <div className="StepSix-TableBox-Two-Up">
                                            <p>Branch name</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Snake">
                                            <p>Branch 1</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Midle">
                                            <p>Branch 2</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Down">
                                            <p>Branch 3</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Three">
                                        <div className="StepSix-TableBox-Three-Up">
                                            <p>Group type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Three-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Four">
                                        <div className="StepSix-TableBox-Four-Up">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Four-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(4)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spFive'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(6)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )
            }
            {step === 6 && (
                <div className="NewCourseStepSeven">
                    <div className="NewCourseStepSeven_Contant">
                        <div className="NewCourseStepSevenClose" onClick={onClose}> <img src={x} alt="" /></div>
                        <div className="ElementBox">
                            <div className="NewCourseStepSevenElementOne"><img src={absElementOne} alt="" /></div>
                            <div className="NewCourseStepSevenElementTwo"><img src={absElementTwo} alt="" /></div>
                        </div>
                        <div className="NewCourseStepSevenTitle">
                            <span><img src={CheckGreen} alt="" /></span>
                            <h2>Make sure everything</h2>
                            <p>Before creating the course, make sure that every information is entered correctly</p>
                        </div>
                        <div className="NewCourseStepSevenTitle_Second">
                            <div className="NewCourseStepSevenTitle_Second_Left">
                                <span>Course name:<p>English</p></span>
                                <span>Course levels:<p>7</p></span>
                            </div>
                        </div>
                        <div className="NewCourseStepSeven_Table">
                            <div className="NewCourseStepSeven_Table_Up">
                                <p>English</p>
                            </div>
                            <div className="NewCourseStepSeven_Table_Down">
                                <div className="NewCourseStepSeven_Table_Down_One">
                                    <div className="NewCourseStepSeven_Table_Down_One_Top">
                                        <p>Group type</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_One_Down">
                                        <p>Individual type</p>
                                    </div>
                                </div>
                                <div className="NewCourseStepSeven_Table_Down_Two">
                                    <div className="NewCourseStepSeven_Table_Down_Two_First">
                                        <p>Lessons</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Two_Two">
                                        <p>Duration</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Two_Three">
                                        <p>Lessons</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Two_Four">
                                        <p>Duration</p>
                                    </div>
                                </div>
                                <div className="NewCourseStepSeven_Table_Down_Tree">
                                    <div className="NewCourseStepSeven_Table_Down_Tree_First">
                                        <p>120 lessons</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Tree_Two">
                                        <p>45 minutes</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Tree_Three">
                                        <p>52 lessons</p>
                                    </div>
                                    <div className="NewCourseStepSeven_Table_Down_Tree_Four">
                                        <p>30 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SecondBoxTables">
                            <div className="SecondBoxTables_Title">
                                <h2>We care about every branch</h2>
                                <p>Change the prices for each branch</p>
                            </div>
                            <div className="SecondBoxTableGlav">
                                <div className="NewCourseStepOne-Contant-Left-input-Checkbox IUYVBGBUITYD">
                                    {data.map((item, index) => (
                                        <div key={index} className="StepSix-TableBox">
                                            <div className="StepSix-TableBox-One">
                                                <div className="StepSix-TableBox-One-Up">
                                                    <p>{item.language}</p>
                                                </div>
                                            </div>
                                            <div className="StepSix-TableBox-Two">
                                                <div className="StepSix-TableBox-Two-Up">
                                                    <p>Branch name</p>
                                                </div>
                                                {item.branches.map((branch, branchIndex) => (
                                                    <div key={branchIndex} className={`StepSix-TableBox-Two-${branchIndex === 0 ? 'Snake' : branchIndex === 1 ? 'Midle' : 'Down'}`}>
                                                        <p>{branch}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="StepSix-TableBox-Three">
                                                <div className="StepSix-TableBox-Three-Up">
                                                    <p>Group type</p>
                                                </div>
                                                {item.groupPrices.map((price, priceIndex) => (
                                                    <div key={priceIndex} className={`StepSix-TableBox-Three-${priceIndex === 0 ? 'Snake' : priceIndex === 1 ? 'Midle' : 'Down'}`}>
                                                        <input type="text" placeholder='Enter the price' defaultValue={price} />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="StepSix-TableBox-Four">
                                                <div className="StepSix-TableBox-Four-Up">
                                                    <p>Individual type</p>
                                                </div>
                                                {item.individualPrices.map((price, priceIndex) => (
                                                    <div key={priceIndex} className={`StepSix-TableBox-Four-${priceIndex === 0 ? 'Snake' : priceIndex === 1 ? 'Midle' : 'Down'}`}>
                                                        <input type="text" placeholder='Enter the price' defaultValue={price} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(5)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spSix'><span></span></span></div>
                        <button className='NeKKi' onClick={createCourse}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )
            }
            {step === 7 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 2</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Let's adjust the lessons times</h2>
                                <p>Enter the number and duration of lessons in the course</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="NewCourseStepTwo-Table StepSeven-Table">
                                    <div className="NewCourseStepTwo-Table-One StepSeven-Table-One" >
                                        {/* Display Course Name */}
                                        <div className="NewCourseStepTwo-Table-One-Up StepSevenTableOneUp">
                                            <p>{getStep2?.name || "Course name"}</p> {/* Use optional chaining to prevent errors */}
                                        </div>

                                        {/* Display all levels */}
                                        {getStep2?.daraja?.map((level, index) => (
                                            <div key={index} className="NewCourseStepTwo-Table-One-Down StepSeven-Table-One_Down">
                                                <p>{level.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='fuchingCourse'>
                                        {getStep2?.daraja?.map((level, index) => (
                                            <div className='fuckingFuck'>
                                                <div className="NewCourseStepTwo-Table-Two lllllllkkkkk">
                                                    {index === 0 && (
                                                        <div className="NewCourseStepTwo-Table-Two-Up lllllllkkkkkUp">
                                                            <p>Group type</p>
                                                        </div>
                                                    )}

                                                    {index === 0 && (
                                                        <div className="NewCourseStepTwo-Table-Two-Midle lllllllkkkkkMidle">
                                                            <div className="NewCourseStepTwo-Table-Two-Midle-Left lllllllkkkkkMidleLeft">
                                                                <p>Number of lessons</p>
                                                            </div>
                                                            <div className="NewCourseStepTwo-Table-Two-Midle-Right lllllllkkkkkMidlRight">
                                                                <p>Duration</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="NewCourseStepTwo-Table-Two-Down kkkkkllll">
                                                        {level.group_type ?
                                                            (
                                                                <>
                                                                    <div className="NewCourseStepTwo-Table-Two-Down-Left kkkkkllllOne">
                                                                        <input type="text" placeholder='Number of lessons' name='number' />
                                                                    </div>
                                                                    <div className="NewCourseStepTwo-Table-Two-Down-Right kkkkkllllTwo">
                                                                        <select name="" id="">
                                                                            <option value="">123</option>
                                                                            <option value="">456</option>
                                                                            <option value="">789</option>
                                                                        </select>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="NewCourseStepTwo-Table-Three-Down rtyuiop">
                                                                    <div className="NewCourseStepTwo-Table-Three-Down-Left rtyuiopLeft">
                                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                                    </div>
                                                                    <div className="NewCourseStepTwo-Table-Three-Down-Right rtyuiopRight">
                                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="NewCourseStepTwo-Table-Three lllllllkkkkk">
                                                    {index === 0 && (
                                                        <div className="NewCourseStepTwo-Table-Three-Up lllllllkkkkkUp">
                                                            <p>Individual type</p>
                                                        </div>
                                                    )}
                                                    {index === 0 && (
                                                        <div className="NewCourseStepTwo-Table-Two-Midle lllllllkkkkkMidle">
                                                            <div className="NewCourseStepTwo-Table-Two-Midle-Left lllllllkkkkkMidleLeft">
                                                                <p>Number of lessons</p>
                                                            </div>
                                                            <div className="NewCourseStepTwo-Table-Two-Midle-Right lllllllkkkkkMidlRight">
                                                                <p>Duration</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="NewCourseStepTwo-Table-Two-Down kkkkkllll">
                                                        {level.induvidal_type ?
                                                            (
                                                                <>
                                                                    <div className="NewCourseStepTwo-Table-Two-Down-Left kkkkkllllOne">
                                                                        <input type="text" placeholder='Number of lessons' name='number' />
                                                                    </div>
                                                                    <div className="NewCourseStepTwo-Table-Two-Down-Right kkkkkllllTwo">
                                                                        <select name="" id="">
                                                                            <option value="">123</option>
                                                                            <option value="">456</option>
                                                                            <option value="">789</option>
                                                                        </select>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="NewCourseStepTwo-Table-Three-Down rtyuiop">
                                                                    <div className="NewCourseStepTwo-Table-Three-Down-Left rtyuiopLeft">
                                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                                    </div>
                                                                    <div className="NewCourseStepTwo-Table-Three-Down-Right rtyuiopRight">
                                                                        <span><IoIosCloseCircleOutline /><p>Not available</p></span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(isLevelsAvailable ? 1 : 1)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spTwo'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(isLevelsAvailable ? 8 : 3)}><p>Next post</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )}
            {step === 8 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 3</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Let's configure it by branches</h2>
                                <p>Which courses are available or not available in which branch?</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="NewCourseStepTwo-Table-Sec TableSecEight">
                                    <div className="NewCourseStepTwo-Table-One-Sec">
                                        <div className="NewCourseStepTwo-Table-One-Top-Sec tableOneTopSec">
                                            <p>Course name</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec tableOneTopSec">
                                            <p>For all levels</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec tableOneTopSec">
                                            <p>Beginner</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec tableOneTopSec tableOneTopSeclast">
                                            <p>Elementary</p>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Two-Sec">
                                        <div className="NewCourseStepTwo-Table-Two-Up-Sec">
                                            <p>Group type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <button><p>Select branch</p></button>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <button><p>Select branch</p></button>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec TableTwoUpDownSecLast">
                                            <button><p>Select branch</p></button>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Three-Sec">
                                        <div className="NewCourseStepTwo-Table-Three-Top-Sec">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <button><p>Select branch</p></button>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <button><p>Select branch</p></button>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec TableTwoUpDownSecLast">
                                            <button><p>Select branch</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(isLevelsAvailable ? 7 : 2)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spThree'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(isLevelsAvailable ? 9 : 3)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )}
            {step === 9 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 4</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>Of course, the prices should not be ignored</h2>
                                <p>If the prices in all branches are the same, just write, or if they are different, just check it.</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox">
                                <div className="NewCourseStepTwo-Table-Sec LOLOLOooo">
                                    <div className="NewCourseStepTwo-Table-One ">
                                        <div className="NewCourseStepTwo-Table-One-Top-Sec OneTopSec" >
                                            <p>Course name</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec OneDownSec">
                                            <p>For all levels</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec OneDownSec">
                                            <p>Beginner</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-One-Down-Sec OneDownSec OneDownSecLast">
                                            <p>Elementary</p>
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Two-Sec LOLOTFFFF">
                                        <div className="NewCourseStepTwo-Table-Two-Up-Sec OneTopSec">
                                            <p>Group type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec TableTwoUpDownSecLast">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Three-Sec Table-Three-Sec LOLOTFFF">
                                        <div className="NewCourseStepTwo-Table-Three-Top-Sec OneTopSec">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <input type="text" placeholder='Enter the price ' />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Two-Up-Down-Sec TableTwoUpDownSec TableTwoUpDownSecLast">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="NewCourseStepTwo-Table-Four-Sec">
                                        <div className="NewCourseStepTwo-Table-Four-Top-Sec DFFFRNT">
                                            <p>Different price
                                                in branches</p>
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Four-Down-Sec FourDownSec">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Four-Down-Sec FourDownSec">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="NewCourseStepTwo-Table-Four-Down-Sec FourDownSec FourDownSecLast">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(isLevelsAvailable ? 8 : 4)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spFour'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(isLevelsAvailable ? 10 : 5)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )}
            {step === 10 && (
                <div className="NewCourseStepOne">
                    <div className="NewCourseStepOneClose" onClick={onClose}>
                        <img src={x} alt="" />
                    </div>
                    <div className="NewCourseStepOne-Title">
                        <h2>Let's add a new course to the system</h2>
                        <p>The process of adding a new course to the system consists of a few steps</p>
                    </div>
                    <div className="NewCourseStepOne-Contant">
                        <div className="NewCourseStepOne-Contant-Left">
                            <div className="Strepindi">
                                <p>Step 6</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-Title">
                                <h2>We care about every branch</h2>
                                <p>Change the prices for each branch</p>
                            </div>
                            <div className="NewCourseStepOne-Contant-Left-input-Checkbox LeftInputCheckBox">
                                <div className="StepSix-TableBox">
                                    <div className="StepSix-TableBox-One">
                                        <div className="StepSix-TableBox-One-Up">
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Two">
                                        <div className="StepSix-TableBox-Two-Up">
                                            <p>Branch name</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Snake">
                                            <p>Branch 1</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Midle">
                                            <p>Branch 2</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Down">
                                            <p>Branch 3</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Three">
                                        <div className="StepSix-TableBox-Three-Up">
                                            <p>Group type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Three-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Four">
                                        <div className="StepSix-TableBox-Four-Up">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Four-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                </div>
                                <div className="StepSix-TableBox">
                                    <div className="StepSix-TableBox-One">
                                        <div className="StepSix-TableBox-One-Up">
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Two">
                                        <div className="StepSix-TableBox-Two-Up">
                                            <p>Branch name</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Snake">
                                            <p>Branch 1</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Midle">
                                            <p>Branch 2</p>
                                        </div>
                                        <div className="StepSix-TableBox-Two-Down">
                                            <p>Branch 3</p>
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Three">
                                        <div className="StepSix-TableBox-Three-Up">
                                            <p>Group type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Three-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Three-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                    <div className="StepSix-TableBox-Four">
                                        <div className="StepSix-TableBox-Four-Up">
                                            <p>Individual type</p>
                                        </div>
                                        <div className="StepSix-TableBox-Four-Snake">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Midle">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                        <div className="StepSix-TableBox-Four-Down">
                                            <input type="text" placeholder='Enter the price' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NewCourseStepOne-Contant-Right">
                            <div className="NewCourseStepOne-Contant-Right-Cont">
                                <img src={layer_5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="NewCourseStepOne-Footer">
                        <button className='PreVVi' onClick={() => setStep(4)}><span><FaArrowLeft /></span><p>Previus</p></button>
                        <div className="FooterPag"><span className='sp spFive'><span></span></span></div>
                        <button className='NeKKi' onClick={() => setStep(6)}><p>Next</p><span><FaArrowRight /></span></button>
                    </div>
                </div>
            )}
            {step === 11 && (
                <div className="NewCourseCreated">
                    <div className="TherdTwarIcon">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="NewCourseCreatedTitle">
                        <h2>New course created !</h2>
                        <p>New course successfully created</p>
                    </div>
                </div>
            )}
        </div >
    )
}
