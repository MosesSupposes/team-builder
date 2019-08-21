import React, { useState } from 'react'
import uuid from 'uuid'

export default function NewTeamMemberForm(props) {
    const [newTeamMember, setNewTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = event => {
        setNewTeamMember({ ...newTeamMember, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        props.addNewTeamMember({
            ...newTeamMember,
            id: uuid()
        })
        setNewTeamMember({name: '', email: '', role:''})
    }
    
    return (
        <>
        <h2>Add a new Team Member</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="name"
                value={newTeamMember.name}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="email"
                placeholder="email"
                value={newTeamMember.email}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="role"
                placeholder="role"
                value={newTeamMember.role}
                onChange={handleChange}
            />
            
            <button role="submit">Submit</button>
        </form>
        </>
    )
}