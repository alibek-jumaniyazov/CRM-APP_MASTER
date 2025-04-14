import React, { useState } from 'react'
import { Icons } from '../../../../Assets/icons/icons';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Checkbox, Radio, Select } from 'antd';
import { IoSearchSharp } from 'react-icons/io5';

export default function FinanceAddIncomeModal({ personalAddSalaryState, setPersonalAddSalary }) {

    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);


    const toggleDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
    };

    const toggleDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
    };


    const [value, setValue] = useState(1);
    const [modalCheck, setModalCheck] = useState(false);
    const [SalaryModalSecond, setSalaryModalSecond] = useState(false);
    const [AddSalaryModalQuest, setPersonalAddSalaryModalQuest] = useState(false);
    const [isOpenSearchData, setIsOpenSearchData] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    function handleCloseMainModal() {
        setPersonalAddSalary(false);
        setPersonalAddSalaryModalQuest(true);
    }

    const handleItemClick = (text) => {
        setSearchInput(text); // Set the input field value to the clicked item's text
        setIsOpenSearchData(false); // Optionally close the search results
    };

    function handleGoBackModal() {
        setPersonalAddSalary(true);
        setPersonalAddSalaryModalQuest(false);
    }

    function handleOpenSecondModal() {
        setPersonalAddSalary(false);
        setPersonalAddSalaryModalQuest(false);
        setSalaryModalSecond(true);
        setTimeout(() => {
            setSalaryModalSecond(false);
        }, 1000);
    }
    console.log(modalCheck);

    return (
        <>
            <div className={personalAddSalaryState ? "PosationModal AddSalaryModal NewCustomerModal" : "hidden"}>
                <div className="SendSmsGroupClose" onClick={() => setPersonalAddSalary(false)}>
                    <Icons.close className="closeIcon" />
                </div>
                <div className="NewCustomerModalTitles">
                    <p>Add new additional income </p>
                    <span>Add a new additional income to the system</span>
                </div>
                <div className="NewCustomerModalButtonsToggles">
                    <div onClick={toggleDiv1} className={showDiv1 ? "NewCustomerModalButtonsToggleActive" : "NewCustomerModalButtonsToggle"}>
                        <div className="NewCustomerModalButtonsToggleIcon">
                            <Icons.studentBig />
                        </div>
                        <div className="NewCustomerModalButtonsToggleTitles">
                            <p>From student</p>
                            <span>Income from student</span>
                        </div>
                    </div>
                    <div onClick={toggleDiv2} className={showDiv2 ? "NewCustomerModalButtonsToggleActive" : "NewCustomerModalButtonsToggle"}>
                        <div className="NewCustomerModalButtonsToggleIcon">
                            <Icons.walletBig />
                        </div>
                        <div className="NewCustomerModalButtonsToggleTitles">
                            <p>Another type</p>
                            <span>Additional type of income</span>
                        </div>
                    </div>
                </div>
                {showDiv1 && (
                    <div className="incomeModalDivs">
                        <div className="FinanceModalSerach">
                            <div className="FinanceModalSerachInfo">
                                <IoSearchSharp />
                                <input
                                    type="text"
                                    value={searchInput} // Set the value of the input field
                                    onClick={() => setIsOpenSearchData(!isOpenSearchData)}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    placeholder="Search student"
                                />

                            </div>
                        </div>
                        <div className="FinanceModalSerachTable">
                            <div className="FinanceModalSerachTableHeader">
                                <p style={{ width: "10px" }}>#</p>
                                <p style={{ width: "120px" }}>Name <Icons.filterTable /> </p>
                                <p style={{ width: "123px" }}>Phone number <Icons.filterTable /> </p>
                                <p style={{ width: "91" }}>Balance <Icons.filterTable /> </p>
                                <p style={{ width: "100px" }}>Add expense <Icons.filterTable /> </p>
                            </div>
                            <div className="FinanceModalSerachTableLists">
                                {[...Array(20)].map((_, index) => (
                                    <div className="FinanceModalSerachTableList" key={index}>
                                        <p style={{ width: "20px" }}>1</p>
                                        <p style={{ width: "120px" }}>Alisher Atajanov</p>
                                        <p style={{ width: "123px" }}>+998 99 966 73 63</p>
                                        <p style={{ width: "91" }}>- 183 000 so’m</p>
                                        <Checkbox style={{ width: "80px", display: "flex", justifyContent: "center" }}></Checkbox>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="AddSalaryModalSelects">
                            <div>
                                <label htmlFor="">Payment amout</label>
                                <div className="inputIconDiv">
                                    <Icons.coinsClient />
                                    <input type="text" placeholder="Amount" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Select date</label>
                                <div className="inputIconDiv">
                                    <Icons.calendar />
                                    <input type="text" placeholder="Payment date" />
                                </div>
                            </div>
                        </div>
                        <div className="AddSalaryModalRadios">
                            <span>Payment amout</span>
                            <Radio.Group
                                onChange={onChange}
                                value={value}
                                className="AddSalaryModalRadio"
                            >
                                <Radio value={1}>Cash</Radio>
                                <Radio value={2}>Payoneer</Radio>
                                <Radio value={3}>Paypal</Radio>
                                <Radio value={4}>MasterCard</Radio>
                            </Radio.Group>
                        </div>
                        <div className="AddSalaryModalComment">
                            <span>Comment (optional)</span>
                            <div className="">
                                <textarea placeholder="Note for payment"></textarea>
                            </div>
                        </div>
                        <div className="AddSalaryModalBalance">
                            <div className="AddSalaryModalBalanceCheck  ">
                                <Checkbox>Print a check</Checkbox>
                            </div>
                        </div>
                    </div>
                )}
                {showDiv2 && (
                    <div className="incomeModalDivs">
                        <div className="AddSalaryModalSelects">
                            <div>
                                <label htmlFor="">Select date</label>
                                <div className="inputIconDiv">
                                    <Icons.calendar />
                                    <input type="text" placeholder="Payment date" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Payment amout</label>
                                <div className="inputIconDiv">
                                    <Icons.coinsClient />
                                    <input type="text" placeholder="Amount" />
                                </div>
                            </div>
                        </div>
                        <div className="AddSalaryModalOneSelect">
                            <label htmlFor="">Select category*</label>
                            <Select
                                defaultValue="select"
                                className=""
                                style={{
                                    width: "100%!important",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "10px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "Category 1",
                                        label: "Category 1",
                                    },
                                    {
                                        value: "Category 2",
                                        label: "Category 2",
                                    },
                                ]}
                            />
                        </div>
                        <div className="AddSalaryModalRadios">
                            <span>Payment amout</span>
                            <Radio.Group
                                onChange={onChange}
                                value={value}
                                className="AddSalaryModalRadio"
                            >
                                <Radio value={1}>Cash</Radio>
                                <Radio value={2}>Payoneer</Radio>
                                <Radio value={3}>Paypal</Radio>
                                <Radio value={4}>MasterCard</Radio>
                            </Radio.Group>
                        </div>
                        <div className="AddSalaryModalComment">
                            <span>Comment (optional)</span>
                            <div className="">
                                <textarea placeholder="Note for payment"></textarea>
                            </div>
                        </div>
                        <div className="AddSalaryModalBalance">
                            <div className="AddSalaryModalBalanceCheck  ">
                                <Checkbox>Print a check</Checkbox>
                            </div>
                        </div>
                    </div>
                )}
                <div className="SendSmsBtns">
                    <button className="SendSmsButtonOne" onClick={() => setPersonalAddSalary(false)}>Cancel</button>
                    <button className="SendSmsButtonTwo" onClick={handleCloseMainModal}>
                        {" "}
                        <Icons.send className="closeIcon" /> Confrim
                    </button>
                </div>
            </div>
            <div
                className={
                    AddSalaryModalQuest
                        ? "ConFimModalAddStud addSalaryQuestModalCheck PosationModal"
                        : "none"
                }
            >
                <div
                    className="ConFimModalAddStudClose"
                    onClick={() => setPersonalAddSalaryModalQuest(false)}
                >
                    <Icons.close />
                </div>
                <div className="ConFimModalAddStudTitle ">
                    <h2>Confirm adding income </h2>
                    <p>Do you want to confirm add <br /> new additional income to system ? </p>
                </div>
                <div className="ConFimModalAddStudButtons addSalaryQuestModalButton">
                    <button onClick={handleGoBackModal} style={{ width: "100%" }}>
                        Go back
                    </button>
                    <button
                        style={{ border: "none", width: "100%" }}
                        id="YesConFimModalAddStudButtons"
                        onClick={handleOpenSecondModal}
                    >
                        {modalCheck ? "With check" : " Yes"}
                    </button>
                </div>
            </div>

            <div className={SalaryModalSecond ? "LastConFimModalAddStud PosationModal" : "none"}>
                <div className="ConFimModalAddStudLogo">
                    <span>
                        <FaRegCircleCheck />
                    </span>
                </div>
                <div className="LastConFimModalAddStudTitle">
                    <h2>Additional income added </h2>
                    <p>Additional income added successfully </p>
                </div>
            </div>
        </>
    )
}
