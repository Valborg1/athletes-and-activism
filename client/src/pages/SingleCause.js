import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import AthleteList from "../components/AthleteList";
import CharityList from "../components/CharityList";
import API from "../utils/API";
import "./style.css";

export default function SingleCause() {
  const [athletes, setCauseAthletes] = useState(null);
  const [charities, setCauseCharities] = useState(null);
  const [singleCause, setSingleCause] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadSingleCause();
    loadCauseAthletes();
    loadCauseCharities();
  }, []);

  function loadSingleCause() {
    API.getSingleCause(id)
      .then((res) => {
        console.log("single cause", res.data);
        return res.data;
      })
      .then((res) => setSingleCause(res))
      .catch((err) => console.log(err));
  }

  function loadCauseAthletes() {
    API.getCauseAthletes(id)
      .then((res) => {
        console.log("cause athletes", res.data);
        return res.data;
      })
      .then((res) => setCauseAthletes(res))
      .catch((err) => console.log(err));
  }

  function loadCauseCharities() {
    API.getCauseCharities(id)
      .then((res) => {
        console.log("cause charities", res.data);
        return res.data;
      })
      .then((res) => setCauseCharities(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container title="title">
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">{singleCause.category}</h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
      <Container title="no-background">
        <Row>
          <Col size="md-6">
            <AthleteList athletes={athletes} />
          </Col>
          <Col size="md-6">
            <CharityList charities={charities} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
