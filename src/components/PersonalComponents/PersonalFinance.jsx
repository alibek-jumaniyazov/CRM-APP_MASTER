import React, { useState } from "react";
import chartFinance from "../../Assets/chartFinance.png";
import { Icons } from "../../Assets/icons/icons";
import { HiOutlinePrinter } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit, FiMinusCircle } from "react-icons/fi";
import { PiUserSquare } from "react-icons/pi";
import { LuAlarmClock, LuPlusCircle } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import CardPlus from "./../../Assets/icons/CardPlus.png";
import CardEx from "./../../Assets/icons/CardEx.png";
import CardCheck from "./../../Assets/icons/CardCheck.png";
import PersonalFinanceDownTable from "./PersonalFinance/PersonalFinanceDownTable";
export default function PersonalFinance({ personalUser }) {
  const [activeRow, setActiveRow] = useState(null);
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
  const toggleDropdownSecond = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };
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
  return (
    <div className="PersonalFinance">
      <div className="PersonalFinanceHeader">
        <div className="PersonalFinanceUserCard">
          <p>Profile</p>
          <div className="PersonalFinanceUserCardInfos">
            <div className="">
              <p>Full name:</p>
              <span>{personalUser.first_name} {personalUser.last_name}</span>
            </div>
            <div className="">
              <p>ID:</p>
              <span> 0989736</span>
            </div>
            <div className="">
              <p>Group courses: </p>
              <span>2</span>
            </div>
            <div className="">
              <p>Individual courses:</p>
              <span>2</span>
            </div>
            <div className="">
              <p>Monthly amount: </p>
              <span>1 210 000 so’m</span>
            </div>
            <div className="">
              <p>Current balance: </p>
              <span>-210 000 so’m</span>
            </div>
          </div>
        </div>
        <div className="PersonalFinanceTotalPeyment">
          <p>Total payment and indebtedness</p>
          <div className="PersonalFinanceTotalPeymentInfos">
            <div className="">
              <img src={chartFinance} alt="" />
            </div>
            <div className="PersonalFinanceTotalPeymentTexts">
              <div className="PersonalFinanceTotalPeymentTextsBlog">
                <div className="">
                  <p>All earned: </p>
                  <span>1 168 000 so’m</span>
                </div>
                <div className="">
                  <div className="PersonalFinanceTotalPeymentAmount"></div>
                  <p>Amount paid: </p>
                  <span>218 000 so’m</span>
                </div>
                <div className="">
                  <div className="PersonalFinanceTotalPeymentAmount2"></div>
                  <p>Remaining: </p>
                  <span>950 000 so’m</span>
                </div>
              </div>
              <div className="PersonalFinanceTotalPeymentTextsBlog">
                <div className="">
                  <p>Lesson taught: </p>
                  <span>120</span>
                </div>
                <div className="">
                  <p>Active students: </p>
                  <span>640</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="PersonalFinanceEditCards">
          {PaymentCard.map((Item, index) => (
            <div className="PersonalFinanceCardEdit" key={index}>
              <div className="PersonalFinanceCardEditHeader">
                <span>{Item.title}</span>
                {Item.icon}
              </div>
              <p>{Item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="PersonalFinanceTable">
        <div className="PersonalFinanceTableFilters"></div>
        <PersonalFinanceDownTable activeRow={activeRow} setActiveRow={setActiveRow} renderDropdownContent={renderDropdownContent} toggleDropdownSecond={toggleDropdownSecond} getTransactionIconAndStyle={getTransactionIconAndStyle} />
      </div>
    </div>
  );
}
