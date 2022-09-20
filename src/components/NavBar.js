import {Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './CartWidget.css';

const NavBar = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Katito
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#categorias">Categorias</Nav.Link>
                    <Nav.Link href="#carrito">Carrito</Nav.Link>
                    <Nav.Link href="#compras">Compras</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;