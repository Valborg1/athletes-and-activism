import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import API from "../utils/API"
import "./style.css"
import AthleteBars from '../components/AthleteBars'
import {
    FormGroup,
    Label,
    Input,
    Button,
} from "../components";
import { STATES } from "mongoose";

export default function Athletes(props) {

    const [athlete, setAthlete] = useState({
        idPlayer: "",
        dateBorn: "",
        strPlayer: "",
        strSport: "",
        strTeam: "",
        strPosition: "",
        strCutout: "",
        strThumb: "",
        strDescriptionEN: ""
    })

    const [search, setSearch] = useState({
        search: ""
    });


    useEffect(() => {
        // loadAthlete()
    }, [])

    function _handleChange(event) {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value });
    }

    function _handleSubmit(event){
        event.preventDefault()
        API.searchAthletes(search)
            .then(res => {
                console.log(res)
                setAthlete({
                    idPlayer: res.data.player[0].idPlayer,
                    dateBorn: res.data.player[0].dateBorn,
                    strPlayer: res.data.player[0].strPlayer,
                    strSport: res.data.player[0].strSport,
                    strTeam: res.data.player[0].strTeam,
                    strPosition: res.data.player[0].strPosition,
                    strCutout: res.data.player[0].strCutout,
                    strThumb: res.data.player[0].strThumb,
                    strDescriptionEN: res.data.player[0].strDescriptionEN
                })
            })
    }

    return (
        <>
            {console.log(athlete)}
            {console.log(search)}
            
            <Container title="title">
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <h1 className="text-center">{athlete.strPlayer}</h1>
                    </Col>
                    <Col size="md-2">
                        <button onClick={() => (API.addFavorite(/** props.id - the Id of the Athlete */))} className="like btn" type="button"><i className="fa fa-heart"></i></button>
                        <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
                    </Col>
                </Row>
            </Container>
            <Container title="stats">
                <Row>
                    <form onSubmit={_handleSubmit}>
                        <FormGroup>
                            <Label>Find an Athlete:</Label>
                            <Input
                                type="text"
                                name="search"
                                value={search.name}
                                onChange={_handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="text-right">
                            <Button className="btn-primary">Submit</Button>
                        </FormGroup>
                    </form>
                </Row>
                <Row>
                    <Col size="md-4">
                        <Image alt="athlete" src={athlete.strCutout} roundedCircle />
                    </Col>
                    <Col size="md-4">
                        <AthleteBio 
                            sport={athlete.strSport} 
                            team={athlete.strTeam}
                            birth={athlete.dateBorn}
                            description={athlete.strDescriptionEN}
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
