import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiButton from './ApiButton';
import AcceptButton from './AcceptButton';
const RequestEntry = ({id , entry }) => {
  const [data, setData] = useState(null);
    console.log('key = '+id);
  useEffect(() => {
    fetchAdditionalData();
  }, []);

  const fetchAdditionalData = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/Userss/${entry.request_from}/`)
      .then(response => {
        console.log(`http://127.0.0.1:8000/api/v1/Userss/${entry.request_from}/`);
        setData(response.data);
      })
      .catch(error => {
        console.error('GET error:', error);
      });
  };

  const message="Friend Request Confirmed";
  return (
    <div>
      {data && (
        <div>
          <p>Name: {data.user_name}</p>
          <p>Address: {data.about}</p>
          <p>College: {data.college}</p>
          <p>City: {data.city}</p>
          {/* Add more fields here */}

          
          <AcceptButton deleteRequest={id} friendId={entry.request_from} message={message}/>
        </div>
      )}
    </div>
  );
};

export default RequestEntry;
