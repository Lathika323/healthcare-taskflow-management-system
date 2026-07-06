import { useState, useEffect, useCallback } from "react";

export default function DoctorDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [nurseId, setNurseId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [nurses, setNurses] = useState([]);

  const doctorId = localStorage.getItem("userId");

  // ✅ Fetch nurses (with their UIDs and names)
  const fetchNurses = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users?nursesOnly=true");
      const data = await res.json();
      if (data.success) setNurses(data.nurses);
    } catch (err) {
      console.error("Error fetching nurses:", err);
    }
  }, []);

  // ✅ Fetch doctor’s tasks
  const fetchTasks = useCallback(async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/tasks?role=doctor&userId=${doctorId}`
      );
      const data = await res.json();
      if (data.success) setTasks(data.tasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  }, [doctorId]);

  useEffect(() => {
    fetchNurses();
    fetchTasks();
    const interval = setInterval(fetchTasks, 60000);
    return () => clearInterval(interval);
  }, [fetchTasks, fetchNurses]);

  const addTask = async () => {
  if (!newTask || !nurseId || !deadline)
    return alert("Please fill all fields");

  // Convert nurseId to string to match Firestore query later
  const taskData = {
    taskText: newTask,
    nurseId: nurseId.toString(),
    doctorId: doctorId.toString(),
    deadline,
  };

  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });

  const data = await res.json();
  if (data.success) {
    alert("✅ Task Assigned Successfully!");
    setNewTask("");
    setNurseId("");
    setDeadline("");
    fetchTasks();
  } else {
    alert(data.error || "Failed to assign task");
  }
};


  const isDueSoon = (deadline) => {
    const now = new Date().getTime();
    return new Date(deadline).getTime() - now <= 12 * 60 * 60 * 1000;
  };

  return (
    <div style={{ padding: "2rem", background: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        👨‍⚕️ Doctor Dashboard
      </h1>

      {/* ✅ Assign Task Form */}
      <div style={formContainer}>
        <input
          placeholder="Task Description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />

        <select
          value={nurseId}
          onChange={(e) => setNurseId(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Nurse</option>
          {nurses.map((nurse) => (
            <option key={nurse.uid} value={nurse.uid}>
              {nurse.name || nurse.email} ({nurse.uid.slice(0, 6)}…)
            </option>
          ))}
        </select>

        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={inputStyle}
        />

        <button onClick={addTask} style={buttonStyle}>
          Assign Task
        </button>
      </div>

      {/* ✅ Assigned Tasks List */}
      <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
        <h2>Assigned Tasks</h2>
        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              borderLeft:
                t.status === "completed"
                  ? "6px solid #4CAF50"
                  : isDueSoon(t.deadline)
                  ? "6px solid #fbbf24"
                  : "6px solid #ddd",
            }}
          >
            <p><strong>Task:</strong> {t.taskText}</p>
            <p><strong>Nurse ID:</strong> {t.nurseId}</p>
            <p><strong>Deadline:</strong> {new Date(t.deadline).toLocaleString()}</p>
            <p><strong>Status:</strong> {t.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const formContainer = {
  maxWidth: "500px",
  margin: "0 auto",
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "10px",
};

const inputStyle = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  background: "#4CAF50",
  color: "white",
  padding: "0.8rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};
