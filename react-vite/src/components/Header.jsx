import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">AYRU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Productos</Nav.Link>
              <Nav.Link href="#features">Contacto</Nav.Link>
              <Nav.Link href="#pricing">Info</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Header;