import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { DatePicker, Radio } from "antd";
import { FaAngleUp, FaChevronDown, FaRegCircleCheck } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdInfoOutline } from "react-icons/md";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import InputIcon from "./../../../Assets/Input_Icon.svg";
import AddGorupModalComponent from "./ClientModalComponent/AddGorupModalComponent";
import AddGorupModalComponentTow from "./ClientModalComponent/AddGorupModalComponentTow";

export default function AddToGroupModal({
  addToGroupModal,
  setAddToGroupModal,
}) {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  const [addToGroupModalSecond, setaddToGroupModalSecond] = useState(false);
  const [AddToGroupModalQuest, setAddToGroupModalQuest] = useState(false);

  function handleOpenQuestModal() {
    if (value == 0) {
      setError(true);
    }
    if (value == 1 || value == 2) {
      setAddToGroupModalQuest(true);
      setAddToGroupModal(false);
      setError(false);
    }
  }


  function handleGoBackModal() {
    setAddToGroupModal(true);
    setAddToGroupModalQuest(false);
  }

  function handleOpenSecondModal() {
    setAddToGroupModal(false);
    setAddToGroupModalQuest(false);
    setaddToGroupModalSecond(true);
    setTimeout(() => {
      setaddToGroupModalSecond(false);
    }, 1000);
  }
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="">
      {addToGroupModal && (
        <div className="modal-overlay" onClick={() => setAddToGroupModal(false)}></div>
      )}
      {AddToGroupModalQuest && (
        <div className="modal-overlay" onClick={() => setAddToGroupModalQuest(false)}></div>
      )}
      <div
        className={
          addToGroupModal ? "AddToGroupModal NewCustomerModal" : "none"
        }
      >
        <div className="NewCustomerModalHeader">
          <div className="" onClick={() => setAddToGroupModal(false)}>
            <Icons.close />
          </div>
        </div>
        <div className="NewCustomerModalTitles">
          <p>Add student to group</p>
          <span>Add or move student to a new group</span>
        </div>
        <div className="NewCustomerModalDiv">
          <span>Select type of action*</span>
          <div className="NewCustomerModalDivRadios">
            <Radio.Group
              onChange={onChange}
              value={value}
              className="NewCustomerModalDivRadio"
            >
              <Radio value={1} onClick={() => setError(false)}>Move to a new group</Radio>
              <Radio value={2} onClick={() => setError(false)}>Add to a new group</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="">
          {value == 1 && <AddGorupModalComponent />}
          {value == 2 && <AddGorupModalComponentTow />}
          {error ? (
            <p className="errorText">Please select all required options</p>
          ) : null}
        </div>
        <div className="AddSalaryModalButtons">
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setAddToGroupModal(false)}>Cancel</button>
            <button
              style={{ border:"none"}}
              id="YesConFimModalAddStudButtons"
              onClick={handleOpenQuestModal}
            >
              Confrim
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          AddToGroupModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck SendSmsGroupDiv"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddToGroupModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle ">
          <h2>
            {value == 1
              ? "Confirm the transfer"
              : "Confirm adding to the new group"}
          </h2>
          {value == 1 ? (
            <p>
              Do you approve the transfer of student
              <br /> to another group ?
            </p>
          ) : (
            <p>
              Do you want to confirm adding student
              <br /> to another group ?
            </p>
          )}
        </div>
        <div className="ConFimModalAddStudButtons addSalaryQuestModalButton">
          <button onClick={handleGoBackModal} style={{ width: "100%" }}>
            Go back
          </button>
          <button
          style={{ border:"none"}}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
          >
            Yes
          </button>
        </div>
      </div>

      <div
        className={addToGroupModalSecond ? "LastConFimModalAddStud SendSmsGroupDiv" : "none"}
      >
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2> Done successfully</h2>
          <p>
            {value == 1
              ? "Student were transferred to another group"
              : "Student added a new group"}
          </p>
        </div>
      </div>
    </div>
  );
}
