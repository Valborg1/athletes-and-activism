import React, { Fragment } from 'react'
import { Container } from "../Grid"
// import "../listStyle.css"

export default function CharityList
({charities}) {
    
    return (
       <div>
        <Container title="causes">
        {
            charities?.length > 0 ?
            <>{charities.map((charity) => {
                
                return (
            <a href={`/charities/${charity._id}`}>
                {charity.charity.charityName}</a>
                )
            })}</> 
    :<><h1>No Charity Found</h1></>
        }

        </Container>
       </div>
    )
}
