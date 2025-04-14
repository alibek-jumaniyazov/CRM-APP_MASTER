import React from 'react'
import { Icons } from '../../../Assets/icons/icons'

export default function PersonalDoteModal({ DoteModal, setDoteModal , setDoteDeleteQuest }) {

    function openDeleteModal(){
        setDoteModal(false)
        setDoteDeleteQuest(true)
    }

    return (
        <div className={DoteModal ? 'CourseDoteModal' : "none"} onClick={openDeleteModal}>
            <div className="CourseDoteModalInfo">
                <Icons.archiveRed />
                <p>Archive</p>
            </div>
        </div>
    )
}
