import React, { useState } from "react";
import { Checkbox, DatePicker, Radio, Select } from "antd";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Icons } from "../../../../Assets/icons/icons";
import { IoSearchSharp } from "react-icons/io5";

export default function FinanceAddPayment({ personalAddSalaryState, setPersonalAddSalary }) {
  const [value, setValue] = useState(1);
  const [modalCheck, setModalCheck] = useState(false);
  const [SalaryModalSecond, setSalaryModalSecond] = useState(false);
  const [AddSalaryModalQuest, setPersonalAddSalaryModalQuest] = useState(false);
  const [isOpenSearchData, setIsOpenSearchData] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleItemClick = (text) => {
    setSearchInput(text); // Set the input field value to the clicked item's text
    setIsOpenSearchData(false); // Optionally close the search results
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className={personalAddSalaryState ? "PosationModal AddSalaryModal NewCustomerModal" : "hidden"}>
        <div className="SendSmsGroupClose" onClick={() => setPersonalAddSalary(false)}>
          <Icons.close className="closeIcon" />
        </div>
        <div className="NewCustomerModalTitles">
          <p>Add a new student fee</p>
          <span>Add a new fee for the specified student</span>
        </div>
        <div className="FinanceModalSerach">
          <div className="FinanceModalSerachInfo">
            <IoSearchSharp />
            <input
              type="text"
              value={searchInput} // Set the value of the input field
              onClick={() => setIsOpenSearchData(!isOpenSearchData)}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search student"
            />
            <div className={isOpenSearchData ? "search_data" : "none"}>
              {[...Array(9)].map((_, index) => (
                <div key={index} onClick={() => handleItemClick(`Alisher Atajanov ${index}`)}>
                  <p>Alisher Atajanov {index}</p>
                  <p>+998 99 966 73 63</p>
                  <p>- 182 000 so'm</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="AddSalaryModalOneSelect">
          <label htmlFor="">Select course*</label>
          <Select
            defaultValue="select"
            className=""
            style={{
              width: "100%!important",
              height: "45px",
              color: "#707683",
              outline: " none",
              borderRadius: "10px!important",
            }}
            onChange={handleChange}
            options={[
              {
                value: "select",
                label: "Select",
              },
              {
                value: "Category 1",
                label: "Category 1",
              },
              {
                value: "Category 2",
                label: "Category 2",
              },
            ]}
          />
        </div>
        <div className="AddSalaryModalSelects">
          <div>
            <label htmlFor="">Select date</label>
            <DatePicker
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '10px',
                transform: "translateY(-1px)"
              }}
            />
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
              <span style={{ color: "#F7685B" }}>-183 000 so’m</span>
            </div>
            {/* <div className="AddSalaryModalBalanceInfoText">
              <p>Balance after pay:</p>
              <span>1 218 000 so’m</span>
            </div> */}
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
          <h2>Payment added</h2>
          <p>Payment have been added to the system</p>
        </div>
      </div>
    </>
  );
}
