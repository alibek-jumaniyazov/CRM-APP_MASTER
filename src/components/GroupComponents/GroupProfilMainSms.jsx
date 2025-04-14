import React, { useState } from 'react'
import DeleteComment from '../DeleteComments/DeleteComment'
import { VscSend } from 'react-icons/vsc'
import { Dropdown } from 'antd'
import { CiBookmarkCheck } from 'react-icons/ci'

const FormattedDate = ({ date }) => {
    const formattedDate = new Date(date).toLocaleString();
    return <span>{formattedDate}</span>;
};

export default function GroupProfilMainSms() {
    const [openIndex, setOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [comments, setComments] = useState([
        {
            author: "John Smith",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            date: "2024-04-02T18:42:00",
        },
        {
            author: "John Smith",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            date: "2024-04-01T15:30:00",
        },
        {
            author: "John Smith",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            date: "2024-04-03T10:15:00",
        },
        {
            author: "John Smith",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            date: "2024-03-30T09:00:00",
        },
    ]);

    const sortedComments = comments.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setIsModalOpen(true);
    };

    const handleDropdownToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleConfirmDelete = () => {
        setComments(comments.filter((_, i) => i !== deleteIndex));
        setIsModalOpen(false);
        setOpenIndex(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setOpenIndex(null);
    };

    return (
        <div className="UserComments" style={{ width: "100%" }}>
            <div className="UserComTitle">
                <span>
                    <CiBookmarkCheck />
                </span>
                <p>Comments</p>
            </div>
            <div className="UserCommentContant" style={{ width: "100%" }}>
                {sortedComments.map((comment, index) => (
                    <div key={index} className="UserCommentBox" style={{ width: "100%" }}>
                        <div className="UserComText">
                            <div className="UserComUp">
                                <p>{comment.author}</p>
                                <span onClick={() => handleDropdownToggle(index)}>
                                    ...
                                </span>
                                {openIndex === index && (
                                    <Dropdown
                                        onDelete={() => handleDeleteClick(index)}
                                        onClose={() => handleDropdownToggle(index)}
                                    />
                                )}
                            </div>
                            <div className="USerComDuwn">
                                <p>{comment.text}</p>
                                <FormattedDate date={comment.date} />
                            </div>
                        </div>
                    </div>
                ))}
                {isModalOpen && (
                    <DeleteComment
                        onClose={handleCloseModal}
                        onConfirm={handleConfirmDelete}
                    />
                )}
            </div>
            <div className="CommentSend" style={{ width: "100%" }}>
                <textarea
                    name=""
                    id=""
                    placeholder="Enter your comment"
                    style={{ width: "100%" }}
                ></textarea>
                <button className="submit">
                    <VscSend />
                </button>
            </div>
        </div>
    );
}
