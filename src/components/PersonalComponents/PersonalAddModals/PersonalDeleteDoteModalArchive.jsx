import React, { useState } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Icons } from '../../../Assets/icons/icons';

export default function PersonalDeleteDoteModalArchive({
    DoteDeleteQuest,
    setDoteDeleteQuest,
    addArchive
}) {

    const [DoteDeleteSecond, setDoteDeleteSecond] = useState(false);

    function handleOpenSecondModal() {
        setDoteDeleteQuest(false);
        setDoteDeleteSecond(true);
        addArchive()
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
                    <h2>Unarchiving the employee</h2>
                    <p>
                        Are you sure you want to
                        <br />
                        unarchive the employee?
                    </p>
                </div>
                <div className="ConFimModalAddStudButtons">
                    <button onClick={() => setDoteDeleteQuest(false)}>
                        Cancel
                    </button>
                    <button
                        style={{ border: "none" }}
                        id="YesConFimModalAddStudButtons"
                        onClick={handleOpenSecondModal}
                    >
                        Unarchive
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
                    <h2>Employee successfully Unarchived</h2>
                    <p>This the employee’s page has been
                        <br />
                        successfully unarchived</p>
                </div>
            </div>
        </div>
    )
}
