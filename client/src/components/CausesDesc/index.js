import React from 'react'
import { Container } from "../Grid"

export default function CausesDesc({causes}) {
    return (
        <div>
         <Container title="causes">
         {
             causes?.length > 0 ?
             <>{causes.map((cause) => {
                 
                 return (
             <h1>{cause._id}</h1>
                 )
             })}</> 
     :<><h3>No Bio Found</h3></>
         }
 
         </Container>
        </div>
     )
 }