import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import thumbnail from "../../../../assets/images/thumbnail.png";
import "./Steps.css";

function Steps() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 150,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="home-steps bg-ink">
      <div className="d-none d-sm-block curve-text">
        <svg viewBox="0 0 1435 501">
          <path
            id="curve"
            d="M33.3359 199.321C96.7364 114.98 268.881 -27.2204 450.258 78.7069C676.978 211.116 770.97 460 1028.5 460C1250 460 1402.58 313.097 1432 263"
            stroke="#FD5C96"
            stroke-width="81.0968"
          />
          <text width="1435" x="20">
            <textPath xlinkHref="#curve">
              EASY STEPS EASY STEPS EASY STEPS EASY STEPS EASY STEPS EASY STEPS{" "}
            </textPath>
          </text>
        </svg>
      </div>
      <Container>
        <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row my-1 py-1 my-sm-5 py-sm-5">
          <div>
            <h1>EASY STEPS TO</h1>
            <h1>GET YOUR</h1>
            <h1>DREAM JOB</h1>
          </div>
          <div className="pt-5">
            <p>Trillest provide tou a platform where you a can find a </p>
            <p>dream job to get register to trillest.</p>
          </div>
        </div>
        <Nav fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">MATCHED SELLER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">INTERVIEW</Nav.Link>
          </Nav.Item>
          <Nav.Item className="invisible ">
            <Nav.Link eventKey="link-3">INTERVIEW</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="align-items-center">
          <Col xs={12} sm={7}>
            <h3>REGISTER YOUR ACCOUNT</h3>
            <p className="text-left">
              Resister your self to Trillest to find your dream job, enhance
              skills, and finally become a top rated seller.
            </p>
          </Col>
          <Col xs={12} sm={5}>
            <Carousel
              arrows={false}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              transitionDuration={1500}
              partialVisible={true}
            >
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div>
                <img src={thumbnail} alt="" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Steps;
