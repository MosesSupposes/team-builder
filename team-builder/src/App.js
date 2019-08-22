import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import teamData from './data'

import TeamMemberList from './components/TeamMembers/TeamMemberList'
import NewTeamMemberForm from './components/Forms/NewTeamMemberForm'
import Navigation from './components/Navigation'

export default function App() {
  const [team, setTeam] = useState(teamData)

  const addNewTeamMember = (newMember) => {
    setTeam( team.concat(newMember) )
  }
  
  return (
    <div className="App">
      <h1>Team Builder</h1>

      <Navigation />

      <Route 
        exact 
        path="/" 
        render={props => <TeamMemberList {...props} teamMembers={team} />} 
      />
      <Route 
        path="/team/add" 
        render={props => <NewTeamMemberForm {...props} addNewTeamMember={addNewTeamMember}/>} 
      />
      
    </div>
  )
}

