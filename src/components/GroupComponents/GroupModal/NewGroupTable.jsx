import { Select } from 'antd'
import React, { useEffect } from 'react'
import { Icons } from '../../../Assets/icons/icons'
import axios from 'axios';

export default function NewGroupTable({ handleLeftTarif, handleRightTarif, tarif, studentMenuStatus, handleCloseModal, setStudentMenuStatus, setbody1, setbody2 }) {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            {/* <div className="newLeaadCard_studentMenu1">
                <div className="newLeaadCard_studentMenu_title">
                    <h2>Create new group</h2>
                    <p>Find out more by selecting your course options below</p>
                </div>
                <div
                    className="newLeaadCard_studentMenu_Menu"
                    style={{ paddingInline: "25px" }}
                >
                    <div
                        onClick={handleLeftTarif}
                        className={
                            "newLeaadCard_studentMenu_Menu_btn1 " +
                            (tarif === "left" && "active")
                        }
                        style={{ width: "50%" }}
                    >
                        <h2>1</h2>
                        <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                            <p>1 month = 12 paid lesson</p>
                            <span>12 paid lesson and required bonus les.</span>
                        </div>
                    </div>
                    <div
                        onClick={handleRightTarif}
                        className={
                            "newLeaadCard_studentMenu_Menu_btn1 " +
                            (tarif === "right" && "active")
                        }
                        style={{ width: "50%" }}
                    >
                        <h2>2</h2>
                        <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                            <p>1 month = 31 paid lesson</p>
                            <span>14 paid lesson and optional bonus les.</span>
                        </div>
                    </div>
                </div>
            </div>
            {studentMenuStatus == 1 && (
                <div
                    className="newLeaadCard_studentMenu1_chil"
                    style={{ width: "100%" }}
                >
                    <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                        <div>
                            <label htmlFor="">
                                Group name (optional)
                                <span>
                                    <Icons.questMark />
                                </span>
                            </label>
                            <input type="text" placeholder="Group name" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select course<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select teacher <span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Teacher percentage<span>*</span>
                            </label>
                            <input type="text" placeholder="Disabled" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select days<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select start time<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select room <span>*</span>{" "}
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select start day <span>*</span>{" "}
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="addCardInfo2">
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Total number of lesson: </label>
                                <span>165</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Total study duration:</label>
                                <span>6 months</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Start time: </label>
                                <span>17:00</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">End time</label>
                                <span>19:00</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Start day: </label>
                                <span>May 15</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">End day</label>
                                <span>deckaber 15</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="newLeaadCard_studentMenu_Menu_footerBtn"
                        style={{ width: "100%" }}
                    >
                        <button onClick={setStudentMenuStatus}>Cancel</button>
                        <button onClick={() => { setStudentMenuStatus(3) }}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {studentMenuStatus == 2 && (
                <div
                    className="newLeaadCard_studentMenu1_chil"
                    style={{ width: "100%" }}
                >
                    <div className="NewCustomerModalSelects newLeaadCard_studentMenu1_chil_form">
                        <div>
                            <label htmlFor="">
                                Group name (optional)
                                <span>
                                    <Icons.questMark />
                                </span>
                            </label>
                            <input type="text" placeholder="Group name" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select course<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select teacher <span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Teacher percentage<span>*</span>
                            </label>
                            <input type="text" placeholder="Disabled" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select days<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select start time<span>*</span>
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select room <span>*</span>{" "}
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                Select start day <span>*</span>{" "}
                            </label>
                            <Select
                                defaultValue="select"
                                className="studentMenu1_chil_form_selectt"
                                style={{
                                    width: "213px",
                                    height: "45px",
                                    color: "#707683",
                                    outline: " none",
                                    borderRadius: "100px!important",
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="addCardInfo2">
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Total number of lesson: </label>
                                <span>165</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Total study duration:</label>
                                <span>6 months</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Start time: </label>
                                <span>17:00</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">End time</label>
                                <span>19:00</span>
                            </div>
                        </div>
                        <div className="addCardInfo21">
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">Start day: </label>
                                <span>May 15</span>
                            </div>
                            <div className="addCardInfo21_chil">
                                <label htmlFor="">End day</label>
                                <span>deckaber 15</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="newLeaadCard_studentMenu_Menu_footerBtn"
                        style={{ width: "100%" }}
                    >
                        <button onClick={handleCloseModal}>Cancel</button>
                        <button onClick={() => setStudentMenuStatus(4)}>
                            Next
                        </button>
                    </div>
                </div>
            )} */}

        </>
    )
}
