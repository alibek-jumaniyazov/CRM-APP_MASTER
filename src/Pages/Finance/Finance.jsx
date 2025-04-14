import { Link } from "react-router-dom";
import "./Finance.css";
import { Icons } from "../../Assets/icons/icons";
import { useState } from "react";
import { Table } from "antd";
import FinanceWalletCard from "../../components/FinanceComponents/FinanceWalletCard";
import FinanceCirculationCard from "../../components/FinanceComponents/FinanceCirculationCard";
import FinancePercentagePriceCard from "../../components/FinanceComponents/FinancePercentagePriceCard";
import FinancePercentagePriceCardMini from "../../components/FinanceComponents/FinancePercentagePriceCardMini";
import FinanceExpenseCard from "../../components/FinanceComponents/FinanceModals/FinanceExpense/FinanceExpenseCard";
import PersonalModalsQuest from "../../components/PersonalComponents/PersonalAddModals/PersonalModalsQuest";
import PersonalSuccesModal from "../../components/PersonalComponents/PersonalAddModals/PersonalSuccesModal";
import PersonalAddSalary from "../../components/PersonalComponents/PersonalAddModals/PersonalAddSalary";
import FinanceIncomeCard from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceIncomeCard";
import FinanceTable from "../../components/FinanceComponents/FinanceTable/FinanceDownTable";
import CardPlus from "./../../Assets/icons/CardPlus.png";
import CardEx from "./../../Assets/icons/CardEx.png";
import CardCheck from "./../../Assets/icons/CardCheck.png";
import { LuAlarmClock, LuPlusCircle } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiUserSquare } from "react-icons/pi";
import { HiOutlinePrinter } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit, FiMinusCircle } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import FinanceAddSalary from "../../components/FinanceComponents/FinanceModals/FinanceExpense/FinanceAddSalary";
import FinanceAddExpense from "../../components/FinanceComponents/FinanceModals/FinanceExpense/FinanceAddExpense";
import FinanceAddRefoud from "../../components/FinanceComponents/FinanceModals/FinanceExpense/FinanceAddRefoud";
import FinanceAddBonus from "../../components/FinanceComponents/FinanceModals/FinanceExpense/FinanceAddBonus";
import FinanceAddPayment from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceAddPayment";
import FinanceAddTeacher from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceAddTeacher";
import FinanceAddFine from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceAddFine";
import FinanceAddExpenseIcome from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceAddExpenseIcome";
import FinanceAddIncomeModal from "../../components/FinanceComponents/FinanceModals/FinanceIncome/FinanceAddIncomeModal";
import FinanceAddMultiple from "../../components/FinanceComponents/FinanceModals/FinanceAddMultiple";

export default function Finance() {

  const [activeRow, setActiveRow] = useState(null);

  const toggleDropdownSecond = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };


  const [PaymentCard, setPaymentCard] = useState([
    {
      id: 1,
      title: "All earned",
      price: "950 000 so’m",
      icon: <Icons.coinColor />,
    },
    {
      id: 1,
      title: "Amount paid",
      price: "32 000 so’m",
      icon: <Icons.chekCircle />,
    },
    {
      id: 1,
      title: "Monthly amount",
      price: "638 000 so’m",
      icon: <Icons.calentarPlus />,
    },
    {
      id: 1,
      title: "Remaining amount",
      price: "190 000 so’m",
      icon: <Icons.sendCoin />,
    },
  ]);

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

  const [financeExpenseCard, setFinanceExpenseCard] = useState(false);
  const [financeIncomeCard, setFinanceIncomeCard] = useState(false);

  const [CirculationCard, setCirculationCard] = useState([
    {
      id: 1,
      title: "This month's income",
      price: "16 320 000",
      kurs: "so’m",
    },
    {
      id: 1,
      title: "This month's issue",
      price: "2 867 000",
      kurs: "so’m",
    },
    {
      id: 1,
      title: "Refunds for this month",
      price: "3 200 000",
      kurs: "so’m",
    },
    {
      id: 1,
      title: "All indebtedness to employees",
      price: "8 450 000",
      kurs: "so’m",
    },
  ]);

  const [PercentagePriceCardMini, setPercentagePriceCardMini] = useState([
    {
      id: 1,
      title: "For all periods",
      price: "255 000 000 so’m",
      lenguage: "General English",
      lengNumber: 1255,
      color: "#F7685B",
      openColor: "#FEEEED",
    },
    {
      id: 1,
      title: "For all periods",
      price: "255 000 000 so’m",
      lenguage: "General English",
      lengNumber: 1255,
      color: "#2ED47A",
      openColor: "#E8FAF0",
    },
    {
      id: 1,
      title: "For all periods",
      price: "255 000 000 so’m",
      lenguage: "General English",
      lengNumber: 1255,
      color: "#FFB946",
      openColor: "#FFF7EA",
    },
  ]);
  const [personalAddBonus, setPersonalAddBonus] = useState(false);
  const [personalAddSalary, setPersonalAddSalary] = useState(false);
  const [personalAddRefoud, setPersonalAddRefoud] = useState(false);
  const [personalAddExpense, setPersonalAddExpense] = useState(false);


  const [personalAddPayment, setPersonalAddPayment] = useState(false);
  const [personalAddExpenseCourse, setPersonalAddExpenseCourse] = useState(false);
  const [personalAddTeacher, setPersonalAddTeacher] = useState(false);
  const [personalAddFine, setPersonalAddFine] = useState(false);
  const [personalAddIncome, setPersonalAddIncome] = useState(false);


  const [personalAddMultiple, setPersonalAddMultiple] = useState(false);


  const getTransactionIconAndStyle = (transactionType) => {
    let icon = <LuPlusCircle />;
    let style = {
      backgroundColor: "#f3e5f5",
      color: "#6a1b9a",
      padding: "10px",
      borderRadius: "4px",
      border: "2px solid #6a1b9a",
    };

    switch (transactionType) {
      case "Lesson":
        icon = <FiMinusCircle />;
        style = {
          width: "70px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#33A9FF",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      case "Expenditure":
        icon = <IoCloseCircleOutline />;
        style = {
          width: "97px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#F7685B",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      case "Refund":
        icon = <FiMinusCircle />;
        style = {
          width: "70px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#90A0B7",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
      default:
        icon = <LuPlusCircle />;
        style = {
          width: "79px",
          height: "19px",
          borderRadius: "4px",
          backgroundColor: "#2ED47A",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          padding: "0px 6px 0px 6px",
        };
        break;
    }

    return { icon, style };
  };
  const renderDropdownContent = (transactionType) => {
    switch (transactionType) {
      case "Lesson":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>01. Lesson 01 - English alphabets</p>
            </div>
            <div className="LEssonDropFooter">
              <div className="LEssonDropFooterLeft">
                <span>
                  <HiOutlinePrinter />
                </span>
                <p>Print check</p>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Expenditure":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>410 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>210 000 so’m</span>
                  </p>
                  <p>
                    April:<span>210 000 so’m</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>300 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>100 000 so’m</span>
                  </p>
                  <p>
                    April:<span>100 000 so’m (-110 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Refund":
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                  <p>
                    Payment type:<span>Payme</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>410 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>210 000 so’m</span>
                  </p>
                  <p>
                    April:<span>210 000 so’m</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Total balance:<span>300 000 so’m</span>
                  </p>
                  <p>
                    Balance for course:<span>100 000 so’m</span>
                  </p>
                  <p>
                    April:<span>100 000 so’m (-110 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="LEssonDrop">
            <div className="LEssonDropTitle">
              <h2>Transaction’s comment:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="ExDropContant">
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardPlus} alt="" />
                  </span>
                  <p>Expense information:</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    Amount:<span>110 000 so’m</span>
                  </p>
                  <p>
                    Payment type:<span>Payme</span>
                  </p>
                  <p>
                    All debts:<span>410 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardEx} alt="" />
                  </span>
                  <p>Status before expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m </span>
                  </p>
                  <p>
                    April:<span>250 000 so’m (- 80 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>0 so’m (- 330 000 so’m)</span>
                  </p>
                  <p>
                    Balance:<span>- 410 000 so’m</span>
                  </p>
                </div>
              </div>
              <div className="ExDropContantOne">
                <div className="ExDropContantOneTitl">
                  <span>
                    <img src={CardCheck} alt="" />
                  </span>
                  <p>Status after expense</p>
                </div>
                <div className="ExDropContantOneContant">
                  <p>
                    Monthly payment of course:<span>330 000 so’m</span>
                  </p>
                  <p>
                    April:<span>330 000 so’m (+80 000 so’m)</span>
                  </p>
                  <p>
                    May:<span>320 000 so’m (+320 000 so’m)</span>
                  </p>
                  <p>
                    Balans:<span>- 10 000 so’m</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="LEssonDropFooter">
              <div className="LeftObshExp">
                <div className="LEssonDropFooterLeft">
                  <span>
                    <FiEdit />
                  </span>
                  <p>Edit</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                  <p>Delete</p>
                </div>
                <div className="LEssonDropFooterLeft">
                  <span>
                    <HiOutlinePrinter />
                  </span>
                  <p>Print check</p>
                </div>
              </div>
              <div className="LEssonDropFooterRight">
                <div className="LEssonDropFooterRightOne">
                  <span>
                    <PiUserSquare />
                  </span>
                  <p>Teachername</p>
                </div>
                <div className="LEssonDropFooterRightTwo">
                  <span>
                    <LuAlarmClock />{" "}
                  </span>
                  <p>16:33:05 18.05.2024</p>
                </div>
                <div className="LEssonDropFooterRightThree">
                  <span>
                    <FaRegCircleCheck />
                  </span>
                  <p>Successful</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="CoursePage Finance">
      <div className="">
        <FinanceAddSalary
          personalAddSalaryState={personalAddSalary}
          setPersonalAddSalary={setPersonalAddSalary}
        />
        <FinanceAddExpense
          personalAddSalaryState={personalAddExpense}
          setPersonalAddSalary={setPersonalAddExpense}
        />
        <FinanceAddRefoud
          personalAddSalaryState={personalAddRefoud}
          setPersonalAddSalary={setPersonalAddRefoud}
        />
        <FinanceAddBonus
          personalAddSalaryState={personalAddBonus}
          setPersonalAddSalary={setPersonalAddBonus}
        />
        {/*  */}
        <FinanceAddPayment
          personalAddSalaryState={personalAddPayment}
          setPersonalAddSalary={setPersonalAddPayment}
        />
        <FinanceAddExpenseIcome
          personalAddSalaryState={personalAddExpenseCourse}
          setPersonalAddSalary={setPersonalAddExpenseCourse}
        />
        <FinanceAddTeacher
          personalAddSalaryState={personalAddTeacher}
          setPersonalAddSalary={setPersonalAddTeacher}
        />
        <FinanceAddFine
          personalAddSalaryState={personalAddFine}
          setPersonalAddSalary={setPersonalAddFine}
        />
        <FinanceAddIncomeModal
          personalAddSalaryState={personalAddIncome}
          setPersonalAddSalary={setPersonalAddIncome}
        />

        <FinanceAddMultiple
          personalAddSalaryState={personalAddMultiple}
          setPersonalAddSalary={setPersonalAddMultiple}
        />

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
              <p id="ActiveP" onClick={toggleDiv1} className={showDiv1 ? "active" : ""}>
                Standard financing
              </p>
              <p id="ActiveP" onClick={toggleDiv2} className={showDiv2 ? "active" : ""}>
                Extended financing
              </p>
            </div>
          </div>
          <div className="CourseInfoHeaderButtons">
            {showDiv2 && (
              <button className="CourseInfoHeaderButtonOne" onClick={() => setPersonalAddMultiple(true)}>
                <Icons.chekCircle /> Salaries multiple employees
              </button>
            )}
            <div className="CourseInfoHeaderButtonModal">
              <button
                className="CourseInfoHeaderButtonOne"
                onClick={() => setFinanceExpenseCard(!financeExpenseCard)}
              >
                Add expense{" "}
                <Icons.arrowDown
                  className={
                    financeExpenseCard
                      ? "CourseInfoIconsRotate"
                      : "CourseInfoIcons"
                  }
                />
              </button>
              <FinanceExpenseCard
                setFinanceExpenseCard={setFinanceExpenseCard}
                setFinanceIncomeCard={setFinanceIncomeCard}
                setPersonalAddExpense={setPersonalAddExpense}
                setPersonalAddRefoud={setPersonalAddRefoud}
                setPersonalAddBonus={setPersonalAddBonus}
                setPersonalAddSalary={setPersonalAddSalary}
                financeExpenseCard={financeExpenseCard}
                classDiv={"FinanceExpenseCard"}
              />
            </div>
            <div className="CourseInfoHeaderButtonModal">
              <button
                className="CourseInfoHeaderButtonTwo"
                onClick={() => setFinanceIncomeCard(!financeIncomeCard)}
              >
                Add new income{" "}
                <Icons.arrowDown
                  className={
                    financeIncomeCard
                      ? "CourseInfoIconsRotate"
                      : "CourseInfoIcons"
                  }
                />
              </button>
              <FinanceIncomeCard
                classDiv={"FinanceIncomeCard"}
                financeIncomeCard={financeIncomeCard}
                setFinanceExpenseCard={setFinanceExpenseCard}
                setFinanceIncomeCard={setFinanceIncomeCard}
                setPersonalAddPayment={setPersonalAddPayment}
                setPersonalAddExpenseCourse={setPersonalAddExpenseCourse}
                setPersonalAddTeacher={setPersonalAddTeacher}
                setPersonalAddFine={setPersonalAddFine}
                setPersonalAddIncome={setPersonalAddIncome}
              />
            </div>
          </div>
        </div>
      </div>
      {showDiv1 && (
        <div className="FinancePageOne">
          <div className="FinanceCards">
            <div className="FinanceWalletMonthCards">
              <div className="FinanceCardsLeft">
                <FinanceWalletCard />
              </div>
              <div className="FinanceCardsRight">
                <div className="FinanceCirculationCards">
                  {CirculationCard.map((item) => (
                    <FinanceCirculationCard item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="FinancePercentagePriceCards">
              <div className="FinancePercentagePriceCardsLeft">
                <FinancePercentagePriceCard />
              </div>
              <div className="FinancePercentagePriceCardsRight">
                {PercentagePriceCardMini.map((item) => (
                  <FinancePercentagePriceCardMini item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="PersonalFinanceTable">
            <FinanceTable activeRow={activeRow} setActiveRow={setActiveRow} renderDropdownContent={renderDropdownContent} toggleDropdownSecond={toggleDropdownSecond} getTransactionIconAndStyle={getTransactionIconAndStyle} />
          </div>
        </div>
      )}
      {showDiv2 && (
        <div className="FinancePageOne">
          <div className="FinanceCards">
            <div className="FinanceWalletMonthCards">
              <div className="FinanceCardsLeft">
                <FinanceWalletCard />
              </div>
              <div className="FinanceCardsRight">
                <div className="FinanceCirculationCards">
                  {CirculationCard.map((item) => (
                    <FinanceCirculationCard item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="FinancePercentagePriceCards">
              <div className="FinancePercentagePriceCardsLeft">
                <div className="FinanceCirculationCardBig">
                  <div className="FinanceCirculationCardBigInfos">
                    <p className="FinanceCirculationCardTitle">
                      Income for all periods
                    </p>
                    <div className="FinanceCirculationCardInfo">
                      <p>2 867 000</p>
                      <span>so’m</span>
                    </div>
                  </div>
                  <div className="FinanceCirculationCardBigHr"></div>
                  <div className="FinanceCirculationCardBigInfos">
                    <p className="FinanceCirculationCardTitle">
                      Expenses for all periods
                    </p>
                    <div className="FinanceCirculationCardInfo">
                      <p>2 867 000</p>
                      <span>so’m</span>
                    </div>
                  </div>
                  <Icons.arrowSwitch />
                </div>
                <div className="FinanceCirculationCards">
                  {CirculationCard.map((item) => (
                    <FinanceCirculationCard item={item} />
                  ))}
                </div>
              </div>
              <div className="FinancePercentagePriceCardRight">
                <p>Total credit and salary</p>
                <div className="FinancePercentagePriceCardRightColors">
                  <div className="CardRightColorWhite"></div>
                  <div className="CardRightColorBlue"></div>
                </div>
                <div className="Samolyot">
                  <div className="PercentagePriceCardRight">
                    <div className="PriceCardTextWhite"></div>
                    <p>Total credit:</p>
                    <span>13 050 000 so’m</span>
                  </div>
                  <div className="PercentagePriceCardRight">
                    <div className="PriceCardTextBlue"></div>
                    <p>Arrears of wages:</p>
                    <span>5 120 000 so’m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PersonalFinanceTable">
            <FinanceTable activeRow={activeRow} setActiveRow={setActiveRow} renderDropdownContent={renderDropdownContent} toggleDropdownSecond={toggleDropdownSecond} getTransactionIconAndStyle={getTransactionIconAndStyle} />
          </div>
        </div>
      )}
    </div>
  );
}
