import React, { useState, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { counter } from '../App'


const Home = () => {


    const val = useContext(counter)

    let users = [
        { id: 1, name: 'jack', email: 'jack@gmail.com' },
        { id: 2, name: 'peter', email: 'peter@gmail.com' },
        { id: 3, name: 'tony', email: 'tony@gmail.com' },
        { id: 4, name: 'steve', email: 'steve@gmail.com' },
    ]

    return (
        <div className='div'>

            <h1>Home Page</h1>

            {
                users.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`user/${item.id}`} state={item} className='Link'><h2>{item.name}</h2></Link>
                        </div>
                    )
                })
            }

            <Outlet />

            <div>
                <h4>UseContext Example</h4>

                <button onClick={() => val.setCount((count) => count + 1)}>
                    {val.count}
                </button>
            </div>



        </div>
    )
}

export default Home
