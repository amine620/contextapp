import React, { useContext } from 'react'
import { context } from '../context/DataProvider';
import User from './User';

export default function Users() {
    const {users}=useContext(context)

    console.log(users);
    return (
        <div className='container mt-2'>
            <div className="row">
            {
                users.map(user=>(
                    <User data={user} />
                ))
            }
            </div>
        </div>
    )
}
