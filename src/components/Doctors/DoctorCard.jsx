import React from 'react';
import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {
  const { name, photo, specialization, totalPatient } = doctor;
  // Array of predefined ratings
  const ratings = [3.5, 4.2, 4.8, 3.9, 4.5];
  // Array of predefined hospital names
  const hospitals = ['ABC Hospital', 'XYZ Medical Center', 'PQR Clinic', 'LMN Hospital', 'DEF Medical Center'];

  // Generate random rating
  const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
  // Generate random hospital name
  const randomHospital = hospitals[Math.floor(Math.random() * hospitals.length)];

  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full' alt="" />
      </div>

      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{name}</h2>

      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
        <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16] lg:leading-7 font-semibold frounded'>{specialization}</span>

        <div className='flex items-center gap-[6px]'>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
            <img src={starIcon} alt="" />{randomRating} {/* Display random rating */}
          </span>
        </div>
      </div>

      <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
        <div>
          <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>+{totalPatient} patients </h3>
          <p className='text-[14px] leading-6 font-[400] text-textColor '>At {randomHospital}</p> {/* Display random hospital name */}
        </div>

        <Link to='./doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
          {/* <BsArrowRight className='group-hover:text-white w-6 h-5'/> */}
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;