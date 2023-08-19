// src/components/ApiButton.js
import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const AcceptButton = ({deleteRequest, friendId, message}) => {
  const [selfId, setSelfId] = useState('');
  const [errMsg, setErrMsg] = useState('');
//   const [friendId, setFriendId] = useState('');
  const myId=localStorage.getItem('userId');
  //console.log('myid = '+myId);
  const SuccessMsg=message;
  console.log('the msg = '+SuccessMsg);
console.log(errMsg);
  const handleApiCall = async () => {
    try {
        if (!friendId) {
            setErrMsg('Could not add as friend'); // If friendId is null, set the error message to 'lol'
            return; // Return early and do not make the API call
          }
      const response = await axios.post('http://127.0.0.1:8000/api/v1/Friends/', {
        self_id: friendId,
        friend_id: myId,
      });
      console.log('try success')
      //console.log(friendRequest.data);
      console.log(response.data); // Handle the API response as needed
      console.log(SuccessMsg);
      setErrMsg(SuccessMsg)


      setTimeout(() => {
        console.log("Delayed action executed after 3 seconds");
      }, 3000); // 3000 milliseconds = 3 seconds

    //   console.log('deleted = '+deleteRequest);
    //   await axios.delete(`http://127.0.0.1:8000/api/v1/SearchView/${deleteRequest}`);

    } catch (error) {
      console.error(error);
      setErrMsg('Could not add as friend')
    }

    

    
  };

  return (
    <div>
      
      <button onClick={handleApiCall}>Confirm Request</button>
      <div className={errMsg === 'Friend Request Confirmed' ? 'green-success' : 'red-error'}>{errMsg}</div>
      
    </div>
  );
};

export default AcceptButton;
