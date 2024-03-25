import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/StudentDashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AdminDashBoard from "./pages/AdminDashBoard";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/student",
      element: <StudentDashboard />,
    },
    {
      path: "/admin",
      element: <AdminDashBoard />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <GoogleOAuthProvider clientId="118125970358-hhhd7bta5n2649ca6mrjffa3bd990i7b.apps.googleusercontent.com">
      <Router>
        <Routes />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
