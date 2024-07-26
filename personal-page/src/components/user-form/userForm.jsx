import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      message,
    }

    let userList = localStorage.getItem('userList')
    userList = userList ? JSON.parse(userList) : []

    userList.push(userData);

    localStorage.setItem('userList', JSON.stringify(userList));

    setName('')
    setEmail('')
    setMessage('')

    navigate('/');
  }

  return (
    <form className='userForm' onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default UserForm

