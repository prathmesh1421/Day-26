export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>🏥 MediCare</h2>

      <ul>
        <li onClick={() => setPage("dashboard")}>📊 Dashboard</li>
        <li onClick={() => setPage("patients")}>🧑 Patients</li>
        <li onClick={() => setPage("doctors")}>👨‍⚕️ Doctors</li>
      </ul>
    </div>
  );
}
