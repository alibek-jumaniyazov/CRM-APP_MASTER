import { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function ClientSendSmsModal({
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
    <>
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
          <p>Send SMS</p>
          <span>Send SMS to group students</span>
        </div>
        <div className="SendSmsPages">
          {["div1", "div2", "div3"].map((div) => (
            <button
              key={div}
              onClick={() => setCurrentDiv(div)}
              className={currentDiv === div ? "active" : ""}
            >
              {div === "div1" ? "New SMS" : div === "div2" ? "Templates" : "Group Students"}
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
              <div className="showDiv2Btns">
                <button>
                  <Icons.edit /> Edit selected template for this student
                </button>
              </div>
            </div>
          )}
          {currentDiv === "div3" && (
            <div className="showDiv3">
              <div className="showDiv3Titles">
                {["#", "Name", "Phone Number", "Balance", "Send SMS"].map((title) => (
                  <div key={title}>
                    <p>{title}</p>
                    <Icons.tbArrow />
                  </div>
                ))}
              </div>
              <div className="showDiv3Personals">
                {Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="showDiv3Personal">
                    <p className="showDiv3PersonalId">{index + 1}</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input type="checkbox" className="showDiv3PersonalSendsms" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="SendSmsBtns">
          <button className="SendSmsButtonOne" onClick={handleCloseAllModal}>
            Cancel
          </button>
          <button className="SendSmsButtonTwo" onClick={handleCloseMainModal}>
            <Icons.send className="closeIcon" /> Send SMS
          </button>
        </div>
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
          <h2>Send sms to selected customers</h2>
          <p>
            Do you confirm the send
            <br /> new sms to selected customers?
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
    </>
  );
}
