import React, { Fragment } from 'react'
import { Container } from "../Grid"

export default function CharityList
({causes}) {

    console.log("causes data test", {causes})
    
    return (
       <div>
        <Container title="causes">
        <h4>Causes</h4>
        {
            causes?.length > 0 ?
            <>{causes.map((cause) => {
                
                return (
            <p><a href={`/causes/${cause._id}`}>
                {cause.category}</a></p>
                )
            })}</> 
    :<><h1>No Causes Found</h1></>
        }

        </Container>
       </div>
    )
}
