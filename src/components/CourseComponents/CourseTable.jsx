import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { LuPlayCircle, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Icons } from "../../Assets/icons/icons";

export default function CourseTable({ Groups, setGroups }) {
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

  // const displayedClients = Groups.flatMap(group => {
  //   // group - bu ichidagi har bir array
  //   return group.map(item => {
  //     // group ichidagi har bir elementga kerakli funksiyani qo'llash
  //     return item;  // yourFunction - bu siz ishlatmoqchi bo'lgan funksiya
  //   });
  // }).slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  const displayedClients = Groups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  console.log(displayedClients);


  return (
    <div className="CourseTable">
      <div className="CliensTables">
        <div className="CourseTableTitle">
          <Icons.student />
          <p>Groups</p>
        </div>
        <div className="GlavTable scale">
          <span
            className=" tableHeaderTitles"
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
                gap: "5px",
              }}
            >
              #
            </p>
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
          <span className="tableHeaderTitles" style={{ width: "90px" }}>
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
              Teacher
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
              width: "91px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Days
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
              Study dates
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
              width: "97px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Room
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
              width: "83px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "12px",
              }}
            >
              Students
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
        </div>
        <div className="ClientTable">
          {displayedClients.map((group, index) => (
            <div key={group.id} className={"GlavTable scale"} onClick={console.log(group)}>
              <span className="Nomber">
                <p>{group.id}</p>
                <span style={{ color: "#2ED47A", marginTop: 5 }}>
                  <LuPlayCircle />
                </span>
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
                  {group.group_name}
                  <Link className={"linktoStudpage"}>
                    <span>
                      <CiShare1 />
                    </span>
                  </Link>
                </p>
              </span>
              <span
                className="Points axuetzayoba"
                style={{ gap: "5px", marginRight: "10px" }}
              >
                <b>
                  <FaStar />
                </b>
                <div className="chervon">
                  <b style={{ fontSize: "12px", color: "#707683" }}>
                    {group.points}
                  </b>
                </div>
              </span>
              <span
                className="Teacher TeacherTableLink"
                style={{ width: "120px" }}
              >
                <p className="TeacherTableLinkTitle">
                  {group && group.teacher_fk_user && group.teacher_fk_user.first_name ? group.teacher_fk_user.first_name : <p>none</p>}
                  <span className="">
                    <CiShare1 />
                  </span>
                </p>
              </span>
              <span
                className="Days"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "91px",
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
                  width: "110px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ fontSize: "14px" }}>{group.start_day}</p>
                <div className="chervon">
                  <p style={{ fontSize: "10px" }}>{group.end_day}</p>
                </div>
              </span>
              <span
                className="Room"
                style={{ width: "97px", transform: "translateX(-8px)" }}
              >
                <p style={{ fontSize: "14px" }}>{group.room}</p>
                <p
                  style={{
                    width: "auto",
                    color: "#C2CFE0",
                    fontSize: "18px",
                  }}
                ></p>
              </span>
              <span
                className="Students"
                style={{ width: "98px", justifyContent: "space-between" }}
              >
                <p>
                  <LuUser />
                  12 {/* {group.countStudents} */}
                </p>
              </span>
            </div>
          ))}
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
    </div>
  );
}
