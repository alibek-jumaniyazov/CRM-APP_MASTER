import React, { useEffect, useState } from 'react'
import { LuMail } from 'react-icons/lu';
import { Icons } from '../../Assets/icons/icons';
import { FaChevronDown } from 'react-icons/fa6';
import Profileimg from "./../../Assets/icons/Profile_img.png";

export default function GroupProfilHIstory() {

    const [categories, setCategories] = useState([]);
    const [smsHistory, setSmsHistory] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Sms history");
    const [inputValue, setInputValue] = useState("");
    const [filteredSmsHistory, setFilteredSmsHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const totalPages = Math.ceil(filteredSmsHistory.length / itemsPerPage);

    const jsonData = {
        categories: [
            { id: 1, name: "Sms history", count: 105 },
            { id: 2, name: "Action`s history", count: 50 },
        ],
        smsHistory: [
            {
                id: 1,
                name: "John Anderson",
                status: "Sent",
                comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "02.04.2024 18:42",
            },
            {
                id: 2,
                name: "Jane Doe",
                status: "Sent",
                comment: "Another example of a comment for the history.",
                date: "03.04.2024 09:15",
            },
            {
                id: 3,
                name: "Michael Smith",
                status: "Sent",
                comment: "A different SMS message example.",
                date: "04.04.2024 14:30",
            },
            {
                id: 4,
                name: "John Anderson",
                status: "Sent",
                comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "02.04.2024 18:42",
            },
            {
                id: 5,
                name: "Jane Doe",
                status: "Sent",
                comment: "Another example of a comment for the history.",
                date: "03.04.2024 09:15",
            },
            {
                id: 6,
                name: "Michael Smith",
                status: "Sent",
                comment: "A different SMS message example.",
                date: "04.04.2024 14:30",
            },
            {
                id: 7,
                name: "John Anderson",
                status: "Sent",
                comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "02.04.2024 18:42",
            },
            {
                id: 8,
                name: "Jane Doe",
                status: "Sent",
                comment: "Another example of a comment for the history.",
                date: "03.04.2024 09:15",
            },
            {
                id: 9,
                name: "Michael Smith",
                status: "Sent",
                comment: "A different SMS message example.",
                date: "04.04.2024 14:30",
            },
            {
                id: 10,
                name: "John Anderson",
                status: "Sent",
                comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "02.04.2024 18:42",
            },
            {
                id: 11,
                name: "Jane Doe",
                status: "Sent",
                comment: "Another example of a comment for the history.",
                date: "03.04.2024 09:15",
            },
            {
                id: 12,
                name: "Michael Smith",
                status: "Sent",
                comment: "A different SMS message example.",
                date: "04.04.2024 14:30",
            },
        ],
    };

    useEffect(() => {
        setCategories(jsonData.categories);
        setSmsHistory(jsonData.smsHistory);
        setFilteredSmsHistory(jsonData.smsHistory);
    }, []);

    useEffect(() => {
        setFilteredSmsHistory(
            smsHistory.filter(
                (sms) =>
                    sms.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    sms.comment.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, smsHistory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handlePageChange = (page) => {
        if (page === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (page === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (typeof page === "number") {
            setCurrentPage(page);
        }
    };

    const handleGoToPage = () => {
        const pageNumber = parseInt(inputValue);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedHistory = filteredSmsHistory.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="History-Stud" style={{padding:"0px"}}>
            <div className="History-Stud-Left">
                <div className="History-Stud-Left-Top">
                    <div className="History-Stud-Left-Top-Title">
                        <p>Profile</p>
                        <span>
                            <p>Active</p>
                        </span>
                    </div>
                    <div className="History-Stud-Left-Top-Profile">
                        <div className="History-Stud-Left-Top-Profile-Right">
                            <p><b>ID:</b>  0989736</p>
                            <p><b>Course for:</b>  Alisher Atajanov</p>
                            <p><b>Course:</b>  English: Beginner level</p>
                        </div>
                    </div>
                    <div className="History-Stud-Left-Top-Footer">
                        <p>Added to system: 20.05.2024 </p>
                    </div>
                </div>
                <div className="History-Stud-Left-Down">
                    <div className="History-Stud-Left-Down-Title">
                        <p>Categories</p>
                    </div>
                    <div className="History-Stud-Left-Down-Content">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="History-Stud-Left-Down-Content-Box"
                                onClick={() => handleCategoryChange(category.name)}
                            >
                                <div className="History-Stud-Left-Down-Content-Box-Left">
                                    <p>{category.id}</p>
                                    <h2>{category.name}</h2>
                                </div>
                                <div className="History-Stud-Left-Down-Content-Box-Right">
                                    <span>
                                        <LuMail />
                                    </span>
                                    <p>{category.count} sms</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="History-Stud-Right">
                <div className="History-Stud-Right-Title">
                    <div className="History-Stud-Right-Title-Left">
                        <p>{selectedCategory}</p>
                    </div>
                    <div className="History-Stud-Right-Title-Right">
                        <button>
                            <p>Date</p>
                            <span>
                                <FaChevronDown />
                            </span>
                        </button>
                        <button>
                            <p>Author</p>
                            <span>
                                <FaChevronDown />
                            </span>
                        </button>
                        <label>
                            <span> <Icons.search/></span>
                            <input
                                type="text"
                                placeholder="Search lesson"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="History-Stud-Right-Contant">
                    {paginatedHistory.map((sms) => (
                        <div key={sms.id} className="History-Stud-Right-Contant-Box">
                            <div className="History-Stud-Right-Contant-Box-Conainer">
                                <div className="History-Stud-Right-Contant-Box-Name">
                                    <h2>{sms.name}</h2>
                                    <p>{sms.status}</p>
                                </div>
                                <div className="History-Stud-Right-Contant-Box-Comment">
                                    <p>{sms.comment}</p>
                                </div>
                                <div className="History-Stud-Right-Contant-Box-Date">
                                    <p>{sms.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="NavigationTool" style={{ height: "70px" }}>
                    <div className=""></div>
                    <div className="TablePaginatorButtons">
                        <button
                            className="TablePaginatorButtonsNextPage"
                            onClick={() => handlePageChange("prev")}
                            disabled={currentPage === 1}
                        >
                            <Icons.leftArrow /> Previous page
                        </button>
                        <div className="TablePaginatorNumberButtons">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`TablePaginatorNumberButtonMini ${currentPage === index + 1
                                        ? "TablePaginatorNumberButtonActive"
                                        : ""
                                        }`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            {totalPages > 3 && (
                                <button className="TablePaginatorNumberButtonMini">
                                    ...
                                </button>
                            )}
                        </div>
                        <button
                            className="TablePaginatorButtonsNextPage"
                            onClick={() => handlePageChange("next")}
                            disabled={currentPage === totalPages}
                        >
                            Next page <Icons.rightArrowColor />
                        </button>
                    </div>
                    <div className="TablePaginatorInput">
                        <input
                            type="number"
                            placeholder="№"
                            min="1"
                            max={totalPages}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <p onClick={handleGoToPage}>Go to page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
