import React from 'react'
import {Container} from "../Grid"

export default function AthleteCharities({charities}) {

    return (
        <div>
         <Container title="causes">
         {
             charities?.length > 0 ?
             <>{charities.map((charity) => {
                 
                 return (
             <h1>{charity.charity.charityName}</h1>
                 )
             })}</> 
     :<><h1>No Charity Found</h1></>
         }
 
         </Container>
        </div>
     )
 }

{/* // <>
        // <Container title="charities">
        //     <h1>CHARITIES</h1>
        //     <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //         <div><a className="charityLink" href="/">Example Charity</a></div>
        //     </div>
        // </Container>
        // </> */}
