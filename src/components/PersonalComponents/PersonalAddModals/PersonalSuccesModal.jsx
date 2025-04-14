import Succes from "../../../Assets/icons/Succes.png";

export default function PersonalSuccesModal({ personalSucces }) {
  return (
    <div className={personalSucces ? "ArchiveSucces" : "hidden"}>
      <div className="">
        <img src={Succes} alt="" />
      </div>
      <div className="ArchiveSuccesTexts">
        <p>Payment added</p>
        <span>Payment have been added to the system</span>
      </div>
    </div>
  );
}
