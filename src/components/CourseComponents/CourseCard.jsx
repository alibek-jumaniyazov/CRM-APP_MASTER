import React from "react";
import CourseCardBG from "../../Assets/CourseCardBG.png";
import { Icons } from "../../Assets/icons/icons";
import "./CourseComponents.css";
export default function CourseCard({ item }) {
  return (
    <div className="CourseCard">
      <div className="CourseCardBanner">
        <img src={CourseCardBG} alt="" />
        <p>{item.name}</p>
      </div>
      <div className="CourseCardAnimation"></div>
      <div className="CourseCardTexts">
        <div className="CourseCardText">
          <p>Course levels:</p>
          <span>{item.lesson_count} level</span>
          {/* <span>{item.level} </span> */}
        </div>
        <div className="CourseCardText">
          <p>Teachers:</p>
          <span>7 teachers</span>
          {/* <span>{item.teacher}</span> */}
        </div>
        <div className="CourseCardText">
          <p>Groups:</p>
          <span>7 groups</span>
          {/* <span>{item.group}</span> */}
        </div>
        <div className="CourseCardText">
          <p>Individual:</p>
          <span>12 individual courses</span>
          {/* <span>{item.Individual}</span> */}
        </div>
        <div className="CourseCardText">
          <p>Price:</p>
          <span>{item.price}</span>
          {/* <span>{item.Price}</span> */}
        </div>
      </div>
      <div className="CourseInfoBuild">
        <div className="">
          <Icons.personCard />
          <p>1280 student</p>
          {/* <p>{item.person}</p> */}
        </div>
        <div className="">
          <Icons.building />
          <p>{item.branch} branch</p>
          {/* <p>{item.building}</p> */}
        </div>
      </div>
    </div>
  );
}
