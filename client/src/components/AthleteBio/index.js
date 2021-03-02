import React from 'react'

export default function AthleteBio(props) {
    return (
        <div className="padding-10">
            <p><b>Sport:</b> {props.sport}</p>
            <p><b>Team:</b> {props.team}</p>
            <p><b>Birthdate:</b> {props.birth}</p>
            <p><b>Bio:</b>{props.description}</p>
        </div>
    )
}
