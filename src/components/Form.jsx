import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { context } from '../context/DataProvider'

export default function Form() {
    const {addUser}=useContext(context)
    const [user,setuser]=useState({})

    const handleChange=(e)=>{
            setuser({
                ...user,
               [e.target.name]:e.target.value
            })
    }
    return (
        <div className='container mt-5'>
            <div className="form-group">
                <input name='name' onChange={handleChange} placeholder='name' type="text" className="form-control mt-2" />
                <input name='email' onChange={handleChange} placeholder='email' type="text" className="form-control mt-2" />
                <input name='phone' onChange={handleChange} placeholder='phone' type="text" className="form-control mt-2" />
                <button onClick={()=>addUser(user)} className="form-control btn btn-success mt-2">add new</button>
            </div>
        </div>
    )
}
