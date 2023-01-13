import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import seller_img_1 from "../../../../assets/images/products/thumb_1.png";
import seller_img_2 from "../../../../assets/images/products/thumb_2.png";
import seller_img_3 from "../../../../assets/images/products/thumb_3.png";
import seller_img_4 from "../../../../assets/images/products/thumb_4.png";
import "./Projects.css";

function Projects() {
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
    <>
      <section className="home-projects bg-none">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between align-items-sm-end mb-2 pb-2 mb-sm-5 pb-sm-5">
            <div>
              <h1>SOME INSPIRING</h1>
              <h1>PROJECTS</h1>
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
            <div className="home-projects-slide-item">
              <img className="w-100" src={seller_img_4} />
              <div>
                <h5>LOGO DESIGNING</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-projects-slide-item">
              <img className="w-100" src={seller_img_1} />
              <div>
                <h5>PACKAGING DESIGN</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-projects-slide-item">
              <img className="w-100" src={seller_img_3} />
              <div>
                <h5>ILLUSTRATION DESIGN</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-projects-slide-item">
              <img className="w-100" src={seller_img_2} />
              <div>
                <h5>DESIGN SYSTEM</h5>
                <p>BY LEILA</p>
              </div>
            </div>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Projects;
