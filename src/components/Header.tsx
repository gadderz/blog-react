import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  
  return (
      <Container>
    <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#description">Descrição</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  )
}

export default Header;