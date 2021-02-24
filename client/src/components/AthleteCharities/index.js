import React from 'react'
import {Container} from "../Grid"

export default function AthleteCharities() {
    return (
        
        <Container title="charities">
            <h1>CHARITIES</h1>
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="charityLink" href="1">Example Charity</a></div>
                <div><a className="charityLink" href="2">Example Charity</a></div>
                <div><a className="charityLink" href="3">Example Charity</a></div>
                <div><a className="charityLink" href="4">Example Charity</a></div>
                <div><a className="charityLink" href="5">Example Charity</a></div>
                <div><a className="charityLink" href="6">Example Charity</a></div>
                <div><a className="charityLink" href="7">Example Charity</a></div>
                <div><a className="charityLink" href="8">Example Charity</a></div>
                <div><a className="charityLink" href="9">Example Charity</a></div>
            </div>
        </Container>
        
    )
}
