import './App.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import CourseEnrollment from './pages/CourseEnrollment';
import AttendanceTracking from './pages/AttendanceTracking';
import GradesPage from './pages/GradesPage'
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/student',
      element: <StudentDashboard />
    },
    {
      path: '/student/course',
      element: <CourseEnrollment />
    },
    {
      path: '/student/profile',
      element: <StudentProfile />
    },
    {
      path: '/student/attendance',
      element: <AttendanceTracking />
    },
    {
      path: '/student/grades',
      element: <GradesPage />
    },
  ]);
  return routes;
}

function App() {

  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
