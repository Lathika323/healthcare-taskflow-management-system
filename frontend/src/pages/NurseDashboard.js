import React, { useEffect, useState, useCallback } from "react";

const NurseDashboard = () => {
  const nurseId = localStorage.getItem("userId"); // ✅ nurse id from login
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    if (!nurseId) {
      console.warn("⚠️ No nurseId found in localStorage");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/tasks?role=nurse&userId=${nurseId}`);
      const data = await res.json();
      console.log("Fetched nurse tasks:", data); // 🪵 Debug log
      if (data.success) setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, [nurseId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const isDueSoon = (deadline) => {
    const now = new Date();
    const due = new Date(deadline);
    const diffHours = (due - now) / (1000 * 60 * 60);
    return diffHours <= 12 && diffHours > 0;
  };

  const handleReassign = async (taskId) => {
    const newNurseId = prompt("Enter new Nurse ID to reassign this task:");
    if (!newNurseId) return;

    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${taskId}/reassign`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newNurseId }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Task reassigned successfully!");
        fetchTasks();
      } else {
        alert(data.error || "Failed to reassign");
      }
    } catch (error) {
      console.error("Error reassigning task:", error);
      alert("Server error during reassignment");
    }
  };

  return (
    <div style={{ padding: "2rem", background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🩺 Nurse Dashboard</h1>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>No tasks assigned yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "#fff",
              margin: "1rem auto",
              padding: "1rem",
              borderRadius: "10px",
              maxWidth: "600px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              borderLeft: isDueSoon(task.deadline)
                ? "6px solid #f59e0b"
                : "6px solid #ddd",
            }}
          >
            <p><strong>Task:</strong> {task.taskText}</p>
            <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleString()}</p>
            <p><strong>Status:</strong> {task.status}</p>

            {isDueSoon(task.deadline) && (
              <div style={{ marginTop: "1rem", color: "#b91c1c" }}>
                ⚠️ Task due within 12 hours!
                <button
                  onClick={() => handleReassign(task.id)}
                  style={{
                    marginLeft: "1rem",
                    padding: "0.5rem 1rem",
                    background: "#f59e0b",
                    border: "none",
                    color: "#fff",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Reassign
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default NurseDashboard;
