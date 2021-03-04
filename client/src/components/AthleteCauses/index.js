import React from 'react'
import { Container } from "../Grid"


export default function AthleteCauses({causes}) {
    console.log("test", causes)
    return (
        <>
        <div>
        <Container title="causes">
            {
                causes ?. length > 0 ? <>{
                    causes.map((cause) => {
                        console.log(causes)
                        return (
                            <h1>{
                                cause.causeName
                                }</h1>
                        )
                    })
                }</> : <>
                <h1>No Charities Found</h1>
                </>
            }
            {/* <h1>CAUSES</h1>           
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
                <div><a className="causeLink" href="/">Column 1</a></div>
            </div> */}
        </Container>
        </div>
        </>
    )
}
