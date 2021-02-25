import React from 'react';
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
        <div class="form-outline">
        <input type="search" id="form1" class="form-control" placeholder="Type query"
        aria-label="Search" />
        </div>
    </Row>
    <Row>    
        <Col size="md-2"/>
        <Col size="md-8">
            <h1 className="text-center">CAUSES</h1>
        </Col>
        <Col size="md-2">
            <button className="like btn" type="button"><i className="fa fa-heart"></i></button>
            <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
        </Col>
    </Row>
</Container>

<Container>
<div className="row g-0">
  <div className="col-sm-6 col-md-8">CAUSES</div>

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

