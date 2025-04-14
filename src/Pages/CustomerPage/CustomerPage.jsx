import './CustomerPage.css'
import { useState } from 'react';
import imgs from "./../../Assets/e207b97fee7d4c7d854fff1fc5e81cee.jpg";
import bgimage1 from "./../../Assets/Clients/OBJECTSONe.png";
import bgimage2 from "./../../Assets/Clients/OBJECTS.png";
import piont from "./../../Assets/Clients/Frame 366.png";
import avarage from "./../../Assets/Clients/Frame 367.png";
import { RiFileCopyLine } from "react-icons/ri";
import userprofilfile from "./../../Assets/Clients/Group 313.png";
import twitterqr from "./../../Assets/Clients/twitterLogotype.png";
import { FiEdit } from "react-icons/fi";
import { PiCopySimpleBold } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { LuUserSquare2 } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { CiBookmarkCheck } from "react-icons/ci";
import DeleteIcon from './../../Assets/icons/Delete.png';
import DeleteComment from "../../components/DeleteComments/DeleteComment";
import { VscSend } from "react-icons/vsc";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { GoChevronLeft } from "react-icons/go";
import { TbUserPlus } from "react-icons/tb";
import { LuPlusSquare } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import AddGroup from '../../components/CustomersModals/AddModalCus/AddGroup';
import IndCus from '../../components/CustomersModals/IndividualCus/IndCus';
import { RiDeleteBin6Line } from "react-icons/ri";
import CusDelete from '../../components/CustomersModals/CusDelete/CusDelete';
import { TbSend } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import initialOptionsData from "./options.json";
import Profileimg from "./../../Assets/icons/Profile_img.png";
import { LuMail } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import { Icons } from "../../Assets/icons/icons";
import { Link, useParams } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';


export default function CustomerPage() {

    const { id } = useParams()
    const storedToken = localStorage.getItem('token');



    const [isOpenCopiedModal, setisOpenCopiedModal] = useState(false);
    const [isActivCopied, setisActivCopied] = useState();
    const [isInLesson, setisInLesson] = useState(false);
    const [isArchiveDel, setIsArchiveDel] = useState(false);
    const [isAddGroup, setisAddGroup] = useState(false);
    const [activePage, setActivePage] = useState('profile');
    const [isAddGroupCu, setisAddGroupCu] = useState(false)
    const [isIndcus, setisIndcus] = useState(false)
    const [isDeleteCus, setisdeletecus] = useState(false)
    const [categories, setCategories] = useState([]);
    const [subject, setSubject] = useState("General English: Beginner level");
    const [lessonType, setLessonType] = useState("Group");
    const [teacher, setTeacher] = useState("Mr.Alibek");
    const [lessonTime, setLessonTime] = useState("08:00 - 09:00");
    const [addedDate, setAddedDate] = useState("02.28.2023");
    const [changedDate, setChangedDate] = useState("01.06.2024");
    const [studyDates, setStudyDates] = useState("not available");
    const [advertisingSource, setAdvertisingSource] = useState("Web site");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const payBoxes = [
        {
            id: "125304540",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span>
                    <IoMdCloseCircleOutline />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
        {
            id: "125304539",
            amount: "+ 330 000 so’m",
            type: "Payme",
            course: "TTS - 14:00 Mr.Aleksey",
            date: "06.05.2024",
            transaction: (
                <span id="PayCheck">
                    <CiCircleCheck />
                </span>
            ),
        },
    ];
    const [deleteIndex, setDeleteIndex] = useState(null); const [comments, setComments] = useState([
        {
            author: 'John Smith',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            date: '2024-04-02T18:42:00'
        },
        {
            author: 'John Smith',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            date: '2024-04-01T15:30:00'
        },
        {
            author: 'John Smith',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            date: '2024-04-03T10:15:00'
        },
        {
            author: 'John Smith',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            date: '2024-03-30T09:00:00'
        }
    ]);
    const Dropdown = ({ onDelete, onClose }) => {
        return (
            <div className="DropdownMenuForDeleteCom">
                <button><span><FiEdit /></span><p>Edit comment</p></button>
                <button onClick={onDelete}><span><img src={DeleteIcon} alt="" /></span><p>Delete Comment</p></button>
            </div>
        );
    };
    const FormattedDate = ({ date }) => {
        const formattedDate = new Date(date).toLocaleString();
        return <span>{formattedDate}</span>;
    };

    const [dropdownVisible, setDropdownVisible] = useState(Array(7).fill(false));

    const toggleDropdown = (index) => {
        setDropdownVisible((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleDeleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
        setOpenIndex(null);
    };

    const OpenCopiedModal = () => {
        setisOpenCopiedModal(true);
        setisActivCopied(!isActivCopied);
        setTimeout(() => {
            setisOpenCopiedModal(false);
            setisActivCopied(false);
        }, 1500);
    };

    const CloseCopiedModal = () => {
        setisOpenCopiedModal(false);
    };

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        setComments(comments.filter((_, i) => i !== deleteIndex));
        setIsModalOpen(false);
        setOpenIndex(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setOpenIndex(null);
    };

    const handleOpenAddGroupCu = () => {
        setisAddGroupCu(true);
    }

    const handleCloseAddGroupCu = () => {
        setisAddGroupCu(false);
    }

    const handleOpenIndCu = () => {
        setisIndcus(true);
    }

    const handleCloseIndCu = () => {
        setisIndcus(false);
    }

    const handleOpendeletecus = () => {
        setisdeletecus(true);
    }

    const handleClosedeletecus = () => {
        setisdeletecus(false);
    }

    const sortedComments = comments.sort((a, b) => new Date(b.date) - new Date(a.date));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenSec, setIsDropdownOpenSec] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Sms history");
    const [filteredSmsHistory, setFilteredSmsHistory] = useState([]);
    const [itemsPerPage] = useState(10);
    const totalPages = Math.ceil(filteredSmsHistory.length / itemsPerPage);
    const [inputValue, setInputValue] = useState("");

    const toggleDropdownsec = () => {
        setIsDropdownOpenSec(!isDropdownOpenSec);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdownH = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const [activeTab, setActiveTab] = useState("newSms");

    const handleTabChangeH = (tab) => {
        setActiveTab(tab);
    };
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioClick = (id) => {
        setSelectedRadio((prevSelectedRadio) =>
            prevSelectedRadio === id ? null : id
        );
    };


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handlePageChange = (page) => {
        if (page === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (page === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (typeof page === "number") {
            setCurrentPage(page);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedHistory = filteredSmsHistory.slice(
        startIndex,
        startIndex + itemsPerPage
    );


    const handleGoToPage = () => {
        const pageNumber = parseInt(inputValue);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderContent = () => {
        if (activePage === 'profile') {
            return (
                <div className="USerProfileOneContainer">
                    {isAddGroupCu && (
                        <AddGroup onClose={handleCloseAddGroupCu} />
                    )}
                    {isIndcus && (
                        <IndCus onClose={handleCloseIndCu} />
                    )}
                    {isDeleteCus && (<CusDelete onClose={handleClosedeletecus} />)}
                    <div className="USerProfileOne CustomerProfileOne">
                        <div className="UserProfile">
                            <div className="UserHoverBOx"></div>
                            <div className="UserProfilRight">
                                <img src={userprofilfile} alt="" />
                            </div>
                            <div className="UserProfileLeft">
                                <div className="UserProfileAvatars">
                                    <img src={imgs} alt="User Avatar" />
                                </div>
                                <div className="UserProfileNaming">
                                    <p>Nice to meet you!</p>
                                    <h2>Alisher Atajanov</h2>
                                    <div className="UserProfileStatus">
                                        <button id="Student">Customer</button>
                                        <button id="Contacted">Contacted</button>
                                    </div>
                                </div>
                            </div>
                            <div className="UserProfileCard">
                                <div className="bguserprofilcard"></div>
                                <div className="bgimage1">
                                    <img src={bgimage1} alt="" />
                                </div>
                                <div className="bgimage2">
                                    <img src={bgimage2} alt="" />
                                </div>
                                <div className="UserTextProfile">
                                    <div className="CardId">
                                        <h2>Finance Card</h2>
                                        <p>
                                            ID: <span>0989736</span>
                                            <div className="copiedebat">
                                                <PiCopySimpleBold />
                                            </div>
                                        </p>
                                    </div>
                                    <div className="CardBalance">
                                        <p>Current balance:</p>
                                        <h2>557 000 so’m</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="UserProfileEdit">
                                <span>
                                    <FiEdit />
                                </span>
                                <p>Edit</p>
                            </div>
                        </div>
                        <div className="UserPoints">
                            <div className="UserPointsUp">
                                <div className="UserPointUpNav">
                                    <p>Points</p>
                                    <div className="Pointss">
                                        <div className="PointsAva">
                                            <img src={piont} alt="Points Avatar" />
                                        </div>
                                        <div className="PointsText">
                                            <span>0</span>
                                            <p>Points</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="UserPointsBox">
                                    <p>Added to system: 23.05.2024</p>
                                    <div className="Average">
                                        <div className="AverageAva">
                                            <img src={avarage} alt="Average Avatar" />
                                        </div>
                                        <div className="AverageText">
                                            <span>0</span>
                                            <p>Average</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="UserPointsQR">
                                <div className="Qrbox">
                                    <div className="UserPointsQRHober">
                                        <span>
                                            <MdOutlineFileDownload />
                                        </span>
                                    </div>
                                    <img src={twitterqr} alt="" />
                                </div>
                                <div className="QrTextbox">
                                    <div className="QrCopy">
                                        <p>Qr code</p>
                                        <span
                                            onClick={OpenCopiedModal}
                                            className={isActivCopied ? "active-copied" : ""}
                                        >
                                            <RiFileCopyLine /> <p>Copy link of code</p>
                                        </span>
                                    </div>
                                    <div className="QrAbout">
                                        <p>Change qr code</p>
                                        <p>Share with sms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="StatsCard">
                        <div className="Statsbox">
                            <div className="boardStats">
                                <span>
                                    <Icons.tvKan />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Active courses</p>
                            </div>
                            <div className="StatBoxText">
                                <h2>0</h2>
                                <p>Group and individual</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div id="Amount" className="Statsbox">
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
                                    0<p>so’m</p>
                                </h2>
                                <p>for this month</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div id="Amount" className="Statsbox">
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
                                    0 <p>so’m</p>
                                </h2>
                                <p>from 1 218 000 so’m</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div id="Amount" className="Statsbox">
                            <div className="boardStats">
                                <span>
                                    <CiCalendar />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>Debt for this month</p>
                            </div>
                            <div id="Debt" className="StatBoxText CustomerStatBoxText">
                                <h2>
                                    0 <p>so’m</p>
                                </h2>
                                <p>from 1 218 000 so’m</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                        <div id="Amount" className="Statsbox">
                            <div className="boardStats">
                                <span>
                                    <PiHandCoins />
                                </span>
                            </div>
                            <div className="StatsBoxUp">
                                <p>All debt</p>
                            </div>
                            <div id="Debt" className="StatBoxText CustomerStatBoxText">
                                <h2>
                                    0 <p>so’m</p>
                                </h2>
                                <p>from all periods</p>
                            </div>
                            <div className="PropStats"></div>
                        </div>
                    </div>
                    <div className="ContactsLeadImfo">
                        <div className="Contacts">
                            <div
                                className="ContactsRightEdit"
                            >
                                <FiEdit />
                            </div>
                            <div className="ContactsTitle">
                                <span>
                                    <LuUserSquare2 />
                                </span>
                                <p>Contacts</p>
                            </div>
                            <div className="ContactContant">
                                <div className="ContactsLeft">
                                    <div className="ContactLeftPhone">
                                        <h3>Phone number:</h3>
                                        <p>+998 99 966 7363</p>
                                    </div>
                                    <div className="ContactLeftSecondary">
                                        <h3>Secondary number:</h3>
                                        <p>+998 91 914 65 50</p>
                                    </div>
                                    <div className="ContactLeftBirthday">
                                        <h3>Birthday:</h3>
                                        <p>28.02.2001</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>Gender:</h3>
                                        <p>Male</p>
                                    </div>
                                </div>
                                <div className="ContactsRight">
                                    <div className="ContactsRightAdress">
                                        <h3>Adress:</h3>
                                        <p> Adress name</p>
                                    </div>
                                    <div className="ContactsRightTelegram">
                                        <h3>Telegram profile:</h3>
                                        <p>username</p>
                                    </div>
                                    <div className="ContactsRightInstagram">
                                        <h3>Instagram profile:</h3>
                                        <p>username</p>
                                    </div>
                                    <div className="ContactsRightEmail">
                                        <h3>E-mail:</h3>
                                        <p>admin@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LeadInfo">
                            <div
                                className="ContactsRightEdit"
                            >
                                <FiEdit />
                            </div>
                            <div className="ContactsTitle">
                                <span>
                                    <LiaFileAltSolid />{" "}
                                </span>
                                <p>Lead informations</p>
                            </div>
                            <div className="LeacContant">
                                <div className="ContactsLeft">
                                    <div className="ContactLeftPhone">
                                        <h3>Subject:</h3>
                                        <p>{subject}</p>
                                    </div>
                                    <div className="ContactLeftSecondary">
                                        <h3>Lesson type:</h3>
                                        <p>{lessonType}</p>
                                    </div>
                                    <div className="ContactLeftBirthday">
                                        <h3>Teacher:</h3>
                                        <p>{teacher}</p>
                                    </div>
                                    <div className="ContactLeftGender">
                                        <h3>Lesson time:</h3>
                                        <p>{lessonTime}</p>
                                    </div>
                                </div>
                                <div className="ContactsRight">
                                    <div className="ContactsRightAdress">
                                        <h3>Added date:</h3>
                                        <p>{addedDate}</p>
                                    </div>
                                    <div className="ContactsRightTelegram">
                                        <h3>Changed date:</h3>
                                        <p>{changedDate}</p>
                                    </div>
                                    <div className="ContactsRightInstagram">
                                        <h3>Study dates:</h3>
                                        <p>{studyDates}</p>
                                    </div>
                                    <div className="ContactsRightEmail SSSSS">
                                        <h3>Advertising source:</h3>
                                        <p>{advertisingSource}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CommentsPayHistory">
                        <div className="UserComments">
                            <div className="UserComTitle">
                                <span>
                                    <CiBookmarkCheck />
                                </span>
                                <p>Comments</p>
                            </div>
                            <div className="UserCommentContant">
                                {sortedComments.map((comment, index) => (
                                    <div key={index} className="UserCommentBox">
                                        <div className="UserComText">
                                            <div className="UserComUp">
                                                <p>{comment.author}</p>
                                                <span onClick={() => handleDropdownToggle(index)}>...</span>
                                                {openIndex === index && (
                                                    <Dropdown
                                                        onDelete={() => handleDeleteClick(index)}
                                                        onClose={() => handleDropdownToggle(index)}
                                                    />
                                                )}
                                            </div>
                                            <div className="USerComDuwn">
                                                <p>{comment.text}</p>
                                                <FormattedDate date={comment.date} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isModalOpen && (
                                    <DeleteComment
                                        onClose={handleCloseModal}
                                        onConfirm={handleConfirmDelete}
                                    />
                                )}

                            </div>
                            <div className="CommentSend">
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Enter your comment"
                                ></textarea>
                                <button className="submit">
                                    <VscSend />
                                </button>
                            </div>
                        </div>
                        <div className="PayHistory">
                            <div className="UserComTitle">
                                <span>
                                    <CiBookmarkCheck />
                                </span>
                                <p>Payments history</p>
                            </div>
                            <div className="PayHistoryContant">
                                <div className="PayHistoryTitle">
                                    <p id="Transaction">Transaction id</p>
                                    <p id="Amountp">Amount</p>
                                    <p id="TypeP">Type</p>
                                    <p id="CourseP">Course</p>
                                    <p id="DateP">Date</p>
                                </div>
                                <div className="PayContantCustomer">
                                    <div className="PayContantCustomerBox">
                                        <div className="PayContantCustomerIcon">
                                            <span><CiCircleInfo /></span>
                                            <h2>This client is not a student!</h2>
                                            <p>Therefore, the transactions section does not exist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            );
        } else if (activePage === 'history') {
            return (
                <div className="HistoryAWD">
                    <div className="History-Stud HistoryAWDCus">
                        <div className="History-Stud-Left">
                            <div className="History-Stud-Left-Top">
                                <div className="History-Stud-Left-Top-Title">
                                    <p>Profile</p>
                                    <span>
                                        <p>Active</p>
                                    </span>
                                </div>
                                <div className="History-Stud-Left-Top-Profile">
                                    <div className="History-Stud-Left-Top-Profile-Left">
                                        <img src={Profileimg} alt="Profile" />
                                    </div>
                                    <div className="History-Stud-Left-Top-Profile-Right">
                                        <h2>Alisher Atajanov</h2>
                                        <p>ID: 0989736</p>
                                    </div>
                                </div>
                                <div className="History-Stud-Left-Top-Footer">
                                    <p>Added to system: 20.05.2024 </p>
                                </div>
                            </div>
                            <div className="History-Stud-Left-Down">
                                <div className="History-Stud-Left-Down-Title">
                                    <p>Categories</p>
                                </div>
                                <div className="History-Stud-Left-Down-Content">
                                    {categories.map((category) => (
                                        <div
                                            key={category.id}
                                            className="History-Stud-Left-Down-Content-Box"
                                            onClick={() => handleCategoryChange(category.name)}
                                        >
                                            <div className="History-Stud-Left-Down-Content-Box-Left">
                                                <p>{category.id}</p>
                                                <h2>{category.name}</h2>
                                            </div>
                                            <div className="History-Stud-Left-Down-Content-Box-Right">
                                                <span>
                                                    <LuMail />
                                                </span>
                                                <p>{category.count} sms</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="History-Stud-Right">
                            <div className="History-Stud-Right-Title">
                                <div className="History-Stud-Right-Title-Left">
                                    <p>{selectedCategory}</p>
                                </div>
                                <div className="History-Stud-Right-Title-Right">
                                    <button>
                                        <p>Date</p>
                                        <span>
                                            <FaChevronDown />
                                        </span>
                                    </button>
                                    <button>
                                        <p>Author</p>
                                        <span>
                                            <FaChevronDown />
                                        </span>
                                    </button>
                                    <label>
                                        <span> <Icons.search /></span>
                                        <input
                                            type="text"
                                            placeholder="Search lesson"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="History-Stud-Right-Contant">
                                {paginatedHistory.map((sms) => (
                                    <div key={sms.id} className="History-Stud-Right-Contant-Box">
                                        <div className="History-Stud-Right-Contant-Box-Conainer">
                                            <div className="History-Stud-Right-Contant-Box-Name">
                                                <h2>{sms.name}</h2>
                                                <p>{sms.status}</p>
                                            </div>
                                            <div className="History-Stud-Right-Contant-Box-Comment">
                                                <p>{sms.comment}</p>
                                            </div>
                                            <div className="History-Stud-Right-Contant-Box-Date">
                                                <p>{sms.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="NavigationTool" style={{ height: "70px" }}>
                                <div className=""></div>
                                <div className="TablePaginatorButtons">
                                    <button
                                        className="TablePaginatorButtonsNextPage"
                                        onClick={() => handlePageChange("prev")}
                                        disabled={currentPage === 1}
                                    >
                                        <Icons.leftArrow /> Previous page
                                    </button>
                                    <div className="TablePaginatorNumberButtons">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                className={`TablePaginatorNumberButtonMini ${currentPage === index + 1
                                                    ? "TablePaginatorNumberButtonActive"
                                                    : ""
                                                    }`}
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                        {totalPages > 3 && (
                                            <button className="TablePaginatorNumberButtonMini">
                                                ...
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        className="TablePaginatorButtonsNextPage"
                                        onClick={() => handlePageChange("next")}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next page <Icons.rightArrowColor />
                                    </button>
                                </div>
                                <div className="TablePaginatorInput">
                                    <input
                                        type="number"
                                        placeholder="№"
                                        min="1"
                                        max={totalPages}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <p onClick={handleGoToPage}>Go to page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="CustomerContainer">
            <div className="CustomerNav">
                <div className="CustomerNavRight">
                    <div className="ButtonBack">
                        <Link to={"/clients"}>
                            <button>
                                <IoChevronBack  />
                            </button>
                        </Link>
                    </div>
                    <div className="CustomerNavRightnavbuttons">
                        <button
                            onClick={() => setActivePage('profile')}
                            className={activePage === 'profile' ? 'active' : ''}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActivePage('history')}
                            className={activePage === 'history' ? 'active' : ''}
                        >
                            History
                        </button>
                    </div>
                </div>
                {activePage !== 'history' && (
                    <div className="RightStudNav RightStudNavCus">
                        <button id="Add" onClick={handleOpenAddGroupCu}>
                            <span>
                                <TbUserPlus />
                            </span>
                            <p>Add to Group</p>
                        </button>
                        <button id="Individual" onClick={handleOpenIndCu}>
                            <span>
                                <LuPlusSquare />
                            </span>
                            <p>Individual Lesson</p>
                        </button>
                        <div className="DotContainer">
                            <button id="dot" onClick={toggleDropdownsec}>
                                <HiOutlineDotsHorizontal />
                            </button>
                            {isDropdownOpenSec && (
                                <div className="DeleteDrop">
                                    <button onClick={() => { closeDropdown(); handleOpendeletecus(); }}>
                                        <span><RiDeleteBin6Line /></span>
                                        <p>Delete</p>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {renderContent()}
            <div className="FixButtonStudentPage">
                <button
                    className={"FixButtonStudentPageButton"}
                    onClick={toggleDropdownH}
                >
                    <span>
                        <TbSend />
                    </span>
                    <p>Sms center</p>
                </button>

                {isDropdownOpen && (
                    <div className="FixButtonDropdownSms">
                        <button
                            className="FixButtonDropdownSmsClose"
                            onClick={toggleDropdownH}
                        >
                            <CgClose />
                        </button>
                        <div className="FixButtonStudentPage">
                            <div className="FixButoonStudentWindow">
                                <button
                                    className={activeTab === "newSms" ? "templates" : ""}
                                    onClick={() => handleTabChangeH("newSms")}
                                >
                                    New SMS
                                </button>
                                <button
                                    className={activeTab === "templates" ? "templates" : ""}
                                    onClick={() => handleTabChangeH("templates")}
                                >
                                    Templates
                                </button>
                            </div>
                            <div className="contentNewSms">
                                {activeTab === "newSms" && (
                                    <div>
                                        <div className="CoommentNewSms">
                                            <textarea
                                                name=""
                                                id=""
                                                placeholder="Editing sms  for this student a not template"
                                            ></textarea>
                                        </div>
                                        <div className="PovovrotSendSms">
                                            <div className="PovovrotSendSmsLight">
                                                <FaChevronLeft />
                                            </div>
                                            <div className="MejduButtonovContainer">
                                                <div className="PovovrotSendSmsSurname">
                                                    <p>Name Surname</p>
                                                </div>
                                                <div className="PovovrotSendSmsSubject">
                                                    <p>Subject name</p>
                                                </div>
                                            </div>
                                            <div className="PovovrotSendSmsRight">
                                                <FaChevronRight />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "templates" && (
                                    <div className="TamplatesContainer">
                                        <div
                                            className="RadioOptionContainer"
                                            style={{ height: selectedRadio ? "297px" : "344px" }}
                                        >
                                            {initialOptionsData.map((option) => (
                                                <div
                                                    key={option.id}
                                                    className={`RadioOptionContainerBox ${selectedRadio === option.id ? "activeradio" : ""
                                                        }`}
                                                >
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name={option.name}
                                                            id={option.id}
                                                            checked={selectedRadio === option.id}
                                                            onChange={() => handleRadioClick(option.id)}
                                                        />
                                                        <p>{option.label}</p>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        {selectedRadio && (
                                            <button
                                                className="actionButton"
                                                onClick={() => handleTabChangeH("newSms")}
                                            >
                                                <span>
                                                    <FiEdit />
                                                </span>
                                                <p>Edit selected template for this student</p>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="SendModalSmsSend" onClick={toggleDropdownH}>
                                <span>
                                    <TbSend />
                                </span>
                                <p>Send</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



