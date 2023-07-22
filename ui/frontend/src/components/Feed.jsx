
import React from "react"
import Navbar1 from "./Navbar"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function Feed(){
    return(
        <div>
            <Navbar1/>
            This is the Feed
            <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
        </div>
    )
}
export default Feed