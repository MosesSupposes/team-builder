import React from 'react'

export default function TeamMember(props) {
    const { name, email, role } = props.teamMember

    return (
        <div className="team-member">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}