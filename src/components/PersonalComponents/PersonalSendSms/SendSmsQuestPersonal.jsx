import { Icons } from "../../../Assets/icons/icons";

export default function SendSmsQuestPersonal({SendSmsQuest , setSendSmsQuest , OpenSuccesDSendFun, BackSendSmsFun}) {
  return (
    <div className={SendSmsQuest ? 'ArchiveQuestGroup': "hidden"}>
      <div className="ArchiveQuestClose" onClick={() => setSendSmsQuest(false)}>
        <Icons.close/>
      </div>
      <div className="ArchiveQuestTexts">
        <p>Send sms to selected courses</p>
        <span>Do you confirm the send
        new sms to selected individual courses ?</span>
      </div>
      <div className="GroupArchiveBtns">
        <button className='SendSmsQuestGroupButtonOne'onClick={() => BackSendSmsFun()}>Go back</button>
        <button className='SendSmsQuestGroupButtonTwo' onClick={() => OpenSuccesDSendFun()}>Yes</button>
      </div>
    </div>
  )
}
