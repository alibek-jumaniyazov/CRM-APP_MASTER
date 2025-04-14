import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icons } from "../../Assets/icons/icons";
import "../../components/GroupSendSms/GroupComponent.css";
import "react-datepicker/dist/react-datepicker.css";
import CourseLavelTable from "../../components/CourseComponents/CourseLavelTable";
import CourseLevelTodoList from "../../components/CourseComponents/CourseLevelTodoList";
import SendSmsQuestCourse from "../../components/CourseComponents/CourseSendSms/SendSmsQuestCourse";
import SendSmsSuccesCourse from "../../components/CourseComponents/CourseSendSms/SendSmsSuccesCourse";
import SendSmsCourse from "../../components/CourseComponents/CourseSendSms/SendSmsCourse";
import CourseTable from "../../components/CourseComponents/CourseTable";
import CourseDoteModal from "../../components/CourseComponents/CourseNoteModal";
import CourseDeleteDoteModal from "../../components/CourseComponents/CourseDeleteDoteModal";
import EditLevel from "../../components/EditLevelModal/EditLevel";
import axios from "axios";

export default function CourseLevel() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [EditCursemodal, setEditCursemodal] = useState(false)
  const { id, name } = useParams();

  const OpenEditCurse = () => {
    setEditCursemodal(true)
  }

  const CloseEditCurse = () => {
    setEditCursemodal(false)
  }


  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  const [showDivChildren1, setShowDivChildren1] = useState(true);
  const [showDivChildren2, setShowDivChildren2] = useState(false);

  const toggleDivChildren1 = () => {
    setShowDivChildren1(true);
    setShowDivChildren2(false);
  };

  const toggleDivChildren2 = () => {
    setShowDivChildren1(false);
    setShowDivChildren2(true);
  };
  const [DoteModal, setDoteModal] = useState(false)
  const [DoteDeleteQuest, setDoteDeleteQuest] = useState(false)
  const [SendSmsQuest, setSendSmsQuest] = useState(false);
  const [SendSmsSucces, setSendSmsSucces] = useState(false);
  const [sendSms, SetsendSms] = useState(false);

  const OpenSuccesDSendFun = () => {
    setSendSmsQuest(false);
    setSendSmsSucces(true);
    setTimeout(() => {
      setSendSmsSucces(false);
    }, 1500);
  };
  const OpenSendQuestFun = () => {
    SetsendSms(false);
    setSendSmsQuest(true);
  };
  const BackSendSmsFun = () => {
    SetsendSms(true);
    setSendSmsQuest(false);
  };
  const [Groups, setGroups] = useState([
    {
      number: 1,
      countStudents: 12,
      id: "000001",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 2,
      countStudents: 12,
      id: "000002",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 3,
      countStudents: 12,
      id: "000003",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 4,
      countStudents: 12,
      id: "000004",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 5,
      countStudents: 12,
      id: "000005",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 6,
      countStudents: 12,
      id: "000006",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 7,
      countStudents: 12,
      id: "000007",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 8,
      countStudents: 12,
      id: "000008",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 9,
      countStudents: 12,
      id: "000009",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 10,
      countStudents: 12,
      id: "000010",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 11,
      countStudents: 12,
      id: "0000011",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
    {
      number: 12,
      countStudents: 12,
      id: "000012",
      name: "Group name 48",
      age: "28 y.o",
      dob: "28.02.1996",
      points: "160 points",
      ptxt: "points",
      level: "Intermediate",
      lessonName: "General English",
      teacher: "Mr.Aleksey",
      studyStartTime: "14:00",
      studyTime: "Odd days",
      studyStart: "02.03.2024",
      studyEnd: "03.09.2024",
      room: "Room 2-3",
      lessonDglav: "General English",
      LessonDmain: "Intermediate level",
      sourcew: "Web site",
      sourceo: "Outdoor advertising",
    },
  ]);

  const storedToken = localStorage.getItem('token');
  const getCourseGroup = async () => {
    try {
      const { data } = await axios.get(`https://api.quickhub.uz/api/course/all/${id}`, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setGroups(data.groups_as_course);
      console.log(data.groups_as_course);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(Groups);


  useEffect(() => {
    getCourseGroup();
  }, []);




  return (
    <div className="CoursePage CourseLevel">
      {EditCursemodal && (
        <EditLevel onClose={CloseEditCurse} />
      )}
      <div className="GroupPosition">
        <SendSmsQuestCourse
          SendSmsQuest={SendSmsQuest}
          setSendSmsQuest={setSendSmsQuest}
          OpenSuccesDSendFun={OpenSuccesDSendFun}
          BackSendSmsFun={BackSendSmsFun}
        />
        <SendSmsSuccesCourse SendSmsSucces={SendSmsSucces} />
        <SendSmsCourse
          sendSms={sendSms}
          SetsendSms={SetsendSms}
          OpenSendQuestFun={OpenSendQuestFun}
        />
        <CourseDoteModal DoteModal={DoteModal} setDoteModal={setDoteModal} setDoteDeleteQuest={setDoteDeleteQuest} />
        <CourseDeleteDoteModal DoteDeleteQuest={DoteDeleteQuest} setDoteDeleteQuest={setDoteDeleteQuest} />
      </div>
      <div className="CoursesHeader">
        <div className="CourseInfoLevelHeaderTitle">
          <Link to={`/course-page/${name}/${id}`}>
            <button className="CourseInfoHeaderBackTo">
              <Icons.leftArrow />
            </button>
          </Link>
          <div className="CourseLevelHeaderToggles">
            <p id="ActiveP" onClick={toggleDiv1} className={showDiv1 ? "active" : ""}>
              Main
            </p>
            <p id="ActiveP" onClick={toggleDiv2} className={showDiv2 ? "active" : ""}>
              Lessons
            </p>
          </div>
        </div>
        <div
          onClick={toggleDiv1}
          className={showDiv1 ? "CourseInfoHeaderButtons" : "hidden"}
        >
          <button className="CourseInfoHeaderButtonOne" onClick={OpenEditCurse}>
            <Icons.edit /> Edit course
          </button>
          <button className="CourseInfoHeaderButtonTwo" onClick={() => SetsendSms(true)}>
            <Icons.send /> Send sms
          </button>
          <button className="CourseInfoHeaderButtonOne donteBtn" onClick={() => setDoteModal(!DoteModal)}>
            <Icons.dote />
          </button>
        </div>
      </div>
      {showDiv1 && (
        <div className="CourseContent1">
          <div className="CourseContentCards">
            <div className="CourseContentCard">
              <div className="">
                <p>Course name:</p>
                <span>English</span>
              </div>
              <div className="">
                <p>Level name: </p>
                <span>Beginner</span>
              </div>
              <div className="">
                <p>Lessons:</p>
                <span>120</span>
              </div>
            </div>
            <div className="CourseContentCard">
              <div className="">
                <p>Course name:</p>
                <span>English</span>
              </div>
              <div className="">
                <p>Level name: </p>
                <span>Beginner</span>
              </div>
              <div className="">
                <p>Lessons:</p>
                <span>120</span>
              </div>
            </div>
            <div className="CourseContentCard">
              <div className="">
                <p>Course name:</p>
                <span>English</span>
              </div>
              <div className="">
                <p>Level name: </p>
                <span>Beginner</span>
              </div>
              <div className="">
                <p>Lessons:</p>
                <span>120</span>
              </div>
            </div>
            <div className="CourseContentCard">
              <div className="">
                <p>Course name:</p>
                <span>English</span>
              </div>
              <div className="">
                <p>Level name: </p>
                <span>Beginner</span>
              </div>
              <div className="">
                <p>Lessons:</p>
                <span>120</span>
              </div>
            </div>
          </div>
          <div className="">
            {/* <CourseLavelTable /> */}
            <CourseTable Groups={Groups} setGroups={setGroups} />
          </div>
        </div>
      )}
      {showDiv2 && (
        <div className="CourseContent2">
          <div className="CourseLevelTypes">
            <p className="CourseLevelTypesTitle">Types of course</p>
            <div
              onClick={toggleDivChildren1}
              className={
                showDivChildren1 ? "CourseLevelTypeActive" : "CourseLevelType"
              }
            >
              <div className="CourseLevelTypeNumber">
                <p>01</p>
                <p>Group type</p>
              </div>
              <div className="CourseLevelTypelessons">
                <Icons.book />
                <p>105 lessons</p>
              </div>
            </div>
            <div
              onClick={toggleDivChildren2}
              className={
                showDivChildren2 ? "CourseLevelTypeActive" : "CourseLevelType"
              }
            >
              <div className="CourseLevelTypeNumber">
                <p>02</p>
                <p>Individual type</p>
              </div>
              <div className="CourseLevelTypelessons">
                <Icons.book />
                <p>105 lessons</p>
              </div>
            </div>
          </div>
          {showDivChildren1 && (
            <div className="">
              <CourseLevelTodoList />
            </div>
          )}
          {showDivChildren2 && (
            <div className="">
              <CourseLevelTodoList />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
