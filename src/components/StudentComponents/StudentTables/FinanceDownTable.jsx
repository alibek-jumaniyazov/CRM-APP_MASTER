import React, { useState } from "react";
import {
  FaAngleUp,
  FaChevronDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import { Icons } from "../../../Assets/icons/icons";

export default function FinanceDownTable({
  activeRow,
  setActiveRow,
  renderDropdownContent,
  toggleDropdownSecond,
  getTransactionIconAndStyle,
}) {
  const [inputValue, setInputValue] = useState("");
  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Har bir sahifada ko'rsatiladigan elementlar soni

  // Misol ma'lumotlar
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    number: `1253045${index + 39}`,
    transactionType:
      index % 4 === 0
        ? "Lesson"
        : index % 3 === 0
        ? "Expenditure"
        : index % 2 === 0
        ? "Refund"
        : "Payment",
    amount: "+ 330 000 so’m",
    paymentMethod: "Payme",
    details: `TTS - 14:00 Mr.Aleksey`,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "06.05.2024",
  }));

  // Total pages calculation
  const totalPages = Math.ceil(
    data.filter((item) => filter === "All" || item.transactionType === filter)
      .length / itemsPerPage
  );

  // Pagination handlers
  const handlePageChange = (page) => {
    if (page === "prev") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else if (page === "next") {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    } else {
      setCurrentPage(page);
    }
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  // Get data for current page
  const paginatedData = data
    .filter((item) => filter === "All" || item.transactionType === filter)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Toggle dropdown
  const toggleDropdownThird = (rowIndex) => {
    setActiveRow(activeRow === rowIndex ? null : rowIndex);
  };

  return (
    <div className="stPage_FinanceDown">
      <div className="stPage_FinanceDownTitle">
        <div className="stPage_FinanceDownTitleLeft">
          <button
            className={`One ${filter === "All" ? "activeAll" : ""}`}
            onClick={() => setFilter("All")}
          >
            All Transactions
          </button>
          <button
            className={`Two ${filter === "Payment" ? "activePay" : ""}`}
            onClick={() => setFilter("Payment")}
          >
            Payments
          </button>
        </div>
        <div className="stPage_FinanceDownTitleRight">
          <div>
            <button
              className="Status"
              onClick={() => toggleDropdownSecond(setIsStatusOpen)}
            >
              <p>Status</p>
              <span>{isStatusOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
            </button>
            {isStatusOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">
                  <div className="BoxWW">
                    <span>
                      <FaRegCircleCheck />
                    </span>
                    <p>Successful</p>
                  </div>
                </button>
                <button className="dropdown-item">
                  <div className="BoxWWSec">
                    <span>
                      <IoCloseCircleOutline />
                    </span>
                    <p>Failed</p>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className="Transaction"
              onClick={() => toggleDropdownSecond(setIsTransactionOpen)}
            >
              <p>Transaction</p>
              <span>
                {isTransactionOpen ? <FaAngleUp /> : <FaChevronDown />}
              </span>
            </button>
            {isTransactionOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">
                  <div className="BoxWWPlus">
                    <span>
                      <LuPlusCircle />
                    </span>
                    <p>Payment</p>
                  </div>
                </button>
                <button className="dropdown-item">
                  <div className="BoxWWMinus">
                    <span>
                      <FiMinusCircle />
                    </span>
                    <p>Lesson</p>
                  </div>
                </button>
                <button className="dropdown-item">
                  <div className="BoxWWClose">
                    <span>
                      <IoCloseCircleOutline />
                    </span>
                    <p>Expenditure</p>
                  </div>
                </button>
                <button className="dropdown-item">
                  <div className="BoxWWSerMinus">
                    <span>
                      <FiMinusCircle />
                    </span>
                    <p>Refund</p>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className="Type"
              onClick={() => toggleDropdownSecond(setIsTypeOpen)}
            >
              <p>Type</p>
              <span>{isTypeOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
            </button>
            {isTypeOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">Cash</button>
                <button className="dropdown-item">Payme</button>
                <button className="dropdown-item">Click</button>
                <button className="dropdown-item">Terminal</button>
              </div>
            )}
          </div>
          <div>
            <button
              className="Date"
              onClick={() => toggleDropdownSecond(setIsDateOpen)}
            >
              <p>Date</p>
              <span>{isDateOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
            </button>
            {isDateOpen && <div className="dropdown-menu"></div>}
          </div>
          <div>
            <button
              className="Course"
              onClick={() => toggleDropdownSecond(setIsCourseOpen)}
            >
              <p>Course</p>
              <span>{isCourseOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
            </button>
            {isCourseOpen && (
              <div className="dropdown-menu ind">
                <button className="dropdown-item">
                  TTS - 14:00 Mr.Aleksey
                </button>
                <button className="dropdown-item">
                  TTS - 14:00 Mr.Aleksey
                </button>
                <button className="dropdown-item">
                  TTS - 14:00 Mr.Aleksey
                </button>
                <button className="dropdown-item">
                  TTS - 10:00 Mr.Alibek (individual)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="stPage_FinanceDownContant">
        <div className="TableUp">
          <div className="nom">
            <p>№</p>
          </div>
          <div className="ID">
            <p>ID</p>
            <span></span>
          </div>
          <div className="Transaction">
            <p>Transaction</p>
            <span></span>
          </div>
          <div className="Amount">
            <p>Amount</p>
            <span></span>
          </div>
          <div className="Type">
            <p>Type</p>
            <span></span>
          </div>
          <div className="Course">
            <p>Course</p>
            <span></span>
          </div>
          <div className="Comment">
            <p>Comment</p>
            <span></span>
          </div>
          <div className="Date">
            <p>Date</p>
            <span></span>
          </div>
        </div>
        <div className="TableDown">
          {paginatedData.map((item, rowIndex) => {
            const { icon, style } = getTransactionIconAndStyle(
              item.transactionType
            );
            const isActive = activeRow === rowIndex;

            return (
              <div key={rowIndex}>
                <div
                  className={`TableDownBox ${isActive ? "activeNet" : ""}`}
                  onClick={() => toggleDropdownThird(rowIndex)}
                >
                  <div className="First">
                    <div className="Number">
                      <p>{item.id.toString().padStart(2, "0")}</p>
                    </div>
                    <div className="NumberSecond">
                      <span>
                        <IoCloseCircleOutline />
                      </span>
                    </div>
                  </div>
                  <div className="Second">
                    <p>{item.number}</p>
                  </div>
                  <div className="Third">
                    <div className="ActiveWW" style={style}>
                      <span>{icon}</span>
                      <p>{item.transactionType}</p>
                    </div>
                  </div>
                  <div className="Four">
                    <p>{item.amount}</p>
                  </div>
                  <div className="Five">
                    <p>{item.paymentMethod}</p>
                  </div>
                  <div className="Six">
                    <p>{item.details}</p>
                  </div>
                  <div className="Seven">
                    <p>{item.description}</p>
                  </div>
                  <div className="Eight">{item.date}</div>
                  <div className="Nine">
                    <span>
                      <FaChevronDown />
                    </span>
                  </div>
                </div>
                {isActive && (
                  <div className="DropdownContentAZAZA">
                    {renderDropdownContent(item.transactionType)}
                  </div>
                )}
              </div>
            );
          })}
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
    </div>
  );
}
