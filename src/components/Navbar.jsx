import React, { useContext } from 'react'
import { context } from '../context/DataProvider'

export default function Navbar() {
    const {message,fullname}=useContext(context)
    return (
        <div>
            <h1>{message}</h1>
            <h1>{fullname}</h1>
        </div>
    )
}
