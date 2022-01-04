import axios from 'axios';
import React, { createContext,  useEffect, useState} from 'react'



export const context=createContext()

export default function DataProvider(props) {

    const [users,setusers]=useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setusers(res.data)
        })
    }, []);


    function deleteUser(id){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>{
            const data=users.filter(user=>user.id!=id)
            setusers(data)
        })
    }

    function addUser(user)
    {
         
    }

    const message='hi from context'
    const fullname='mourid amine'
    return (
        <div>
            <context.Provider value={{
                message,
                fullname,
                users,
                deleteUser,
                addUser
                }}>

                {
                    props.children
                }
            </context.Provider>
        </div>
    )
}
