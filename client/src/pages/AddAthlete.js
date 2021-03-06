import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import AthleteBio from "../components/AthleteBio";
import AthleteCharities from "../components/AthleteCharities";
import AthleteCauses from "../components/AthleteCauses";
import imagePath from "../../src/images/defaultPerson.png";
import Image from "react-bootstrap/Image";
import CharityResponse from "../components/CharityResponse"
import "./style.css";
import AthleteBars from "../components/AthleteBars";
import API from "../utils/API";

export default function AddAthlete() {
  const { id } = useParams()


  const [show, setShow] = useState(false);
  const [charitySearch, setCharitySearch] = useState("");
  const [charities, setCharities] = useState([]);
  const [selectedCharity, setSelectedCharity] = useState("");
  const [athlete, setAthlete] = useState(
    {  
      playerid: "",
      fullName: "",
      image: "",
      sport: "",
      team: "",
      dob: "",
      bio: "",
      charities: []
    }
  )
  
  const [favAthlete, setFavAthlete] = useState(null)

  useEffect(() => {
    getAthlete()
  }, [])

  function handleAdd() {
  
    API.addFavAthlete(athlete._id)
      .then(res => {
        console.log("Fav Athlete", res.data)
        return res.data
      })
      .then(res => setFavAthlete(res), alert("Athlete added to favorites"))
      .catch(err => console.log(err))
  }


  function getAthlete() {
    API.getAthlete(id)
      .then(res => {
        console.log("single athlete res", res.data)
        
        return res.data
      })
      .then(res => setAthlete(res))
      .catch(err => console.log(err))
  }

  const handleClose = () => {
    setShow(false)
    setCharities([])
    setCharitySearch("")
  }

  const handleShow = () => setShow(true);

  function findCharities(event) {
    event.preventDefault();

    API.searchCharities(charitySearch)
      .then((res) => setCharities(res.data))
      .then(console.log("charities", charities))
      .catch((err) => console.log(err));
  }

  function handleChange(event) {
    setCharitySearch(event.target.value);
  }

  function selectCharity(id) {
    setSelectedCharity(id)
  }

  function addCharityToAthlete() {
    let newCharityData = charities.filter((charity => {
      return charity.ein === selectedCharity
    }))

    let data = {
      charityName: newCharityData[0].charityName,
      charityImage: newCharityData[0].cause.image,
      charityBio: newCharityData[0].mission,
      charityURL: newCharityData[0].websiteURL,
      cause: newCharityData[0].category.categoryName,
      playerid: id
    }
    // setCharityData(data)

    API.addCharityAndCauseData(data)
      .then(getAthlete)
      // .then((res) => setCharities(res.data))
      // .then(console.log("charities", charities))
      .catch((err) => console.log(err));


    console.log("charity data test", data)

    handleClose();
  }

  return (
    <>
      <Container title="title">
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">{athlete.fullName}</h1>
          </Col>
          <Col size="md-2">
            <button className="like btn icon" onClick={handleAdd} type="button">
              <i className="fa fa-heart"></i>
            </button>
            <button className="update btn icon" type="button">
              <i className="fa fa-plus"></i>
            </button>
          </Col>
        </Row>
      </Container>
      <Container title="stats">
        <Row>
          <Col size="md-4">
            <Image alt="Athlete Image" src={athlete.image ? athlete.image : imagePath} roundedCircle />
          </Col>
          <Col size="md-4">
            <AthleteBio
              data={athlete}
            />
          </Col>
          <Col size="md-4">
            <AthleteBars 
              data={athlete.charities}
            />
          </Col>
        </Row>
      </Container>
      <Container title="no-background">
        <Row>
          <Col size="md-6">
            <AthleteCharities charities={athlete.charities} />
          </Col>
          <Col size="md-6">
            <AthleteCauses data={athlete.charities} />
          </Col>
        </Row>
      </Container>

      <Container title="no-background">
        <Row>
          <Col size="md-12">
            <button className="addCC btn btn-primary" onClick={handleShow}>
              Add Charity and Causes Information
            </button>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Charity and Causes Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row className="align-items-center">
              <Col size="md-10">


                <Form.Label>Search for a Charity</Form.Label>
                <Form.Control
                  type="search"
                  placeholder="charity name"
                  onChange={handleChange}
                  value={charitySearch}
                />

              </Col>

              <Col size="md-2">
                <Button
                  id="searchbtn"
                  variant="primary"
                  type="submit"
                  onClick={findCharities}
                >
                  Search
              </Button>
              </Col>

            </Form.Row>
          </Form>
          <br />

          <ButtonGroup toggle>
            {charities.length ? (
              <div>
                {charities.map(charity => (
                  <CharityResponse
                    id={charity.ein}
                    name={charity.charityName}
                    tagline={charity.tagLine}
                    img={charity.cause.image}
                    mission={charity.mission}
                    url={charity.websiteURL}
                    selectedCharity={selectedCharity === charity.ein}
                    onClick={selectCharity}
                  >
                  </CharityResponse>
                ))}
              </div>
            ) : (
              <div />
            )}
          </ButtonGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={addCharityToAthlete}>
            Add This Information
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
