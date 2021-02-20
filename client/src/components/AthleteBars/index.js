import React from 'react'
import {Container} from "../Grid"

export default function AthleteBars() {
    return (
        <>
            {/* <p>CHARITIES</p> */}
            <Container title="skills">
            <div className="skills charitiesBar" style={{width: "90%"}}><b>CHARITIES: 5+</b></div>
            </Container>

            {/* <p>CAUSES</p> */}
            <Container title="skills">
            <div className="skills causesBar" style={{width: "50%"}}><b>CAUSES</b></div>
            </Container>
        </>
    )
}