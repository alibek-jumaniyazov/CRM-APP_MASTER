import React, { useState } from 'react'
import checkBg from "../../../Assets/chekBg.png"
import { Checkbox, message, Radio } from 'antd'
import Dragger from 'antd/es/upload/Dragger';

export default function CheckSettings() {

    const props = {
        name: "file",
        multiple: true,
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        onChange(info) {
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log("Dropped files", e.dataTransfer.files);
        },
      };
    

    const [valueLanguange, setValueLanguange] = useState(1);

    const onChangeLanguange = (e) => {
        console.log("radio checked", e.target.value);
        setValueLanguange(e.target.value);
      };
    
      const onChangeChek = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
        <div className="SettingChildrenDiv">
            <span className="SettingChildrenDivTitle">
                Billing check settings
            </span>
            <div className="settingChildrenChekBeetwenn">
                <div className="SettingForms">
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Billing check languange</p>
                        <div className="SettingForm">
                            <Radio.Group
                                onChange={onChangeLanguange}
                                value={valueLanguange}
                                className="SettingUnitRadio1"
                            >
                                <Radio value={1}>English</Radio>
                                <Radio value={2}>Uzbek</Radio>
                                <Radio value={3}>Russian</Radio>
                                <Radio value={4}>Qaraqalpaq</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="SettingForm">
                        <div className="SettingFormAvatar">
                            <h1>A</h1>
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Logo for billing check</p>
                        <div className="SettingForm">
                            <Dragger {...props}>
                                <div className="SettingFormUpload">
                                    <span>Drag and drop here or</span>
                                    <p>Browse Files</p>
                                </div>
                            </Dragger>
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">
                            Print additional information on the receipt as well
                        </p>
                        <div className="SettingForm">
                            <div className="SettingFormCheks">
                                <Checkbox onChange={onChangeChek}>Logo of company</Checkbox>
                                <Checkbox onChange={onChangeChek}>Name of company</Checkbox>
                                <Checkbox onChange={onChangeChek}>Phone number</Checkbox>
                                <Checkbox onChange={onChangeChek}>Branch</Checkbox>
                                <Checkbox onChange={onChangeChek}>Teacher</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SettingCheckRight">
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SettingChecksDiv">
                <div className="SettingChecksDivHeader">
                    <p>Preview for other transaction’s check</p>
                    <span>Transaction check for students</span>
                </div>
                <div className="SettingChecks">
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SettingChecksDiv">
                <div className="SettingChecksDivHeader">
                    <span>Transaction check for students</span>
                </div>
                <div className="SettingChecks">
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SettingChecksDiv">
                <div className="SettingChecks">
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCheck">
                        <img src={checkBg} alt="" className="SettingCheckBg" />
                        <div className="settingChekInfos">
                            <div className="settingChekInfosHeader">
                                <h1>Logo of company</h1>
                                <p>Name of company</p>
                                <h1>Payment check</h1>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Transaction’s id: 28323</p>
                                <p>Branch: Main branch</p>
                                <p>Student: Alisher Atajanov</p>
                                <p>Phone number: +998999667363</p>
                                <p>Course: English TTS 14:00 Mr. Johnson</p>
                                <p>Teacher: Mr. Johnson</p>
                                <p>Monthly payment: 330 000 so’m</p>
                                <p>All depts: 410 000 so’m</p>
                                <p>Payment: 280 000 so’m</p>
                                <p>Payment type: Cash</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Indebtedness:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 330 000 so’m</p>
                                <p>All indebtedness: 410 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Deducted:</p>
                                <p>March: 80 000 so’m</p>
                                <p>April: 200 000 so’m</p>
                                <p>Current balance: - 130 000 so’m</p>
                            </div>
                            <div className="settingChekInfosParagraph">
                                <p>Employee: John Anderson</p>
                                <p>Date: 06.06.2024 16:16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
