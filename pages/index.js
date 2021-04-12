import ReactTyped from "react-typed";
import { Container, Button, Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";

const roles = ["Developer", ".Net", "JavaScript"];
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
                    <h2>Fullstack Developer</h2>
                    <div className="hero-section-content-intro">
                      JavaScript, C#, SQL
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
            <ReactTyped
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={roles}
              backDelay={1000}
              loopCount={0}
              showCursor
              className="self-typed"
              cursorChar="|"
            />
            <div className="hero-welcome-bio">
              <h1>Let's take a look on my work.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
);

export default Home;
