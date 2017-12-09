import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


const NoMatch = () =>
(<div>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
</div>);

export default NoMatch;
