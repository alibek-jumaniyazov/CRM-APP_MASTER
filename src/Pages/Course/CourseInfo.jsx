import React, { useEffect, useState } from "react";
import CourseInfoCard from "../../components/CourseComponents/CourseInfoCard";
import { Icons } from "../../Assets/icons/icons";
import { Link, useParams } from "react-router-dom";
import SendSmsQuestCourseLevel from "../../components/CourseComponents/CourseLevelSendSms/SendSmsQuestCourseLevel";
import SendSmsSuccesCourseLevel from "../../components/CourseComponents/CourseLevelSendSms/SendSmsSuccesCourseLevel";
import SendSmsCourseLevel from "../../components/CourseComponents/CourseLevelSendSms/SendSmsCourseLevel";
import EditModal from "../../components/EditCourseModal/EditModal";
import axios from "axios";

export default function CourseInfo() {
  const [CourseInfos, setCourseInfos] = useState([]);
  const { id, name } = useParams();
  const [courseNameInfo, setCourseNameInfo] = useState({});
  const [SendSmsQuest, setSendSmsQuest] = useState(false);
  const [SendSmsSucces, setSendSmsSucces] = useState(false);
  const [sendSms, SetsendSms] = useState(false);
  const [isOpenEditCourseModal, setisOpenEditCourseModal] = useState(false);

  const HandleOpenEditCourse = () => {
    setisOpenEditCourseModal(true);
  };

  const HandleCloseEditCourse = () => {
    setisOpenEditCourseModal(false);
  };

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
  const storedToken = localStorage.getItem('token');
  const getCourse = async () => {
    try {
      const { data } = await axios.get(`https://api.quickhub.uz/api/course/all/${id}`, {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setCourseNameInfo(data);
      setCourseInfos(data.daraja)
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(CourseInfos);


  useEffect(() => {
    getCourse();
  }, [id]);

  function word(e) {
    const mini = e.toLowerCase();
    return mini;
  }

  return (
    <div className="CoursePage CourseInfo">
      {isOpenEditCourseModal && <EditModal onClose={HandleCloseEditCourse} setCourseNameInfo={setCourseNameInfo} />}
      <div className="GroupPosition">
        <SendSmsQuestCourseLevel
          SendSmsQuest={SendSmsQuest}
          setSendSmsQuest={setSendSmsQuest}
          OpenSuccesDSendFun={OpenSuccesDSendFun}
          BackSendSmsFun={BackSendSmsFun}
        />
        <SendSmsSuccesCourseLevel SendSmsSucces={SendSmsSucces} />
        <SendSmsCourseLevel
          sendSms={sendSms}
          SetsendSms={SetsendSms}
          OpenSendQuestFun={OpenSendQuestFun}
        />
      </div>
      <div className="CoursesHeader CourseInfoHeader">
        <div className="CourseInfoHeaderTitle">
          <Link to={"/course"}>
            <button>
              <Icons.leftArrow />
            </button>
          </Link>
          <h1>{courseNameInfo.name || "Loading..."}</h1>
        </div>
        <div className="CourseInfoHeaderButtons">
          <button className="CourseInfoHeaderButtonOne" onClick={HandleOpenEditCourse}>
            <Icons.edit /> Edit course
          </button>
          <button className="CourseInfoHeaderButtonTwo" onClick={() => SetsendSms(true)}>
            <Icons.send /> Send sms
          </button>
        </div>
      </div>
      <div className="CourseInfoCards">
        {CourseInfos.map((item) => (
          <Link key={item.id} to={`/course-level/${name}/${word(item.name)}/${id}`} style={{ textDecoration: "none" }}>
            <CourseInfoCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
