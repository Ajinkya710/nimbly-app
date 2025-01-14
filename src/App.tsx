import React, { useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import PrivatePage from "./Common/PrivatePage";
import Home from "./Pages/Home";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/") {
      navigate("/home", { replace: true });
    }
  }, [path, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivatePage>
            <Home />
          </PrivatePage>
        }
      />
    </Routes>
  );
};

export default App;
