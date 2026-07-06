import React from "react";
import cardiologyImg from './images/service1.jpeg';
import neurologyImg from './images/service2.jpeg';
import orthopedicsImg from './images/service3.jpg';
import pediatricsImg from './images/service4.jpeg';
import oncologyImg from './images/service5.jpg';

const services = [
  {
    title: "Cardiology",
    description: `At Life Spring Medical Center, our Cardiology Department provides world-class cardiac care with cutting-edge diagnostic tools and life-saving procedures. Our specialists have performed thousands of successful open-heart surgeries, angioplasties, and heart transplants with precision and care.

We are equipped to handle complex coronary artery bypass grafts, pediatric cardiac surgeries, and minimally invasive procedures with high success rates.`,
    image: cardiologyImg,
  },
  {
    title: "Neurology",
    description: `Our Neurology Department offers comprehensive care for disorders of the brain, spine, and nerves. We treat strokes, epilepsy, migraines, multiple sclerosis, Parkinson’s disease, and more, using advanced diagnostic imaging and neuro-intervention.

Life Spring’s neuro team includes top neurologists, neurosurgeons, and rehab specialists delivering personalized treatment and recovery programs.`,
    image: neurologyImg,
  },
  {
    title: "Orthopedics",
    description: `Life Spring Medical Center’s Orthopedic Unit specializes in treating fractures, joint issues, spine disorders, and sports injuries. We offer total knee and hip replacements, spine surgeries, and arthroscopic procedures backed by enhanced recovery protocols.

Our team ensures pain-free movement and faster healing through physiotherapy, advanced surgical tools, and patient-centric care.`,
    image: orthopedicsImg,
  },
  {
    title: "Pediatrics",
    description: `Our Pediatrics Department is built around child-friendly care. From newborns to teenagers, we provide immunizations, nutrition guidance, developmental assessments, and specialized treatments including pediatric ICU services.

Every child is treated by experienced pediatricians and nurses in a warm, safe, and playful environment at Life Spring.`,
    image: pediatricsImg,
  },
  {
    title: "Oncology",
    description: `Our Oncology Department delivers compassionate, state-of-the-art cancer care across all specialties. We offer medical, surgical, and radiation oncology services including chemotherapy, targeted therapy, and immunotherapy.

Life Spring takes a multidisciplinary approach to cancer care—ensuring timely diagnosis, individualized treatment plans, and psychological support for patients and families.`,
    image: oncologyImg,
  },
];

// =============================
// Styles
// =============================
const containerStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#f5f9fc",
  padding: "40px 20px",
};

const sectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "60px 0",
  gap: "3rem",
  flexWrap: "wrap",
  borderBottom: "1px solid #e0e0e0",
};

const textBox = {
  flex: "1",
  minWidth: "320px",
  maxWidth: "600px",
};

const heading = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#004080",
  marginBottom: "20px",
};

const description = {
  fontSize: "1.1rem",
  color: "#333",
  lineHeight: "1.8",
  whiteSpace: "pre-line",
};

const imageBox = {
  flex: "1",
  minWidth: "300px",
  maxWidth: "500px",
  overflow: "hidden",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "15px",
  transition: "transform 0.3s ease",
};

// =============================
// Component
// =============================
export default function MedicalServices() {
  return (
    <div style={containerStyle}>
      {services.map((service, index) => (
        <div
          key={index}
          style={{
            ...sectionStyle,
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div style={textBox}>
            <h2 style={heading}>{service.title}</h2>
            <p style={description}>{service.description}</p>
          </div>

          <div style={imageBox}>
            <img
              src={service.image}
              alt={service.title}
              style={imageStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
