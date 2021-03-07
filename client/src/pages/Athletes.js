import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {Row, Col, Container} from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import "./style.css"
import AthleteBars from '../components/AthleteBars'
import API from "../utils/API"

export default function Athletes(props) {
    const [favAthlete, setFavAthlete] = useState(null)
    const { id } = useParams();

    function handleAdd(){
        API.addFavAthlete(id)
        .then(res => {
            console.log("Fav Athlete", res.data)
                return res.data
            })
            .then(res => setFavAthlete(res))
            .catch(err => console.log(err))
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
                    <button className="like btn" type="button"><i className="fa fa-heart"></i></button>
                    <button className="update btn" type="button" onClick={handleAdd}><i className="fa fa-plus"></i></button>
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
