import { Icons } from "../../Assets/icons/icons";
import "./GroupComponent.css";

export default function ArchiveQuestGroup({ groupArchive, setGroupArchive ,OpenSuccesArchiveFun }) {
  return (
    <div className={groupArchive ? "ArchiveQuestGroup" : "hidden"}>
      <div className="ArchiveQuestClose" onClick={() => setGroupArchive(false)}>
        <Icons.close />
      </div>
      <div className="ArchiveQuestTexts">
        <p>Archiving selected courses</p>
        <span>Are you sure you want to archive selected courses ?</span>
      </div>
      <div className="GroupArchiveBtns">
        <button
          className="GroupArchiveButtonOne"
          onClick={() => setGroupArchive(false)}
        >
          Cancel
        </button>
        <button className="GroupArchiveButtonTwo" onClick={() => OpenSuccesArchiveFun()}>Archive</button>
      </div>
    </div>
  );
}
