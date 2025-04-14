import { message, Radio, Select } from 'antd';
import Dragger from 'antd/es/upload/Dragger'
import React, { useState } from 'react'
import { Icons } from '../../../Assets/icons/icons';

export default function BasicSettings() {

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
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
  
    const [valueCustom, setValueCustom] = useState(1);
    const onChangeCustom = (e) => {
      console.log("radio checked", e.target.value);
      setValueCustom(e.target.value);
    };
  
    const [valueNumber, setValueNumber] = useState(1);
    const onChangeNumber = (e) => {
      console.log("radio checked", e.target.value);
      setValueNumber(e.target.value);
    };
  
    const [valueCustomNumber, setValueCustomNumber] = useState(1);
    const onChangeCustomNumber = (e) => {
      console.log("radio checked", e.target.value);
      setValueCustomNumber(e.target.value);
    };
  
    const [valueType, setValueType] = useState(0);
    const onChangeType = (e) => {
      console.log("radio checked", e.target.value);
      setValueType(e.target.value);
    };
  
    const [valueCustomType, setValueCustomType] = useState(1);
    const onChangeCustomType = (e) => {
      console.log("radio checked", e.target.value);
      setValueCustomType(e.target.value);
    };
  
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    

    return (
        <div className="SettingChildrenDiv">
            <span className="SettingChildrenDivTitle">Basic settings</span>
            <div className="SettingChildrenDivBeetwen">
                <div className="SettingForms">
                    <div className="SettingForm">
                        <div className="SettingFormAvatar">
                            <h1>A</h1>
                        </div>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">File Upload Label Link</p>
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
                        <p className="SettingFormInfoTitle">Name of company</p>
                        <div className="SettingForm">
                            <input type="text" placeholder="Enter code" />
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Phone number of company</p>
                        <div className="SettingForm">
                            <input type="tel" placeholder="+998" />
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">
                            Upload offer (recommended: .pdf, .jpeg; max-size: 5mb;)
                        </p>
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
                        <p className="SettingFormInfoTitle">Who is the employee?</p>
                        <div className="SettingForm">
                            <input
                                type="text"
                                placeholder="Example: founder or marketer..."
                            />
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Working days</p>
                        <div className="SettingForm">
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

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Working days</p>
                        <div className="SettingForm">
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

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <div className="SettingForm">
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

                <div className="SettingChildrenDivRight">
                    <div className="SettingChildrenDivRightTitle">
                        <p>Basic system settings</p>
                    </div>
                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Select branches</p>
                        <div className="SettingFormRadios">
                            <Radio.Group
                                onChange={onChange}
                                value={value}
                                className="SettingUnitRadio1"
                            >
                                <Radio value={1}>Point</Radio>
                                <Radio value={2}>Unit</Radio>
                                <Radio value={3}>Iq</Radio>
                                <Radio value={4}>Power</Radio>
                            </Radio.Group>

                            <Radio.Group
                                onChange={onChangeCustom}
                                value={valueCustom}
                                className="SettingUnitRadio2"
                            >
                                <Radio value={1}>Star</Radio>
                                <Radio value={2}>Custom</Radio>
                                <input type="text" placeholder="Unit name..." />
                            </Radio.Group>
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">Rating scale</p>
                        <div className="SettingFormRadios">
                            <Radio.Group
                                onChange={onChangeNumber}
                                value={valueNumber}
                                className="SettingUnitRadio1"
                            >
                                <Radio value={1}>5</Radio>
                                <Radio value={2}>10</Radio>
                                <Radio value={3}>100</Radio>
                            </Radio.Group>

                            <Radio.Group
                                onChange={onChangeCustomNumber}
                                value={valueCustomNumber}
                                className="SettingUnitRadio2"
                            >
                                <Radio value={1}>Star</Radio>
                                <Radio value={2}>
                                    <input type="text" placeholder="Unit name..." />
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">
                            Type of adding monthly salary to employee balance
                        </p>
                        <div className="SettingFormRadios">
                            <Radio.Group
                                onChange={onChangeType}
                                value={valueType}
                                className="SettingUnitRadio1"
                            >
                                <Radio value={1}>Add daily amount to balance</Radio>
                            </Radio.Group>

                            <Radio.Group
                                onChange={onChangeCustomType}
                                value={valueCustomType}
                                className="SettingUnitRadio2"
                            >
                                <Radio value={1}>One day of every month</Radio>
                                <Radio value={2}>
                                    <input type="text" placeholder="Unit name..." />
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>

                    <div className="SettingFormInfo">
                        <p className="SettingFormInfoTitle">
                            Add rooms (The room word is required)
                        </p>
                        <div className="SettingFormList">
                            <input type="text" placeholder="Room" />
                            <button>Add</button>
                        </div>
                        <div className="SettingFormTodos">
                            <div className="SettingFormTodo">
                                <p>1 Room</p>
                                <div className="SettingFormTodoActions">
                                    <Icons.basicEdit />
                                    <Icons.basicDelet />
                                </div>
                            </div>
                        </div>

                        <div className="SettingFormTodos">
                            <div className="SettingFormTodo">
                                <p>2 Room</p>
                                <div className="SettingFormTodoActions">
                                    <Icons.basicEdit />
                                    <Icons.basicDelet />
                                </div>
                            </div>
                        </div>

                        <div className="SettingFormTodos">
                            <div className="SettingFormTodo">
                                <p>3 Room</p>
                                <div className="SettingFormTodoActions">
                                    <Icons.basicEdit />
                                    <Icons.basicDelet />
                                </div>
                            </div>
                        </div>

                        <div className="SettingFormTodos">
                            <div className="SettingFormTodo">
                                <p>4 Room</p>
                                <div className="SettingFormTodoActions">
                                    <Icons.basicEdit />
                                    <Icons.basicDelet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
