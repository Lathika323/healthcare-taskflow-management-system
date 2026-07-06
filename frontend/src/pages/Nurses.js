// nurses.js
import React from 'react';

const nurses = [
  {
    id: 1,
    name: 'Sarah Johnson',
    department: 'Pediatrics',
    shift: 'Day',
    contact: '555-1001',
    photo: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 2,
    name: 'David Lee',
    department: 'Emergency',
    shift: 'Night',
    contact: '555-1002',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 3,
    name: 'Emily Roberts',
    department: 'ICU',
    shift: 'Evening',
    contact: '555-1003',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 4,
    name: 'Michael Smith',
    department: 'Surgery',
    shift: 'Day',
    contact: '555-1004',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    department: 'Cardiology',
    shift: 'Night',
    contact: '555-1005',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
  {
    id: 6,
    name: 'James Wilson',
    department: 'Orthopedics',
    shift: 'Evening',
    contact: '555-1006',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    id: 7,
    name: 'Sophia Davis',
    department: 'Maternity',
    shift: 'Day',
    contact: '555-1007',
    photo: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: 8,
    name: 'William Garcia',
    department: 'Neurology',
    shift: 'Night',
    contact: '555-1008',
    photo: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
  {
    id: 9,
    name: 'Isabella Martinez',
    department: 'Dermatology',
    shift: 'Evening',
    contact: '555-1009',
    photo: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
  {
    id: 10,
    name: 'Benjamin Anderson',
    department: 'Psychiatry',
    shift: 'Day',
    contact: '555-1010',
    photo: 'https://randomuser.me/api/portraits/men/19.jpg',
  },
  {
    id: 11,
    name: 'Mia Thompson',
    department: 'Geriatrics',
    shift: 'Night',
    contact: '555-1011',
    photo: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    id: 12,
    name: 'Alexander White',
    department: 'Oncology',
    shift: 'Evening',
    contact: '555-1012',
    photo: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: 13,
    name: 'Charlotte Harris',
    department: 'Radiology',
    shift: 'Day',
    contact: '555-1013',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 14,
    name: 'Ethan Clark',
    department: 'Anesthesiology',
    shift: 'Night',
    contact: '555-1014',
    photo: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    id: 15,
    name: 'Amelia Lewis',
    department: 'Urology',
    shift: 'Evening',
    contact: '555-1015',
    photo: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
];

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
  width: '220px',
  textAlign: 'center',
  backgroundColor: '#fff',
};

const imageStyle = {
  width: '100%',
  borderRadius: '6px',
  marginBottom: '12px',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f8f8f8',
};

const Nurses = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>NURSES OF OUR MEDICAL CENTER</h2>
      <div style={containerStyle}>
        {nurses.map((nurse) => (
          <div key={nurse.id} style={cardStyle}>
            <img src={nurse.photo} alt={nurse.name} style={imageStyle} />
            <h3>{nurse.name}</h3>
            <p><strong>Department:</strong> {nurse.department}</p>
            <p><strong>Shift:</strong> {nurse.shift}</p>
            <p><strong>Contact:</strong> {nurse.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nurses;
