import React, {useState} from "react";
import {Navbar, Nav, Modal, ModalTitle, ModalBody, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";


const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: white;
    }
  
  }
`

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (
        <div >
            <Styles >
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<a className="navbar-brand" href="#">*/}
                            {/*    <img className="" src={logo}  alt=""/>*/}
                            {/*</a>*/}

                            <Link to="/" >TESLA</Link>
                        </Nav>



                        <Nav className="mr-auto">

                            <Nav.Link><Link to="/">CHARGING</Link></Nav.Link>
                            <Nav.Link><Link to="/series">VEHICLE ACCESSORIES</Link></Nav.Link>
                            <Nav.Link><Link to="/about">APPAREL</Link></Nav.Link>
                            <Nav.Link><Link to="/store">LIFESTYLE</Link></Nav.Link>


                        </Nav>


                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/store">SEARCH</Link></Nav.Link>
                            <Nav.Link><Link to="/store" onClick={handleShow}>TESLA ACCOUNT</Link></Nav.Link>
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


