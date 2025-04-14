import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { LuPlayCircle, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Icons } from "../../Assets/icons/icons";
import { HiDotsVertical } from "react-icons/hi";
import ClientSendSmsModal from "../ClientComponents/ClientModals/ClientSendSmsModal";
import ChangeStatusModal from "../ClientComponents/ClientModals/ChangeStatusModal";
import ArchiveTableModal from "../ClientComponents/ClientModals/ArchiveTableModal";
import EditTableModal from "./GroupModal/EditTableModal";
import Loading from "../../Pages/Loading";
import ArchiveTableModalGroup from "./GroupModal/ArchiveTableModalGroup";
import GroupIndividualSendSmsModal from "./GroupModal/GroupIndividualSendSmsModal";

export default function IndividualGroupTable({
  Groups,
  setGroups,
  selectAll,
  setSelectAll,
  activeRows,
  setActiveRows,
  loadingIndividual,
  getIndividual,
  getArchive
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(30);
  const [archiveId, setArchiveId] = useState(null);

  useEffect(() => {
    setSelectAll(activeRows.length === Groups.length);
  }, [activeRows, Groups.length]);

  const handleSelectAllChange = () => {
    const newActiveRows = isAllSelected
      ? []
      : Groups.map((group) => group.id); // Выбираем или снимаем выбор со всех
    setActiveRows(newActiveRows);
    setSelectAll(newActiveRows.length === Groups.length); // Обновляем состояние главного чекбокса
  };

  // Эта переменная должна определяться на основе activeRows
  const isAllSelected = activeRows.length === Groups.length; // Главный чекбокс активен, если все выбраны
  const isAnySelected = activeRows.length > 0;

  const handleRowCheckboxChange = (event, groupId) => {
    event.stopPropagation();
    const updatedActiveRows = activeRows.includes(groupId)
      ? activeRows.filter((id) => id !== groupId)
      : [...activeRows, groupId];
    setActiveRows(updatedActiveRows);
  };

  const handleRowClick = (groupId) => {
    handleRowCheckboxChange({ stopPropagation: () => { } }, groupId);
  };

  const [isOpen, setIsOpen] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const totalPages = Math.ceil(Groups.length / rowsPerPage);
  const itemsPerPage = 30;

  const handlePageChange = (page) => {
    if (page === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (page === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
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

  const handleDropdownToggle = (clientId) => {
    setIsOpen((prev) => (prev === clientId ? null : clientId));
  };

  const DropdownMenu = ({ clientId }) =>
    isOpen === clientId && (
      <div className=" dropdown-menu-table-action">
        <button
          style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            setEditTable(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.editTable />
          </span>
          <h5>Edit</h5>
        </button>
        <button
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            SetsendSms(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.sendSms />
          </span>
          <h5>Send sms</h5>
        </button>
        <button
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            setChangeStatus(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.chekCircle />
          </span>
          <h5>Change status</h5>
        </button>
        <button
          className="dropdown-item red-dropdown"
          onClick={() => {
            setArchiveModalQuest(true);
            setIsOpen(false);
            setArchiveId(clientId);
          }}
          style={{
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          <span style={{ color: "#F7685B" }}>
            <Icons.archiveRed />
          </span>
          <h5 style={{ color: "#F7685B" }}> Archive</h5>
        </button>
      </div>
    );

  const displayedClients = Groups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [sendSms, SetsendSms] = useState(false);
  const [ChangeStatus, setChangeStatus] = useState(false);
  const [ArchiveModalQuest, setArchiveModalQuest] = useState(false);
  const [editTable, setEditTable] = useState(false);

  function calculateAge(birthdayString) {
    // Tug'ilgan sanani "YYYY-MM-DD" formatida olish
    const birthday = new Date(birthdayString);
    // Hozirgi vaqtni olish
    const today = new Date();
    // Yoshni hisoblash
    let age = today.getFullYear() - birthday.getFullYear();
    // Agar tug'ilgan kun hali bu yil nishonlanmagan bo'lsa, yoshni 1 yil kamaytiramiz
    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }


  return (
    <div className="CliensTables">
      <GroupIndividualSendSmsModal sendSms={sendSms} SetsendSms={SetsendSms} />
      <ArchiveTableModalGroup
        ArchiveModalQuest={ArchiveModalQuest}
        setArchiveModalQuest={setArchiveModalQuest}
        archiveId={archiveId}
        getActive={getIndividual}
        getArchive={getArchive}
      />
      {/* <ChangeStatusModal
          ChangeStatus={ChangeStatus}
          setChangeStatus={setChangeStatus}
        /> */}
      {/* <EditTableModal editTable={editTable} setEditTable={setEditTable} /> */}
      <div className="GlavTable scale">
        <span className="GlavTablCheckSpan">
          <Checkbox
            checked={isAnySelected}
            onChange={handleSelectAllChange}
          ></Checkbox>
        </span>
        <span
          className="tableHeaderTitles"
          style={{
            width: "25px",
            height: "32px",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            #
          </p>
        </span>
        <span
          className="tableHeaderTitles"
          style={{
            width: "74px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ width: "20px" }}>Id</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "137px" }}>
          <p>Name</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "101px" }}>
          <p>Points</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "142px" }}>
          <p>Course</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "126px" }}>
          <p>Teacher</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "91px" }}>
          <p>Days</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span className="tableHeaderTitles" style={{ width: "107px" }}>
          <p>Dates</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
        <span
          className="tableHeaderTitles"
          style={{ width: "97px", marginRight: "-0px" }}
        >
          <p>Room</p>
          <div
            className="chervon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiChevronUpDown />
          </div>
        </span>
      </div>
      <div className="ClientTable">

        {loadingIndividual ? (
          <div className="LoadingMainDiv">
            <Loading />
          </div>
        ) : (displayedClients.map((group, index) => (
          <div
            key={group.id}
            className={`GlavTable scale ${activeRows.includes(group.id) ? "ClientTableActive" : ""
              }`}
            onClick={() => handleRowClick(group.id)}
          >
            <span
              className="GlavTablCheckSpan"
              onClick={(e) => {
                e.stopPropagation(); // Остановите всплытие, чтобы не вызвать handleRowClick
                handleRowCheckboxChange(e, group.id);
              }}
            >
              <Checkbox
                checked={activeRows.includes(group.id)}
                onChange={(e) => handleRowCheckboxChange(e, group.id)}
              ></Checkbox>
              <readOnly />
            </span>
            <Link
              className="TerraNova"
              to={`/group-profil/${group.id}`}
            ></Link>
            <span className="Nomber">
              <p>{group.id}</p>
              <span style={{ color: "#2ED47A", marginTop: 5 }}>
                <LuPlayCircle />
              </span>
            </span>
            <span
              className="Id"
              style={{
                width: "64px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "14px", textAlign: "center" }}>
                {group.id}
              </p>
            </span>
            <span
              className="Name"
              style={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "145px",
              }}
            >
              <p className="Name_P">
                {group.name} {group.last_name}
                <Link
                  className={`linktoStudpage ${activeRows.includes(group.id) ? "viewLInkFlex" : ""
                    }`}
                  to={`/group-profil/${group.id}`}
                >
                  <span>
                    <CiShare1 />
                  </span>
                </Link>
              </p>
              <div className="chervon">
                <p style={{ fontSize: "10px" }}>{group.birthday ? calculateAge(group.birthday) : "0"} y.o ({group.birthday ? group.birthday : "Tanlanmagan"})</p>
              </div>
            </span>
            <span className="Points axuetzayoba" style={{ gap: "5px" }}>
              <b class="BStar">
                <FaStar />
              </b>
              <div className="chervon">
                <b style={{ fontSize: "12px", color: "#707683" }}>
                  {group.points}
                </b>
              </div>
            </span>
            <span
              className="Course"
              style={{
                width: "140px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "14px" }}>{group.course_daraja.name} </p>
              <div className="chervon">
                <p style={{ fontSize: "10px" }}>{group.course.name}</p>
              </div>
            </span>
            <span
              className="Teacher TeacherTableLink"
              style={{ width: "120px" }}
            >
              <p className="TeacherTableLinkTitle">
                {group.teacher === null ? "None" : group.teacher.first_name}
                <span className="">
                  <CiShare1 />
                </span>
              </p>
            </span>
            <span
              className="Days"
              style={{
                width: "90px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "14px" }}>{group.days}</p>
              <div className="chervon">
                <p style={{ fontSize: "10px" }}>{group.start_time}</p>
              </div>
            </span>
            <span
              className="Dates"
              style={{
                width: "107px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "14px" }}>{group.start_day}-</p>
              <div className="chervon">
                <p style={{ fontSize: "10px" }}>{group.end_day}</p>
              </div>
            </span>
            <span className="Room" style={{ width: "97px" }}>
              <p style={{ fontSize: "14px" }}>{group.room}</p>
              <p
                style={{
                  width: "auto",
                  color: "#C2CFE0",
                  fontSize: "18px",
                }}
                onClick={() => handleDropdownToggle(group.id)}
              >
                <HiDotsVertical />
              </p>
            </span>
            <DropdownMenu clientId={group.id} />
          </div>
        )))}
      </div>
      <div className="NavigationTool">
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
              <button className="TablePaginatorNumberButtonMini">...</button>
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
  );
}
