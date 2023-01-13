import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Statistic.css";

function Statistic() {
  return (
    <section className="home-statistic bg-none">
      <Container>
        <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div>
            <h1>WE BELIVE IN</h1>
            <h1>BETTER FUTURE</h1>
            <h1>FOR PEOPLE</h1>
          </div>
          <div className="pt-1 pt-sm-5">
            <p>Optimism is the faith that leads to achievement. </p>
            <p>Nothing can be done without hope and confidence.</p>
          </div>
        </div>
        <Row className="pt-4 mt-4 pt-sm-5 mt-sm-5">
          <Col className="text-center mb-4" xs="12" sm="4">
            <span>STARTUPS</span>
            <h3>+245K</h3>
          </Col>
          <Col className="text-center mb-4" xs="12" sm="4">
            <span>JOBS</span>
            <h3>+245K</h3>
          </Col>
          <Col className="text-center mb-4" xs="12" sm="4">
            <span>TALENTS</span>
            <h3>+245K</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Statistic;
