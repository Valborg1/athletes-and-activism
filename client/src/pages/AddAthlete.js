import React, { useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import {Row, Col, Container} from "../components/Grid"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import Image from 'react-bootstrap/Image'
import "./style.css"
import AthleteBars from '../components/AthleteBars'


export default function AddAthlete(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
        <Container title="title">
            <Row>    
                <Col size="md-2"/>
                <Col size="md-8">
                    <h1 className="text-center">PATRICK MAHOMES</h1>
                </Col>
                <Col size="md-2">
                    <button className="like btn" type="button"><i className="fa fa-heart"></i></button>
                    <button className="update btn" type="button"><i className="fa fa-plus"></i></button>
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
                    <AthleteBars/>
                </Col>
            </Row>
            </Container>
            
            <Container title="no-background">
                
            <Row>
                <Col size="md-12">
                <button className="addCC btn btn-primary" onClick={handleShow}>Add Charity and Causes Information</button>
                </Col>
            </Row>
            </Container>
            <Container title="no-background">
            <Row>
                <Col size="md-12">
                <button className="saveCC btn btn-info">Save</button>
                <button className="cancelCC btn btn-secondary">Cancel</button>
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
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Saerch for a Charity</Form.Label>
                        <Form.Control type="search" placeholder="charity name" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                    </Form>
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
    )
}
