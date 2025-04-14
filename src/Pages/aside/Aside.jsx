import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Aside.css";
import logo from "../../Assets/LogoMain.png";
import profil from "../../Assets/teacher2.png";
import { IoChevronDownOutline, IoClipboardOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal, HiOutlineBookOpen } from "react-icons/hi";
import { RiPieChartLine } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { Icons } from "../../Assets/icons/icons";
import axios from "axios";

export default function Aside() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Функция для определения активной кнопки по текущему пути
  const getActiveButtonIndex = () => {
    switch (currentPath) {
      case "/":
        return 1;
      case "/leads":
        return 2;
      case "/leads/applications":
        return 2;
      case "/clients/all-students":
        return 3;
      case "/clients/customer-base":
        return 3;
      case "/clients/archive":
        return 3;
      case "/groups/active-groups":
        return 5;
      case "/groups/individuals":
        return 5;
      case "/groups/archive":
        return 5;
      case "/course":
        return 6;
      case "/personal/active-personnel":
        return 7;
      case "/personal/archive-personnel":
        return 7;
      case "/finance-page":
        return 8;
      case "/Reports/clients-report":
        return 9;
      case "/Reports/employees-report":
        return 9;
      case "/Reports/finance-report":
        return 9;
      case "/setting/profile":
        return 10;
      case "/setting/basic":
        return 10;
      case "/setting/sms":
        return 10;
      case "/setting/payment":
        return 10;
      case "/setting/check":
        return 10;
      case "/setting/members":
        return 10;
      case "/setting/billing":
        return 10;
      default:
        return null;
    }
  };

  // Устанавливаем начальное состояние активной кнопки
  const [activeButton, setActiveButton] = useState(getActiveButtonIndex());
  const [isDropMainVisible, setIsDropMainVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const storedToken = localStorage.getItem('token');

  const [loadingBranch, setLoadingBranch] = useState(false)
  const [branches, setBranches] = useState([])

  const getActive = async () => {
    setLoadingBranch(true)
    try {
      const { data } = await axios.get("http://185.180.230.50:8010/api/v1/student/", {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setBranches(data.results);
      setLoadingBranch(false)
      console.log(data ,"Branch");
      
    } catch (err) {
      console.error(err , "branch");
    }
  };
  useEffect(() => {
    getActive()
  }, [])

  // Обновляем активную кнопку при изменении пути
  useEffect(() => {
    setActiveButton(getActiveButtonIndex());
  }, [currentPath]);

  // Обрабатываем клик вне меню для его закрытия
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropMainVisible(false);
        setActiveButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsDropMainVisible(!isDropMainVisible);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleDropdownButtonClick = (branch, branchName) => {
    setSelectedBranch(branch);
    localStorage.setItem('branch', branchName);
  };

  return (
    <div className="Aside">
      <div className="MenuLeft" ref={menuRef}>
        <div className="MenuLeftLogo">
          <img src={logo} alt="Logo" />
        </div>
        <div style={{ position: 'relative' }}>
          <div className={`MenuLeftUser ${isDropMainVisible ? 'Xuyactive' : ''}`} onClick={handleToggleDropdown}>
            <div className="MenuLeftContant">
              <div className="MenuLeftUser-img">
                <img src={profil} alt="Profile" />
              </div>
              <div className="MenuLeftText">
                <h3>Main branch</h3>
                <p>Nukus city</p>
              </div>
            </div>
            <div className="MenuLefticon">
              <IoChevronDownOutline />
            </div>
          </div>
          {isDropMainVisible && (
            <div className="DropdownMenuMain" ref={dropdownRef}>
              {
                branches.map((item) => (
                  <button
                    onClick={() => handleDropdownButtonClick(`${item.name} branch`, item.name)}
                    className={selectedBranch === `${item.name} branch` ? "selected" : "DropdownMenuButton"}
                    key={item.id}
                  >
                    {selectedBranch === `${item.name} branch` && <span className="checkmark"><Icons.checkMain /></span>}
                    {item.name} branch
                  </button>
                ))
              }
            </div>
          )}
        </div>

        <div className="MenuLeftButtons">
          <Link to={"/"}>
            <div
              className={`MenuButton ${activeButton === 1 ? "active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              <div className="imgiconbox">
                <Icons.dashboard />
              </div>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to={"/leads"}>
            <div
              className={`MenuButton ${activeButton === 2 ? "active" : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              <div className="imgiconbox">
                <IoClipboardOutline />
              </div>
              <p>Leads</p>
            </div>
          </Link>
          <Link to={"/clients"}>
            <div
              className={`MenuButton ${activeButton === 3 ? "active" : ""}`}
              onClick={() => handleButtonClick(3)}
            >
              <div className="imgiconbox">
                <Icons.colorPersnon />
              </div>
              <p>Clients</p>
            </div>
          </Link>
          <Link to={"/groups"}>
            <div
              className={`MenuButton ${activeButton === 5 ? "active" : ""}`}
              onClick={() => handleButtonClick(5)}
            >
              <div className="imgiconbox">
                <Icons.groupIcon />
              </div>
              <p>Groups</p>
            </div>
          </Link>
          <Link to={"/course"}>
            <div
              className={`MenuButton ${activeButton === 6 ? "active" : ""}`}
              onClick={() => handleButtonClick(6)}
            >
              <div className="imgiconbox">
                <Icons.coursesIcon />
              </div>
              <p>Course</p>
            </div>
          </Link>
          <Link to={"/personal"}>
            <div
              className={`MenuButton ${activeButton === 7 ? "active" : ""}`}
              onClick={() => handleButtonClick(7)}
            >
              <div className="imgiconbox">
                <Icons.persnoalIcon />
              </div>
              <p>Personnel</p>
            </div>
          </Link>
          <Link to={"/finance-page"}>
            <div
              className={`MenuButton ${activeButton === 8 ? "active" : ""}`}
              onClick={() => handleButtonClick(8)}
            >
              <div className="imgiconbox">
                <Icons.financeIcon />
              </div>
              <p>Finance</p>
            </div>
          </Link>
          <Link to={"/Reports"}>
            <div
              className={`MenuButton ${activeButton === 9 ? "active" : ""}`}
              onClick={() => handleButtonClick(9)}
            >
              <div className="imgiconbox">
                <Icons.reportsIcon />
              </div>
              <p>Reports</p>
            </div>
          </Link>
        </div>
        <div className="MenuLeftButtons zayebalmenu">
          <Link to={"/setting"}>
            <div className="settongButtonBox">
              <div
                className={`MenuButton ${activeButton === 10 ? "active" : ""}`}
                onClick={() => handleButtonClick(10)}
              >
                <div className="imgiconbox">
                  <HiOutlineDotsHorizontal />
                </div>
                <p>Settings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="ContentRight">
        <div className="Navbar"></div>
      </div>
    </div>
  );
}
