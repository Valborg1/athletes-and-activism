import React from 'react'
import "./style.css"

export default function CausesURL({data}) {
    return (
        <div>
            <a href={data} target="_blank">
                {data}
            </a>
        </div>
    )
}
