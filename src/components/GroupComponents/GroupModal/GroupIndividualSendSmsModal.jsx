import { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function GroupIndividualSendSmsModal({
  sendSms,
  SetsendSms,
}) {
  const [currentDiv, setCurrentDiv] = useState("div1");
  const [customerModalSecond, setCustomerModalSecond] = useState(false);
  const [AddcustomerModalQuest, setAddCustomerModalQuest] = useState(false);

  const handleCloseMainModal = () => {
    SetsendSms(false);
    setAddCustomerModalQuest(true);
  };

  const handleCloseAllModal = () => {
    SetsendSms(false);
    setAddCustomerModalQuest(false);
  };

  const handleOpenSecondModal = () => {
    SetsendSms(false);
    setAddCustomerModalQuest(false);
    setCustomerModalSecond(true);
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  };

  return (
    <div className="">
      {sendSms && (
        <div
          className="modal-overlay"
          onClick={() => SetsendSms(false)}
        >
        </div>
      )}
      {AddcustomerModalQuest && (
        <div
          className="modal-overlay"
          onClick={() => setAddCustomerModalQuest(false)}
        >
        </div>
      )}
      <div className={sendSms ? "SendSmsGroup" : "hidden"}>
        <div className="SendSmsGroupClose" onClick={() => SetsendSms(false)}>
          <Icons.close className="closeIcon" />
        </div>
        <div className="SendSmsTexts">
          <p> {currentDiv === "div1" ? "Send sms" : currentDiv === "div2" ? "Send sms from template" : "Sms history"}</p>
          <span>Send sms to individual lesson’s student</span>
        </div>
        <div className="SendSmsPages">
          {["div1", "div2", "div3"].map((div) => (
            <button
              key={div}
              onClick={() => setCurrentDiv(div)}
              className={currentDiv === div ? "active" : ""}
            >
              {div === "div1" ? "New SMS" : div === "div2" ? "Templates" : "Sms history"}
            </button>
          ))}
        </div>
        <div className="showDivs">
          {currentDiv === "div1" && (
            <div className="showDiv1">
              <div className="sendMessage">
                <textarea placeholder="Type your message here..."></textarea>
              </div>
              <div className="smsFilter">
                <button>
                  <Icons.leftArrow />
                </button>
                <div className="smsFilterCategory">
                  <button>Name Surname</button>
                  <button>Subject Name</button>
                  <button>Current Balance</button>
                </div>
                <button>
                  <Icons.rightArrow />
                </button>
              </div>
            </div>
          )}
          {currentDiv === "div2" && (
            <div className="showDiv2">
              <div className="showDiv2Radios">
                {Array.from({ length: 8 }, (_, index) => (
                  <label key={index} htmlFor={`radio${index + 1}`}>
                    <input type="radio" id={`radio${index + 1}`} name="template" />
                    <p htmlFor={`radio${index + 1}`}>{`Template ${index + 1}`}</p>
                  </label>
                ))}
              </div>
              <div className="showDiv2Btns" onClick={() => setCurrentDiv("div1")}>
                <button>
                  <Icons.edit /> Edit selected template for this student
                </button>
              </div>
            </div>
          )}
          {currentDiv === "div3" && (
            <div className="menuChil_sms_message menuChil_sms_message_history clientHIstorySms">
              <div className="menuChil_sms_message_box">
                <h4 className="menuChil_sms_message_status">Send</h4>
                <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                <div className="menuChil_sms_message_box_texts">
                  <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                  <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                </div>
              </div>
              <div className="menuChil_sms_message_box">
                <h4 className="menuChil_sms_message_status">Send</h4>
                <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                <div className="menuChil_sms_message_box_texts">
                  <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                  <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                </div>
              </div>
              <div className="menuChil_sms_message_box">
                <h4 className="menuChil_sms_message_status">Send</h4>
                <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                <div className="menuChil_sms_message_box_texts">
                  <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                  <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                </div>
              </div>
              <div className="menuChil_sms_message_box">
                <h4 className="menuChil_sms_message_status">Send</h4>
                <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                <div className="menuChil_sms_message_box_texts">
                  <h4 className="menuChil_sms_message_box_title">Class time has been changed</h4>
                  <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {currentDiv === "div3" ? null : (
          <div className="SendSmsBtns">
            <button className="SendSmsButtonOne" onClick={handleCloseAllModal}>
              Cancel
            </button>
            <button className="SendSmsButtonTwo" onClick={handleCloseMainModal}>
              <Icons.send className="closeIcon" /> Send SMS
            </button>
          </div>
        )}

      </div>

      {/* Confirmation Modal for sending SMS */}
      <div className={AddcustomerModalQuest ? "ConFimModalAddStud SendSmsGroupDiv" : "none"}>
        <div
          className="ConFimModalAddStudClose"
          onClick={() => setAddCustomerModalQuest(false)}
        >
          <Icons.close />
        </div>
        <div className="ConFimModalAddStudTitle">
          <h2>Send sms to individual’s student</h2>
          <p>
            Do you confirm the send
            <br /> new sms to student?
          </p>
        </div>
        <div className="ConFimModalAddStudButtons">
          <button onClick={() => setAddCustomerModalQuest(false)}>
            Cancel
          </button>
          <button
            style={{ border: "none" }}
            id="YesConFimModalAddStudButtons"
            onClick={handleOpenSecondModal}
          >
            Yes
          </button>
        </div>
      </div>

      {/* Success Modal for SMS sending confirmation */}
      <div className={customerModalSecond ? "LastConFimModalAddStud SendSmsGroupDiv" : "none"}>
        <div className="ConFimModalAddStudLogo">
          <span>
            <FaRegCircleCheck />
          </span>
        </div>
        <div className="LastConFimModalAddStudTitle">
          <h2>A new sms has been sent</h2>
          <p>New sms sent successfully</p>
        </div>
      </div>
    </div>
  );
}
