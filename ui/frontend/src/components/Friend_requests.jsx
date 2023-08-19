import { useEffect, useState } from "react";
import React from "react"
import Navbar1 from "./Navbar"
import axios from "axios";
import RequestEntry from "./ShowFriendRequests";

function Friend_requests(){
  
    const userId = localStorage.getItem('userId');
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/SearchView/${userId}/`)
          .then(res => {
            console.log(res.data);
            setDetails(res.data);
          })
          .catch(err => {
            console.error(err);
          });

        //fetchAdditionalData();
    }, []);
    //console.log('ids are = ')
    //console.log(details[0].id);
    return (
      <div>
          <Navbar1/>
        
        {details.map(entry => (
          
          <RequestEntry id={entry.id} entry={entry} />
        ))}
        
      </div>
    );
}

export default Friend_requests