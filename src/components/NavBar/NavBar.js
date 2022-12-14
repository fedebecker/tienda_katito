import {Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import '../CartWidget/CartWidget.css';
import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    Katito
                </Navbar.Brand>
                <Nav className="aumento me-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to='/category/superior'>Tren Superior</Nav.Link>
                    <Nav.Link as={Link} to='/category/inferior'>Tren Inferior</Nav.Link>
                    <Nav.Link as={Link} to='/checkout'>Compras</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;