import React, { Fragment } from 'react'
import { Container } from "../Grid"

export default function AthleteList
({athletes}) {
    
    return (
       <div>
        <Container title="causes">
        {
            athletes?.length > 0 ?
            <>{athletes.map((athlete) => {
                
                return (
            <h1>{athlete.fullName}</h1>
                )
            })}</> 
    :<><h1>No Athlete Found</h1></>
        }

            {/* <h1>ATHLETES</h1>           
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
                <div><a className="causeLink" href="">Column 1</a></div>
            </div> */}
        </Container>
       </div>
    )
}
