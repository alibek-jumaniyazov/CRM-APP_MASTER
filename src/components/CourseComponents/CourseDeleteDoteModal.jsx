import React, { useState } from 'react'
import { Icons } from '../../Assets/icons/icons';
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function CourseDeleteDoteModal({
    DoteDeleteQuest,
    setDoteDeleteQuest,
}) {

    const [DoteDeleteSecond, setDoteDeleteSecond] = useState(false);

    function handleOpenSecondModal() {
        setDoteDeleteQuest(false);
        setDoteDeleteSecond(true);
        setTimeout(() => {
            setDoteDeleteSecond(false);
        }, 1000);
    }


    return (
        <div className='CourseDeleteDoteModal'>
            <div className={DoteDeleteQuest ? "ConFimModalAddStud" : "none"}>
                <div
                    className="ConFimModalAddStudClose"
                    onClick={() => setDoteDeleteQuest(false)}
                >
                    <Icons.close />
                </div>
                <div className="ConFimModalAddStudTitle">
                    <h2>Delete the course</h2>
                    <p>
                    Do you want to delete this course?
                    </p>
                </div>
                <div className="ConFimModalAddStudButtons">
                    <button onClick={() => setDoteDeleteQuest(false)}>
                        Cancel
                    </button>
                    <button
                        style={{ background: "#F7685B", border: "none" }}
                        id="YesConFimModalAddStudButtons"
                        onClick={handleOpenSecondModal}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className={DoteDeleteSecond ? "LastConFimModalAddStud" : "none"}>
                <div className="ConFimModalAddStudLogo">
                    <span>
                        <FaRegCircleCheck />
                    </span>
                </div>
                <div className="LastConFimModalAddStudTitle">
                    <h2>The course has been deleted</h2>
                    <p>the course was successfully deleted</p>
                </div>
            </div>
        </div>
    )
}
