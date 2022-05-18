import React from 'react';
import doctor from '../../../src/assets/images/doctor.png';
import appointment from '../../../src/assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
        
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today!</h2>
                <p className='text-white pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officia quaerat. Error illo ipsa minus harum amet id atque nisi ad omnis iure architecto natus nobis, quibusdam dolorem doloribus labore neque officiis aspernatur! In esse sit, aspernatur commodi nulla nemo bonjour.</p>
                <PrimaryButton>Book Your Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;