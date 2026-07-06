// Doctors.js
import React from 'react';

const departments = [
  {
    name: 'Cardiology',
    doctors: [
      {
        id: 1,
        name: 'Dr. Alice Heart',
        image: 'https://randomuser.me/api/portraits/women/21.jpg',
        joiningDate: '2019-03-10',
        surgeriesAttended: 120,
        surgeriesPassed: 115,
        surgeriesFailed: 5,
      },
      {
        id: 2,
        name: 'Dr. Kevin Pulse',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        joiningDate: '2021-06-15',
        surgeriesAttended: 90,
        surgeriesPassed: 85,
        surgeriesFailed: 5,
      },
      {
        id: 3,
        name: 'Dr. Emily Vascular',
        image: 'https://randomuser.me/api/portraits/women/23.jpg',
        joiningDate: '2017-09-05',
        surgeriesAttended: 150,
        surgeriesPassed: 140,
        surgeriesFailed: 10,
      },
    ],
  },
  {
    name: 'Neurology',
    doctors: [
      {
        id: 4,
        name: 'Dr. Nia Brain',
        image: 'https://randomuser.me/api/portraits/women/32.jpg',
        joiningDate: '2018-11-01',
        surgeriesAttended: 105,
        surgeriesPassed: 100,
        surgeriesFailed: 5,
      },
      {
        id: 5,
        name: 'Dr. Tom Synapse',
        image: 'https://randomuser.me/api/portraits/men/33.jpg',
        joiningDate: '2019-04-23',
        surgeriesAttended: 95,
        surgeriesPassed: 90,
        surgeriesFailed: 5,
      },
    ],
  },
  {
    name: 'Oncology',
    doctors: [
      {
        id: 6,
        name: 'Dr. Oliver Cell',
        image: 'https://randomuser.me/api/portraits/men/34.jpg',
        joiningDate: '2020-02-17',
        surgeriesAttended: 88,
        surgeriesPassed: 80,
        surgeriesFailed: 8,
      },
    ],
  },
  {
    name: 'Pediatrics',
    doctors: [
      {
        id: 7,
        name: 'Dr. Lily Kidman',
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        joiningDate: '2022-01-25',
        surgeriesAttended: 70,
        surgeriesPassed: 68,
        surgeriesFailed: 2,
      },
      {
        id: 8,
        name: 'Dr. Sam Childs',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        joiningDate: '2021-08-10',
        surgeriesAttended: 80,
        surgeriesPassed: 78,
        surgeriesFailed: 2,
      },
      {
        id: 9,
        name: 'Dr. Amy Care',
        image: 'https://randomuser.me/api/portraits/women/47.jpg',
        joiningDate: '2019-12-12',
        surgeriesAttended: 65,
        surgeriesPassed: 60,
        surgeriesFailed: 5,
      },
    ],
  },
  {
    name: 'Orthopedics',
    doctors: [
      {
        id: 10,
        name: 'Dr. Mark Bones',
        image: 'https://randomuser.me/api/portraits/men/55.jpg',
        joiningDate: '2017-08-30',
        surgeriesAttended: 130,
        surgeriesPassed: 125,
        surgeriesFailed: 5,
      },
      {
        id: 11,
        name: 'Dr. Sarah Joint',
        image: 'https://randomuser.me/api/portraits/women/56.jpg',
        joiningDate: '2018-10-14',
        surgeriesAttended: 110,
        surgeriesPassed: 108,
        surgeriesFailed: 2,
      },
      {
        id: 12,
        name: 'Dr. Paul Ligament',
        image: 'https://randomuser.me/api/portraits/men/57.jpg',
        joiningDate: '2019-05-21',
        surgeriesAttended: 95,
        surgeriesPassed: 90,
        surgeriesFailed: 5,
      },
      {
        id: 13,
        name: 'Dr. Jane Cartilage',
        image: 'https://randomuser.me/api/portraits/women/58.jpg',
        joiningDate: '2020-07-19',
        surgeriesAttended: 85,
        surgeriesPassed: 80,
        surgeriesFailed: 5,
      },
    ],
  },
];

const DoctorCard = ({ doctor }) => (
  <div style={styles.doctorCard}>
    <img src={doctor.image} alt={doctor.name} style={styles.image} />
    <h4>{doctor.name}</h4>
    <p><strong>Joined:</strong> {new Date(doctor.joiningDate).toLocaleDateString()}</p>
    <p><strong>Surgeries:</strong> {doctor.surgeriesAttended}</p>
    <p><strong>Passed:</strong> {doctor.surgeriesPassed}</p>
    <p><strong>Failed:</strong> {doctor.surgeriesFailed}</p>
  </div>
);

const Doctors = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>DOCTORS OF OUR MEDICAL CENTER</h2>
      {departments.map((dept, index) => (
        <div key={index} style={styles.departmentSection}>
          <h3 style={styles.departmentTitle}>{dept.name}</h3>
          <div style={styles.doctorsRow}>
            {dept.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  departmentSection: {
    marginBottom: '50px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '30px',
  },
  departmentTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#2c3e50',
    borderLeft: '6px solid #3498db',
    paddingLeft: '10px',
  },
  doctorsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  doctorCard: {
    width: '220px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
};

export default Doctors;
