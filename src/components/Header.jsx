import React from 'react'

// Import bootstrap components
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

// Import CSS
import '../css/components/Header.css'

export default function HeaderComponent(data) {
    return <header className="header">

        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top">

            <Navbar.Brand className="header-title" href="/"> {data.img ? <img src={data.img} alt="KTF - Katta" width="125" height="50" /> : data.title} </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />

            <Navbar.Collapse id="navbar">

                <Nav className="nav-links mr-auto">

                    <Nav.Link href="/#">Hjem</Nav.Link>
                    <Nav.Link href="/#om-ktf">Om eventet</Nav.Link>
                    <Nav.Link href="/#om-ktt">Om KTT</Nav.Link>
                    <Nav.Link href="/#pamelding">Påmelding</Nav.Link>
                    <Nav.Link href="/#contact">Kontakt oss</Nav.Link>

                    <NavDropdown title="Annet" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://www.imkatta.no/" target="external">Imkatta.no</NavDropdown.Item>
                    </NavDropdown>

                </Nav>

            </Navbar.Collapse>

        </Navbar>



    </header>
}
