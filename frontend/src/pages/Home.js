import React from "react";
import mainImage from "./images/image1.png";
import emergencyImg from "./images/emergency.jpg";
import doctorImg from "./images/doctor.jpg";
import technologyImg from "./images/technology.png";
import careImg from "./images/care.jpg";

export default function Home() {
  const highlights = [
    {
      title: "24/7 Emergency",
      description: "We provide round-the-clock emergency services for all patients.",
      image: emergencyImg,
    },
    {
      title: "Expert Doctors",
      description: "Our team consists of highly experienced and specialized doctors.",
      image: doctorImg,
    },
    {
      title: "Advanced Technology",
      description: "We use cutting-edge medical equipment for accurate diagnosis.",
      image: technologyImg,
    },
    {
      title: "Patient Care",
      description: "We ensure personalized and compassionate care for every patient.",
      image: careImg,
    },
  ];

  // ==== Styles ====
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "2rem",
      padding: "0 2rem",
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: "#f0f8ff",
      color: "#333",
    },
    mainImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0, 98, 255, 0.67)",
      marginBottom: "2rem",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#004080",
      marginBottom: "0.5rem",
    },
    subheading: {
      fontSize: "1.3rem",
      color: "#0077cc",
      marginBottom: "1.5rem",
    },
    description: {
      maxWidth: "800px",
      margin: "0 auto 3rem",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      color: "#444",
    },
    cardGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      marginBottom: "4rem",
    },
    card: {
      flex: "1 1 260px",
      maxWidth: "300px",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
    },
    cardImage: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "1rem",
      boxShadow: "0 6px 15px rgba(0, 123, 255, 0.2)",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#004080",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.5",
    },
  };

  // ==== Hover Handlers ====
  const handleMainImageHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleMainImageLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 20px 35px rgba(0, 123, 255, 0.25)";
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
  };

  // ==== JSX ====
  return (
    <div style={styles.container}>
      <img
        src={mainImage}
        alt="Main hospital view"
        style={styles.mainImage}
        onMouseEnter={handleMainImageHover}
        onMouseLeave={handleMainImageLeave}
      />

      <h1 style={styles.heading}>WELCOME TO LIFE SPRING MEDICAL CENTER</h1>
      <h3 style={styles.subheading}>Providing world-class healthcare with expert doctors and nurses.</h3>

      <p style={styles.description}>
        Your health is our priority. Life Spring Medical Center ensures you and your family receive the best possible medical care and assistance.
        We strive to create a warm and safe healing environment. Over the past decade, Life Spring has been devoted to improving healthcare and treatment.
        Our specialists work diligently to conduct research and educate future generations of healthcare professionals.
        <br /><br />
        As our entire team works toward your speedy recovery, we utilize highly trained doctors and cutting-edge technology in modern medicine.
      </p>

      {/* === Highlights Section === */}
      <div style={styles.cardGrid}>
        {highlights.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <img src={card.image} alt={card.title} style={styles.cardImage} />
            <h4 style={styles.cardTitle}>{card.title}</h4>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
