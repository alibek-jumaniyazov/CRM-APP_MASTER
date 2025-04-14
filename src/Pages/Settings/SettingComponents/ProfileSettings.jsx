import { message } from 'antd';
import Dragger from 'antd/es/upload/Dragger'
import React from 'react'

export default function ProfileSettings() {

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

    return (
        <div className="SettingChildrenDiv">
            <span className="SettingChildrenDivTitle">Profile</span>

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
                    <p className="SettingFormInfoTitle">Last name*</p>
                    <div className="SettingForm">
                        <input type="text" placeholder="Enter code" />
                    </div>
                </div>

                <div className="SettingFormInfo">
                    <p className="SettingFormInfoTitle">Last name*</p>
                    <div className="SettingForm">
                        <input type="text" placeholder="Enter code" />
                    </div>
                </div>

                <div className="SettingFormInfo">
                    <p className="SettingFormInfoTitle">Phone number*</p>
                    <div className="SettingForm">
                        <input type="tel" placeholder="+998" />
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
            </div>
        </div>
    )
}
