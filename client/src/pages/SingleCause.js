import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import CausesDesc from "../components/CausesDesc";
import AthleteCharities from "../components/AthleteCharities";
import AthleteCauses from "../components/AthleteCauses";
import AthleteList from "../components/AthleteList";
import CausesURL from "../components/CausesURL";
import API from "../utils/API";
import "./style.css";

export default function SingleCause() {
  const [athletes, setAthletes] = useState(null);
  const [causes, setCauses] = useState(null);
  const [singleCause, setSingleCause] = useState({});
  const { id } = useParams();
  
  
  useEffect(() => {
        loadSingleAthlete()
    }, []);

    function loadSingleAthlete() {
        API.getAthletes()
        .then((res) => {
            console.log("athlete", res.data);
            setAthletes(res.data)
            loadSingleCharity();
        });
    }

    function loadSingleCharity() {
        API.getCharities().then((res) => {
            console.log("SingleCharity", res.data);
            setCauses(res.data);
          });
        }
   

    

    
  
  
 

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
          <Col size="md-2" />
          <Col size="md-8">
          <h1 className="text-center">CAUSES</h1>
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
      <Container>
        <Row>
          <CausesDesc causes={causes}/>
        </Row>
      </Container>

      <Container>
        <Row>
          <CausesURL causes={causes}/>
        </Row>
      </Container>
      <Container title="no-background">
        <Row>
          <Col size="md-6">
            <AthleteList athletes={athletes} />
          </Col>
          <Col size="md-6">
            <AthleteCharities 
             />
          </Col>
        </Row>
      </Container>
    </>
  );
}


// API.getSingleCause(id)
// .then((res) => setSingleCause(res.data))
// .catch((err) => console.log(err));

// API.getCharities({})
// .then((res) => setCharities(res.data))
// .catch((err) => console.log(err));

//   .catch((err) => console.log(err));