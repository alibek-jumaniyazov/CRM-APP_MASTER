import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";

export default function DeleteTableModal({
  customerModalQuest,
  setCustomerModalQuest,
  dropClient,
  getLoading,
  url,
}) {
  const [customerModalSecond, setCustomerModalSecond] = useState(false);

  function handleOpenSecondModal() {
    setCustomerModalQuest(false);
    setCustomerModalSecond(true);
    deleteTable();
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  }

  const storedToken = localStorage.getItem("token");

  const deleteTable = async () => {
    try {
      const response = await axios.delete(`${url}${dropClient.id}`, {
        headers: {
          Authorization: `Token ${storedToken}`,
          "Content-Type": "application/json",
        },
      });
      getLoading();
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
     {customerModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setCustomerModalQuest(false)}
        ></div>
      )}
    <div className="DeleteTableModal">
      <div className={customerModalQuest ? "ConFimModalAddStud" : "none"}>
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setCustomerModalQuest(false)}
          >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle">
          <h2>Delete the student</h2>
          <p>
            Do you want to confirm the complete deletion <br /> of the student
            page from the system?
          </p>
        </div>
        <div className="ConFimModalAddStudButtons">
          <button onClick={() => setCustomerModalQuest(false)}>Cancel</button>
          <button
            style={{ background: "#F7685B", border: "none" }}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
            >
            Delete
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
          <h2>Student successfully deleted</h2>
          <p>
            This student's page has been completely <br />
            deleted from the system
          </p>
        </div>
      </div>
    </div>
            </>
  );
}
