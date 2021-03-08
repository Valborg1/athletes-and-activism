import React from 'react'
import { Jumbotron, Carousel } from "react-bootstrap"
import { Row, Col, Container } from "../components/Grid"
import "./style.css"


export default function Home(props) {
    return (
        <>
        <Jumbotron>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <h3 className="carouselText"> 
                    <a className="carouselText" href="/search-athlete">
                        FIND AN ATHLETE
                    </a>
                    </h3>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <h3 className="carouselText"> 
                    <a className="carouselText" href="/charities">
                        GIVE TO A CHARITY
                    </a>
                    </h3>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <h3 className="carouselText">
                    <a className="carouselText" href="/causes">SUPPORT A CAUSE
                    </a>
                    </h3>
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
      </Container>
    </>
  );
}
