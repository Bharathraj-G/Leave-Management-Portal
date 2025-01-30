import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import LeaveApply from "./pages/LeaveApply";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    // Enhanced switch case with meaningful titles and descriptions
    switch (pathname) {
      case "/":
        title = "Login | Leave Management";
        metaDescription = "Login to Leave Management Portal";
        break;
      case "/login-page":
        title = "Sign In | Leave Management";
        metaDescription = "Sign in to access Leave Management Portal";
        break;
      case "/dashboard":
        title = "Dashboard | Leave Management";
        metaDescription = "View and manage your leave requests";
        break;
      case "/leave-apply":
        title = "Apply Leave | Leave Management";
        metaDescription = "Apply for new leave request";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leave-apply" element={<LeaveApply />} />
      </Routes>
    </div>
  );
}
export default App;