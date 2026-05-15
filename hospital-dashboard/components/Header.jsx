export default function Header({ dark, setDark }) {
  return (
    <div className="header">
      <h1>Hospital Dashboard</h1>

      <button className="toggle-btn" onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
