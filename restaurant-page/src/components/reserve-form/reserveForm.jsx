import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReserveForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = { name, date, time, guests };
    localStorage.setItem('reservation', JSON.stringify(reservationData));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={date} onChange={(e) => setDate(e.value)} />
      </label>
      <label>
        Hora:
        <input type="time" value={time} onChange={(e) => setTime(e.value)} />
      </label>
      <label>
        Número de comensales:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      </label>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReserveForm;
