import React from 'react'
import {Container} from "../Grid"

export default function AthleteCauses({data}) {
    // const data =  {charities}

    console.log("data", {data})
    return (
        <div>
         <Container title="causes">
             <h4>Causes</h4>
         {
             data?.length > 0 ?
             <>{data.map((item) => {
                 
                 return (
             <p><a href={`/causes/${item.cause[0]._id}`}>{item.cause[0].category}</a></p>
                 )
             })}</> 
     :<><h1>No Charity Found</h1></>
         }
 
         </Container>
        </div>
     )
 }
