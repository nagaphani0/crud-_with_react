import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import { addUser, editUser } from './store/MySlices';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function AddUser() {
  const nav = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch(addUser(
      {
        id: uuidv4(),
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        dob: e.target.dob.value,
        gender: e.target.gender.value
      }
    ));
    nav('/viewusers');
  }
  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit} className=' d-flex row col-5 justify-content-center align-content-center'>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          name="dob"
          type='date'
        />
        <label >
          Male
          <input type='radio' name='gender' value={'male'} />
          <label >
          </label>
          Female
          <input type='radio' name='gender' value={'female'} />
        </label>

        <button className='btn btn-dark' type="submit">
          Add User'</button>

      </form>
    </div>
  );
}



export function EditUsers() {
  const dispatch = useDispatch()
  const nav = useNavigate()

  const { id } = useParams();

  // const formData = useSelector((state) => state.user.formData);
  // // debugger
  // const filteredId = formData.filter(data => data.id == id)
  const handleEdit = (e) => {
    dispatch(editUser({
      id: id,
      updatedUser: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        dob: e.target.dob.value,
        gender: e.target.gender.value
      }

    }));
    nav('/viewusers')
  }

  return (
    <div className="container m-5">
      <form onSubmit={handleEdit} className=' d-flex row col-5 justify-content-center align-content-center'>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
        // value={filteredId.firstName}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
        // value={filteredId.lastName}

        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          name="dob"
          type='date'
        />
        <label >
          Male
          <input type='radio' name='gender' value={'male'} />
          <label >
          </label>
          Female
          <input type='radio' name='gender' value={'female'} />
        </label>

        <button className='btn btn-dark' type="submit">
          Update</button>

      </form>
    </div>
  )
}
