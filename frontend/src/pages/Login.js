import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ✅ make sure this path matches your project structure

export default function Login() {
  const [role, setRole] = useState("doctor");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ Convert your entered ID to an email format
      const email = `${userId.toLowerCase()}@hospital.com`;

      // ✅ Firebase Auth sign-in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Get Firebase ID Token
      const token = await user.getIdToken();

      // ✅ Send token to your backend for verification and role-based logic
      const res = await fetch("http://localhost:5000/api/verifyToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, role, userId }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);
        navigate(role === "doctor" ? "/doctor" : "/nurse");
      } else {
        setError(data.error || "Invalid login attempt");
      }
    } catch (err) {
      console.error("Firebase login error:", err);
      setError("Invalid ID or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: "2.5rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#333",
          }}
        >
          User Login
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
        </select>

        <input
          type="text"
          placeholder={role === "doctor" ? "Doctor ID" : "Nurse ID"}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            marginBottom: "1.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "#c2185b" : "#e91e63",
            color: "#fff",
            padding: "0.75rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.3s ease",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
