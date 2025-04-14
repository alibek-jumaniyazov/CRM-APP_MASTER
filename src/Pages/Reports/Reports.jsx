import React from 'react';
import { Route, Link, Routes, Navigate, useLocation } from 'react-router-dom';
import Clients from './ClientsReport/Clients.jsx';
import Employees from './Employees/Employees.jsx';
import Finance from './FinanceReport/Finance.jsx';
import './Reports.css';

export default function Reports() {
    const location = useLocation();

    return (
        <div className="ReportsContainer">
            <div className="ReportsNav">
                <Link
                    to="clients-report"
                    className={location.pathname.includes('clients-report') ? 'active_report' : ''}
                >
                    Clients
                </Link>
                <Link
                    to="employees-report"
                    className={location.pathname.includes('employees-report') ? 'active_report' : ''}
                >
                    Employees
                </Link>
                <Link
                    to="finance-report"
                    className={location.pathname.includes('finance-report') ? 'active_report' : ''}
                >
                    Finance
                </Link>
            </div>

            <div className="ReportsContent">
                <Routes>
                    <Route index element={<Navigate to="clients-report" />} />
                    <Route path="clients-report" element={<Clients />} />
                    <Route path="employees-report" element={<Employees />} />
                    <Route path="finance-report" element={<Finance />} />
                </Routes>
            </div>
        </div>
    );
}
