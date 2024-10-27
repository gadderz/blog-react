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
        <div className="d-flex flex-column gap-3 pt-5">
          <h2>Últimas do blog</h2>
          {
            mockContent.map(content => {
              return (
                <div className="d-flex flex-column">
                  <p className="fs-4 text-primary m-0">{content.Title}</p>
                  <p>{content.Content}</p>
                </div>
              )
            })
          }
        </div>
      </Row>
    </Container>
  );
}

export default Content;