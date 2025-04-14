import React, { useState } from "react";
import { Icons } from "../../Assets/icons/icons";
import PersonalHistoyTable from "./PersonalHIstory/PersonalHistoyTable";

export default function PersonalHistory({ personalUser }) {
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

    return (
        <div className="PersonalHistory">
            <div className="PersonalHistoryLeft">
                <div className="PersonalHistoryCreatedDate">
                    <p>Profile</p>
                    <div className="PersonalHistoryCreatedDateInfo">
                        <div className="">
                            <p>ID: </p>
                            <span>0989736</span>
                        </div>
                        <div className="">
                            <p>Full name:</p>
                            <span>{personalUser.first_name} {personalUser.last_name}</span>
                        </div>
                    </div>
                </div>
                <div className="CourseLevelTypes">
                    <p className="CourseLevelTypesTitle">Categories</p>
                    <div
                        onClick={toggleDivChildren1}
                        className={
                            showDivChildren1 ? "CourseLevelTypeActive" : "CourseLevelType"
                        }
                    >
                        <div className="CourseLevelTypeNumber">
                            <p>01</p>
                            <p>Sms history</p>
                        </div>
                        <div className="CourseLevelTypelessons">
                            <Icons.mail />
                            <p>105 sms</p>
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
                            <p>Action’s history </p>
                        </div>
                        <div className="CourseLevelTypelessons">
                            <Icons.action />
                            <p>105 actions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                {showDivChildren1 && (
                    <PersonalHistoyTable />
                )}
                {showDivChildren2 && (
                    <PersonalHistoyTable />
                )}
            </div>
        </div>
    );
}
