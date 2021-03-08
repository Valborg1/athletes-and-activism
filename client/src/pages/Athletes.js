import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid"
import API from "../utils/API";
import { Form, Button } from "react-bootstrap";
import "./style.css";

export default function Athletes(props) {
    const [athletes, setAthletes] = useState({})

    const { id } = useParams();

    useEffect(() => {
        loadAthletes()
    }, [])

    function loadAthletes() {
        API.getAthletes().then((res) => {
            console.log(res);
            setAthletes(res.data);
        });
    }

    return (
        <>
        {console.log(athletes)}
            <Container title="title">
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <h1 className="text-center">ATHLETE NAME</h1>
                    </Col>
                    <Col size="md-2">
                    </Col>
                </Row>
            </Container>

            <section className="rounded-m shadow-xl lg:flex p-20">
                <div className="p-10 lg:pt-48 container mx-auto relative">
                    <h1 className="text-6xl text-300 mb-4">Athletes:</h1>
                    <div>
                        {athletes.length &&
              athletes?.map((athlete) => (
                <h2>
                  {" "}
                  <a href={`/add-athlete/${athlete.playerid}`} id={athlete.playerid}>
                    {athlete.fullName}
                  </a>
                </h2>
              ))}
                    </div>
                </div>
            </section>
        </>
    );
}