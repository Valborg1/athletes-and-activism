import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import CharityDesc from "../components/CharityDesc";
import AthleteCharities from '../components/AthleteCharities'
import AthleteList from '../components/AthleteList'
import CharityURL from "../components/CharityURL";
import API from "../utils/API";
import "./style.css"

export default function SingleCharity() {
const [athletes, setAthletes] = useState(null)
const [charities, setCharities] = useState(null)
const [causes, setCauses] = useState({});
const [singleCause, setSingleCause] = useState({})
const [charity, setCharity] = useState(null)

const {id} = useParams()

useEffect(() => {
    API.getCauses()
    .then(res =>  setCauses(res.data))
    .catch((err) => console.log(err))

    API.getCharity(id)
        .then((res) => setCharity(res.data))
        .catch((err) => console.log(err))
    
    API.getathlete({})
    .then((res) => setAthletes(res.data))
    .catch((err) => console.log(err))
}, [])

// function loadCharity(){
//     API.getCharity()
//     .then(res => {
//       console.log(res)
//       setCharity(res.data)
//     })
// }


    return (
    <>
        <Container title="title">
            <Row>    
            <Col size="md-2"/>
            <Col size="md-8">
                <h1 className="text-center">CHARITIES</h1>
            </Col>
            <Col size="md-2">
            <button className="like btn" type="button"><i className="fa fa-heart"></i></button>
            <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
            </Col>
            </Row>
        </Container>
<Container>
    <Row>
        <CharityDesc />
    </Row>
    </Container>
    <br></br>
    <Container>
    <Row>
        <CharityURL></CharityURL>
    </Row>
    </Container>
    <Container title="no-background">
            <Row>
                <Col size="md-6">
                <AthleteList athletes={athletes}/>
                </Col>
                <Col size="md-6">
                    <AthleteCharities charity={charity}/>
                </Col>
            </Row>
            </Container>
    
</>
    );
}