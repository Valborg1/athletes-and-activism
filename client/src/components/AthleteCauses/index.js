import React from 'react'
import {Container} from "../Grid"

export default function AthleteCauses() {
    return (
        <>
        <Container title="causes">
            <h1>CAUSES</h1>           
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
            </div>
        </Container>
        </>
    )
}
