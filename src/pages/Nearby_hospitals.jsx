import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import hospitalsData from '../Hospitals.json'; 
import './NearbyHospitals.css'


const HospitalComponent = ({ hospitals }) => {
    return (
      <div>
        <h2 >Hospitals Nearby:</h2>
        <div className="hospital-list">
          {hospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">
              <img src={hospital.image} alt={hospital.name} className="hospital-image" />
              <div className="hospital-details">
                <h3>{hospital.name}</h3>
                <p>{hospital.address}</p>
                <p>{hospital.phone}</p>
              </div>
              <button className="book-appointment">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

const HospitalFinder = () => {
  const [city, setCity] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulating API call delay using setTimeout
    setTimeout(() => {
      // Filter hospitals based on the entered city
      const filteredHospitals = hospitalsData.filter(
        (hospital) => hospital.city.toLowerCase() === city.toLowerCase()
      );
      setHospitals(filteredHospitals);
      setLoading(false);
    }, 1000); // Simulating 1 second delay
  }, [city]); // This effect will re-run whenever 'city' changes

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1 className='heading'>Find Hospitals</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      {loading && <p>Loading...</p>}
      <HospitalComponent hospitals={hospitals} />

      {/* Add Link component to navigate to Nearby Hospitals page */}
      <Link to="/Nearby_hospitals">See Nearby Hospitals</Link>
    </div>
  );
};

export default HospitalFinder;
