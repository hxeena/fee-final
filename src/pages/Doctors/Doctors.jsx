import React, { useState } from 'react';
import DoctorCard from './../../components/Doctors/DoctorCard';
import ParentComponent from './ParentComponent';

const Doctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [cardiologists] = useState([
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Cardiologist' },
  ]);
  
  const [dermatologists] = useState([
    { id: 1, name: 'Dr. Alice Johnson', specialization: 'Dermatologist' },
    { id: 2, name: 'Dr. Robert Brown', specialization: 'Dermatologist' },
  ]);

  const [pediatricians] = useState([
    { id: 1, name: 'Dr. Michael Clark', specialization: 'Pediatrician' },
    { id: 2, name: 'Dr. Sarah Adams', specialization: 'Pediatrician' },
  ]);

  const [gynecologists] = useState([
    { id: 1, name: 'Dr. Emily White', specialization: 'Gynecologist' },
    { id: 2, name: 'Dr. David Martinez', specialization: 'Gynecologist' },
  ]);

  const [orthopedists] = useState([
    { id: 1, name: 'Dr. Jennifer Lee', specialization: 'Orthopedist' },
    { id: 2, name: 'Dr. Matthew Taylor', specialization: 'Orthopedist' },
  ]);

  const [urologists] = useState([
    { id: 1, name: 'Dr. William Harris', specialization: 'Urologist' },
    { id: 2, name: 'Dr. Olivia Anderson', specialization: 'Urologist' },
  ]);

  const [neurologists] = useState([
    { id: 1, name: 'Dr. Samantha Wilson', specialization: 'Neurologist' },
    { id: 2, name: 'Dr. Daniel Rodriguez', specialization: 'Neurologist' },
  ]);

  const [ophthalmologists] = useState([
    { id: 1, name: 'Dr. Christopher Garcia', specialization: 'Ophthalmologist' },
    { id: 2, name: 'Dr. Hannah Carter', specialization: 'Ophthalmologist' },
  ]);

  const [dentists] = useState([
    { id: 1, name: 'Dr. Benjamin Wright', specialization: 'Dentist' },
    { id: 2, name: 'Dr. Sophia Parker', specialization: 'Dentist' },
   
  ]);

  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
  };

  const getDoctorsBySpecialization = () => {
    switch (selectedSpecialization) {
      case 'Cardiologist':
        return cardiologists;
      case 'Dermatologist':
        return dermatologists;
      case 'Pediatrician':
        return pediatricians;
      case 'Gynecologist':
        return gynecologists;
      case 'Orthopedist':
        return orthopedists;
      case 'Urologist':
        return urologists;
      case 'Neurologist':
        return neurologists;
      case 'Ophthalmologist':
        return ophthalmologists;
      case 'Dentist':
        return dentists;
      default:
        return [];
    }
  };

  const filteredDoctors = getDoctorsBySpecialization();

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <select
              value={selectedSpecialization}
              onChange={handleSpecializationChange}
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
            >
              <option value="">Select Specialization</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Orthopedist">Orthopedist</option>
              <option value="Urologist">Urologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Ophthalmologist">Ophthalmologist</option>
              <option value="Dentist">Dentist</option>
            
            </select>
            {/* <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button> */}
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {filteredDoctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                specialization={selectedSpecialization || doctor.specialization}
                rating={Math.floor(Math.random() * 5) + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;