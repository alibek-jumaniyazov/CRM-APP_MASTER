import React from 'react'
import { Icons } from '../../../Assets/icons/icons'

export default function PersonalDoteModalArchive({ DoteModal, setDoteModal, setDoteDeleteQuest }) {

    function openDeleteModal() {
        setDoteModal(false)
        setDoteDeleteQuest(true)
    }

    return (
        <div className={DoteModal ? 'CourseDoteModal' : "none"} onClick={openDeleteModal}>
            <div className="CourseDoteModalInfo">
                <Icons.unArchive />
                <p style={{ color: "#005EEB" }}>Unarchive</p>
            </div>
        </div>
    )
}
