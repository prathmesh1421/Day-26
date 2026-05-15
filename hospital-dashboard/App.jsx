import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="main">
        <Header dark={dark} setDark={setDark} />

        {page === "dashboard" && <Dashboard />}
        {page === "patients" && <Patients />}
        {page === "doctors" && <Doctors />}
      </div>
    </div>
  );
}
