import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import service_img_1 from "../../../../assets/images/products/thumb_1.png";
import service_img_2 from "../../../../assets/images/products/thumb_2.png";
import service_img_3 from "../../../../assets/images/products/thumb_3.png";
import service_img_4 from "../../../../assets/images/products/thumb_4.png";
import company_amazon from "../../../../assets/images/companies/amazon.png";
import company_canon from "../../../../assets/images/companies/canon.png";
import company_accenture from "../../../../assets/images/companies/accenture.png";
import company_accord from "../../../../assets/images/companies/accord.png";
import "./Service.css";

function Service() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="home-service bg-none">
      <Container className="mb-2 pb-2 mb-sm-5 pb-sm-5">
        <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between align-items-sm-end mb-2 pb-2 mb-sm-5 pb-sm-5">
          <div>
            <h1>PROFESSIONAL</h1>
            <h1>SERVICES</h1>
          </div>
          <div className="pt-sm-5 pt-2">
            <a href="#">VIEW ALL</a>
          </div>
        </div>
        <Carousel
          className="mt-2 pt-0 mt-sm-5 pt-sm-4"
          arrows={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={1500}
          partialVisible={true}
        >
          <div className="home-service-slide-item">
            <div>
              <p>BUILD YOUR BRAND</p>
              <h5>LOGO DESIGNING</h5>
            </div>
            <img className="w-100" src={service_img_1} />
          </div>
          <div className="home-service-slide-item">
            <div className="text-white">
              <p>CUSTOMIZE YOUR VIDEO</p>
              <h5>VIDEO EDITING</h5>
            </div>
            <img className="w-100" src={service_img_2} />
          </div>
          <div className="home-service-slide-item">
            <div className="text-white">
              <p>BUILD ILLUSTRATION FOR YOU</p>
              <h5>ILLUSTRATOR DESIGNER</h5>
            </div>
            <img className="w-100" src={service_img_3} />
          </div>
          <div className="home-service-slide-item">
            <div>
              <p>BUILD DESIGN SYSTEM</p>
              <h5>SYSTEM DESIGNER</h5>
            </div>
            <img className="w-100" src={service_img_4} />
          </div>
        </Carousel>
      </Container>
      <div className="pt-4 pb-2">
        <h4 className="bg-ink">
          TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED
          COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES
          . TRUSTED COMPANIES .TRUSTED COMPANIES .
        </h4>
        <h4 className="bg-pink">
          TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED
          COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES . TRUSTED COMPANIES
          . TRUSTED COMPANIES .TRUSTED COMPANIES .
        </h4>
      </div>

      <Container className="pt-5 mt-5">
        <Row className="align-items-center">
          <Col className="px-5" xs="6" sm="3">
            <img className="w-100" src={company_canon} alt="" />
          </Col>
          <Col className="px-5" xs="6" sm="3">
            <img className="w-100" src={company_amazon} alt="" />
          </Col>
          <Col className="px-5" xs="6" sm="3">
            <img className="w-100" src={company_accenture} alt="" />
          </Col>
          <Col className="px-5" xs="6" sm="3">
            <img className="w-100" src={company_accord} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
