import Succes from '../../Assets/icons/Succes.png'
import './GroupComponent.css'

export default function ArchiveSucces({groupArchiveSucces}) {
  return (
    <div className={groupArchiveSucces ?'ArchiveSucces' : 'hidden'}>
      <div className="">
        <img src={Succes} alt="" />
      </div>
      <div className="ArchiveSuccesTexts">
        <p>Groups successfully archived</p>
        <span>All selected groups successfully archived</span>
      </div>
    </div>
  )
}
