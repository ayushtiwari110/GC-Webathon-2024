import './App.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage/>
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
