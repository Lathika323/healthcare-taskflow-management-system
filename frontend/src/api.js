import { getAuth } from "firebase/auth";

const auth = getAuth();

async function getToken() {
  const user = auth.currentUser;
  if (!user) throw new Error("Not logged in");
  return await user.getIdToken();
}

export async function getUserProfile() {
  const token = await getToken();
  const res = await fetch("/api/users/me", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function createAppointment(doctorId, date, reason) {
  const token = await getToken();
  const res = await fetch("/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ doctor: doctorId, date, reason })
  });
  return res.json();
}

// Add more exports for doctors, update appointment, etc.
