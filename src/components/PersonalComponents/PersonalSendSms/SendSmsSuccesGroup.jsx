import Succes from '../../../Assets/icons/Succes.png'

export default function SendSmsSuccesPersonal({SendSmsSucces}) {
  return (  
    <div className={SendSmsSucces ? 'ArchiveSucces' : "hidden"}>
      <div className="">
        <img src={Succes} alt="" />
      </div>
      <div className="ArchiveSuccesTexts">
        <p>A new sms has been sent</p>
        <span>New sms sent successfully</span>
      </div>
    </div>
  )
}
