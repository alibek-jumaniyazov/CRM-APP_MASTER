import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { LuPlayCircle, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Icons } from "../../Assets/icons/icons";

export default function GroupProfilTable({ Groups }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [inputValue, setInputValue] = useState("");
  const totalPages = Math.ceil(Groups.length / rowsPerPage);

  const itemsPerPage = 10;

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

  const displayedClients = Groups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="CourseTable" style={{ width: "100%" }}>
      <div className="CliensTables">
        <div className="CourseTableTitle">
          <Icons.person />
          <p>Student information</p>
        </div>
        <div className="GlavTable scale">
          <span className="NomberHeaderTitles tableHeaderTitles">
            <p>#</p>
          </span>
          <span className="IdHeaderTitles tableHeaderTitles">
            <p>Id</p>
            <div className="chervon GlavTableChervonIcon">
              <HiChevronUpDown />
            </div>
          </span>
          <span
            className="tableHeaderTitles"
            style={{
              width: "170px",
            }}
          >
            <p style={{ marginLeft: "5px" }}>Group Name</p>
            <div className="chervon">
              <HiChevronUpDown />
            </div>
          </span>
          <span className="StatusHeaderTitles tableHeaderTitles">
            <p>Status</p>
            <div className="chervon GlavTableChervonIcon">
              <HiChevronUpDown />
            </div>
          </span>
          <span
            className="tableHeaderTitles"
            style={{
              fontSize: "12px",
              width: "126px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Current balance
            </p>
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
            style={{
              fontSize: "12px",
              width: "100px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Discount
            </p>
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
            style={{
              fontSize: "12px",
              width: "107px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Added date
            </p>
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
          <span className="PhoneHeaderTitles tableHeaderTitles">
            <p>Phone number</p>
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
        </div>
        <div className="ClientTable GroupProfileTableList">
          {Groups.map((group, index) => (
            <div key={group.id} className={"GlavTable scale"}>
              <span className="Nomber">
                <p>{group.number}</p>
              </span>
              <span className="Nomber">
                <p>{group.id}</p>
              </span>
              <span
                className="Name"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className="Name_P">
                  {group.name}
                </p>
              </span>
              <span className="Status" style={{ width: "50px" }}>
                <div className="statusWidth">
                  <span>{group.status}</span>
                </div>
              </span>
              <span
                className="Days"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "5px",
                  width: "115px",
                }}
              >
                <Icons.pilusCircle />
                <p style={{ fontSize: "14px" }}>{group.currentBalance}</p>
              </span>
              <span
                className="Days Discount"
              >
                <p ><Icons.discount /> {group.discount}</p>
              </span>
              <span
                className="Room"
                style={{ width: "97px", transform: "translateX(8px)" }}
              >
                <p style={{ fontSize: "14px" }}>{group.addData}</p>
                <p
                  style={{
                    width: "auto",
                    color: "#C2CFE0",
                    fontSize: "18px",
                  }}
                ></p>
              </span>
              <span
                className="Phone"
                style={{transform: "translateX(15px)" }}
              >
                <p>
                  {group.phone}
                </p>
              </span>
              <span className="Points axuetzayoba" style={{ gap: "5px", padding: "10px 0px" }}>
                <b className="BStar">
                  <FaStar />
                </b>
                <div className="chervon">
                  <b style={{ fontSize: "12px", color: "#707683" }}>
                    {group.points}
                  </b>
                </div>
              </span>
            </div>
          ))}
        </div>
        {/* <div className="NavigationTool">
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
        </div> */}
      </div>
    </div>
  );
}
