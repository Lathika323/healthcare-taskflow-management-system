import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    padding: "0.4rem 0.8rem",
    borderRadius: "5px",
    fontWeight: "500"
  };

  const activeStyle = {
    backgroundColor: "#e91e63",
    color: "white",
    fontWeight: "bold"
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#f8f8f8",
      borderBottom: "1px solid #ddd"
    }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink
       to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
        <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold', marginRight: '8px' }}>➕</span>
          LIFE SPRING MEDICAL CENTER
        </NavLink>


        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Medical Services
        </NavLink>

        <NavLink
          to="/doctors"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Doctors
        </NavLink>

         <NavLink
          to="/nurses"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Nurses
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}