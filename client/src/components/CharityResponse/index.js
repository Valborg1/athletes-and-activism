import React, { useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap'
import {Container, Col, Row} from '../Grid'
import './style.css'

export default function CharityResponse(props) {


    return (
        <>
 
        <Container title={props.selectedCharity ? "bg-selected" : ""}>  
        <div onClick={() => props.onClick(props.id)}>  
            <Row>
                <Col size="md-12">
                    <img src={props.img}></img>
                    <h5>{props.name}</h5>
                    <p>{props.tagline}</p>
                    
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    {props.mission}
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <a href={props.url}>{props.url}</a>
                </Col>
            </Row>
            </div>
        </Container>
        
        </>
    )
}