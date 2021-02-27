import React from 'react'
import { Jumbotron, Carousel } from "react-bootstrap"
import { Row, Col, Container } from "../components/Grid"
import "./style.css"


export default function Home(props) {
    return (
        <>
        <Jumbotron>
            <Carousel>
                <Carousel.Item>
                    <h3 className="carouselText" >Find an athlete 
                    </h3>
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
                    <h2 className="text-center">Top sports players</h2>
                </Col>
            </Row>
            <Row>
                <div className="popularPlayers" id="topPlayers">
                </div>
            </Row>
       </Container>
       <Container>
           <Row>
               <Col size="md-5">
               </Col>
               <Col size="md-2">
               <button className="btn btn-success charitySearch">
                   Find a Charity
               </button>
               </Col>
               <Col size="md-5">
               </Col>
           </Row>
       </Container>
        </>
    )
}

