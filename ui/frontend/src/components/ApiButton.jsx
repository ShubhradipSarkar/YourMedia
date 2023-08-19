// src/components/ApiButton.js
import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const ApiButton = ({friendId}) => {
  const [selfId, setSelfId] = useState('');
  const [errMsg, setErrMsg] = useState('');
//   const [friendId, setFriendId] = useState('');
  const myId=localStorage.getItem('userId');
  console.log('myid = '+myId);


  const handleApiCall = async () => {
    try {
        if (!friendId) {
            setErrMsg('Enable adding'); // If friendId is null, set the error message to 'lol'
            return; // Return early and do not make the API call
          }
      const response = await axios.post('http://127.0.0.1:8000/api/v1/Friends/', {
        self_id: friendId,
        friend_id: myId,
      });
      const friendRequest = await axios.post('http://127.0.0.1:8000/api/v1/friendRequest/', {
        request_from: myId,
        request_to: friendId,
      });
      console.log(friendRequest.data);
      console.log(response.data); // Handle the API response as needed
      setErrMsg('Friend Request Sent...')
    } catch (error) {
      console.error(error);
      setErrMsg('Enable adding first')
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Self ID"
        value={selfId}
        onChange={(e) => setSelfId(e.target.value)}
      /> */}
      {/* <input
        type="text"
        placeholder="Friend ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      /> */}
      <button onClick={handleApiCall}>Add Friend</button>
      <div className={errMsg === 'Added as friend' ? 'green-success' : 'red-error'}>{errMsg}</div>
      
    </div>
  );
};

export default ApiButton;
