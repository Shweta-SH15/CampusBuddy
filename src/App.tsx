
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import './App.css';
import Index from '@/pages/Index';
import ProfilePage from '@/pages/ProfilePage';
import ConnectPage from '@/pages/ConnectPage';
import ResourcesPage from '@/pages/ResourcesPage';
import EventsPage from '@/pages/EventsPage';
import TasksPage from '@/pages/TasksPage';
import AICoachPage from '@/pages/AICoachPage';
import VoiceAssistantPage from '@/pages/VoiceAssistantPage';
import ProgressPage from '@/pages/ProgressPage';
import CampusMapPage from '@/pages/CampusMapPage';
import DailySummaryPage from '@/pages/DailySummaryPage';
import NotFound from '@/pages/NotFound';
import LibraryPage from '@/pages/LibraryPage';
import StudyGroupsPage from '@/pages/StudyGroupsPage';
import NotificationsPage from '@/pages/NotificationsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/ai-coach" element={<AICoachPage />} />
        <Route path="/voice-assist" element={<VoiceAssistantPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/campus-map" element={<CampusMapPage />} />
        <Route path="/daily" element={<DailySummaryPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/study-groups" element={<StudyGroupsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
