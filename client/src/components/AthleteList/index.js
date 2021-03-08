import React, { Fragment } from 'react'
import { Container } from "../Grid"
// import "./listStyles.css"
import "./style.css"

export default function AthleteList
({athletes}) {
    
    return (
       <div >
        <Container title="causes"id="athlete">
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

