import React from 'react'

export default function AthleteBio(props) {
const {data} = props
    return (
        <div className="padding-10">
            <p><b>Sport:</b> {data.sport}</p>
            <p><b>Team:</b> {data.team}</p>
            <p><b>Birthdate:</b> {data.dob}</p>
            <p><b>Bio:</b>{data.bio}</p>
        </div>
    )
}
