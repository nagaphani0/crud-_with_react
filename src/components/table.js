import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import { deleteUser, editUser } from './store/MySlices';


export default function ViewUsers() {

    const formData = useSelector((state) => state.user.formData);
    const dispatch = useDispatch()
    console.log('viewusers', formData);
    // debugger
    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((user) => (<tr>
                        <th scope="row" key={user.id} >{user.id}</th>
                        <td >{user.firstName}</td>
                        <td >{user.lastName}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>
                            <Link className='btn btn-danger' to={`/updateuser/${user.id}`} >Edit
                            </Link>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() => handleDelete(user.id)} >Delete </button> </td>
                    </tr>))
                    }
                </tbody>
            </table>
            <Link to={'/adduser'} className='btn btn-dark' > Add User </Link >
        </div>
    )
}

