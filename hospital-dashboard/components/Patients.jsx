import { useState, useEffect } from "react";

export default function Patients() {
  const [patients, setPatients] = useState(() => {
    //  LOAD DATA PROPERLY (IMPORTANT)
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("Recovered");

  //  SAVE DATA WHENEVER PATIENTS CHANGE
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = () => {
    if (!name || !age) return;

    const newPatient = {
      id: Date.now(),
      name,
      age,
      status,
    };

    setPatients((prev) => [...prev, newPatient]);

    setName("");
    setAge("");
    setStatus("Recovered");
  };

  return (
    <div>
      <h2>Patients Management</h2>

      {/* FORM */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Recovered</option>
          <option>Treatment</option>
          <option>Critical</option>
        </select>

        <button onClick={addPatient}>Add</button>
      </div>

      {/* TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan="3">No Patients Added</td>
            </tr>
          ) : (
            patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
