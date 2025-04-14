import { GrMoney } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { TbUserUp } from "react-icons/tb";
import { HiChevronUpDown } from 'react-icons/hi2'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Checkbox, DatePicker, Input, Radio, Select } from "antd";
import axios from "axios";
import { Icons } from "../../Assets/icons/icons";

export default function NewLeadCard({ plusModal, setPlusModal }) {

    const storedToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const [radioValue, setRadio] = useState(1);
    const [isOpenSearchData, setIsOpenSearchData] = useState(false);
    const [openMenuStatus, setOpenMenuStatus] = useState(0);
    const [studentMenuStatus, setStudentMenuStatus] = useState(0)
    const [selectType, setSelectType] = useState(1)
    const [searchInput, setSearchInput] = useState('');
    const [searchblaInput, setSearblachInput] = useState('');
    const [coursePersnoal, SetCoursePersnoal] = useState([]);
    const [leadModal, setLeadModal] = useState({
        name: '',
        last_name: '',
        phone_number: '+998 ',
        subject_type: 'select',
        lesson_type: 'select',
        teacher_fk_user: 'select',
        lesson_time: 'select',
        lead_source: 'select',
        created_by: userId,
    });

    const handleItemClick = (text) => {
        setSearchInput(text); // Set the input field value to the clicked item's text
        setIsOpenSearchData(false); // Optionally close the search results
    };

    const handleItemblaClick = (text) => {
        setSearblachInput(text); // Set the input field value to the clicked item's text
        setIsOpenSearchData(false); // Optionally close the search results
    };

    const handleChange = (key, value) => {
        setLeadModal((prev) => ({ ...prev, [key]: value }));
    };

    const getPersonal = async () => {
        try {
            const { data } = await axios.get("https://api.quickhub.uz/api/personal/all/", {
                headers: {
                    Authorization: `Token ${storedToken}`,
                    "Content-Type": "application/json",
                },
            });
            SetCoursePersnoal(data.map(item => item));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPersonal();
    }, []);

    const postLead = async () => {
        try {
            const response = await axios.post("https://api.quickhub.uz/api/lead/leads/", leadModal, {
                headers: {
                    Authorization: `Token ${storedToken}`,
                    "Content-Type": "application/json",
                },
            });
            console.log(response.status);
            setLeadModal({
                name: '',
                last_name: '',
                phone_number: '+998 ',
                subject_type: 'select',
                lesson_type: 'select',
                teacher_fk_user: 'select',
                lesson_time: 'select',
                lead_source: 'select',
                created_by: userId,
            })
        } catch (err) {
            console.error(err);
        }
    };

    const handleChangeRadio = (e) => {
        console.log("radio checked", e.target.value);
        setRadio(e.target.value);
    };

    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setSelectType(e.target.value);
    };

    const onChangeRegiosGroup = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const groups = [
        { name: "General English: Beginner level", teacher: "Mr.Johnson", time: "TTS - 14:00" },
        { name: "General English: Intermediate level", teacher: "Ms.Smith", time: "MWF - 10:00" },
        { name: "IELTS Preparation", teacher: "Dr.Brown", time: "MWF - 12:00" },
        { name: "Business English", teacher: "Mrs.Davis", time: "TTS - 16:00" },
    ];

    const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const onChangeChekboxGroup = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const [roomSelect, SetRoomSelect] = useState([]);
    const getRoom = async () => {
        try {
            const { data } = await axios.get("https://api.quickhub.uz/api/groups/rooms/", {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            SetRoomSelect(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getRoom()
    }, []);


    const [phone, setPhone] = useState('+998 ');

    const formatPhoneNumber = (input) => {
        // Faqat raqamlar va bo'sh joylarni qabul qilish
        input = input.replace(/[^\d]/g, '');

        // Faqat 9ta raqam qabul qilish
        if (input.length > 9) {
            input = input.substring(0, 9);
        }

        // Telefon raqamini formatlash: XX XXX XX XX
        let formattedNumber = input.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
        return formattedNumber;
    };

    const handleInputChange = (key, e) => {
        let input = e.target.value;

        // Agar +998 bo'lmasa, +998 ga qaytarish
        if (!input.startsWith('+998')) {
            setPhone('+998 ');
            return;
        }

        // Faqat raqamlar qismi uchun ishlash
        const phoneDigits = input.slice(5); // +998 ni chiqarib tashlaymiz
        const formattedNumber = formatPhoneNumber(phoneDigits);

        setLeadModal((prev) => ({ ...prev, [key]: `+998 ${formattedNumber}` }));
    };

    const handleKeyDown = (e) => {
        const start = e.target.selectionStart;

        // +998 qismiga zarar yetkazishni oldini olish
        if (start <= 5 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
        }
    };


    return (
        <div className="newLeaadCardCon">
            <div className="newLeaadCard">
                <div className="newLeaadCard__Head">
                    <button onClick={() => setPlusModal(!plusModal)}><IoClose /></button>
                    <p>What are we adding?</p>
                </div>
                <div className="newLeaadCard__MenuBoxs">
                    <div className={openMenuStatus == 1 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(1)}>
                        <GrMoney />
                        <p className="newLeaadCard__MenuBox_title">Payment</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new payment</p>
                    </div>
                    <div className={openMenuStatus == 2 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(2)}>
                        <RiGraduationCapLine />
                        <p className="newLeaadCard__MenuBox_title">Student</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new student</p>
                    </div>
                    <div className={openMenuStatus == 3 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(3)}>
                        <FiUser />
                        <p className="newLeaadCard__MenuBox_title">Lead</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new lead</p>
                    </div>
                </div>
                {openMenuStatus === 1 && (
                    <div className="newLeaadCard_paymentMenu">
                        <div className="newLeaadCard_paymentMenu_title">
                            <h2>Add a new student fee</h2>
                            <p>Search for a student by phone number or name, surname</p>
                        </div>
                        <form action="">
                            <div className="FinanceModalSerach">
                                <div className="FinanceModalSerachInfo">
                                    <IoSearchSharp />
                                    <input
                                        type="text"
                                        value={searchInput} // Set the value of the input field
                                        onClick={() => setIsOpenSearchData(!isOpenSearchData)}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        placeholder="Search student"
                                    />
                                    <div className={isOpenSearchData ? "search_data" : "none"}>
                                        {[...Array(9)].map((_, index) => (
                                            <div key={index} onClick={() => handleItemClick(`Alisher Atajanov ${index}`)}>
                                                <p>Alisher Atajanov {index}</p>
                                                <p>+998 99 966 73 63</p>
                                                <p>- 182 000 so'm</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="AddSalaryModalOneSelect">
                                <label htmlFor="">Select course*</label>
                                <Select
                                    defaultValue="select"
                                    className=""
                                    style={{
                                        width: "100%!important",
                                        height: "45px",
                                        color: "#707683",
                                        outline: " none",
                                        borderRadius: "10px!important",
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: "select",
                                            label: "Select",
                                        },
                                        {
                                            value: "Category 1",
                                            label: "Category 1",
                                        },
                                        {
                                            value: "Category 2",
                                            label: "Category 2",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="AddSalaryModalSelects">
                                <div>
                                    <label
                                        htmlFor=""
                                        style={{
                                            transform: "translateY(-3px)"
                                        }}
                                    >Select date</label>
                                    <DatePicker
                                        style={{
                                            width: '100%',
                                            height: '40px',
                                            borderRadius: '10px',
                                            transform: "translateY(-3px)"
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Payment amout</label>
                                    <div className="inputIconDiv">
                                        <Icons.coinsClient />
                                        <input type="text" placeholder="Amount" />
                                    </div>
                                </div>
                            </div>
                            <div className="AddSalaryModalRadios">
                                <span>Payment amout</span>
                                <Radio.Group
                                    onChange={handleChangeRadio}
                                    value={radioValue}
                                    className="AddSalaryModalRadio"
                                >
                                    <Radio value={1}>Cash</Radio>
                                    <Radio value={2}>Payoneer</Radio>
                                    <Radio value={3}>Paypal</Radio>
                                    <Radio value={4}>MasterCard</Radio>
                                </Radio.Group>
                            </div>
                            <div className="AddSalaryModalComment">
                                <span>Comment (optional)</span>
                                <div className="">
                                    <textarea placeholder="Note for payment"></textarea>
                                </div>
                            </div>
                            <div className="AddSalaryModalBalance">
                                <div className="addSalaryBalance">
                                    <div className="AddSalaryModalBalanceInfoText">
                                        <p>Current balance:</p>
                                        <span style={{ color: "#F7685B" }}>-183 000 so’m</span>
                                    </div>
                                    {/* <div className="AddSalaryModalBalanceInfoText">
              <p>Balance after pay:</p>
              <span>1 218 000 so’m</span>
            </div> */}
                                </div>
                                <div className="AddSalaryModalBalanceCheck  ">
                                    <Checkbox>Print a check</Checkbox>
                                </div>
                            </div>
                            <div className="footerBtns">
                                <button type="button">Cancel</button>
                                <button type="button">Confirm</button>
                            </div>
                        </form>
                    </div>
                )}
                {openMenuStatus === 2 && (
                    <div className="newLeaadCard_studentMenu">
                        {
                            studentMenuStatus == 0 ? (
                                <div className="newLeaadCard_studentMenu1">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>How do yo want to create a new student?</p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu">
                                        <div onClick={() => setStudentMenuStatus(1)} className="newLeaadCard_studentMenu_Menu_btn1">
                                            <FiUser />
                                            <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                                                <p>Add new student</p>
                                                <span>Create new student</span>
                                            </div>
                                        </div>
                                        <div onClick={() => setStudentMenuStatus(4)} className="newLeaadCard_studentMenu_Menu_btn1">
                                            <TbUserUp />
                                            <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                                                <p>From customer</p>
                                                <span>Convert customer to student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 1 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label>First name*</label>
                                            <Input
                                                placeholder="John"
                                                type="text"
                                                value={leadModal.first_name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label>Last name*</label>
                                            <Input
                                                placeholder="Anderson"
                                                type="text"
                                                value={leadModal.last_name}
                                                onChange={(e) => handleChange('last_name', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label>Phone numberr*</label>
                                            <Input
                                                type="text"
                                                id="phone"
                                                value={leadModal.phone_number}
                                                onChange={(e) => handleInputChange('phone_number', e)}
                                                onKeyDown={handleKeyDown}
                                                maxLength="17"
                                                placeholder="+998"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Brihday*</label>
                                            <DatePicker
                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    borderRadius: '10px',
                                                    transform: "translateY(-1px)"
                                                }}
                                            // onChange={handleDateChange2}
                                            />
                                        </div>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select">
                                            <p>Select tyoe of lesson*</p>
                                            <Radio.Group onChange={onChange} value={selectType} className="newLeaadCard_studentMenu1_chil_form_select_inputs">
                                                <Radio value={2}>Individual lesson</Radio>
                                                <Radio value={3}>Group lesson</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(0)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(selectType)}>Next</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 2 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                        <p>Create individual lesson for <b>Alisher Atajanov</b></p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Select subject</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('subject_type', value)}
                                                options={[
                                                    { value: "Kimyo", label: "Kimyo" },
                                                    { value: "Math", label: "Mathematics" },
                                                    { value: "english", label: "English" },
                                                    { value: "Fizka", label: "Fizka" },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select level</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('lesson_type', value)}
                                                options={[
                                                    { value: "Individual", label: "Individual" },
                                                    { value: "Group", label: "Group" },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select teacher</label>
                                            <Select
                                                showSearch
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '')
                                                        .toLowerCase()
                                                        .localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('teacher_fk_user', value)}
                                                options={coursePersnoal.map(item => ({
                                                    value: item.id,
                                                    label: `${item.first_name} ${item.last_name}`,
                                                }))}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select days*</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('lesson_type', value)}
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
                                            <label htmlFor="">Select start time*</label>
                                            <Select
                                                defaultValue="Select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{
                                                    width: "213px",
                                                    height: "45px",
                                                    color: "#707683",
                                                    outline: "none",
                                                    borderRadius: "100px!important",
                                                }}
                                                onChange={value => handleChange("lesson_time", value)}
                                                options={[
                                                    { value: "0900", label: "09:00" },
                                                    { value: "1400", label: "14:00" },
                                                    { value: "1800", label: "18:00" },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select room*</label>
                                            <Select
                                                showSearch
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                defaultValue="Select Room"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{
                                                    width: "213px",
                                                    height: "45px",
                                                    color: "#707683",
                                                    outline: " none",
                                                    borderRadius: "100px!important",
                                                }}
                                                // value={body1.room}
                                                onChange={handleChange}
                                                options={
                                                    roomSelect.map(item => ({
                                                        value: item.name,
                                                        label: item.name
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Monthly discount*</label>
                                            <Input
                                                placeholder="Amout"
                                                type="text"
                                                value={leadModal.first_name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select start day*</label>
                                            <DatePicker
                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    borderRadius: '10px',
                                                    transform: "translateY(-1px)"
                                                }}
                                            // onChange={handleDateChange2}
                                            />
                                        </div>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select">
                                            <div className="newLeaadCard_studentMenu1_chil_form_select_check">
                                                <label htmlFor=""></label>
                                                <Checkbox onChange={onChangeChekboxGroup}>Create a new individual price</Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addCardInfo">
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total number of lesson: </label>
                                                <span>165</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total study duration:</label>
                                                <span>6 months</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start time: </label>
                                                <span>17:00</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End time</label>
                                                <span>19:00</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start day: </label>
                                                <span>May 15</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End day</label>
                                                <span>deckaber 15</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(1)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(2)}>Confrim</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 3 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                        <p>Select group to add <b>Alisher Atajanov</b></p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Select subject</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('subject_type', value)}
                                                options={[
                                                    { value: "Kimyo", label: "Kimyo" },
                                                    { value: "Math", label: "Mathematics" },
                                                    { value: "english", label: "English" },
                                                    { value: "Fizka", label: "Fizka" },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select level</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('lesson_type', value)}
                                                options={[
                                                    { value: "Individual", label: "Individual" },
                                                    { value: "Group", label: "Group" },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select teacher</label>
                                            <Select
                                                showSearch
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '')
                                                        .toLowerCase()
                                                        .localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('teacher_fk_user', value)}
                                                options={coursePersnoal.map(item => ({
                                                    value: item.id,
                                                    label: `${item.first_name} ${item.last_name}`,
                                                }))}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select days</label>
                                            <Select
                                                defaultValue="select"
                                                className="studentMenu1_chil_form_selectt"
                                                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                                onChange={(value) => handleChange('lesson_type', value)}
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
                                    </div>
                                    <div className="serachGroup">
                                        <div className="serachGroupInput">
                                            <IoSearchSharp />
                                            <input
                                                type="text"
                                                placeholder="Type the name of the group"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                        <div className="serachGroupMenu">
                                            <div className="serachGroupMenu_nav">
                                                <span>
                                                    <p>Group names</p>
                                                    <HiChevronUpDown />
                                                </span>
                                                <span>
                                                    <p>Teacher</p>
                                                    <HiChevronUpDown />
                                                </span>
                                                <span>
                                                    <p>Time</p>
                                                    <HiChevronUpDown />
                                                </span>
                                            </div>
                                            <Radio.Group onChange={onChangeRegiosGroup} value={value} className="serachGroupMenu_menu">
                                                {filteredGroups.length > 0 ? (
                                                    filteredGroups.map((group, index) => (
                                                        <Radio value={index} className="groupLessonRadios" style={{ width: "100%" }}>
                                                            <div className="groupLessonRadio">
                                                                <span >
                                                                    {/* <input type="radio" /> */}
                                                                    <p>{group.name}</p>
                                                                </span>
                                                                <span>
                                                                    <p>{group.teacher}</p>
                                                                </span>
                                                                <span>
                                                                    <p>{group.time}</p>
                                                                    <IoIosInformationCircleOutline />
                                                                </span>
                                                            </div>
                                                        </Radio>
                                                    ))
                                                ) : (
                                                    <p>No groups found</p>
                                                )}
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Monthly discount*</label>
                                            <Input
                                                placeholder="Amout"
                                                type="text"
                                                value={leadModal.first_name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select start day*</label>
                                            <DatePicker
                                                style={{
                                                    width: '100%',
                                                    height: '39px',
                                                    borderRadius: '10px',
                                                    transform: "translateY(-2px)"
                                                }}
                                            // onChange={handleDateChange2}
                                            />
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form_select">
                                        <div className="newLeaadCard_studentMenu1_chil_form_select_check">
                                            <label htmlFor="">Select tyoe of lesson*</label>
                                            <Checkbox onChange={onChangeChekboxGroup}>Discount for the frist month</Checkbox>
                                        </div>
                                    </div>
                                    <div className="addCardInfo">
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total number of lesson: </label>
                                                <span>165</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total study duration:</label>
                                                <span>6 months</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start time: </label>
                                                <span>17:00</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End time</label>
                                                <span>19:00</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start day: </label>
                                                <span>May 15</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End day</label>
                                                <span>deckaber 15</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(1)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(3)}>Confrim</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 4 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Convert customer to student</h2>
                                        <p>Search for a customer by phone number or name, surname</p>
                                    </div>
                                    <div className="SearchGlobalBox">
                                        <div className="serach">
                                            <IoSearchSharp />
                                            <input onClick={() => setIsOpenSearchData(!isOpenSearchData)} type="text" placeholder="Global search" />
                                            <div className={isOpenSearchData ? "search_data" : "none"}>
                                                {[...Array(9)].map((_, index) => (
                                                    <div key={index}>
                                                        <p>Alisher Atajanov</p>
                                                        <p>+998 99 966 73 63</p>
                                                        <p>- 182 000 so'm</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form_select">
                                        <label htmlFor="">Select tyoe of lesson*</label>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select_inputs">
                                            <div>
                                                <input
                                                    onChange={() => setSelectType(2)}
                                                    type="radio"
                                                    name="lessonType"
                                                />
                                                <label htmlFor="">Individual lesson</label>
                                            </div>
                                            <div>
                                                <input
                                                    onChange={() => setSelectType(3)}
                                                    type="radio"
                                                    name="lessonType"
                                                />
                                                <label htmlFor="">Group lesson</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(0)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(5)}>Next</button>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                )}{
                    openMenuStatus === 3 && (
                        <div className="newLeaadCard_studentMenu1_chil" >
                            <div className="newLeaadCard_studentMenu_title">
                                <h2>Add a new lead</h2>
                                <p>By creating a new laed , you will also be adding a new customer to customer base</p>
                            </div>
                            <div className="newLeaadCard_studentMenu1_chil_form">
                                <div>
                                    <label>First name*</label>
                                    <Input
                                        placeholder="John"
                                        type="text"
                                        value={leadModal.first_name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Last name*</label>
                                    <Input
                                        placeholder="Anderson"
                                        type="text"
                                        value={leadModal.last_name}
                                        onChange={(e) => handleChange('last_name', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Phone number*</label>
                                    <Input
                                        placeholder="+998"
                                        type="tel"
                                        value={leadModal.phone_number}
                                        onChange={(e) => handleChange('phone_number', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Select subject*</label>
                                    <Select
                                        defaultValue="select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                        onChange={(value) => handleChange('subject_type', value)}
                                        options={[
                                            { value: "Kimyo", label: "Kimyo" },
                                            { value: "Math", label: "Mathematics" },
                                            { value: "english", label: "English" },
                                            { value: "Fizka", label: "Fizka" },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <label>Select lesson type</label>
                                    <Select
                                        defaultValue="select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                        onChange={(value) => handleChange('lesson_type', value)}
                                        options={[
                                            { value: "Individual", label: "Individual" },
                                            { value: "Group", label: "Group" },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <label>Select teacher</label>
                                    <Select
                                        showSearch
                                        optionFilterProp="label"
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        defaultValue="select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                        onChange={(value) => handleChange('teacher_fk_user', value)}
                                        options={coursePersnoal.map(item => ({
                                            value: item.id,
                                            label: `${item.first_name} ${item.last_name}`,
                                        }))}
                                    />
                                </div>
                                <div>
                                    <label>Select lesson time</label>
                                    <Select
                                        defaultValue="select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                        onChange={(value) => handleChange('lesson_time', value)}
                                        options={[
                                            { value: "0900", label: "09:00" },
                                            { value: "1400", label: "14:00" },
                                            { value: "1800", label: "18:00" },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <label>Select lead source</label>
                                    <Select
                                        defaultValue="select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                                        onChange={(value) => handleChange('lead_source', value)}
                                        options={[
                                            {
                                                value: "Web site",
                                                label: "Web site",
                                            },
                                            {
                                                value: "Outdoor advertising",
                                                label: "Outdoor advertising",
                                            },
                                            {
                                                value: "Social network",
                                                label: "Social network",
                                            },
                                            {
                                                value: "Recommendation",
                                                label: "Recommendation",
                                            },
                                            {
                                                value: "Other",
                                                label: "Other",
                                            },
                                            {
                                                value: "None",
                                                label: "None",
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                <button onClick={() => setStudentMenuStatus(null)}>Canel</button>
                                <button onClick={() => {
                                    setStudentMenuStatus(null); postLead()
                                }}>Confirm</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
