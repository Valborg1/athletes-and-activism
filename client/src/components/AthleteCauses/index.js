import React from 'react'
import Row from '../Row'

export default function AthleteCauses() {
    return (
        <Row>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div>
                <div><a href="">Column 1</a></div> 
            </div>
        </Row>
    )
}
