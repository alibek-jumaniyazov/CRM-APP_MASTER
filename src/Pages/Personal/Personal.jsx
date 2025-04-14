import { useEffect, useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import "../Personal/Personal.css";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "../../components/GroupSendSms/GroupComponent.css";
import PersonalCard from "../../components/PersonalComponents/PersonalCard";
import PersonalNewEmploye from "../../components/PersonalComponents/PersonalAddModals/PersonalNewEmploye";
import PersonalSendSmsModal from "../../components/PersonalComponents/PersonalAddModals/PersonalSendSmsModal";
import axios from "axios";
import LoadingUser from "../LoadingUser";

export default function Personal() {
  const [PersonalCardInfo, setPersonalCardInfo] = useState([]);
  const [PersonalCardInfoArchive, setPersonalCardInfoArchive] = useState([]);
  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  const [sendSms, SetsendSms] = useState(false);
  const [newEploye, setNewEploye] = useState(false)
  const storedToken = localStorage.getItem('token');
  const getPersonal = async () => {
    setLoading(true)
    try {
      const data = await axios.get("https://api.quickhub.uz/api/personal/all/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setPersonalCardInfo(data.data);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  const getPersonalArchive = async () => {
    setLoading(true)
    try {
      const data = await axios.get("https://api.quickhub.uz/api/personal/arxive/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setPersonalCardInfoArchive(data.data);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPersonal();
    getPersonalArchive();
  }, []);


  return (
    <div className="CoursePage Personal">
      <div className="GroupPosition">
        <PersonalSendSmsModal
          sendSms={sendSms}
          SetsendSms={SetsendSms}
        />
        <PersonalNewEmploye newEploye={newEploye} setNewEploye={setNewEploye} setPersonalCardInfo={setPersonalCardInfo} />
      </div>
      <div className="CoursesHeader CourseInfoHeader">
        <div className="CoursesHeader">
          <div className="CourseInfoHeaderTitle">
            {/* <Link to={""}>
              <button>
                <Icons.leftArrow />
              </button>
            </Link> */}
            <div className="CourseLevelHeaderToggles">
              <Link
                to="active-personnel" id="ActiveP"
                onClick={toggleDiv1}
                className={location.pathname.includes('active-personnel') ? 'active' : ''}
              >
                Active personnel
              </Link>
              <Link
                onClick={toggleDiv2}
                to="archive-personnel" id="ActiveP"
                className={location.pathname.includes('archive-personnel') ? 'active' : ''}
              >
                Archive
              </Link>
            </div>
          </div>
          <div className="CourseInfoHeaderButtons">
            <button
              className="CourseInfoHeaderButtonOne"
              onClick={() => SetsendSms(true)}
            >
              <Icons.sendBlue /> Send sms
            </button>
            <button className={showDiv1 ? "CourseInfoHeaderButtonTwo" : "none"} onClick={() => setNewEploye(!newEploye)}>
              <Icons.personals /> Add new employee
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Routes>
          <Route index element={<Navigate to="active-personnel" />} />
          <Route path="active-personnel" element={(
            <div className="PersonalCards">
              {loading ? (<LoadingUser />) : (PersonalCardInfo.map((item) => (
                <Link to={`/personal-user/${item.id}`} style={{ textDecoration: "none" }} key={item.id}>
                  <PersonalCard item={item} key={item.id} />
                </Link>
              )))}
            </div>
          )} />
          <Route path="archive-personnel" element={(
            <div className="PersonalCards">
              {loading ? (<LoadingUser />) : (PersonalCardInfoArchive.map((item) => (
                <Link to={`/personal-archive-user/${item.id}`} style={{ textDecoration: "none" }} key={item.id}>
                  <PersonalCard item={item} key={item.id} />
                </Link>
              )))}
            </div>
          )} />
        </Routes>
      </div>
    </div>
  );
}
