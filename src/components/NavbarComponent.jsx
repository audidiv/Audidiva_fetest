import React, { useState } from "react";
import { Container, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="light" light="true" expand="md">
            <Container>
                <NavbarBrand href="/">Contact App</NavbarBrand>
                <NavbarToggle onClick={toggle}/>
                <NavbarCollapse>
                    <Nav>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ADMIN</NavLink>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </div>
  );
};

export default NavbarComponent;