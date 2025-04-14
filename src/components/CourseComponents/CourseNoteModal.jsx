import React from 'react'
import { Icons } from '../../Assets/icons/icons'

export default function CourseDoteModal({ DoteModal, setDoteModal , setDoteDeleteQuest }) {

    function openDeleteModal(){
        setDoteModal(false)
        setDoteDeleteQuest(true)
    }

    return (
        <div className={DoteModal ? 'CourseDoteModal' : "none"} onClick={openDeleteModal}>
            <div className="CourseDoteModalInfo">
                <Icons.deleteRed />
                <p>Delete</p>
            </div>
        </div>
    )
}
