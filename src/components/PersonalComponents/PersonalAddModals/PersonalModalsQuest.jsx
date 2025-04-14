import { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";

export default function PersonalModalsQuest({personalQuest , setpersonalQuest , OpenSuccesAddFun, BackAddFun}) {

   const [ QusetModal , setQuestModal] = useState(false)

  return (
    <div className={personalQuest ? 'ArchiveQuestGroup': "hidden"}>
      <div className="ArchiveQuestClose" onClick={() => setpersonalQuest(false)}>
        <Icons.close/>
      </div>
      <div className="ArchiveQuestTexts">
        <p>Add payment without a check ?</p>
        <span>Continue adding payment to the system without printing a check ?</span>
        <input type="checkbox" checked={QusetModal} onClick={() => setQuestModal(!QusetModal)}/>
      </div>
      <div className="GroupArchiveBtns">
        <button className='SendSmsQuestGroupButtonOne'onClick={() => BackAddFun()}>Go back</button>
        <button className='SendSmsQuestGroupButtonTwo' onClick={() => OpenSuccesAddFun()}>{QusetModal ? "With check" : "Yes"}</button>
      </div>
    </div>
  )
}
