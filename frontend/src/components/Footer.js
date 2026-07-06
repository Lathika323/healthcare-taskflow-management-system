import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1e3a8a", // dark blue
    color: "white",
    padding: "2rem 1rem",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    marginBottom: "1rem",
  };

  const infoStyle = {
    margin: "0.3rem 0",
    fontSize: "1rem",
  };

  const copyStyle = {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#cbd5e1",
  };

  const boldText = { fontWeight: "bold" };

  return (
    <footer style={footerStyle}>
      <h2 style={titleStyle}>Life Spring Medical Center</h2>
      <p style={infoStyle}><span style={boldText}>Appointments:</span> +91 98765 43210</p>
      <p style={infoStyle}><span style={boldText}>Emergency:</span> +91 91234 56789</p>
      <p style={infoStyle}><span style={boldText}>Support Email:</span> support@lifespring.com</p>
      <p style={copyStyle}>© 2025 Life Spring Medical Center. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;