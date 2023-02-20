import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

function Header () {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>Logo</NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav>
                            <NavItem><Link to="/">Home</Link></NavItem>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header