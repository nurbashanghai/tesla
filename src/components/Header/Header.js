import React, {useState, useEffect, useContext} from 'react';
import {Navbar, Nav, Button, Container, Modal, ModalTitle, ModalBody, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {API_REGISTRATION} from "../../Adress";
import CarCart from "../Cart/CarCart";

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

    let history = useHistory();

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [curr, setCurr] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : 'asd');

    useEffect(() => {
        axios.get(API_REGISTRATION).then(res => {
            setUsers(res.data);
        })
    },[]);

    function handleInps(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        };
        setUser(obj);
    }

    function login(){
        let check = false;
        let currentUser = {};
        users.forEach((p) => {
            if(p.account === user.account && p.password === user.password){
                check = true;
                currentUser = p;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        });
        if(check){
            history.push('/')
        } else {
            alert('No such user');
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const redirectToTesla = (id) => {
        localStorage.setItem('carId', id);
        window.location.pathname = '/carpage'
    };

    return (
        <div style={{marginBottom: '60px'}} >
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                           <Nav>
                               <a href="http://localhost:3000/home/" ><img style={{maxHeight:'30px'}} src={'https://www.apfelpage.de/wp-content/uploads/2017/06/Tesla-Wordmark-Red.png'} /></a>
                           </Nav>

                            <Nav className="mx-auto">
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} onClick={() => redirectToTesla('1-1')}>MODEL S</Link></Nav.Link>
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} onClick={() => redirectToTesla('2-1')}>MODEL 3</Link></Nav.Link>
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} onClick={() => redirectToTesla('3-1')}>MODEL X</Link></Nav.Link>
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} onClick={() => redirectToTesla('4-1')}>MODEL Y</Link></Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} to="/shop">SHOP</Link></Nav.Link>
                                <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} to="/favorite">FAVORITE</Link></Nav.Link>
                                {
                                    curr.account ? (
                                        <>
                                            <div><button className={'btn btn-dark'} style={{border: '1px solid', borderRadius: '25px'}} onClick={() => history.push('/cart')} >CART</button></div>
                                            <Nav.Link onClick={() => {
                                                localStorage.clear();
                                            }}><Link style={{textShadow: '1px 5px 25px'}} onClick={() => window.location.reload()} >LOGOUT: {curr.account.toUpperCase()}</Link></Nav.Link>
                                        </>
                                    ) :
                                        <Nav.Link><Link style={{textShadow: '1px 5px 25px'}} to="/login" onClick={handleShow}>ACCOUNT</Link></Nav.Link>
                                }

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
                            <Form.Control onChange={handleInps} type='email' name={'account'} placeholder='Enter email'/>
                            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleInps} name={'password'} type='password' placeholder='Enter password'/>
                        </Form.Group>
                        <button className={'btn btn-primary'} onClick={login} >Login</button>
                        <button className={'btn btn-primary mx-5'} onClick={() => history.push('/register')} >Register</button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Header;


