import React, { Fragment } from 'react'
import { Container } from "../Grid"
// import "./listStyles.css"
// import "./style.css"

export default function AthleteList
({athletes}) {
    
    return (
       <div>
        <Container title="causes">
        {
            athletes?.length > 0 ?
            <>{athletes.map((athlete) => {
                
                return (
            <a href={`/add-athlete/${athlete.playerid}`}>
                {athlete.fullName}</a>
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