import React, { useEffect, useState } from 'react';
import './Schlude.css'; // Importing the CSS file
import { TbClockHour3 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { RiGroupLine } from "react-icons/ri";
import { IoMdAlarm } from "react-icons/io";
import { SlGraduation } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";
import { Icons } from '../../Assets/icons/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Schedule() { // Receive 'data' as a prop

    const storedToken = localStorage.getItem('token');
    const [Groups, setGroups] = useState([])
    const getGroups = async () => {
        try {
            const { data } = await axios.get(`https://api.quickhub.uz/api/groups/group-schedule/`, {
                headers: {
                    'Authorization': `Token ${storedToken}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(data);
            setGroups(data)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getGroups()
    }, []);



    return (
        <div style={{ overflowY: 'auto' }} className="Schedule">
            <div className="table headerTable">
                <p><span className='pust'></span></p>
                <p className="tableTextMin nomblya">#</p>
                <p className="tableText lessonblya" >Lesson time</p>
                <p className="tableText nameblya">Name</p>
                <p className="tableText teacherblya">Teacher name</p>
                <p className="tableTextMax Subjectblya">Subject name: level</p>
                <p className="tableText lessonblyaType">Lesson type</p>
                <p className="tableText RoomBlya">Room</p>
                <p className="tableText StudentBlya">Students</p>
            </div>
            <div className="ContentTable">
                {
                    Groups.map((item, index) => (
                        <Link to={`/group-profil/${item.id}`} className='linktoHomePage'>
                            <div className={`${item.status_color === "blue" ? 'table tableX' : ''} ${item.status_color === "red" ? 'table' : ''} ${item.status_color === "green" ? 'table TableGreen' : ''}`} key={index}>
                                <p><span className={`${item.status_color === "blue" ? 'ebatsavrot' : ''} ${item.status_color === "red" ? 'pust' : ''} ${item.status_color === "green" ? 'pust' : ''}`}></span></p>
                                <p className="tableTextMin nomblya">{item.id}</p>
                                <p className={`${item.status_color === "blue" ? 'tableText tableTextHour ebatsavrotTime' : ''} ${item.status_color === "red" ? 'tableText tableTextHour TableRed' : ''} ${item.status_color === "green" ? 'tableText tableTextHour ebatsavrotgreen' : ''}`} ><p className='TableBlue'><IoMdAlarm size={"20px"} />09:00 - 10:00</p></p>
                                <p className="tableText nameblya">{item.group_name}</p>
                                <p className="tableText tableTextUser teacherblya"><FiUser size={"20px"} />{item.teacher_fk_user ? item.teacher_fk_user.first_name : "none"}</p>
                                <p className="tableTextMax Subjectblya"><SlGraduation size={"20px"} />{item.course.name}: {item.course.daraja.map(itemLevel => itemLevel.name)}</p>
                                <p className="tableText tableTextGroup lessonblyaType"><Icons.tvKan size={"20px"} /> Group</p>
                                <p className="tableText tabletextRoom RoomBlyaa"><p>{item.room}</p></p>
                                <p className="tableText tableTextUsers StudentBlya"><FiUsers size={"20px"} />{item.students.length} students</p>
                                <p className='TableShare'><CiShare1 /></p>
                            </div>
                        </Link>
                    ))
                }

                {/* Red Table */}
                {/* <div className="table ">
                    <p><span className='pust'></span></p>
                    <p className="tableTextMin nomblya">12</p>
                    <p className="tableText tableTextHour "><p className='TableRed'><IoMdAlarm size={"14px"} />09:00 - 10:00</p></p>
                    <p className="tableText nameblya">Group 52</p>
                    <p className="tableText tableTextUser teacherblya"><FiUser size={"20px"} />Mr. Johnson</p>
                    <p className="tableTextMax Subjectblya"><SlGraduation size={"20px"} />General English:Indermatade level</p>
                    <p className="tableText tableTextGroup lessonblyaType"><Icons.tvKan size={"20px"} /> Group</p>
                    <p className="tableText tabletextRoom RoomBlyaa"><p>Room 2-3</p></p>
                    <p className="tableText tableTextUsers StudentBlya"><FiUsers size={"20px"} />18 students</p>
                    <p className='TableShare'><CiShare1 /></p>
                </div> */}


                {/* Greenn Table */}
                {/* <div className="table TableGreen">
                    <p><span className='pust'></span></p>
                    <p className="tableTextMin nomblya">12</p>
                    <p className="tableText tableTextHour ebatsavrotgreen"><p lassName='TableGreenw'><IoMdAlarm size={"20px"} />09:00 - 10:00</p></p>
                    <p className="tableText nameblya">Group 52</p>
                    <p className="tableText tableTextUser teacherblya"><FiUser size={"20px"} />Mr. Johnson</p>
                    <p className="tableTextMax Subjectblya"><SlGraduation size={"20px"} />General English:Indermatade level</p>
                    <p className="tableText tableTextGroup lessonblyaType"><Icons.tvKan size={"20px"} /> Group</p>
                    <p className="tableText tabletextRoom RoomBlyaa"><p>Room 2-3</p></p>
                    <p className="tableText tableTextUsers StudentBlya"><FiUsers size={"20px"} />18 students</p>
                    <p className='TableShare'><CiShare1 /></p>
                </div> */}
            </div>
        </div>
    )
}
