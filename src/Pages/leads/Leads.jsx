import React, { useState, useEffect, useRef } from "react";
import { Icons } from "../../Assets/icons/icons";
import { IoSearchSharp } from "react-icons/io5";
import { TbFilter } from "react-icons/tb";
import { FiChevronDown, FiChevronUp, FiUser } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { RiMoreFill } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";
import { RiLinkUnlinkM } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import ModalMake from "./../../components/ModalMake/ModalMake";
import LeadCard from "./LeadCard";
import NewLeadModal from "./NewLeadModal";
import img from "../../Assets/teacher.png";
import "./leads.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BsCheck2Circle } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";
import { TbSend } from "react-icons/tb";
import { LuFolderDown } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiShareBoxLine } from "react-icons/ri";
import SecMake from "../../components/ModalMake/SeconMake";
import SeconDel from "../../components/DeleteModal/SeconDel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';
import { VscDebugRestart } from "react-icons/vsc";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import MakeaStudent from "../../components/MakeaStudent/MakeaStudent";
import RemuveCard from "../../components/RemuveCard/RemuveCard";
import DeleteCard from "../../components/DeleteCard/DeleteCard";
import axios from "axios";
import Loading from "../Loading";
import { CgCloseO } from "react-icons/cg";
import api from "../../api/api";


const FilterButton = ({
  selectedOption,
  toggleDropdown,
  isDropdownOpen,
  selectOption,
  options,
  defaultLabel
}) => (
  <div className="FilderSubjectDiv">
    <button
      className="LeadHJK "
      onClick={toggleDropdown}
    >
      <p>{selectedOption || defaultLabel}</p>
      <span>
        {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
      </span>
    </button>
    {isDropdownOpen && (
      <div className="SubjectDropContant">
        {options.map(option => (
          <p
            key={option}
            onClick={() => {
              selectOption(option);
              toggleDropdown();
            }}
          >
            {option}
          </p>
        ))}
      </div>
    )}
  </div>
);

const Leads = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const menu = useRef(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [isRange, setIsRange] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedStatusOption, setSelectedStatusOption] = useState(null);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedSubjectOption, setSelectedSubjectOption] = useState(null);
  const [selectedTypeOption, setSelectedTypeOption] = useState(null);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isGeneralEnglishOpen, setIsGeneralEnglishOpen] = useState(false);
  const [menuStatus, setMenuStatus] = useState(1);



  const [dropdownStates, setDropdownStates] = useState({
    status: false,
    type: false,
    category: false,
    priority: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    status: null,
    type: null,
    category: null,
    priority: null,
  });

  const toggleуDropdown = (key) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const selectOption = (key, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [key]: option,
    }));
  };

  const handleLeadsClick = () => {
    setActive(false);
  };

  const handleApplicationsClick = () => {
    setActive(true);
    // URLni /applications ga o'zgartiradi
  };




  const toggleStatusDropdown = () => setIsStatusDropdownOpen(!isStatusDropdownOpen);
  const clearStatusSelection = () => setSelectedStatusOption(null);
  const selectStatusOption = (option) => {
    setSelectedStatusOption(option);
    setIsStatusDropdownOpen(false);
  };

  const toggleSubjectDropdown = () => setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
  const selectSubjectOption = (option) => {
    setSelectedSubjectOption(option);
    setIsSubjectDropdownOpen(false);
  };
  const clearSubjectSelection = () => setSelectedSubjectOption(null);


  const toggleGeneralEnglishDropdown = () => setIsGeneralEnglishOpen(!isGeneralEnglishOpen);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handleButtonClick = () => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    setShowDatePicker(!showDatePicker);
  };

  const handleSingleDateChange = (date) => {
    setTempStartDate(date);
    setTempEndDate(null);
  };

  const handleRangeDateChange = (dates) => {
    const [start, end] = dates;
    setTempStartDate(start);
    setTempEndDate(end);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleToggle = () => {
    setIsRange(!isRange);
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleApply = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    setShowDatePicker(false);
  };




  const [lessonTimeState, setLessonTimeState] = useState(0);
  const [BranchState, setBranchState] = useState(0);
  const [SubjectState, setSubjectState] = useState(0);
  const [LessonTypeState, setLessonTypeState] = useState(0);
  const [FormState, setFormState] = useState(0);
  const [XuyOdinState, setXuyOdinState] = useState(0);
  const [XuyDvaState, setXuyDvaState] = useState(0);
  const [XuyTriState, setXuyTriState] = useState(0);
  const [XuyChetireState, setXuyChetireState] = useState(0);

  const resetAll = () => {
    setLessonTimeState(false);
    setBranchState(false);
    setSubjectState(false);
    setFormState(false);
  };

  // General click handler
  const handleClick = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const handleClickSecond = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const SubjectClick = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const HandleLessonType = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const handleLessonForm = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const PidorOdin = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const PidorDwa = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const PidorTri = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  const PidorChetire = (setState) => {
    setState(prevState => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      return 1;
    });
  };

  // Get button text based on state
  const getButtonText = (state) => {
    switch (state) {
      case 1:
        return 'Room';
      case 2:
        return 'Option 2';
      case 3:
        return 'Option 3';
      default:
        return 'Sobject';
    }
  };

  const searchContainerRef = useRef(null);


  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [expanded]);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdownMenu = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const [openDropdownIndex2, setOpenDropdownIndex2] = useState(null);

  const toggleDropdownMenu2 = (index) => {
    setOpenDropdownIndex2(openDropdownIndex === index ? null : index);
    setIsOpenModal(!isOpenModal);
    setMenuStatus(1)
  };



  const [loadingActive, setLoadingActive] = useState(false)
  const [products, setProducts] = useState([]);
  const [leads, setLeads] = useState([]);
  const [leadId, setLeadId] = useState(null);

  const storedToken = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const getLead = async () => {
    setLoadingActive(true)
    try {
      const response = await axios.get("http://192.168.192.254:8000/api/v1/lead/lead/", {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setLeads(response.data.results);
      console.log(response.status, response.data, "Lead");
      setLoadingActive(false)
    } catch (err) {
      console.error(err);
    }
  };

  const getTable = async () => {
    setLoadingActive(true);
    try {
      const response = await axios.get('http://192.168.192.254:8000/api/v1/lead/application/', {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setProducts(response.data.results);
      console.log(response.status, response.data, "Application");
    } catch (err) {
      console.error(err);
      console.log("erroeee");

    } finally {
      setLoadingActive(false);
    }
  };
  const postLead = async () => {
    // setLoadingActive(true)
    // try {
    //   const { data } = await axios.post("https://api.quickhub.uz/api/lead/transfer-applications-to-lead/", {
    //     application_ids: selectId,
    //     created_by: userId
    //   }, {
    //     headers: {
    //       'Authorization': `Token ${storedToken}`,
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   console.log(data, "post");
    //   setLoadingActive(false)
    //   getTable()
    //   getLead()
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const deleteAplicateon = async () => {
    // try {
    //   const { data } = await axios.delete(`https://api.quickhub.uz/api/lead/applicants/${changeId}`, {
    //     headers: {
    //       'Authorization': `Token ${storedToken}`,
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   getTable()
    //   console.log(data, "Aplication delete");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  useEffect(() => {
    getTable();
    getLead()
  }, []);

  const [rowClick, setRowClick] = useState(true);
  const [selectId, setSelectId] = useState([]);
  const [changeId, setChangeId] = useState();

  const handleIdClick = (id) => {
    setSelectId([id])
    setChangeId(id)
  };

  const handleRowClick = () => {
    setShowButtons(prevState => !prevState);
  };

  const handleSelectionChange = (e) => {
    const mainCheckboxClicked = e.value.length !== selectedProducts.length;
    setSelectedProducts(e.value);
    setShowButtons(mainCheckboxClicked && e.value.length > 0);
    setSelectId(e.value.map(item => item.id))
    console.log(selectId);
    console.log(e.value.map(item => item.id));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await products.setProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  const [active, setActive] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  useEffect(() => {
    // Обновляем showButtons при изменении состояния выбора продуктов
    setShowButtons(active && (selectedProducts.length > 0 || selectAll));
  }, [selectedProducts, selectAll]);

  useEffect(() => {
    setShowButtons(active && (selectedItems.length > 0 || selectAll));
  }, [active, selectedItems, selectAll]);

  const handleOpenModal = () => {
    setShowModal(true);
    setShowSecMake(false); // Закрыть SecMake, если он открыт

  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSecMake(false);
  };

  const handleYesModal = () => {
    setShowModal(false);
    setShowSecMake(true); // Открыть SecMake
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    setShowSeconDel(true);
    deleteAplicateon()
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModalOnOff = () => {
    setIsOpenModal(!isOpenModal);
  };

  const [newLeadModal, setNewLeadModal] = useState(false);
  const handlePageChangeTable = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChangeTable(pageNumber);
    }
  };

  const items = [
    {
      label: "Make a lead",
      icon: <BsCheck2Circle />,
      command: handleOpenModal, // Присвоение функции обработчика
      className: "menu-item-lead",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: handleDeleteClick, // Присвоение функции обработчика
      className: "menu-item-delete",
    },
  ];

  const [showSecMake, setShowSecMake] = useState(false);
  const [showSeconDel, setShowSeconDel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isStudentModalVisible, setStudentModalVisibility] = useState(false);
  const [isStudentModalVisibleSecond, setStudentModalVisibilitySecond] = useState(false);
  const [isStudentModalVisibleDel, setStudentModalVisibilityDel] = useState(false);
  const rowsPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(products.length / rowsPerPage);
  const [isDropdownOpen, setIsOpenDownOpen] = useState(false);

  useEffect(() => {
    if (showSecMake) {
      const timer = setTimeout(() => {
        setShowSecMake(false);
      }, 1000); // 2 секунды

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [showSecMake]);

  useEffect(() => {
    if (showSeconDel) {
      const timer = setTimeout(() => {
        setShowSeconDel(false);
      }, 1000); // 2 секунды

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [showSeconDel]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleResetDates = (event) => {
    event.stopPropagation(); // Чтобы не вызывать handleButtonClick при нажатии на X
    setStartDate(null);
    setEndDate(null);
  };

  // Функция для переключения видимости выпадающего списка
  const toggleDropdownTeacher = () => {
    setDropdownVisible(prev => !prev);
  };

  const handleOpenStudentModal = () => {
    setStudentModalVisibility(true);
  };

  const handleCloseStudentModalSecond = () => {
    setStudentModalVisibilitySecond(false);
    setIsOpenDownOpen(false); // Close the dropdown
  };

  const handleOpenStudentModalSecond = () => {
    setStudentModalVisibilitySecond(true);
    setIsOpenDownOpen(false); // Close the dropdown
  };

  const handleCloseStudentModalDelete = () => {
    setStudentModalVisibilityDel(false);
    setIsOpenDownOpen(false); // Close the dropdown
  };

  const handleOpenStudentModalDelete = () => {
    setStudentModalVisibilityDel(true);
    setIsOpenDownOpen(false); // Close the dropdown
  };

  const handleCloseStudentModal = () => {
    setStudentModalVisibility(false);
  };

  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return products.slice(startIndex, endIndex);
  };

  const renderFilters = () => {
    if (active) {
      // Return filters for Applications
      return (
        <div className="filtersLead">
          <div className="LeadXuyDataButton">
            <div className="LeadRoomFilter">
              <button
                id="XuynyaebanayaLead"
                className={`button-state-${XuyOdinState}`}
                onClick={() => PidorOdin(setXuyOdinState)}
              >
                <p>Date</p>
                <span>
                  {XuyOdinState === 1 && <IoIosArrowDown />}
                  {XuyOdinState === 2 && <IoIosArrowUp />}
                  {XuyOdinState === 3 && <AiOutlineCloseCircle />}
                  {XuyOdinState !== 1 && XuyOdinState !== 2 && XuyOdinState !== 3 && <IoIosArrowDown />}
                </span>
              </button>
            </div>
          </div>
          <div className="LeadSubjectSecondButton">
            <div className="LeadRoomFilter">
              <button
                id="XuynyaebanayaLead"
                className={`button-state-${XuyDvaState}`}
                onClick={() => PidorDwa(setXuyDvaState)}
              >
                <p>Subject</p>
                <span>
                  {XuyDvaState === 1 && <IoIosArrowDown />}
                  {XuyDvaState === 2 && <IoIosArrowUp />}
                  {XuyDvaState === 3 && <AiOutlineCloseCircle />}
                  {XuyDvaState !== 1 && XuyDvaState !== 2 && XuyDvaState !== 3 && <IoIosArrowDown />}
                </span>
              </button>
            </div>
          </div>
          <div className="LeadLessonTypeButton">
            <div className="LeadRoomFilter">
              <button
                id="XuynyaebanayaLead"
                className={`button-state-${XuyTriState}`}
                onClick={() => PidorTri(setXuyTriState)}
              >
                <p>Lesson type</p>
                <span>
                  {XuyTriState === 1 && <IoIosArrowDown />}
                  {XuyTriState === 2 && <IoIosArrowUp />}
                  {XuyTriState === 3 && <AiOutlineCloseCircle />}
                  {XuyTriState !== 1 && XuyTriState !== 2 && XuyTriState !== 3 && <IoIosArrowDown />}
                </span>
              </button>
            </div>
          </div>
          <div className="LeadSourceButton">
            <div className="LeadRoomFilter">
              <button
                id="XuynyaebanayaLead"
                className={`button-state-${XuyChetireState}`}
                onClick={() => PidorChetire(setXuyChetireState)}
              >
                <p>Application source</p>
                <span>
                  {XuyChetireState === 1 && <IoIosArrowDown />}
                  {XuyChetireState === 2 && <IoIosArrowUp />}
                  {XuyChetireState === 3 && <AiOutlineCloseCircle />}
                  {XuyChetireState !== 1 && XuyChetireState !== 2 && XuyChetireState !== 3 && <IoIosArrowDown />}
                </span>
              </button>
            </div>
          </div>
          <div className="LeadReset">
            <button onClick={resetAll}><VscDebugRestart /></button>
          </div>
        </div>
      );
    } else {
      // Return filters for Leads
      return (
        <div className="filtersLead">
          <div className="LeadDateButton_Box">
            <button className="LeadDateButton" onClick={handleButtonClick}>
              <p>
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : startDate
                    ? formatDate(startDate)
                    : "Added date"}
              </p>
              <span>
                {startDate || endDate ? (
                  <FaTimes onClick={handleResetDates} />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </button>
            {showDatePicker && (
              <div
                className="datepicker-container"
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
                  <button className="cancel-button-lead-filter" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="apply-button-lead-filter" onClick={handleApply}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="LeadRoomButton">
            <div className="LeadRoomFilter">
              <FilterButton
                selectedOption={selectedOptions.Room}
                toggleDropdown={() => toggleуDropdown("Room")}
                isDropdownOpen={dropdownStates.Room}
                selectOption={(option) => selectOption("Room", option)}
                options={["201", "202", "203", "204"]}
                defaultLabel="Room"
              />
            </div>
          </div>
          <div className="LeadRoomButton">
            <div className="LeadRoomFilter">
              <FilterButton
                selectedOption={selectedOptions.Branch}
                toggleDropdown={() => toggleуDropdown("Branch")}
                isDropdownOpen={dropdownStates.Branch}
                selectOption={(option) => selectOption("Branch", option)}
                options={["Main", "Tashkent", "Buxoro", "Samarkand"]}
                defaultLabel="Branch"
              />
            </div>
          </div>
          <div className="teacherLeadButton">
            <div className="LeadRoomFilter">
              <FilterButton
                selectedOption={selectedOptions.status}
                toggleDropdown={() => toggleуDropdown("status")}
                isDropdownOpen={dropdownStates.status}
                selectOption={(option) => selectOption("status", option)}
                options={["Mr. Ali", "Mr. Islom", "Mr. Akbar", "Mr. Murod"]}
                defaultLabel="Teacher"
              />
            </div>
          </div>
          <div className="LeadRoomButton">
            <div className="LeadRoomFilter">
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
            </div>
          </div>
          <div className="LeadRoomButton">
            <div className="LeadRoomFilter">
              <FilterButton
                selectedOption={selectedOptions.Type}
                toggleDropdown={() => toggleуDropdown("Type")}
                isDropdownOpen={dropdownStates.Type}
                selectOption={(option) => selectOption("Type", option)}
                options={["Group Type", "Individual Type"]}
                defaultLabel="Lesson type"
              />
            </div>
          </div>
          <div className="LeadRoomButton">
            <div className="LeadRoomFilter">
              <FilterButton
                selectedOption={selectedOptions.Lead}
                toggleDropdown={() => toggleуDropdown("Lead")}
                isDropdownOpen={dropdownStates.Lead}
                selectOption={(option) => selectOption("Lead", option)}
                options={["New leads", "Contacted", "Trial lesson", "Summary"]}
                defaultLabel="Lead from"
              />
            </div>
          </div>
          <div className="LeadReset">
            <button onClick={resetAll}><VscDebugRestart /></button>
          </div>
        </div>
      );
    }
  };

  const content = !active ? (
    <div className="LeadsMain">
      {newLeadModal && (
        <>
          {/* Overlay */}
          <div
            className="modal-overlay"
            onClick={() => setNewLeadModal(false)}
          ></div>

          {/* Modal */}
          <NewLeadModal
            setNewLeadModal={setNewLeadModal}
            getLead={getLead}
            getTable={getTable}
          />
        </>
      )}
      {leads.map((lead, index) => (
        <div className="LeadsMain_table" key={lead.id}>
          <button className="topBtn">{lead.name}</button>
          <div className="LeadsMain_table_lists">
            {loadingActive ? (
              <Loading />
            ) : lead.lead_shu?.length > 0 ? (
              lead.lead_shu.map((leadItem) => (
                <div className="LeadsMain_table_list" key={leadItem.id}>
                  {openDropdownIndex2 === leadItem.id && isOpenModal && (
                    <>
                      {/* Overlay */}
                      <div
                        className="modal-overlay"
                        onClick={closeModalOnOff}
                      ></div>

                      {/* Modal */}
                      <LeadCard closeModal={closeModalOnOff} leadValues={leadItem} menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
                    </>
                  )}

                  <div className="LeadsMain_table_list_top">
                    <p>
                      {leadItem.name || "Tanlanmagan"} {leadItem.last_name || "Tanlanmagan"}
                    </p>

                    <div className="dropdownLeadsMain">
                      <button onClick={() => toggleDropdownMenu(leadItem.id)} className="dropdown-button">
                        <RiMoreFill />
                      </button>
                      {openDropdownIndex === leadItem.id && (
                        <>
                          <div className="modal-overlay profilOverlyModal" onClick={() => setOpenDropdownIndex(null)}></div>
                          <div className="dropdown-menu">
                            <Link to={`/student-page/${leadItem.id}`}>
                              <button
                                className="dropdown-item blue-dropduwn"
                                onClick={() => setOpenDropdownIndex(null)}
                              >
                                <span>
                                  <RiShareBoxLine />
                                </span>
                                <h5>Open customer page</h5>
                              </button>
                            </Link>

                            <button
                              className="dropdown-item blue-dropduwn"
                              onClick={() => {
                                handleOpenStudentModal();
                                setOpenDropdownIndex(null);
                              }}
                            >
                              <span>
                                <TbUserPlus />
                              </span>
                              <h5>Make a student</h5>
                            </button>

                            <button
                              className="dropdown-item blue-dropduwn"
                              onClick={() => {
                                toggleModal();
                                setOpenDropdownIndex(null);
                                setMenuStatus(2)
                              }}
                            >
                              <span>
                                <TbSend />
                              </span>
                              <h5>Send SMS</h5>
                            </button>

                            <button
                              className="dropdown-item red-dropdown"
                              onClick={() => {
                                handleOpenStudentModalSecond();
                                setOpenDropdownIndex(null);
                              }}
                            >
                              <span style={{ color: "#F7685B" }}>
                                <LuFolderDown />
                              </span>
                              <h5 style={{ color: "#F7685B" }}>Remove from board</h5>
                            </button>

                            <button
                              className="dropdown-item red-dropdown"
                              onClick={() => {
                                handleOpenStudentModalDelete();
                                setOpenDropdownIndex(null);
                                setLeadId(leadItem.id);
                              }}
                            >
                              <span style={{ color: "#F7685B" }}>
                                <RiDeleteBin5Line />
                              </span>
                              <h5 style={{ color: "#F7685B" }}>Delete customer</h5>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="LeadsMain_table_list_phone">
                    <p>{leadItem.phone_number || "Tanlanmagan"}</p>
                  </div>

                  <div className="LeadsMain_table_list_menu" onClick={() => toggleDropdownMenu2(leadItem.id)}>
                    <div>
                      <button>
                        <SlGraduation />
                        {leadItem.course?.name || "Tanlanmagan"}
                      </button>
                      <button>
                        <Icons.tvKan />
                        Type: {leadItem.lesson_type || "Tanlanmagan"}
                      </button>
                      <button>
                        <img
                          // src={leadItem.created_by?.image || "default-image.png"}
                          alt={leadItem.created_by?.username || "Tanlanmagan"}
                          style={{ borderRadius: "50%" }}
                        />
                        {/* {leadItem.created_by?.username || "Tanlanmagan"} */}
                        {leadItem.name || "Tanlanmagan"}
                      </button>
                    </div>
                    <div>
                      <button>
                        <RiLinkUnlinkM />
                        {leadItem.lead_source || "Tanlanmagan"}
                      </button>
                      <button>
                        <Icons.leadDate />
                        {leadItem.date ? new Date(leadItem.date).toLocaleDateString() : "Tanlanmagan"}
                      </button>
                      <button>
                        <Icons.arlamClock />
                        {leadItem.lesson_time ? `${leadItem.lesson_time.slice(0, 2)}:${leadItem.lesson_time.slice(2)}` : "Tanlanmagan"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No leads available</p>
            )}
          </div>
        </div>
      ))}
      {isStudentModalVisibleDel && (
        <>
          <div className="modal-overlay" onClick={() => setStudentModalVisibilityDel(false)}></div>
          <DeleteCard onClose={handleCloseStudentModalDelete} itemId={leadId} getLead={getLead} />
        </>
      )}

      {isStudentModalVisibleSecond && (
        <>
          <div className="modal-overlay" onClick={() => setStudentModalVisibilitySecond(false)}></div>
          <RemuveCard onClose={handleCloseStudentModalSecond} />
        </>
      )}

      {isStudentModalVisible && (
        <>
          <div className="modal-overlay" onClick={() => setStudentModalVisibility(false)}></div>
          <MakeaStudent onClose={handleCloseStudentModal} />
        </>
      )}

    </div>
  ) : null

  return (
    <div className="LeadsBox">
      <div className="LeadsNav">
        <div className="LeadsNav_chill">
          <div className="CourseLevelHeaderToggles">
            <Link
              to="/leads"
              id="LeadsBar"
              onClick={handleLeadsClick}
              className={!active ? "activeLeadsBar" : ""}
            >

              Leads

            </Link>
            <Link
              to="applications"
              id="ApplicationBar"
              onClick={handleApplicationsClick}
              className={active ? "active" : ""}
            >

              Applications
            </Link>
          </div>

          <div className="LeadsNav_chill_menuBar">
            <div
              onClick={toggleExpand}
              ref={searchContainerRef}
              className={`search-container ${expanded ? 'expanded' : ''}`}
            >
              <span className="search">
                <IoSearchSharp className={`search-icon ${expanded ? 'fade-out' : ''}`} />
              </span>
              {expanded && (
                <div className="XXXtenta">
                  <span id="XXXSpan"><IoSearchSharp /></span>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type something..."
                    autoFocus
                  />
                </div>
              )}
            </div>
            <button
              className="filter"
              onClick={() => setIsOpenFilter(!isOpenFilter)}
            >
              <TbFilter />
              <p>{isOpenFilter ? "Close filters" : "Filters"}</p>
            </button>
            {!active && (
              <button
                onClick={() => setNewLeadModal(!newLeadModal)}
                className="creted"
              >
                <FiUser />
                <p>New lead</p>
              </button>
            )}
            {showButtons && (
              <div className="ShowButtons">
                <button className="Make" onClick={handleOpenModal}>
                  <IoMdCheckmarkCircleOutline />
                  Make a lead
                </button>
                <button className="Delete" onClick={handleDeleteClick}>
                  <RiDeleteBin6Line />
                  Delete
                </button>
              </div>
            )}
            {showDeleteModal && (
              <DeleteModal
                onCancel={handleDeleteCancel}
                onDelete={handleDeleteConfirm}
                deleteAplicateon={deleteAplicateon}
              />
            )}

            {showSeconDel && (
              <SeconDel onClose={handleCloseModal} />
            )}

            {showModal && (
              <ModalMake onClose={handleCloseModal} onYes={handleYesModal} postLead={postLead}>
              </ModalMake>
            )}

            {showSecMake && (
              <SecMake onClose={handleCloseModal} />
            )}
          </div>
        </div>
        {isOpenFilter && renderFilters()}
      </div>
      <div className="LeadsContent">{content}</div>
      <Routes>
        <Route path="applications" element={<div className="LeadsTable">
          {loadingActive ? <Loading /> :
            <DataTable
              onClick={e => handleRowClick(e)}
              value={getPaginatedData()}
              selectionMode={rowClick ? null : 'checkbox'}
              selection={selectedProducts}
              onSelectionChange={handleSelectionChange}
              dataKey="id"
              tableStyle={{ minWidth: '50rem' }}
            >
              <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
              <Column field="id" header="#" style={{ width: "32px", textAlign: "center" }} />
              <Column field="formatted_date" header="Date" style={{ width: "71px" }} className="AplicationData" />
              <Column field="first_name" header="Name" style={{ width: "120px" }} />
              <Column field="phone_number" header="Phone number" style={{ width: "155px" }} />
              <Column field="subject_type" header="Subject type" style={{ width: "141px" }} />
              <Column field="lesson_type" header="Lesson type" style={{ width: "121px" }} />
              <Column field="application_source" header="Application source" style={{ width: "165px" }} />
              <Column
                header=""
                body={(rowData) => (
                  <Button
                    icon="pi pi-ellipsis-v"
                    className="p-button-text"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents row click handler from being triggered
                      menu.current.toggle(e);
                      handleIdClick(rowData.id)
                    }}
                  />
                )}
                style={{ width: "10px", borderRadius: "0 5px 5px 0" }}
              />
            </DataTable>
          }

          <Menu model={items} popup ref={menu} className="p-menu" />

          <div className="TablePaginator">
            <div className="TablePaginatorSelected">
              {selectedProducts.length > 0 && (<p>Selected: {selectedProducts.length}</p>)}
            </div>
            <div className="TablePaginatorButtons">
              {currentPage > 1 && (
                <button
                  className="TablePaginatorButtonsNextPage"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <Icons.leftArrow /> Previous page
                </button>
              )}
              {currentPage === 1 && (
                <div className="" style={{ width: "140px" }}></div>
              )}
              <div className="TablePaginatorNumberButtons">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`TablePaginatorNumberButtonMini ${index + 1 === currentPage
                      ? "TablePaginatorNumberButtonActive"
                      : ""
                      }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className="TablePaginatorButtonsNextPage"
                onClick={() => handlePageChange(currentPage + 1)}
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
        </div>} />
      </Routes>
    </div>
  );
};

export default Leads;

// Add CSS for selected row
const styles = `
          .selected-row {
            background - color: #E4F4FD !important;
          color: #005EEB !important; // Optional: change text color for better contrast
  }
          .selected-row td {
            color: #005EEB !important;   
}
          .selected-row .p-button.p-button-icon-only  {
            color: #005EEB !important;  
  }
          .selected-row tr td span  {
            color: #005EEB !important;  
  }
          `;

// Inject CSS styles into the document head
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

