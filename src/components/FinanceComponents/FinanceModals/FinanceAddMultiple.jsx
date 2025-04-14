import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import "../../../Pages/Finance/Finance.css"
import { Select } from "antd";
export default function FinanceAddMultiple({ personalAddSalaryState, setPersonalAddSalary }) {

  const [multiple, setMultiple] = useState([
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "218 000 so’m",
      balanceAction: true,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "18 000 so’m",
      balanceAction: true,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "2218 000 so’m",
      balanceAction: true,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
    {
      id: 1,
      name: "Alisher Atajanov",
      balance: "-218 000 so’m",
      balanceAction: false,
    },
  ])


  const [SalaryModalSecond, setSalaryModalSecond] = useState(false);
  const [AddSalaryModalQuest, setPersonalAddSalaryModalQuest] = useState(false);

  function handleCloseMainModal() {
    setPersonalAddSalary(false);
    setPersonalAddSalaryModalQuest(true);
  }

  function handleGoBackModal() {
    setPersonalAddSalary(true);
    setPersonalAddSalaryModalQuest(false);
  }

  function handleOpenSecondModal() {
    setPersonalAddSalary(false);
    setPersonalAddSalaryModalQuest(false);
    setSalaryModalSecond(true);
    setTimeout(() => {
      setSalaryModalSecond(false);
    }, 1000);
  }



  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [actionCounts, setActionCounts] = useState(
    multiple.map(() => 1) // Har bir item uchun 1 ta action borligini belgilaymiz
  );

  const handleAddAction = (index) => {
    const newActionCounts = [...actionCounts];
    newActionCounts[index] += 1; // Tanlangan itemga qo'shimcha action qo'shamiz
    setActionCounts(newActionCounts);
  };

  const handleRemoveAction = (index) => {
    const newActionCounts = [...actionCounts];
    if (newActionCounts[index] > 1) {
      newActionCounts[index] -= 1; // Tanlangan itemdan bitta actionni olib tashlaymiz
    }
    setActionCounts(newActionCounts);
  };

  return (
    <>
      <div className={personalAddSalaryState ? "PosationModal AddSalaryModal NewCustomerModal" : "hidden"}>
        <div className="SendSmsGroupClose" onClick={() => setPersonalAddSalary(false)}>
          <Icons.close className="closeIcon" />
        </div>
        <div className="NewCustomerModalTitles">
          <p>Paying multiple employees</p>
          <span>Below is a list of employees who are owed only</span>
        </div>
        <div className="FinanceMltipleLists">
          {multiple.map((item, index) => (
            <div key={item.id} className="FinanceMltipleList">
              <div className="FinanceMltipleListTexts">
                <span>{item.id}</span>
                <div className="FinanceMltipleListTextsName">
                  <p>{item.name}</p>
                  <span
                    style={{
                      color: item.balanceAction ? "#2ED47A" : "#F7685B",
                    }}
                  >
                    {item.balance}
                  </span>
                </div>
              </div>
              <div className="FinanceMltipleListActionsCard">
                {[...Array(actionCounts[index])].map((_, actionIndex) => (
                  <div key={actionIndex} className="FinanceMltipleListActions">
                    <div className="FinanceMltipleListInputDiv">
                      <Icons.coinsClient />
                      <input type="text" placeholder="Amount" />
                    </div>
                    <Select
                      defaultValue="select"
                      className=""
                      style={{
                        height: "45px",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "select",
                          label: "Select",
                        },
                        {
                          value: "Category 1",
                          label: "Category 1",
                        },
                        {
                          value: "Category 2",
                          label: "Category 2",
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="FinanceMltipleListActionCreator">
                  {actionCounts[index] > 1 ? (
                    <button onClick={() => handleRemoveAction(index)}>-</button>
                  ) : <button onClick={() => handleAddAction(index)}>+</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="FinanceMltipleTextsZaybal">
          <div className="FinanceMltipleTextsBeetwens">
            <b>Current status</b>
            <div className="FinanceMltipleTextsBeetwensChildren">
              <div className="">
                <p>Current balance: <span>40 00 000 so’m</span></p>
                <p>Indebtedness: <span>23 000 000 so’m</span></p>
              </div>
              <div className="">
                <p>Cash: <span> 218 00 so’m</span></p>
                <p>Payoneer: <span>180 000 so’m</span></p>
              </div>
              <div className="">
                <p>Paypal: <span> 200 000 so’m</span></p>
                <p>Mastercard: <span>  228 000 so’m</span></p>
              </div>
            </div>
          </div>
          <div className="FinanceMltipleTextsBeetwens">
            <b>Paid</b>
            <div className="FinanceMltipleTextsBeetwensChildren">
              <div className="">
                <p>All owed employees: <span>17</span></p>
                <p>Paid employees: <span>13</span></p>
              </div>
              <div className="">
                <p>Cash: <span> 218 00 so’m</span></p>
                <p>Payoneer: <span>180 000 so’m</span></p>
              </div>
              <div className="">
                <p>Paypal: <span> 200 000 so’m</span></p>
                <p>Mastercard: <span>  228 000 so’m</span></p>
              </div>
            </div>
          </div>
          <div className="FinanceMltipleTextsBeetwens">
            <b>Status after payment</b>
            <div className="FinanceMltipleTextsBeetwensChildren">
              <div className="">
                <p>Balance after: <span>40 00 000 so’m</span></p>
                <p>Indebtedness: <span>23 000 000 so’m</span></p>
              </div>
              <div className="">
                <p>Cash: <span> 218 00 so’m</span></p>
                <p>Payoneer: <span>180 000 so’m</span></p>
              </div>
              <div className="">
                <p>Paypal: <span> 200 000 so’m</span></p>
                <p>Mastercard: <span>  228 000 so’m</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="SendSmsBtns">
          <button className="SendSmsButtonOne" onClick={() => setPersonalAddSalary(false)}>Cancel</button>
          <button className="SendSmsButtonTwo" onClick={handleCloseMainModal}>
            {" "}
            <Icons.send className="closeIcon" /> Confrim
          </button>
        </div>
      </div>

      <div
        className={
          AddSalaryModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck PosationModal"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setPersonalAddSalaryModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle ">
          <h2>Confirm paying employees </h2>
          <p>
            Do you want to confirm paying employees ?
          </p>
        </div>
        <div className="ConFimModalAddStudButtons addSalaryQuestModalButton">
          <button onClick={handleGoBackModal} style={{ width: "100%" }}>
            Go back
          </button>
          <button
            style={{ border: "none", width: "100%" }}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
          >
            Yes
          </button>
        </div>
      </div>

      <div className={SalaryModalSecond ? "LastConFimModalAddStud PosationModal" : "none"}>
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2>Employees were paid</h2>
          <p>Employees were paid successfully</p>
        </div>
      </div>
    </>
  );
}
