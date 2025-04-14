import "./MakeaStudent.css";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import InputIcon from "./../../Assets/Input_Icon.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdInfoOutline } from "react-icons/md";
import { DatePicker, Input, Select } from "antd";

export default function MakeaStudent({ onClose }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const [isOpenSecondObe, setisOpenSecondObe] = useState(false);
  const [isOpenSecondTwo, setisOpenSecondTwo] = useState(false);
  const [isOpenSecondThree, setisOpenSecondThree] = useState(false);
  const [isOpenSecondFour, setisOpenSecondFour] = useState(false);
  const [isOpenSecondSix, setisOpenSecondSix] = useState(false);
  const [isOpenSecondSeven, setisOpenSecondSeven] = useState(false);
  const [isCustomPrice, setIsCustomPrice] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedValues, setSelectedValues] = useState([]);

  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(today.getDate() + 7);

  const isDateInTwoWeeksRange = (date) => {
    return date >= sevenDaysAgo && date <= sevenDaysLater;
  };

  const handleCheckboxChange = (event) => {
    setIsCustomPrice(event.target.checked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  const togleDropdownSecondOne = () => {
    setisOpenSecondObe(!isOpenSecondObe);
  };

  const togleDropdownSecondTwo = () => {
    setisOpenSecondTwo(!isOpenSecondTwo);
  };

  const togleDropdownSecondThree = () => {
    setisOpenSecondThree(!isOpenSecondThree);
  };

  const togleDropdownSecondFour = () => {
    setisOpenSecondFour(!isOpenSecondFour);
  };

  const togleDropdownSecondSix = () => {
    setisOpenSecondSix(!isOpenSecondSix);
  };

  const togleDropdownSecondSeven = () => {
    setisOpenSecondSeven(!isOpenSecondSeven);
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
  const handleNext = () => {
    if (!selectedValue) {
      setError(true);
    } else {
      setError(false);
      if (selectedValue === "Individual lessons") {
        setStep(2); // Переход к модальному окну для индивидуальных уроков
      } else if (selectedValue === "Group lessons") {
        setStep(6); // Переход к модальному окну для групповых уроков
      }
    }
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

  const [isOpenTherdOne, setisOpenTherdOne] = useState(false);
  const [isOpenTherdTwo, setisOpenTherdTwo] = useState(false);
  const [isOpenTherdThree, setisOpenTherdThree] = useState(false);
  const [isOpenTherdFour, setisOpenTherdFoyr] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  const [step, setStep] = useState(1);

  return (
    <div className="ModalMakeContainer" style={{zIndex:1000}}>
      {step === 1 && (
        <div className="ModalAddStud">
          <div className="ConFimModalAddStudClose" onClick={onClose}>
            <IoClose />
          </div>
          <div className="ModalAddStudTitle">
            <h2>Add a new student</h2>
            <p>Fill in the requested information below</p>
          </div>
          <div className="newLeaadCard_studentMenu1_chil_form">
            <div>
              <label>First name*</label>
              <Input
                placeholder="John"
                type="text"
              // value={leadModal.first_name}
              // onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <label>Last name*</label>
              <Input
                placeholder="Anderson"
                type="text"
              // value={leadModal.last_name}
              // onChange={(e) => handleChange('last_name', e.target.value)}
              />
            </div>
            <div>
              <label>Phone number*</label>
              <Input
                placeholder="+998"
                type="tel"
              // value={leadModal.phone_number}
              // onChange={(e) => handleChange('phone_number', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Brihday*</label>
              <DatePicker
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '10px',
                  transform: "translateY(-1px)"
                }}
              // onChange={handleDateChange2}
              />
            </div>
          </div>
          <div className="ModalAddStudLessonSelect">
            <div className="ModalAddStudLessonSelectCheck">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className="ModalAddStudLessonSelectCheckTitle"
                >
                  Select type of lesson*
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="ModalAddStudLessonSelectCheckGlavBox"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Individual lessons"
                    control={<Radio />}
                    label="Individual lessons"
                    className="ModalAddStudLessonSelectCheck-control-label"
                  />
                  <FormControlLabel
                    value="Group lessons"
                    control={<Radio />}
                    label="Group lessons"
                    className="ModalAddStudLessonSelectCheck-control-label"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {error && (
              <div className="errorSelectMMMBox">
                <p className="errorSelectMMM">
                  Please select all required options
                </p>
              </div>
            )}
            <div className="ModaAddStudButtons">
              <button className="ModaAddStudButtonsCancel" onClick={onClose}>
                Cancel
              </button>
              <button className="ModaAddStudButtonsNext" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="MakeNewStudentContainer">
          <div className="MakeNewStudentContainerBox">
            <div className="ConFimModalAddStudClose" onClick={onClose}>
              <IoClose />
            </div>
            <div className="MakeNewStudentTitle">
              <h2>Add a new student</h2>
              <p>Fill in the requested information below</p>
            </div>
            <div className="MakeNewStudentSecondTitle">
              <p>
                Create individual lesson for <span>Alisher Atajanov</span>
              </p>
            </div>
            <div className="newLeaadCard_studentMenu1_chil_form" style={{ margin: "20px 0", gap: "11px" }}>
              <div>
                <label htmlFor="">Select subject</label>
                <Select
                  defaultValue="select"
                  className="studentMenu1_chil_form_selectt"
                  style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                  // onChange={(value) => handleChange('subject_type', value)}
                  options={[
                    { value: "Kimyo", label: "Kimyo" },
                    { value: "Math", label: "Mathematics" },
                    { value: "english", label: "English" },
                    { value: "Fizka", label: "Fizka" },
                  ]}
                />
              </div>
              <div>
                <label htmlFor="">Select level</label>
                <Select
                  defaultValue="select"
                  className="studentMenu1_chil_form_selectt"
                  style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                  // onChange={(value) => handleChange('lesson_type', value)}
                  options={[
                    { value: "Individual", label: "Individual" },
                    { value: "Group", label: "Group" },
                  ]}
                />
              </div>
              <div>
                <label htmlFor="">Select teacher</label>
                <Select
                  showSearch
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  defaultValue="select"
                  className="studentMenu1_chil_form_selectt"
                  style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                // onChange={(value) => handleChange('teacher_fk_user', value)}
                // options={coursePersnoal.map(item => ({
                //   value: item.id,
                //   label: `${item.first_name} ${item.last_name}`,
                // }))}
                />
              </div>
              <div>
                <label htmlFor="">Select days*</label>
                <Select
                  defaultValue="select"
                  className="studentMenu1_chil_form_selectt"
                  style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                  // onChange={(value) => handleChange('lesson_type', value)}
                  options={[
                    {
                      value: "Juft kun",
                      label: "Juft kun",
                    },
                    {
                      value: "Toq kun",
                      label: "Toq kun",
                    },
                  ]}
                />
              </div>
              <div>
                <label htmlFor="">Select start time*</label>
                <Select
                  defaultValue="Select"
                  className="studentMenu1_chil_form_selectt"
                  style={{
                    width: "213px",
                    height: "45px",
                    color: "#707683",
                    outline: "none",
                    borderRadius: "100px!important",
                  }}
                  // onChange={value => handleChange("lesson_time", value)}
                  options={[
                    { value: "0900", label: "09:00" },
                    { value: "1400", label: "14:00" },
                    { value: "1800", label: "18:00" },
                  ]}
                />
              </div>
              <div>
                <label htmlFor="">Select room*</label>
                <Select
                  showSearch
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  defaultValue="Select Room"
                  className="studentMenu1_chil_form_selectt"
                  style={{
                    width: "213px",
                    height: "45px",
                    color: "#707683",
                    outline: " none",
                    borderRadius: "100px!important",
                  }}
                // value={body1.room}
                // onChange={handleChange}
                // options={
                //   roomSelect.map(item => ({
                //     value: item.name,
                //     label: item.name
                //   }))
                // }
                />
              </div>
              <div>
                <label htmlFor="">Monthly discount*</label>
                <Input
                  placeholder="Amout"
                  type="text"
                // value={leadModal.first_name}
                // onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Select start day*</label>
                <DatePicker
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '10px',
                    transform: "translateY(-1px)"
                  }}
                // onChange={handleDateChange2}
                />
              </div>
              {/* <div className="newLeaadCard_studentMenu1_chil_form_select">
                <div className="newLeaadCard_studentMenu1_chil_form_select_check">
                  <label htmlFor=""></label>
                  <Checkbox
                  // onChange={onChangeChekboxGroup}
                  >Create a new individual price</Checkbox>
                </div>
              </div> */}
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
                onClick={() => setStep(1)}
              >
                Go back
              </button>
              <button
                className="ModaAddStudButtonsNext"
                onClick={() => setStep(4)}
              >
                Confrim
              </button>

            </div>
          </div>
        </div>
      )}

      {/* {step === 3 && (
        <div className="MakeNewStudentContainer">
          <div className="ConFimModalAddStudClose" onClick={onClose}>
            <IoClose />
          </div>
          <div className="MakeNewStudentContainerBox">
            <div className="MakeNewStudentTitle">
              <h2>Add a new studentzxczzx</h2>
              <p>Fill in the requested information below</p>
            </div>
            <div className="MakeNewStudentSecondTitle">
              <p>
                Create individual lesson for <span>Alisher Atajanov</span>
              </p>
            </div>
            <div
              className="MakeNewStudentButtonsBox"
              id="SrtepThreeMakeNewStudButBox"
            >
              <div className="MakeNewStudentButtonsBoxUp">
                <label>
                  <p>Select start day*</p>
                  <button
                    className="ModalAddStudSelectButton"
                    onClick={togleDropdownSecondOne}
                    type="button"
                  >
                    <p>Select</p>
                    <span>
                      {!isOpenSecondObe ? <FaAngleUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {isOpenSecondObe && (
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
                  <p>Select start day*</p>
                  <button
                    className="ModalAddStudSelectButton"
                    onClick={togleDropdownSecondTwo}
                    type="button"
                  >
                    <p>Select</p>
                    <span>
                      {!isOpenSecondTwo ? <FaAngleUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {isOpenSecondTwo && (
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
              <div className="MakeNewStudentButtonsBoxDown">
                <div className="MakeNewStudentButtonsBoxDownLeft">
                  <label className="NujenMarginDown">
                    <p>Select start day*</p>
                    <button
                      className="ModalAddStudSelectButton"
                      onClick={togleDropdownSecondThree}
                      type="button"
                    >
                      <p>Select</p>
                      <span>
                        {!isOpenSecondThree ? <FaAngleUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isOpenSecondThree && (
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
                  <label className="NujenMargin">
                    <p>Select start day*</p>
                    <button
                      className="ModalAddStudSelectButton"
                      onClick={togleDropdownSecondFour}
                      type="button"
                    >
                      <p>Select</p>
                      <span>
                        {!isOpenSecondFour ? <FaAngleUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isOpenSecondFour && (
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
                  <label className="NujenMargin">
                    <p>Select start day*</p>
                    <button
                      className="ModalAddStudSelectButton "
                      onClick={togleDropdownSecondSix}
                      type="button"
                    >
                      <p>Select</p>
                      <span>
                        {!isOpenSecondSix ? <FaAngleUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isOpenSecondSix && (
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
                <div className="MakeNewStudentButtonsBoxDownRight">
                  <label>
                    <p>Select start day*</p>
                    <button
                      onClick={() => setStep(2)}
                      className="ModalAddStudSelectButton"
                      type="button"
                    >
                      <p>Optional designation</p>
                      <span className="SuChAK">
                        <IoIosCloseCircleOutline />
                      </span>
                    </button>
                  </label>
                  <div className="MakeNewStudentButtonsBoxDownRightDateBox">
                    <div className="custom-datepicker MakeNewStudentButtonsBoxDownRightDate">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        inline
                        dayClassName={(date) =>
                          isDateInTwoWeeksRange(date) ? "" : "hidden-date"
                        }
                      />
                    </div>
                    <div className="SelectDaysRightDate">
                      <p>Selected date: {startDate.toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MakeNewStudentButtonsBoxDownSecond">
                <label>
                  <p>
                    {isCustomPrice ? "New monthly price*" : "Discount Amount"}
                  </p>
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
                  <div className="MakeNewStudentCheckBox axaxaxaxax">
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
                </label>
                <label>
                  <p>Select start day*</p>
                  <button
                    className="ModalAddStudSelectButton"
                    onClick={togleDropdownSecondSeven}
                    type="button"
                  >
                    <p>Select</p>
                    <span>
                      {!isOpenSecondSeven ? <FaAngleUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {isOpenSecondSeven && (
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
            </div>
            <div className="ModaAddStudButtons MarginModaAddStudButtons ">
              <button
                className="ModaAddStudButtonsCancel"
                onClick={() => setStep(2)}
              >
                Go back
              </button>
              <button
                className="ModaAddStudButtonsNext"
                onClick={() => setStep(4)}
              >
                Confrim
              </button>
            </div>
          </div>
        </div>
      )} */}
      {step === 4 && (
        <div className="ConFimModalAddStud">
          <div className="ConFimModalAddStudClose" onClick={onClose}>
            <IoClose />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Confirm add a new student</h2>
            <p>
              Do you confirm the addition of <br />a new student to the system?
            </p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setStep(2)}>Go back</button>
            <button
              id="YesConFimModalAddStudButtons"
              onClick={() => {
                setStep(5);
                setTimeout(() => {
                  onClose();
                }, 1000);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="LastConFimModalAddStud">
          <div className="ConFimModalAddStudLogo">
            <span>
              <FaRegCircleCheck />
            </span>
          </div>
          <div className="LastConFimModalAddStudTitle">
            <h2>A new student has been added</h2>
            <p>
              A new student has been successfully <br />
              added to the system
            </p>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="GroupLessonAddStud">
          <div className="ConFimModalAddStudClose" onClick={onClose}>
            <IoClose />
          </div>
          <div className="GroupLessonAddStudTitle">
            <h2>Add a new student</h2>
            <p>Fill in the requested information below</p>
            <span>
              Select group to add<p>Alisher Atajanov</p>
            </span>
          </div>
          <div className="newLeaadCard_studentMenu1_chil_form">
            <div>
              <label htmlFor="">Select subject</label>
              <Select
                defaultValue="select"
                className="studentMenu1_chil_form_selectt"
                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                // onChange={(value) => handleChange('subject_type', value)}
                options={[
                  { value: "Kimyo", label: "Kimyo" },
                  { value: "Math", label: "Mathematics" },
                  { value: "english", label: "English" },
                  { value: "Fizka", label: "Fizka" },
                ]}
              />
            </div>
            <div>
              <label htmlFor="">Select level</label>
              <Select
                defaultValue="select"
                className="studentMenu1_chil_form_selectt"
                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                // onChange={(value) => handleChange('lesson_type', value)}
                options={[
                  { value: "Individual", label: "Individual" },
                  { value: "Group", label: "Group" },
                ]}
              />
            </div>
            <div>
              <label htmlFor="">Select teacher</label>
              <Select
                showSearch
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                defaultValue="select"
                className="studentMenu1_chil_form_selectt"
                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
              // onChange={(value) => handleChange('teacher_fk_user', value)}
              // options={coursePersnoal.map(item => ({
              //   value: item.id,
              //   label: `${item.first_name} ${item.last_name}`,
              // }))}
              />
            </div>
            <div>
              <label htmlFor="">Select days</label>
              <Select
                defaultValue="select"
                className="studentMenu1_chil_form_selectt"
                style={{ width: "213px", height: "45px", color: "#707683", outline: " none", borderRadius: "100px!important" }}
                // onChange={(value) => handleChange('lesson_type', value)}
                options={[
                  {
                    value: "Juft kun",
                    label: "Juft kun",
                  },
                  {
                    value: "Toq kun",
                    label: "Toq kun",
                  },
                ]}
              />
            </div>
          </div>
          <div className="GroupLessonAddStudPoisk">
            <div className="GroupLessonAddStudPoiskButton">
              <div className="serachGroupInput">
                <IoSearchSharp />
                <input
                  type="text"
                  placeholder="Type the name of the group"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
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
                    className={`SpisokGlavUpTableContantBox ${selectedValues.includes(item.id)
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
            <div className="">
              <div className="newLeaadCard_studentMenu1_chil_form newLeaadCard_studentMenu1_chil_formDD">
                <div className="ChildDD">
                  <label htmlFor="">Monthly discount*</label>
                  <Input
                    placeholder="Amout"
                    type="text"
                  // value={leadModal.first_name}
                  // onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>
                <div className="ChildDD">
                  <label htmlFor="">Select start day*</label>
                  <DatePicker
                    style={{
                      width: '100%',
                      height: '39px',
                      borderRadius: '10px',
                      transform: "translateY(-2px)"
                    }}
                  // onChange={handleDateChange2}
                  />
                </div>
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
                <div className="newLeaadCard_studentMenu1_chil_form newLeaadCard_studentMenu1_chil_formDD">
                  <div className="ChildDD">
                    <label htmlFor="">Monthly discount*</label>
                    <Input
                      placeholder="Amout"
                      type="text"
                    // value={leadModal.first_name}
                    // onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </div>
                  <div className="ChildDD">
                    <label htmlFor="">Select start day*</label>
                    <DatePicker
                      style={{
                        width: '100%',
                        height: '39px',
                        borderRadius: '10px',
                        transform: "translateY(-2px)"
                      }}
                    // onChange={handleDateChange2}
                    />
                  </div>
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
          <div className="ModaAddStudButtons EsheOdin">
            <button
              className="ModaAddStudButtonsCancel "
              onClick={() => setStep(1)}
            >
              Go back
            </button>
            <button
              className="ModaAddStudButtonsNext"
              onClick={() => setStep(7)}
            >
              Confrim
            </button>
          </div>
        </div>
      )}
         {step === 7 && (
        <div className="ConFimModalAddStud">
          <div className="ConFimModalAddStudClose" onClick={onClose}>
            <IoClose />
          </div>
          <div className="ConFimModalAddStudTitle">
            <h2>Confirm add a new student</h2>
            <p>
              Do you confirm the addition of <br />a new student to the system?
            </p>
          </div>
          <div className="ConFimModalAddStudButtons">
            <button onClick={() => setStep(6)}>Go back</button>
            <button
              id="YesConFimModalAddStudButtons"
              onClick={() => {
                setStep(8);
                setTimeout(() => {
                  onClose();
                }, 1000);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
      {step === 8 && (
        <div className="LastConFimModalAddStud">
          <div className="ConFimModalAddStudLogo">
            <span>
              <FaRegCircleCheck />
            </span>
          </div>
          <div className="LastConFimModalAddStudTitle">
            <h2>A new student has been added</h2>
            <p>
              A new student has been successfully <br />
              added to the system
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
