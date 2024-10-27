import { Col, Container, Image, Row } from "react-bootstrap";

const About = () =>{

  const biography: String = "Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. "; 
  const name: String = "Vinicius Gadelha";

  return (
    <Container className="bg-primary">
      <Row className="p-5">
        <div className="d-flex gap-5">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <img width={900} height={900} src="src/assets/profile.jpg" className="img-thumbnail rounded-circle"/>
          </div>
          <div className="d-flex flex-column">
            <h1 className="text-light">{name}</h1>
            <p className="text-light">{biography}</p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default About;