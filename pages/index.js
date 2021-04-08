import { Container, Button, Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";

const Home = () => (
  <BaseLayout className="cover">
    <div className="main-section">
      <div className="background-image">
        <img src="/images/background-index.png" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <div className="hero-section">
              <div className={`flipper`}>
                <div className="back">
                  <div className="hero-section-content">
                    <h2></h2>
                    <div className="hero-section-content-intro">
                      Have a look at my portfolio and job history
                    </div>
                  </div>
                  <img
                    src="/images/section-1.png"
                    alt="developer"
                    className="image"
                  />
                  <div className="shadow-custom">
                    <div className="shadow-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="hero-welcome-wrapper">
            <div className="hero-welcome-text">
              <h1>
                Welcome to the portfolio website of Sangseok Doe. Get informed,
                collaborate and discover projects I was working on through the
                years!
              </h1>
            </div>
            <div className="hero-welcome-bio">
              <h1>Let's take a look on my work.</h1>
            </div>
          </Col>
        </Row>
        <Button color="danger">Danger</Button>
      </Container>
      <h1>I am Home page</h1>
    </div>
  </BaseLayout>
);

export default Home;
