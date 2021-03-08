import React, { Fragment } from 'react'
import { Container } from "../Grid"

export default function AthleteList
({athletes}) {
    
    return (
       <div>
        <Container title="causes">
        <h4>Athletes</h4>
        {
            athletes?.length > 0 ?
            <>{athletes.map((athlete) => {
                
                return (
            <p><a href={`/add-athlete/${athlete.playerid}`}>
                {athlete.fullName}</a></p>
                )
            })}</> 
    :<><h1>No Athlete Found</h1></>
        }

        </Container>
       </div>
    )
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