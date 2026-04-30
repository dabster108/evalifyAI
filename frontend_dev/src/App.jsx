import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import StartInterviewPage from './pages/StartInterviewPage';
import ResumeAnalysisPage from './pages/ResumeAnalysisPage';
import ReportsPage from './pages/ReportsPage';
import CandidatesPage from './pages/CandidatesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import IdeInterviewPage from './pages/IdeInterviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/start-interview" element={<StartInterviewPage />} />
        <Route path="/resume-analysis" element={<ResumeAnalysisPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/ide-interview" element={<IdeInterviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
