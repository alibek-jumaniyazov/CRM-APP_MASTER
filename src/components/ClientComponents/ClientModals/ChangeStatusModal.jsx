import React, { useState, useEffect } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Select } from "antd";
import axios from "axios";

export default function ChangeStatusModal({ ChangeStatus, setChangeStatus, getActive, dropClient }) {
  const [ChangeStatusModalSecond, setChangeStatusModalSecond] = useState(false);
  const [AddChangeStatusModalQuest, setAddChangeStatusModalQuest] = useState(false);

  const storedToken = localStorage.getItem('token');
  const changeStatus = async () => {
    try {
      const response = await axios.patch(`https://api.quickhub.uz/api/client/all/${dropClient.id}/change_status/`, statusValue, {
        headers: {
          Authorization: `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      setStatus({
        status: dropClient.status || "Select"
      })
      getActive();
    } catch (err) {
      console.error(err);
    }
  };

  const [statusValue, setStatus] = useState({
    status: dropClient.status || "Select",
  });

  useEffect(() => {
    setStatus({ status: dropClient.status });
  }, [dropClient.status]);

  function handleOpenQuestModal() {
    setAddChangeStatusModalQuest(true);
    setChangeStatus(false);
  }

  function handleGoBackModal() {
    setChangeStatus(true);
    setAddChangeStatusModalQuest(false);
  }

  function handleOpenSecondModal() {
    setChangeStatus(false);
    changeStatus();
    setAddChangeStatusModalQuest(false);
    setChangeStatusModalSecond(true);
    setTimeout(() => {
      setChangeStatusModalSecond(false);
    }, 1000);
  }

  const handleChange = (value) => {
    setStatus({
      status: value,
    });
  };



  return (
    <div className="">
      {
        ChangeStatus && (
          <div className="modal-overlay" onClick={() => setChangeStatus(false)}></div>
        )
      }
      {
        AddChangeStatusModalQuest && (
          <div className="modal-overlay" onClick={() => setAddChangeStatusModalQuest(false)}></div>
        )
      }
      <div className={ChangeStatus ? "AddSalaryModal NewCustomerModal ChangeStatusModal" : "none"}>
        <div className="NewCustomerModalHeader">
          <div className="" onClick={() => setChangeStatus(false)}>
            <Icons.close />
          </div>
        </div>
        <div className="NewCustomerModalTitles">
          <p>Change student status</p>
          <span>Change a student's current status</span>
        </div>
        <div className="ChangeStatusModalInfo">
          <p>{dropClient.name} {dropClient.last_name}</p>
          <Select
            value={statusValue.status}
            className="studentMenu1_chil_form_selectt"
            style={{
              width: "213px",
              height: "45px",
              color: "#707683",
              outline: "none",
              borderRadius: "100px!important",
            }}
            onChange={handleChange}
            options={[
              {
                value: "active",
                label: <div className="statusWidth">Active</div>,
              },
              {
                value: "frozen",
                label: (
                  <div
                    className="statusWidth"
                    style={{ background: "#FFB946" }}
                  >
                    Frozen
                  </div>
                ),
              },
              {
                value: "stopped",
                label: (
                  <div
                    className="statusWidth"
                    style={{ background: "#F7685B" }}
                  >
                    Stopped
                  </div>
                ),
              },
              {
                value: "finished",
                label: (
                  <div
                    className="statusWidth"
                    style={{ background: "#33A9FF" }}
                  >
                    Finished
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="AddSalaryModalButtons">
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setChangeStatus(false)}>Cancel</button>
            <button
             style={{ border:"none"}}
              id="YesConFimModalAddStudButtons"
              onClick={handleOpenQuestModal}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          AddChangeStatusModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck SendSmsGroupDiv"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddChangeStatusModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle">
          <h2>Confirm status change</h2>
          <p>
            Do you approve the change
            <br /> of student status?
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

      <div className={ChangeStatusModalSecond ? "LastConFimModalAddStud SendSmsGroupDiv" : "none"}>
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2>Status changed</h2>
          <p>Status changed successfully</p>
        </div>
      </div>
    </div>
  );
}
