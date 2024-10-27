import { Container, Nav, Navbar, Row } from "react-bootstrap"

const Header = () => {
  
  return (
      <Container>
        <Row>
          <div className="d-flex flex-row justify-content-center gap-5 bg-primary pt-3">
            <p className="fs-4 text-light">Blog</p>
            <p className="fs-4 text-light">Sobre</p>
            <p className="fs-4 text-light">Descrição</p>
          </div>
        </Row>
      </Container>
  )
}

export default Header;