import React, { useState, useEffect } from "react";
import "./Studentpage.css";
import { IoChevronBack } from "react-icons/io5";
import { TbUserPlus } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuPlusSquare } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import imgs from "./../../Assets/e207b97fee7d4c7d854fff1fc5e81cee.jpg";
import bgimage1 from "./../../Assets/Clients/OBJECTSONe.png";
import bgimage2 from "./../../Assets/Clients/OBJECTS.png";
import piont from "./../../Assets/Clients/Frame 366.png";
import avarage from "./../../Assets/Clients/Frame 367.png";
import { RiFileCopyLine } from "react-icons/ri";
import userprofilfile from "./../../Assets/Clients/Group 313.png";
import twitterqr from "./../../Assets/Clients/twitterLogotype.png";
import { BiChalkboard } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { CiBookmarkCheck } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPrinter } from "react-icons/fi";
import { PiCheckCircleBold } from "react-icons/pi";
import { TbSend } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import Modal from "react-modal";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiCopySimpleBold } from "react-icons/pi";
import CopiedModal from "../../components/CopiedModal/CopiedModal";
import EditModal from "../../components/EditModal/EditModal";
import SPageAddtoGroup from "../../components/SPageAddtoGroup/SPageAddtoGroup";
import InvalidLesson from "../../components/InvalidLesson/InvalidLesson";
import Archive from "./../../Assets/icons/Archive.png";
import Delete from "./../../Assets/icons/Delete.png";
import ArchiveModal from "../../components/ArchiveModal/ArchiveModal";
import DeleteDotModal from "../../components/DeleteDotModal/DeleteDotModal";
import OpenTeacher from "./../../Assets/icons/open_teacher.png";
import Share from "./../../Assets/icons/Share.png";
import Starts from "./../../Assets/icons/Stars.png";
import Profileimg from "./../../Assets/icons/Profile_img.png";
import SearchVector from "./../../Assets/icons/Search_vector.png";
import coursesData from "./curses.json";
import lessonsData from "./lessonsData.json";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRedoAlt, FaTimesCircle } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import Chsrts from "./../../Assets/icons/chart9.png";
import conini from "./../../Assets/icons/coins.png";
import calendar from "./../../Assets/icons/calendar.png";
import checkedd from "./../../Assets/icons/Checked.png";
import proc from "./../../Assets/icons/Proc.png";
import Refund from "./../../Assets/icons/Refund.png";
import addExpence from "./../../Assets/icons/AddExpence.png";
import whitecoin from "./../../Assets/icons/WhiteCoin.png";
import { FaAngleUp } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { LuPlusCircle } from "react-icons/lu";
import { PiPrinterThin } from "react-icons/pi";
import { HiOutlinePrinter } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { PiUserSquare } from "react-icons/pi";
import CardPlus from "./../../Assets/icons/CardPlus.png";
import CardEx from "./../../Assets/icons/CardEx.png";
import CardCheck from "./../../Assets/icons/CardCheck.png";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalFinance from "../../components/ModalFinance/ModalFinance";
import FinanceDownTable from "../../components/StudentComponents/StudentTables/FinanceDownTable";
import ModalExpence from "../../components/ModalExpence/ModalExpence";
import ModalPayment from "../../components/ModalPayment/ModalPayment";
import { LuMail } from "react-icons/lu";
import DeleteComment from "../../components/DeleteComments/DeleteComment";
import DeleteIcon from "./../../Assets/icons/Delete.png";
import StudEditModal from "../../components/StudEditModal/StudEditModal";
import { ImSearch } from "react-icons/im";
import { HiStar } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import initialOptionsData from "./options.json";
import { Icons } from "../../Assets/icons/icons";
import axios from "axios";
Modal.setAppElement("#root");

const FormattedDate = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString();
  return <span>{formattedDate}</span>;
};

const Dropdown = ({ onDelete, onClose }) => {
  return (
    <div className="DropdownMenuForDeleteCom">
      <button>
        <span>
          <FiEdit />
        </span>
        <p>Edit comment</p>
      </button>
      <button onClick={onDelete}>
        <span>
          <img src={DeleteIcon} alt="" />
        </span>
        <p>Delete Comment</p>
      </button>
    </div>
  );
};
export default function StudentPage() {
  const [dropdownVisible, setDropdownVisible] = useState(Array(7).fill(false));

  const toggleDropdown = (index) => {
    setDropdownVisible((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const { id } = useParams()
  const [student, setStudent] = useState({})
  const [studentArchive, setStudentArchive] = useState(false)
  const storedToken = localStorage.getItem('token');

  const getStudent = async () => {
    try {
      const { data } = await axios.get(`https://api.quickhub.uz/api/client/all/${id}`, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
      setStudent(data)
    } catch (err) {
      console.error(err);
      setStudentArchive(true)
    }
  };

  const getArchiveStudent = async () => {
    try {
      const { data } = await axios.get(`https://api.quickhub.uz/api/client/arxive/${id}`, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
      setStudent(data)
    } catch (err) {
      console.error(err);
      setStudentArchive(false)
    }
  };

  useEffect(() => {
    if (studentArchive) {
      getArchiveStudent();
    } else {
      getStudent();
    }
  }, [studentArchive , id]);
  

  const [isSmsCenterModalOpen, setIsSmsCenterModalOpen] = useState(false);
  const [isOpenCopiedModal, setisOpenCopiedModal] = useState(false);
  const [isActivCopied, setisActivCopied] = useState();
  const [isOpenModalEdit, setisOpenModalEdit] = useState(false);
  const [isAddGroup, setisAddGroup] = useState(false);
  const [isInLesson, setisInLesson] = useState(false);
  const [isArchiveDel, setIsArchiveDel] = useState(false);
  const [isArchiveArch, setisArchiveArch] = useState(false);
  const [isDeleteTvar, setisDeleteTvar] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lessonSearchTerm, setLessonSearchTerm] = useState("");
  const [isAddExpence, setisAddExpence] = useState(false);
  const [isAllRud, setIsAllRud] = useState(false);
  const [isAddPaymnt, setisAddPaymnt] = useState(false);
  const [activeRow, setActiveRow] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Sms history");
  const [smsHistory, setSmsHistory] = useState([]);
  const [filteredSmsHistory, setFilteredSmsHistory] = useState([]);
  const [currentButton, setCurrentButton] = useState(null);
  const [isEditerInf, setisEditerInf] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioClick = (id) => {
    setSelectedRadio((prevSelectedRadio) =>
      prevSelectedRadio === id ? null : id
    );
  };

  const jsonData = {
    categories: [
      { id: 1, name: "Sms history", count: 105 },
      { id: 2, name: "Action`s history", count: 50 },
    ],
    smsHistory: [
      {
        id: 1,
        name: "John Anderson",
        status: "Sent",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "02.04.2024 18:42",
      },
      {
        id: 2,
        name: "Jane Doe",
        status: "Sent",
        comment: "Another example of a comment for the history.",
        date: "03.04.2024 09:15",
      },
      {
        id: 3,
        name: "Michael Smith",
        status: "Sent",
        comment: "A different SMS message example.",
        date: "04.04.2024 14:30",
      },
      {
        id: 4,
        name: "John Anderson",
        status: "Sent",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "02.04.2024 18:42",
      },
      {
        id: 5,
        name: "Jane Doe",
        status: "Sent",
        comment: "Another example of a comment for the history.",
        date: "03.04.2024 09:15",
      },
      {
        id: 6,
        name: "Michael Smith",
        status: "Sent",
        comment: "A different SMS message example.",
        date: "04.04.2024 14:30",
      },
      {
        id: 7,
        name: "John Anderson",
        status: "Sent",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "02.04.2024 18:42",
      },
      {
        id: 8,
        name: "Jane Doe",
        status: "Sent",
        comment: "Another example of a comment for the history.",
        date: "03.04.2024 09:15",
      },
      {
        id: 9,
        name: "Michael Smith",
        status: "Sent",
        comment: "A different SMS message example.",
        date: "04.04.2024 14:30",
      },
      {
        id: 10,
        name: "John Anderson",
        status: "Sent",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "02.04.2024 18:42",
      },
      {
        id: 11,
        name: "Jane Doe",
        status: "Sent",
        comment: "Another example of a comment for the history.",
        date: "03.04.2024 09:15",
      },
      {
        id: 12,
        name: "Michael Smith",
        status: "Sent",
        comment: "A different SMS message example.",
        date: "04.04.2024 14:30",
      },
    ],
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("newSms");

  const toggleDropdownH = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabChangeH = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setCategories(jsonData.categories);
    setSmsHistory(jsonData.smsHistory);
    setFilteredSmsHistory(jsonData.smsHistory);
  }, []);

  useEffect(() => {
    setFilteredSmsHistory(
      smsHistory.filter(
        (sms) =>
          sms.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sms.comment.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, smsHistory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleDropdownThird = (rowIndex) => {
    setActiveRow(activeRow === rowIndex ? null : rowIndex);
  };
  const [inputValue, setInputValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const totalPages = Math.ceil(filteredSmsHistory.length / itemsPerPage);

  // Sahifa o'zgarishini boshqaruvchi funksiya
  const handlePageChange = (page) => {
    if (page === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (typeof page === "number") {
      setCurrentPage(page);
    }
  };
  const handleGoToPage = () => {
    const pageNumber = parseInt(inputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  // Sahifalash uchun kerakli elementlarni ajratish
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredSmsHistory.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getTransactionIconAndStyle = (transactionType) => {
    let icon = <LuPlusCircle />;
    let style = {
      backgroundColor: "#f3e5f5",
      color: "#6a1b9a",
      padding: "10px",
      borderRadius: "4px",
      border: "2px solid #6a1b9a",
    };

    switch (transactionType) {
      case "Lesson":
        icon = <FiMinusCircle />;
        style = {
          width: "70px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#33A9FF",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      case "Expenditure":
        icon = <IoCloseCircleOutline />;
        style = {
          width: "97px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#F7685B",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      case "Refund":
        icon = <FiMinusCircle />;
        style = {
          width: "70px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#90A0B7",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      default:
        icon = <LuPlusCircle />;
        style = {
          width: "79px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#2ED47A",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
    }

    return { icon, style };
  };

  const [selectedCourseIds, setSelectedCourseIds] = useState([]);

  const handleCourseClick = (id) => {
    setSelectedCourseIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((courseId) => courseId !== id)
        : [...prevSelected, id]
    );
  };

  const renderDropdownContent = (transactionType) => {
    switch (transactionType) {
      case "Lesson":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>01. Lesson 01 - English alphabets</p>
            </div>
            <div className="LEssonDropFooter">
              <div className="LEssonDropFooterLeft">
                <span>
                  <HiOutlinePrinter />
                </span>
                <p>Print check</p>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Expenditure":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>410 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>210 000 so’m</span>
                  </p>
                  <p>
                    April:<span>210 000 so’m</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>300 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>100 000 so’m</span>
                  </p>
                  <p>
                    April:<span>100 000 so’m (-110 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Refund":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                  <p>
                    Payment type:<span>Payme</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>410 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>210 000 so’m</span>
                  </p>
                  <p>
                    April:<span>210 000 so’m</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>300 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>100 000 so’m</span>
                  </p>
                  <p>
                    April:<span>100 000 so’m (-110 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                  <p>
                    Payment type:<span>Payme</span>
                  </p>
                  <p>
                    All debts:<span>410 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m </span>
                  </p>
                  <p>
                    April:<span>250 000 so’m (- 80 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m (- 330 000 so’m)</span>
                  </p>
                  <p>
                    Balance:<span>- 410 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    April:<span>330 000 so’m (+80 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>320 000 so’m (+320 000 so’m)</span>
                  </p>
                  <p>
                    Balans:<span>- 10 000 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const [comments, setComments] = useState([
    {
      author: "John Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "2024-04-02T18:42:00",
    },
    {
      author: "John Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "2024-04-01T15:30:00",
    },
    {
      author: "John Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "2024-04-03T10:15:00",
    },
    {
      author: "John Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "2024-03-30T09:00:00",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isLabelActive, setIsLabelActive] = useState(false);

  const handleLabelClick = () => {
    setIsLabelActive(!isLabelActive); // Toggle active state on label click
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

  const handleEditInfo = () => {
    setisEditerInf(true);
  };

  const handleEditInfoClose = () => {
    setisEditerInf(false);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
    setOpenIndex(null);
  };

  const sortedComments = comments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const toggleDropdownSecond = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  const teacherData = lessonsData.lessonsData && lessonsData.lessonsData[0];

  const filteredLessons = teacherData.lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(lessonSearchTerm.toLowerCase())
  );

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    setSelectedValues(
      (prevSelectedValues) =>
        prevSelectedValues.includes(value)
          ? prevSelectedValues.filter((v) => v !== value) // Снимаем отметку
          : [...prevSelectedValues, value] // Добавляем отметку
    );
  };

  const OpenModalExpence = () => {
    setisAddExpence(true);
  };

  const CloseModalExpence = () => {
    setisAddExpence(false);
  };

  const OpenModalAddPaymn = () => {
    setisAddPaymnt(true);
  };

  const CloseModalAddPaymn = () => {
    setisAddPaymnt(false);
  };

  const OpenInLesson = () => {
    setisInLesson(true);
  };

  const CloseInLesson = () => {
    setisInLesson(false);
  };

  const OpenModalAddG = () => {
    setisAddGroup(true);
  };

  const CloseModalAddG = () => {
    setisAddGroup(false);
  };

  const OpenModalArchive = () => {
    setisArchiveArch(true);
  };

  const CloseModalArchive = () => {
    setisArchiveArch(false);
  };

  const OpenModalDeleteModArch = () => {
    setisDeleteTvar(true);
  };

  const CloseModalDeleteModArch = () => {
    setisDeleteTvar(false);
  };

  const openSmsCenterModal = () => {
    setIsSmsCenterModalOpen(true);
  };

  const OpenModalEdit = (buttonId) => {
    if (currentButton === buttonId) {
      return; // Если модалка уже открыта той же кнопкой, ничего не делаем
    }
    setCurrentButton(buttonId);
    setisOpenModalEdit(true);
  };

  const CloseModalEdit = () => {
    setisOpenModalEdit(false);
    setCurrentButton(null);
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

  const closeSmsCenterModal = () => {
    setIsSmsCenterModalOpen(false);
  };

  const OpenTripleDot = () => {
    setIsArchiveDel(!isArchiveDel);
  };

  const toggleAddRud = () => {
    setIsAllRud(!isAllRud);
  };

  const toggleCloseAddRud = () => {
    setIsAllRud(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Repass":
        return <MdOutlineInfo />;
      case "Not":
        return <IoCloseCircleOutline />;
      default:
        return <FaRegCircleCheck />;
    }
  };

  const getStatusBackground = (status) => {
    switch (status) {
      case "Repass":
        return { backgroundColor: "#FFD700", width: "79px" }; // Желтый для 'Repass'
      case "Not":
        return { backgroundColor: "#FF6347", width: "51px" }; // Красный для 'Not'
      default:
        return { backgroundColor: "#2ED47A" }; // Стандартный фон для остальных
    }
  };

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

  const [activeSection, setActiveSection] = useState("Profile");

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div className="Profile">
            {isEditerInf && <StudEditModal onClose={handleEditInfoClose} />}
            {isOpenCopiedModal && <CopiedModal onClose={CloseCopiedModal} />}
            {isOpenModalEdit && (
              <EditModal onClose={CloseModalEdit} buttonId={currentButton} />
            )}
            {isAddGroup && <SPageAddtoGroup onClose={CloseModalAddG} />}
            {isInLesson && <InvalidLesson onClose={CloseInLesson} />}
            {isArchiveArch && <ArchiveModal onClose={CloseModalArchive} />}
            {isDeleteTvar && (
              <DeleteDotModal onClose={CloseModalDeleteModArch} />
            )}

            <div className="USerProfileOne">
              <div className="UserProfile">
                <div className="UserHoverBOx"></div>
                <div className="UserProfilRight">
                  <img src={userprofilfile} alt="" />
                </div>
                <div className="UserProfileLeft">
                  <div className="UserProfileAvatars">
                    {student.image ? (
                      <img src={student.image} alt="User Avatar" style={{ borderRadius: "32px" }} />
                    ) : (
                      <div style={{
                        width: "86px",
                        height: "86px",
                        borderRadius: "32px",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "42px",
                        fontWeight: "700",
                        fontFamily: "Bold",
                        color: "#005EEB"
                      }}>
                        {student.name ? student.name.charAt(0).toUpperCase() : "?"}
                      </div>
                    )}
                  </div>
                  <div className="UserProfileNaming">
                    <p>Nice to meet you!</p>
                    <h2>{student.name} {student.last_name}</h2>
                    <div className="UserProfileStatus">
                      <button id="Student">Student</button>
                      <button id="Active" className={`${student.status ? student.status : ''}Status`}>
                        {student.status
                          ? student.status.charAt(0).toUpperCase() + student.status.slice(1).toLowerCase()
                          : "Unknown"}
                      </button>
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
                        <span>{student.points}</span>
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
                        <span>4</span>
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
                  <h2>2</h2>
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
                    1 218 000 <p>so’m</p>
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
                    218 000 <p>so’m</p>
                  </h2>
                  <p>from 1 218 000 so’m</p>
                </div>
                <div className="PropStats"></div>
              </div>
              <div id="Amount" className="Statsbox">
                <div className="boardStats">
                  <span>
                    <Icons.orgCalendar />
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
              <div id="Amount" className="Statsbox">
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
            <div className="ContactsLeadImfo">
              <div className="Contacts">
                <div
                  className="ContactsRightEdit"
                  onClick={() => OpenModalEdit(1)}
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
                      <p>{student.phone_number}</p>
                    </div>
                    <div className="ContactLeftSecondary">
                      <h3>Secondary number:</h3>
                      <p>{student.phone_number}</p>
                    </div>
                    <div className="ContactLeftBirthday">
                      <h3>Birthday:</h3>
                      <p>{student.birthday}</p>
                    </div>
                    <div className="ContactLeftGender">
                      <h3>Gender:</h3>
                      <p>{student.gender ? student.gender : "Tanlanmagan"}</p>
                    </div>
                  </div>
                  <div className="ContactsRight">
                    <div className="ContactsRightAdress">
                      <h3>Adress:</h3>
                      <p>{student.address ? student.address : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactsRightTelegram">
                      <h3>Telegram profile:</h3>
                      <p>{student.tg_username ? student.tg_username : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactsRightInstagram">
                      <h3>Instagram profile:</h3>
                      <p>{student.insta_username ? student.insta_username : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactsRightEmail">
                      <h3>E-mail:</h3>
                      <p>{student.email ? student.email : "Tanlanmagan"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="LeadInfo">
                <div className="ContactsRightEdit" onClick={handleEditInfo}>
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
                      <p>
                        {student.grouppa && student.grouppa.course && student.grouppa.course.name
                          ? `${student.grouppa.course.name}`
                          : "Tanlanmagan"}
                        :
                        {student.grouppa && student.grouppa.course && student.grouppa.course.daraja
                          ? `${student.grouppa.course.daraja.map(item => item.name).join(', ')}`
                          : "Tanlanmagan"}
                      </p>
                    </div>

                    <div className="ContactLeftSecondary">
                      <h3>Lesson type:</h3>
                      <p>{student.lesson_type ? student.lesson_type : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactLeftBirthday">
                      <h3>Teacher:</h3>
                      <p>
                        {student.grouppa && student.grouppa.teacher_fk_user
                          ? `${student.grouppa.teacher_fk_user.first_name ? student.grouppa.teacher_fk_user.first_name : "Tanlanmagan"} ${student.grouppa.teacher_fk_user.last_name ? student.grouppa.teacher_fk_user.last_name : "Tanlanmagan"}`
                          : "Tanlanmagan"}
                      </p>
                    </div>

                    <div className="ContactLeftGender">
                      <h3>Lesson time:</h3>
                      <p>{student.lesson_time ? student.lesson_time : "Tanlanmagan"}</p>
                    </div>
                  </div>
                  <div className="ContactsRight">
                    <div className="ContactsRightAdress">
                      <h3>Added date:</h3>
                      <p>{student.date ? student.date : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactsRightTelegram">
                      <h3>Changed date:</h3>
                      <p>{student.change_date ? student.change_date : "Tanlanmagan"}</p>

                    </div>
                    <div className="ContactsRightInstagram">
                      <h3>Study dates:</h3>
                      <p>{student.study_date ? student.study_date : "Tanlanmagan"}</p>
                    </div>
                    <div className="ContactsRightEmail">
                      <h3>Advertising source:</h3>
                      <p>{student.source ? student.source : "Tanlanmagan"}</p>
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
                          <span onClick={() => handleDropdownToggle(index)}>
                            ...
                          </span>
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
                  <div className="PayContant">
                    {payBoxes.map((payBox, index) => (
                      <div key={index}>
                        <div
                          className={`PayBox ${dropdownVisible[index] ? "PayBoxActive" : ""
                            }`}
                          onClick={() => toggleDropdown(index)}
                        >
                          <div className="Transaction">
                            {payBox.transaction}
                            <p>{payBox.id}</p>
                          </div>
                          <div className="Abount">
                            <p>{payBox.amount}</p>
                          </div>
                          <div className="TypeP">
                            <p>{payBox.type}</p>
                          </div>
                          <div className="Cource">
                            <p>{payBox.course}</p>
                          </div>
                          <div className="DateP">
                            <p>{payBox.date}</p>
                            <span>
                              <FaChevronDown />
                            </span>
                          </div>
                        </div>
                        {dropdownVisible[index] && (
                          <div className="DropdownContent">
                            <div className="DropduwnUp">
                              <h4>Transaction’s comment:</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged.{" "}
                              </p>
                            </div>
                            <div className="DropduwnDuwn">
                              <div className="Duwnright">
                                <button>
                                  <span>
                                    <TbEdit />
                                  </span>
                                  <p>Edit</p>
                                </button>
                                <button>
                                  <span>
                                    <RiDeleteBin6Line />
                                  </span>
                                  <p>Delete</p>
                                </button>
                                <button>
                                  <span>
                                    <FiPrinter />
                                  </span>
                                  <p>Print check</p>
                                </button>
                              </div>
                              <div className="DuwnLeft">
                                <div className="time">
                                  <p>16:33:05 18.05.2024</p>
                                </div>
                                <div className="DuwnRight">
                                  <span>
                                    <PiCheckCircleBold />
                                  </span>
                                  <p>Successful</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Lesson & homework":
        return (
          <div className="Lessonhomework">
            <div className="LessonhomeworkGlavContent">
              <div className="LessonhomeworkGlavContentLeft">
                <div className="LessonhomeworkGlavContentLeftUp">
                  <div className="LessonhomeworkGlavContentLeftUpNav">
                    <div className="NavTitle">
                      <p>Profile</p>
                    </div>
                    <div className="NavPoints">
                      <div className="points-box">
                        <span>
                          <img src={Starts} alt="" />
                        </span>
                        <p>{student.points} points</p>
                      </div>
                      <div className={`points-active ${student.status}Status`}>
                        <p >{student.status.charAt(0).toUpperCase() + student.status.slice(1).toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="LessonhomeworkGlavContentLeftUpProfile">
                    <div className="imgProfile">
                      {student.image ? (
                        <img src={student.image} alt="User Avatar" style={{ borderRadius: "14px" }} />
                      ) : (
                        <div style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "14px",
                          backgroundColor: "#005EEB",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Bold",
                          color: "#FFFFFF"
                        }}>
                          {student.name ? student.name.charAt(0).toUpperCase() : "?"}
                        </div>
                      )}
                    </div>
                    <div className="textProfile">
                      <h2>{student.name} {student.last_name}</h2>
                      <p>ID: 0989736</p>
                    </div>
                  </div>
                  <div className="InGroup">
                    <div className="InGroupLeft">
                      <h2>2</h2>
                      <p>Group lessons</p>
                    </div>
                    <div className="InGroupRight">
                      <h2>2</h2>
                      <p>Individual lessons</p>
                    </div>
                  </div>
                </div>
                <div className="LessonhomeworkGlavContentLeftDown">
                  <div className="TitleSearchLessonHomework">
                    <h2>Courses</h2>
                    <p>added to system 02.05.2024</p>
                  </div>
                  <div className="SearchLessonHomework">
                    <label className={isActive ? "active" : ""}>
                      <span>
                        <ImSearch />
                      </span>
                      <input
                        type="text"
                        placeholder="Search courses"
                        onFocus={() => setIsActive(true)} // Handle focus
                        onBlur={() => setIsActive(false)} // Handle blur
                      />
                    </label>
                  </div>
                  <div className="SearchLessonHomeworkContant">
                    {filteredCourses.map((course) => {
                      const classNames = `SearchLessonHomeworkContantBox ${selectedCourseIds.includes(course.id) ? "active" : ""
                        } ${course.status === "Finished" ? "finished" : ""}`;

                      return (
                        <div
                          className={classNames}
                          key={course.id}
                          onClick={() => handleCourseClick(course.id)}
                        >
                          <div className="ActiveZZ">
                            <div className="points-active">
                              <p>{course.status}</p>
                            </div>
                          </div>
                          <div className="NuberZZ">
                            <p>{course.number}</p>
                          </div>
                          <div className="NameZZ">
                            <h2>{course.name}</h2>
                            <p>{course.description}</p>
                          </div>
                          <div className="pointsZZ">
                            <span>
                              <img src={Starts} alt="Stars" />
                            </span>
                            <p>{course.points} points</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="LessonhomeworkGlavContentRight">
                <div className="LessonhomeworkGlavContentRightTitle">
                  <div className="LessonhomeworkGlavContentRightTitleLeft">
                    <h2>Lessons</h2>
                  </div>
                  <div className="LessonhomeworkGlavContentRightTitleRight">
                    <div className="TeacherBlaBlaInfo">
                      <div>
                        <h2>Teacher:</h2>
                        <p>{student.grouppa.teacher_fk_user.first_name ? student.grouppa.teacher_fk_user.first_name : "Tanlanmagan"} {student.grouppa.teacher_fk_user.last_name ? student.grouppa.teacher_fk_user.last_name : "Tanlanmagan"}</p>
                      </div>
                      <div>
                        <h2>Lessons:</h2>
                        <p>{teacherData.lessonCount}</p>
                      </div>
                      <div>
                        <h2>Avareage:</h2>
                        <p>{teacherData.average}</p>
                      </div>
                      <div>
                        <h2>All points:</h2>
                        <p>{teacherData.totalPoints}</p>
                      </div>
                    </div>
                    <div className="TeacherBlaBlaSearch">
                      <label
                        className={isLabelActive ? "active" : ""}
                        onClick={handleLabelClick} // Handle click on label
                      >
                        <span>
                          <ImSearch />
                        </span>
                        <input
                          type="text"
                          placeholder="Search Lesson"
                          value={lessonSearchTerm}
                          onChange={(e) => setLessonSearchTerm(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="LessonhomeworkGlavContentRightContant">
                  {filteredLessons.map((lesson) => (
                    <div
                      key={lesson.num}
                      className="LessonhomeworkGlavContentRightContantBox"
                    >
                      <div className="LessonhomeworkGlavContentRightContantBoxLeft">
                        <div className="NumSS">
                          <p>{lesson.num}</p>
                        </div>
                        <div className="LessonSS">
                          <p>{lesson.title}</p>
                        </div>
                      </div>
                      <div className="LessonhomeworkGlavContentRightContantBoxRight">
                        <div className="DataSS">
                          <p>{lesson.date}</p>
                        </div>
                        <div className="ContantStatusSS">
                          <div
                            className="StatusSS"
                            style={getStatusBackground(lesson.status)}
                          >
                            <span>{getStatusIcon(lesson.status)}</span>
                            <p>{lesson.status}</p>
                          </div>
                        </div>
                        <div className="PoinrsSS">
                          <span>
                            <HiStar />
                          </span>
                          <p>{lesson.points} points</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "Finance":
        return (
          <div className="stPage_Finance">
            {isAllRud && <ModalFinance onClose={toggleCloseAddRud} />}
            {isAddPaymnt && <ModalPayment onClose={CloseModalAddPaymn} />}
            {isAddExpence && <ModalExpence onClose={CloseModalExpence} />}
            <div className="stPage_FinanceUP">
              <div className="stPage_FinanceBoxOne">
                <div className="stPage_FinanceBoxOneTitle">
                  <p>Profile</p>
                  <span className={`${student.status}Status`}>{student.status.charAt(0).toUpperCase() + student.status.slice(1).toLowerCase()}</span>
                </div>
                <div className="stPage_FinanceBoxOnetext">
                  <div>
                    <h2>Full name: </h2>
                    <p> {student.name} {student.last_name}</p>
                  </div>
                  <div>
                    <h2>ID:</h2>
                    <p>0989736</p>
                  </div>
                  <div>
                    <h2>Group courses:</h2>
                    <p>2</p>
                  </div>
                  <div>
                    <h2> Individual courses: </h2>
                    <p>2</p>
                  </div>
                  <div>
                    <h2>Monthly payment:</h2>
                    <p> 1 210 000 so’m</p>
                  </div>
                  <div>
                    <h2>Current balance:</h2>
                    <p style={{ color: "#F7685B" }}>- 210 000 so’m</p>
                  </div>
                </div>
              </div>
              <div className="stPage_FinanceBoxTwo">
                <div className="stPage_FinanceBoxTwoLeftTitle">
                  <p>Total payment for courses</p>
                </div>
                <div className="stPage_FinanceBoxTwoContant">
                  <div className="stPage_FinanceBoxTwoLeft">
                    <div className="stPage_FinanceBoxTwoLeftContantBoximg">
                      <img src={Chsrts} alt="" />
                    </div>
                  </div>
                  <div className="stPage_FinanceBoxTwoRight">
                    <div className="stPage_FinanceBoxTwoRightUp">
                      <div>
                        <h2>Must be paid:</h2>
                        <p>1 168 000 so’m</p>
                      </div>
                      <div>
                        <span style={{ background: "#005EEB" }}></span>
                        <h2>Has been paid: </h2>
                        <p>218 000 so’m</p>
                      </div>
                      <div>
                        <span style={{ background: "#C2CFE0" }}></span>
                        <h2>Residual:</h2>
                        <p>950 000 so’m</p>
                      </div>
                    </div>
                    <div className="stPage_FinanceBoxTwoRightDown">
                      <div>
                        <h2>Lessons held:</h2>
                        <p>18/120</p>
                      </div>
                      <div>
                        <h2>Remaining months:</h2>
                        <p>6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stPage_FinanceBoxThree">
                <div className="stPage_FinanceBoxThreeOne">
                  <div className="stPage_FinanceBoxThreeOneTitle">
                    <p>All monthly payment</p>
                    <span>
                      <img src={conini} alt="" />
                    </span>
                  </div>
                  <div className="stPage_FinanceBoxThreeOneContant">
                    <h2>
                      950 000 <span>so’m</span>
                    </h2>
                  </div>
                </div>
                <div className="stPage_FinanceBoxThreeOne">
                  <div className="stPage_FinanceBoxThreeOneTitle">
                    <p>Every monthly discount</p>
                    <span>
                      <img src={calendar} alt="" />
                    </span>
                  </div>
                  <div className="stPage_FinanceBoxThreeOneContant">
                    <h2>
                      32 000 <span>so’m</span>
                    </h2>
                  </div>
                </div>
                <div className="stPage_FinanceBoxThreeOne">
                  <div className="stPage_FinanceBoxThreeOneTitle">
                    <p>Has been paid</p>
                    <span>
                      <img src={checkedd} alt="" />
                    </span>
                  </div>
                  <div className="stPage_FinanceBoxThreeOneContant">
                    <h2>
                      638 000 <span>so’m</span>
                    </h2>
                  </div>
                </div>
                <div className="stPage_FinanceBoxThreeOne">
                  <div className="stPage_FinanceBoxThreeOneTitle">
                    <p>All discounts received</p>
                    <span>
                      <img src={proc} alt="" />
                    </span>
                  </div>
                  <div className="stPage_FinanceBoxThreeOneContant">
                    <h2>
                      190 000 <span>so’m</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <FinanceDownTable
              activeRow={activeRow}
              setActiveRow={setActiveRow}
              renderDropdownContent={renderDropdownContent}
              toggleDropdownSecond={toggleDropdownSecond}
              getTransactionIconAndStyle={getTransactionIconAndStyle}
            />
          </div>
        );
      case "History":
        return (
          <div className="History-Stud">
            <div className="History-Stud-Left">
              <div className="History-Stud-Left-Top">
                <div className="History-Stud-Left-Top-Title">
                  <p>Profile</p>
                  <span className={`${student.status}Status`}>
                    <p>{student.status.charAt(0).toUpperCase() + student.status.slice(1).toLowerCase()}</p>
                  </span>
                </div>
                <div className="History-Stud-Left-Top-Profile">
                  <div className="History-Stud-Left-Top-Profile-Left">
                    {student.image ? (
                      <img src={student.image} alt="User Avatar" style={{ borderRadius: "14px" }} />
                    ) : (
                      <div style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "14px",
                        backgroundColor: "#005EEB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "700",
                        fontFamily: "Bold",
                        color: "#FFFFFF"
                      }}>
                        {student.name ? student.name.charAt(0).toUpperCase() : "?"}
                      </div>
                    )}
                  </div>
                  <div className="History-Stud-Left-Top-Profile-Right">
                    <h2>{student.name} {student.last_name}</h2>
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
                    <span>
                      <Icons.search />
                    </span>
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
        );
      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div className="StudentPage">
      <div className="StudentsNav">
        <div className="LeftStudNav">
          <div className="ButtonBack">
            <Link to={"/clients"}>
              <button>
                <IoChevronBack />
              </button>
            </Link>
          </div>
          <div className="ButtonNavigationStud">
            <button
              id="Profile"
              className={activeSection === "Profile" ? "active" : ""}
              onClick={() => setActiveSection("Profile")}
            >
              Profile
            </button>
            <button
              id="Lesson"
              className={activeSection === "Lesson & homework" ? "active" : ""}
              onClick={() => setActiveSection("Lesson & homework")}
            >
              Lesson & Homework
            </button>
            <button
              id="Finance"
              className={activeSection === "Finance" ? "active" : ""}
              onClick={() => setActiveSection("Finance")}
            >
              Finance
            </button>
            <button
              id="History"
              className={activeSection === "History" ? "active" : ""}
              onClick={() => setActiveSection("History")}
            >
              History
            </button>
          </div>
        </div>
        <div className="RightStudNav">
          {activeSection === "Profile" && (
            <>
              <button id="Add" onClick={OpenModalAddG}>
                <span>
                  <TbUserPlus />
                </span>
                <p>Add to Group</p>
              </button>
              <button id="Individual" onClick={OpenInLesson}>
                <span>
                  <LuPlusSquare />
                </span>
                <p>Individual Lesson</p>
              </button>
              <button id="dot" onClick={OpenTripleDot}>
                <HiOutlineDotsHorizontal />
              </button>
            </>
          )}
          {activeSection === "Lesson & homework" && (
            <>
              <Link to={"/PersonalUser"}>
                <button id="AddLesson">
                  <span>
                    <img src={OpenTeacher} alt="" />
                  </span>
                  <p>Open teacher’s page</p>
                </button>
              </Link>
              <button id="Homework">
                <span>
                  <img src={Share} alt="" />
                </span>
                Go to course page
              </button>
            </>
          )}
          {activeSection === "Finance" && (
            <>
              <button id="Refund" onClick={toggleAddRud}>
                <span>
                  <img src={Refund} alt="" />
                </span>
                <p>Refund</p>
              </button>
              <button id="AddExempl" onClick={OpenModalExpence}>
                <span>
                  {" "}
                  <img src={addExpence} alt="" />
                </span>
                <p>Add expense</p>
              </button>
              <button onClick={OpenModalAddPaymn} id="AddPayment">
                <span>
                  {" "}
                  <img src={whitecoin} alt="" />
                </span>
                <p>Add payment</p>
              </button>
            </>
          )}
          {activeSection === "History" && <></>}
          {isArchiveDel && (
            <div className="DotDrop">
              <button onClick={OpenModalArchive}>
                <span>
                  <img src={Archive} alt="" />
                </span>
                <p>Archive</p>
              </button>
              <button onClick={OpenModalDeleteModArch}>
                <span>
                  <img src={Delete} alt="" />
                </span>
                <p>Delete</p>
              </button>
            </div>
          )}
        </div>
      </div>
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
      <div className="StudentPageHome">{renderContent()}</div>
    </div>
  );
}
