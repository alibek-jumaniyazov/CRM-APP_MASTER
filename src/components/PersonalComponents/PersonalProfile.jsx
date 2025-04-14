import "../../Pages/Personal/Personal.css";
import imgs from "./../../Assets/userProfile.png";
import bgimage1 from "./../../Assets/Clients/OBJECTSONe.png";
import bgimage2 from "./../../Assets/Clients/OBJECTS.png";
import userprofilfile from "./../../Assets/profileBottom.png";
import { Icons } from "../../Assets/icons/icons";
import NameComponentPersonal from "./NameComponentPersonal";
import { useEffect, useState } from "react";
import CourseTable from "../CourseComponents/CourseTable";
import { LuUserSquare2 } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { BiChalkboard, BiCoinStack } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";
import PersonalTable from "./PersonalTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import PersonalInformationEdit from "./PersonalEditModal/PersonalInformationEdit/PersonalInformationEdit";
import PersonalContactEdit from "./PersonalEditModal/PersonalContactEdit/PersonalContactEdit";
import { PiCopySimple } from "react-icons/pi";
import PhoneCopied from "./PersonalEditModal/PhoneCopied/PhoneCopied";
import IdCopied from "./PersonalEditModal/IdCopied/IdCopied";
import PersonaUserEdit from "./PersonalAddModals/PersonaUserEdit";

export default function PersonalProfile({ personalUser, setPersonalUser, getPersonal }) {
    const [Groups, setGroups] = useState([]);
    const [EditInfor, setEditInformation] = useState(false);
    const [EditContact, setEditContact] = useState(false);
    const [NumCop, setNumCop] = useState(false);
    const [idCop, setidCop] = useState(false)
    const [newEploye, setNewEploye] = useState(false)


    const { id } = useParams()
    const storedToken = localStorage.getItem('token');
    const getPersonalGroup = async () => {
        try {
            const { data } = await axios.get(`https://api.quickhub.uz/api/personal/all/${id}`, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            setGroups(data.groups_as_teacher);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPersonalGroup();
    }, []);

    const OpenEditInformation = () => {
        setEditInformation(true)
    }

    const CloseEditInformation = () => {
        setEditInformation(false)
    }

    const OpenEditContact = () => {
        setEditContact(true)
    }

    const CloseEditContact = () => {
        setEditContact(false)
    }

    const OpenEditUser = () => {
        setNewEploye(true)
    }

    const CloseEditUser = () => {
        setNewEploye(false)
    }

    const OpenNumCop = () => {
        setNumCop(true)
        const spanText = document.querySelector('.id-span').textContent; // Получаем текст из <span>
        navigator.clipboard.writeText(spanText).then(() => {
            console.log('Text copied to clipboard:', spanText); // Успешное копирование
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const CloseNumCop = () => {
        setNumCop(false)
    }

    const OpenidCop = () => {
        setidCop(true)
        const spanText = document.querySelector('.id-span').textContent;
        navigator.clipboard.writeText(spanText).then(() => {
            console.log('Text copied to clipboard:', spanText);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const CloseidCop = () => {
        setidCop(false)
    }


    return (
        <div className="PersonalProfile">
            <PersonaUserEdit newEploye={newEploye} setNewEploye={setNewEploye} userId={id} getPersonal={getPersonal} personalUser={personalUser}/>
            {EditInfor && (
                <PersonalInformationEdit onClose={CloseEditInformation} useId={id} getPersonal={getPersonal} personalUser={personalUser}/>
            )}
            {EditContact && (
                <PersonalContactEdit onClose={CloseEditContact} useId={id} getPersonal={getPersonal} personalUser={personalUser}/>
            )}

            {NumCop && (
                <PhoneCopied onClose={CloseNumCop} />
            )}
            {idCop && (
                <IdCopied onClose={CloseidCop} />
            )}

            <div className="PersonalProfileUserInfo" style={{zIndex:"2"}}>
                <div className="UserPersonalProfile">
                    <div className="ProfileBackDark"></div>
                    <img
                        src={userprofilfile}
                        alt=""
                        className="UserPersonalProfilRight"
                    />
                    <div className="UserPersonalProfileLeft">
                        <div className="UserPersonalProfileHeader">
                            <p>{personalUser.role}</p>
                            <p id="ActivePerCur">Active courses: 8</p>
                            <span onClick={OpenEditUser}><FiEdit /><p>Edit</p></span>
                        </div>
                        <div className="UserPersonalProfileAvatars">
                            {personalUser.image ? (
                                <img src={personalUser.image} alt="UserPersonal Avatar" />
                            ) : (
                                <NameComponentPersonal data={`${personalUser.first_name}`} />
                            )}
                        </div>
                        <div className="UserPersonalProfileTitles">
                            <p className="UserPersonalProfileName">{personalUser.first_name} {personalUser.last_name}</p>
                            <p className="UserPersonalProfilePhone id-span" onClick={OpenNumCop} >{personalUser.phone_number} <span><PiCopySimple /></span></p>
                        </div>
                        <div className="UserPersonalProfileBranchs">
                            <div className="UserPersonalProfileBranch">
                                <Icons.location />
                                <p>Branch 1</p>
                            </div>
                            <div className="UserPersonalProfileBranch">
                                <Icons.location />
                                <p>Branch 1</p>
                            </div>
                            <div className="UserPersonalProfileBranch">
                                <Icons.location />
                                <p>Branch 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="UserPersonalProfileCard">
                        <div className="bguserPersonalprofilcard"></div>
                        <div className="bgpersonalimage1">
                            <img src={bgimage1} alt="" />
                        </div>
                        <div className="bgpersonalimage2">
                            <img src={bgimage2} alt="" />
                        </div>

                        <div className="UserPersonalTextProfile">
                            <div className="CardPersonalId">
                                <h2>Finance Card</h2>
                                <p onClick={OpenidCop}>
                                    ID: <span className="id-span">0989736</span>
                                    <div className="Cpy"><PiCopySimple /></div>
                                </p>
                            </div>
                            <div className="CardPersonalBalance">
                                <p>Current balance:</p>
                                <h2>{personalUser.salary_type}so’m</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PersonalProfileUserInfoRight">
                    <div className="ContactsLeadImfo" style={{ margin: "0" }}>
                        <div className="PersonalInfoContacts">
                            <div className="ContactsTitle">
                                <span>
                                    <LiaFileAltSolid />{" "}
                                </span>
                                <p>informations</p>
                            </div>
                            <div className="LeacContant">
                                <div className="ContactsLeft">
                                    <div className="ContactLeftPhone">
                                        <h3>Card number:</h3>
                                        <p>{personalUser.card_umber}</p>
                                    </div>
                                    <div className="ContactLeftSecondary">
                                        <h3>Birthday:</h3>
                                        <p>{personalUser.birthday}</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>Gender:</h3>
                                        <p>{personalUser.gender}</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>Adress:</h3>
                                        <p>{personalUser.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ProfileContactLeftEdit" onClick={OpenEditInformation}>
                                <span><FiEdit /></span>
                            </div>
                        </div>
                        <div className="PersonalInfoContacts">
                            <div className="ContactsTitle">
                                <span>
                                    <LuUserSquare2 />
                                </span>
                                <p>Contacts</p>
                            </div>
                            <div className="ContactContant">
                                <div className="ContactsLeft">
                                    <div className="ContactLeftSecondary">
                                        <h3>Secondary number:</h3>
                                        <p>{personalUser.phone_number2}</p>
                                    </div>
                                    <div className="ContactLeftBirthday">
                                        <h3>Telegram profile:</h3>
                                        <p>{personalUser.tg_username}</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>Instagram profile:</h3>
                                        <p>{personalUser.insta_username}</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>E-mail:</h3>
                                        <p>{personalUser.email}</p>
                                    </div>
                                </div>
                                <div className="ProfileContactLeftEdit">
                                    <span onClick={OpenEditContact}><FiEdit /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PersonalStatsCard">
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <Icons.tvKan />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Active courses</p>
                            </div>
                            <div className="StatBoxText">
                                <h2>2</h2>
                                <p>Group and individual</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <Icons.miniLoading />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Amount to be paid monthly</p>
                            </div>
                            <div className="StatBoxText">
                                <h2>
                                    1 218 000 <p>so’m</p>
                                </h2>
                                <p>for this month</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <Icons.dubleCoin />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Paid for this month</p>
                            </div>
                            <div className="StatBoxText">
                                <h2>
                                    218 000 <p>so’m</p>
                                </h2>
                                <p>from 1 218 000 so’m</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <Icons.calendar />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Debt for this month</p>
                            </div>
                            <div id="Debt" className="StatBoxText">
                                <h2>
                                    1 000 000 <p>so’m</p>
                                </h2>
                                <p>from 1 218 000 so’m</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <PiHandCoins />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>All debt</p>
                            </div>
                            <div id="Debt" className="StatBoxText">
                                <h2>
                                    1 105 000 <p>so’m</p>
                                </h2>
                                <p>from all periods</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div className="Statsbox PersonalStatsbox">
                            <div className="boardStats">
                                <span>
                                    <PiHandCoins />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>All debt</p>
                            </div>
                            <div id="Debt" className="StatBoxText">
                                <h2>
                                    1 105 000 <p>so’m</p>
                                </h2>
                                <p>from all periods</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CourseLavelTableDiv">
                <PersonalTable Groups={Groups} setGroups={setGroups} />
            </div>
        </div>
    );
}
