import React, { useState } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Icons } from '../../../Assets/icons/icons';

export default function PersonalDeleteDoteModal({
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
                    <h2>Archiving the employee</h2>
                    <p>
                        Are you sure you want to
                        <br />
                        archive the employee?
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
                        Archive
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
                    <h2>Employee successfully archived</h2>
                    <p>This the employee’s page has been
                        <br />
                        successfully archived</p>
                </div>
            </div>
        </div>
    )
}
