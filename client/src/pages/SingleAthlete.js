import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import "./style.css"
import AthleteBars from '../components/AthleteBars'
import API from "../utils/API"

export default function singleAthlete() {
    const [singleAthlete, setSingleAthlete] = useState({})
    const [favAthlete, setFavAthlete] = useState(null)
    const { id } = useParams();


    useEffect(() => {
        loadSingleAthlete()
        // loadSingleCause()
        // loadCauseAthletes()
        // loadCauseCharities()
    }, []);

    function loadSingleAthlete() {
        API.getAthlete(id)
            .then(res => {
                console.log("singleAthlete", res.data)
                return res.data
            })
            .then(res => setSingleAthlete(res))
            .catch(err => console.log(err))
    }


    function handleAdd() {
        // console.log(id)
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
        {console.log("One Athlete", singleAthlete)}
        <h1>Single Athlete Page</h1>
            {/* <Container title="title">
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <h1 className="text-center">{athlete.fullName}</h1>
                    </Col>
                    <Col size="md-2">
                        <button className="like btn" type="button">
                            <i className="fa fa-heart"></i>
                        </button>
                        <button className="update btn" type="button">
                            <i className="fa fa-plus"></i>
                        </button>
                    </Col>
                </Row>
            </Container>
            <Container title="stats">
                <Row>
                    <Col size="md-4">
                        <Image alt="Patrick" src={athlete.image} roundedCircle />
                    </Col>
                    <Col size="md-4">
                        <AthleteBio
                            data={athlete}
                        />
                    </Col>
                    <Col size="md-4">
                        <AthleteBars />
                    </Col>
                </Row>
            </Container>
            <Container title="no-background">
                <Row>
                    <Col size="md-6">
                        <AthleteCharities charities={athlete.charities} />
                    </Col>
                    <Col size="md-6">
                        <AthleteCauses data={athlete.charities} />
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}
