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
        strDescriptionEN: "",
    })
    const [search, setSearch] = useState({
        search: ""
    });


    const [show, setShow] = useState({
        isActive: false
    })


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
    

    function _handleSearch(event) {
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
                setShow({
                    isActive: true
                })
            })
    }

    return (
        <>
            <Container>
                <Row>
                    <Col size="md-3">
                    </Col>
                    <Col size="md-6">
                        <form onSubmit={_handleSearch}>
                            <input
                                className="athlete-search"
                                placeholder="Enter athlete's full name"
                                type="text"
                                size="65"
                                name="search"
                                value={search.lastName}
                                onChange={_handleNameChange} />
                            <button className="btn blue">Search</button>
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
            {  show.isActive &&
            <Container title="title">
                <Row>
                    <Col size="md-2"/>
                    <Col size="md-8">
                        <h1 className="text-center">{athlete.strPlayer}</h1>
                    </Col>
                </Row>
            </Container>}
            {  show.isActive && <Container 
                title="stats">   
                <Row>
                    <Col size="md-4">
                        <Image className="adjust-picture img-fluid" 
                        placeholder="https://via.placeholder.com/25" 
                        src={athlete.strCutout} roundedCircle />
                    </Col>
                    <Col size="md-8">
                        <AthleteBio
                            data={athlete}
                        />
                    </Col>
                </Row>
            </Container> }
            {  show.isActive &&
            <Container title="no-background">
                <Row>
                    <Col size="md-12">
                        <button
                            className="btn blue"
                            id="add-athlete-btn"
                            onClick={_createAthleteInDB}

                        >Add athlete to the database</button>
                    </Col>
                </Row>
            </Container> }

        </>
    )
};