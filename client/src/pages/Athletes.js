import React from 'react'
import Row from "../components/Row"
import Col from "../components/Col"
import Container from "../components/Container"
import AthleteBio from "../components/AthleteBio"
import imagePath from "../../src/images/patrick.png"
import Image from 'react-bootstrap/Image'
import AthleteCharities from '../components/AthleteCharities'
import AthleteCauses from '../components/AthleteCauses'
export default function Athletes(props) {
    return (
        <Container>
            <Row>
                <Col size="md-5">
                    <h1 className="text-center">Athlete Name</h1>
                </Col>
                <Col size="md-5" />
                <Col size="md-2">
                    <div>Like Button</div>
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <Image alt="Patrick" src={imagePath} roundedCircle />
                </Col>
                <Col size="md-4">
                    <AthleteBio />
                </Col>
                <Col size="md-4">
                    <Row>
                        <button>CHARITIES</button>
                    </Row>
                    <Row>
                        <button>CAUSES</button>
                    </Row>
                </Col>
            </Row>
            <h1>CHARITIES</h1>
            <AthleteCharities />
            <h1>CAUSES</h1>
            <AthleteCauses />
        </Container>
    )
}
