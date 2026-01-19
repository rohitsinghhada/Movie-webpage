import './nav.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Image/logo.jpeg";



function Navbar1() {
  return (
    <Navbar expand="lg" className="Navb1 fixed-top"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle "
             alt="React Bootstrap logo "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">New & Popular</Nav.Link>
            <Nav.Link href="#action2">TV Show</Nav.Link>
            <Nav.Link href="#action2">List</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
