import React from 'react'
import {Container} from "../Grid"

export default function AthleteBars({data}) {
let len = data.length;

var dynamicWidth = 'calc(400% / ' + len + ')'

return (

    <>
    <Container title="skills">
    <div className="skills charitiesBar" style={{width: dynamicWidth, maxWidth: "100%"}}><b>CHARITIES: {len}</b></div>
    </Container>

    <Container title="skills">
    <div className="skills causesBar" style={{width: dynamicWidth, maxWidth: "100%"}}><b>CAUSES: {len}</b></div>
    </Container>
    </>

 )
}



