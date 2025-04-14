import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../components/GroupSendSms/GroupComponent.css";
import { LuUser } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuPlayCircle } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { CiShare1 } from "react-icons/ci";

export default function CourseLavelTable() {
    const [Groups, setGroups] = useState([
        {
          number: 11,
          countStudents: 12,
          id: "000001",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000002",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000003",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000004",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000005",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000006",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000007",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000008",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000009",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
        {
          number: 11,
          countStudents: 12,
          id: "000010",
          name: "Group name 48",
          age: "28 y.o",
          dob: "28.02.1996",
          points: "160 points",
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
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
  
    const handlePreviousPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prev) => prev + 1);
    };
  
    useEffect(() => {
      setSelectAll(activeRows.length === Groups.length);
    }, [activeRows, Groups.length]);
  
    const handleSelectAllChange = () => {
      if (selectAll) {
        setActiveRows([]);
      } else {
        setActiveRows(Groups.map((group) => group.id));
      }
    };
  
    const handleRowCheckboxChange = (event, groupId) => {
      event.stopPropagation();
      const updatedActiveRows = activeRows.includes(groupId)
        ? activeRows.filter((id) => id !== groupId)
        : [...activeRows, groupId];
      setActiveRows(updatedActiveRows);
    };
  
    const handleRowClick = (groupId) => {
      handleRowCheckboxChange({ stopPropagation: () => {} }, groupId);
    };
  
    const totalPages = Math.ceil(Groups.length / rowsPerPage);

  return (
    <div
    className="CliensTables"
    style={{
      border: "1px solid #C2CFE0",
      borderRadius: "14px",
      background: "#fff",
      overflow: "hidden",
      height: "100%",
    }}
  >
    <div
      className="GlavTable scale"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        borderBottom: "1px solid #C2CFE0",
        marginBottom: "4px",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "32px",
          height: "32px",
        }}
      ></span>
      <span
        className="Nomber"
        style={{
          fontSize: "12px",
          width: "15px",
          marginRight: "15px",
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "12px",
          }}
        >
          #
        </p>
      </span>
      <span
        className="Name"
        style={{
          width: "184px",
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "12px",
          }}
        >
          Group Name
        </p>
        <div
          className="chervon"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HiChevronUpDown />
        </div>
      </span>
      <span
        className="Points"
        style={{
          fontSize: "12px",
          width: "101px", 
          }}>
        <p
          style={{
            color: "black",
            fontSize: "12px",
          }}
        >
          Points
        </p>
        <div
          className="chervon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          <HiChevronUpDown />
        </div>
      </span>
      <span
        className="Teacher"
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
        className="Days"
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
        className="Dates"
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
        className="Room"
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
        className="Students"
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
    <div className="GroupTable">
      {Groups.map((group, index) => (
        <div
          key={group.id}
          className={`GlavTable scale ${
            activeRows.includes(group.id) ? "active" : ""
          }`}
          onClick={() => handleRowClick(group.id)}
          style={{
            width: "99%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            border: "1px solid #F8FAFC",
            borderRight: "none",
            borderLeft: "none",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "32px",
              height: "32px",
            }}
          ></span>
          <span className="Nomber">
            <p
              style={{
                fontSize: "14px",
                width: "15px",
                marginRight: "15px",
              }}
            >
              {group.number}
            </p>
          </span>
          <span
            className="Name"
            style={{
              width: "184px",
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#2ED47A", marginTop: 5 }}>
              <LuPlayCircle />
            </span>
            <p
              className="Name_P"
              style={{
                fontSize: "14px",
                display: "flex ",
                flexDirection: "row",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {group.name}
              <Link className="linktoStudpage" to={"/Student-Page"}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CiShare1 />
                </span>
              </Link>
            </p>
          </span>
          <span
            className="Points"
            style={{
              justifyContent: "flex-start",
              gap: "5px",
              width: "101px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#FFB946",
                width: "16px",
              }}
            >
              <FaStar />
            </p>
            <div className="chervon">
              <p style={{ fontSize: "12px", color: "#707683" }}>
                {group.points}
              </p>
            </div>
          </span>
          <span className="Teacher" style={{ width: "126px" }}>
            <p
              style={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                color: "#707683",
              }}
            >
              {group.teacher}
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
            <p style={{ fontSize: "14px" }}>{group.studyStartTime}</p>
            <div className="chervon">
              <p style={{ fontSize: "10px" }}>{group.studyTime}</p>
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
            <p style={{ fontSize: "14px" }}>{group.studyStart}</p>
            <div className="chervon">
              <p style={{ fontSize: "10px" }}>{group.studyEnd}</p>
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
            ></p>
          </span>
          <span className="Students" style={{ width: "83px" }}>
            <p
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <LuUser />
              {group.countStudents}
            </p>
            <p
              style={{
                width: "auto",
                color: "#C2CFE0",
                fontSize: "18px",
              }}
            >
              <HiDotsVertical />
            </p>
          </span>
        </div>
      ))}
    </div>
    <div
      className="NavigationTool"
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="Bottom_Button">
        <div className="Selected_button">
          <button
            className="Previus"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaAngleLeft /> Previous page
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              className="number_button"
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="Next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {" "}
            Next page <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
