import React, { useState, useEffect } from 'react'
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
                        placeholder="Enter athlete name"
                        type="text"
                        name="search"
                        value={search.name}
                        onChange={_handleChange} />
                        <button className="btn btn-primary blue">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container  title="title" >
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
                        <Image className = "two img-fluid" alt="athlete" src={athlete.strCutout} roundedCircle />
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