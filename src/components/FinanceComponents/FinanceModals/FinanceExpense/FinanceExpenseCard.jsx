import React from "react";
import { Icons } from "../../../../Assets/icons/icons";

export default function FinanceExpenseCard({ setFinanceExpenseCard, setFinanceIncomeCard, financeExpenseCard, setPersonalAddExpense, setPersonalAddRefoud , setPersonalAddBonus , setPersonalAddSalary}) {
  return (
    <div className={financeExpenseCard ? "FinanceExpenseCard" : "hidden"}>
      <div className="FinanceExpenseList" onClick={() => { setPersonalAddSalary(true); setFinanceExpenseCard(false); setFinanceIncomeCard(false) }}>
        <Icons.chekCircle />
        <p>Salary</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setPersonalAddExpense(true); setFinanceExpenseCard(false); setFinanceIncomeCard(false) }}>
        <Icons.closeCircle />
        <p>Expenditure</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setPersonalAddRefoud(true); setFinanceExpenseCard(false); setFinanceIncomeCard(false) }}>
        <Icons.minusCircle />
        <p>Refund</p>
      </div>
      <div className="FinanceExpenseList" onClick={() => { setPersonalAddBonus(true); setFinanceExpenseCard(false); setFinanceIncomeCard(false) }}>
        <Icons.bonusDiamond />
        <p>Bonus</p>
      </div>
    </div>
  );
}
