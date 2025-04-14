import React from 'react';
import './../../Reports.css';

export default function LineDubleChar() {
    const groupCourses = 276;
    const individualCourses = 176;
    const totalStudents = groupCourses + individualCourses;
    const groupPercentage = (groupCourses / totalStudents) * 100;
    const individualPercentage = (individualCourses / totalStudents) * 100;

    return (
        <div className="ClientsContainerLeft_Down_Contant">
            <div className="ChartClients_One">
                <span
                    style={{
                        width: `${groupPercentage}%`,
                        backgroundColor: '#005EEB',
                    }}
                ></span>
                <div className="info-box">
                    <p> {groupCourses} groups</p>
                </div>
                <span
                    style={{
                        width: `${individualPercentage}%`,
                        backgroundColor: '#E4EAF1',
                    }}
                ></span>
                <div className="info-box">
                    <p> {individualCourses} Individual courses</p>
                </div>
            </div>
            <div className="ChartClients_One_Text">
                <div className="ChartClients_One_Text_Left">
                    <span></span>
                    <h2>In group courses:</h2>
                    <p>{groupCourses} students</p>
                </div>
                <div className="ChartClients_One_Text_Left">
                    <span></span>
                    <h2>In individual courses:</h2>
                    <p>{individualCourses} students</p>
                </div>
            </div>
        </div>
    );
}
