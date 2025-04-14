import React, { useEffect, useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../components/GroupSendSms/GroupComponent.css";
import "../Personal/Personal.css";
import PersonalProfile from "../../components/PersonalComponents/PersonalProfile";
import PersonalFinance from "../../components/PersonalComponents/PersonalFinance";
import PersonalHistory from "../../components/PersonalComponents/PersonalHistory";
import PersonalAddSalary from "../../components/PersonalComponents/PersonalAddModals/PersonalAddSalary";
import PersonalDoteModal from "../../components/PersonalComponents/PersonalAddModals/PersonalDoteModal";
import PersonalDeleteDoteModal from "../../components/PersonalComponents/PersonalAddModals/PersonalDeleteDoteModal";
import PersonalSendSmsModal from "../../components/PersonalComponents/PersonalAddModals/PersonalSendSmsModal";
import PersonalAddExpense from "../../components/PersonalComponents/PersonalAddModals/PersonalAddExpense";
import PersonalAddFine from "../../components/PersonalComponents/PersonalAddModals/PersonalAddFine";
import PersonalAddBonus from "../../components/PersonalComponents/PersonalAddModals/PersonalAddBonus";
import axios from "axios";
import PersonalDoteModalArchive from "../../components/PersonalComponents/PersonalAddModals/PersonalDoteModalArchive";
import PersonalDeleteDoteModalArchive from "../../components/PersonalComponents/PersonalAddModals/PersonalDeleteDoteModalArchive";

export default function PersonalArchiveUser() {
  const { id } = useParams()
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
    setShowDiv3(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
    setShowDiv3(false);
  };
  const toggleDiv3 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(true);
  };

  const [sendSms, SetsendSms] = useState(false);
  const [DoteModal, setDoteModal] = useState(false)
  const [DoteDeleteQuest, setDoteDeleteQuest] = useState(false)
  const [personalAddSalaryState, setPersonalAddSalary] = useState(false);
  const [personalAddExpenseState, setPersonalAddExpense] = useState(false);
  const [personalAddFineState, setPersonalAddFine] = useState(false);
  const [personalAddBonusState, setPersonalAddBonus] = useState(false);
  const [personalUser, setPersonalUser] = useState([])
  const navigate = useNavigate()

  const storedToken = localStorage.getItem('token');
  const getPersonal = async () => {
    try {
      const data = await axios.get(`https://api.quickhub.uz/api/personal/arxive/${id}`, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setPersonalUser(data.data);
      console.log(data.data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPersonal();
  }, []);



  const addArchive = async () => {
    try {
      const response = await axios.patch(`https://api.quickhub.uz/api/personal/arxive/${id}/set-archive/`, {
        "arxive": false
      }, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      navigate('/personal')
      console.log(response.status);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="PersonalUser">
      <div className="GroupPosition">
        <PersonalSendSmsModal
          sendSms={sendSms}
          SetsendSms={SetsendSms}
        />
        <PersonalAddSalary
          personalAddSalaryState={personalAddSalaryState}
          setPersonalAddSalary={setPersonalAddSalary}
        />
        <PersonalAddExpense
          personalAddSalaryState={personalAddExpenseState}
          setPersonalAddSalary={setPersonalAddExpense}
        />
        <PersonalAddFine
          personalAddSalaryState={personalAddFineState}
          setPersonalAddSalary={setPersonalAddFine}
        />
        <PersonalAddBonus
          personalAddSalaryState={personalAddBonusState}
          setPersonalAddSalary={setPersonalAddBonus}
        />
        <PersonalDoteModalArchive DoteModal={DoteModal} setDoteModal={setDoteModal} setDoteDeleteQuest={setDoteDeleteQuest} />
        <PersonalDeleteDoteModalArchive DoteDeleteQuest={DoteDeleteQuest} setDoteDeleteQuest={setDoteDeleteQuest} addArchive={addArchive} />
      </div>
      <div className="CoursesHeader CourseInfoHeader">
        <div className="CoursesHeader">
          <div className="CourseInfoHeaderTitle">
            <Link to={"/personal"}>
              <button>
                <Icons.leftArrow />
              </button>
            </Link>
            <div className="CourseLevelHeaderToggles">
              <p id="ActiveP" onClick={toggleDiv1} className={showDiv1 ? "active" : ""}>
                Profile
              </p>
              <p id="ActiveP" onClick={toggleDiv2} className={showDiv2 ? "active" : ""}>
                Finance
              </p>
              <p id="ActiveP" onClick={toggleDiv3} className={showDiv3 ? "active" : ""}>
                History
              </p>
            </div>
          </div>
          <div className="">
            {showDiv1 && (
              <div className="CourseInfoHeaderButtons">
                <button
                  className="CourseInfoHeaderButtonOne"
                  onClick={() => SetsendSms(true)}
                >
                  <Icons.sendBlue /> Send sms
                </button>
                <button
                  className="CourseInfoHeaderButtonTwo"
                  onClick={() => setPersonalAddSalary(true)}
                >
                  <Icons.coins /> Add salary
                </button>
                <button className="CourseInfoHeaderButtonOne" onClick={() => setDoteModal(!DoteModal)}>
                  <Icons.dote />
                </button>
              </div>
            )}

            {showDiv2 && (
              <div className="CourseInfoHeaderButtons">
                <button className="CourseInfoHeaderButtonOne" onClick={() => setPersonalAddExpense(true)}>
                  <Icons.minusСircle /> Add expense
                </button>
                <button className="CourseInfoHeaderButtonOne" onClick={() => setPersonalAddFine(true)}>
                  <Icons.fineSances /> Add a fine
                </button>
                <button className="CourseInfoHeaderButtonOne" onClick={() => setPersonalAddBonus(true)}>
                  <Icons.diamond /> Add bonus
                </button>
                <button className="CourseInfoHeaderButtonTwo" onClick={() => setPersonalAddSalary(true)}>
                  <Icons.coins /> Add salary
                </button>
              </div>
            )}
            {showDiv3 && <div className="CourseInfoHeaderButtons"></div>}
          </div>
        </div>
      </div>
      <div className="">
        {showDiv1 && <PersonalProfile personalUser={personalUser} />}
        {showDiv2 && <PersonalFinance />}
        {showDiv3 && <PersonalHistory />}
      </div>
    </div>
  );
}
