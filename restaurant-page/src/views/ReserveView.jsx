import React from 'react';
import ReserveForm from '../components/reserve-form/reserveForm';

const reserveView = () => {
  return (
    <div className='reserve'> 
      <h1 className='reserve__title'>Reservar Mesa</h1>
      <ReserveForm />
    </div>
  );
};
export default reserveView;