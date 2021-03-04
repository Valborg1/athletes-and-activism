import React from 'react'
import {Container} from "../Grid"

export default function AthleteCharities({charities}) {
    
    
    console.log("test", charities)
    return (
        <>
            <div>
                <Container title="charities">
                    {
                    charities ?. length > 0 ? <>{
                        charities.map((charity) => {
                            console.log("charity", charity)
                            return (
                                <h1>{
                                    charity.charity.charityName
                                }</h1>
                            )
                        })
                    }</> : <>
                        <h1>No Charities Found</h1>
                    </>
                }


                    {/* <h1>CHARITIES</h1>
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
                <div><a className="charityLink" href="/">Example Charity</a></div>
            </div> */} </Container>
            </div>
        </>
    )
}
