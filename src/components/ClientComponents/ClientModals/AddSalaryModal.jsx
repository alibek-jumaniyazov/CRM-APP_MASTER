import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { Checkbox, Radio } from "antd";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function AddSalaryModal({ addSalary, SetAddSalary }) {
  const [value, setValue] = useState(1);
  const [modalCheck, setModalCheck] = useState(false);
  const [SalaryModalSecond, setSalaryModalSecond] = useState(false);
  const [AddSalaryModalQuest, setAddSalaryModalQuest] = useState(false);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  function handleCloseMainModal() {
    SetAddSalary(false);
    setAddSalaryModalQuest(true);
  }

  function handleCloseAllModal() {
    SetAddSalary(false);
    setAddSalaryModalQuest(false);
  }
  function handleGoBackModal() {
    SetAddSalary(true);
    setAddSalaryModalQuest(false);
  }

  function handleOpenSecondModal() {
    SetAddSalary(false);
    setAddSalaryModalQuest(false);
    setSalaryModalSecond(true);
    setTimeout(() => {
      setSalaryModalSecond(false);
    }, 1000);
  }
  console.log(modalCheck);

  return (
    <>
      {
        addSalary && (
          <div className="modal-overlay" onClick={() => SetAddSalary(false)}></div>
        )
      }
      {
        AddSalaryModalQuest && (
          <div className="modal-overlay" onClick={() => setAddSalaryModalQuest(false)}></div>
        )
      }

      <div className={addSalary ? "AddSalaryModal NewCustomerModal" : "none"}>
        <div className="NewCustomerModalHeader">
          <div className="" onClick={() => SetAddSalary(false)}>
            <Icons.close />
          </div>
        </div>
        <div className="NewCustomerModalTitles">
          <p>Add a new student fee</p>
          <span>Add a new fee for the specified student</span>
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
          <div className="AddSalaryModalBalanceInfo">
            <p>Current balance:</p>
            <span>-183 000 so’m</span>
          </div>
          <div className="AddSalaryModalBalanceCheck">
            <Checkbox>Print a check</Checkbox>
          </div>
        </div>
        <div className="AddSalaryModalButtons">
          <div className="ConFimModalAddStudButtons">
            <button onClick={handleCloseAllModal}>Cancel</button>
            <button
              style={{ border:"none"}}
              id="YesConFimModalAddStudButtons"
              onClick={handleCloseMainModal}
            >
              Confrim
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          AddSalaryModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck SendSmsGroupDiv"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddSalaryModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle ">
          <h2>Add payment without a check ?</h2>
          <p>
            Continue adding payment to the system
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
            style={{ border: "none", width: "100%" }}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
          >
            {modalCheck ? "With check" : " Yes"}
          </button>
        </div>
      </div>

      <div className={SalaryModalSecond ? "LastConFimModalAddStud SendSmsGroupDiv" : "none"}>
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2>All payments added</h2>
          <p>All payments have been added to the system</p>
        </div>
      </div>
    </>
  );
}
