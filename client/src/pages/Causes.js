import React from "react";
import { Row, Col, Container } from "../components/Grid";
import CausesDesc from "../components/CausesDesc ";
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import AthleteList from '../components/AthleteList'
import CausesURL from "../components/CausesURL ";
import "./style.css"

export default function Charities() {
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
<Container>
    <Row>
        <CausesDesc />
    </Row>
    </Container>
    <br></br>
    <Container>
    <Row>
        <CausesURL></CausesURL>
    </Row>
    </Container>
    <Container title="no-background">
            <Row>
                <Col size="md-6">
                <AthleteList/>
                </Col>
                <Col size="md-6">
                    <AthleteCharities />
                </Col>
            </Row>
            </Container>
    
</>
  );
}

