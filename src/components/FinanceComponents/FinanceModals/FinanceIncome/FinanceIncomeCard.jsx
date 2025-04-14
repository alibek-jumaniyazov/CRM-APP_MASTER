import React from "react";
import { Icons } from "../../../../Assets/icons/icons";

export default function FinanceIncomeCard({
  financeIncomeCard,
  classDiv,
  setFinanceExpenseCard,
  setFinanceIncomeCard,
  setPersonalAddPayment,
  setPersonalAddExpenseCourse,
  setPersonalAddTeacher,
  setPersonalAddFine,
  setPersonalAddIncome,
}) {
  return (
    <div className={financeIncomeCard ? classDiv : "hidden"}>
      <div className="FinanceExpenseList" onClick={() => { setFinanceExpenseCard(false); setFinanceIncomeCard(false); setPersonalAddPayment(true); }}>
        <Icons.coinColor />
        <p>Add payment</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setFinanceExpenseCard(false); setFinanceIncomeCard(false); setPersonalAddExpenseCourse(true); }}>
        <Icons.chartCircle />
        <p>Student expense</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setFinanceExpenseCard(false); setFinanceIncomeCard(false); setPersonalAddTeacher(true); }}>
        <Icons.qozonFinance />
        <p>Teacher expense</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setFinanceExpenseCard(false); setFinanceIncomeCard(false); setPersonalAddFine(true); }}>
        <Icons.fineAcales />
        <p>A fine</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setFinanceExpenseCard(false); setFinanceIncomeCard(false); setPersonalAddIncome(true); }}>
        <Icons.coinColor />
        <p>Additional income</p>
      </div>
    </div>
  );
}
