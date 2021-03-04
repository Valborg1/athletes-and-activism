import React, { useState, useEffect, InputGroup, FormControl } from 'react'
import { Row, Col, Container } from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import "./style.css"
import AthleteBars from '../components/AthleteBars'
import API from "../utils/API"
import CardBtn from "../components/CardBtn"

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

    const [fullName, setFullName] = useState(
        "testing"
        // search.firstName + search.lastName
    );

    useEffect(() => {
        // loadAthlete()
    }, [])

    function _handleNameChange(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value });
    }

    // function _handleLastNameChange(event) {
    //     const { lastName, value } = event.target;
    //     setSearch({ lastName: value });
    // }
    function _createAthleteInDB() {
        const data = {
            //playerid: athlete.idPlayer,
            fullName: athlete.strPlayer,
            image: athlete.strCutout,
            sport: athlete.strSport,
            team: athlete.strTeam,
            dob: athlete.dateBorn,
            bio: athlete.strDescriptionEN,
        }
        API.createAthlete(data)
            .then(res => {
                console.log("create Athlete Response", res);
            })
    }

    function _handleSubmit(event) {
        event.preventDefault()

        console.log("fullName", fullName)
        console.log("firstName", search.firstName)
        console.log("lastName", search.lastName)

        API.searchAthletes(search)
            .then(res => {
                var description = res.data.player[0].strDescriptionEN.split(" ").splice(0, 50).join(" ") + "...";
                console.log(res);
                setAthlete({
                    idPlayer: res.data.player[0].idPlayer,
                    dateBorn: res.data.player[0].dateBorn,
                    strPlayer: res.data.player[0].strPlayer,
                    strSport: res.data.player[0].strSport,
                    strTeam: res.data.player[0].strTeam,
                    strCutout: res.data.player[0].strCutout,
                    strThumb: res.data.player[0].strThumb,
                    strDescriptionEN: description,
                })
            })
    }

    return (
        <>
            {console.log(athlete)}
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
                    <Col size="md-3">
                    </Col>
                    <Col size="md-6">
                        <form onSubmit={_handleSubmit}>
                            <input
                                className="athlete-search"
                                placeholder="Enter first name"
                                type="text"
                                name="search"
                                value={search.firstName}
                                onChange={_handleNameChange} />
                            <input
                                className="athlete-search"
                                placeholder="Enter last name"
                                type="text"
                                name="search"
                                value={search.lastName}
                                onChange={_handleNameChange} />
                            <button className="btn btn-primary blue">Submit</button>
                        </form>
                        {/* <InputGroup className="athlete-search">
                            <InputGroup.Prepend>
                                <InputGroup.Text>First and last name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                placeholder="Enter first name"
                                type="text"
                                name="search"
                                value={search.name}
                                onChange={_handleChange}/>
                            <FormControl />
                        </InputGroup> */}
                    </Col>
                </Row>
            </Container>
            <Container title="title" >
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <h1 className="text-center">{athlete.strPlayer}</h1>
                    </Col>
                </Row>
            </Container>
            <Container title="stats">
                <Row>
                    <Col size="md-4">
                        <Image className="two img-fluid" alt="athlete" src={athlete.strCutout} roundedCircle />
                    </Col>
                    <Col size="md-8">
                        <AthleteBio
                            sport={athlete.strSport}
                            team={athlete.strTeam}
                            birth={athlete.dateBorn}
                            description={athlete.strDescriptionEN}
                        />
                    </Col>
                </Row>
            </Container>
            <Container title="no-background">
                <Row>
                    <Col size="md-12">
                        <button
                            className="btn btn-primary blue"
                            id="add-athlete-btn"
                            onClick={ _createAthleteInDB }

                        >Add athlete to the database</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
};