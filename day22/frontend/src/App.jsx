import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Routes>
      {/* Login page */}
      <Route
        path="/login"
        element={
          token ? <Navigate to="/dashboard" /> : <Login onLogin={setToken} />
        }
      />

      {/* Dashboard (protected) */}
      <Route
        path="/dashboard"
        element={
          token ? <Dashboard /> : <Navigate to="/login" />
        }
      />

      {/* Default route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
