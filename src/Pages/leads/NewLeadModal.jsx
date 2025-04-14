import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Checkbox, Input, Select } from "antd";
import axios from "axios";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Icons } from "../../Assets/icons/icons";

export default function NewLeadModal({ setNewLeadModal, getLead, getTable }) {
    const storedToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const [showSelect, setShowSelect] = useState(false);
    const [coursePersnoal, SetCoursePersnoal] = useState([]);
    const [step, setStep] = useState(1)

    // Lead uchun yangi obyekt
    const [newLead, setNewLead] = useState({
        lead_type: "lead",
        status: "new",
        first_name: "lead",
        last_name: "lead",
        phone: "+998 ",
        course: "lead",
        subject: "lead",
        lesson_type: "lead",
        lesson_time: "lead",
        source: "lead",
        branch: 0,
        teacher: 0,
    });

    // Application uchun yangi obyekt
    const [newApplication, setNewApplication] = useState({
        first_name: "",
        last_name: "",
        phone_number: "+998",
        subject_type: "",
        lesson_type: "",
        application_source: "",
        add_to_lead_board: false,
    });

    const handleChange = (key, value) => {
        // Lead uchun maydonni yangilash
        setNewLead(prevState => ({
            ...prevState,
            [key]: value,
        }));

        // Application uchun maydonlarni to'g'ri nom bilan yangilash
        setNewApplication(prevState => ({
            ...prevState,
            [key === "first_name" ? "first_name" : key === "source" ? "application_source" : key]: value,
        }));
    };

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

        setNewLead((prev) => ({ ...prev, [key]: `+998 ${formattedNumber}` }));
    };

    const handleKeyDown = (e) => {
        const start = e.target.selectionStart;

        // +998 qismiga zarar yetkazishni oldini olish
        if (start <= 5 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
        }
    };


    const handleSubmit = () => {
        const leadData = { ...newLead };
        delete leadData.add_to_lead_board; // 'add_to_lead_board' ni yuborishdan oldin olib tashlash

        const applicationData = { ...newApplication };
        delete applicationData.add_to_lead_board; // Application uchun ham o'chirish
        delete applicationData.teacher_fk_user; // Application uchun ham o'chirish
        delete applicationData.created_by; // Application uchun ham o'chirish
        delete applicationData.lesson_time; // Application uchun ham o'chirish

        if (newLead.add_to_lead_board) {
            postApplication(applicationData);
        } else {
            postLead(leadData);
        }
    };


    const postLead = async (leadData) => {
        try {
            const response = await axios.post("http://192.168.192.254:8000/api/v1/lead/lead/", newLead, {
                headers: {
                    'Authorization': `Bearer ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.status, response.data, "Post Lead");
            getLead()
        } catch (err) {
            console.error(err);
            console.log("xato");
            
        }
    };

    const postApplication = async (applicationData) => {
        // try {
        //     const response = await axios.post("https://api.quickhub.uz/api/lead/applicants/", applicationData, {
        //         headers: {
        //             Authorization: `Token ${storedToken}`,
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     console.log(response.status);
        //     getTable()
        // } catch (err) {
        //     console.error(err);
        //     console.log(applicationData);

        // }
    };


    const getPersonal = async () => {
        // try {
        //     const { data } = await axios.get("https://api.quickhub.uz/api/personal/all/", {
        //         headers: {
        //             Authorization: `Token ${storedToken}`,
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     SetCoursePersnoal(data.map(item => item));
        // } catch (err) {
        //     console.error(err);
        // }
    };

    useEffect(() => {
        getPersonal();
    }, []);

    return (
        <div className="newLeaadCardCon">
            {step === 1 && (
                <div className="newLeaadCard2">
                    <button className="CloseOneni" onClick={() => setNewLeadModal(false)}>
                        <IoClose />
                    </button>
                    <div className="AddLeadModal_title">
                        <p>Add new lead</p>
                        <p>By creating a new lead, you will also be adding a new customer to customer base</p>
                    </div>
                    <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                        <div>
                            <label htmlFor="first_name">First name*</label>
                            <Input
                                placeholder="John"
                                type="text"
                                value={newLead.first_name}
                                onChange={e => handleChange("first_name", e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name">Last name*</label>
                            <Input
                                placeholder="Anderson"
                                type="text"
                                value={newLead.last_name}
                                onChange={e => handleChange("last_name", e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number*</label>
                            <Input
                                type="text"
                                id="phone"
                                value={newLead.phone}
                                onChange={(e) => handleInputChange('phone', e)}
                                onKeyDown={handleKeyDown}
                                maxLength="17"
                                placeholder="+998"
                            />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="subject">Select subject*</label>
                            <div className="LeadModalCardAdd">
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
                                    onChange={value => handleChange("subject", value)}
                                    options={[
                                        { value: "Kimyo", label: "Kimyo" },
                                        { value: "Math", label: "Mathematics" },
                                        { value: "english", label: "English" },
                                        { value: "Fizka", label: "Fizka" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="NewCustomerModalInfoHR"
                        onClick={() => setShowSelect(!showSelect)}
                        style={{ padding: "none", margin: "10px 0" }}
                    >
                        <span style={{ width: `${showSelect ? "35px" : "103px"}` }}>
                            {showSelect ? "Hide" : "Show more"}
                        </span>
                        <div className="NewCustomerModalHR"></div>
                        <div className={showSelect ? "iconTopArrow" : "iconBottomArrow"}>
                            <Icons.topArrow />
                        </div>
                    </div>

                    {showSelect && (
                        <div className="newLeaadCard_studentMenu1_chil_form one1">
                            <div className="menuChil_information__chil">
                                <label htmlFor="lesson_type">Select lesson type*</label>
                                <div className="LeadModalCardAdd">
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
                                        onChange={value => handleChange("lesson_type", value)}
                                        options={[
                                            { value: "Individual", label: "Individual" },
                                            { value: "Group", label: "Group" },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="menuChil_information__chil">
                                <label htmlFor="teacher_fk_user">Select teacher*</label>
                                <div className="LeadModalCardAdd">
                                    <Select
                                        showSearch
                                        optionFilterProp="label"
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        defaultValue="Select"
                                        className="studentMenu1_chil_form_selectt"
                                        style={{
                                            width: "213px",
                                            height: "45px",
                                            color: "#707683",
                                            outline: "none",
                                            borderRadius: "100px!important",
                                        }}
                                        onChange={value => handleChange("teacher_fk_user", value)}
                                        options={coursePersnoal.map(item => ({
                                            value: item.id,
                                            label: `${item.first_name} ${item.last_name}`,
                                        }))}
                                    />
                                </div>
                            </div>
                            <div className="menuChil_information__chil">
                                <label htmlFor="lesson_time">Select lesson time*</label>
                                <div className="LeadModalCardAdd">
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
                            </div>
                            <div className="menuChil_information__chil">
                                <label htmlFor="source">Select lead source*</label>
                                <div className="LeadModalCardAdd">
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
                                        onChange={value => handleChange("source", value)}
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
                        </div>
                    )}
                    {/* <div className=" ChekNewLeadModal">
                        <Checkbox
                            checked={newLead.add_to_lead_board}
                            onChange={e => handleChange("add_to_lead_board", e.target.checked)}
                        >
                            Add to lead board
                        </Checkbox>
                    </div> */}
                    <div className="LeadsCard_bottomBtns">
                        <button id="save" onClick={() => setStep(2)}>
                            Confirm
                        </button>
                        <button onClick={() => setNewLeadModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="NewModalConfim">
                    <button className="CloseOneniSec" onClick={() => setNewLeadModal(false)}>
                        <IoClose />
                    </button>
                    <div className="NewModalConfimTitle">
                        <h2>Confirm add a new lead</h2>
                        <p>Do you confirm the addition of <br />
                            a new lead to the system?</p>
                    </div>
                    <div className="NewModalConfimButton">
                        <button onClick={() => setNewLeadModal(false)}>Go back</button>
                        <button onClick={() => {
                            handleSubmit(); setStep(3)
                            setTimeout(() => {
                                setNewLeadModal(false);
                            }, 2000);
                        }}>Yes</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="LastConFimModalAddStud">
                    <div className="ConFimModalAddStudLogo">
                        <span><FaRegCircleCheck /></span>
                    </div>
                    <div className="LastConFimModalAddStudTitle">
                        <h2>New lead has been added</h2>
                        <p>A new lead has been successfully <br />
                            added to the system</p>
                    </div>
                </div>
            )}
        </div>
    );
}
