import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <div className="fixed-top">
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#343a40', border: 2 + 'px solid #6351ce'}}>
                <Navbar.Brand href="#home">Strive BookStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Brouse</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">More details</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default NavBar;