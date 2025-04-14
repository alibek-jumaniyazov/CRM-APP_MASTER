import { Checkbox } from "antd";
import { CiShare1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import { HiChevronUpDown } from "react-icons/hi2";
import DeleteTableModal from "./ClientModals/DeleteTableModal";
import ArchiveTableModal from "./ClientModals/ArchiveTableModal";
import AddIsTableModal from "./ClientModals/AddIsTableModal";
import ClientSendSmsModal from "./ClientModals/ClientSendSmsModal";
import AddSalaryModal from "./ClientModals/AddSalaryModal";
import IndividualLesson from "./ClientModals/IndividualLesson";
import ChangeStatusModal from "./ClientModals/ChangeStatusModal";
import AddToGroupModal from "./ClientModals/AddToGroupModal";
import Loading from "../../Pages/Loading";
import calculateAge from "./calculateAge";
import ClientAllSendSmsModal from "./ClientModals/ClientAllSendSmsModal";

export default function AllStundentTable({
  clients,
  selectAll,
  setSelectAll,
  activeRows,
  setActiveRows,
  loadingActive,
  getActive,
  getArchive,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const [isOpen, setIsOpen] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [archiveId, setArchiveId] = useState(null);
  const [dropClient, setDropClient] = useState({});

  useEffect(() => {
    setSelectAll(activeRows.length > 0 && activeRows.length === clients.length);
  }, [activeRows, clients.length]);

  const handleRowCheckboxChange = (event, clientId) => {
    event.stopPropagation();
    const updatedActiveRows = activeRows.includes(clientId)
      ? activeRows.filter((id) => id !== clientId) // Убираем клиента
      : [...activeRows, clientId]; // Добавляем клиента

    setActiveRows(updatedActiveRows);

    // Проверяем, все ли строки выбраны
    setSelectAll(updatedActiveRows.length === clients.length);
  };

  const handleSelectAllChange = () => {
    const newActiveRows = isAllSelected
      ? []
      : clients.map((client) => client.id); // Выбираем или снимаем выбор со всех
    setActiveRows(newActiveRows);
    setSelectAll(newActiveRows.length === clients.length); // Обновляем состояние главного чекбокса
  };

  // Эта переменная должна определяться на основе activeRows
  const isAllSelected = activeRows.length === clients.length; // Главный чекбокс активен, если все выбраны
  const isAnySelected = activeRows.length > 0;

  const handleRowClick = (clientId) => {
    handleRowCheckboxChange({ stopPropagation: () => {} }, clientId);
  };

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

  const DropdownMenu = ({ clientId, client }) =>
    isOpen === clientId && (
      <div
        className=" dropdown-menu-table-action"
        onMouseDown={setDropClient(client)}
      >
        <Link to={`/student-page/${clientId}`}>
          <button
            style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
            className="dropdown-item blue-dropduwn"
            onClick={() => setIsOpen(null)}
          >
            <span>
              <Icons.openLink />
            </span>
            <h5>Open page</h5>
          </button>
        </Link>
        <button
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            setAddCustomerModalQuest(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.checkBlock />
          </span>
          <h5>Add as is</h5>
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
            SetAddSalary(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.coinsClient />
          </span>
          <h5>Add a payment</h5>
        </button>
        <button
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            setAddToGroupModal(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.addGroup />
          </span>
          <h5>Add to group</h5>
        </button>
        <button
          className="dropdown-item blue-dropduwn"
          onClick={() => {
            setIndividual(true);
            setIsOpen(false);
          }}
        >
          <span>
            <Icons.plusBlock />
          </span>
          <h5>Add an individual lesson</h5>
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
        >
          <span style={{ color: "#F7685B" }}>
            <Icons.archiveRed />
          </span>
          <h5 style={{ color: "#F7685B" }}> Archive</h5>
        </button>
        <button
          style={{
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
          className="dropdown-item red-dropdown"
          onClick={() => {
            setCustomerModalQuest(true);
            setIsOpen(false);
          }}
        >
          <span style={{ color: "#F7685B" }}>
            <Icons.deleteRed />
          </span>
          <h5 style={{ color: "#F7685B" }}>Delete</h5>
        </button>
      </div>
    );

  const displayedClients = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [customerModalQuest, setCustomerModalQuest] = useState(false);
  const [AddcustomerModalQuest, setAddCustomerModalQuest] = useState(false);
  const [ArchiveModalQuest, setArchiveModalQuest] = useState(false);
  const [sendSms, SetsendSms] = useState(false);
  const [addSalary, SetAddSalary] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [ChangeStatus, setChangeStatus] = useState(false);
  const [addToGroupModal, setAddToGroupModal] = useState(false);

  return (
    <div className="CliensTables">
      <DeleteTableModal
        customerModalQuest={customerModalQuest}
        setCustomerModalQuest={setCustomerModalQuest}
        dropClient={dropClient}
        getLoading={getActive}
        url={"https://api.quickhub.uz/api/client/all/"}
      />
      <ArchiveTableModal
        ArchiveModalQuest={ArchiveModalQuest}
        setArchiveModalQuest={setArchiveModalQuest}
        archiveId={archiveId}
        getActive={getActive}
        getArchive={getArchive}
      />
      <AddIsTableModal
        AddcustomerModalQuest={AddcustomerModalQuest}
        setAddCustomerModalQuest={setAddCustomerModalQuest}
      />

      <ClientAllSendSmsModal sendSms={sendSms} SetsendSms={SetsendSms} />

      <AddSalaryModal addSalary={addSalary} SetAddSalary={SetAddSalary} />

      <IndividualLesson individual={individual} setIndividual={setIndividual} />

      <ChangeStatusModal
        ChangeStatus={ChangeStatus}
        setChangeStatus={setChangeStatus}
        getActive={getActive}
        dropClient={dropClient}
      />

      <AddToGroupModal
        addToGroupModal={addToGroupModal}
        setAddToGroupModal={setAddToGroupModal}
      />

      <div className="GlavTable scale">
        <span className="GlavTablCheckSpan">
          <Checkbox
            checked={isAnySelected} // Главный чекбокс активируется, если хотя бы один чекбокс отмечен
            onChange={handleSelectAllChange}
          />
        </span>
        <span className="NomberHeaderTitles tableHeaderTitles">
          <p>#</p>
        </span>
        <span className="IdHeaderTitles tableHeaderTitles">
          <p>Id</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="NameHeaderTitles tableHeaderTitles">
          <p>Name</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="PointsHeaderTitles tableHeaderTitles">
          <p>Points</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="LessonHeaderTitles tableHeaderTitles">
          <p>Lesson</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="StatusHeaderTitles tableHeaderTitles">
          <p>Status</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="StudyHeaderTitles tableHeaderTitles">
          <p>Study date</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="PhoneHeaderTitles tableHeaderTitles">
          <p>Phone number</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
        <span className="BalanceHeaderTitles tableHeaderTitles">
          <p>Balance</p>
          <div className="chervon GlavTableChervonIcon">
            <HiChevronUpDown />
          </div>
        </span>
      </div>
      <div className="ClientTable">
        {loadingActive ? (
          <div className="LoadingMainDiv">
            <Loading />
          </div>
        ) : (
          displayedClients.map((client, index) => (
            <div
              key={client.id}
              className={`GlavTable scale ${
                activeRows.includes(client.id) ? "ClientTableActive" : ""
              }`}
            >
              <span
                className="GlavTablCheckSpan"
                onClick={(e) => {
                  e.stopPropagation(); // Остановите всплытие, чтобы не вызвать handleRowClick
                  handleRowCheckboxChange(e, client.id);
                }}
              >
                <Checkbox
                  checked={activeRows.includes(client.id)} // Проверка для чекбокса строки
                  onChange={(e) => handleRowCheckboxChange(e, client.id)}
                />
              </span>
              <Link
                className="TerraNova"
                to={`/student-page/${client.id}`}
              ></Link>
              <span className="Nomber">
                <p>{index + 1}</p>
              </span>
              <span className="Id">
                <p>{client.id}</p>
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
                  {client.first_name} {client.last_name}
                  <Link
                    className={`linktoStudpage ${
                      activeRows.includes(client.id) ? "viewLInkFlex" : ""
                    }`}
                  >
                    <span>
                      <CiShare1 />
                    </span>
                  </Link>
                </p>
                <div className="chervon">
                  <p style={{ fontSize: "10px" }}>
                    {calculateAge(client.birthday)} y.o ({client.birthday})
                  </p>
                </div>
              </span>
              <span className="Points axuetzayoba" style={{ gap: "5px" }}>
                <b className="BStar">
                  <FaStar />
                </b>
                <div className="chervon">
                  <b style={{ fontSize: "12px", color: "#707683" }}>
                    {client.point} points
                  </b>
                </div>
              </span>
              <span className="Lesson">
                <p>{client.grouppa.group_name}</p>
                <div className="chervon chervonText">
                  <p>
                    {client.grouppa.course.name}:
                    {client.grouppa.course.daraja.map((item) => item.name)}
                  </p>
                </div>
              </span>
              <span className="Status">
                <div
                  className={`statusWidth ${
                    client.status ? client.status : "none"
                  }Status`}
                >
                  <span>
                    {client.status
                      ? client.status.charAt(0).toUpperCase() +
                        client.status.slice(1).toLowerCase()
                      : "None"}
                  </span>
                </div>
              </span>
              <span className="Study">
                <p>{client.grouppa.start_day}</p>
                <div className="chervon chervonText">
                  <p>{client.grouppa.end_day}</p>
                </div>
              </span>
              <span className="Phone">
                <p>{client.phone_number}</p>
              </span>
              <span className="Balance">
                <p>
                  {/* {client.balance} */}
                  -180 000 so'm
                </p>

                <p onClick={() => handleDropdownToggle(client.id)}>
                  <HiDotsVertical />
                </p>
              </span>
              <DropdownMenu clientId={client.id} client={client} />
            </div>
          ))
        )}
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
                className={`TablePaginatorNumberButtonMini ${
                  currentPage === index + 1
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
