import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import CharityDesc from "../components/CharityDesc";
import AthleteCauses from "../components/AthleteCauses";
import AthleteList from "../components/AthleteList";
import CharityURL from "../components/CharityURL";
import API from "../utils/API";
import "./style.css";

export default function SingleCharity() {
  const [athlete, setSingleAthletes] = useState();
  const [causes, setSingleCause] = useState();
  

  useEffect(() => {
     loadSingleCause()
  }, []);

  function loadSingleCause() {
    API.getSingleCause()
      .then((res) => {
        console.log(res);
        setSingleCause(res.data)
        loadSingleAthletes();
  });
  }

  function loadSingleAthletes() {
    API.getSingleAthletes()
      .then((res) => {
        console.log(res.data);
        setSingleAthletes(res.data)
  }); 
}

return (
  <>
    <Container title="title">
      <Row>
        <Col size="md-2" />
        <Col size="md-8">
          <h1 className="text-center">CHARITIES</h1>
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
          <AthleteList athlete={athlete}/>
        </Col>
        <Col size="md-6">
          <AthleteCauses causes={causes}/>
        </Col>
      </Row>
    </Container>
  </>
);
}
