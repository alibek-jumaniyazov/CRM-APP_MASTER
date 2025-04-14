import { useEffect, useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import plus_comment from './../../Assets/icons/plus_comment.png'
import Submit_comment from './../../Assets/icons/Submit_comment.png'
import { Select } from "antd";
import axios from "axios";

export default function LeadCard({ closeModal, leadValues , menuStatus  , setMenuStatus}) {
    // const [menuStatus, setMenuStatus] = useState(1);
    const [smsMenu, setSmsMenu] = useState(1);
    const [commentMenu, setCommentMenu] = useState(1);

    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    const [courseSelect, SetCourseSelect] = useState([]);
    const [coursePersnoal, SetCoursePersnoal] = useState([]);
    const [editLead, setEditLead] = useState({
        name: leadValues.name,
        last_name: leadValues.last_name,
        phone_number: leadValues.phone_number,
        subject_type: leadValues.subject_type,
        teacher_fk_user: leadValues.teacher_fk_user.id,
        lesson_type: leadValues.lesson_type,
        lesson_time: leadValues.lesson_time,
        lead_source: leadValues.lead_source,
    })
    const storedToken = localStorage.getItem('token');

    const getCourse = async () => {
        try {
            const { data } = await axios.get("https://api.quickhub.uz/api/course/all/", {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(data.map(item => item.name));
            SetCourseSelect(data);
        } catch (err) {
            console.error(err);
        }
    };


    const getPersonal = async () => {
        try {
            const { data } = await axios.get("https://api.quickhub.uz/api/personal/all/", {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            SetCoursePersnoal(data.map(item => item));
            console.log(data.map(item => item.first_name));

        } catch (err) {
            console.error(err);
        }
    };

    const patchLead = async () => {
        try {
            const { data } = await axios.patch(`https://api.quickhub.uz/api/lead/leads/${leadValues.id}`, editLead, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(data.status);
        } catch (err) {
            console.error(err);
        }
        console.log(editLead);
    };

    useEffect(() => {
        getCourse();
        getPersonal()
    }, []);


    const handleChangeTeacher1 = (value) => {
        setEditLead((prevData) => ({ ...prevData, teacher_fk_user: value }));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditLead((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleChangeSubject = (value) => {
        setEditLead((prevData) => ({ ...prevData, subject_type: value }));
    };
    const handleChangeType = (value) => {
        setEditLead((prevData) => ({ ...prevData, lesson_type: value }));
    };
    const handleChangeTime = (value) => {
        setEditLead((prevData) => ({ ...prevData, lesson_time: value }));
    };
    const handleChangeSource = (value) => {
        setEditLead((prevData) => ({ ...prevData, lead_source: value }));
    };


    return (
        <div className="LeadsCard" onClick={closeModal}>
            <div className="LeadsCardContent" onClick={handleModalContentClick}>
                <div className="LeadsCardNav">
                    <button onClick={closeModal} className="LeadsCardNav__closeBtn"><Icons.close /></button>
                    <div className="LeadsCardNavText">
                        <h2>Lead card</h2>
                        <p>Are you sure you want to edit the lead card?</p>
                    </div>
                </div>
                <div className="LeadsCard__menu">
                    <button
                        className={menuStatus === 1 ? 'active' : ''}
                        onClick={() => setMenuStatus(1)}
                    >
                        Information
                    </button>
                    <button
                        className={menuStatus === 2 ? 'active' : ''}
                        onClick={() => setMenuStatus(2)}
                    >
                        Sms
                    </button>
                    <button
                        className={menuStatus === 3 ? 'active' : ''}
                        onClick={() => setMenuStatus(3)}
                    >
                        Comments
                    </button>
                    <button
                        className={menuStatus === 4 ? 'active' : ''}
                        onClick={() => setMenuStatus(4)}
                    >
                        History
                    </button>
                </div>
                {menuStatus === 1 && (
                    <div className="newLeaadCard_studentMenu1_chil_form" style={{ marginTop: "35px" , gap:"20px" }}>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">First name*</label>
                            <input type="text" placeholder="john" name="name" value={editLead.name} onChange={handleInputChange} />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Last name*</label>
                            <input type="text" placeholder="Anderson" name="last_name" value={editLead.last_name} onChange={handleInputChange} />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Phone number*</label>
                            <input type="text" placeholder="+998" name="phone_number" value={editLead.phone_number} onChange={handleInputChange} />
                        </div>



                        <div className="menuChil_information__chil">
                            <label htmlFor="subject">Select subject*</label>
                            <div className="LeadModalCardAdd">
                                <Select
                                    // defaultValue="select"
                                    className="studentMenu1_chil_form_selectt"
                                    style={{
                                        width: "213px",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "100px!important",
                                    }}
                                    value={editLead.subject_type}
                                    onChange={handleChangeSubject}
                                    options={[
                                        { value: "Kimyo", label: "Kimyo" },
                                        { value: "math", label: "Mathematics" },
                                        { value: "english", label: "English" },
                                        { value: "Fizka", label: "Fizka" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="lessonType">Select lesson type*</label>
                            <div className="LeadModalCardAdd">
                                <Select
                                    // defaultValue="select"
                                    className="studentMenu1_chil_form_selectt"
                                    style={{
                                        width: "213px",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "100px!important",
                                    }}
                                    value={editLead.lesson_type}
                                    onChange={handleChangeType}
                                    options={[
                                        { value: "Individual", label: "Individual" },
                                        { value: "Group", label: "Group" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="teacher">Select teacher*</label>
                            <div className="LeadModalCardAdd">
                                <Select
                                    showSearch
                                    // defaultValue="Select teacher"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    className="studentMenu1_chil_form_selectt"
                                    style={{
                                        width: "213px",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "100px!important",
                                    }}
                                    value={editLead.teacher_fk_user}
                                    onChange={handleChangeTeacher1}
                                    options={
                                        coursePersnoal.map(item => ({
                                            value: item.id,
                                            label: `${item.first_name} ${item.last_name}`
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="lessonTime">Select lesson time*</label>
                            <div className="LeadModalCardAdd">
                                <Select
                                    defaultValue="select"
                                    className="studentMenu1_chil_form_selectt"
                                    style={{
                                        width: "213px",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "100px!important",
                                    }}
                                    value={editLead.lesson_time}
                                    onChange={handleChangeTime}
                                    options={[
                                        { value: "0900", label: "09:00" },
                                        { value: "1400", label: "14:00" },
                                        { value: "1800", label: "18:00" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="leadSource">Select lead source*</label>
                            <div className="LeadModalCardAdd">
                                <Select
                                    defaultValue="select"
                                    className="studentMenu1_chil_form_selectt"
                                    style={{
                                        width: "213px",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "100px!important",
                                    }}
                                    value={editLead.lead_source}
                                    onChange={handleChangeSource}
                                    options={[
                                        { value: "Web", label: "Web" },
                                        { value: "Instagram", label: "Instagram" },
                                        { value: "Telegram", label: "Telegram" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {menuStatus === 2 && (
                    <div className="menuChil_sms">
                        {smsMenu === 1 ? (
                            <div className="menuChil_sms_messages">
                                <div className="menuChil_sms_message">
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setSmsMenu(2)} className="menuChil_sms_message_sendBtn"><span><TbSend /></span><p>New sms</p></button>
                            </div>
                        ) : (
                            <div className="menuChil_sms_messagesSend">
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur necessitatibus eos molestiae omnis consequuntur accusantium dolores id placeat. Mollitia, quasi?"></textarea>
                                <div className="menuChil_sms_messagesSend_menuBtns">
                                    <button className="Massageback_menuBtns"><FaAngleLeft /></button>
                                    <div className="BlaHuila">
                                        <button className="MassageSure_menuBtns">Name Surname</button>
                                        <button className="MassageSubject_menuBtns">Subject name</button>
                                        <button className="MassageTeacher_menuBtns">Teacher name</button>
                                    </div>
                                    <button className="Massageback_menuBtns"><FaChevronRight /></button>
                                </div>
                                <div className="menuChil_sms_messagesSend_endBtns">
                                    <button onClick={() => setSmsMenu(1)}> <span><RxExit /></span><p>Back to sms history</p></button>
                                    <button><span><TbSend /></span><p>Send</p></button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {menuStatus === 3 && (
                    <div className="menuChil_sms">
                        {commentMenu === 1 ? (
                            <div className="menuChil_sms_messages">
                                <div className="menuChil_sms_message">
                                    <div className="menuChil_sms_message_box">
                                        <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                                        <div className="menuChil_sms_message_box_texts">
                                            <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                            <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                                        </div>
                                    </div>
                                    <div className="menuChil_sms_message_box">
                                        <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                                        <div className="menuChil_sms_message_box_texts">
                                            <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                            <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                                        </div>
                                    </div>
                                    <div className="menuChil_sms_message_box">
                                        <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                                        <div className="menuChil_sms_message_box_texts">
                                            <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                            <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                                        </div>
                                    </div>
                                    <div className="menuChil_sms_message_box">
                                        <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                                        <div className="menuChil_sms_message_box_texts">
                                            <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                            <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setCommentMenu(2)} className="menuChil_sms_message_sendBtn"><div className="img_menuChil_sms_message_sendBtn"><img src={plus_comment} alt="" /></div> <p>Add new comment</p></button>
                            </div>
                        ) : (
                            <div className="menuChil_sms_messagesSend">
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur necessitatibus eos molestiae omnis consequuntur accusantium dolores id placeat. Mollitia, quasi?"></textarea>
                                <div className="menuChil_sms_messagesSend_menuBtns">
                                    <button className="Massageback_menuBtns"><FaAngleLeft /></button>
                                    <div className="BlaHuila">
                                        <button className="MassageSure_menuBtns">Name Surname</button>
                                        <button className="MassageSubject_menuBtns">Subject name</button>
                                        <button className="MassageTeacher_menuBtns">Teacher name</button>
                                    </div>
                                    <button className="Massageback_menuBtns"><FaChevronRight /></button>
                                </div>
                                <div className="menuChil_sms_messagesSend_endBtns">
                                    <button onClick={() => setCommentMenu(1)}><span><RxExit /></span><p>Back to comment history</p>  </button>
                                    <button><div className="img_menuChil_sms_message_sendBtn"><img src={Submit_comment} alt="" /></div><p>Submit</p></button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {menuStatus === 4 && (
                    <div className="menuChil_sms_message menuChil_sms_message_history">
                        <div className="menuChil_sms_message_box">
                            <h4 className="menuChil_sms_message_status">Send</h4>
                            <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                            <div className="menuChil_sms_message_box_texts">
                                <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                                <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                            </div>
                        </div>
                        <div className="menuChil_sms_message_box">
                            <h4 className="menuChil_sms_message_status">Send</h4>
                            <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                            <div className="menuChil_sms_message_box_texts">
                                <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                                <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                            </div>
                        </div>
                        <div className="menuChil_sms_message_box">
                            <h4 className="menuChil_sms_message_status">Send</h4>
                            <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                            <div className="menuChil_sms_message_box_texts">
                                <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                                <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                            </div>
                        </div>
                        <div className="menuChil_sms_message_box">
                            <h4 className="menuChil_sms_message_status">Send</h4>
                            <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                            <div className="menuChil_sms_message_box_texts">
                                <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                                <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="LeadsCard_bottomBtns">
                    <button id="save" onClick={patchLead}>Save</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );

}
