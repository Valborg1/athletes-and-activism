import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import AthleteList from "../components/AthleteList";
import CausesList from "../components/CausesList";
import CharityDesc from "../components/CharityDesc";
import CharityURL from "../components/CharityURL";

import API from "../utils/API";
import "./style.css";

export default function SingleCharity() {
  const [athletes, setCharityAthletes] = useState(null);
  const [causeId, setCauseId] = useState();
  const [cause, setCharityCause] = useState();
  const [singleCharity, setSingleCharity] = useState({
    charity: {
      charityName: "",
      charityImage: "",
      charityBio: "",
      charityURL: "",
    },
  });
  const { id } = useParams();

  useEffect(() => {
    loadSingleCharity();
    loadCharityCause(); //dependant on loadsinglecharity response
    loadCharityAthletes();
    
  }, []);

  // }).then(function(a,b,c) {
  //   console.log(a,b,c);
  // });...

  function loadSingleCharity() {
    API.getSingleCharity(id)
      .then((res) => {
        setCauseId(res.data.cause);
        return res.data;
      })
      .then((res) => setSingleCharity(res))
      .then((res) => {
        console.log("causeId", res.cause._id);
        return res.data;
      })
      // .then(
      //   loadCharityCause
      // )
      .catch((err) => console.log(err));
  }

  function loadCharityCause() {
    API.getCharityCause(causeId)
      .then((res) => {
        console.log("charity causes", res.data);
        return res.data;
      })
      .then((res) => setCharityCause(res))
      .catch((err) => console.log(err));
  }

  function loadCharityAthletes() {
    API.getCharityAthletes(id)
      .then((res) => {
        console.log("charity athletes", res.data);
        return res.data;
      })
      .then((res) => setCharityAthletes(res))
      .catch((err) => console.log(err));
  }

  // function loadCharityCauses() {
  //   API.getCharityCauses(id)
  //   .then(res => {
  //     console.log("charities cause", res.data)
  //         return res.data
  //     })
  //     .then(res => setCharityCauses(res))
  //     .catch(err => console.log(err))

  // }

  return (
    <>
      <Container title="title">
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">{singleCharity.charity.charityName}</h1>
          </Col>
          <Col size="md-2">
            {/* <button className="like btn" type="button">
              <i className="fa fa-heart"></i>
            </button>
            <button className="update btn" type="button">
            <i className="fa fa-plus"></i>
          </button> */}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <CharityDesc data={singleCharity.charity.charityBio} />
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <CharityURL data={singleCharity.charity.charityURL} />
        </Row>
      </Container>
      <Container title="no-background">
        <Row>
          <Col size="md-6">
            <AthleteList athletes={athletes} />
          </Col>
          <Col size="md-6">
            <CausesList causes={cause} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
