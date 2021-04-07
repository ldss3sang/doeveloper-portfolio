import { Container, Button } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";

const Home = () => (
  <BaseLayout>
    <Container>
      <Button color="danger">Danger</Button>
    </Container>
    <h1>I am Home page</h1>
  </BaseLayout>
);

export default Home;
