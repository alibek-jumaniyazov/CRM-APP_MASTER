import { Icons } from "../../../Assets/icons/icons";
import "./CourseSmsComponent.css";

import React, { useState } from "react";

function SendSmsCourse({sendSms , SetsendSms, OpenSendQuestFun}) {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };


  return (
    <div className={sendSms ? "SendSmsCourse" : "hidden"}>
      <div className="SendSmsCourseClose" onClick={() => SetsendSms(false)}>
        <Icons.close className="closeIcon" />
      </div>
      <div className="SendSmsTexts">
        <p>Send sms this course level</p>
        <span>Send sms for students of this course level</span>
      </div>
      <div className="SendSmsPages">
        <button onClick={toggleDiv1} className={showDiv1 ? "active" : ""}>
          New sms
        </button>
        <button onClick={toggleDiv2} className={showDiv2 ? "active" : ""}>
          Templates
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
      </div>
      <div className="SendSmsBtns">
        <button className="SendSmsButtonOne" onClick={() => SetsendSms(false)}>Cancel</button>
        <button className="SendSmsButtonTwo" onClick={() => OpenSendQuestFun()}>
          {" "}
          <Icons.send className="closeIcon" /> Send sms
        </button>
      </div>
    </div>
  );
}

export default SendSmsCourse;
