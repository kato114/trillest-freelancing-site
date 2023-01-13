import React from "react";

import Container from "react-bootstrap/Container";

import mouse from "../../../../assets/images/icons/mouse.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="bg-hero">
      <Container>
        <div className="home-hero-content">
          <div>
            <h1>FIND AND BECOME</h1>
            <h1>A PROFESSIONAL</h1>
            <h1>WITH PASSION</h1>
          </div>
          <div className="pb-5 text-right">
            <img src={mouse} alt="" />
            <p className="mt-4">
              Trillest Compare the Quotes you receive and hire the
            </p>
            <p>best freelance professionals for the job.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
