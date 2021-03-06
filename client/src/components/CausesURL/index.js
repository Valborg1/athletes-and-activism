import React from 'react'
import {Container} from "../Grid"

export default function CharityURL({charities}) {
    return (
        <div>
            <Container title="causes">
                {
                charities ?. length > 0 ? <>{
                    charities.map((charity) => {

                        return (
                            <h1>{
                                charity.charity.charityURL
                            }</h1>
                        )
                    })
                }</> : <>
                    <h3>No URL Found</h3>
                </>
            } </Container>
        </div>
    )
}
