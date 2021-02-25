
import React from "react";
import { Row, Col, Container } from "../components/Grid";
import { Form, Button } from "react-bootstrap";
import "./style.css";

import React from 'react';
// import { } from 'react-bootstrap/Image'
import { Row, Col, Container } from '../components/Grid';
import CausesList from '../components/CausesList';
import CausesDesc from '../components/CausesDesc';
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses';
import AthleteList from '../components/AthleteList'
import CausesURL from '../components/CausesURL';
import "./style.css"


export default function Causes() {
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
          <h1 className="text-6xl text-300 mb-4">Charity results</h1>
        </div>
      </section>
     
    </>
  );
}

    <Container title="title">
        <Row>
        <div class="form-outline">
        <input type="search" id="form1" class="form-control" placeholder="Type query"
        aria-label="Search" />
        </div>
    </Row>
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
<div className="row g-0">
  <div className="col-sm-6 col-md-8">CHARITY</div>

  <div className="col-6 col-md-4">POPULAR</div>
</div>
<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 border bg-light">{ CausesList }</div>
     
    </div>
    <div className="col">
      <div className="p-3 border bg-light">{}</div>
    </div>
  </div>
</div>
</Container>

</>


    

    );
}


