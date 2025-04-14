import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function AddIsLeadBoardModal({
  AddLeadModalQuest,
  setAddLeadModalQuest,
}) {
  const [AddLeadModalSecond, setAddLeadModalSecond] = useState(false);

  function handleOpenSecondModal() {
    setAddLeadModalQuest(false);
    setAddLeadModalSecond(true);
    setTimeout(() => {
      setAddLeadModalSecond(false);
    }, 1000);
  }

  return (
    <>
      {AddLeadModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setAddLeadModalQuest(false)}
        ></div>
      )}
      <div className="AddIsTableModal">
        <div className={AddLeadModalQuest ? "ConFimModalAddStud" : "none"}>
          <div
            className="ConFimModalAddStudClose"
            onClick={() => setAddLeadModalQuest(false)}
          >
            <Icons.close />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Add a customer to a lead board</h2>
            <p>
              Are you sure you want to add the customer to <br /> the lead board?
            </p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setAddLeadModalQuest(false)}>
              Cancel
            </button>
            <button
              style={{ border: "none" }}
              id="YesConFimModalAddStudButtons"
              onClick={handleOpenSecondModal}
            >
              Yes
            </button>
          </div>
        </div>

        <div className={AddLeadModalSecond ? "LastConFimModalAddStud" : "none"}>
          <div className="ConFimModalAddStudLogo">
            <span>
              <FaRegCircleCheck />
            </span>
          </div>
          <div className="LastConFimModalAddStudTitle">
            <h2>Customer added to the lead board</h2>
            <p>The customer can be found on the lead board</p>
          </div>
        </div>
      </div>
    </>
  );
}
