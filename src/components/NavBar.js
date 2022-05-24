import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';



function NavBar({getText, getRate }) {
  const[title, setTitle]=useState("")
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
  return (
    <div>  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setTitle(e.target.value)}
          
        />
        <Button variant="outline-light" onClick={()=>getText(title)}>Search</Button>
      </Form>
    </Container>
  </Navbar></div>
  )
}

export default NavBar