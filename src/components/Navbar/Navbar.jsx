import "./Navbar.css";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { PiClockClockwise } from "react-icons/pi";
import { HiLanguage } from "react-icons/hi2";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import profilImg from "../../Assets/teacher.png";
import NewLeadCard from "../../Pages/leads/NewLeadCard";
import { FaChevronRight } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { TbMessageQuestion } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import plus from "./../../Assets/icons/Plus.png";
import Modal from "react-modal";
import students from "./../../Assets/graduation-hat-01.png";
import lupa from "./../../Assets/lupa.png";
import { GoArrowRight } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../../Assets/icons/icons";

export default function Navbar() {
  const [showContent, setShowContent] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState('Dashboard'); 
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [userInfo, setUserInfo] = useState([])
  const [clients, setClients] = useState([])

  const storedToken = localStorage.getItem('token');

  const getUser = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/personal/profil/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      (data.map(item => setUserInfo(item.user)));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setTitle('Dashboard');
        break;
      case '/leads':
        setTitle('Board of leads');
        break;
      case '/leads/applications':
        setTitle('List of applications');
        break;
      case '/clients/all-students':
        setTitle('List of clients');
        break;
      case '/clients/customer-base':
        setTitle('Customer base');
        break;
      case '/clients/archive':
        setTitle('Archive');
        break;
      case '/groups/active-groups':
        setTitle('List of groups');
        break;
      case '/groups/individuals':
        setTitle('List of individual courses');
        break;
      case '/groups/archive':
        setTitle('Archive');
        break;
      case '/course':
        setTitle('Course');
        break;
      case '/personal/active-personnel':
        setTitle('Personnel');
        break;
      case '/personal/archive-personnel':
        setTitle('Archived personnel');
        break;
      case '/finance-page':
        setTitle('Finance');
        break;
      case '/setting':
        setTitle('Settings');
        break;
      case '/Reports':
        setTitle('Reports');
        break;
      default:
        setTitle('My Application');
        break;
    }
  }, [window.location.pathname]);



  const getStudents = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/home/search/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setClients(data.clients);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser()
    getStudents()
  }, []);



  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  const [isActive, setIsActive] = useState({
    Khodjeyli: false,
    Main: false,
    Success: false,
  });

  const toggleIsActive = (button) => {
    setIsActive((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  const [plusModal, setPlusModal] = useState(false);
  const [notficetion, setNotficetion] = useState(false);
  const [history, setHistory] = useState(false);
  const [profil, setProfil] = useState(false);

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    console.log("Logout successful");
    navigate('/login');  
  }
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen(); // Agar to'liq ekran rejimida bo'lsa, chiqadi
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen(); // Aks holda, to'liq ekran rejimiga o'tadi
      setIsFullscreen(true);
    }
  };
  const [isInupt, setIsInput] = useState(false)
  return (
    <div className="Navbar">
      {plusModal && (
        <>
          {/* Overlay */}
          <div className="modal-overlay" onClick={() => setPlusModal(false)}></div>

          {/* Modal */}
          <NewLeadCard setPlusModal={setPlusModal} plusModal={plusModal} />
        </>
      )}
      <div className="BranchSelect">
        <div className="BranchButtonDrop">
          <button onClick={toggleContent}>{title}</button>
        </div>
      </div>
      <div className="NavButtonBox">
        <button className={isInupt ? "IoSearch IoSearchZ activeInput" : "IoSearch IoSearchZ"} onClick={() => setModalIsOpen(true)}>
          <Icons.globalSearch />
          <input
            type="text"
            placeholder={isInupt ? "Type something..." : "Global Search"}
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); }}
            className="ModalSearch-input"
            onFocus={() => setIsInput(true)} // Handle focus
            onBlur={() => setIsInput(false)} // Handle blur
          />
        </button>

        {modalIsOpen && (
          <>
            {/* Overlay */}
            <div className="modal-overlay" onClick={closeModal} style={{ zIndex: 997 }}></div>

            {/* Modal */}
            <div className="ModalSearch">
              <div className="ModalSearch-container">
                {clients.length > 0 ? (
                  clients
                    .filter((box) =>
                      `${box.name} ${box.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .length > 0 ? (
                    clients
                      .filter((box) =>
                        `${box.name} ${box.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((box) => (
                        <Link to={`student-page/${box.id}`} onClick={closeModal} className="boxSearchLink" key={box.id}>
                          <div className="boxSearch">
                            <div className="aghhhh">
                              <p className="inuptSearcText">
                                {box.name} {box.last_name}
                              </p>
                              <div className="AOAO">
                                <p>-</p>
                                <span style={{ marginLeft: "13px" }}>
                                  <img src={students} alt="" />
                                </span>
                                <p style={{ color: "rgba(51, 169, 255, 1)" }}>Students</p>
                              </div>
                            </div>
                            <div className="aaaaa">
                              <GoArrowRight />
                            </div>
                          </div>
                        </Link>
                      ))
                  ) : (
                    <div className="Nothink">
                      <div className="nothinkimg">
                        <img src={lupa} alt="" />
                      </div>
                      <div className="NothinkText">
                        <p>Nothing found</p>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="Nothink">
                    <div className="nothinkimg">
                      <img src={lupa} alt="" />
                    </div>
                    <div className="NothinkText">
                      <p>Nothing found</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <button onClick={() => setPlusModal(!plusModal)} className="GoPlus">
          <Icons.navPlus />
        </button>
        <button className="BsArrows" onClick={handleFullscreen}>
          <Icons.fullSize />
        </button>
        <button className="Notification">
          <Icons.notification
            onClick={() => setNotficetion(!notficetion)}
          />
          {notficetion && (
            <>
              <div className="modal-overlay profilOverlyModal" onClick={() => setNotficetion(false)}></div>
              <div className="notficationDrop">
                <p className="notficationDrop_title">Notfications</p>
                <div className="notficationDrop_Messege">
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Say hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42
                    </p>
                  </div>
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Sey hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,{" "}
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42{" "}
                    </p>
                  </div>
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Sey hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,{" "}
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42{" "}
                    </p>
                  </div>
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Sey hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,{" "}
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42{" "}
                    </p>
                  </div>
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Sey hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,{" "}
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42{" "}
                    </p>
                  </div>
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Sey hello to new update</h3>
                      <button>
                        Click to open <FaChevronRight />
                      </button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,{" "}
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42{" "}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </button>
        <button className="Piclock">
          <Icons.piclock onClick={() => setHistory(!history)} />
          {history && (
            <>
              <div className="modal-overlay profilOverlyModal" onClick={() => setHistory(false)}></div>
              <div className="notficationDrop">
                <p className="notficationDrop_title">History of operations</p>
                <div className="notficationDrop_Messege">
                  <div className="notficationDrop_Messege_box">
                    <div className="notficationDrop_Messege_box_top">
                      <h3>Say hello to new update</h3>
                      <button style={{ color: "#C2CFE0" }}>John Anderson</button>
                    </div>
                    <div className="notficationDrop_Messege_box_min">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                      </p>
                    </div>
                    <p className="notficationDrop_Messege_box_time">
                      02.04.2024 18:42
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </button>
        <div className="Navprofil" onClick={() => setProfil(!profil)}>
          <div className="blablabla">
            {userInfo.image ? (
              <img src={userInfo.image} alt="Profile" style={{ borderRadius: "50%" }} />
            ) : (
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#005EEB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#fff"
              }}>
                {userInfo.first_name ? userInfo.first_name.charAt(0).toUpperCase() : "?"}
              </div>
            )}
            <div className="profilInfo">
              <p className="profilInfo_lastname">
                {userInfo.first_name} {userInfo.last_name}
              </p>
              <p className="profilInfo_frstname">Founder</p>
            </div>
          </div>
          {profil && (
            <>
              <div className="modal-overlay profilOverlyModal" onClick={() => setProfil(false)}></div>
              <div
                className="Navprofil_drop"
                onClick={(e) => e.stopPropagation()}
              >
                <Link to={"/setting/profile"} onClick={() => setProfil(false)}>
                  <FiUser />
                  My profile
                </Link>
                <Link to={"/setting/billing"} onClick={() => setProfil(false)}>

                  <GrMoney />
                  Billing
                </Link>
                <Link to={"/setting"} onClick={() => setProfil(false)}>

                  <TbMessageQuestion />
                  Technique support
                </Link>
                <Link to={"/setting/basic"} onClick={() => setProfil(false)}>

                  <LuSettings2 />
                  Settings
                </Link>
                <button onClick={handleLogout}>
                  <IoIosLogOut />
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
