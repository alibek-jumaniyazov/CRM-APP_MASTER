import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";

export default function UnarchiveTableModal({
  UnarchiveModalQuest,
  setUnarchiveModalQuest,
  archiveId,
  getActive,
  getArchive
}) {
  const [unarchiveModalSecond, setUnarchiveModalSecond] = useState(false);
  const storedToken = localStorage.getItem('token');
  const body = {
    "arxive": false,
  }
  const addUnArchive = async () => {
    try {
      const response = await axios.patch(`https://api.quickhub.uz/api/client/arxive/${archiveId}/set-archive/`, body, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      getActive()
      getArchive()
    } catch (err) {
      console.log(err);
    }
  };

  function handleOpenSecondModal() {
    setUnarchiveModalQuest(false);
    setUnarchiveModalSecond(true);
    addUnArchive()
    setTimeout(() => {
      setUnarchiveModalSecond(false);
    }, 1000);
  }

  return (
    <>
      {UnarchiveModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setUnarchiveModalQuest(false)}
        ></div>
      )}
      <div className="ArchiveTableModal">
        <div className={UnarchiveModalQuest ? "ConFimModalAddStud" : "none"}>
          <div
            className="ConFimModalAddStudClose"
            onClick={() => setUnarchiveModalQuest(false)}
          >
            <Icons.close />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Unarchive this student</h2>
            <p>
              Are you sure you want to unarchive the this <br /> student ?
            </p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setUnarchiveModalQuest(false)}>Cancel</button>
            <button
              style={{ border: "none" }}
              id="YesConFimModalAddStudButtons"
              onClick={handleOpenSecondModal}
            >
              Yes
            </button>
          </div>
        </div>

        <div className={unarchiveModalSecond ? "LastConFimModalAddStud" : "none"}>
          <div className="ConFimModalAddStudLogo">
            <span>
              <FaRegCircleCheck />
            </span>
          </div>
          <div className="LastConFimModalAddStudTitle">
            <h2>Unarchived</h2>
            <p>The operation was completed successfully</p>
          </div>
        </div>
      </div>
    </>
  );
}
