import React, {useState} from "react";
import {Navbar, Nav, Modal, ModalTitle, ModalBody, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";
import {useHistory} from 'react-router-dom';

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: white;
    }
  
  }
`

const HeaderShop = () => {
    let history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (
        <div style={{marginBottom: '60px'}} >
            <Styles >
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Link to="/" ><img style={{maxHeight:'30px'}} src={'https://www.apfelpage.de/wp-content/uploads/2017/06/Tesla-Wordmark-Red.png'} /></Link>
                        </Nav>

                        <Nav className="mr-auto">

                            <Nav.Link><Link to="/">CHARGING</Link></Nav.Link>
                            <Nav.Link><Link to="/series">VEHICLE ACCESSORIES</Link></Nav.Link>
                            <Nav.Link><Link to="/about">APPAREL</Link></Nav.Link>
                            <Nav.Link><Link to="/store">LIFESTYLE</Link></Nav.Link>
                            <Nav.Link><Link to="/cart">CART</Link></Nav.Link>

                        </Nav>


                    </Navbar.Collapse>

                </Navbar>
            </Styles>
        </div>
    );
};

export default HeaderShop;


