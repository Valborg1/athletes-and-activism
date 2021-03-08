import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "./style.css";

export default function Causes() {
  const [causes, setCauses] = useState({});

  useEffect(() => {
    loadCauses();
  }, []);

  function loadCauses() {
    API.getCauses().then((res) => {
      console.log(res);
      setCauses(res.data);
    });
  }


  return (
    <>
      <Container title="title">
        <Row >
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">CAUSES</h1>
          </Col>
          <Col size="md-2">
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
          <h1 className="text-6xl text-300 mb-4 text-white">Cause results</h1>
          {/*         
        app.get('/api', (req, res) => {
          causesSeed.find({}, (err, data) => {
            res.json(data);
          })
        }); */}

          <div>
            {causes.length &&
              causes?.map((cause) => (
                <h2>
                  {" "}
                  <a href={`/causes/${cause._id}`} id={cause._id}>
                    {cause.category}
                  </a>
                </h2>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
