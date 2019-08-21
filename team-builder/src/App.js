import React, { useState } from 'react'

import './App.css'
import teamData from './data'

import TeamMemberList from './components/TeamMembers/TeamMemberList'
import NewTeamMemberForm from './components/Forms/NewTeamMemberForm'

export default function App() {
  const [team, setTeam] = useState(teamData)

  const addNewTeamMember = (newMember) => {
    setTeam( team.concat(newMember) )
  }
  
  return (
    <div className="App">
      <h1>Team Builder</h1>

      <NewTeamMemberForm addNewTeamMember={addNewTeamMember}/>
      <TeamMemberList teamMembers={team} />
    </div>
  )
}

