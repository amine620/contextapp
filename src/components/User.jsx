import React, { useContext } from 'react'
import { context } from '../context/DataProvider'

export default function User(props) {
    const {deleteUser}=useContext(context)
    return ( 
        <div className='col-md-4 mt-2'>
            <ul  className='list-group'>
                <li className='list-group-item'>{props.data.name}</li>
                <li className='list-group-item'>{props.data.email}</li>
                <li className='list-group-item'>{props.data.phone}</li>  
                <li className='list-group-item'>
                    <button onClick={()=>deleteUser(props.data.id)} className="btn btn-danger">
                        delete
                    </button>
                </li>  
            </ul>
        </div>
    )
}
