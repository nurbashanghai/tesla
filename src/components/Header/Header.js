import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Modal, ModalTitle, ModalBody, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
// import logo from './img/tesla_logo.png'
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: white;
    }
  ;

   b, .navbar{
     background-color: #61dafb;
   }
  }
`

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (
        <div style={{marginBottom: '100px'}} >
            <Styles >
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                           <Nav>
                               {/*<a className="navbar-brand" href="#">*/}
                               {/*    <img className="" src={logo}  alt=""/>*/}
                               {/*</a>*/}

                               <Link to="/" >TESLA</Link>
                           </Nav>



                            <Nav className="mr-auto">

                                <Nav.Link><Link to="/">MODEL S</Link></Nav.Link>
                                <Nav.Link><Link to="/series">MODEL 3</Link></Nav.Link>
                                <Nav.Link><Link to="/about">MODEL X</Link></Nav.Link>
                                <Nav.Link><Link to="/store">MODEL Y</Link></Nav.Link>
                                <Nav.Link><Link to="/store">SOLAR ROOF</Link></Nav.Link>
                                <Nav.Link><Link to="/store">SOLAR PANELS</Link></Nav.Link>
                            </Nav>


                            <Nav>
                                <Nav.Link><Link to="/">SHOP</Link></Nav.Link>
                                <Nav.Link><Link to="/" onClick={handleShow}>TESLA ACCOUNT</Link></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Log in</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password'/>
                        </Form.Group>
                        <Form.Group controlId='fromBasicChekbox'>
                            <Form.Check type='checkbox' label='Remember me'/>
                        </Form.Group>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Header;


