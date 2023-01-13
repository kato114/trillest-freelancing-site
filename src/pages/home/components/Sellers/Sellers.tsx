import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import seller_img_1 from "../../../../assets/images/products/thumb_1.png";
import seller_img_2 from "../../../../assets/images/products/thumb_2.png";
import seller_img_3 from "../../../../assets/images/products/thumb_3.png";
import seller_img_4 from "../../../../assets/images/products/thumb_4.png";
import user from "../../../../assets/images/users/user.png";
import "./Sellers.css";

function Sellers() {
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
      <section className="home-sellers bg-pink">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between align-items-sm-end mb-2 pb-2 mb-sm-5 pb-sm-5">
            <div>
              <h1>TOP SELLERS</h1>
            </div>
            <div className="pt-sm-5 pt-2">
              <a className="text-white" href="#">
                VIEW ALL
              </a>
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
            <div className="home-sellers-slide-item">
              <img className="w-100" src={seller_img_4} alt="" />
              <div>
                <h5>LOGO DESIGNING</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-sellers-slide-item">
              <img className="w-100" src={seller_img_1} alt="" />
              <div>
                <h5>PACKAGING DESIGN</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-sellers-slide-item">
              <img className="w-100" src={seller_img_3} alt="" />
              <div>
                <h5>ILLUSTRATION DESIGN</h5>
                <p>BY LEILA</p>
              </div>
            </div>
            <div className="home-sellers-slide-item">
              <img className="w-100" src={seller_img_2} alt="" />
              <div>
                <h5>DESIGN SYSTEM</h5>
                <p>BY LEILA</p>
              </div>
            </div>
          </Carousel>
        </Container>
        <div className="curve-text d-none d-sm-block">
          <svg viewBox="0 0 1435 501">
            <path
              id="curve"
              d="M33.3359 199.321C96.7364 114.98 268.881 -27.2204 450.258 78.7069C676.978 211.116 770.97 460 1028.5 460C1250 460 1402.58 313.097 1432 263"
              stroke="#0f0933"
              stroke-width="81.0968"
            />
            <text width="1435" x="20">
              <textPath xlinkHref="#curve">
                CLIENT REVIEWS . CLIENT REVIEWS . CLIENT REVIEWS . CLIENT
                REVIEWS . CLIENT REVIEWS . CLIENT REVIEWS . CLIENT REVIEWS .
                CLIENT REVIEWS . CLIENT REVIEWS .
              </textPath>
            </text>
          </svg>
        </div>
      </section>
      <section className="home-sellers-review bg-none">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row align-items-sm-end gap-5">
            <div className="px-2">
              <img className="w-100" src={user} alt="" />
            </div>
            <div className="px-2">
              <h4>
                "Every time you make the hard, correct decision you become a bit
                more cuorageous, and every time you make the easy, wrong
                decision you become a bit more cowardly. If you are CEO, these
                choices will lead to a courageous or cowardly company." - Ben
                Horowitz, CEO of Opsware
              </h4>
              <h3>ANJALINA JONES</h3>
              <h6>CEO & CO-FOUNDER</h6>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Sellers;
