import './App.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage/>
    },
    {
      path: '/student',
      element: <StudentDashboard/>
    }
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
