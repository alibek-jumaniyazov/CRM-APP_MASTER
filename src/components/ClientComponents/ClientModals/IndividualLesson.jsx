import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp, FaChevronDown, FaRegCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import InputIcon from "./../../../Assets/Input_Icon.svg";
import { Icons } from "../../../Assets/icons/icons";

export default function IndividualLesson({ individual, setIndividual }) {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const [isCustomPrice, setIsCustomPrice] = useState(false);

  const [IndividualModalSecond, setIndividualModalSecond] = useState(false);
  const [AddIndividualModalQuest, setAddIndividualModalQuest] = useState(false);

  const togleDropdownOne = () => {
    setIsOpenOne(!isOpenOne);
  };
  const togleDropdownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const togleDropdownThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  const togleDropdownFour = () => {
    setIsOpenFour(!isOpenFour);
  };
  const togleDropdownFive = () => {
    setIsOpenFive(!isOpenFive);
  };

  const togleDropdownSix = () => {
    setIsOpenSix(!isOpenSix);
  };

  const togleDropdownSeven = () => {
    setIsOpenSeven(!isOpenSeven);
  };

  const handleCheckboxChange = (event) => {
    setIsCustomPrice(event.target.checked);
  };
  function handleOpenQuestModal() {
    setAddIndividualModalQuest(true);
    setIndividual(false);
  }

  function handleGoBackModal() {
    setIndividual(true);
    setAddIndividualModalQuest(false);
  }

  function handleOpenSecondModal() {
    setIndividual(false);
    setAddIndividualModalQuest(false);
    setIndividualModalSecond(true);
    setTimeout(() => {
      setIndividualModalSecond(false);
    }, 1000);
  }
  return (
    <div className="">
      {individual && (
        <div className="modal-overlay" onClick={() => setIndividual(false)}></div>
      )}
       {AddIndividualModalQuest && (
        <div className="modal-overlay" onClick={() => setAddIndividualModalQuest(false)}></div>
      )}
      <div className={individual ? "MakeNewStudentContainer IndividualLesson" : "none"}>
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setIndividual(false)}
        >
          <IoClose />
        </div>
        <div className="MakeNewStudentContainerBox">
          <div className="MakeNewStudentTitle">
            <h2>Add an individual lesson</h2>
            <p>Adding new individual lesson for student</p>
          </div>
          <div className="MakeNewStudentSecondTitle">
            <p>
              Create individual lesson for <span>Alisher Atajanov</span>
            </p>
          </div>
          <div className="MakeNewStudentButtonsBox">
            <label>
              <p>Select subject*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownOne}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenOne ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenOne && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>Select level*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownTwo}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenTwo ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenTwo && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>Select teacher*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownThree}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenThree ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenThree && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>Select days*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownFour}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenFour ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenFour && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>General English: Beginner </button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>Select start time*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownFive}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenFive ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenFive && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>Select room*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownSix}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenSix ? <FaChevronDown /> : <FaAngleUp />}</span>
              </button>
              {isOpenSix && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
            <label>
              <p>{isCustomPrice ? "New monthly price*" : "Discount Amount"}</p>
              <div className="DropDuwnMakeModalAddStudInputBox">
                <span className="icon">
                  <img src={InputIcon} alt="" />
                </span>
                <input
                  type="text"
                  placeholder={isCustomPrice ? "Add new price" : "Amount"}
                  disabled={!isCustomPrice}
                />
              </div>
            </label>
            <label>
              <p>Select start day*</p>
              <button
                className="ModalAddStudSelectButton"
                onClick={togleDropdownSeven}
                type="button"
              >
                <p>Select</p>
                <span>{!isOpenSeven ? <FaAngleUp /> : <FaChevronDown />}</span>
              </button>
              {isOpenSeven && (
                <div className="dropdown DropDuwnMakeModalAddStudSelectContainer">
                  <div className="DropDuwnMakeModalAddStudSelect">
                    <button>3 odd days a week</button>
                    <button>3 even days a week</button>
                    <button>Every other day</button>
                    <button>Every day</button>
                    <button>Optional designation</button>
                  </div>
                </div>
              )}
            </label>
          </div>
          <div className="MakeNewStudentCheckBox">
            <FormGroup>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCustomPrice}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Create a new individual price"
                className="MakeNewStudentCheckBoxCheck"
              />{" "}
            </FormGroup>
          </div>
          <div className="MakeNewStudentInformation">
            <div className="MakeNewStudentInformationUp">
              <div className="MakeNewStudentInformationUpOne">
                <span>
                  Total number of lessons: <p> 165</p>
                </span>
                <span>
                  Total study duration: <p> 6 months</p>
                </span>
              </div>
              <div className="MakeNewStudentInformationUpTwo">
                <span>
                  Start time: <p> 17:00</p>
                </span>
                <span>
                  End time: <p> 19:00</p>
                </span>
              </div>
              <div className="MakeNewStudentInformationUpThree">
                <span>
                  Start day: <p> May 15</p>
                </span>
                <span>
                  End day: <p> December 15</p>
                </span>
              </div>
            </div>
            <div className="MakeNewStudentInformationDown">
              <div className="MakeNewStudentInformationDownOne">
                <span>
                  Start day: <p> May 15</p>
                </span>
                <span>
                  Monthly discount:<p> 28 000 so’m</p>
                </span>
              </div>
              <div className="MakeNewStudentInformationDownTwo">
                <span>
                  Total payment:<p> 1 200 000 so’m</p>
                </span>
                <span>
                  Total discount:<p> 168 000 so’m</p>
                </span>
              </div>
            </div>
          </div>
          <div className="ModaAddStudButtons">
            <button
              className="ModaAddStudButtonsCancel"
              onClick={() => setIndividual(false)}
            >
              Cancel
            </button>
            <button
              className="ModaAddStudButtonsNext"
              onClick={handleOpenQuestModal}
            >
              Confrim
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          AddIndividualModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck SendSmsGroupDiv"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddIndividualModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle ">
          <h2>Confirm adding new individual lesson for student</h2>
          <p>
            Do you want to confirm adding
            <br /> new individual lesson for student?
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

      <div
        className={IndividualModalSecond ? "LastConFimModalAddStud SendSmsGroupDiv" : "none"}
      >
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2>Done successfully</h2>
          <p>Added new individual lesson</p>
        </div>
      </div>
    </div>
  );
}
