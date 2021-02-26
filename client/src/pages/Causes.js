
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from '../components/Grid';
import CausesList from '../components/CausesList';
import API from '../utils/API'
import "./style.css"

export default function Causes() {

  const [causes, setCauses] = useState({})

    useEffect(() => {
        loadCauses()
    }, [])

    function loadCauses() {
        API.getAthletes()
            .then(res => {
              console.log(res)
                setCauses(res.data)
              })
    }
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
  {causes.length && causes?.map(cause => (
              <p>{cause.causes.causeType}</p>
            ))}
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

