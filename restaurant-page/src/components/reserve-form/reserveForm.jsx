import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReservaForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReservation = {
      name,
      phone,
      date,
      time,
      guests,
    };

    try {
      let existingReservations = JSON.parse(localStorage.getItem('reserves')) || []

      existingReservations.push(newReservation)

      await localStorage.setItem('reserves', JSON.stringify(existingReservations))

      alert('¡Reserva realizada con éxito!')
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Error al procesar su reserva:', error)
    }
  };

  return (
    <form className='reserveForm' onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Hora:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Número de comensales:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      </label>

      <button type="submit">Reservar</button>
    </form>
  )
}

export default ReservaForm
