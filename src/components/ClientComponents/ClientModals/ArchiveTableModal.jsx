import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";

export default function ArchiveTableModal({
  ArchiveModalQuest,
  setArchiveModalQuest,
  archiveId,
  getActive,
  getArchive
}) {
  const [customerModalSecond, setCustomerModalSecond] = useState(false);

  const storedToken = localStorage.getItem('token');
  const body = {
    "arxive": true,
  }
  const addArchive = async () => {
    try {
      const response = await axios.patch(`https://api.quickhub.uz/api/client/all/${archiveId}/set-archive/`, body, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      getActive();
      getArchive();
    } catch (err) {
      console.log(err);
    }
  };

  function handleOpenSecondModal() {
    setArchiveModalQuest(false);
    setCustomerModalSecond(true);
    addArchive();
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  }

  return (
    <>
      {ArchiveModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setArchiveModalQuest(false)}
        ></div>
      )}
      <div className="ArchiveTableModal">
        <div className={ArchiveModalQuest ? "ConFimModalAddStud" : "none"}>
          <div
            className="ConFimModalAddStudClose"
            onClick={() => setArchiveModalQuest(false)}
          >
            <Icons.close />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Archiving the student</h2>
            <p>Are you sure you want to archive this student?</p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setArchiveModalQuest(false)}>Cancel</button>
            <button
              style={{ background: "#F7685B", border: "none" }}
              id="YesConFimModalAddStudButtons"
              onClick={handleOpenSecondModal}
            >
              Archive
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
            <h2>Student successfully archived</h2>
            <p>
              This student's page has been <br />
              successfully archived
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
