import React, { useContext } from 'react'
import { context } from '../context/DataProvider'

export default function Page() {

    const {message}=useContext(context)

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}
