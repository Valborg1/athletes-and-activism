import React, { useState, useEffect } from "react";
import {Row, Col, Container} from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import API from "../utils/API"
import "./style.css"
import AthleteBars from '../components/AthleteBars'


export default function Athletes(props) {

    const [athlete, setAthlete] = useState({})

    useEffect(() => {
        // loadAthlete()
    }, [])

    function loadAthlete() {
        API.searchAthletes()
            .then(res => {
              console.log(res)
                setAthlete(res.data)
              })
    }
    

    return (
        <>
        <Container title="title">
            <Row>    
                <Col size="md-2"/>
                <Col size="md-8">
                    <h1 className="text-center">PATRICK MAHOMES</h1>
                </Col>
                <Col size="md-2">
                    <button onClick={() => (API.addFavorite(/** props.id - the Id of the Athlete */))}className="like btn" type="button"><i className="fa fa-heart"></i></button>
                    <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
                </Col>
            </Row>
        </Container>
        <Container title="stats">


            <Row>
                <Col size="md-4">
                    <Image alt="Patrick" src={imagePath} roundedCircle />
                </Col>
                <Col size="md-4">
                    <AthleteBio />
                </Col>
                <Col size="md-4">
                    <AthleteBars/>
                </Col>
            </Row>
            </Container>
            <Container title="no-background">
            <Row>
                <Col size="md-6">
                    <AthleteCharities />
                </Col>
                <Col size="md-6">
                    <AthleteCauses />
                </Col>
            </Row>
            </Container>
        </>
    )
}
