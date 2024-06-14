import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/details', { department, age })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {/* Display other user details */}
      <Link to="/logout">
        <button>Logout</button>
      </Link>
      <div>
      <h2> Details </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='department'>
            <strong> department </strong>
          </label>
          <input 
            type="text"
            placeholder='Enter department'
            name='department'
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='age'>
            <strong>age</strong>
          </label>
          <input 
            type="text"
            placeholder='Enter age'
            name='age'
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        
        <button type='submit'>
          Submit
        </button>
      </form>
      
    </div>
    </div>
  );
}

export default Dashboard
