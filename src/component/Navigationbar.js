import { Navbar, Container, Nav } from "react-bootstrap"

const Navigationbar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Gede Pangrango</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/filter">Cibodas</Nav.Link>
            <Nav.Link href="/filter">Putri</Nav.Link>
            <Nav.Link href="/filter">Salabintana</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    )
}

export default Navigationbar