import chartCard from "../../Assets/chartCard.png";

export default function FinancePercentagePriceCard() {
  return (
    <div className="FinancePercentagePriceCard">
      <p>The amount to be received for that month</p>
      <img src={chartCard} alt="" />
      <div className="Vseblyad">
        <div className="FinancePercentagePriceCardText">
          <p>Must be paid:</p>
          <span>1 168 000 so’m</span>
        </div>
        <div className="ObshiyDwa">
          <div className="FinancePercentagePriceCardText">
            <div className="PriceCardTextBlue"></div>
            <p>Has been paid:</p>
            <span>218 000 so’m</span>
          </div>
          <div className="FinancePercentagePriceCardText">
            <div className="PriceCardTextWhite"></div>
            <p>Residual:</p>
            <span> 950 000 so’m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
