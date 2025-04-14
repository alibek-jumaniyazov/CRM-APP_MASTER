import "./Clients.css";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { HiChevronUpDown } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiChevronDown, FiChevronUp, FiUser, FiX } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { TbUserUp } from "react-icons/tb";
import { IoCloseOutline, IoSearchSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BiGroup } from "react-icons/bi";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { Checkbox, DatePicker, Input, Radio, Select } from "antd";
// import DatePicker from "react-datepicker";
import AllStundentTable from "../../components/ClientComponents/AllStundentTable";
import CustomerBaseTable from "../../components/ClientComponents/CustomerBaseTable";
import ArchiveClientTable from "../../components/ClientComponents/ArchiveClientTable";
import NewCustomerModal from "../../components/ClientComponents/ClientModals/NewCustomerModal";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import NewLeadModal from "../leads/NewLeadModal";

export default function Client() {
  const [clients, setClients] = useState([
    {
      number: 1,
      id: "000001",
      name: "Alisher Atajanov",
      age: "28 y.o",
      dob: "28.02.1996",
      points: 160,
      lesson: "Group 45",
      ptxt: "points",
      lessonDetail: "General English: Intermediate",
      status: "Active",
      studyStart: "02.03.2024-",
      studyEnd: "03.09.2024",
      phoneNumber: "+998 99 966 73 63",
      balance: "- 180 000 so’m",
      lessonDglav: "General English",
      lessonDmain: "Intermediate level",
      sourcew: "Website",
      sourceo: "Outdoor advertising",
    },
  ]);
  const [radioValue, setRadio] = useState(1);
  const [openMenuStatus, setOpenMenuStatus] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [searchblaInput, setSearblachInput] = useState('');
  const [coursePersnoal, SetCoursePersnoal] = useState([]);
  const userId = localStorage.getItem('userId');

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
  const handleChangeLead = (key, value) => {
    setLeadModal((prev) => ({ ...prev, [key]: value }));
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

  const [activeRows, setActiveRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [view, setView] = useState("All Students");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [customerModal, setCustomerModal] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isRange, setIsRange] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);

  const [roomSelect, SetRoomSelect] = useState([]);
  const getRoom = async () => {
    try {
      const { data } = await axios.get("http://192.168.192.254:8000/api/v1/room/", {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      SetRoomSelect(data.results);
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


  useEffect(() => {
    setSelectAll(activeRows.length === clients.length);
  }, [activeRows, clients.length]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleOpenModalCustomer() {
    setCustomerModal(!customerModal);
  }

  const toggleFilters = () => {
    setIsFiltersActive(!isFiltersActive); // Переключает true/false
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setShowDatePicker((prev) => !prev);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleResetDates = (event) => {
    event.stopPropagation();
    setStartDate(null);
    setEndDate(null);
  };

  const handleToggle = () => {
    setIsRange(!isRange);
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const handleSingleDateChange = (date) => {
    setTempStartDate(date);
    setTempEndDate(null);
  };

  const [studentMenuStatus, setStudentMenuStatus] = useState(0);
  const [selectType, setSelectType] = useState(1);
  const [isOpenSearchData, setIsOpenSearchData] = useState(false);
  const [isOpenSelectData, setIsOpenSelectData] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [ActiveGroups, setActiveGroups] = useState([])
  const [ArchiveGroups, setArchiveGroups] = useState([])
  const [CustomerGroups, setCustomerGroups] = useState([])
  const [loadingActive, setLoadingActive] = useState(false)
  const [loadingCustomer, setLoadingCustomer] = useState(false)
  const [loadingArchive, setLoadingArchive] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [selectedSubjectOption, setSelectedSubjectOption] = useState(null);
  const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
  const [selectedLessonOption, setSelectedLessonOption] = useState(null);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedStatusOption, setSelectedStatusOption] = useState(null);
  const [isBalanceDropdownOpen, setIsBalanceDropdownOpen] = useState(false);
  const [selectedBalanceOption, setSelectedBalanceOption] = useState(null);
  const [isPointsDropdownOpen, setIsPointsDropdownOpen] = useState(false);
  const [selectedPointsOption, setSelectedPointsOption] = useState(null);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [selectedGenderOption, setSelectedGenderOption] = useState(null);
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
  const [selectedAgeOption, setSelectedAgeOption] = useState(null);
  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false);
  const [selectedSourceOption, setSelectedSourceOption] = useState(null);

  const toggleSourceDropdown = () => {
    setIsSourceDropdownOpen(!isSourceDropdownOpen);
  };

  const selectSourceOption = (option) => {
    setSelectedSourceOption(option);
    setIsSourceDropdownOpen(false);
  };

  const clearSourceSelection = () => {
    setSelectedSourceOption(null);
  };

  const toggleAgeDropdown = () => {
    setIsAgeDropdownOpen(!isAgeDropdownOpen);
  };

  const selectAgeOption = (option) => {
    setSelectedAgeOption(option);
    setIsAgeDropdownOpen(false);
  };

  const clearAgeSelection = () => {
    setSelectedAgeOption(null);
  };

  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };

  const selectGenderOption = (option) => {
    setSelectedGenderOption(option);
    setIsGenderDropdownOpen(false);
  };

  const clearGenderSelection = () => {
    setSelectedGenderOption(null);
  };

  const handleApply = () => {
    if (fromValue.trim() === '' || toValue.trim() === '') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  const handleCancel = () => {
    setFromValue('');
    setToValue('');
    setShowMessage(false);
  };

  const togglePointsDropdown = () => {
    setIsPointsDropdownOpen(!isPointsDropdownOpen);
  };

  const selectPointsOption = (option) => {
    setSelectedPointsOption(option);
    setIsPointsDropdownOpen(false);
  };

  const clearPointsSelection = () => {
    setSelectedPointsOption(null);
  };

  const toggleBalanceDropdown = () => {
    setIsBalanceDropdownOpen(!isBalanceDropdownOpen);
  };

  const selectBalanceOption = (option) => {
    setSelectedBalanceOption(option);
    setIsBalanceDropdownOpen(false);
  };

  const clearBalanceSelection = () => {
    setSelectedBalanceOption(null);
  };

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const selectStatusOption = (option) => {
    setSelectedStatusOption(option);
    setIsStatusDropdownOpen(false);
  };

  const clearStatusSelection = () => {
    setSelectedStatusOption(null);
  };

  const toggleLessonDropdown = () => {
    setIsLessonDropdownOpen(!isLessonDropdownOpen);
  };

  const selectLessonOption = (option) => {
    setSelectedLessonOption(option);
    setIsLessonDropdownOpen(false);
  };

  const clearLessonSelection = () => {
    setSelectedLessonOption(null);
  };

  const toggleSubjectDropdown = () => {
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
  };

  const selectSubjectOption = (option) => {
    setSelectedSubjectOption(option);
    setIsSubjectDropdownOpen(false);
  };

  const clearSubjectSelection = () => {
    setSelectedSubjectOption(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const clearSelection = () => {
    setSelectedOption(null);
    setIsDropdownOpen(false);
  };
  const handleItemClick = (name) => {
    setInputValue(name);
    setIsOpenSelectData(true);
    setIsOpenSearchData(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const storedToken = localStorage.getItem('token');


  const getActive = async () => {
    setLoadingActive(true)
    try {
      const { data } = await axios.get("http://192.168.192.254:8000/api/v1/student/", {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setActiveGroups(data.results);
      setLoadingActive(false)
    } catch (err) {
      console.error(err);
    }
  };

  const getCustomer = async () => {
    setLoadingCustomer(true)
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/lead/leads/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setCustomerGroups(data);
      setLoadingCustomer(false)
      console.log(data);

    } catch (err) {
      console.error(err);
    }
  };

  const getArchive = async () => {
    setLoadingArchive(true)
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/client/arxive/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setArchiveGroups(data);
      setLoadingArchive(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getActive();
    getArchive()
    getCustomer()
  }, []);



  const renderContent = () => {
    return (
      <Routes>
        <Route index element={<Navigate to="all-students" />} />

        {view === "All Students" && (
          <Route
            path="all-students"
            element={
              <AllStundentTable
                clients={ActiveGroups}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                activeRows={activeRows}
                setActiveRows={setActiveRows}
                loadingActive={loadingActive}
                setLoadingActive={setLoadingActive}
                getActive={getActive}
                getArchive={getArchive}
              />
            }
          />
        )}

        {view === "Customer Base" && (
          <Route
            path="customer-base"
            element={
              <CustomerBaseTable
                clients={CustomerGroups}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                activeRows={activeRows}
                setActiveRows={setActiveRows}
                loadingCustomer={loadingCustomer}
                getCustomer={getCustomer}
              />
            }
          />
        )}

        {view === "Archive" && (
          <Route
            path="archive"
            element={
              <ArchiveClientTable
                clients={ArchiveGroups}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                activeRows={activeRows}
                setActiveRows={setActiveRows}
                loadingArchive={loadingArchive}
                setLoadingArchive={setLoadingArchive}
                getActive={getActive}
                getArchive={getArchive}
              />
            }
          />
        )}
      </Routes>
    );
  };


  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div
        className="modal-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="ModalNewStud"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "510px",
            height: "auto",
            boxShadow: "0px 0px 34.9px 8px #00000038",
          }}
        >
          <button onClick={onClose} className="closeNewStud">
            <IoCloseOutline />
          </button>
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="Client"
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {customerModal && (
        <>
          {/* Overlay */}
          <div
            className="modal-overlay"
            onClick={() => setCustomerModal(false)}
          ></div>

          {/* Modal */}
          <NewLeadModal customerModal={customerModal} setNewLeadModal={setCustomerModal} getLead={getCustomer} />
        </>
      )}

      <div className="ClientsButtons">
        <div className="CourseLevelHeaderToggles">
          <Link
            to="all-students"
            id="AllStud"
            onClick={() => setView("All Students")}
            className={view == "All Students" ? "active" : ""}
          >
            All Students
          </Link>
          <Link
            to="customer-base"
            id="CustBase"
            onClick={() => setView("Customer Base")}
            className={view == "Customer Base" ? "active" : ""}
          >
            Customer Base
          </Link>
          <Link
            to="archive"
            id="ArchiveStud"
            onClick={() => setView("Archive")}
            className={view == "Archive" ? "active" : ""}
          >
            Archive
          </Link>
        </div>
        <div
          className="ButtonFilters"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.390625vw",
          }}
        >
          <button
            className="search"
            style={{
              width: "32px",
              height: "32px",
              border: "1px solid #005EEB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              background: "none",
              color: "#005EEB",
              cursor: "pointer",
            }}
          >
            <GoSearch />
          </button>
          {activeRows.length !== 0 && (
            <button
              className="filter"
              style={{
                width: "128px",
                height: "32px",
                background: "none",
                border: "1px solid #005EEB",
                backgroundColor: "#005EEB",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: 500,
                color: "#FFFFFF",
                gap: 5,
                cursor: "pointer",
                outline: "none",
                fontFamily: 'Medium !important',
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: 'Medium !important',
                }}
              >
                <PiTelegramLogo />
              </span>{" "}
              Send sms
            </button>
          )}
          {activeRows.length !== 0 && (
            <button
              className="filter"
              style={{
                width: "128px",
                height: "32px",
                background: "none",
                border: "1px solid #F7685B",
                backgroundColor: "#F7685B",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: 'Medium !important',
                gap: 5,
                cursor: "pointer",
                outline: "none",
              }}
            //   onClick={handleCancelActiveRows}
            >
              <span
                style={{
                  fontSize: "16px",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: 'Medium !important',
                }}
              >
                <MdOutlineCancel />
              </span>{" "}
              Cancel
            </button>
          )}
          <button
            className="filter"
            style={{
              width: "128px",
              height: "32px",
              background: "none",
              border: "1px solid #005EEB",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: 500,
              color: "#005EEB",
              fontFamily: 'Medium !important',
              gap: 0,
              cursor: "pointer",
              outline: "none",
            }}
            onClick={toggleFilters}
          >
            <span
              style={{
                fontSize: "16px",
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiFilter />
            </span>{" "}
            {isFiltersActive ? "Close Filters" : "Filters"}
          </button>
          {activeRows.length == 0 && view == "All Students" ? (
            <button className="customer" onClick={handleOpenModal}>
              <span
                style={{
                  display: "flex",
                  padding: 0,
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                }}
              >
                <BiGroup />
              </span>
              New Student

            </button>


          ) : activeRows.length == 0 && view === "Customer Base" ? (
            <button className="customer" onClick={handleOpenModalCustomer}>
              <span
                style={{
                  display: "flex",
                  padding: 0,
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                }}
              >
                +
              </span>
              New customer
            </button>
          ) : null}
          {activeRows.length !== 0 && (
            <button
              className="search"
              style={{
                position: "relative",
                width: "32px",
                height: "32px",
                border: "1px solid #005EEB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                background: "none",
                color: "#005EEB",
                cursor: "pointer",
              }}
            //   onClick={() => setOpenArchive((state) => !state)}
            >
              <HiDotsHorizontal />
              {/* {openArchive && (
                <div className="archive" onClick={() => setGroupArchive(true)}>
                  <span style={{ fontSize: 20, marginTop: 5 }}>
                    <RiInboxArchiveLine />
                  </span>
                  Archive
                </div>
              )} */}
            </button>
          )}
        </div>
      </div>
      {view == "All Students" && isFiltersActive && (
        <div
          className="FiltersContent"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              onClick={selectedOption ? clearSelection : toggleDropdown}
              style={{
                width: "105px",
                height: "32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <p>{selectedOption || "Teacher"}</p>
              <span>
                {selectedOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isDropdownOpen && !selectedOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectOption("Mr. Ali")}>Mr. Ali</p>
                <p onClick={() => selectOption("Mr. John")}>Mr. John</p>
                <p onClick={() => selectOption("Ms. Hadicha")}>Ms. Hadicha</p>
                <p onClick={() => selectOption("Mr. Temur")}>Mr. Temur</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
            >
              <p>{selectedSubjectOption || "Subject"}</p>
              <span>
                {selectedSubjectOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isSubjectDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isSubjectDropdownOpen && !selectedSubjectOption && (
              <div className="SubjectDropContant">
                <p className="SubGenEng" onClick={() => selectSubjectOption("Subject")}>General english</p>
                <p onClick={() => selectSubjectOption("Begginer")}> -Beginner</p>
                <p onClick={() => selectSubjectOption("Elementary")}> -Elementary</p>
                <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                <p onClick={() => selectSubjectOption("Science")}>Science</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "133px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedLessonOption ? clearLessonSelection : toggleLessonDropdown}
            >
              <p>{selectedLessonOption || "Lesson type"}</p>
              <span>
                {selectedLessonOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isLessonDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isLessonDropdownOpen && !selectedLessonOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectLessonOption("Group")}>Group</p>
                <p onClick={() => selectLessonOption("Individual")}>Individual</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedStatusOption ? clearStatusSelection : toggleStatusDropdown}
            >
              <p>{selectedStatusOption || "Status"}</p>
              <span>
                {selectedStatusOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isStatusDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isStatusDropdownOpen && !selectedStatusOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectStatusOption("Active")}><span>Active</span></p>
                <p onClick={() => selectStatusOption("Frozen")}><span>Frozen</span></p>
                <p onClick={() => selectStatusOption("Stopped")}><span>Stopped</span></p>
                <p onClick={() => selectStatusOption("Finished")}><span>Finished</span></p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "131px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedBalanceOption ? clearBalanceSelection : toggleBalanceDropdown}
            >
              <p>{selectedBalanceOption || "Balance type"}</p>
              <span>
                {selectedBalanceOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isBalanceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isBalanceDropdownOpen && !selectedBalanceOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectBalanceOption("Debtop")}>Debtop</p>
                <p onClick={() => selectBalanceOption("No debt")}>No debt</p>
                <p onClick={() => selectBalanceOption("Positive account")}>Positive account</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv ">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedPointsOption ? clearPointsSelection : togglePointsDropdown}
            >
              <p>{selectedPointsOption || "Points"}</p>
              <span>
                {selectedPointsOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isPointsDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isPointsDropdownOpen && !selectedPointsOption && (
              <div className="PointsDivDrop">
                <div className="PointsDivDropTitle">
                  <p>Points range</p>
                  <p>Please input points range</p>
                  {showMessage && (
                    <p>Please enter all required information</p>
                  )}
                </div>
                <div className="PointsDivDropInpBox">
                  <input
                    type="number"
                    placeholder="From"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="To"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                  />
                </div>
                <div className="PointsDivDropButtonBox">
                  <button onClick={togglePointsDropdown}>Cancel</button>
                  <button onClick={handleApply}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={handleButtonClick}>
              <p>
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : startDate
                    ? formatDate(startDate)
                    : "Date"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={handleResetDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {showDatePicker && (
              <div
                className="datepicker-container XuyLontainer"
                style={{ width: isRange ? '545px' : '307px' }}
              >
                <div className="DataPickerTitle">
                  <h2>Date range</h2>
                  <p>Please select date range</p>
                </div>
                <div className="toggle-switch">
                  <label className="sukaebaniyLabel">
                    <input
                      type="checkbox"
                      checked={isRange}
                      onChange={handleToggle}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePicker
                      selected={tempStartDate}
                      onChange={handleSingleDateChange}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePicker
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePicker
                        selected={tempEndDate}
                        onChange={(date) => setTempEndDate(date)}
                        inline
                        placeholderText="End Date"
                        minDate={tempStartDate}
                      />
                    </div>
                  </div>
                )}
                <div className="button-group-lead-filter">
                  <button className="cancel-button-lead-filter" onClick={handleButtonClick}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedGenderOption ? clearGenderSelection : toggleGenderDropdown}
            >
              <p>{selectedGenderOption || "Gender"}</p>
              <span>
                {selectedGenderOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isGenderDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isGenderDropdownOpen && !selectedGenderOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectGenderOption("Male")}>Male</p>
                <p onClick={() => selectGenderOption("Female")}>Female</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
            >
              <p>{selectedAgeOption || "Age"}</p>
              <span>
                {selectedAgeOption ? (
                  <span className="AgeX"><CgCloseO /></span>
                ) : (
                  isAgeDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isAgeDropdownOpen && !selectedAgeOption && (
              <div className="PointsDivDrop PointsDivDroLeft">
                <div className="PointsDivDropTitle">
                  <p>Age range</p>
                  <p>Please input age range</p>
                  {showMessage && (
                    <p>Please enter all required information</p>
                  )}
                </div>
                <div className="PointsDivDropInpBox">
                  <input
                    type="number"
                    placeholder="From"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="To"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                  />
                </div>
                <div className="PointsDivDropinputcheck">
                  <input type="checkbox" />
                  <p>Including those without age information</p>
                </div>
                <div className="PointsDivDropButtonBox">
                  <button onClick={toggleAgeDropdown}>Cancel</button>
                  <button onClick={handleApply}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <button id="reset">
            <VscDebugRestart />
          </button>
        </div>
      )}
      {view === "Customer Base" && isFiltersActive && (
        <div
          className="FiltersContent"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            className="FiltersContent"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "0 20px",
              marginBottom: "20px",
            }}
          >

            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
              >
                <p>{selectedSubjectOption || "Subject"}</p>
                <span>
                  {selectedSubjectOption ? (
                    <span className="TeacherX"><CgCloseO /></span>
                  ) : (
                    isSubjectDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isSubjectDropdownOpen && !selectedSubjectOption && (
                <div className="SubjectDropContant">
                  <p className="SubGenEng" onClick={() => selectSubjectOption("Subject")}>General english</p>
                  <p onClick={() => selectSubjectOption("Begginer")}> -Beginner</p>
                  <p onClick={() => selectSubjectOption("Elementary")}> -Elementary</p>
                  <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                  <p onClick={() => selectSubjectOption("Science")}>Science</p>
                </div>
              )}
            </div>
            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "133px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedLessonOption ? clearLessonSelection : toggleLessonDropdown}
              >
                <p>{selectedLessonOption || "Lesson type"}</p>
                <span>
                  {selectedLessonOption ? (
                    <span className="TeacherX"><CgCloseO /></span>
                  ) : (
                    isLessonDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isLessonDropdownOpen && !selectedLessonOption && (
                <div className="SubjectDropContant">
                  <p onClick={() => selectLessonOption("Group")}>Group</p>
                  <p onClick={() => selectLessonOption("Individual")}>Individual</p>
                </div>
              )}
            </div>
            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedStatusOption ? clearStatusSelection : toggleStatusDropdown}
              >
                <p>{selectedStatusOption || "Status"}</p>
                <span>
                  {selectedStatusOption ? (
                    <span className="TeacherX"><CgCloseO /></span>
                  ) : (
                    isStatusDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isStatusDropdownOpen && !selectedStatusOption && (
                <div className="SubjectDropContant TYUIOP">
                  <p onClick={() => selectStatusOption("New lead")}><span>New lead</span></p>
                  <p onClick={() => selectStatusOption("No answer")}><span>No answer</span></p>
                  <p onClick={() => selectStatusOption("Contacted")}><span>Contacted</span></p>
                  <p onClick={() => selectStatusOption("Trial lesson")}><span>Trial lesson</span></p>
                  <p onClick={() => selectStatusOption("Is expected")}><span>Is expected</span></p>
                  <p onClick={() => selectStatusOption("Summary")}><span>Summary</span></p>
                  <p onClick={() => selectStatusOption("Blocked")}><span>Blocked</span></p>
                </div>
              )}
            </div>
            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedSourceOption ? clearSourceSelection : toggleSourceDropdown}
              >
                <p>{selectedSourceOption || "Source"}</p>
                <span>
                  {selectedSourceOption ? (
                    <span className="SourceX"><CgCloseO /></span>
                  ) : (
                    isSourceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isSourceDropdownOpen && !selectedSourceOption && (
                <div className="SubjectDropContant KotogimYe">
                  <p onClick={() => selectSourceOption("Active")}><span>Web site</span></p>
                  <p onClick={() => selectSourceOption("Outdoor advertising")}><span>Outdoor advertising</span></p>
                  <p onClick={() => selectSourceOption("Social network")}><span>Social network</span></p>
                  <p onClick={() => selectSourceOption("Recommendation")}><span>Recommendation</span></p>
                  <p onClick={() => selectSourceOption("Other")}><span>Other</span></p>
                </div>
              )}
            </div>
            <div className="LeadDateButton_Box">
              <button style={{ width: '139px' }} className="HJK" onClick={handleButtonClick}>
                <p>
                  {startDate && endDate
                    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                    : startDate
                      ? formatDate(startDate)
                      : "Changed date"}
                </p>
                <span>
                  {startDate || endDate ? (
                    <FaTimes onClick={handleResetDates} />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              </button>
              {showDatePicker && (
                <div
                  className="datepicker-container XuyLontainer"
                  style={{ width: isRange ? '545px' : '307px' }}
                >
                  <div className="DataPickerTitle">
                    <h2>Date range</h2>
                    <p>Please select date range</p>
                  </div>
                  <div className="toggle-switch">
                    <label className="sukaebaniyLabel">
                      <input
                        type="checkbox"
                        checked={isRange}
                        onChange={handleToggle}
                      />
                      <p className="datapicker_input_text">Set the period</p>
                    </label>
                  </div>
                  {!isRange ? (
                    <div className="custom-datepicker">
                      <DatePicker
                        selected={tempStartDate}
                        onChange={handleSingleDateChange}
                        inline
                      />
                    </div>
                  ) : (
                    <div className="range-datepickers">
                      <div className="custom-datepicker">
                        <DatePicker
                          selected={tempStartDate}
                          onChange={(date) => setTempStartDate(date)}
                          inline
                          placeholderText="Start Date"
                        />
                      </div>
                      <div className="custom-datepicker">
                        <DatePicker
                          selected={tempEndDate}
                          onChange={(date) => setTempEndDate(date)}
                          inline
                          placeholderText="End Date"
                          minDate={tempStartDate}
                        />
                      </div>
                    </div>
                  )}
                  <div className="button-group-lead-filter">
                    <button className="cancel-button-lead-filter" onClick={handleButtonClick}>
                      Cancel
                    </button>
                    <button className="apply-button-lead-filter" onClick={handleApply}>
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedGenderOption ? clearGenderSelection : toggleGenderDropdown}
              >
                <p>{selectedGenderOption || "Gender"}</p>
                <span>
                  {selectedGenderOption ? (
                    <span className="TeacherX"><CgCloseO /></span>
                  ) : (
                    isGenderDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isGenderDropdownOpen && !selectedGenderOption && (
                <div className="SubjectDropContant">
                  <p onClick={() => selectGenderOption("Male")}>Male</p>
                  <p onClick={() => selectGenderOption("Female")}>Female</p>
                </div>
              )}
            </div>
            <div className="FilderSubjectDiv">
              <button
                className="HJK"
                style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
              >
                <p>{selectedAgeOption || "Age"}</p>
                <span>
                  {selectedAgeOption ? (
                    <span className="AgeX"><CgCloseO /></span>
                  ) : (
                    isAgeDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                  )}
                </span>
              </button>
              {isAgeDropdownOpen && !selectedAgeOption && (
                <div className="PointsDivDrop PointsDivDroLeft">
                  <div className="PointsDivDropTitle">
                    <p>Age range</p>
                    <p>Please input age range</p>
                    {showMessage && (
                      <p>Please enter all required information</p>
                    )}
                  </div>
                  <div className="PointsDivDropInpBox">
                    <input
                      type="number"
                      placeholder="From"
                      value={fromValue}
                      onChange={(e) => setFromValue(e.target.value)}
                    />
                    <span>-</span>
                    <input
                      type="number"
                      placeholder="To"
                      value={toValue}
                      onChange={(e) => setToValue(e.target.value)}
                    />
                  </div>
                  <div className="PointsDivDropinputcheck">
                    <input type="checkbox" />
                    <p>Including those without age information</p>
                  </div>
                  <div className="PointsDivDropButtonBox">
                    <button onClick={toggleAgeDropdown}>Cancel</button>
                    <button onClick={handleApply}>Apply</button>
                  </div>
                </div>
              )}
            </div>
            <button id="reset">
              <VscDebugRestart />
            </button>
          </div>
        </div>
      )}
      {view == "Archive" && isFiltersActive && (
        <div
          className="FiltersContent"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
            >
              <p>{selectedSubjectOption || "Subject"}</p>
              <span>
                {selectedSubjectOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isSubjectDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isSubjectDropdownOpen && !selectedSubjectOption && (
              <div className="SubjectDropContant">
                <p className="SubGenEng" onClick={() => selectSubjectOption("Subject")}>General english</p>
                <p onClick={() => selectSubjectOption("Begginer")}> -Beginner</p>
                <p onClick={() => selectSubjectOption("Elementary")}> -Elementary</p>
                <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                <p onClick={() => selectSubjectOption("Science")}>Science</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "133px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedLessonOption ? clearLessonSelection : toggleLessonDropdown}
            >
              <p>{selectedLessonOption || "Lesson type"}</p>
              <span>
                {selectedLessonOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isLessonDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isLessonDropdownOpen && !selectedLessonOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectLessonOption("Group")}>Group</p>
                <p onClick={() => selectLessonOption("Individual")}>Individual</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "131px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedBalanceOption ? clearBalanceSelection : toggleBalanceDropdown}
            >
              <p>{selectedBalanceOption || "Balance type"}</p>
              <span>
                {selectedBalanceOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isBalanceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isBalanceDropdownOpen && !selectedBalanceOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectBalanceOption("Debtop")}>Debtop</p>
                <p onClick={() => selectBalanceOption("No debt")}>No debt</p>
                <p onClick={() => selectBalanceOption("Positive account")}>Positive account</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv ">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedPointsOption ? clearPointsSelection : togglePointsDropdown}
            >
              <p>{selectedPointsOption || "Points"}</p>
              <span>
                {selectedPointsOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isPointsDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isPointsDropdownOpen && !selectedPointsOption && (
              <div className="PointsDivDrop">
                <div className="PointsDivDropTitle">
                  <p>Points range</p>
                  <p>Please input points range</p>
                  {showMessage && (
                    <p>Please enter all required information</p>
                  )}
                </div>
                <div className="PointsDivDropInpBox">
                  <input
                    type="number"
                    placeholder="From"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="To"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                  />
                </div>
                <div className="PointsDivDropButtonBox">
                  <button onClick={togglePointsDropdown}>Cancel</button>
                  <button onClick={handleApply}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={handleButtonClick}>
              <p>
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : startDate
                    ? formatDate(startDate)
                    : "Date"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={handleResetDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {showDatePicker && (
              <div
                className="datepicker-container XuyLontainer"
                style={{ width: isRange ? '545px' : '307px' }}
              >
                <div className="DataPickerTitle">
                  <h2>Date range</h2>
                  <p>Please select date range</p>
                </div>
                <div className="toggle-switch">
                  <label className="sukaebaniyLabel">
                    <input
                      type="checkbox"
                      checked={isRange}
                      onChange={handleToggle}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePicker
                      selected={tempStartDate}
                      onChange={handleSingleDateChange}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePicker
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePicker
                        selected={tempEndDate}
                        onChange={(date) => setTempEndDate(date)}
                        inline
                        placeholderText="End Date"
                        minDate={tempStartDate}
                      />
                    </div>
                  </div>
                )}
                <div className="button-group-lead-filter">
                  <button className="cancel-button-lead-filter" onClick={handleButtonClick}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedGenderOption ? clearGenderSelection : toggleGenderDropdown}
            >
              <p>{selectedGenderOption || "Gender"}</p>
              <span>
                {selectedGenderOption ? (
                  <span className="TeacherX"><CgCloseO /></span>
                ) : (
                  isGenderDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isGenderDropdownOpen && !selectedGenderOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectGenderOption("Male")}>Male</p>
                <p onClick={() => selectGenderOption("Female")}>Female</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
            >
              <p>{selectedAgeOption || "Age"}</p>
              <span>
                {selectedAgeOption ? (
                  <span className="AgeX"><CgCloseO /></span>
                ) : (
                  isAgeDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isAgeDropdownOpen && !selectedAgeOption && (
              <div className="PointsDivDrop PointsDivDroLeft">
                <div className="PointsDivDropTitle">
                  <p>Age range</p>
                  <p>Please input age range</p>
                  {showMessage && (
                    <p>Please enter all required information</p>
                  )}
                </div>
                <div className="PointsDivDropInpBox">
                  <input
                    type="number"
                    placeholder="From"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="To"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                  />
                </div>
                <div className="PointsDivDropinputcheck">
                  <input type="checkbox" />
                  <p>Including those without age information</p>
                </div>
                <div className="PointsDivDropButtonBox">
                  <button onClick={toggleAgeDropdown}>Cancel</button>
                  <button onClick={handleApply}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <button id="reset">
            <VscDebugRestart />
          </button>
        </div>
      )}
      <div className="ClientContent" style={{ padding: "0 20px" }}>
        {renderContent()}
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <div className="newLeaadCard_studentMenu" style={{ width: "440px" }}>
          {studentMenuStatus == 0 ? (
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
                  <p className="noneP">Select tyoe of lesson*</p>
                  <Radio.Group onChange={onChange} value={selectType} className="newLeaadCard_studentMenu1_chil_form_select_inputs noneTarafP">
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
                <div className="newLeaadCard_studentMenu1_chil_form_select noneP">
                  <div className="newLeaadCard_studentMenu1_chil_form_select_check noneP">
                    <label htmlFor=""></label>
                    <Checkbox onChange={onChangeChekboxGroup}>Create a new individual price</Checkbox>
                  </div>
                </div>
              </div>
              <div className="addCardInfo noneTarafP">
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
              <div className="newLeaadCard_studentMenu1_chil_form_select noneP">
                <div className="newLeaadCard_studentMenu1_chil_form_select_check noneP">
                  <label htmlFor="">Select tyoe of lesson*</label>
                  <Checkbox onChange={onChangeChekboxGroup}>Discount for the frist month</Checkbox>
                </div>
              </div>
              <div className="addCardInfo noneTarafP">
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
              <div className="serach">
                <IoSearchSharp />
                <input
                  onClick={() => setIsOpenSearchData(!isOpenSearchData)}
                  type="text"
                  placeholder="Global search"
                  value={inputValue}
                  readOnly
                />
                <div className={isOpenSearchData ? "search_data" : "none"}>
                  {[...Array(9)].map((_, index) => (
                    <div
                      onClick={() => handleItemClick("Alisher Atajanov")}
                      key={index}
                    >
                      <p>Alisher Atajanov</p>
                      <p>+998 99 966 73 63</p>
                      <p>- 182 000 so'm</p>
                    </div>
                  ))}
                </div>
              </div>
              {isOpenSelectData && (
                <div className="selectMenuInfos">
                  <div>
                    <label htmlFor="">Id:</label>
                    <p>2716356765</p>
                  </div>
                  <div>
                    <label htmlFor="">First name:</label>
                    <p>Alisher</p>
                  </div>
                  <div>
                    <label htmlFor="">Phone number:</label>
                    <p>+998771141510</p>
                  </div>
                  <div>
                    <label htmlFor="">Birthday:</label>
                    <p>29.01.2001</p>
                  </div>
                  <div>
                    <label htmlFor="">Status:</label>
                    <p>Active</p>
                  </div>
                  <div>
                    <label htmlFor="">Birthday:</label>
                    <p>28.01.2002</p>
                  </div>
                  <div>
                    <label htmlFor="">Subject:</label>
                    <p>General English: Beginner</p>
                  </div>
                  <div>
                    <label htmlFor="">Change date:</label>
                    <p>11.02.2028</p>
                  </div>
                </div>
              )}
              <div className="newLeaadCard_studentMenu1_chil_form_select">
                <p className="noneP">Select tyoe of lesson*</p>
                <Radio.Group onChange={onChange} value={selectType} className="newLeaadCard_studentMenu1_chil_form_select_inputs noneTarafP">
                  <Radio value={2}>Individual lesson</Radio>
                  <Radio value={3}>Group lesson</Radio>
                </Radio.Group>
              </div>
              <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                <button onClick={() => setStudentMenuStatus(0)}>Go back</button>
                <button onClick={() => setStudentMenuStatus(3)}>Next</button>
              </div>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
