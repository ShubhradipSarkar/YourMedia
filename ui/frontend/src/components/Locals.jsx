import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from './Navbar';
import './style.css';

function Locals() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/Userss/')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
        <Navbar1/>
      
      <hr />
      {details.map((output, id) => (
        <div key={id} className='people'>
          <div>
            <h2>{output.user_name}</h2>
            <h4>{output.about}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Locals;
