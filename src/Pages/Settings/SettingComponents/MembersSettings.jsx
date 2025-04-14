import { Button, Checkbox, Input, Modal, Radio, Select } from 'antd';
import React, { useState } from 'react'
import { Icons } from '../../../Assets/icons/icons';
import { CiShare1 } from 'react-icons/ci';

export default function MembersSettings() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [paymentType, setPaymentType] = useState(null);
    const [sendSms, setSendSms] = useState(false);
    const [isAccessGiven, setIsAccessGiven] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        if (login && password && paymentType) {
            setIsAccessGiven(true);
            setIsModalVisible(false);
        }
    };

    const handleDeleteAccess = () => {
        setLogin("");
        setPassword("");
        setPaymentType(null);
        setSendSms(false);
        setIsAccessGiven(false);
        setIsModalVisible(false);
    };

    return (
        <div className="SettingChildrenDiv">
            <div className="SettingChildrenDivHeader">
                <span className="SettingChildrenDivTitle">Members</span>
                <div className="SettingChildrenDivHeaderSearch">
                    <span>All employees: 48</span>
                    <span>Have access to system: 23</span>
                    <div className="SettingChildrenDivHeaderSearchInupt">
                        <Icons.search />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className="SettingMembers">
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="SettingMember">
                    <div className="SettingMemberInfo">
                        <div className="SettingMemberName">
                            <p>1</p>
                            <p className="mrAAAA">
                                Mr. Aleksey{" "}
                                <span>
                                    <CiShare1 />
                                </span>
                            </p>
                        </div>
                        <div className="SettingMemberBrach">
                            <input type="text" placeholder="Role in business" />
                            <Select
                                defaultValue="Branches"
                                className="membersSelect"
                                style={{
                                    width: "210px",
                                    height: "40px!important",
                                    padding: "0",
                                }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: "Branches", label: "Branches" },
                                    { value: "lucy", label: "Lucy" },
                                    { value: "Yiminghe", label: "Yiminghe" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="SettingMemberButton">
                        <div onClick={showModal}>
                            {isAccessGiven ? (
                                <button className="SettingMemberButtonEditAccess">
                                    <Icons.editModal /> Edit access
                                </button>
                            ) : (
                                <button className="SettingMemberButtonAddAccess">
                                    <Icons.LinkButton /> Add access to system
                                </button>
                            )}
                        </div>
                    </div>

                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        className="custom-modal"
                    >
                        <div className="setting-modal-content">
                            <div className="modal-header-titles">
                                <span>Edit employee access to system</span>
                                <p className="modal-subtitle">
                                    Editing custom access employee to system
                                </p>
                            </div>
                            <div className="SettingModalFroms">
                                <div className="SettingModalFrom">
                                    <p>Login</p>
                                    <Input
                                        className="SettingModalFromInput"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>

                                <div className="SettingModalFrom">
                                    <p>Password</p>
                                    <Input.Password
                                        className="SettingModalFromInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="setting-modal-section">
                                <p className="setting-modal-section-title">Payment type:</p>
                                <Radio.Group
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    value={paymentType}
                                    className="modal-radios"
                                >
                                    <Radio value="Administrator">Administrator</Radio>
                                    <Radio value="Main manager">Main manager</Radio>
                                    <Radio value="Branch manager">Branch manager</Radio>
                                    <Radio value="Finance manager">Finance manager</Radio>
                                    <Radio value="Marketing manager">Marketing manager</Radio>
                                    <Radio value="Teacher">Teacher</Radio>
                                    <Radio value="Reception administrator">
                                        Reception administrator
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <Checkbox
                                checked={sendSms}
                                onChange={(e) => setSendSms(e.target.checked)}
                                className="setting-modal-checkbox"
                            >
                                Send login and password to employee with SMS
                            </Checkbox>
                            <div className="setting-modal-footer">
                                {isAccessGiven ? "" : <div className=""></div>}
                                {isAccessGiven && (
                                    <Button
                                        onClick={handleDeleteAccess}
                                        className="delete-button"
                                    >
                                        Delete access
                                    </Button>
                                )}
                                <div className="setting-modal-buttons">
                                    <Button onClick={handleCancel} className="cancel-button">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        onClick={handleSave}
                                        className="save-button"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
