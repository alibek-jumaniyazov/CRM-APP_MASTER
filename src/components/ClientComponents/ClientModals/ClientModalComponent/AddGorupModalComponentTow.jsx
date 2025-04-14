import React, { useState } from "react";
import { DatePicker, Radio } from "antd";
import { FaAngleUp, FaChevronDown, FaRegCircleCheck } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdInfoOutline } from "react-icons/md";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import InputIcon from "../../../../Assets/Input_Icon.svg";

export default function AddGorupModalComponentTow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTherdOne, setisOpenTherdOne] = useState(false);
  const [isOpenTherdTwo, setisOpenTherdTwo] = useState(false);
  const [isOpenTherdThree, setisOpenTherdThree] = useState(false);
  const [isOpenTherdFour, setisOpenTherdFoyr] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [isCustomPrice, setIsCustomPrice] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCustomPrice(event.target.checked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const togleDropdownTherdOne = () => {
    setisOpenTherdOne(!isOpenTherdOne);
  };

  const togleDropdownTherdTwo = () => {
    setisOpenTherdTwo(!isOpenTherdTwo);
  };

  const togleDropdownTherdThree = () => {
    setisOpenTherdThree(!isOpenTherdThree);
  };

  const togleDropdownTherdFour = () => {
    setisOpenTherdFoyr(!isOpenTherdFour);
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setIsDropdownVisible(false);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue((prevValue) => (prevValue === value ? "" : value));
  };

  const handleToggle = (id) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.includes(id)
        ? prevSelectedValues.filter((value) => value !== id)
        : [...prevSelectedValues, id]
    );
  };

  const items = [
    { id: 1, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 2, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 3, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 4, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 5, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 6, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 7, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 8, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 9, teacher: "Mr.Johnson", time: "TTS - 14:00" },
    { id: 10, teacher: "Mr.Johnson", time: "TTS - 14:00" },
  ];

  return (
    <div>
      <div className="AddtoGroupValueModal">
        <div className="GroupLessonAddStudTitle">
          <span>
          Select group to add<p>Alisher Atajanov</p>
          </span>
        </div>
        <div className="GroupLessonAddStudButtons">
          <label>
            <p>Select subject</p>
            <button
              className="ModalAddStudSelectButton "
              onClick={togleDropdownTherdOne}
              type="button"
            >
              <p>Select</p>
              <span>{!isOpenTherdOne ? <FaChevronDown /> : <FaAngleUp />}</span>
            </button>
            {isOpenTherdOne && (
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
            <p>Select level</p>
            <button
              className="ModalAddStudSelectButton "
              onClick={togleDropdownTherdTwo}
              type="button"
            >
              <p>Select</p>
              <span>{!isOpenTherdTwo ? <FaChevronDown /> : <FaAngleUp />}</span>
            </button>
            {isOpenTherdTwo && (
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
            <p>Select teacher</p>
            <button
              className="ModalAddStudSelectButton "
              onClick={togleDropdownTherdThree}
              type="button"
            >
              <p>Select</p>
              <span>
                {!isOpenTherdThree ? <FaChevronDown /> : <FaAngleUp />}
              </span>
            </button>
            {isOpenTherdThree && (
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
            <p>Select days</p>
            <button
              className="ModalAddStudSelectButton "
              onClick={togleDropdownTherdFour}
              type="button"
            >
              <p>Select</p>
              <span>
                {!isOpenTherdFour ? <FaChevronDown /> : <FaAngleUp />}
              </span>
            </button>
            {isOpenTherdFour && (
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
        <div className="GroupLessonAddStudPoisk">
          <div className="GroupLessonAddStudPoiskButton">
            <label
              className={`GroupLessonAddStudPoiskButtonLabel ${
                isActive ? "activesearch" : ""
              }`}
            >
              <span></span>
              <input
                type="text"
                placeholder="Type the name of the group"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="GroupLessonAddStudPoiskSpisok">
            <div className="SpisokGlavUpTable">
              <span className="Group">
                Group names
                <p>
                  <HiChevronUpDown />
                </p>
              </span>
              <span className="Teacher">
                Teacher
                <p>
                  <HiChevronUpDown />
                </p>
              </span>
              <span className="Time">
                Time
                <p>
                  <HiChevronUpDown />
                </p>
              </span>
            </div>
            <div className="SpisokGlavUpContant">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`SpisokGlavUpTableContantBox ${
                    selectedValues.includes(item.id)
                      ? `activeContantBox${item.id}`
                      : ""
                  }`}
                  onClick={() => handleToggle(item.id)}
                >
                  <div className="SpisokGlavUpTableContantBoxCheck">
                    <Radio
                      className="SpisokGlavUpTableContantBoxCheckRadio"
                      checked={selectedValues.includes(item.id)}
                      onClick={(e) => e.stopPropagation()} // Prevents the `onClick` of the parent from firing
                      value={item.id}
                      name="toggle-radio"
                      inputProps={{ "aria-label": `Item ${item.id}` }}
                    />
                  </div>
                  <div className="SpisokGlavUpTableContantBoxGroup">
                    <p>
                      General English: Beginner <br />
                      level
                    </p>
                  </div>
                  <div className="SpisokGlavUpTableContantBoxteach">
                    <p>{item.teacher}</p>
                  </div>
                  <div className="SpisokGlavUpTableContantBoxTime">
                    <p>{item.time}</p>
                  </div>
                  <div className="SpisokGlavUpTableContantBoxInfo">
                    <button>
                      <MdInfoOutline />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="SpisokGlavButtonsFirst">
            <div className="SpisokGlavButtonsFirstButtons">
              <label>
                <p>Monthly discount</p>
                <div className="SpisokGlavButtonsFirstButtonsDuble">
                  <button className="left">
                    <span>
                      <img src={InputIcon} alt="" />
                    </span>
                    <p>Amount</p>
                  </button>
                  <button className="right" onClick={handleDropdownToggle}>
                    <p>{selectedValue}</p>
                    <span>
                      {isDropdownVisible ? <FaAngleUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  {isDropdownVisible && (
                    <div className="dropdownMenu">
                      <p onClick={() => handleSelectValue("So’m")}>So’m</p>
                      <p onClick={() => handleSelectValue("%")}>%</p>
                    </div>
                  )}
                </div>
              </label>
              <label>
                <p>Select start day*</p>
                <button
                  className="ModalAddStudSelectButtonaaaaa"
                  onClick={toggleDropdown}
                  type="button"
                >
                  <p>Select</p>
                  <span>{isOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
                </button>
                {isOpen && (
                  <div className="dropdown ModalAddStudSelectDropDown">
                    <div className="custom-datepicker ModalAddStudSelectButtonDatapicker">
                      <DatePicker inline />
                    </div>
                  </div>
                )}
              </label>
            </div>
            <div className="VrotEbal">
              <div className="MakeNewStudentCheckBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isCustomPrice}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Discount for the first month"
                    className="MakeNewStudentCheckBoxCheck"
                  />
                </FormGroup>
              </div>
            </div>
            {isCustomPrice && (
              <div className="SpisokGlavButtonsFirstButtons SecontBirTiyin">
                <label>
                  <p>Monthly discount</p>
                  <div className="SpisokGlavButtonsFirstButtonsDuble">
                    <button className="left">
                      <span>
                        <img src={InputIcon} alt="" />
                      </span>
                      <p>Amount</p>
                    </button>
                    <button className="right" onClick={handleDropdownToggle}>
                      <p>{selectedValue}</p>
                      <span>
                        {isDropdownVisible ? <FaAngleUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {isDropdownVisible && (
                      <div className="dropdownMenu">
                        <p onClick={() => handleSelectValue("So’m")}>So’m</p>
                        <p onClick={() => handleSelectValue("%")}>%</p>
                      </div>
                    )}
                  </div>
                </label>
                <label>
                  <p>Select start day*</p>
                  <button
                    className="ModalAddStudSelectButtonaaaaa"
                    onClick={toggleDropdown}
                    type="button"
                  >
                    <p>Select</p>
                    <span>{isOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
                  </button>
                  {isOpen && (
                    <div className="dropdown ModalAddStudSelectDropDown">
                      <div className="custom-datepicker ModalAddStudSelectButtonDatapicker">
                        <DatePicker inline />
                      </div>
                    </div>
                  )}
                </label>
              </div>
            )}

            <div className="MakeNewStudentInformation SecondPuuuul">
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
          </div>
        </div>
      </div>
    </div>
  );
}
