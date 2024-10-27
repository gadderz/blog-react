import { Col, Container, Row } from "react-bootstrap";

type ContentType = {
  Title: String,
  Content: String
}

const Content = () => {

  const mockContent: ContentType[] = [
    {
      Title: "5 dicas para sua carreira profissional",
      Content: "Confira algumas dicas que podem ajudar a alavancar a sua carreira como desenvolvedor front-end"
    },
    {
      Title: "5 dicas para sua carreira profissional",
      Content: "Confira algumas dicas que podem ajudar a alavancar a sua carreira como desenvolvedor front-end"
    },
    {
      Title: "5 dicas para sua carreira profissional",
      Content: "Confira algumas dicas que podem ajudar a alavancar a sua carreira como desenvolvedor front-end"
    },
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h1>Últimas do blog</h1>
        </Col>
      </Row>
      {
        mockContent.map(content => {
          return (
            <div>
              <Row>
                <Col>
                  <h2>{content.Title}</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{content.Content}</p>
                </Col>
              </Row>
            </div>
          )
        })
      }
    </Container>
  );
}

export default Content;