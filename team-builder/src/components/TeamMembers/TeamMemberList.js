import React from 'react'

import TeamMember from './TeamMember'

export default function TeamMemberList(props) {
    return (
        <div className="team-member-list">
            {props.teamMembers.map(function renderTeamMembers(teamMember, index) {
                return <TeamMember key={index} teamMember={teamMember} />
            })}
        </div>
    )
}