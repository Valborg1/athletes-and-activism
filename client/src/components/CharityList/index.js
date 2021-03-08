import React, { Fragment } from 'react'
import { Container } from "../Grid"
// import "../listStyle.css"

export default function CharityList
({charities}) {

    console.log("charity data test", {charities})
    
    return (
       <div>
        <Container title="causes">
        <h4>Charities</h4>
        {
            charities?.length > 0 ?
            <>{charities.map((charity) => {
                
                return (
            <p><a href={`/charities/${charity._id}`}>
                {charity.charity.charityName}</a></p>
                )
            })}</> 
    :<><h1>No Charity Found</h1></>
        }

        </Container>
       </div>
    )
}
