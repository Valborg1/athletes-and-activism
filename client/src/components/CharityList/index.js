import React, { Fragment } from 'react'
import { Container } from "../Grid"

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