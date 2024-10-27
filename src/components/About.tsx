import { Col, Container, Image, Row } from "react-bootstrap";

const About = () =>{

  const biography: String = "Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. "; 
  const name: String = "Vinicius Gadelha";

  return (
    <Container className="bg-primary">
      <Row>
        <Col md={4}>
          <Image src="src/assets/profile.jpg" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <Row><h1>{name}</h1></Row>
          <Row><p className="">{biography}</p></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;