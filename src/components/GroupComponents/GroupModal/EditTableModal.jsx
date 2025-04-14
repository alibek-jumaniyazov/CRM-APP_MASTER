import React, { useEffect, useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import axios from "axios";

export default function EditTableModal({ editTable, setEditTable, dropClient, getActive }) {
  const [EditTableModalSecond, setEditTableModalSecond] = useState(false);
  const [AddEditTableModalQuest, setAddEditTableModalQuest] = useState(false);
  const [courseSelect, SetCourseSelect] = useState([]);
  const [roomSelect, SetRoomSelect] = useState([]);
  const [coursePersnoal, SetCoursePersnoal] = useState([]);

  const storedToken = localStorage.getItem('token');
  const getCourse = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/course/all/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(data.map(item => item.name));
      SetCourseSelect(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getRoom = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/groups/rooms/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(data.map(item => item.name));
      SetRoomSelect(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getPersonal = async () => {
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/personal/all/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      SetCoursePersnoal(data.map(item => item));
      console.log(data.map(item => item.first_name));

    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getCourse();
    getPersonal()
    getRoom()
  }, []);

  const editGroup = async () => {
    try {
      const response = await axios.patch(`https://api.quickhub.uz/api/groups/all/${dropClient.id}/edit-group/`, body, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      getActive()
    } catch (err) {
      console.log(err);
    }
  };

  function handleOpenQuestModal() {
    setAddEditTableModalQuest(true);
    setEditTable(false);
  }

  function handleGoBackModal() {
    setEditTable(true);
    setAddEditTableModalQuest(false);
  }

  function handleOpenSecondModal() {
    setEditTable(false);
    setAddEditTableModalQuest(false);
    setEditTableModalSecond(true);
    editGroup()
    setTimeout(() => {
      setEditTableModalSecond(false);
    }, 1000);
  }

  const [body, setBody] = useState({
    group_duration: dropClient.group_duration || "",
    group_name: dropClient.group_name || "",
    course: dropClient.course?.id || "select",
    teacher_fk_user: dropClient.teacher_fk_user
      ? dropClient.teacher_fk_user.id
      : "",
    teacher_percentage: dropClient.teacher_percentage || "",
    start_day: dropClient.start_day || "",
    days: dropClient.days || "select",
    start_time: dropClient.start_time || "select",
    room: dropClient.room || "select",
  });

  useEffect(() => {
    if (dropClient) {
      setBody({
        group_duration: dropClient.group_duration || "",
        group_name: dropClient.group_name || "",
        course: dropClient.course?.id || "select",
        teacher_fk_user: dropClient.teacher_fk_user
          ? dropClient.teacher_fk_user.id
          : "",
        teacher_percentage: dropClient.teacher_percentage || "",
        start_day: dropClient.start_day || "",
        days: dropClient.days || "select",
        start_time: dropClient.start_time || "select",
        room: dropClient.room || "select",
      });
    }
  }, [dropClient]);

  const handleChange = (key, value) => {
    setBody(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };


  return (
    <>
      {editTable && (
        <div
          className="modal-overlay"
          onClick={() => setEditTable(false)}
        >
        </div>
      )}
      <div className={editTable ? "EditTableModal NewCustomerModal" : "none"}>
        <div className="NewCustomerModalHeader">
          <div className="" onClick={() => setEditTable(false)}>
            <Icons.close />
          </div>
        </div>
        <div className="EditTableModalSelects">
          <div className="EditTableModalTitles">
            <div className="MakeNewStudentTitle">
              <h2>Edit an individual lesson</h2>
              <p>Editing individual lesson for student</p>
            </div>
            <div className="MakeNewStudentSecondTitle">
              <p>
                Edit individual lesson for <span>{dropClient.teacher_fk_user ? `${dropClient.teacher_fk_user.first_name} ${dropClient.teacher_fk_user.last_name}` : "N/A"}</span>
              </p>
            </div>

          </div>
          <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
            <div>
              <label htmlFor="">
                Group name (optional)
                <span>
                  <Icons.questMark />
                </span>
              </label>
              <input
                placeholder="Group name"
                type="text"
                value={body.group_name}
                onChange={e => handleChange("group_name", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">
                Select course<span>*</span>
              </label>
              <Select
                showSearch
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                value={body.course}
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={value => handleChange("course", value)}
                options={
                  courseSelect.map(item => ({
                    value: item.id,
                    label: item.name,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="">
                Select teacher <span>*</span>
              </label>
              <Select
                showSearch
                // defaultValue="Select teacher"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                defaultValue="Select teacher"
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                value={body.teacher_fk_user}
                onChange={value => handleChange("teacher_fk_user", value)}
                options={
                  coursePersnoal.map(item => ({
                    value: item.id,
                    label: `${item.first_name} ${item.last_name}`
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="">
                Teacher percentage<span>*</span>
              </label>
              <input
                type="number"
                value={body.teacher_percentage}
                onChange={e => handleChange("teacher_percentage", e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div>
              <label htmlFor="">
                Select days<span>*</span>
              </label>
              <Select
                value={body.days}
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={value => handleChange("days", value)}
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
              <label htmlFor="">
                Select start time<span>*</span>
              </label>
              <Select
                value={body.start_time}
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={value => handleChange("start_time", value)}
                options={[
                  {
                    value: "0900",
                    label: "09:00",
                  },
                  {
                    value: "1400",
                    label: "14:00",
                  },
                  {
                    value: "1800",
                    label: "18:00",
                  },
                ]}
              />
            </div>
            <div>
              <label htmlFor="">
                Select room <span>*</span>{" "}
              </label>
              <Select
                showSearch
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                value={body.room}
                className="studentMenu1_chil_form_selectt"
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={value => handleChange("room", value)}
                options={
                  roomSelect.map(item => ({
                    value: item.name,
                    label: item.name
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="" className="dataPIcker">
                Select start day <span>*</span>{" "}
              </label>
              <DatePicker
                style={{
                  width: "213px",
                  height: "45px",
                  color: "#707683",
                  outline: " none",
                  borderRadius: "100px!important",
                }}
                onChange={value => handleChange("start_day", value)}
                value={body.start_day ? dayjs(body.start_day) : null} />
            </div>
          </div>

          <div className="AddSalaryModalButtons">
            <div className="ConFimModalAddStudButtons">
              <button onClick={() => setEditTable(false)}>Cancel</button>
              <button
                style={{ border: "none" }}
                id="YesConFimModalAddStudButtons"
                onClick={handleOpenQuestModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modals */}
      <div
        className={
          AddEditTableModalQuest
            ? "ConFimModalAddStud addSalaryQuestModalCheck"
            : "none"
        }
      >
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddEditTableModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle ">
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

      {/* Success Modal */}
      <div className={EditTableModalSecond ? "LastConFimModalAddStud" : "none"}>
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
    </>
  );
}
