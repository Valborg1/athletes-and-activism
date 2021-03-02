import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import { Row, Col, Container } from "../components/Grid";
import AthleteBio from "../components/AthleteBio";
import imagePath from "../../src/images/patrick.png";
import Image from "react-bootstrap/Image";
import CharityResponse from "../components/CharityResponse"
import "./style.css";
import AthleteBars from "../components/AthleteBars";
import CharityResponse from "../components/CharityResponse";
// import API from "../utils/API";

export default function AddAthlete(props) {
  const [show, setShow] = useState(false);
  const [charitySearch, setCharitySearch] = useState("");
  const [charities, setCharities] = useState([]);
  const [selectedCharity, setSelectedCharity] = useState(null);

  const handleClose = () => {
    setShow(false)
    setCharities([])
    setCharitySearch("")
  }
  
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //     findCharities()
  //   }, [])

  //   Search all charities
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

  return (
    <>
      <Container title="title">
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">PATRICK MAHOMES</h1>
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
      <Container title="stats">
        <Row>
          <Col size="md-4">
            <Image alt="Patrick" src={imagePath} roundedCircle />
          </Col>
          <Col size="md-4">
            <AthleteBio />
          </Col>
          <Col size="md-4">
            <AthleteBars />
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
          <br/>
          
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
            <div/>
            )}
          </ButtonGroup>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Add This Information
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
