import React, { useState } from "react";
import "./Setting.css";
import ProfileSettings from "./SettingComponents/ProfileSettings";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import BasicSettings from "./SettingComponents/BasicSettings";
import SmsSettings from "./SettingComponents/SmsSettings";
import PaymentSettings from "./SettingComponents/PaymentSettings";
import CheckSettings from "./SettingComponents/CheckSettings";
import MembersSettings from "./SettingComponents/MembersSettings";
import BillingSettings from "./SettingComponents/BillingSettings";
export default function Setting() {
  const location = useLocation()


  return (
    <div className="CoursePage Setting">
      <div className="CourseLevelHeaderToggles">
        <Link
          to="profile" id="ActiveP"
          className={location.pathname.includes('profile') ? 'active' : ''}
        >
          Profile
        </Link>
        <Link
          to="basic" id="ActiveP"
          className={location.pathname.includes('basic') ? 'active' : ''}
        >
          Basic
        </Link>
        <Link
          to="sms" id="ActiveP"
          className={location.pathname.includes('sms') ? 'active' : ''}
        >
          Sms
        </Link>
        <Link
          to="payment" id="ActiveP"
          className={location.pathname.includes('payment') ? 'active' : ''}
        >
          Payment
        </Link>
        <Link
          to="check" id="ActiveP"
          className={location.pathname.includes('check') ? 'active' : ''}
        >
          The check
        </Link>
        <Link
          to="members" id="ActiveP"
          className={location.pathname.includes('members') ? 'active' : ''}
        >
          Members
        </Link>
        <Link
          to="billing" id="ActiveP"
          className={location.pathname.includes('billing') ? 'active' : ''}
        >
          Billing
        </Link>
      </div>

      <Routes>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile" element={<ProfileSettings />} />
        <Route path="basic" element={<BasicSettings />} />
        <Route path="sms" element={<SmsSettings />} />
        <Route path="payment" element={<PaymentSettings />} />
        <Route path="check" element={<CheckSettings />} />
        <Route path="members" element={<MembersSettings />} />
        <Route path="billing" element={<BillingSettings />} />
      </Routes>
    </div>
  );
}
