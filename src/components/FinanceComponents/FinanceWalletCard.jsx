import { Icons } from "../../Assets/icons/icons";
import "./FinanceComponent.css";

export default function FinanceWalletCard() {
  return (
    <div className="FinanceWalletCard">
      <div className="FinanceWalletCardBlue">
        <Icons.wallet />
        <div className="FinanceWalletCardBlueInfo">
          <span className="FinanceWalletBalance">Current balance</span>
          <div className="FinanceWalletPrine">
            <p>283 670 000</p>
            <span> so'm</span>
          </div>
        </div>
      </div>
      <div className="FinanceWalletCardInfo">
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
        <div className="FinanceWalletCardInfoText">
          <div className="FinanceWalletCardInfoCircle"></div>
          <span>Cash:</span>
          <p>28 620 000 so’m</p>
        </div>
      </div>
    </div>
  );
}
