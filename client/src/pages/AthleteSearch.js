import React, { useState, useEffect, InputGroup, FormControl } from 'react'
import { Row, Col, Container } from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import "./style.css"
import AthleteBars from '../components/AthleteBars'
import API from "../utils/API"

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
        const { firstName, lastName, value } = event.target;
        const name = firstName + lastName;
        setSearch({ ...search, [name]: value });
    }

    function _handleSubmit(event) {
        event.preventDefault()
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
                    strPosition: res.data.player[0].strPosition,
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
                                onChange={_handleChange} />
                            <input
                                className="athlete-search"
                                placeholder="Enter last name"
                                type="text"
                                name="seach"
                                value={search.lastName} />
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
        </>
    )
};