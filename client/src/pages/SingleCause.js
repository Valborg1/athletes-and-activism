import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Row, Col, Container} from "../components/Grid";
import CausesDesc from "../components/CausesDesc";
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
import AthleteList from '../components/AthleteList'
import CausesURL from "../components/CausesURL"
import API from "../utils/API"
import "./style.css"


export default function SingleCause() {
    const [athletes, setAthletes] = useState(null)
    const [charities, setCharities] = useState(null)
    const [charity, setCharity] = useState(null)
    const [singleCause, setSingleCause] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        API.getSingleCause().then(res => setSingleCause(res.data)).catch(err => console.log(err))


        API.getCharities().then(res => setCharities(res.data)).catch(err => console.log(err))
        
        // API.getCharity(id).then(res => setCharity(res.data)).catch(err => console.log(err))


        API.getCauseAthletes(singleCause)
        .then(res => console.log("athleteResponse", res.data))
        .then(res => setAthletes(res.data))
        .catch(err => console.log(err))
    }, [])
    console.log("athletes", athletes)
    console.log("charities", charities)
    console.log("singleCause", singleCause)


    // export default function SingleCause() {
    //     const [singleCause, setSingleCause] = useState({})
    //     const {id}=useParams()
    //     useEffect(() => {
    //         API.getSingleCause(id)
    //         .then(res => setSingleCause(res.data))
    //         .catch(err => console.log(err))
    //     }, [])


    return (
        <>


            <Container title="title">
                <Row>
                    <Col size="md-2"/>
                    <Col size="md-8">
                        {/* <h1 className="text-center"> */}
                        {/* {
                            charities._id
                        // }</h1> */} </Col>
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
            <Container>
                <Row>
                    <CausesDesc name={singleCause}/>
                </Row>
            </Container>

            <Container>
                <Row>
                    <CausesURL></CausesURL>
                </Row>
            </Container>
            <Container title="no-background">
                <Row>
                    <Col size="md-6">
                        <AthleteList athletes={athletes}/>
                    </Col>
                    <Col size="md-6">
                        <AthleteCharities charities={charities}/>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
