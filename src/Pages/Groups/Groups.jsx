import "./Groups.css";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { BiGroup } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiInboxArchiveLine } from "react-icons/ri";
import ArchiveQuestGroup from "../../components/GroupArchive/ArchiveQuestGroup.jsx";
import ArchiveSucces from "../../components/GroupArchive/ArchiveSucces.jsx";
import SendSmsGroup from "../../components/GroupSendSms/SendSmsGroup.jsx";
import SendSmsQuestGroup from "../../components/GroupSendSms/SendSmsQuestGroup.jsx";
import SendSmsSuccesGroup from "../../components/GroupSendSms/SendSmsSuccesGroup.jsx";
import ActiveGroupsTable from "../../components/GroupComponents/ActiveGroupsTable.jsx";
import IndividualGroupTable from "../../components/GroupComponents/IndividualGroupTable.jsx";
import ArchiveGroupTable from "../../components/GroupComponents/ArchiveGroupTable.jsx";
import axios from "axios";
import { DatePicker, Input, Select } from "antd";
import NewGroupTable from "../../components/GroupComponents/GroupModal/NewGroupTable.jsx";
import { Icons } from "../../Assets/icons/icons.js";
import toast, { Toaster } from "react-hot-toast";
import { CgCloseO } from "react-icons/cg";
import { FiChevronUp, FiUser, FiX } from "react-icons/fi";
import { FaChevronDown, FaStar } from "react-icons/fa6";
import DatePickerr from "react-datepicker";
import { FaTimes } from "react-icons/fa";
import NewIndavidualModal from "../../components/GroupComponents/GroupModal/NewIndavidualModal.jsx";
import { Link, Navigate, Route, Routes } from "react-router-dom";

export default function Groups() {
  // const options1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  // const options2 = ["Choice A", "Choice B", "Choice C"];
  // const options3 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [Groups, setGroups] = useState([
    {
      number: 1,
      countStudents: 12,
      id: "000001",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
  ]);

  const [activeRows, setActiveRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [view, setView] = useState("Active groups");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [tarif, setTarif] = useState(null);
  const [openArchive, setOpenArchive] = useState(false);
  const [ActiveGroups, setActiveGroups] = useState([])
  const [IndividualGroups, setIndividualGroups] = useState([])
  const [ArchiveGroups, setArchiveGroups] = useState([])
  const [loadingActive, setLoadingActive] = useState(false)
  const [loadingIndividual, setLoadingIndividual] = useState(false)
  const [loadingArchive, setLoadingArchive] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubjectOption, setSelectedSubjectOption] = useState(null);
  const [selectedLessonOption, setSelectedLessonOption] = useState(null);
  const [selectedStatusOption, setSelectedStatusOption] = useState(null);
  const [selectedBalanceOption, setSelectedBalanceOption] = useState(null);
  const [selectedPointsOption, setSelectedPointsOption] = useState(null);
  const [selectedGenderOption, setSelectedGenderOption] = useState(null);
  const [selectedAgeOption, setSelectedAgeOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isBalanceDropdownOpen, setIsBalanceDropdownOpen] = useState(false);
  const [isPointsDropdownOpen, setIsPointsDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [isRange, setIsRange] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isGeneralEnglishOpen, setIsGeneralEnglishOpen] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [isDatePickerTwoVisible, setIsDatePickerTwoVisible] = useState(false)

  // Функция для переключения состояния вложенного дропдауна
  const toggleGeneralEnglishDropdown = () => setIsGeneralEnglishOpen(!isGeneralEnglishOpen);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const clearSelection = () => setSelectedOption(null);

  const toggleSubjectDropdown = () => setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
  const selectSubjectOption = (option) => {
    setSelectedSubjectOption(option);
    setIsSubjectDropdownOpen(false);
  };
  const clearSubjectSelection = () => setSelectedSubjectOption(null);

  const toggleLessonDropdown = () => setIsLessonDropdownOpen(!isLessonDropdownOpen);
  const selectLessonOption = (option) => {
    setSelectedLessonOption(option);
    setIsLessonDropdownOpen(false);
  };
  const clearLessonSelection = () => setSelectedLessonOption(null);

  const toggleStatusDropdown = () => setIsStatusDropdownOpen(!isStatusDropdownOpen);
  const selectStatusOption = (option) => {
    setSelectedStatusOption(option);
    setIsStatusDropdownOpen(false);
  };
  const clearStatusSelection = () => setSelectedStatusOption(null);

  const toggleBalanceDropdown = () => setIsBalanceDropdownOpen(!isBalanceDropdownOpen);
  const selectBalanceOption = (option) => {
    setSelectedBalanceOption(option);
    setIsBalanceDropdownOpen(false);
  };
  const clearBalanceSelection = () => setSelectedBalanceOption(null);

  const togglePointsDropdown = () => setIsPointsDropdownOpen(!isPointsDropdownOpen);
  const handleApply = () => {
    if (fromValue && toValue) {
      setSelectedPointsOption(`${fromValue} - ${toValue}`);
      setIsPointsDropdownOpen(false);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };
  const clearPointsSelection = () => {
    setSelectedPointsOption(null);
    setFromValue("");
    setToValue("");
  };

  const toggleGenderDropdown = () => setIsGenderDropdownOpen(!isGenderDropdownOpen);
  const selectGenderOption = (option) => {
    setSelectedGenderOption(option);
    setIsGenderDropdownOpen(false);
  };
  const clearGenderSelection = () => setSelectedGenderOption(null);

  const toggleAgeDropdown = () => setIsAgeDropdownOpen(!isAgeDropdownOpen);
  const handleApplyAge = () => {
    if (fromValue && toValue) {
      setSelectedAgeOption(`${fromValue} - ${toValue}`);
      setIsAgeDropdownOpen(false);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };
  const clearAgeSelection = () => {
    setSelectedAgeOption(null);
    setFromValue("");
    setToValue("");
  };

  const handleButtonClick = () => setShowDatePicker(!showDatePicker);
  const handleSingleDateChange = (date) => setTempStartDate(date);
  const handleToggle = () => setIsRange(!isRange);

  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
    setTempStartDate(null);
    setTempEndDate(null);
  };


  const formatDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };


  const toggleDatePickerVisibility = () => setIsDatePickerVisible(!isDatePickerVisible);
  const handleSingleDateSelection = (date) => setTempStartDate(date);
  const toggleDateRange = () => setIsRange(!isRange);

  const resetSelectedDates = () => {
    setStartDate(null);
    setEndDate(null);
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const formatSelectedDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };


  const toggleDatePickerTwoVisibility = () => setIsDatePickerTwoVisible(!isDatePickerTwoVisible);
  const handleSingleDateTwoSelection = (date) => setTempStartDate(date);
  const toggleDateTwoRange = () => setIsRange(!isRange);

  const resetSelectedTwoDates = () => {
    setStartDate(null);
    setEndDate(null);
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const formatSelectedTwoDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };

  const getActive = async () => {
    setLoadingActive(true)
    try {
      const { data } = await axios.get("http://192.168.192.254:8000/api/v1/group/", {
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

  const getIndividual = async () => {
    setLoadingIndividual(true)
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/groups/ind/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setIndividualGroups(data);
      setLoadingIndividual(false)
    } catch (err) {
      console.error(err);
    }
  };
  const getArchive = async () => {
    setLoadingArchive(true)
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/groups/arxive/", {
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
    getIndividual();
    getArchive()
  }, []);
  const storedToken = localStorage.getItem('token');

  const newGroup1 = async () => {
    try {
      const response = await axios.post('https://api.quickhub.uz/api/groups/yaratish/', body1, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      getActive()
    } catch (err) {
      console.log(err);
    }
  };

  const newGroup2 = async () => {
    try {
      const response = await axios.post('https://api.quickhub.uz/api/groups/yaratish/', body2, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      getActive()
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSelectAll(activeRows.length === Groups.length);
  }, [activeRows, Groups.length]);

  const handleCancelActiveRows = () => {
    setActiveRows([]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStudentMenuStatus(0);
    setTarif(null);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen(false);
    setStudentMenuStatus(0);
    setTarif(null);
    newGroup1()
  };
  const handleCloseModal2 = () => {
    setIsModalOpen(false);
    setStudentMenuStatus(0);
    setTarif(null);
    newGroup2()
  };

  const [studentMenuStatus, setStudentMenuStatus] = useState(0);

  const handleLeftTarif = () => {
    setStudentMenuStatus(1);
    setTarif("left");
  };

  const handleRightTarif = () => {
    setStudentMenuStatus(2);
    setTarif("right");
  };

  const handleChange = (e) => {
    console.log(e);
  }

  const [groupArchive, setGroupArchive] = useState(false);
  const [SendSmsQuest, setSendSmsQuest] = useState(false);
  const [groupArchiveSucces, setGroupArchiveSucces] = useState(false);
  const [SendSmsSucces, setSendSmsSucces] = useState(false);
  const [sendSms, SetsendSms] = useState(false);
  const [courseSelect, SetCourseSelect] = useState([]);
  const [roomSelect, SetRoomSelect] = useState([]);
  const [coursePersnoal, SetCoursePersnoal] = useState([]);

  const getCourse = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/course/all/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      SetCourseSelect(data);
    } catch (err) {
      console.error(err);
    }
  };

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

  const getPersonal = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/personal/all/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      SetCoursePersnoal(data.map(item => item));
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getCourse();
    getPersonal()
    getRoom()
  }, []);

  const OpenSuccesArchiveFun = () => {
    setGroupArchive(false);
    setGroupArchiveSucces(true);
    setTimeout(() => {
      setGroupArchiveSucces(false);
    }, 1500);
  };
  const OpenSuccesDSendFun = () => {
    setSendSmsQuest(false);
    setSendSmsSucces(true);
    setTimeout(() => {
      setSendSmsSucces(false);
    }, 1500);
  };
  const OpenSendQuestFun = () => {
    SetsendSms(false);
    setSendSmsQuest(true);
  };
  const BackSendSmsFun = () => {
    SetsendSms(true);
    setSendSmsQuest(false);
  };
  const [body2, setbody2] = useState({
    group_duration: 2,
    group_name: '',
    course: "Select Course",
    teacher_fk_user: "Select Teacher",
    teacher_percentage: "",
    start_day: 'Select start day',
    days: "Select Days",
    start_time: "Select Time",
    room: "Select Room",
    points: 0,
  });

  const [body1, setbody1] = useState({
    group_duration: 1,
    group_name: '',
    course: "Select Course",
    teacher_fk_user: "Select Teacher",
    teacher_percentage: "",
    start_day: 'Select start day',
    days: "Select Days",
    start_time: "Select Time",
    room: "Select Room",
    points: 0,
  });

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setbody1((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleChangeCourse1 = (value) => {
    setbody1((prevData) => ({ ...prevData, course: value }));
  };

  const handleChangeTeacher1 = (value) => {
    setbody1((prevData) => ({ ...prevData, teacher_fk_user: value }));
  };

  const handleChangeDays1 = (value) => {
    setbody1((prevData) => ({ ...prevData, days: value }));
  };

  const handleChangeTime1 = (value) => {
    setbody1((prevData) => ({ ...prevData, start_time: value }));
  };

  const handleChangeRoom1 = (value) => {
    setbody1((prevData) => ({ ...prevData, room: value }));
  };

  const handleDateChange1 = (date, dateString) => {
    setbody1((prevData) => ({ ...prevData, start_day: dateString }));
  };



  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setbody2((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeCourse2 = (value) => {
    setbody2((prevData) => ({ ...prevData, course: value }));
  };

  const handleChangeTeacher2 = (value) => {
    setbody2((prevData) => ({ ...prevData, teacher_fk_user: value }));
  };

  const handleChangeDays2 = (value) => {
    setbody2((prevData) => ({ ...prevData, days: value }));
  };

  const handleChangeTime2 = (value) => {
    setbody2((prevData) => ({ ...prevData, start_time: value }));
  };

  const handleChangeRoom2 = (value) => {
    setbody2((prevData) => ({ ...prevData, room: value }));
  };

  const handleDateChange2 = (date, dateString) => {
    setbody2((prevData) => ({ ...prevData, start_day: dateString }));
  };

  function handleBody1() {
    console.log(body1);
    handleCloseModal()
    newGroup1()
    setbody1({
      group_duration: 1,
      group_name: '',
      course: "Select Course",
      teacher_fk_user: "Select Teacher",
      teacher_percentage: "",
      start_day: 'Select start day',
      days: "Select Days",
      start_time: "Select Time",
      room: "Select Room",
      points: 0,
    });

  }
  function handleBody2() {
    console.log(body2);
    handleCloseModal()
    newGroup2()
    setbody2({
      group_duration: 2,
      group_name: '',
      course: "Select Course",
      teacher_fk_user: "Select Teacher",
      teacher_percentage: "",
      start_day: 'Select start day',
      days: "Select Days",
      start_time: "Select Time",
      room: "Select Room",
      points: 0,
    });
  }
  console.log(studentMenuStatus);


  const renderContent = () => {
    return (
      <Routes>
        <Route index element={<Navigate to="active-groups" />} />
        {view === "Active groups" && (
          <Route
            path="active-groups"
            element={
              <>
                <ActiveGroupsTable
                  Groups={ActiveGroups}
                  setGroups={setActiveGroups}
                  selectAll={selectAll}
                  setSelectAll={setSelectAll}
                  activeRows={activeRows}
                  setActiveRows={setActiveRows}
                  loadingActive={loadingActive}
                  getActive={getActive}
                  getArchive={getArchive}
                />
                <div className="GroupPosition">
                  <ArchiveQuestGroup
                    groupArchive={groupArchive}
                    setGroupArchive={setGroupArchive}
                    OpenSuccesArchiveFun={OpenSuccesArchiveFun}
                  />
                  <ArchiveSucces groupArchiveSucces={groupArchiveSucces} />
                  <SendSmsQuestGroup
                    SendSmsQuest={SendSmsQuest}
                    setSendSmsQuest={setSendSmsQuest}
                    OpenSuccesDSendFun={OpenSuccesDSendFun}
                    BackSendSmsFun={BackSendSmsFun}
                  />
                  <SendSmsSuccesGroup SendSmsSucces={SendSmsSucces} />
                  <SendSmsGroup
                    sendSms={sendSms}
                    SetsendSms={SetsendSms}
                    OpenSendQuestFun={OpenSendQuestFun}
                  />
                </div>
              </>
            }
          />
        )}

        {view === "Individuals" && (
          <Route
            path="individuals"
            element={
              <IndividualGroupTable
                Groups={IndividualGroups}
                setGroups={setIndividualGroups}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                activeRows={activeRows}
                setActiveRows={setActiveRows}
                loadingIndividual={loadingIndividual}
                getIndividual={getIndividual}
                getArchive={getArchive}
              />
            }
          />
        )}

        {view === "Archive" && (
          <Route
            path="archive"
            element={
              <ArchiveGroupTable
                Groups={ArchiveGroups}
                setGroups={setArchiveGroups}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                activeRows={activeRows}
                setActiveRows={setActiveRows}
                loadingArchive={loadingArchive}
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
            position: "relative",
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "550px",
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
      className="Group"
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="ClientsButtons">
        <div className="CourseLevelHeaderToggles">
          <Link
            to="active-groups"
            id="ActiveGr"
            onClick={() => setView("Active groups")}
            className={view == "Active groups" ? "active" : ""}
          >
            Active groups
          </Link>
          <Link
            to="individuals"
            id="IndividualsGr"
            onClick={() => setView("Individuals")}
            className={view == "Individuals" ? "active" : ""}
          >
            Individuals
          </Link>
          <Link
            to="archive"
            id="ArchiveGr"
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
              }}
              onClick={() => SetsendSms(true)}
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
                gap: 5,
                cursor: "pointer",
                outline: "none",
              }}
              onClick={handleCancelActiveRows}
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
              gap: 0,
              cursor: "pointer",
              outline: "none",
            }}
            onClick={() => setIsFiltersActive(!isFiltersActive)}
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
            {isFiltersActive ? "Close filters" : "Filters"}
          </button>
          {activeRows.length == 0 && view === "Active groups" ? (
            <button
              className="customer"
              onClick={handleOpenModal}
              style={{
                width: "135px",
                height: "32px",
                background: "#005EEB",
                border: "1px solid #005EEB",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
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
              </span>{" "}
              New group
            </button>
          ) : activeRows.length == 0 && view === "Individuals" ? (
            <button
              className="customer"
              onClick={handleOpenModal}
              style={{
                width: "170px",
                height: "32px",
                background: "#005EEB",
                border: "1px solid #005EEB",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
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
              </span>{" "}
              New individual course
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
              onClick={() => setOpenArchive((state) => !state)}
            >
              <HiDotsHorizontal />
              {openArchive && (
                <div className="archive" onClick={() => setGroupArchive(true)}>
                  <span style={{ fontSize: 20, marginTop: 5 }}>
                    <RiInboxArchiveLine />
                  </span>
                  Archive
                </div>
              )}
            </button>
          )}
        </div>
      </div>
      {view == "Active groups" && isFiltersActive && (
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
            >
              <p>{selectedSubjectOption || "Course"}</p>
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
                <p className="SubGenEng" onClick={toggleGeneralEnglishDropdown}>
                  General English
                </p>
                {isGeneralEnglishOpen && (
                  <div className="SubGenEngOptions">
                    <p onClick={() => selectSubjectOption("Beginner")}> - Beginner</p>
                    <p onClick={() => selectSubjectOption("Elementary")}> - Elementary</p>
                  </div>
                )}
                <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                <p onClick={() => selectSubjectOption("Science")}>Science</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK DaysDropBut"
              onClick={selectedOption ? clearSelection : toggleDropdown}
              style={{
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
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={toggleDatePickerVisibility}>
              <p>
                {startDate && endDate
                  ? `${formatSelectedDate(startDate)} - ${formatSelectedDate(endDate)}`
                  : startDate
                    ? formatSelectedDate(startDate)
                    : "Days"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={resetSelectedDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {isDatePickerVisible && (
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
                      onChange={toggleDateRange}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateSelection}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
                  <button className="cancel-button-lead-filter" onClick={toggleDatePickerVisibility}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
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
                    : "Study date"}
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
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateChange}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
              onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
            >
              <p>{selectedAgeOption || "Students"}</p>
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
                  <p>Student range</p>
                  <p>Please input Student range</p>
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedBalanceOption ? selectBalanceOption : toggleBalanceDropdown}
            >
              <p>{selectedBalanceOption || "Room"}</p>
              <span>
                {selectedBalanceOption ? (
                  <span className="AgeX"><CgCloseO /></span>
                ) : (
                  isBalanceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isBalanceDropdownOpen && !selectedBalanceOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectOption("Room- 202")}>Room- 202</p>
                <p onClick={() => selectOption("Room- 203")}>Room- 203</p>
                <p onClick={() => selectOption("Room- 204")}>Room- 204</p>
                <p onClick={() => selectOption("Room- 205")}>Room- 205</p>
              </div>
            )}
          </div>
          <button id="reset">
            <VscDebugRestart />
          </button>
        </div>
      )}
      {view == "Individuals" && isFiltersActive && (
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
            >
              <p>{selectedSubjectOption || "Course"}</p>
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
                <p className="SubGenEng" onClick={toggleGeneralEnglishDropdown}>
                  General English
                </p>
                {isGeneralEnglishOpen && (
                  <div className="SubGenEngOptions">
                    <p onClick={() => selectSubjectOption("Beginner")}> - Beginner</p>
                    <p onClick={() => selectSubjectOption("Elementary")}> - Elementary</p>
                  </div>
                )}
                <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                <p onClick={() => selectSubjectOption("Science")}>Science</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK DaysDropBut"
              onClick={selectedOption ? clearSelection : toggleDropdown}
              style={{
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
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={toggleDatePickerVisibility}>
              <p>
                {startDate && endDate
                  ? `${formatSelectedDate(startDate)} - ${formatSelectedDate(endDate)}`
                  : startDate
                    ? formatSelectedDate(startDate)
                    : "Days"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={resetSelectedDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {isDatePickerVisible && (
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
                      onChange={toggleDateRange}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateSelection}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
                  <button className="cancel-button-lead-filter" onClick={toggleDatePickerVisibility}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
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
                    : "Study date"}
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
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateChange}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
              onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
            >
              <p>{selectedAgeOption || "Students"}</p>
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
                  <p>Student range</p>
                  <p>Please input Student range</p>
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedBalanceOption ? selectBalanceOption : toggleBalanceDropdown}
            >
              <p>{selectedBalanceOption || "Room"}</p>
              <span>
                {selectedBalanceOption ? (
                  <span className="AgeX"><CgCloseO /></span>
                ) : (
                  isBalanceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isBalanceDropdownOpen && !selectedBalanceOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectOption("Room- 202")}>Room- 202</p>
                <p onClick={() => selectOption("Room- 203")}>Room- 203</p>
                <p onClick={() => selectOption("Room- 204")}>Room- 204</p>
                <p onClick={() => selectOption("Room- 205")}>Room- 205</p>
              </div>
            )}
          </div>
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={toggleDatePickerTwoVisibility}>
              <p>
                {startDate && endDate
                  ? `${formatSelectedTwoDate(startDate)} - ${formatSelectedTwoDate(endDate)}`
                  : startDate
                    ? formatSelectedTwoDate(startDate)
                    : "Birthday"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={resetSelectedTwoDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {isDatePickerTwoVisible && (
              <div
                className="datepicker-container XuyKontainer"
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
                      onChange={toggleDateTwoRange}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateTwoSelection}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
                  <button className="cancel-button-lead-filter" onClick={toggleDatePickerTwoVisibility}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <button id="reset">
            <VscDebugRestart />
          </button>
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
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedStatusOption ? clearStatusSelection : toggleStatusDropdown}
            >
              <p>{selectedStatusOption || "Type"}</p>
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
                <p onClick={() => selectStatusOption("Group")}> Group </p>
                <p onClick={() => selectStatusOption("Individual")}> Individual </p>
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "103px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedSubjectOption ? clearSubjectSelection : toggleSubjectDropdown}
            >
              <p>{selectedSubjectOption || "Course"}</p>
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
                <p className="SubGenEng" onClick={toggleGeneralEnglishDropdown}>
                  General English
                </p>
                {isGeneralEnglishOpen && (
                  <div className="SubGenEngOptions">
                    <p onClick={() => selectSubjectOption("Beginner")}> - Beginner</p>
                    <p onClick={() => selectSubjectOption("Elementary")}> - Elementary</p>
                  </div>
                )}
                <p onClick={() => selectSubjectOption("Korean")}>Korean</p>
                <p onClick={() => selectSubjectOption("Science")}>Science</p>
              </div>
            )}
          </div>
          <div className="FilderSubjectDiv">
            <button
              className="HJK DaysDropBut"
              onClick={selectedOption ? clearSelection : toggleDropdown}
              style={{
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
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={toggleDatePickerVisibility}>
              <p>
                {startDate && endDate
                  ? `${formatSelectedDate(startDate)} - ${formatSelectedDate(endDate)}`
                  : startDate
                    ? formatSelectedDate(startDate)
                    : "Days"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={resetSelectedDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {isDatePickerVisible && (
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
                      onChange={toggleDateRange}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateSelection}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
                  <button className="cancel-button-lead-filter" onClick={toggleDatePickerVisibility}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
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
                    : "Study date"}
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
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateChange}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
              onClick={selectedAgeOption ? clearAgeSelection : toggleAgeDropdown}
            >
              <p>{selectedAgeOption || "Students"}</p>
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
                  <p>Student range</p>
                  <p>Please input Student range</p>
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
          <div className="FilderSubjectDiv">
            <button
              className="HJK"
              style={{ width: "100px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={selectedBalanceOption ? selectBalanceOption : toggleBalanceDropdown}
            >
              <p>{selectedBalanceOption || "Room"}</p>
              <span>
                {selectedBalanceOption ? (
                  <span className="AgeX"><CgCloseO /></span>
                ) : (
                  isBalanceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />
                )}
              </span>
            </button>
            {isBalanceDropdownOpen && !selectedBalanceOption && (
              <div className="SubjectDropContant">
                <p onClick={() => selectOption("Room- 202")}>Room- 202</p>
                <p onClick={() => selectOption("Room- 203")}>Room- 203</p>
                <p onClick={() => selectOption("Room- 204")}>Room- 204</p>
                <p onClick={() => selectOption("Room- 205")}>Room- 205</p>
              </div>
            )}
          </div>
          <div className="LeadDateButton_Box">
            <button className="HJK" onClick={toggleDatePickerTwoVisibility}>
              <p>
                {startDate && endDate
                  ? `${formatSelectedTwoDate(startDate)} - ${formatSelectedTwoDate(endDate)}`
                  : startDate
                    ? formatSelectedTwoDate(startDate)
                    : "Birthday"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={resetSelectedTwoDates} />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>
            {isDatePickerTwoVisible && (
              <div
                className="datepicker-container XuyKontainer"
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
                      onChange={toggleDateTwoRange}
                    />
                    <p className="datapicker_input_text">Set the period</p>
                  </label>
                </div>
                {!isRange ? (
                  <div className="custom-datepicker">
                    <DatePickerr
                      selected={tempStartDate}
                      onChange={handleSingleDateTwoSelection}
                      inline
                    />
                  </div>
                ) : (
                  <div className="range-datepickers">
                    <div className="custom-datepicker">
                      <DatePickerr
                        selected={tempStartDate}
                        onChange={(date) => setTempStartDate(date)}
                        inline
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="custom-datepicker">
                      <DatePickerr
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
                  <button className="cancel-button-lead-filter" onClick={toggleDatePickerTwoVisibility}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <button id="reset">
            <VscDebugRestart />
          </button>
        </div>
      )}
      <div className="GroupContent" style={{ padding: "0 20px" }}>
        {renderContent()}
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <div className="newLeaadCard_studentMenu" style={{ width: "100%" }}>
          {view == "Active groups" && studentMenuStatus !== 3 && studentMenuStatus !== 4 && (
            <>
              <div className="newLeaadCard_studentMenu1">
                <div className="newLeaadCard_studentMenu_title">
                  <h2>Create new group</h2>
                  <p>Find out more by selecting your course options below</p>
                </div>
                <div
                  className="newLeaadCard_studentMenu_Menu"
                  style={{ paddingInline: "25px" }}
                >
                  <div
                    onClick={handleLeftTarif}
                    className={
                      "newLeaadCard_studentMenu_Menu_btn1 " +
                      (tarif === "left" && "active")
                    }
                    style={{ width: "50%" }}
                  >
                    <h2>1</h2>
                    <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                      <p>1 month = 12 paid lesson</p>
                      <span>12 paid lesson and required bonus les.</span>
                    </div>
                  </div>
                  <div
                    onClick={handleRightTarif}
                    className={
                      "newLeaadCard_studentMenu_Menu_btn1 " +
                      (tarif === "right" && "active")
                    }
                    style={{ width: "50%" }}
                  >
                    <h2>2</h2>
                    <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                      <p>1 month = 31 paid lesson</p>
                      <span>14 paid lesson and optional bonus les.</span>
                    </div>
                  </div>
                </div>
              </div>
              {studentMenuStatus == 1 && (
                <div
                  className="newLeaadCard_studentMenu1_chil"
                  style={{ width: "100%" }}
                >
                  <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                    <div>
                      <label htmlFor="">
                        Group name (optional)
                        <span>
                          <Icons.questMark />
                        </span>
                      </label>

                      <Input
                        type="text"
                        placeholder="Group name"
                        name="group_name"
                        value={body1.group_name}
                        onChange={handleInputChange1}
                      />
                    </div>

                    <div>
                      <label htmlFor="">
                        Select course<span>*</span>
                      </label>
                      <Select
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultValue="Select course"
                        className="studentMenu1_chil_form_selectt"
                        value={body1.course}
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        onChange={handleChangeCourse1}
                        options={
                          courseSelect.map(item => ({
                            value: item.id,
                            label: item.name,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select teacher <span>*</span>
                      </label>
                      <Select
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultValue="Select teacher"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body1.teacher_fk_user}
                        onChange={handleChangeTeacher1}
                        options={
                          coursePersnoal.map(item => ({
                            value: item.id,
                            label: `${item.first_name} ${item.last_name}`
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Teacher percentage<span>*</span>
                      </label>
                      <Input
                        type="number"
                        placeholder="0-100%"
                        name="teacher_percentage"
                        value={body1.teacher_percentage}
                        onChange={handleInputChange1} />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select days<span>*</span>
                      </label>
                      <Select
                        defaultValue="Select Day"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body1.days}
                        onChange={handleChangeDays1}
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
                      <label htmlFor="">
                        Select start time<span>*</span>
                      </label>
                      <Select
                        defaultValue="Select time"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body1.start_time}
                        onChange={handleChangeTime1}
                        options={[
                          {
                            value: "0900",
                            label: "09:00",
                          },
                          {
                            value: "1400",
                            label: "14:00",
                          },
                          {
                            value: "1800",
                            label: "18:00",
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select room <span>*</span>{" "}
                      </label>
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
                        value={body1.room}
                        onChange={handleChangeRoom1}
                        options={
                          roomSelect.map(item => ({
                            value: item.name,
                            label: item.name
                          }))
                        }
                      />
                    </div>
                    <div className="SettingFormGroup">
                      <label htmlFor="">
                        Select start day <span>*</span>{" "}
                      </label>
                      <DatePicker
                        style={{
                          width: '100%',
                          height: '41px',
                          borderRadius: '10px',
                        }}
                        onChange={handleDateChange1}
                      />
                    </div>
                  </div>
                  <div className="addCardInfo2">
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Total number of lesson: </label>
                        <span>165</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Total study duration:</label>
                        <span>6 months</span>
                      </div>
                    </div>
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Start time: </label>
                        <span>17:00</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">End time</label>
                        <span>19:00</span>
                      </div>
                    </div>
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Start day: </label>
                        <span>May 15</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">End day</label>
                        <span>deckaber 15</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="newLeaadCard_studentMenu_Menu_footerBtn"
                    style={{ width: "100%" }}
                  >
                    <button onClick={setStudentMenuStatus}>Cancel</button>
                    <button onClick={() => setStudentMenuStatus(3)}>
                      Next
                    </button>
                  </div>
                </div>
              )}

              {studentMenuStatus == 2 && (
                <div
                  className="newLeaadCard_studentMenu1_chil"
                  style={{ width: "100%" }}
                >
                  <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                    <div>
                      <label htmlFor="">
                        Group name (optional)
                        <span>
                          <Icons.questMark />
                        </span>
                      </label>

                      <Input
                        type="text"
                        placeholder="Group name"
                        name="group_name"
                        value={body2.group_name}
                        onChange={handleInputChange2}
                      />
                    </div>

                    <div>
                      <label htmlFor="">
                        Select course<span>*</span>
                      </label>
                      <Select
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultValue="Select course"
                        className="studentMenu1_chil_form_selectt"
                        value={body2.course}
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        onChange={handleChangeCourse2}
                        options={
                          courseSelect.map(item => ({
                            value: item.id,
                            label: item.name,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select teacher <span>*</span>
                      </label>
                      <Select
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultValue="Select teacher"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body2.teacher_fk_user}
                        onChange={handleChangeTeacher2}
                        options={
                          coursePersnoal.map(item => ({
                            value: item.id,
                            label: `${item.first_name} ${item.last_name}`
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Teacher percentage<span>*</span>
                      </label>
                      <Input
                        type="number"
                        placeholder="0-100%"
                        name="teacher_percentage"
                        value={body2.teacher_percentage}
                        onChange={handleInputChange2} />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select days<span>*</span>
                      </label>
                      <Select
                        defaultValue="Select Day"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body2.days}
                        onChange={handleChangeDays2}
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
                      <label htmlFor="">
                        Select start time<span>*</span>
                      </label>
                      <Select
                        defaultValue="Select time"
                        className="studentMenu1_chil_form_selectt"
                        style={{
                          width: "213px",
                          height: "45px",
                          color: "#707683",
                          outline: " none",
                          borderRadius: "100px!important",
                        }}
                        value={body2.start_time}
                        onChange={handleChangeTime2}
                        options={[
                          {
                            value: "0900",
                            label: "09:00",
                          },
                          {
                            value: "1400",
                            label: "14:00",
                          },
                          {
                            value: "1800",
                            label: "18:00",
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Select room <span>*</span>{" "}
                      </label>
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
                        value={body2.room}
                        onChange={handleChangeRoom1}
                        options={
                          roomSelect.map(item => ({
                            value: item.name,
                            label: item.name
                          }))
                        }
                      />
                    </div>
                    <div className="SettingFormGroup">
                      <label htmlFor="">
                        Select start day <span>*</span>{" "}
                      </label>
                      <DatePicker
                        style={{
                          width: '100%',
                          height: '41px',
                          borderRadius: '10px',
                        }}
                        onChange={handleDateChange2}
                      />
                    </div>
                  </div>
                  <div className="addCardInfo2">
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Total number of lesson: </label>
                        <span>165</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Total study duration:</label>
                        <span>6 months</span>
                      </div>
                    </div>
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Start time: </label>
                        <span>17:00</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">End time</label>
                        <span>19:00</span>
                      </div>
                    </div>
                    <div className="addCardInfo21">
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">Start day: </label>
                        <span>May 15</span>
                      </div>
                      <div className="addCardInfo21_chil">
                        <label htmlFor="">End day</label>
                        <span>deckaber 15</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="newLeaadCard_studentMenu_Menu_footerBtn"
                    style={{ width: "100%" }}
                  >
                    <button onClick={handleCloseModal}>Cancel</button>
                    <button onClick={() => setStudentMenuStatus(4)}>
                      Next
                    </button>
                  </div>
                </div>
              )}

            </>
          )}
          {view == "Individuals" && studentMenuStatus !== 3 && (
            <NewIndavidualModal handleCloseModal={handleCloseModal} studentMenuStatus={studentMenuStatus} setStudentMenuStatus={setStudentMenuStatus} courseSelect={courseSelect} coursePersnoal={coursePersnoal} roomSelect={roomSelect} />
          )}
          {view == "Active groups" && studentMenuStatus == 3 && (
            <>
              <div className="newLeaadCard_studentMenu1">
                <div className="newLeaadCard_studentMenu_title">
                  <h2>Confirm creating new group sasas</h2>
                  <p>Do you want to confirm creating new group ?</p>
                </div>
                <div
                  className="newLeaadCard_studentMenu_Menu_footerBtn btn_groups"
                  style={{ width: "100%" }}
                >
                  <button onClick={() => setStudentMenuStatus(1)}>
                    Go Back
                  </button>
                  <button onClick={handleBody1}>Next</button>
                </div>
              </div>
            </>
          )}
          {view == "Active groups" && studentMenuStatus == 4 && (
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
                  position: "relative",
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  width: "550px",
                  height: "auto",
                  boxShadow: "0px 0px 34.9px 8px #00000038",
                }}
              >
                <div className="newLeaadCard_studentMenu1">
                  <div className="newLeaadCard_studentMenu_title">
                    <h2>Confirm creating new group </h2>
                    <p>Do you want to confirm creating new group ?</p>
                  </div>
                  <div
                    className="newLeaadCard_studentMenu_Menu_footerBtn btn_groups"
                    style={{ width: "100%" }}
                  >
                    <button onClick={() => setStudentMenuStatus(1)}>
                      Go Back
                    </button>
                    <button onClick={handleBody2}>Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {view == "Individuals" && studentMenuStatus == 3 && (
            <>
              <div className="newLeaadCard_studentMenu1">
                <div className="newLeaadCard_studentMenu_title">
                  <h2>Confirm creating new individual course</h2>
                  <p>Do you want to confirm creating new individual course ?</p>
                </div>
                <div
                  className="newLeaadCard_studentMenu_Menu_footerBtn btn_groups"
                  style={{ width: "100%" }}
                >
                  <button onClick={() => setStudentMenuStatus(1)}>
                    Go Back
                  </button>
                  <button onClick={handleCloseModal}>Next</button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
