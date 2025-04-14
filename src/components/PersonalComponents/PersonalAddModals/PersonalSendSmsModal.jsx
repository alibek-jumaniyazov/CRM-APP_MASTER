import { useState } from "react";
import { Icons } from "../../../Assets/icons/icons";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function PersonalSendSmsModal({
  sendSms,
  SetsendSms,
}) {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [customerModalSecond, setCustomerModalSecond] = useState(false);
  const [AddcustomerModalQuest, setAddCustomerModalQuest] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
    setShowDiv3(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
    setShowDiv3(false);
  };

  const toggleDiv3 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(true);
  };
  function handleCloseMainModal() {
    SetsendSms(false);
    setAddCustomerModalQuest(true);
  }

  function handleCloseAllModal() {
    SetsendSms(false);
    setAddCustomerModalQuest(false);
  }

  function handleOpenSecondModal() {
    SetsendSms(false);
    setAddCustomerModalQuest(false);
    setCustomerModalSecond(true);
    setTimeout(() => {
      setCustomerModalSecond(false);
    }, 1000);
  }

  return (
    <>
      <div className={sendSms ? "SendSmsGroup PosationModal" : "hidden"}>
        <div className="SendSmsGroupClose" onClick={() => SetsendSms(false)}>
          <Icons.close className="closeIcon" />
        </div>
        <div className="SendSmsTexts">
          <p>Send sms</p>
          <span>Send sms to group students</span>
        </div>
        <div className="SendSmsPages">
          <button onClick={toggleDiv1} className={showDiv1 ? "active" : ""}>
            New sms
          </button>
          <button onClick={toggleDiv2} className={showDiv2 ? "active" : ""}>
            Templates
          </button>
          <button onClick={toggleDiv3} className={showDiv3 ? "active" : ""}>
            Group students
          </button>
        </div>
        <div className="showDivs">
          {showDiv1 && (
            <div className="showDiv1">
              <div className="sendMessage">
                <textarea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "></textarea>
              </div>
              <div className="smsFilter">
                <button>
                  <Icons.leftArrow />
                </button>
                <div className="smsFilterCategory">
                  <button>Name Surname</button>
                  <button>Subject name</button>
                  <button>Current balance</button>
                </div>
                <button>
                  <Icons.rightArrow />
                </button>
              </div>
            </div>
          )}
          {showDiv2 && (
            <div className="showDiv2">
              <div className="showDiv2Radios">
                <label className="" for="1 Radio Option">
                  <input type="radio" id="1 Radio Option" name="drone" />
                  <p for="drone">1 Radio Option</p>
                </label>
                <label className="" for="2 Radio Option">
                  <input type="radio" id="2 Radio Option" name="drone" />
                  <p for="drone">2 Radio Option</p>
                </label>
                <label className="" for="3 Radio Option">
                  <input type="radio" id="3 Radio Option" name="drone" />
                  <p for="drone">3 Radio Option</p>
                </label>
                <label className="" for="4 Radio Option">
                  <input type="radio" id="4 Radio Option" name="drone" />
                  <p for="drone">4 Radio Option</p>
                </label>
                <label className="" for="5 Radio Option">
                  <input type="radio" id="5 Radio Option" name="drone" />
                  <p for="drone">5 Radio Option</p>
                </label>
                <label className="" for="6 Radio Option">
                  <input type="radio" id="6 Radio Option" name="drone" />
                  <p for="drone">6 Radio Option</p>
                </label>
                <label className="" for="7 Radio Option">
                  <input type="radio" id="7 Radio Option" name="drone" />
                  <p for="drone">6 Radio Option</p>
                </label>
                <label className="" for="8 Radio Option">
                  <input type="radio" id="8 Radio Option" name="drone" />
                  <p for="drone">6 Radio Option</p>
                </label>
                <label className="" for="9 Radio Option">
                  <input type="radio" id="9 Radio Option" name="drone" />
                  <p for="drone">6 Radio Option</p>
                </label>
              </div>
              <div className="showDiv2Btns">
                <button>
                  <Icons.edit /> Edit selected template for this student
                </button>
              </div>
            </div>
          )}
          {showDiv3 && (
            <div className="showDiv3">
              <div className="">
                <div className="showDiv3Titles">
                  <div className="">
                    <p># </p>
                    <Icons.tbArrow />
                  </div>
                  <div className="">
                    <p>Name</p>
                    <Icons.tbArrow />
                  </div>
                  <div className="">
                    <p>Phone number</p>
                    <Icons.tbArrow />
                  </div>
                  <div className="">
                    <p>Balance</p>
                    <Icons.tbArrow />
                  </div>
                  <div className="">
                    <p>Send sms</p>
                    <Icons.tbArrow />
                  </div>
                </div>
                <div className="showDiv3Personals">
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                  <div className="showDiv3Personal">
                    <p className="showDiv3PersonalId">1</p>
                    <p className="showDiv3PersonalName">Alisher Atajanov</p>
                    <p className="showDiv3PersonalPhone">+998 99 966 73 63</p>
                    <p className="showDiv3PersonalBalance">- 183 000 so’m</p>
                    <input
                      type="checkbox"
                      className="showDiv3PersonalSendsms"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="SendSmsBtns ">
          <button
            className="SendSmsButtonOne"
            onClick={() => SetsendSms(false)}
          >
            Cancel
          </button>
          <button className="SendSmsButtonTwo" onClick={handleCloseMainModal}>
            <Icons.send className="closeIcon" /> Send sms
          </button>
        </div>
      </div>
      <div className={AddcustomerModalQuest ? "ConFimModalAddStud PosationModal" : "none"}>
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
            <br /> new sms to selected customers ?
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

      <div className={customerModalSecond ? "LastConFimModalAddStud PosationModal" : "none"}>
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
