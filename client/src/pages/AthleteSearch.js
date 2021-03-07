import React, { useState, useEffect, InputGroup, FormControl } from 'react'
import { Row, Col, Container } from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import Image from 'react-bootstrap/Image'
import { Link, useParams } from "react-router-dom";
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

    useEffect(() => {
        // loadAthlete()
    }, [])

    function _handleNameChange(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value });
    }

   
    function _createAthleteInDB() {
        const data = {
            playerid: athlete.idPlayer,
            fullName: athlete.strPlayer,
            image: athlete.strCutout,
            sport: athlete.sport,
            team: athlete.team,
            dob: athlete.dob,
            bio: athlete.bio,
        }
            
        API.createAthlete(data)
            .then(res => {
                console.log("create Athlete Response", res);
                if (res.status === 200) { window.location = `/add-athlete/${res.data.playerid}` }
            })

    }

    function _handleSubmit(event) {
        event.preventDefault()

        // console.log("fullName", fullName)
        // console.log("firstName", search.firstName)
        // console.log("lastName", search.lastName)
        // API.getAthlete()
        // .then(res => {
        //     console.log("single athlete res", res.data)
        //     // if (res.data === search.name){
        //     //     window.location = `/add-athlete/${res.data.playerid}`
        //     // }
        //      return res.data
        // })

        API.searchAthletes(search)
            .then(res => {
                var description = res.data.player[0].strDescriptionEN.split(" ").splice(0, 50).join(" ") + "...";
                //var playerid = res.data.idPlayer[0];
                console.log(res);
                // getAthlete();
                setAthlete({
                    idPlayer: res.data.player[0].idPlayer,
                    dob: res.data.player[0].dateBorn,
                    strPlayer: res.data.player[0].strPlayer,
                    sport: res.data.player[0].strSport,
                    team: res.data.player[0].strTeam,
                    strCutout: res.data.player[0].strCutout,
                    strThumb: res.data.player[0].strThumb,
                    bio: description,
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
                                placeholder="Enter athlete's full name"
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
                            data={athlete}
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
                            onClick={_createAthleteInDB}

                        >Add athlete to the database</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
};