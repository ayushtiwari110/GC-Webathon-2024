import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import CourseEnrollment from './pages/CourseEnrollment';
import AdminDashBoard from './pages/AdminDashBoard'; // Added import for AdminDashBoard

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/student',
      element: <StudentDashboard />,
    },
    {
      path: '/student/course',
      element: <CourseEnrollment />,
    },
    {
      path: '/admin',
      element: <AdminDashBoard />, // Added route for AdminDashBoard
    },
    {
      path: '/student/profile',
      element: <StudentProfile />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
