import React, { useState } from 'react'

import './App.css'
import teamData from './data'

import TeamMemberList from './components/TeamMembers/TeamMemberList'
import NewTeamMemberForm from './components/Forms/NewTeamMemberForm'

export default function App() {
  const [team, setTeam] = useState(teamData)
  
  return (
    <div className="App">
      <h1>Team Builder</h1>

      <NewTeamMemberForm />
      <TeamMemberList teamMembers={team} />
    </div>
  )
}

