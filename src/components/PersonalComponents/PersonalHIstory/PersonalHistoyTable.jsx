import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import PersonalHistoyTableCard from "./PersonalHistoyTableCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function PersonalHistoyTable() {
  const [PersonalTable, setPersonalTable] = useState([
    {
      id: 1,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 2,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 3,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 4,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 5,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 6,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 7,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 8,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 9,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 10,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 11,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 12,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
    {
      id: 13,
      title: "John Anderson",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const totalPages = Math.ceil(PersonalTable.length / rowsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = PersonalTable.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="PersonalHistoyTable">
      <div className="PersonalHistoyTableHeader">
        <p className="PersonalHistoyTableHeaderTitle">Sms history</p>
        <div className="PersonalHistoyTableHeaderActions">
          <select name="Date" id="1">
            <option value="Date">Date</option>
          </select>
          <select name="Author" id="2">
            <option value="Author">Author</option>
          </select>
          <div className="">
            <Icons.search />
            <input type="text" placeholder="Search sms" />
          </div>
        </div>
      </div>
      <div className="PersonalHistoyTableCards">
        {currentItems.map((item) => (
          <PersonalHistoyTableCard key={item.id} item={item} />
        ))}
      </div>
      <div className="NavigationTool">
        <div className=""></div>
        <div className="TablePaginatorButtons">
          <button
            className="TablePaginatorButtonsNextPage"
            onClick={handlePreviousPage}
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
            onClick={handleNextPage}
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
