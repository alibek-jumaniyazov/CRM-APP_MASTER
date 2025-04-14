import { Icons } from "../../../Assets/icons/icons";
import "./CourseSmsComponent.css";

export default function SendSmsQuestCourse({
  SendSmsQuest,
  setSendSmsQuest,
  OpenSuccesDSendFun,
  BackSendSmsFun,
}) {
  return (
    <div className={SendSmsQuest ? "ArchiveQuestCourse" : "hidden"}>
      <div className="ArchiveQuestClose" onClick={() => setSendSmsQuest(false)}>
        <Icons.close />
      </div>
      <div className="ArchiveQuestTexts">
        <p>Send sms to course students</p>
        <span>Do you confirm the send new sms to course students ?</span>
      </div>
      <div className="CourseArchiveBtns">
        <button
          className="SendSmsQuestCourseButtonOne"
          onClick={() => BackSendSmsFun()}
        >
          Go back
        </button>
        <button
          className="SendSmsQuestCourseButtonTwo"
          onClick={() => OpenSuccesDSendFun()}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
