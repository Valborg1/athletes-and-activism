import React from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import { Row, Col, Container } from "../components/Grid";
import "./style.css";

export default function Home(props) {
  return (
    <>
      <Jumbotron>
        <Carousel>
          <Carousel.Item>
            <h3 className="carouselText">Find an athlete</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="carouselText">Vote on your favorite</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="carouselText">Give to a Charity</h3>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
      <Container>
        <Row>
          <Col size="md-12">
            <p className="text-center">
              Looking for a charity to contribute to? Need to learn about a
              cause that sparks your interest? What do professional athletes
              support? Here is a site to help answer any questions. Search for
              you favorite athlete and learn about their charities. Discover the
              causes they are active about. Create your favorites. Give back. Be
              a good human.
            </p>
          </Col>
        </Row>
        <Row>
          <div className="popularPlayers" id="topPlayers"></div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="md-5"></Col>
          <Col size="md-2">
            <a href="/search-athlete">
              <button className="btn btn-success charitySearch">
                Search for an athlete
              </button>
            </a>
          </Col>
          <Col size="md-5"></Col>
        </Row>
      </Container>
    </>
  );
}
