import React, { useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import { Link } from "react-router-dom";
import GroupProfilTable from "../../components/GroupComponents/GroupProfilTable";
import GroupProfilHIstory from "../../components/GroupComponents/GroupProfilHIstory";
import GroupProfilMainSms from "../../components/GroupComponents/GroupProfilMainSms";
import GroupShedul from "../../components/GroupShedul/GroupShedul";

export default function GroupProfil() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);

    const toggleDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
    };

    const toggleDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
    };
    const [Groups, setGroups] = useState([
        {
            number: 1,
            countStudents: 12,
            id: "000001",
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
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
            name: "Alibek Jumaniyazov",
            age: "28 y.o",
            phone: "+998 99 966 73 63",
            dob: "28.02.1996",
            addData: "02.05.2024",
            points: "160 points",
            currentBalance: "290 000 so'm",
            discount: "Add discount",
            ptxt: "points",
            level: "Intermediate",
            lessonName: "General English",
            teacher: "Mr.Aleksey",
            studyStartTime: "14:00",
            studyTime: "Odd days",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            status: "Active",
            room: "Room 2-3",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
    ]);
    return (
        <div className="CoursePage Personal GroupProfil">
            <div className="CoursesHeader CourseInfoHeader GroupProfilHeader">
                <div className="CoursesHeader">
                    <div className="CourseInfoHeaderTitle">
                        <Link to={"/groups"}>
                            <button>
                                <Icons.leftArrow />
                            </button>
                        </Link>
                        <div className="CourseLevelHeaderToggles">
                            <p
                                id="ActiveP"
                                onClick={toggleDiv1}
                                className={showDiv1 ? "active" : ""}
                            >
                                Main
                            </p>
                            <p
                                id="ArchiveP"
                                onClick={toggleDiv2}
                                className={showDiv2 ? "active" : ""}
                            >
                                History
                            </p>
                        </div>
                    </div>
                    <div className="CourseInfoHeaderButtons">
                        <button className={showDiv1 ? "CourseInfoHeaderButtonOne" : "none"}>
                            <Icons.sendBlue /> Send sms
                        </button>
                        <button className={showDiv1 ? "CourseInfoHeaderButtonTwo" : "none"}>
                            <Icons.personals /> Add new student
                        </button>
                        <button className={showDiv1 ? "CourseInfoHeaderButtonOne" : "none"}>
                            <Icons.dote />
                        </button>
                    </div>
                </div>
            </div>
            {showDiv1 && (
                <div className="GroupProfilMain">
                    <div className="GroupProfilMainHeaderCards">
                        <div className="GroupProfilMainHeaderCard">
                            <p>ID: <span>0989736</span></p>
                            <p>Group name: <span>TTS 14:00 - Mr.Aleksey</span></p>
                            <p>Course: <span>English: Beginner level</span></p>
                            <div className="GroupProfilMainHeaderCardActive">
                                <p>Active</p>
                            </div>
                        </div>
                        <div className="GroupProfilMainHeaderCard">
                            <p>Teacher name: <span>Mr.Aleksey</span></p>
                            <p>Room: <span>Room 1-2</span></p>
                            <p>Students: <span>12</span></p>
                        </div>
                        <div className="GroupProfilMainHeaderCard">
                            <p>Lesson days: <span>Odd days</span></p>
                            <p>Lesson time:: <span>14:00</span></p>
                            <p>Duration: <span>60 minutes</span></p>
                        </div>
                        <div className="GroupProfilMainHeaderCard">
                            <p>Start day: <span>05.12.2023</span></p>
                            <p>End day: <span>08.09.2024</span></p>
                            <p>Lesson held: <span>14 / 48</span></p>
                        </div>
                    </div>
                    <div className="GroupProfilShueld">
                        <GroupShedul Groups={Groups} />
                    </div>
                    <div className="GroupProfilTable">
                        <GroupProfilTable Groups={Groups} />
                    </div>
                    <div className="GroupProfilSms">
                        <GroupProfilMainSms />
                    </div>
                </div>
            )}
            {showDiv2 && (
                <div className="GroupProfilHistory">
                    <GroupProfilHIstory />
                </div>
            )}
        </div>
    );
}
