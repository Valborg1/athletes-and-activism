import React from 'react'
import {Row, Col, Container} from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import { } from 'react-bootstrap/Image'
// import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import "./style.css"
import AthleteBars from '../components/AthleteBars'

export default function Causes(props) {
    return (
        <>
        <Container title="title">
            <Row>    
                <Col size="md-2"/>
                <Col size="md-8">
                    <h1 className="text-center">CAUSES</h1>
                </Col>
                <Col size="md-2">
                    <button className="like btn" type="button"><i className="fa fa-heart"></i></button>
                    <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
                </Col>
            </Row>
        </Container>
        <Container title="stats">
            <Row>
                <Col size="md-4">
                </Col>
                <Col size="ml-4">
                    <AthleteCauses />
                </Col>
                {/* <Col size="md-4">
                    <AthleteBars/>
                </Col> */}
            </Row>
            </Container>
         
           
        </>
    )
}
