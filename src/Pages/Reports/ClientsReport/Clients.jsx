import React from 'react';
import { Icons } from '../../../Assets/icons/icons';
import './../Reports.css'
import LineDubleChar from '../ReportsComponents/LineDubleChar/LineDubleChar';
import PieChartReports from '../ReportsComponents/PieCharReports/PieCharReports';
import PieCharReportsSec from '../ReportsComponents/PieCharReportsSec/PieCharReportsSec';

export default function Clients() {
    const data = [145, 89, 75, 100, 52, 50];
    const colors = ['#33A9FF', '#885AF8', '#F7685B', '#192A3E', '#FFB946', '#2ED47A'];
    const labels = ['General english: Beginner', 'IELTS', 'Korean', 'English: Elementary', 'Russian multilevel', 'English: Intermediate'];
    const ringWidth = 50; // Ширина кольца (толщина донат-чарта)

    const data_second = [145, 89, 75, 100, 52]
    const colors_second = ['#2ED47A', '#33A9FF', '#FFB946', '#192A3E', '#F7685B'];
    const labels_second = ['Active', 'Finished', 'Frozen', 'Blocked', 'Stopped'];


    return (
        <div className='ClientsContainer'>
            <div className="ClientsContainerLeft">
                <div className="ClientsContainerLeft_Up">
                    <div className="ClientsContainerLeft_Up_nav"><span><Icons.colorPersnon /></span><p>Active students</p></div>
                    <div className="ClientsContainerLeft_Up_Contant">
                        <div><h2>114</h2><p>All students</p></div>
                        <div><h2>28</h2><p>In group courses</p></div>
                        <div><h2>80</h2><p>Individuals</p></div>
                    </div>
                </div>
                <div className="ClientsContainerLeft_Down">
                    <div className="ClientsContainerLeft_Down_Nav">
                        <div><span><Icons.tvKan /></span><p>Students by course type</p></div>
                        <div><select name="" id=""><option value="Select" defaultValue>Select</option></select></div>
                    </div>
                    <LineDubleChar />
                    <div className="ClientsContainerLeft_Down_Footer">
                        <div><h2>All active students in course:</h2><p>562</p></div>
                        <div><h2>All students in archive:</h2><p>276</p></div>
                    </div>
                </div>
            </div>
            <div className="CientsContainerMidl">
                <div className="CientsContainerMidl_nav">
                    <div><span><Icons.coursesIcon /></span><p>Students by course type</p></div>
                    <div><select name="" id=""><option value="Select" defaultValue>Select</option></select></div>
                </div>
                <PieChartReports data={data} colors={colors} labels={labels} ringWidth={ringWidth} />
            </div>
            <div className="CientsContainerMidl">
                <div className="CientsContainerMidl_nav">
                    <div><span><Icons.circleCheck /></span><p>Students by status</p></div>
                    <div><select name="" id=""><option value="Select" defaultValue>Select</option></select></div>
                </div>
                <PieCharReportsSec data={data_second} colors={colors_second} labels={labels_second} ringWidth={ringWidth} />
            </div>
        </div>
    );
}
