import React, { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { Checkbox, Select } from "antd";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function NewCustomerModal({ customerModal, setCustomerModal }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [veiwHr, setVeiwHr] = useState(false);
  const [customerModalQuest, setCustomerModalQuest] = useState(false);
  const [customerModalSecond, setCustomerModalSecond] = useState(false);

  function handleCloseMainModal() {
    setCustomerModal(false);
    setCustomerModalQuest(true);
  }

  function handleCloseAllModal() {
    setCustomerModal(false);
    setCustomerModalQuest(false);
  }

  function handleOpenSecondModal() {
    setCustomerModal(false);
    setCustomerModalQuest(false);
    setCustomerModalSecond(true);
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  }

  return (
    <>
      <div className={customerModal ? "NewCustomerModal" : "none"}>
        <div className="NewCustomerModalHeader">
          <div className="" onClick={handleCloseAllModal}>
            <Icons.close />
          </div>
        </div>
        <div className="NewCustomerModalOneDiv">
          <div className="NewCustomerModalTitles">
            <p>Add a new customer</p>
            <span>Add new customer information</span>
          </div>
          <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
            <div>
              <label htmlFor="">
                First name <span>*</span>
              </label>
              <input type="text" placeholder="John" />
            </div>
            <div>
              <label htmlFor="">
                Last name <span>*</span>
              </label>
              <input type="text" placeholder="Anderson" />
            </div>
            <div>
              <label htmlFor="">
                Phone number <span>*</span>
              </label>
              <input type="text" placeholder="+998" />
            </div>
            <div>
              <label htmlFor="">
                Select subject <span>*</span>
              </label>
              <Select
                defaultValue="select"
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "select",
                    label: "Select",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div
          className="NewCustomerModalInfoHR"
          style={{padding:"0px 40px"}}
          onClick={() => setVeiwHr(!veiwHr)}
        >
          <span style={{ width: `${veiwHr ? "35px" : "103px"}` }}>
            {veiwHr ? "Hide" : "Show more"}
          </span>
          <div className="NewCustomerModalHR"></div>
          <div className={veiwHr ? "iconTopArrow" : "iconBottomArrow"}>
            <Icons.topArrow />
          </div>
        </div>
        <div
          className={
            veiwHr
              ? "NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form"
              : "none"
          }
        >
          <div>
            <label htmlFor="">Select lesson type</label>
            <Select
              defaultValue="select"
              className="studentMenu1_chil_form_selectt"
              style={{
                width: "213px",
                height: "45px",
                color: "#707683",
                outline: " none",
                borderRadius: "100px!important",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
          <div>
            <label htmlFor="">Select teacher</label>
            <Select
              defaultValue="select"
              className="studentMenu1_chil_form_selectt"
              style={{
                width: "213px",
                height: "45px",
                color: "#707683",
                outline: " none",
                borderRadius: "100px!important",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
          <div>
            <label htmlFor="">Select lesson time</label>
            <Select
              defaultValue="select"
              className="studentMenu1_chil_form_selectt"
              style={{
                width: "213px",
                height: "45px",
                color: "#707683",
                outline: " none",
                borderRadius: "100px!important",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
          <div>
            <label htmlFor="">Select lead source</label>
            <Select
              defaultValue="select"
              className="studentMenu1_chil_form_selectt"
              style={{
                width: "213px",
                height: "45px",
                color: "#707683",
                outline: " none",
                borderRadius: "100px!important",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
        </div>
        {/* <div className="NewCustomerModalCheck">
          <Checkbox>Add to lead board</Checkbox>
        </div> */}
        <div className="NewCustomerModalButtons">
          <button
            className="modalCancelBtn"
            onClick={() => setCustomerModal(false)}
          >
            Cancel
          </button>
          <button className="modalConfrimBtn" onClick={handleCloseMainModal}>
            Confrim
          </button>
        </div>
      </div>

      <div className={customerModalQuest ? "ConFimModalAddStud" : "none"}>
        <div className="ConFimModalAddStudClose" onClick={handleCloseAllModal}>
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle">
          <h2>Confirm add a new customer</h2>
          <p>
            Do you confirm the addition of <br /> a new student to the system?
          </p>
        </div>
        <div className="ConFimModalAddStudButtons">
          <button onClick={() => setCustomerModal(true)}>Go back</button>
          <button
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
          <h2>A new customer has been added</h2>
          <p>
            A new student has been successfully <br />
            added to the system
          </p>
        </div>
      </div>
    </>
  );
}
