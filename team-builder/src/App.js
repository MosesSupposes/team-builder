import React, { useState } from 'react'

import './App.css'
import teamData from './data'

export default function App() {
  const [team, setTeam] = useState(teamData)
  
  return (
    <div className="App">
      <h1>Team Builder</h1>
    </div>
  )
}

