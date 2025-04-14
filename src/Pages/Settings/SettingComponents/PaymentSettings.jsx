import { Select } from 'antd';
import React from 'react'

export default function PaymentSettings() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="SettingChildrenDiv">
            <span className="SettingChildrenDivTitle">Payment settings</span>
            <div className="SettingPaymentInputs">
                <div className="SettingForms">
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Click merchant ID</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Payme merchant ID</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Payme merchant ID</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Uzum merchant ID</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Alif merchant ID</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>
                </div>
                <div className="SettingForms">
                    <div className="SettingFormInfoSelect">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <Select
                            defaultValue="select"
                            style={{
                                width: "100%",
                                height: "45px !important",
                                borderRadius: "10px",
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
                    <div className="SettingFormInfoSelect">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <Select
                            defaultValue="select"
                            style={{
                                width: "100%",
                                height: "45px",
                                borderRadius: "10px",
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
                    <div className="SettingFormInfoSelect">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <Select
                            defaultValue="select"
                            style={{
                                width: "100%",
                                height: "45px",
                                borderRadius: "10px",
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
                    <div className="SettingFormInfoSelect">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <Select
                            defaultValue="select"
                            style={{
                                width: "100%",
                                height: "45px",
                                borderRadius: "10px",
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
                    <div className="SettingFormInfoSelect">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <Select
                            defaultValue="select"
                            style={{
                                width: "100%",
                                height: "45px",
                                borderRadius: "10px",
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
            </div>
            <div className="SettingPaymentButtons">
                <button className="CourseInfoHeaderButtonOne">Send sms</button>
                <button className="CourseInfoHeaderButtonTwo">
                    Add new employee
                </button>
            </div>
        </div>
    )
}
