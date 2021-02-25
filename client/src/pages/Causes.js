import React from "react";
import { Row, Col, Container } from "../components/Grid";
import CausesList from "../components/CausesList";
import CausesDesc from "../components/CausesDesc";
import AthleteCharities from "../components/AthleteCharities";
import AthleteCauses from "../components/AthleteCauses";
import AthleteList from "../components/AthleteList";
import CausesURL from "../components/CausesURL";
import PopCauses from "../components/PopCauses";
// import Form from 'react-bootstrap/Form'
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "./style.css";

export default function Causes() {
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

  
      <section className="rounded-m shadow-xl lg:flex p-20">
        <Container>
          <Row>
            <Col size="md-12">
              <Form>
                <Form.Row className="align-items-center">
                  <Col size="md-1" />
                  <Col size="md-9">
                    <Form.Label htmlFor="causesFilter" srOnly>
                      Name
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="causesFilter"
                      placeholder="Filter Causes"
                    />
                  </Col>

                  <Col size="md-2">
                    <Button type="submit" className="mb-2">
                      Filter
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
        <div className="p-10 lg:pt-48 container mx-auto relative">
          <h1 className="text-6xl text-300 mb-4">Cause results</h1>
        </div>
      </section>
     
    </>
  );
}
