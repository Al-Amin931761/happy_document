import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import gameLogo from '../../images/gameLogo.png';



const Header = () => {
    return (
        <div>
            <Navbar className='navbar-background' collapseOnSelect expand="lg" style={{ backgroundColor: 'blue' }} variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ height: '45px', paddingBottom: '5px' }} src={gameLogo} alt=''></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"><span className='text-white'>Home Page</span></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><span className='text-white'>Register</span></Nav.Link>
                            <Nav.Link href="#deets"><span className='text-white'>Log in</span></Nav.Link>
                            <Nav.Link href="#deets"><span className='text-white'>Help</span></Nav.Link>
                            <Nav.Link href="#deets"><span className='text-white'>More</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;