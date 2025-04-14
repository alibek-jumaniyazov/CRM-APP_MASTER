import React from "react";
import { Icons } from "../../Assets/icons/icons";

export default function FinancePercentagePriceCardMini({ item }) {
  return (
    <div className="FinancePercentagePriceCardMini">
      <Icons.chart color={item.color} openColor={item.openColor}/>
      <div className="PercentagePriceCardMiniInfos">
        <span>{item.title}</span>
        <p>{item.price}</p>
        <div className="PercentagePriceCardMiniStudents">
          <div className="PercentagePriceCardMiniStudentLang">
              <Icons.langua color={item.color} openColor={item.openColor}/>
            <span>{item.lenguage}</span>
          </div>
          <div className="PercentagePriceCardMiniStudentLang">
              <Icons.studentAction color={item.color} openColor={item.openColor}/>
            <span>{item.lengNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
