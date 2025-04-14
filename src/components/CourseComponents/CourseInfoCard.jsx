import React, { useState } from "react";
import NameComponent from "./NameComponent";

export default function CourseInfoCard({ item }) {

  const [titleColor, setTitleColor] = useState(null);

  return (
    <div className="CourseInfoCard">
      <div className="CourseInfoCardLevel">
        <NameComponent data={item.name} setTitleColor={setTitleColor} />   
        <h1 style={{ "--hover-title": titleColor }}>{item.name}</h1>
      </div>
      <div className="XLine"></div>
      <div className="YLine"></div>
      <div className="CourseInfoCardTexts">
        <div className="">
          <p>{item.teachers.length}</p>
          <span>Teachers</span>
        </div>
        <div className="">
          <p>{item.clients.length}</p>
          <span>Students</span>
        </div>
        <div className="">
          <p>{item.groups.length}</p>
          <span>All groups</span>
        </div>
        <div className="">
          <p>{item.individuals.length}</p>
          <span>Individuals</span>
        </div>
      </div>
    </div>
  );
}
