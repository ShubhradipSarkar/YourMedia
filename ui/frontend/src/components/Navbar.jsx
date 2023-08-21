import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from '@mui/material/IconButton';
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SendIcon from '@mui/icons-material/Send';
import AssistantIcon from '@mui/icons-material/Assistant';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';

import { useState } from "react";

function Navbar1(){
  const name=localStorage.getItem('userName');
  
  console.log(name);
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
        {/* <Chip icon={<FaceIcon />} label="Friend Requests" />   */}
        <Container>
          <Navbar.Brand href="Feed">Yourmedia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Feed"  >
              <Tooltip title="News Feed">
                <IconButton>
                  <HomeIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="locals" className="nav">
              <Tooltip title="Local Users">
                <IconButton>
                <Diversity3Icon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            {/* <Nav.Link href="friends" className="nav">Search Friends</Nav.Link> */}
            {/* <Nav.Link href="yourconnections" className="nav">Your Friends</Nav.Link> */}
            <Nav.Link href="suggestions" className="nav">
              <Tooltip title="Friend Suggestions">
                <IconButton>
                <AssistantIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="friendrequests" className="nav">
              <Tooltip title="Friend Requests">
                <IconButton>
                <GroupAddIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="test" className="nav">
              <Tooltip title="Search People">
                <IconButton>
                <TravelExploreIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="postWhatsinMind" className="nav">
              <Tooltip title="Post Blogs">
                <IconButton>
                <SendIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="primaryinfo" className="nav">
              <Tooltip title="Your Profile Informations">
                <IconButton>
                <ManageAccountsIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="logout" className="nav">
              <Tooltip title="Logout">
                <IconButton>
                <LogoutIcon fontSize="large" color="primary"/>
                </IconButton>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="kola" className="nav"></Nav.Link>
            <h2 className="nameatnav">{name}</h2>
            
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default Navbar1

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <br />
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;