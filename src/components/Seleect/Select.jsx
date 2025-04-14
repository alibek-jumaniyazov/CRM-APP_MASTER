import React, { useState, useRef, useEffect } from 'react';
import './Select.css'; // Подключаем стили
import { FaChevronDown } from "react-icons/fa";


const CustomSelect = ({ options, initialLabel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialLabel);
    const selectRef = useRef(null);

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div ref={selectRef} className="customSelect">
            <div className="customSelect-trigger" onClick={() => setIsOpen(!isOpen)}>
                <p>{selectedOption}</p> <span><FaChevronDown /></span>
            </div>
            {isOpen && (
                <div className="customSelect-options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="customSelect-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            <p>{option}</p> 
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
