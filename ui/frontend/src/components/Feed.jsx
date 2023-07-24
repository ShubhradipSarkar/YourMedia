
import React from "react"
import Navbar1 from "./Navbar"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function Feed(){
    return(
        <div>
            <Navbar1/>
            <h3>Check current News Feed</h3>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={handleInputChange} placeholder="Enter ID" />
                <button type="submit">Load his informations</button>
            </form> */}
        </div>
    )
}
export default Feed