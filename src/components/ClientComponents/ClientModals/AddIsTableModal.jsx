import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function AddIsTableModal({
  AddcustomerModalQuest,
  setAddCustomerModalQuest,
}) {
  const [customerModalSecond, setCustomerModalSecond] = useState(false);

  function handleOpenSecondModal() {
    setAddCustomerModalQuest(false);
    setCustomerModalSecond(true);
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  }

  return (
    <>
      {AddcustomerModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setAddCustomerModalQuest(false)}
        ></div>
      )}
      <div className="AddIsTableModal">
        <div className={AddcustomerModalQuest ? "ConFimModalAddStud" : "none"}>
          <div
            className="ConFimModalAddStudClose"
            onClick={() => setAddCustomerModalQuest(false)}
          >
            <Icons.close />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Confirm attendance of this student</h2>
            <p>
              Do you confirm that this student <br /> has come to class?
            </p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setAddCustomerModalQuest(false)}>
              Cancel
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

        <div className={customerModalSecond ? "LastConFimModalAddStud" : "none"}>
          <div className="ConFimModalAddStudLogo">
            <span>
              <FaRegCircleCheck />
            </span>
          </div>
          <div className="LastConFimModalAddStudTitle">
            <h2>The student joined the attendance</h2>
            <p>Confirmed that the student has come to lesson!</p>
          </div>
        </div>
      </div>
    </>
  );
}
