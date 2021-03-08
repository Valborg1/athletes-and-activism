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
        </>
    )
}

