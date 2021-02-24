import React from 'react'
import {Container} from "../Grid"

export default function AthleteList
() {
    return (
        <>
        <Container title="causes">
            <h1>ATHLETES</h1>           
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="causeLink" href="1">Column 1</a></div>
                <div><a className="causeLink" href="2">Column 1</a></div>
                <div><a className="causeLink" href="3">Column 1</a></div>
                <div><a className="causeLink" href="4">Column 1</a></div>
                <div><a className="causeLink" href="5">Column 1</a></div>
                <div><a className="causeLink" href="6">Column 1</a></div>
                <div><a className="causeLink" href="7">Column 1</a></div>
                <div><a className="causeLink" href="8">Column 1</a></div>
            </div>
        </Container>
        </>
    )
}
