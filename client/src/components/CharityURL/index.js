import React from 'react'

export default function CausesURL({data}) {
    return (
        <div>
            <a href={data} target="_blank">
                {data}
            </a>
        </div>
    )
}
