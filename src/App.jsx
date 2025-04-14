import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Aside from './Pages/aside/Aside';
import Home from './Pages/home/Home';
import Leads from './Pages/leads/Leads';
import Navbar from './components/Navbar/Navbar';
import MonthlyFinancialIndicatorsChart from './Pages/FinanceLine/FinanceLine';
import Login from './Pages/Login/Login';
import Client from './Pages/Clients/Clients';
import StudentPage from './Pages/StudentPage/StudentPage';
import Groups from './Pages/Groups/Groups';
import Course from './Pages/Course/Course';
import CourseInfo from './Pages/Course/CourseInfo';
import CourseLevel from './Pages/Course/CourseLevel';
import Personal from './Pages/Personal/Personal';
import PersonalUser from './Pages/Personal/PersonalUser';
import Finance from './Pages/Finance/Finance';
import Setting from './Pages/Settings/Setting';
import './App.css';
import './Pages/Personal/Personal.css';
import './Pages/Course/Course.css';
import './components/GroupSendSms/GroupComponent.css';
import CustomerPage from './Pages/CustomerPage/CustomerPage.jsx';
import GroupProfil from './Pages/Groups/GroupProfil.jsx';
import PersonalArchiveUser from './Pages/Personal/PersonalArchiveUser.jsx';
import Reports from './Pages/Reports/Reports.jsx';
import ProfileSettings from './Pages/Settings/SettingComponents/ProfileSettings.jsx';

const App = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
        {token ? (
          <>
            <Route
              path="*"
              element={
                <>
                  <Aside />
                  <div className="main">
                    <Navbar />
                    <div className="HomeApp">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/leads/*" element={<Leads />} />
                        <Route path="/clients/*" element={<Client />} />
                        <Route path="/groups/*" element={<Groups />} />
                        <Route path="/group-profil/:id" element={<GroupProfil />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/course-page/:name/:id" element={<CourseInfo />} />
                        <Route path="/course-level/:name/:level/:id" element={<CourseLevel />} />
                        <Route path="/personal/*" element={<Personal />} />
                        <Route path="/personal-user/:id" element={<PersonalUser />} />
                        <Route path="/personal-archive-user/:id" element={<PersonalArchiveUser />} />
                        <Route path="/finance-page" element={<Finance />} />
                        <Route path="/finance" element={<MonthlyFinancialIndicatorsChart />} />
                        <Route path="/setting/*" element={<Setting />} />
                        <Route path="/student-page/:id" element={<StudentPage />} />
                        <Route path="/customer-page/:id" element={<CustomerPage />} />
                        <Route path="/Reports/*" element={<Reports />} />
                      </Routes>
                    </div>
                  </div>
                </>
              }
            />
          </>
        ) : (
          <Route path="*" element={<Login token={token} setToken={setToken} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
