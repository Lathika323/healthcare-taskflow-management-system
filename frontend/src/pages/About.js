// about.js
import React from 'react';
import banner from './images/Banner.jpg';

const About = () => {
  const sectionStyle = {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: '40px 20px',
    backgroundColor: '#f4f7f9',
    color: '#2c3e50',
  };

  const heroSection = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const heroImage = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '300px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const headline = {
    fontSize: '32px',
    fontWeight: '600',
    margin: '10px 0',
    color: '#1a1a1a',
  };

  const paragraph = {
    maxWidth: '850px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontSize: '17px',
    color: '#444',
  };

  const statsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    margin: '40px 0',
    flexWrap: 'wrap',
  };

  const statBox = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    width: '160px',
  };

  const statNumber = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0077cc',
  };

  const statLabel = {
    fontSize: '14px',
    marginTop: '6px',
    color: '#666',
  };

  const ctaButtons = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '30px 0',
  };

  const button = {
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#0077cc',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '15px',
    transition: 'all 0.3s ease',
  };

  const buttonHover = {
    ...button,
    backgroundColor: '#005fa3',
  };

  const sectionSplit = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '50px',
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  };

  const column = {
    width: '300px',
    margin: '20px 10px',
    textAlign: 'left',
  };

  const numberHeading = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#0077cc',
    marginBottom: '12px',
  };

  const title = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#222',
  };

  const smallParagraph = {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={sectionStyle}>
      {/* Hero Section */}
      <div style={heroSection}>
        <img
          src={banner}
          alt="About Us Banner"
          style={heroImage}
        />
        <h2 style={headline}>About Us</h2>
        <p style={paragraph}>
          Located in the vibrant heart of India, <strong>Life Spring Medical Center</strong> is one of the leading private multi-specialty healthcare institutions in the region.
          Founded in 1998 with a vision to deliver compassionate and world-class medical services, we are committed to providing advanced and holistic healthcare to individuals from all walks of life.
        </p>

        {/* CTA Buttons */}
        <div style={ctaButtons}>
          <button
            style={button}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#005fa3')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0077cc')}
          >
            🎥 Watch Our Video
          </button>
          <button
            style={button}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#005fa3')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0077cc')}
          >
            📍 Locate us
          </button>
        </div>

        {/* Statistics */}
        <div style={statsContainer}>
          <div style={statBox}>
            <div style={statNumber}>1300+</div>
            <div style={statLabel}>Bed Capacity</div>
          </div>
          <div style={statBox}>
            <div style={statNumber}>10M+</div>
            <div style={statLabel}>Treated Patients</div>
          </div>
          <div style={statBox}>
            <div style={statNumber}>128+</div>
            <div style={statLabel}>Medical Equipments</div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Philosophy */}
      <div style={sectionSplit}>
        <div style={column}>
          <div style={numberHeading}>01.</div>
          <div style={title}>Our Vision</div>
          <p style={smallParagraph}>
            To provide healthcare of the highest quality to all in a spirit of compassion and continually improve the standard of care
            provided to the community through the promotion of value-based quality education and research.
          </p>
        </div>

        <div style={column}>
          <div style={numberHeading}>02.</div>
          <div style={title}>Our Mission</div>
          <p style={smallParagraph}>
            Establishing a Center of Excellence in healthcare and improving the well-being of the community through quality programs of preventive and curative medicine, medical education, and research. Providing outstanding and affordable medical care in a patient-friendly environment and in a spirit of compassion to all, regardless of race, caste, religion, or economic condition.
          </p>
        </div>

        <div style={column}>
          <div style={numberHeading}>03.</div>
          <div style={title}>Our Philosophy</div>
          <p style={smallParagraph}>
            At the heart of our mission lies the belief that exceptional healthcare should be accessible to everyone.
            We aim to create a warm and supportive healing environment where every patient feels heard, respected, and treated with compassionate care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
