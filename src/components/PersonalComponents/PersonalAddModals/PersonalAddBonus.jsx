import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { Checkbox, Radio } from "antd";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function PersonalAddBonus({ personalAddSalaryState, setPersonalAddSalary }) {
  const [value, setValue] = useState(1);
  const [modalCheck, setModalCheck] = useState(false);
  const [SalaryModalSecond, setSalaryModalSecond] = useState(false);
  const [AddSalaryModalQuest, setPersonalAddSalaryModalQuest] = useState(false);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

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
  console.log(modalCheck);


  return (
    <>
      <div className={personalAddSalaryState ? "PosationModal AddSalaryModal NewCustomerModal" : "hidden"}>
        <div className="SendSmsGroupClose" onClick={() => setPersonalAddSalary(false)}>
          <Icons.close className="closeIcon" />
        </div>
        <div className="NewCustomerModalTitles">
          <p>Add bonus</p>
          <span>If the expense is paid from the teacher's account, the
            amount will be added to the profit account for the educational center</span>
        </div>
        <div className="AddSalaryModalSelects">
          <div>
            <label htmlFor="">Select date</label>
            <div className="inputIconDiv">
              <Icons.calendar />
              <input type="text" placeholder="Payment date" />
            </div>
          </div>
          <div>
            <label htmlFor="">Payment amout</label>
            <div className="inputIconDiv">
              <Icons.coinsClient />
              <input type="text" placeholder="Amount" />
            </div>
          </div>
        </div>
        <div className="AddSalaryModalRadios">
          <span>Payment amout</span>
          <Radio.Group
            onChange={onChange}
            value={value}
            className="AddSalaryModalRadio"
          >
            <Radio value={1}>Cash</Radio>
            <Radio value={2}>Payoneer</Radio>
            <Radio value={3}>Paypal</Radio>
            <Radio value={4}>MasterCard</Radio>
          </Radio.Group>
        </div>
        <div className="AddSalaryModalComment">
          <span>Comment (optional)</span>
          <div className="">
            <textarea placeholder="Note for payment"></textarea>
          </div>
        </div>
        <div className="AddSalaryModalBalance">
          <div className="addSalaryBalance">
            <div className="AddSalaryModalBalanceInfoText">
              <p>Current balance:</p>
              <span>1 218 000 so’m</span>
            </div>
            <div className="AddSalaryModalBalanceInfoText">
              <p>Balance after pay:</p>
              <span>1 218 000 so’m</span>
            </div>
          </div>
          <div className="AddSalaryModalBalanceCheck  ">
            <Checkbox>Print a check</Checkbox>
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
          <h2>Add bonus without a check ?</h2>
          <p>
            Continue adding expense to the system
            <br /> without printing a check ?
          </p>
          <div className="questModalCheck">
            <Checkbox
              checked={modalCheck}
              onClick={() => setModalCheck(!modalCheck)}
            >
              Print a check
            </Checkbox>
          </div>
        </div>
        <div className="ConFimModalAddStudButtons addSalaryQuestModalButton">
          <button onClick={handleGoBackModal} style={{ width: "100%" }}>
            Go back
          </button>
          <button
            style={{  border: "none", width: "100%" }}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
          >
            {modalCheck ? "With check" : " Yes"}
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
          <h2>Bonus added</h2>
          <p>Teacher’s bonus have been added to the system</p>
        </div>
      </div>
    </>
  );
}
