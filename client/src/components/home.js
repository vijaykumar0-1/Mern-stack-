import React, { useState, useEffect } from 'react'
import Axios from 'axios'



export default function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5001/app/user").then((response) => {
            setUser(response.data)
        })
    }, []);



    return (
        <>
            <div className='container'>
                <h3>HI FROM Home page</h3>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-4'>
                        <h3>Name</h3>
                    </div>
                    <div className='col-4'>
                        <h3>Email</h3>
                    </div>
                </div>
                {
                    user.map((users) => {
                        return (
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <h4>{users.name}</h4>
                                    </div>
                                    <div className='col-8'>
                                        <h4>{users.email}</h4>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    );
}