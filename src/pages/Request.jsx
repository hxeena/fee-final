import React, { useState, useEffect } from "react";
import Button from "./Button";

const Request = ({ closeForm }) => {
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  // Placeholder for diseases until API is working
  const diseases = [
    { name: "Neurology", doctors: ["Dr. Smith", "Dr. Johnson"] },
    { name: "Cardiology", doctors: ["Dr. Patel", "Dr. Jackson"] },
    { name: "Infectious Disease", doctors: ["Dr. Williams", "Dr. Garcia"] },
    { name: "Orthodontic", doctors: ["Dr. Martinez", "Dr. Robinson"] },
    { name: "Internal Medicine", doctors: ["Dr. Lee", "Dr. Walker"] }
  ];

  const fetchTimeSlots = async (selectedDate) => {
    setLoading(true);
    setTimeout(() => {
      const availableTimeSlots = [];
  
      // Define the start and end time for time slots
      const startTime = new Date(selectedDate);
      startTime.setHours(8, 0, 0, 0); // Start from 8:00 AM
      const endTime = new Date(selectedDate);
      endTime.setHours(17, 0, 0, 0); // End at 5:00 PM
  
      // Define the interval range
      const intervalMinutes = 60; // Each time slot is 60 minutes
  
      // Loop through the time range and create time slots
      let currentTime = new Date(startTime);
      let count = 0;
      while (currentTime < endTime && count < 4) {
        const timeSlotStart = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const nextTime = new Date(currentTime);
        nextTime.setMinutes(nextTime.getMinutes() + intervalMinutes);
        const timeSlotEnd = nextTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        availableTimeSlots.push(`${timeSlotStart} - ${timeSlotEnd}`);
        currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
        count++;
      }
  
      setTimeSlots(availableTimeSlots);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  };

  useEffect(() => {
    if (selectedDate) {
      fetchTimeSlots(selectedDate);
    }
  }, [selectedDate]);

  const handleDiseaseChange = (event) => {
    const selectedDisease = event.target.value;
    setSelectedDisease(selectedDisease);
    // Find doctors for the selected disease
    const selectedDiseaseObj = diseases.find(disease => disease.name === selectedDisease);
    if (selectedDiseaseObj) {
      setDoctors(selectedDiseaseObj.doctors);
      // Don't reset selected doctor when disease changes
    } else {
      setDoctors([]);
    }
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black w-full max-w-md">
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <input type="hidden" name="access_key" value="e28282a6-0011-4c49-815c-5b5fbf788135"/>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="Email"
              id="Email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Number"
              id="Number"
              placeholder="Phone No."
              maxLength={10}
              minLength={10}
              required
            />
          </div>
          <div className="flex flex-row gap-5">
            <select
              id="gender"
              name="Gender"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg flex-grow"
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg w-24"
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              required
            />
          </div>
          <div className="flex flex-row gap-5">
            <select
              id="disease"
              name="disease"
              value={selectedDisease}
              onChange={handleDiseaseChange}
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg flex-grow"
              required
            >
              <option value="">Consultation for</option>
              {diseases.map((disease, index) => (
                <option key={index} value={disease.name}>{disease.name}</option>
              ))}
            </select>
            {doctors.length > 0 && (
              <select
                id="doctor"
                name="selectedDoctor"
                value={selectedDoctor}
                onChange={handleDoctorChange}
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                required
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            )}
          </div>
          <div className="flex flex-row gap-5">
            <input
              type="date"
              id="appointment-date"
              name="appointment-date"
              onChange={handleDateChange}
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              required
            />
            {timeSlots.length > 0 && (
              <select
                id="time-slot"
                name="time-slot"
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                required
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((timeSlot, index) => (
                  <option key={index} value={timeSlot}>{timeSlot}</option>
                ))}
              </select>
            )}
          </div>
          <div className="flex justify-between">
            <Button title="Book Appointment" />
            <button
              className="bg-red-500 text-white px-10 rounded-md active:bg-red-600"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Request;
