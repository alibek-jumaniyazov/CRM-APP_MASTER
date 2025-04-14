import { Icons } from "../../Assets/icons/icons";
import NameComponentPersonal from "./NameComponentPersonal";
import "./PersonalComponents.css";

export default function PersonalCard({ item }) {
  return (
    <div className="PersonalCard">
      <div className="PersonalCardHeader">
        <NameComponentPersonal data={item.first_name} img={item.image} />
        <div className="PersonalCardTitle">
          <p>{item.first_name} {item.last_name} </p>
          <span>{item.role}</span>
        </div>
      </div>
      <div className="PersonalCardPhone">
        <p>{item.phone_number}</p>
        <Icons.copy className="hidden" />
      </div>
      <div className="PersonalCardInfos">
        <div className="PersonalCardInfo">
          <p>{item.courses_count}</p>
          <span>All courses</span>
        </div>
        <div className="PersonalHR"></div>
        <div className="PersonalCardInfo">
          <p>{item.students_count}</p>
          <span>All active students</span>
        </div>
        <div className="PersonalHR"></div>
        <div className="PersonalCardInfo">
          <p>{item.salary_type} so'm</p>
          <span>In current balance</span>
        </div>
      </div>
      <div className="PersonalCardBranches">
        <div className="PersonalCardBranch">
          <Icons.location />
          <p>Branch 1</p>
        </div>
        <div className="PersonalCardBranch">
          <Icons.location />
          <p>Branch 1</p>
        </div>
        <div className="PersonalCardBranch">
          <Icons.location />
          <p>Branch 1</p>
        </div>
      </div>
    </div>
  );
}
