import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to={'/viewusers'} className='btn btn-dark' > View Users </Link >
            <Link to={'/adduser'} className='btn btn-dark' > Add User </Link >
        </div>
    )
}
